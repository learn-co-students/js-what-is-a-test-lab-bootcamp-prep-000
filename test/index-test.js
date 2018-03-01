var index = ("../index.js")
var Name = 'Susan';
  ('what-is-a-test', () => {('Susan', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Joe')
      "Susan" === "Joe"
    })
  })

  describe('Height', () => {
    it('is less than 40', () => {
      expect(index.Height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('gives the name and height', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})

