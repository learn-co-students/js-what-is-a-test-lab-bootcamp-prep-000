var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('ME', () => {
    it('returns "Susan"', () => {
      expect(index.ME).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the ME and height', () => {
      expect(index.message).toInclude(index.ME)
      expect(index.message).toInclude(index.height)
    })
  })

})

