const arr = [-1, -1, 0, 1, 1]

function plusMinus(arr) {
  let pos = []
  let neg = []
  let zero = []
  let len = arr.length

  for (let i = 0; i < len; i++) {
    if (arr[i] < 0) {
      neg.push(arr[i])
    }
    if (arr[i] > 0) {
      pos.push(arr[i])
    }
    if (arr[i] === 0) {
      zero.push(arr[i])
    }
  }

  console.log((pos.length / len).toFixed(6))
  console.log((neg.length / len).toFixed(6))
  console.log((zero.length / len).toFixed(6))
}

plusMinus(arr)
