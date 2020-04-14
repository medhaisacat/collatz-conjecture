var number = process.argv[2]

var count = 0

while (number > 1) {
    count++

    if (number % 2 == 0) {
        number /= 2
    } else {
        number *= 3
        number++
    }

}

console.log(count)