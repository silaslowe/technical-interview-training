function battle(player1, player2) {
  debugger
  let len = ""
  let p1 = [...player1]
  let p2 = [...player2]
  if (player1.length >= player2.length) {
    len = player1.length
    // longer = [...player1]
    // shorter = [...player2]
  } else {
    len = player2.length
    // longer = [...player2]
    // shorter = [...player1]
  }

  for (let i = 0; i < len; i++) {
    console.log(p1[0])
    if (p1[i][0] > p2[i][1]) {
      p2.splice(i, 1)
    }
    if (p1[i][0] < p2[i][1]) {
      p1.splice(i, 1)
    }
    return {
      player1: p1,
      player2: p2,
    }
  }
}
console.log(
  battle(
    [
      [1, 1],
      [2, 1],
      [2, 2],
      [5, 5],
    ],
    [
      [1, 2],
      [1, 2],
      [3, 3],
    ]
  )
)
