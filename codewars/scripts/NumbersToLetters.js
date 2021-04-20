// Numbers To Letters

// Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

// All inputs will be valid.

// My Solution

function switcher(x) {
  const arr = []
  for(let i = 0; i < x.length; i ++) {
    if(x[i] >= 1 & x[i] <= 26) {
      arr.push(String.fromCharCode(97 + (26 - x[i])))
    } else if (x[i] === '27') {
    arr.push("!")
    } else if (x[i] === '28') {
    arr.push("?")
    } else {
    arr.push(String.fromCharCode(32))
    }
}
  return arr.join("")
}

console.log(switcher(['24', '27', '12', '23', '22', '4', '26', '9', '28','8']))

// Other Solutions

const alpha = ' zyxwvutsrqponmlkjihgfedcba!? '
const switcher = x => x.map(item => alpha[item]).join('')

const switcher=x=>x.reduce((a,b)=>a+" ?!abcdefghijklmnopqrstuvwxyz"[29-b],"")


