const ar = [
  [-1, 1, -7, -8],
  [-10, -8, -5, -2],
  [0, 9, 7, -1],
  [4, 4, -2, 1],
]

// const ar = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
// ]

// const ar = [
//   [-10, 3, 0, 5, -4],
//   [2, -1, 0, 2, -8],
//   [9, -2, -5, 6, 0],
//   [9, -7, 4, 8, -2],
//   [3, 7, 8, -5, 0],
// ]
// const ar = [
//   [6, 6, 7, -10, 9, -3, 8, 9, -1],
//   [9, 7, -10, 6, 4, 1, 6, 1, 1],
//   [-1, -2, 4, -6, 1, -4, -6, 3, 9],
//   [-8, 7, 6, -1, -6, -6, 6, -7, 2],
//   [-10, -4, 9, 1, -7, 8, -5, 3, -5],
//   [-8, -3, -4, 2, -3, 7, -5, 1, -5],
//   [-2, -7, -4, 8, 3, -1, 8, 2, 3],
//   [-3, 4, 6, -7, -7, -8, -3, 9, -6],
//   [-2, 0, 5, 4, 4, 4, -3, 3, 0],
// ]

// const ar = [1, 2, 3, 4, 5, 6, 9, 8, 9]

// 16-20
function diagonalDifference(arr) {
  let start = []
  let end = []
  let counter = 0
  let endCounter = arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    start.push(arr[i][counter])
    counter++
  }
  for (let i = 0; i < arr.length; i++) {
    end.push(arr[i][endCounter])
    endCounter--
  }

  //   Total for start and end-can be negative
  let startReduce = start.reduce((a, b) => a + b, 0)
  let endReduce = end.reduce((a, b) => a + b, 0)

  let startAbs = Math.abs(start.reduce((a, b) => a + b, 0))
  let endAbs = Math.abs(end.reduce((a, b) => a + b, 0))

  let resultArray = [startReduce, endReduce].sort((a, b) => a - b)
  let resultArrayAbs = [startAbs, endAbs].sort((a, b) => b - a)

  console.log(startReduce, endReduce)

  if (startReduce > 0 && endReduce > 0) {
    return resultArrayAbs[0] - resultArrayAbs[1]
  }
  if (startReduce < 0 && endReduce < 0) {
    return resultArrayAbs[0] - resultArrayAbs[1]
  }
  if (startReduce < 0 && endReduce > 0) {
    return Math.abs(resultArray[0] - resultArray[1])
  }
  if (startReduce > 0 && endReduce < 0) {
    return Math.abs(resultArray[0] - resultArray[1])
  }
  if (startReduce === 0 || endReduce === 0) {
    return Math.abs(resultArray[0] - resultArray[1])
  }
}

// const diagonalDifference = (arr) => {
//   let square = Math.sqrt(arr.length)
//   let inc = square + 1
//   let endInc = square - 1
//   let start = []
//   let end = []
//   for (let i = 0; i < arr.length; i += inc) {
//     start.push(arr[i])
//   }
//   for (let i = arr.length - square; i > 0; i -= endInc) {
//     end.push(arr[i])
//   }
//   return start.reduce((a, b) => a + b, 0) - end.reduce((a, b) => a + b, 0)
// }

diagonalDifference(ar)
console.log(diagonalDifference(ar))
