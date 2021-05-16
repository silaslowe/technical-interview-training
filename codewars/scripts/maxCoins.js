// LEET

// My Solution:

const maxCoins = (piles) => {
    let pilesCopy = [...piles].sort((a,b) => b - a)
    let largest = []
    pilesCopy.splice((pilesCopy.length/3)*2, pilesCopy.length)
    pilesCopy.map((num, i) => {
        if(i % 2 !== 0){
          return largest.push(num)
        } 
    })
    return largest.reduce((a,b) => a+b,0)
};

// var maxCoins = function(piles) {
//     piles.sort((a, b) => a - b)
//     let result = 0
//     for (let i = 1; i <= (piles.length)/3; i++) {
//         console.log(result, i, )
//         result += piles[piles.length - 2*i]
//     }
//     return result
// };

console.log(maxCoins([9,8,7,6,5,1,2,3,4]))
console.log(maxCoins([2,4,1,2,7,8]))