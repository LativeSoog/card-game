const { getRank, getSuit } = require('../generateGameCards')

describe('Get rank test', () => {
    it('should return 6 a string value', () => {
        const rank = getRank(6)
        const expected = '6'
        expect(rank).toBe(expected)
    })

    it('should return 7 a string value', () => {
        const rank = getRank(7)
        const expected = '7'
        expect(rank).toBe(expected)
    })

    it('should return 8 a string value', () => {
        const rank = getRank(8)
        const expected = '8'
        expect(rank).toBe(expected)
    })
    it('should return 9 a string value', () => {
        const rank = getRank(9)
        const expected = '9'
        expect(rank).toBe(expected)
    })
    it('should return 10 a string value', () => {
        const rank = getRank(10)
        const expected = '10'
        expect(rank).toBe(expected)
    })
    it('should return jack a string value', () => {
        const rank = getRank(11)
        const expected = 'jack'
        expect(rank).toBe(expected)
    })
    it('should return queen a string value', () => {
        const rank = getRank(12)
        const expected = 'queen'
        expect(rank).toBe(expected)
    })
    it('should return king a string value', () => {
        const rank = getRank(13)
        const expected = 'king'
        expect(rank).toBe(expected)
    })
    it('should return ace a string value', () => {
        const rank = getRank(14)
        const expected = 'ace'
        expect(rank).toBe(expected)
    })
})

describe('Get suit', () => {
    it('should return clubs a string value', () => {
        const suit = getSuit(1)
        const expected = 'clubs'
        expect(suit).toBe(expected)
    })

    it('should return diamonds a string value', () => {
        const suit = getSuit(2)
        const expected = 'diamonds'
        expect(suit).toBe(expected)
    })

    it('should return hearts a string value', () => {
        const suit = getSuit(3)
        const expected = 'hearts'
        expect(suit).toBe(expected)
    })

    it('shoild return spades a string value', () => {
        const suit = getSuit(4)
        const expected = 'spades'
        expect(suit).toBe(expected)
    })
})
