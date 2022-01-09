/*
* Вторая задача:
Скопируйте код task01.js в task02.js
Продолжаем работать с предыдущей функцией
Функция принимает еще два параметра n и m
Числа m и n формируют диапазон, в пределах которого должно сгенерироваться числа для массива
m и n включительно
Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
* */

{
    function getRandomNumbers(count, n, m, str) {
        const randomNumbers = [];
        for (let i = 0; i < count; i++) {
            if (n < m) {
                return  randomNumbers.push(Math.floor(n + Math.random() * (m + 1 - n)));
            } else return randomNumbers.push(Math.floor(m + Math.random() * (n + 1 - m)));
        }
    }

    console.log(getRandomNumbers(99, -2, 8));
}


