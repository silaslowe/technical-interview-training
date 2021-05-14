let grades = [73, 67, 38, 33]

// const grader = (grades) => {
//   grades.map((g) => {
//     if (g < 38) {
//       console.log(g)
//     } else if ((g + 2) % 5 === 0) {
//       console.log(g + 2)
//     } else if ((g + 1) % 5 === 0) {
//       console.log(g + 1)
//     } else {
//       console.log(g)
//     }
//   })
// }

const grader = (grades) => {
  let final = []
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      final.push(grades[i])
    } else if ((grades[i] + 2) % 5 === 0) {
      final.push(grades[i] + 2)
    } else if ((grades[i] + 1) % 5 === 0) {
      final.push(grades[i] + 1)
    } else {
      final.push(grades[i])
    }
  }
  return final
}

console.log(grader(grades))
