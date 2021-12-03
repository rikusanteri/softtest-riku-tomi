import chai from 'chai';
import add from '../src/add.js';
import assert from 'assert'
const expect = chai.expect;

describe('the add function', () => {
    it('should add two numbers together', () => {
        const result = add(3,2);
        assert.equal(result, 5);
    })
})
