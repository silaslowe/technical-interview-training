// String ends with?

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

// Other Solutions

// function solution(str, ending){
//     return str.match(ending+"$")==ending;
//   }

//   function solution(str, ending){
//     return str.endsWith(ending);
//   }