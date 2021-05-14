// console.log("Welcome to the main module")
// const alter = (str) => {
//     const arr = [...str] 
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         if(i % 2 === 0) {
//             result.push(arr[i].toLowerCase())
//         } else {
//             result.push(arr[i].toUpperCase())
//         }
//     }
//       return result.join("")
// }

const alter = (str) => {
  return[...str].map((letter, i) => {
    console.log(i, letter)
    if (i % 2 === 0) {
        return letter.toUpperCase()
    } else {
        return letter.toLowerCase()

}
}).join("")
}
console.log(alter("asdf1234$!dsfasEEdf"))