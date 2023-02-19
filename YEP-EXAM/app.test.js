const { expect } = require('chai');
const findNewApartment = require('./findApartment.js');

describe('findNewApartment tests ', function () {
    
    describe('isGoodLocation tests', function () {
        it('City value is not a string', function () {
            expect(() => findNewApartment.isGoodLocation(1, true)).to.throw('Invalid input!');
        })
        it('NearPublicTransportation is not a boolean', function () {
            expect(() => findNewApartment.isGoodLocation('Sofia', 1)).to.throw('Invalid input!');
        })
        it('City is different than a "Sofia", "Plovdiv" or "Varna"', function () {
            expect(findNewApartment.isGoodLocation('A', true)).to.equal(`This location is not suitable for you.`);
        })
        it('City is "Sofia"', function () {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal(`You can go on home tour!`);
        })
        it('City is "Plovdiv"', function () {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal(`You can go on home tour!`);
        })
        it('City is "Varna"', function () {
            expect(findNewApartment.isGoodLocation('Sofia', true)).to.equal(`You can go on home tour!`);
        })
        it('Value of the boolean nearPublicTransportation is false"', function () {
            expect(findNewApartment.isGoodLocation('Sofia', false)).to.equal(`There is no public transport in area.`);
        })

     
    });

        
    describe('isLargeEnough tests', function () {
        it('The minimalSquareMeters is not a number', function () {
            expect(() => findNewApartment.isLargeEnough([40, 50, 60], '1')).to.throw('Invalid input!');
        })
        it('Apartments is empty array.', function () {
            expect(() => findNewApartment.isLargeEnough([], 1)).to.throw('Invalid input!');
        })
        it('Passed apartments parameter is not an array', function () {
            expect(() => findNewApartment.isLargeEnough(1, 1)).to.throw('Invalid input!');
        })
        it('Add the area of apartment in resultArr if is equal or bigger than minimalSquareMeters', function () {
            expect(findNewApartment.isLargeEnough([40, 50, 60], 20)).to.equal('40, 50, 60');
        })
    });

    describe('isItAffordable tests', function () {
        it('The price is not a number', function () {
            expect(() => findNewApartment.isItAffordable('1', 1)).to.throw('Invalid input!');
        })
        it('The budget is not a number', function () {
            expect(() => findNewApartment.isItAffordable(1, '1')).to.throw('Invalid input!');
        })
        it('The price is less than 0', function () {
            expect(() => findNewApartment.isItAffordable(-1, 1)).to.throw('Invalid input!');
        })
        it('The price is 0', function () {
            expect(() => findNewApartment.isItAffordable(0, 1)).to.throw('Invalid input!');
        })
        it('The budget is less than 0', function () {
            expect(() => findNewApartment.isItAffordable(1, -1)).to.throw('Invalid input!');
        })
        it('The budget is 0', function () {
            expect(() => findNewApartment.isItAffordable(1, 0)).to.throw('Invalid input!');
        })
        it('Price is higher than your budget', function () {
            expect(findNewApartment.isItAffordable(2, 1)).to.equal(`You don't have enough money for this house!`);
        })
        it('Price is exactly equal to your budget', function () {
            expect(findNewApartment.isItAffordable(1, 1)).to.equal(`You can afford this home!`);
        })
        it('Price is less than your budget', function () {
            expect(findNewApartment.isItAffordable(1, 2)).to.equal(`You can afford this home!`);
        })
    });
});
