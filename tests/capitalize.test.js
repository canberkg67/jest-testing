import {capitalize} from '../src/capitalize.js';

test("capitalize first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("does not change the word", () => {
    expect(capitalize("Hello")).toBe("Hello");
});

test("handles empty string", () => {
    expect(capitalize("")).toBe("");
});