function getSecondLargest(nums) {
   const arr = [...new Set(nums)].sort((a, b) => a -b)
   console.log(arr[arr.length-1])
    return arr[arr.length-2]
}

console.log(getSecondLargest([2,3,6,6,5]))
console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]))