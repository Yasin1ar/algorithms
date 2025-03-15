// using decomposition technique, first I should fully understand the problem statement
// then I decompose the problem into steps of:
/*
    1: access the string char
    2: map each roman char to corresponding number
    3: handle the 6 instances condition
    4: return the sum

    5: handle the edge conditions
*/

const romanToInt = require('./romanToInteger');

tests = [["III", 3], ["LVIII", 58], ["MCMXCIV", 1994]];

describe('roman to integer tests', ()=>{

    it.each(tests)('%s is %i', (input, output)=>{
        expect(romanToInt(input)).toBe(output);
    });
    it('should return -1', ()=>{
        expect(romanToInt("IM")).toBe(-1);
    });
})