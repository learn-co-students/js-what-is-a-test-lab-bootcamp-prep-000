var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Joe')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(40).toBeLessThan(70)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
