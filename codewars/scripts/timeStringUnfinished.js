const timeCorrect = (timeString) => {
  console.log(timeString)
  if (timeString === null) {
    return null
  }
  console.log(timeString)

  if (timeString === "") {
    return ""
  }
  console.log(timeString)

  let broken = [...timeString].filter((b) => b === "0" || parseInt(b) || b === ":")
  let splitted = timeString.split(":").map((num) => parseInt(num))
  console.log(broken, splitted)
  console.log(broken.length, [...timeString].length)

  if (broken.length < [...timeString].length) {
    return null
  }

  if (splitted[1] > 59) {
    splitted[0] = splitted[0] + 1
    splitted[1] = splitted[1] - 59
    console.log(splitted)
  }
  if (splitted[2] > 59) {
    splitted[1] = splitted[1] + 1
    splitted[2] = splitted[2] - 59
    console.log(splitted)
  }
  if (splitted[0] > 24) {
    splitted[0] = 0
    console.log(splitted)
  }
  splitted = splitted.map((n) => {
    if (n.length < 2) {
      n = `0${n}`
    }
  })
  console.log(splitted)

  return splitted.join(":")
}
timeCorrect("19, 99, 9")

// // Null or Empty
// Test.assertEquals(timeCorrect(null), null);
// Test.assertEquals(timeCorrect(""), "");

// // Invalid Format
// Test.assertEquals(timeCorrect("001122"), null);
// Test.assertEquals(timeCorrect("00;11;22"), null);
// Test.assertEquals(timeCorrect("0a:1c:22"), null);

// // Correction Tests
// Test.assertEquals(timeCorrect("09:10:01"), "09:10:01");
// Test.assertEquals(timeCorrect("11:70:10"), "12:10:10");
// Test.assertEquals(timeCorrect("19:99:09"), "20:39:09");
// Test.assertEquals(timeCorrect("19:99:99"), "20:40:39");
// Test.assertEquals(timeCorrect("24:01:01"), "00:01:01");
// Test.assertEquals(timeCorrect("52:01:01"), "04:01:01");
