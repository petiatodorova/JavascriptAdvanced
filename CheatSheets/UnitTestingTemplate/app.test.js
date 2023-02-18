const { expect } = require('chai');
const library = require('./index.js');
// 1. npm init -y
// 2. npm install chai
// 3. mocha app.test.js
// 4. module.exports = library; --> in main 
// 5. const library = require('./index.js'); --> here
// 6. mocha app.test.js

describe('Main tests ', function () {
    
    describe('Tests Set 1', function () {
        // throw test
        it('invalid input - year is not an integer number', function () {
            expect(() => library.calcPriceOfBook('a', 'a')).to.throw('Invalid input');
        })

        // data test
        it('valid date and year is below 1980', function () {
            expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`);
        })

        // with array
        it('invalid input - empty array', function () {
            expect(() => library.findBook([], 'Desired Book')).to.throw('No books currently available');
        })
    
    
    });

    describe('Tests Set 2', function () {
    
    
    });

    describe('Tests Set 3', function () {
    
    
    });
    
});
