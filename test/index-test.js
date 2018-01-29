var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Vincent"', () => {
      expect(index.name).toEqual('Vincent')
    })
  })


  describe('Height', () => {
    it('is more than 40', () => {
      expect(index.height).toBeMoreThan(40)
    })
  })

  describe('Display', () => {
    it('gives the name and height', () => {
      expect(index.Display).toInclude(index.name)
      expect(index.Display).toInclude(index.height)
      expect(index.Display).toInclude(index.message)
    })
  })

})

