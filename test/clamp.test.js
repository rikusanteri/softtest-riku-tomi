import chai from 'chai';
import clamp from '../src/clamp.js';
import assert from 'assert'
const expect = chai.expect;

describe('the clamp function', () => {
    it('should clamp negative number to itself when the lower bound is a higher number than the number itself', () => {
        const result = clamp(-10, -5, 5);
        assert.equal(result, -5)
    });
    it('should clamp a number to the upper bound when the number is higher than the upper bound', () => {
        const result2 = clamp(10, -5, 5);
        assert.equal(result2, 5)
    });
    it('should return NaN when the parameters are all string (invalid type)', () => {
        const result = clamp('asd', 'asd', 'asd');
        expect(result).to.be.NaN;
    })
    it('should return 0 when the lower bound is a string (invalid type) (bounds default val is 0 when invalid input)', () => {
        const result = clamp(10, 'asd', 5);
        expect(result).to.equal(0);
    })
    it('should return 0 when the upper bound is a string (invalid type) (bounds default val is 0 when invalid input)', () => {
        const result = clamp(10, -5, 'asd');
        expect(result).to.equal(0);
    })
    it('should return NaN when called without any parameters', () => {
        const result = clamp();
        expect(result).to.be.NaN;
    })
})