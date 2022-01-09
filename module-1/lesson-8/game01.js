/*
* Создайте файл game01.js
Написать простой игровой бот, который умеет следующее:
Загадывает число от 1 до 100;
предлагает пользователю ввести свой вариант отгадки;
если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
если пользователь вводит правильное число, то бот выводит “Правильно!”;
если пользователь ввел не число, то выводит “Введи число!”;
если пользователь нажимает “Отмена”, то игра заканчивается.
* */
{
    let count = 0;
    const number = Math.floor(Math.random() * 100) + 1;
    function game() {
        console.log(number);
        let input;
        let start;
        console.log(count);

        if (count === 0) {
            start = confirm('Сыграем в игру ?');
            if (!start) return false;
            input = prompt('Введите число от 1 до 100');
            if (!input) return false;
        }

        if (count > 0) {
            input = prompt('Введите число от 1 до 100');
            if (!input) return false;
        }
        count++;
        console.log(count);
        if (isNaN(+input) && typeof +input !== 'number') {
            input = prompt('Введи число!');
            if (!input) return false;
        }

        if (+input === number) {
            alert('Верно');
        } else if (+input < number) {
            alert('Меньше');
            game();
        } else {
            alert('Больше');
            game();
        }
    }

    game();


}

