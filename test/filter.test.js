import chai from 'chai';
import filter from '../src/filter.js';
import assert from 'assert';
const expect = chai.expect;

describe('the filter function', () => {

    it('should return objects for key', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }]

        const result = filter(users, ({ active }) => active)
        const shouldequal = [{
            'active': true,
            'user': 'barney'
          }]
        expect(result, "should equal").to.eql(shouldequal);
        //assert.equal(result, shouldequal);
    });
});