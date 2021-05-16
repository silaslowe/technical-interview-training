function convert(s) {
    let counter = 0
    const hash = new Map()
    const arr =  [...new Set(s.split(""))]
    arr.map(letter => {hash.set(letter, counter)})
  }

console.log(convert("CodeWars"))
console.log(convert("KATA"))