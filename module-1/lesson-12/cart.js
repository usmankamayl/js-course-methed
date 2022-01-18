/*
* Задача #2
Продолжим работу в cart.js из предыдущего урока
Методы объекта cart не должны обращаться к объекту по имени
В объект cart добавьте сеттер setDiscount и свойство discount
Сеттер setDiscount будет принимать promocode
если promocode будет строка METHED, то в discount будет добавляться значение 15
если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21
метод calculateItemPrice должен учитывать скидку равную процентному значению discount
*
* */
{
  'use strict';

  const cart = {
    items: [],
    count: 0,
    discount: 0,

    increaseCount(countOfProduct) {
      this.count += countOfProduct;
    },

    get TotalPrice() {
      return this.calculateItemPrice();
    },

    set setDiscount(promocode) {
      if (promocode === 'METHED') {
        return this.discount = 15;
      }

      if (promocode === 'NEWYEAR') {
        return this.discount = 21;
      }
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
      return (this.items.reduce((sum, item) => sum + (item.price * item.countOfProduct), 0)) * (100- this.discount) / 100;
      },
    clear() {
      this.items = [];
      this.count = 0;
    },
    print() {
      console.log(`${JSON.stringify(this.items)} \n  Общая стоимось корзины 
      ${this.TotalPrice}`);
    },
  };


  cart.add('phone', 8900, 1);
  cart.add('apple', 89000, 3);
  cart.add('samsung', 75000, 1);
  cart.setDiscount = 'NEWYEAR';

  console.log(cart.TotalPrice);
  cart.print();
  cart.clear();
  console.log(cart.count);
  console.log(cart.TotalPrice);
  cart.print();
}
