const paul = (x) => {
  let score = 0
  for (let i = 0; i < x.length; i++) {
    if (x[i][0] === "e") {
      score += 1
    }
    if (x[i][0] === "k") {
      score += 5
    }
    if (x[i][0] === "P") {
      score += 10
    }
  }
  if (score === 100) {
    return "Miserable"
  } else if (score > 70) {
    return "Sad"
  } else if (score > 40) {
    return "Happy!"
  } else {
    return "Super Happy!"
  }
}

console.log(paul(["life", "eating", "life"]))
console.log(paul(["Petes kata", "Petes kata", "eating", "Petes kata", "Petes kata", "eating"]))

// Other solution

paul = (x) => {
  const score = x
    .map((x) => ({ kata: 5, "Petes kata": 10, life: 0, eating: 1 }[x]))
    .reduce((p, c) => p + c)
  return score < 40 ? "Super happy!" : score < 70 ? "Happy!" : score < 100 ? "Sad!" : "Miserable!"
}

const paul = (x) =>
  ((val) => (val < 40 ? `Super happy!` : val < 70 ? `Happy!` : val < 100 ? `Sad!` : `Miserable!`))(
    x.reduce((pre, val) => pre + { kata: 5, "Petes kata": 10, life: 0, eating: 1 }[val], 0)
  )
