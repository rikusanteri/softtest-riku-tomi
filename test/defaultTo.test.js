import chai from 'chai';
import defaultTo from '../src/defaultTo.js';
import assert from 'assert'
const expect = chai.expect;

describe('the defaultTo function', () => {
    it('should return defaultValue (1 in test) when value is Nan', () => {
        const result = defaultTo(NaN, 1);
        assert.equal(result, 1);
    });
    it('should return defaultValue (1 in test) when value is Nan', () => {
        const result = defaultTo(null, 1);
        assert.equal(result, 1);
    });
    it('should return defaultValue (1 in test) when value is Nan', () => {
        const result = defaultTo(undefined, 1);
        assert.equal(result, 1);
    });
})