/*
* Вторая задача:
Напишите функцию, которая принимает строку и возвращает модифицированную строку
Строка начинается с большой буквы, остальные буквы маленькие
Пример:  "привет Мир" => "Привет мир"
* */
{
    const str = 'привет Мир';

    let newStr = '';
    newStr = str[0].toUpperCase() + str.slice(1).toLowerCase();
    console.log(newStr);
}

