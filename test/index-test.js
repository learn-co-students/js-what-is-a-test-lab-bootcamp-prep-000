var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Susan', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('is less than 40' , () => {
      expect(39).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it(' ', () => {
      expect(index.message).toInclude(Susan)
      expect(index.message).toInclude(40)
    })
  })

})

