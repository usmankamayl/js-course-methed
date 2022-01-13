'use strict'

/*
* Создайте файл cart.js, подключите к html-файлу
Создайте объект cart — корзина
Объект будет содержать следующие свойства:
items = пустой массив - это товары
totalPrice = 0 - общая стоимость корзины
count = 0 - количество товаров
и методы
getTotalPrice - получить общую стоимость товаров
add - добавить товар
increaseCount - увеличить количество товаров
calculateItemPrice - посчитать общую стоимость товаров
clear - очистить корзину
print - распечатать корзину
Далее описание каждого метода
getTotalPrice()
метод возвращает значение свойства totalPrice
calculateItemPrice()
пересчитывает стоимость всей корзины и записывает значение в totalPrice
increaseCount()
Принимает один параметр(число)
Увеличивает свойство count на это число
add()
Принимает три параметра:
название товара
цену товара
количество товара (опциональный параметр, по умолчанию 1 товар)
этот метод формирует объект из полученных параметров и добавляет его в свойство items
так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
clear()
Очищает полностью нашу корзину, возвращает все значения в изначальные
print()
Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины

*
* */

{
    const cart = {
        items: [],
        totalPrice: 0,
        count: 0,
        getTotalPrice() {
            return this.totalPrice;
        },

        increaseCount(countOfProduct) {
            return  this.count += countOfProduct;
        },
        calculateItemPrice(price, countOfProduct) {
            return this.totalPrice = this.totalPrice + price * countOfProduct;
        },

        add(name, price, countOfProduct = 1) {
            this.items.push({
                name,
                price,
                countOfProduct,
            });
            this.increaseCount(countOfProduct);
            this.calculateItemPrice(price, countOfProduct);
        },
        clear() {
             this.items = [];
             this.totalPrice = 0;
             this.count = 0;
        },
        print() {
            return console.log(`${JSON.stringify(this.items )} \n  Общая стоимось корзины ${this.totalPrice}`);
        },
    }


     cart.add('phone', 8900, 1);
     cart.add('apple', 89000, 3);
     cart.add('samsung', 75000, 1);



    console.log(cart.getTotalPrice());
    //cart.clear();
    console.log(cart.count) ;
    console.log('cart.getTotalPrice() -', cart.getTotalPrice());
    cart.print();

    //cart.calculateItemPrice();
}
