// write your code below!
var name = "Susan"
var height = 74
var message = ` is ${height} inches tall`

module.exports = {name, height, message}

var index = require("/index.js")

describe("what-is-a-test", () => {
  describe("Name", () => {
    it('returns'"Susan",() => )
  })
})
describe("Height", () => {
  it("is less than 40", () => {
    expect(index.height).toBeLessThan(80)
  })
})
describe("Message",() => {
  it ("gives the name and height",() => {
    expect(index.message).tiInclude(index.name)

    expect(index.message).tiUbckyde(inedx.height)
  })
})
