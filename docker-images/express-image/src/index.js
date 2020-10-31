var Chance = require("chance");
var chance = Chance();
// console.log("Bonjour " + chance.name());
var express = require("express");
var app = express();

// app.get("/test", function (req, res) {
//   res.send("Hello from express app ! - test is working!!");
// });

app.get("/", function (req, res) {
  res.send(generateStudents());
});

app.listen(3000, function () {
  console.log("Accepting HTTP request on port 3000");
});

function generateStudents() {
  var students = [];
  const numberOfStudents = chance.integer({
    min: 0,
    max: 10,
  });
  console.log(numberOfStudents);
  for (let index = 0; index < numberOfStudents; index++) {
    let gender = chance.gender();
    let birthYear = chance.year({
      min: 1986,
      max: 1996,
    });
    students.push({
      firstName: chance.first({
        gender: gender,
      }),
      lastName: chance.last(),
      gender: gender,
      birthday: chance.birthday({
        year: birthYear,
      }),
    });
  }
  console.log(students);
  return students;
}
