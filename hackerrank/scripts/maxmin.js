let ar = [1, 3, 5, 4, 6]

function miniMaxSum(arr) {
  let min = arr
    .sort((a, b) => a - b)
    .slice(0, 4)
    .reduce((a, b) => a + b, 0)
  let max = arr
    .sort((a, b) => b - a)
    .slice(0, 4)
    .reduce((a, b) => a + b, 0)
  console.log(min, max)
}

miniMaxSum(ar)
