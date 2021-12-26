/*
* Напишите функцию, вычисляющую наибольший общий делитель двух чисел
* */

let f = function(a, b) {
    if (!b) {
        return a;
    }

    return f(b, a % b);
}

console.log(f(12, 14));
