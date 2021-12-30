/*
* Третья задача:
Напишите функцию addPrefix
Функция получает массив в виде параметров и возвращает массив с префиксами
После префикса пробел добавляется автоматически

Входящий массив:

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

Вызов функции:
addPrefix(names, 'Mr')
Результат функции:

['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];
* */

const names= ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

function addPrefix (names, prefix) {
    const newArr = [];
    for (let i = 0; i < names.length; i++) {
        newArr.push(prefix + ' ' + names[i]);
    }
   return  newArr;
}

console.log(addPrefix(names, 'Mr'));
