#define F_CPU 16000000UL
#define EEPROM_PIN_ADDR ((uint8_t*)0) // Adres EEPROM dla PINu
#include <avr/io.h>
#include <util/delay.h>
#include <stdint.h>
#include <string.h>
#include <avr/eeprom.h>
#include <avr/interrupt.h>

// Obsługa mechanizmu Servo,
void servo_pwm_init() {
    DDRB |= (1 << PB1); // D9 
    // Tryb Fast PWM, TOP = ICR1 dla 50 Hz
    TCCR1A = (1 << COM1A1) | (1 << WGM11);
    TCCR1B = (1 << WGM13) | (1 << WGM12) | (1 << CS11);
    ICR1 = 39999; 
}
void servo_pwm_set_position(uint8_t open) {
    uint16_t pulse;
    if (open) {
        pulse = 5100; // 2 ms (pełne otwarcie)
    } else {
        pulse = 2000; // 1 ms (pełne zamknięcie)
    }
    OCR1A = pulse;
}

// Obsługa pamięci EEPROM
void read_pin_from_eeprom(char* pin) {
    eeprom_read_block((void*)pin, EEPROM_PIN_ADDR, 4);
}
void write_pin_to_eeprom(const char* pin) {
    eeprom_write_block((const void*)pin, EEPROM_PIN_ADDR, 4);
}
void reset_eeprom_pin(void) {
    const char default_pin[4] = {'1', '2', '3', '4'};
    write_pin_to_eeprom(default_pin);
}

// Diody
void diodeRED() {
    DDRD |= (1 << PD3);
    for (int i = 0; i < 3; i++) {
        PORTD |= (1 << PD3);
        _delay_ms(100);
        PORTD &= ~(1 << PD3);
        _delay_ms(100);
    }
}
void diodeGREEN() {
    DDRD |= (1 << PD4);
    for (int i = 0; i < 3; i++) {
        PORTD |= (1 << PD4);
        _delay_ms(100);
        PORTD &= ~(1 << PD4);
        _delay_ms(100);
    }
}
void diodeORANGE() {
    DDRD |= (1 << PD5);
    PORTD |= (1 << PD5);
}
void diodeOFF() {
    PORTD &= ~((1 << PD3) | (1 << PD4) | (1 << PD5));
}

// Klawiatura
void keypad_init(void) {
    // Wiersze jako wejścia z pull-up
    DDRC &= ~0x0F;
    PORTC |= 0x0F;

    // Kolumny jako wyjście
    DDRC |= (1 << PC4) | (1 << PC5);
    PORTC |= (1 << PC4) | (1 << PC5);

    DDRB |= (1 << PB4) | (1 << PB5);
    PORTB |= (1 << PB4) | (1 << PB5);
}
char keypad_getkey(void) {
    const char keys[4][4] = {
        {'1','2','3','A'},
        {'4','5','6','B'},
        {'7','8','9','C'},
        {'*','0','#','D'}
    };

    for (uint8_t col = 0; col < 4; col++) {
        // Wszystkie kolumny HIGH
        PORTC |= (1 << PC4) | (1 << PC5);
        PORTB |= (1 << PB4) | (1 << PB5);

        // Ustaw kolumnę niską
        switch (col) {
            case 0: PORTC &= ~(1 << PC4); break;
            case 1: PORTC &= ~(1 << PC5); break;
            case 2: PORTB &= ~(1 << PB4); break;
            case 3: PORTB &= ~(1 << PB5); break;
        }

        _delay_us(5); // stabilizacja

        uint8_t rows = PINC & 0x0F; // odczyt wierszy za pomocą maski
        for (uint8_t row = 0; row < 4; row++) {
            if (!(rows & (1 << row))) {
                _delay_ms(200); // debounce
                return keys[row][col];
            }
        }
    }
    return 0;
}
void wait_for_key_release(void) {
    while (keypad_getkey() != 0) {
        _delay_ms(10);
    }
}

void accept(void) {
    diodeGREEN();
    servo_pwm_set_position(1);
    //servo_set_angle(90);   // Otwórz zamek (np. środek)
}

void reject(void) {
    diodeRED();
    servo_pwm_set_position(0);
    //servo_set_angle(0);   // Otwórz zamek (np. środek)
}

uint8_t get_pin_from_user(char* pin_buffer) {
    uint8_t index = 0;
    memset(pin_buffer, 0, 4);
    while (index < 4) {
        char key = keypad_getkey();
        if (key && key >= '0' && key <= '9') {
            pin_buffer[index++] = key;
            wait_for_key_release();
        } else if (key == '*') {
            index = 0;
            memset(pin_buffer, 0, 4);
            diodeOFF();
            _delay_ms(500);
            diodeORANGE();
        }
    }
    return 1;
}

void change_pin(char* correct_pin) {
    diodeOFF();
    _delay_ms(500);
    diodeORANGE();

    char old_pin[4];
    get_pin_from_user(old_pin);

    if (memcmp(old_pin, correct_pin, 4) == 0) {
        diodeGREEN();
        _delay_ms(500);
        diodeOFF();
        diodeORANGE();

        char new_pin[4];
        get_pin_from_user(new_pin);

        memcpy(correct_pin, new_pin, 4);
        write_pin_to_eeprom(new_pin); // Zapisz nowy PIN do EEPROM
        diodeGREEN();
        _delay_ms(1000);
        diodeOFF();
    } else {
        reject();
        _delay_ms(1000);
        diodeOFF();
    }
}

void handle_pin_entry(void) {
    char correct_pin[4];
    read_pin_from_eeprom(correct_pin); // Odczytaj PIN z EEPROM
    // Jeśli EEPROM jest "pusty", ustaw domyślny PIN 1234
    if (correct_pin[0] == 0xFF && correct_pin[1] == 0xFF && correct_pin[2] == 0xFF && correct_pin[3] == 0xFF) {
        correct_pin[0] = '1';
        correct_pin[1] = '2';
        correct_pin[2] = '3';
        correct_pin[3] = '4';
        write_pin_to_eeprom(correct_pin);
    }

    char input[4] = {0};
    uint8_t index = 0;

    diodeORANGE();

    while (1) {
        char key = keypad_getkey();
        if (key) {
            if (key == '*') {
                index = 0;
                memset(input, 0, sizeof(input));
                diodeOFF();
                _delay_ms(1000);
                diodeORANGE();
            }
            else if (key == '#') {
                change_pin(correct_pin);
                write_pin_to_eeprom(correct_pin); // Zapisz PIN po ewentualnej zmianie
                index = 0;
                memset(input, 0, sizeof(input));
                diodeORANGE();
            }
            else if (index < 4 && key >= '0' && key <= '9') {
                input[index++] = key;
                wait_for_key_release();
                diodeORANGE();
            }
            if (index == 4) {
                if (memcmp(input, "0000", 4) == 0) {
                    reset_eeprom_pin();
                    diodeGREEN(); // sygnalizacja resetu
                    _delay_ms(1000);
                    diodeOFF();
                    // Po resecie odczytaj nowy PIN z EEPROM
                    read_pin_from_eeprom(correct_pin);
                }
                else if (memcmp(input, correct_pin, 4) == 0) {
                    accept();
                } else {
                    reject();
                }
                index = 0;
                diodeOFF();
                _delay_ms(1000);
                diodeORANGE();
            }
        }
    }
}

int main(void) {
    reset_eeprom_pin();
    keypad_init();
    servo_pwm_init();
    handle_pin_entry();
    return 0;
}
