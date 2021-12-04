import chai from 'chai';
import words from '../src/words.js';
import assert from 'assert'
const expect = chai.expect;

describe('the words function', () => {
    it('should return an array of words splitted from parameter string', () => {
        const result = words('fred, barney, & pebbles');
        expect(result, "to equal").to.eql(['fred', 'barney', 'pebbles'])
        //assert.equal(result, ['fred', 'barney', 'pebbles']);
    });
    it('should return an array of words splitted from parameter string with given pattern', () => {
        const result = words('fred, barney, & pebbles', /[^, ]+/g);
        expect(result, "to equal").to.eql(['fred', 'barney', '&', 'pebbles']);
        //assert.eql(result, ['fred', 'barney', '&', 'pebbles']);
    });
});