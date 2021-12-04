import chai from 'chai';
import add from '../src/add.js';
const expect = chai.expect;


describe('the add function', () => {
    it('should add two numbers together', () => {
        expect(add(6,4)).to.equal(10);
        expect(add(4,6)).to.equal(10);

        expect(add(0,0)).to.equal(0);

        expect(add(0,6)).to.equal(6);
        expect(add(6,0)).to.equal(6);

        expect(add(99999,1)).to.equal(100000);
        expect(add(1,99999)).to.equal(100000);
    })
    it('should add two numbers that can be negative together', () => {
        expect(add(3,-2)).to.equal(1);
        expect(add(-2,3)).to.equal(1);

        expect(add(2,-3)).to.equal(-1);
        expect(add(-3,2)).to.equal(-1);

        expect(add(0, -15)).to.equal(-15);
        expect(add(-15, -0)).to.equal(-15);

        expect(add(-15, -5)).to.equal(-20);
        expect(add(-5, -15)).to.equal(-20);
        
    })
    it('should return undefined when params are not numbers', () => {
        expect(add("a", "b")).to.be.undefined;
    })
    it('should add floating point numbers', () => {
        expect(add(6.5, 4.5)).to.equal(11.0);
        expect(add(4.5, 6.5)).to.equal(11.0);

        expect(add(7.7, 2.2)).to.equal(9.9);
        expect(add(2.2, 7.7)).to.equal(9.9);

        expect(add(-7.7, 2.2)).to.equal(-5.5);
        expect(add(2.2, -7.7)).to.equal(-5.5);

        expect(add(-7.7, -2.2)).to.equal(-9.9);
        expect(add(-2.2, -7.7)).to.equal(-9.9);

        expect(add(111.3456, 0.003)).to.equal(111.3486);
        expect(add(0.003, 111.3456)).to.equal(111.3486);

        expect(add(-1.2, 2.2)).to.equal(1.0);
        expect(add(2.2, -1.2)).to.equal(1.0);

        expect(add(12.3456, 0.0003)).to.equal(12.3459);
        expect(add(0.0003, 12.3456)).to.equal(12.3459);
    })


})
