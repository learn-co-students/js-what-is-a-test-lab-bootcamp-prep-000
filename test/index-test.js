var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Princess Shuri"', () => {
      expect(index.name).toEqual('Princess Shuri')
    })
  })


  describe('Height', () => {
    it('is less than 70', () => {
      expect(index.height).toBeLessThan(70)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

