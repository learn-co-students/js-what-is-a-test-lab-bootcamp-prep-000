var index = require("../index.js")

describe('this-is-a-test-name', () => {
  describe('Name', () => {
    it('returns "Joe"', () => {
      expect(index.name).toEqual('Joe')
    })
  })


  describe('Height', () => {
    it('40+', () => {
      expect(index.height).toBeGreaterThan(40)
    })
  })

  describe('Message', () => {
    it('name & height', () => {
      expect(index.message).toExclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

