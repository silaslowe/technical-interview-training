var removeDuplicates = function(nums) {
    // return [...new Set(nums)]
    let counter = 0
    for(let i = 0; i < nums.length; i++) {
        console.log(nums[i], nums[i+1])
        if(nums[i] === nums[i+1]) {
            nums.splice(nums[i+1],1)
            console.log(nums, nums[i], nums[i+1])
            counter++
        }
    }
    if(counter > 0) {
        removeDuplicates(nums)
    }
    return nums
};


// console.log(removeDuplicates([1,1,1]))
// console.log(removeDuplicates([1,1,2]))
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
// console.log(removeDuplicates([-1,0,0,0,0,3,3]))
console.log(removeDuplicates([ -3, -2,-1, 1,0,0,0,3]))


