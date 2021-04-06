// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""

// // "What was the name of your first pet?"
// maskify("Skippy")                                   == "##ippy"
// maskify("Nananananananananananananananana Batman!") == "####################################man!"

// My Solution
function maskify(cc) {
  const len = cc.length
  return len <= 4 ? cc : `${"#".repeat(len - 4)}${cc.slice(len - 4)}`
}

console.log("1", maskify("4556364607935616"))
console.log("2", maskify("1"))
console.log("3", maskify("11111"))

// Other Solutions

maskify = (cc) => "#".repeat(Math.max(0, cc.length - 4)) + cc.substr(-4)

function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4)
}

function maskify(cc) {
  return cc.slice(-4).padStart(cc.length, "#")
}
