const { expect } = require('chai');
const sum = require('./app.js');
// module.exports = sum; in sum function
// const sum = require('./app.js'); here
// mocha app.test.js

describe('Main test', function () {
    it('works with whole numbers', function () {
        expect(sum(3, 5)).to.equal(8);
    })

    it('works with floating-point numbers', function () {
        expect(sum(0.1, 0.2)).to.not.equal(0.3);
    })

    it('close to works with floating-point numbers', function () {
        expect(sum(0.1, 0.2)).to.closeTo(0.3, 0.0000000000000001);
    })

    // in case we test throw we must use a function in expect
    it('throws with non-number parameters', function () {
        expect(() => sum('a', 'b')).to.throw(TypeError);
    })

    it('demo test arrays', function () {
        const a = [1, 2, 3];
        const b = [1, 2, 3];
        console.log(a == b);

        expect(a).to.deep.equal(b);
    })
});