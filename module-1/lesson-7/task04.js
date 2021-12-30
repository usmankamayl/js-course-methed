/*
Напишите функцию getAveragePriceGoods
для получения средней цены товара
Дан многомерный  массив:
const allСashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];
В каждом массиве из двух элементов, первым является количество товаров в чеке, а вторым — общая сумма.
Необходимо посчитать среднюю стоимость одного товара в магазине.
*/
{
    const allСashbox = [
        [12, 4500],
        [7, 3210],
        [4, 650],
        [3, 1250],
        [9, 7830],
        [1, 990],
        [6, 13900],
        [1, 370]
    ];

    function getAveragePriceGoods (arr) {
        let totalPriceGoods = 0;
        let  averagePriceGoods = 0;
        for (let i = 0; i < arr.length; i++) {
            totalPriceGoods += arr[i][1] / arr[i][0];
        }
        averagePriceGoods = totalPriceGoods / arr.length;
        return Math.floor(averagePriceGoods);
    }

    console.log(getAveragePriceGoods(allСashbox));
}

