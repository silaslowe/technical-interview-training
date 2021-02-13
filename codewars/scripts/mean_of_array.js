// Getting the mean of an array

// 8kyu

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks) {
  return marks.reduce((a, b) => a + b, 0) / marks.length
}

// ~~ operates the same as Math.floor?
// const getAverage = marks => ~~(marks.reduce((s, v) => s + v) / marks.length);
console.log(4)
