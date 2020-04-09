const {sum} = require('../index');
const {expect} = require('chai');

describe('#sum()', function() {

    describe('without arguments', function() {
        it('should return 0', function() {
            expect(sum()).to.equal(0)
        })
    });

    describe('with number arguments', function() {
        it('should return sum of arguments', function() {
            expect(sum(1, 2, 3, 4, 5)).to.equal(15)
        });

        it('should return argument when only one argument is passed', function() {
            expect(sum(5)).to.equal(5)
        });
    });

    describe('with non-number arguments', function() {
        it('should throw error', function() {
            expect(function() {
                sum(1, 2, '3', [4], 5)
            }).to.throw(TypeError, 'sum() expects only numbers.')
        });
    });

});
