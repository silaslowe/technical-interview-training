// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp may not return true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, Elixir, Haskell, PureScript, Pascal, R, Rust, Shell).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

const a = [121, 144, 19, 161, 19, 144, 19, 11]
const b = [123, 14641, 20736, 361, 25921, 361, 20736, 361]

function comp(array1, array2) {
  const arr1 = array1.sort((a, b) => a - b)
  const arr2 = array2.sort((a, b) => a - b)

  for (let i = 0; i < arr1.length; i++) {
    if (Math.pow(arr1[i], 2) !== arr2[i]) {
      return false
    }
  }
  return true
}

comp(a, b)

// Other Solution

// ******* .every checks to see if each iteration of the map passes the test. in this case it is v == array2[i]

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false
  array1.sort((a, b) => a - b)
  array2.sort((a, b) => a - b)
  return array1.map((v) => v * v).every((v, i) => v == array2[i])
}

// Holy cow!

function comp(a, b) {
  return (
    !!a &&
    !!b &&
    a
      .map((x) => x * x)
      .sort()
      .join() == b.sort().join()
  )
}

function comp(a, b) {
  if (!a || !b || a.length !== b.length) return false
  return (
    a
      .map((x) => x * x)
      .sort()
      .toString() === b.sort().toString()
  )
}
