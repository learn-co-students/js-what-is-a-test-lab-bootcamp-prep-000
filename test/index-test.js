var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is greater than 40', () => {
      expect(index.height).toBeGreaterThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
