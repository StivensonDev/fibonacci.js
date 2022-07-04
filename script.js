
function obtenFibo (num) {
    let Array = [1, 1]
    for (let i = 2; i < num; i++) {
       Array.push(Array[i - 1] + Array[i - 2])
    }
    return Array
}

console.log(obtenFibo(10))
