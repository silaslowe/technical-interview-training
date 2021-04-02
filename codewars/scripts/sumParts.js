// Sum of parts: Let us consider this example (array written in general format):

// ls = [0, 1, 3, 6, 10]

// Its following parts:

// ls = [0, 1, 3, 6, 10]
// ls = [1, 3, 6, 10]
// ls = [3, 6, 10]
// ls = [6, 10]
// ls = [10]
// ls = []
// The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]

// The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.

// Other Examples:
// ls = [1, 2, 3, 4, 5, 6]
// parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]

// ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
// parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]

function partsSums(ls) {
  let result = []
  if (ls.length < 1) {
    return (result = [0])
  }
  let sum = ls.reduce((a, b) => a + b)
  result.push(sum)
  for (let i = 0; i < ls.length; i++) {
    sum -= ls[i]
    result.push(sum)
  }

  return result
}
// function partsSums(ls) {
//   debugger
//   let result = []
//   if (ls.length < 1) {
//     return (result = [0])
//   }
//   let copy = ls
//   while (copy.length > 0) {
//     result.push(copy.reduce((a, b) => a + b))
//     copy.shift()
//   }
//   result.push(0)
//   return result
// }

// function partsSums(ls) {
//   let result = []
//   debugger
//   if (ls.length < 1) {
//     result.push(0)
//     return result
//   }

//   if (ls.length > 0) {
//     let sum = ls.reduce((a, b) => a + b)
//     result.push(sum)
//     ls.shift()
//     partsSums(ls)
//   }
// }

console.log(partsSums([0, 1, 3, 6, 10]))

//  Other Solutions:

// function partsSums(ls) {
//     ls.unshift(0);
//     let sum = ls.reduce((p, c) => p + c, 0);
//     return ls.map(v => sum = sum - v);
// }

// function partsSums(ls) {

//     let res = new Array(ls.length + 1);
//     res[ls.length] = 0;

//     for (let i = ls.length - 1; i >= 0; i--)
//       res[i] = res[i + 1] + ls[i];

//     return res;

//   }

// function partsSums(ls) {
//   var result = []
//   result.push(ls.reduce((a, b) => a + b, 0))
//   for (i = 0; i < ls.length; i++) {
//     result.push(result[result.length - 1] - ls[i])
//   }
//   return result
// }
