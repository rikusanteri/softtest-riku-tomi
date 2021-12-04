import chai from 'chai';
import eq from '../src/eq.js';
import assert from 'assert';
const expect = chai.expect;

describe('the eq function', () => {

    it('should return true if the values are equivalent', () => {
        const object = { 'a': 1 };
        const result = eq(object, object);
        assert.equal(result, true);
    });
    it('should return false if the values are not equivalent', () => {
        const object = { 'a': 1 };
        const other = { 'a': 1 };
        const result = eq(object, other);
        assert.equal(result, false);
    });
    it('should return true if the values are equivalent', () => {
        const result = eq('a', 'a');
        assert.equal(result, true);
    });
    it('should return false if the values are not equivalent', () => {
        const result4 = eq('a', Object('a'));
        expect(result4).to.equal(false);
    });
    it('should return true if the values are equivalent', () => {
        const result = eq(NaN, NaN);
        assert.equal(result, true);
    });
})