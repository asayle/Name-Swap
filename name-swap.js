// name swap challenge

// tools ->
    // string.prototype.split()
    // array.prototype.reverse()
    // array.prototype.join()

function nameSwap(str) {
    return str.split(' ').reverse().join(' ')
}

console.log(nameSwap('Bill Murray'))
