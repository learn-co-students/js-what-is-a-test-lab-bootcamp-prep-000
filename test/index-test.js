var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 80', () => {
      expect(index.height).toBeLessThan(80)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude("Susan")
      expect(index.message).toInclude(79)
    })
  })

})
