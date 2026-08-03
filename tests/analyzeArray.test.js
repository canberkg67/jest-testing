import {analyzeArray} from '../src/analyzeArray.js';

describe('analyzeArray', () => {
    test('returns average, min, max and length of an array', () => {
        const array = [1, 2, 3, 4, 5];
        const result = analyzeArray(array);
        expect(result).toEqual({
            average: 3,
            min: 1,
            max: 5,
            length: 5
        });
    });
    test("array with one element", () => {
        expect(analyzeArray([10])).toEqual({
            average: 10,
            min: 10,
            max: 10,
            length: 1
        });
    });
    test("array with negative numbers", () => {
        expect(analyzeArray([-1, -2, -3])).toEqual({
            average: -2,
            min: -3,
            max: -1,
            length: 3
        });
    });
});