/*
* Необходимо написать программу для вычисления налога по прогрессивной шкале в зависимости от полученного заработка:

13% на доход до 15 000 ₽

20% на доход от 15 000 ₽ до 50 000 ₽

30% на доход выше 50 000 ₽

Запросить у пользователя доход и вывести в консоль сумму налога
* */

    const income = +prompt('Введите сумму вашего дохода');
    let tax;

    if (income >= 15000 && income <= 50000) {
        tax = .2 * income;
    } else if (income > 50000) {
        tax = .3 * income;
    } else tax = .13 * income;

    console.log(`Налог от вашей зарплаты составляет ${tax} руб`);



