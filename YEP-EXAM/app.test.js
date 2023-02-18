const { expect } = require('chai');
const library = require('./app.js');
// 1. npm init -y
// 2. npm install chai
// 3. mocha app.test.js
// 4. module.exports = library; --> in main 
// 5. const library = require('./index.js'); --> here
// 6. mocha app.test.js

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
        it('invalid input - empty array', function () {
            expect(() => library.findBook([], 'Desired Book')).to.throw('No books currently available');
        })
        it('valid input - available book', function () {
            expect(library.findBook(['Desired Book'], 'Desired Book')).to.equal('We found the book you want.');
        })
        it('valid input - not available book', function () {
            expect(library.findBook(['Troy', 'Life Style', 'Torronto'], 'Desired Book')).to.equal('The book you are looking for is not here!');
        })
    });

    describe('arrangeTheBooks tests', function () {
        it('the countBooks is not an integer number', function () {
            expect(() => library.arrangeTheBooks('1')).to.throw('Invalid input');
        })
        it('the countBooks is a negative number', function () {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
        })
        it('all the books are arranged on the shelves', function () {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        })
        it('all the books are arranged on the shelves - edge case 40 books', function () {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        })
        it('all the books are more than 40 - insufficient space', function () {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        })
    
    
    });
    
});
