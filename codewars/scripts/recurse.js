const forLoop = (n) => {
  let j = -1
  let counter = 0
  for (let i = -1; j !== n; i = Math.floor(Math.random() * 10)) {
    j = i
    console.log(j, i, counter)
    counter++
  }
  console.log(j, n)
}

forLoop(4)
