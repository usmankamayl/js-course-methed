'use strict'

/*
Задание 1
Продолжим работу с cart.js
Обнаружена уязвимость в нашем функционале
Если после добавления последнего товара присвоить к totalPrice любое значение,
например
cart.totalPrice = 10;
то при выводе print() общая стоимость корзины будет равна 10
Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который будет возвращать результат вызова метода calculateItemPrice
метод getTotalPrice больше не нужен
calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не записывал в свойство totalPrice
Вызов метода calculateItemPrice оставить только у геттера totalPrice
*
* */

{
    const cart = {
        items: [],
        count: 0,


        increaseCount(countOfProduct) {
              this.count += countOfProduct;
        },
        // set TotalPrice(value) {
        //       this.calculateItemPrice();
        // },

        get TotalPrice() {
            return  this.calculateItemPrice();
        },

        add(name, price, countOfProduct) {
            this.items.push({
                name,
                price,
                countOfProduct,
            });
            this.increaseCount(countOfProduct);
            this.calculateItemPrice(price, countOfProduct);
        },


        calculateItemPrice() {
            return   this.items.reduce((sum, item) => {
               return sum + item.price * item.countOfProduct
            }, 0);
        },
        clear() {
             this.items = [];
             this.totalPrice = 0;
             this.count = 0;
        },
        print() {
            console.log(`${JSON.stringify(this.items )} \n  Общая стоимось корзины ${this.TotalPrice}`);
        },
    }


     cart.add('phone', 8900, 1);
     cart.add('apple', 89000, 3);
     cart.add('samsung', 75000, 1);


    console.log(cart);
    console.log(cart.TotalPrice);
    //cart.clear();
    console.log(cart.count) ;
    console.log(cart.TotalPrice);
    cart.print();

}
