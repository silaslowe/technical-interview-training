const a = [9, 5, 4, 7, 6, 3, 8, 2]

// const tourney = (array) => {
//   debugger
//   let b = [...array]
//   let c = []
//   let d = []
//   for (let i = 0; i < b.length; i += 2) {
//     if (b[i] > b[i + 1]) {
//       c.push(b[i])
//     } else {
//       c.push(b[i + 1])
//     }
//   }
//   if (c.length > 1) {
//     // d.push(c)
//     tourney(c)
//   }
//   //   return d
// }

// const tourney = (array) => {
//   let b = [...array]
//   let c = []
//   for (let i = 0; i < b.length; i += 2) {
//     if (b[i] > b[i + 1]) {
//       c.push(b[i])
//     } else {
//       c.push(b[i + 1])
//     }
//     console.log("C", c)
//   }
//   console.log("B", b)
//   b.push(c)
//   if (c.length === 1) {
//     return b
//   }
//   tourney(b)
//   //   return d
// }

const tourney = (array) => {
  if (array.reverse()[0].length === 1) {
    return array
  }
  const b = [[array]].reverse()
  console.log("B", b)
  const c = []

  for (let i = 0; i < b[0].length; i += 2) {
    if (b[0][i] > b[0][i + 1]) {
      c.push(b[0][i])
    } else {
      c.push(b[0][i + 1])
    }
  }
  console.log("C", c)
  const d = [b, c]
  tourney(d)
}

console.log(tourney(a))
