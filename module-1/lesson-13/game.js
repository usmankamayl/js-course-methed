'use strict';

(() => {
    const FIGURES_ENG = ['rock', 'scissors', 'paper'];
    const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    const game = (language) => {
        const result = {
            player: 0,
            computer: 0,
        }
        const lang = language === 'EN' || language === 'ENG' ?
            FIGURES_ENG : FIGURES_RUS;
        return function start() {
            if (language) {
                const rpsPlayer = prompt('rock, scissors, paper');
                const rpsComputer = FIGURES_ENG[getRandomIntInclusive(0, 2)];
                if (!rpsPlayer) {
                        if (confirm('Are you sure you want to go out?')) {
                            return console.log(result);
                        } else start();
                     }
                if (rpsComputer.includes(rpsPlayer.toLowerCase())) {
                    alert('Draw');
                    start();
                }

                if ('rock'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'scissors') {
                    result.player +=1;
                    alert('You won');
                    start();
                } else if ('rock'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'paper') {
                    result.computer +=1;
                    alert('You lose');
                    start();
                } else if ('scissors'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'rock') {
                    result.computer +=1;
                    alert('You lose');
                    start();
                } else if ('scissors'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'paper') {
                    result.player +=1;
                    alert('You won');
                    start();
                } else if ('paper'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'rock') {
                    result.player +=1;
                    alert('You won');
                    start();
                } else if ('paper'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'scissors') {
                    result.computer +=1;
                    alert('You lose');
                    start();
                } else start();

            } else {

                const rpsPlayer = prompt('камень, ножницы, бумага?');
                const rpsComputer = FIGURES_RUS[getRandomIntInclusive(0, 2)];
                if (!rpsPlayer) {
                    if (confirm('Точно ли ты хочешь выйти?')) {
                        return console.log(result);
                    } else start();
                }

                if (rpsComputer.includes(rpsPlayer.toLowerCase())) {
                    alert('Ничья');
                    start();
                }
                if ('камень'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'ножницы') {
                    result.player +=1;
                    alert('Ты победил');
                    start();
                } else if ('камень'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'бумага') {
                    result.computer +=1;
                    alert('Ты проиграл');
                    start();
                } else if ('ножницы'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'камень') {
                    result.computer +=1;
                    alert('Ты проиграл');
                    start();
                } else if ('ножницы'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'бумага') {
                    result.player +=1;
                    alert('Ты победил');
                    start();
                } else if ('бумага'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'камень') {
                    result.player +=1;
                    alert('Ты победил');
                    start();
                } else if ('бумага'.includes(rpsPlayer.toLowerCase()) && rpsComputer === 'ножницы') {
                    result.computer +=1;
                    alert('Ты проиграл');
                    start();
                } else start();
            }
        };
    };


    window.RPS = game;

})();
