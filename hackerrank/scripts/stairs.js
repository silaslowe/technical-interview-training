const stairs = (num) => {
  let white = num - 1
  let pound = num - white
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(`${String.fromCharCode(32).repeat(white)}${String.fromCharCode(35).repeat(pound)}`)
    white--
    pound++
    console.log(white, pound)
  }
  console.log(arr.join("\n"))
}

stairs(5)
