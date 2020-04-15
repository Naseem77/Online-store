var expect = require('chai').expect

describe('Array', () => {
    describe('#sort', () => {
        it('should sorting array by name', () => {
            var months = ['Alice', 'Bob', 'Daniel', 'vicrtor']
            expect(months.sort()).to.be.eql(['Alice', 'Bob', 'Daniel', 'vicrtor'])
        })

        it('sorting number array', () => {
            expect([5, 2, 1, 6].sort()).to.be.eql([1, 2, 5, 6])
        })
    })

    describe('#fillter', () => {
        it('should filter value', () => {
            var arr = [1, 2, 3, 4, 5, 6]
            expect(arr.filter(value => value % 2 == 0)).to.be.eql([2, 4, 6])
        })
    })
})