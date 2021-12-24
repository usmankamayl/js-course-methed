'use strict';

{
    const item =  prompt('Введите наименование товара:');
    const count = +prompt('Введите количество товара:');
    const category = prompt('Введите категорию товара:');
    const price = +prompt('Введите цену товара:');

    if (typeof count === 'number' && typeof price === 'number' && !isNaN(count) && !isNaN(price)) {
        console.log(`На складе ${count} единицы товара ${item} на сумму ${price * count} руб `);
    } else console.log("Вы ввели некорректные данные");

}
