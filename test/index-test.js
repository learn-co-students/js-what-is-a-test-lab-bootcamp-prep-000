var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan', () => {
      expect(index.name).toEqual("Susan")
    })
  })


  describe('Height', ("40") => {
    it('is less than 40', ("40") => {
      expect("number").toBeLessThan('40')
    })
  })

  describe('Message', () => {
    it('gives the name and height', ("40") => {
      expect(index.message).toInclude("Susan")
      expect(index.message).toInclude('40')
    })
  })

})
