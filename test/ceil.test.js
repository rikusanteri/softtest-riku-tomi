import chai from 'chai';
import ceil from '../src/ceil.js';

import assert from 'assert'
import createRound from '../src/.internal/createRound.js';
const expect = chai.expect;

//computes number rounded up to precision
// (Round up: the smallest integer greater than or equal to a given number.)


//const add = require('./src/add.js');

describe('the ceil function', () => {
    it('should round up to smallest integer greater than or equal to a given number', () => {

        //test different cases
        const result1 = ceil(4.006);
        const result2 = ceil(4.060, 2);
        const result3 = ceil(4.600, 3);
        const result4 = ceil(4.000);
        const result5 = ceil(6040, -2)
        assert.equal(result1, 5);
        assert.equal(result2, 4.06);
        assert.equal(result3, 4.600);
        assert.equal(result4, 4)
        assert.equal(result5, 6100)
    })
    it('should round negative numbers', () => {
        expect(ceil(-5.061 ,2)).to.equal(-5.06);
        expect(ceil(-0.8)).to.equal(0);
    })

    it('should return NaN if passed a string as first parameter', () => {
        expect(ceil('joo', 'asd')).to.be.NaN;
      });
    it('should return the number itself if the optional parameter is a string (aka not the right type)', () => {
        const result = ceil(100, 'asd');
        expect(result).to.equal(100);
    });
    it('should return NaN when the first param is of type string and the second parameter is of type integer', () => {
        const result = ceil('asd', 1);
        expect(result).to.be.NaN;
    });
    it('should return NaN when called without any arguments', () => {
        const result = ceil();
        expect(result).to.be.NaN;
    });
})