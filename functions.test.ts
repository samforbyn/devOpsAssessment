const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    const {arrCopy, array} = shuffleArray
    test('shuffled array is numbers', () => {
        shuffleArray([1,2,3,4,5,6])
        expect(arrCopy).not.toBeNaN()
    })
    test('shuffleArray is truthy', () => {
        shuffleArray([1,2,3,4,5,6])
        expect(shuffleArray).toBeTruthy()
    })
})