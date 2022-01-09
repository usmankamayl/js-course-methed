/*
* Создайте файл game02.js
Усовершенствуйте игру, которую написали в game01
бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
бот запоминает каждое число которое ввел пользователь и записывает в массив
бот отграничивает количество попыток до 30% от количества цифр в диапазоне
если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
если диапазон от 50 до 100, то попыток бот даёт 15
если попытки закончились игра прекращается
* */

{
    let count = 0;
    const numbers = [];
    let input;
    let start;
    let min;
    let max;
    let number;
    let shots;

    function game() {
        console.log(count, 'count-1');
        if (count === 0) {
            start = confirm('Сыграем в игру ?');
            if (!start) return;
            min = +prompt("Введите 1-е число");
            if (!min) return;
            max = +prompt("Введите 2-е число");
            if (!max) return;
            number =Math.floor(Math.random() * (max - min)) + min;
            shots = Math.ceil(.3 * (max - min));
            console.log(number, ' -number')
            console.log(shots, 'shots-1');
            console.log(count, 'count-2')
            input = prompt(`Введите число от ${min} до ${max}. У тебя ${shots} попытки`);
            if (!input) return false;
        }

        if (count >= shots) {
            alert('Больше попыток нет. Ты проиграл');
            console.log('end')
            return;
        }

        if (count > 0) {
            console.log('Я здесь')
            console.log(count, 'count > 0');
            input = prompt(`Введите число от ${min} до ${max}. У тебя ${shots -count} попытки`);
            if (!input) return false;
        }

         while (isNaN(input)) {
            input = +prompt('Введи число!');
        }

        console.log(!numbers.some(el => el === +input), 1);
        if (+input === number) {
            console.log('верно')
            alert('Верно');
            return ;
        }

        if (+input < number && !numbers.some(el => el === +input)) {
                count++;
                numbers.push(+input);
                alert('Меньше');
                game();

            } else if (+input < number) {
                alert('Вы уже вводили это число');
                game();
            }

        console.log(!numbers.some(el => el === +input), 2);
        if (+input > number && !numbers.some(el => el === +input)) {
                count++;
                numbers.push(+input);
                alert('Больше');
                game();
            } else if (input > number) {
                console.log('Вы уже вводили это число -2')
                alert('Вы уже вводили это число');
                game();
            }
    }

    console.log(numbers);
    game();

}

