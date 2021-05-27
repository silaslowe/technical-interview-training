function bmi(weight, height) {
    const b = weight/(height ** 2)
    if (b < 18.5) {
        return "Underweight"
    } else if (b <= 25) {
        return "Normal"
    } else if (b <= 29) {
        return "Overweight"
    } else {
        return "Obese"
    }
   }

  console.log(bmi(80, 1.80))