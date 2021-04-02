//
// My Solution:
function solution(string) {
  return string.replace(/([A-Z])/g, " $1").trim()
}

// Other Solution:
function solution(string) {
  return string
    .split("")
    .map((s) => {
      if (s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90) return " " + s
      else return s
    })
    .join("")
}
