var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Joe"', () => {
      expect(index.name).toEqual('Joe')
    })
  })


  describe('Height', () => {
    it('is less than 75', () => {
      expect(index.height).toBeLessThan(75)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.height)
      expect(index.message).toInclude(index.name)
    })
  })

})

