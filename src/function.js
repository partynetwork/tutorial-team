/**
 *
 * @param {number} n
 * @returns {*}
 */

function fibo(n){
    if(n===1||n===0) {
        return n
    }
    return fibo(n-1) + fibo(n-2)
}

console.log(fibo(6))
