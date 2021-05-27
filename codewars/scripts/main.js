// function solution(str, ending){
//     const end = new RegExp(`${ending}$`, 'g')
//     return end.test(str)
//   }

  function solution(str, ending){
    const end = ending.split("")
    const s = str.split("")

    console.log(s.slice(str.length - end.length, s.length), end)
    return s.slice(str.length - end.length, s.length).join() == end.join()
  }  

console.log(solution('abcde', 'cde'))
console.log(solution('abcde', 'abc'))
console.log(solution('abcde', 'e'))