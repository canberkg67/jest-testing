import {caesarCipher} from '../src/caesarCipher.js';

describe('caesarCipher', () => {
    test('shifts letters by the given amount', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
        expect(caesarCipher('xyz', 2)).toBe('zab');
    });
    test("preserves the case of letters", () => {
        expect(caesarCipher('AbC', 1)).toBe('BcD');
        expect(caesarCipher('XyZ', 2)).toBe('ZaB');
    });
    test("prevents non-letter characters from being shifted", () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
        expect(caesarCipher('1234', 5)).toBe('1234');
    });
});