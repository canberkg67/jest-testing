import {reverseString} from '../src/reverseString.js';

test('reverses a string', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('handles empty string', () => {
    expect(reverseString('')).toBe('');
});
