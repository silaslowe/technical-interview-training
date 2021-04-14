// Isograms

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

// My Solution

function isIsogram(str) {
  if (!str) {
    return true
  }
  const chars = str.toLowerCase().split('')
  return [
    ...new Set(
      chars.filter((c, index) => {
        return chars.indexOf(c) !== index
      })
    ),
  ].length > 0
    ? false
    : true
}

console.log(isIsogram('Dermatoglyphics'))
console.log(isIsogram('Dermatoglyphicss'))
console.log(isIsogram('Dermatoglyphicsz'))
console.log(isIsogram(''))

// Other Solutions

function isIsogram(str) {
  return !str.match(/([a-z]).*\1/i)
}

function isIsogram(str) {
  return !/(\w).*\1/i.test(str)
}

function isIsogram(str) {
    return !str || str.length === new Set(str.toLowerCase()).size
}
