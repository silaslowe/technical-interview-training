// 7. Reverse Integer
// Easy

// 4720

// 7209

// Add to List

// Share
// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).


// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
// Example 4:

// Input: x = 0
// Output: 0
 

// Constraints:

// -231 <= x <= 231 - 1


const reverse = (x) => {
    const num = parseInt(x.toString().split("").reverse().join(""))
    if (num < -(2 ** 31) || num > (2 ** 31) - 1) {
        return 0
    }
    if (x < 0) {
        return -num
    }
    return num
};

console.log(reverse(120))
console.log(reverse(0))
console.log(reverse(-123))
console.log(reverse(-2147483412))
console.log(reverse(9646324351))
