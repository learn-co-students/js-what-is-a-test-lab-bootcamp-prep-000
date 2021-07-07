var index = require("../index.js")

describe('what-is-a-test', () => {

  describe('name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual("Susan")
    })
  })


  describe('height', () => {
    it('is less than 100', () => {
      expect(index.height).toBeLessThan(100)
    })
  })

  describe('message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
