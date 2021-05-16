function largestPairSum(numbers){
    const num = numbers.sort((a,b) => b-a)
    return num[0] + num[1]
}

console.log(largestPairSum([10,14,2,23,19]))
console.log(largestPairSum([-100,-29,-24,-19,19]))