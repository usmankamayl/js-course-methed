/*
* В отдельном файле hard_task_02

Получите от пользователя 2 числа

Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов

Не используйте Math.max и Math.min
* */

const a = +prompt('number one');
const b = +prompt('number two');

function min(a, b) {
    return (a - b > 0 && b) || a;
}

console.log(min(a, b));
