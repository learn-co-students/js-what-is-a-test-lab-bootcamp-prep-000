// write your code below!
var name = "Susan"
var height = 35
var message = `${name} is ${height} inches tall`

describe('Name', () => {
  it('returns "Susan"', () => {
    expect(name).toEqual('Susan')
  })
})

describe("Height", () => {
  it("is less than 40", () => {
    expect(height).toBeLessThan(40)
  })
})

describe("Message", () => {
  it("gives the name and height", () => {
    expect(message).toInclude(name)
    expect(message).toInclude(height)
  })
})


module.exports = {name, height, message}
