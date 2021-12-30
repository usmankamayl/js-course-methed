/*
* Напишите функцию getAverageValue
для получения среднеарифметического значения
с округлением в меньшую сторону до целого числа
С помощью этой функции получите средний чек за день, в массиве данные всех чеков за день:
const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
* */
{
    const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

    function getAverageValue([...arr]) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return Math.floor(sum / arr.length);
    }

    console.log(getAverageValue(allСashbox));
    console.log(allСashbox);

}
