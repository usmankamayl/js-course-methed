/*
Напишите функцию isPrime.
Она принимает число и возвращает true, если число является простым, а в ином случае false.
Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.
Например, 5 - простое число, так как делится без остатка только на 1 и на себя.
151, 911, 1987 - так же простые числа
Используйте цикл for в функции
* */
{
    function isPrime(n) {
        if(typeof n !== 'number' || n === 0 || n === 1 || isNaN(n)) {
            console.log('Не корректное значение. Введите число не равное 0 и 1')
        } else {
            let flag = true;
            for (let i = 2; i < n; i++) {
                if(n % i === 0) {
                    flag = false;
                    console.log(`Число ${n} не является простым`);
                    break;
                }
            }
            if(flag) {
                console.log(`Число ${n} является простым`);
            }
        }
    }
    isPrime(11);
}

