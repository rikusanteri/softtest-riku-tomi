import chai from 'chai';
import upperFirst from '../src/upperFirst.js';
import assert from 'assert'
const expect = chai.expect;

describe('the upperFirst function', () => {
    it('should return the converted strings first letter in uppercase', () => {
        const result = upperFirst('fred');
        assert.equal(result, 'Fred');
    });
    it('should return the converted strings first letter in uppercase even if it was uppercase already', () => {
        const result = upperFirst('FRED');
        assert.equal(result, 'FRED');
    });
});