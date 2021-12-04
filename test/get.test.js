import chai from 'chai';
import get from '../src/get.js';
import assert from 'assert';
const expect = chai.expect;

describe('the get function', () => {
    it('should return the path of object if the resolved value is defined', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        const result = get(object, 'a[0].b.c');
        expect(result, "to equal").to.equal(3);
    });
    it('should return defaultValue if the resolved value is undefined', () => {
        const object = { 'a': [{ 'b': { 'c': 3 } }] }
        const result = get(object, 'a.b.c', 'default');
        expect(result, "to equal").to.equal('default');
    });
    it('own test, should return undefined when given no parameters', () => {
        const object = {}
        const result = get();
        expect(result, "to equal").to.be.undefined;
    });
});
