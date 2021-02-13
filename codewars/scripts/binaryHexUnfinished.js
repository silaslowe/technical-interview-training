const binaryNum = (num) => {
  if (num == 0) {
    let bi = 0
  } else 
  let bi = (num % 2) + binaryNum(num / 2)
  return bi
}

console.log(binaryNum(12))
