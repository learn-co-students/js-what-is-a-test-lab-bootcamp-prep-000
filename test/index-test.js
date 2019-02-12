var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Mike"', () => {
      expect(index.name).toEqual('Mike')
    })
  })


  describe('Height', () => {
    it('is equal to 73', () => {
      expect(index.height).toEqual(73)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
console.log(index.message)
