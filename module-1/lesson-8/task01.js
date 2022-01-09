/*
* Первая задача:
Напишите функцию генератор  массива случайных чисел в файле task01.js
Функция принимает один обязательный параметр это количество элементов в массиве
И возвращает массив со случайными числами от одного до 100 включительно;
* */

{
    function getRandomNumbers(count) {
        const randomNumbers = [];
        for (let i = 0; i < count; i++) {
            randomNumbers.push(Math.floor(Math.random() * 100) + 1);
        }

        return randomNumbers;
    }

    console.log(getRandomNumbers(99));
}

