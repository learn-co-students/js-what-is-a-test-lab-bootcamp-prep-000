// write your code below!
var name = "Susan"
var height = 20
var message = `${name} is ${height} inches tall`

module.exports = {name, height, message}


if (name === "Joe") {
  name = "Susan";
}
else {
  console.log("You're not good at this at all are you, Harry?")
}


if (height > 40) {
  var height = 20;
}
else {
  console.log("COME ON, BRUV")
}


console.log(message)