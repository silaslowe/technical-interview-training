const gcf = (a, b) => {
    if (!b) {
        return a
    }

    return gcf(b, a%b)
}

console.log(gcf(20, 25))

console.log(20%25)