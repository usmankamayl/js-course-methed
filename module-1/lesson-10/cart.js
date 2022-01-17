'use strict';

{
  const cart = {
    items: [],
    count: 0,


    increaseCount(countOfProduct) {
      this.count += countOfProduct;
    },

    get TotalPrice() {
      return this.calculateItemPrice();
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
      return this.items.reduce((sum, item) => {
        sum + item.price * item.countOfProduct;
      }, 0);
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


  console.log(cart);
  console.log(cart.TotalPrice);
  cart.print();
  cart.clear();
  console.log(cart.count);
  console.log(cart.TotalPrice);
  cart.print();
}
