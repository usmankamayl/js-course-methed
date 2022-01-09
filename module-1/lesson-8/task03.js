/*
* Третья задача:
Скопируйте код task02.js в task03.js
Добавьте 4-ый опциональный параметр у функции
 4-ый опциональный параметр это строка:
если функция получает 'even', то функция возвращает массив чётных чисел
если функция получает 'odd', то функция возвращает массив нечётных чисел
* */
{
    function getRandomNumbers(count, n, m, str) {
        let randomNumbers = [];
        for (let i = 0; i < count; i++) {
            if (n < m) {
                randomNumbers.push(Math.floor(n + Math.random() * (m + 1 - n)));
            } else  randomNumbers.push(Math.floor(m + Math.random() * (n + 1 - m)));
        }
        if (str === 'even')  return  randomNumbers.filter(num => num % 2 === 0)
        if (str === 'odd') return randomNumbers.filter(num => num % 2 !== 0);
        return randomNumbers;
    }

    console.log(getRandomNumbers(10, 3, 11));
}


