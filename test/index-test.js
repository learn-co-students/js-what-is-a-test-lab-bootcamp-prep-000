var index = require("../index.js")

describe('what-is-a-test', () => {
  
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the Name and Height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

