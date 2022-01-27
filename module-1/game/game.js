'use strict';

(() => {

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const game = () => {
        const result = {
            ballPlayer: 5,
            ballBot: 5,
        }
        let step = 0;
        return function  start () {
            step++;
            if (result.ballPlayer <= 0 && result.ballBot > 0) {
                alert(`Ты проиграл! Игра окончена. Количество шаров бота ${result.ballBot}`);
                const loss = document.querySelector('.loss');
                loss.style.display = 'block';
                return;
            }

            if (result.ballBot <= 0 && result.ballPlayer > 0) {
                alert(`Ты выиграл! Игра окончена Количество твоих шаров ${result.ballPlayer}`);
                const victory = document.querySelector('.victory');
                victory.style.display = 'block';
                return;
            }

            if (step % 2 !== 0) {
                const stepPlayer = +prompt(`Введите количество шаров от 1 до ${result.ballPlayer}`);
                if (!stepPlayer) {
                    return;
                }
                const stepBot = getRandomIntInclusive(1, 2);
                if (stepPlayer % 2 === 0 && stepBot === 2) {
                    alert('Бот угадал');
                    result.ballPlayer -= stepPlayer;
                    result.ballBot += stepPlayer;
                    start();
                } else if (stepPlayer % 2 === 0 && stepBot === 1) {
                    alert('Бот не угадал');
                    result.ballBot -= stepPlayer;
                    result.ballPlayer += stepPlayer;
                    start();
                } else if (!stepPlayer % 2 === 0 && stepBot === 1) {
                    alert('Бот угадал');
                    result.ballPlayer -= stepPlayer;
                    result.ballBot += stepPlayer;
                    start();
                } else if (!stepPlayer % 2 === 0 && stepBot === 2) {
                    alert('Бот не угадал');
                    result.ballBot -= stepPlayer;
                    result.ballPlayer += stepPlayer;
                    start();
                }
            } else  {
                const stepBot = getRandomIntInclusive(1, result.ballBot);
                console.log(stepBot);
                const stepPlayer = +prompt('Четные или нечетные шары загадал бот? Введите 1 или 2');
                if (stepBot % 2 === 0 && stepPlayer === 2) {
                    alert('Ты угадал');
                    result.ballPlayer += stepBot;
                    result.ballBot -= stepBot;
                    start();
                } else if (stepBot % 2 === 0 && stepPlayer === 1) {
                    alert('Ты не угадал');
                    result.ballBot += stepBot;
                    result.ballPlayer -= stepBot;
                    start();
                } else if (!stepBot % 2 === 0 && stepPlayer === 1) {
                    alert('Ты угадал');
                    result.ballPlayer += stepBot;
                    result.ballBot -= stepBot;
                    start();
                } else if (!stepBot % 2 === 0 && stepPlayer === 2) {
                    alert('Ты не угадал');
                    result.ballBot += stepBot;
                    result.ballPlayer -= stepBot;
                    start();
                }
            }

        }
    }

    window.marbles = game;


})()
