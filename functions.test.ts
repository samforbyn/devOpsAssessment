const {shuffleArray} = require('./utils')

let testArr = [1,2,3,4,5,6]

describe('shuffleArray should', () => {
    const {arrCopy} = shuffleArray
    test('shuffled array is numbers', () => {
        expect(shuffleArray(testArr)).not.toBeNaN()
    })
    test('shuffleArray is truthy', () => {
        expect(shuffleArray(testArr)).toBeTruthy()
    })
    test('shuffleArray returns an array', () => {
        expect(Array.isArray(shuffleArray(testArr))).toBe(true)
    })
})