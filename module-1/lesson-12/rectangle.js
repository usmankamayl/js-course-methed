'use strict'

/*
* Задача #1
Создать объект rectangle, который описывает ширину и высоту (свойства width и height) прямоугольника
Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера для получения периметра и площади прямоугольника
Сеттеры могут принимать только числа
Геттеры возвращают строку число + "см"
пример "40см"
По умолчанию значения высоты и ширины заданы 5 см
*
* */


const rectangle  = {
    _width: 5,
    _height: 5,
    get perimeter() {
        return `${this._width * 2 + this._height * 2}см`;
    },

    get square() {
        return `${this._width * this._height}см`;
    },

    set width(w) {
        if (typeof w === 'number') {
            return this._width = w;
        }
    },
    set height(h) {
        if (typeof h === 'number') {
            return this._height = h;
        }
    }

};

rectangle.width = 20;
rectangle.height = 10;


console.log(rectangle.perimeter);
console.log(rectangle.square);
