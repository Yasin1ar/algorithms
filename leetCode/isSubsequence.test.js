const isSubsequenc = require('./isSubsequence');
const toBeTrue = [['abc', 'agsbklc'], ['ijl','ijl'], ['af', 'iiiljadff']];
const toBeFalse = [['abc', 'agsbkl'], ['ijl',''], ['af', 'iiiljf']];
describe('test suit to valid the functionality of the isSubsequence module', ()=>{
    test.each(toBeTrue)('%s should be the subsequence of %s', (s, t)=>{
        expect(isSubsequenc(s, t)).toBeTruthy();
    });
    test.each(toBeFalse)('%s should not be the subsequence of %s', (s, t)=>{
        expect(isSubsequenc(s, t)).toBeFalsy();
    });
});