/*
* Первая задача:
Напишите функцию filter()

функция принимает в параметрах 2 массива

Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.

Пример:
Результат функции: массив из всех студентов, которые сдали экзамен.
* */

const allStudents = ['Иванов', 'Сидоров', 'Петров', 'Павлов', 'Макаров', 'Самойлов', 'Петруха'];
const failedStudents = ['Сидоров', 'Павлов', 'Самойлов'];


function filter(arr1, arr2) {
   const successfulStudents = [];
   for (let i = 0; i < arr1.length; i++) {
       if (!arr2.includes(arr1[i])) {
           successfulStudents.push(arr1[i]);
       }
   }
   return successfulStudents;
}

console.log(filter(allStudents, failedStudents));
