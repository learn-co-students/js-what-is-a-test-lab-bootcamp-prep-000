var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Joe"', () => {
      expect(index.name).toEqual('Joe')
    })
  })


  describe('Height', () => {
    it('is more than 40', () => {
      expect(index.height).toBeMoreThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

