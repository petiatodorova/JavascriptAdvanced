const { expect } = require('chai');
const library = require('./index.js');
// module.exports = sum; in sum function
// const sum = require('./app.js'); here
// mocha app.test.js

describe('Library tests ', function () {
    
    // first thow errors
    describe('calcPriceOfBook tests', function () {
        it('invalid input - name of the book is not a string', function () {
            expect(() => library.calcPriceOfBook(1, 1)).to.throw('Invalid input');
        })
        it('invalid input - year is not an integer number', function () {
            expect(() => library.calcPriceOfBook('a', 'a')).to.throw('Invalid input');
        })
        it('valid date and year is below 1980', function () {
            expect(library.calcPriceOfBook('The Little Prince', 1943)).to.equal(`Price of The Little Prince is 10.00`);
        })
        it('valid date and year is equal to 1980', function () {
            expect(library.calcPriceOfBook('The Little Prince', 1980)).to.equal(`Price of The Little Prince is 10.00`);
        })
        it('valid date and year is more than 1980', function () {
            expect(library.calcPriceOfBook('Test Book', 1981)).to.equal(`Price of Test Book is 20.00`);
        })
    
     
    });

    describe('findBook tests', function () {
    
    
    });

    describe('arrangeTheBooks tests', function () {
    
    
    });
    
});
