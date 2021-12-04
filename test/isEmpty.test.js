import chai from 'chai';
import isEmpty from '../src/isEmpty.js';
import assert from 'assert'
const expect = chai.expect;

describe('the isEmpty function', () => {
    it('should return true when value is null', () => {
        const result = isEmpty(null);
        assert.equal(result, true);
    });
    it('should return true when value is true', () => {
        const result = isEmpty(true);
        assert.equal(result, true);
    });
    it('should return true when value is 1', () => {
        const result = isEmpty(1);
        assert.equal(result, true);
    });
    it('should return false when value is a non-empty array', () => {
        const result = isEmpty([1,2,3]);
        assert.equal(result, false);
    });
    it('should return false when value is a nonempty string', () => {
        const result = isEmpty('abc');
        assert.equal(result, false);
    });
    it('should return false when value is a nonempty object', () => {
        const result = isEmpty({ 'a': 1});
        assert.equal(result, false);
    });
});