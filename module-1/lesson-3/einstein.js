/**
 *  Создайте 2 константы myWeight и speedLight

 ✔ В myWeight запишите вашу массу тела (или кота), а в speedLight запишите скорость света 3e8


 ✔ Используя формулу E=mc2 посчитайте значение энергии вашего тела

 ✔ Результат выведите в консоль
 */


const myWeight = 30;
const speedLight = 3e8;

const energy = myWeight * (speedLight ** speedLight);

console.log(energy);
