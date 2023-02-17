const { expect } = require('chai');
const sum = require('./app.js');
// module.exports = sum; in sum function
// const sum = require('./app.js'); here
// mocha app.test.js
// 1. npm init -y
// 2. npm install chai
// 3. mocha app.test.js

const { expect } = require('chai');
const library = require('./index.js');
// module.exports = sum; in sum function
// const sum = require('./app.js'); here
// mocha app.test.js

describe('Main tests ', function () {
    
    describe('Tests Set 1', function () {
        // throw test
        it('invalid input - year is not an integer number', function () {
            expect(() => library.calcPriceOfBook('a', 'a')).to.throw('Invalid input');
        })

        // valid data test
        it('valid date and year is below 1980', function () {
            expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`);
        })
    
    
    });

    describe('Tests Set 2', function () {
    
    
    });

    describe('Tests Set 3', function () {
    
    
    });
    
});
