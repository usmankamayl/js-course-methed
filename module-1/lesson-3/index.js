'use strict';
{
    const item = 'Стол';
    const count = 12;
    const category = 'Офисная мебель';
    const price = 8000;

    console.log(item);

    console.log('Общая сумма товара: ', count * price);
}

{
    const item = 'костюм';
    const count = 10;
    const category = 'одежда';
    const price = 5400;

    console.log(`общая сумма товара: ${count * price}`);
}

{
    const item =  prompt('Введите наименование товара:');
    const count = +prompt('Введите количество товара:');
    const category = prompt('Введите категорию товара:');
    const price = +prompt('Введите цену товара:');

    console.log(typeof count, typeof price);
    console.log(`На складе ${count} единицы товара ${item} на сумму ${price * count} руб `)
}
