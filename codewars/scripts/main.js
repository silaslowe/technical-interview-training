// Complete the solution so that it returns a formatted string. The return value should equal "Value is VALUE" where value is a 5 digit padded number.

// Example:

// solution(5) // should return "Value is 00005"

// My Solution

function solution(value){
    return `Vaule is ${"0".repeat(5-value.toString().length)}${value}`
    }


console.log(solution(1204))
console.log(solution(109))

// Other Solution

function solution(value){
    return "Value is " + ("00000" + value).slice(-5);
  }
  
  function solution(value){
  const solution = value => 'Value is ' + value.toString().padStart(5, '0');
