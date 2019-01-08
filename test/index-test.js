var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Susan', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe(20, () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
