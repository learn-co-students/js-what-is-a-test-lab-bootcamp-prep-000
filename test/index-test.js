var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Baby"', () => {
      expect(index.name).toEqual('Baby')
    })
  })


  describe('Height', () => {
    it('is less than 50', () => {
      expect(index.height).toBeLessThan(50)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

