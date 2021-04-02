// 99 Bottles of Beer

// 7 kyu

// Complete the function that returns the lyrics for the song 99 Bottles of Beer as an array of strings: each line should be a separate element - see the example at the bottom.

// Note: in order to avoid hardcoded solutions, the size of your code is limited to 1000 characters

// Lyrics
// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// 98 bottles of beer on the wall, 98 bottles of beer.
// Take one down and pass it around, 97 bottles of beer on the wall.

console.log("hi")

const sing = () => {
  let song = []
  let counter = 99

  for (let i = 0; i < 100; i++) {
    if (counter === 1) {
      song.push(`${counter} bottle of beer on the wall, ${counter} bottle of beer.`)
      song.push(`Take one down and pass it around, no more bottles of beer on the wall.`)
      console.log(counter)
    } else if (counter === 0) {
      song.push(`No more bottles of beer on the wall, no more bottles of beer.`)
      song.push(`Go to the store and buy some more, 99 bottles of beer on the wall.`)
      console.log(counter)
    } else {
      song.push(`${counter} bottles of beer on the wall, ${counter} bottles of beer.`)
      song.push(`Take one down and pass it around, ${counter - 1} bottles of beer on the wall.`)
      console.log(counter)
    }
    counter--
  }
  return song
}

console.log(sing())
