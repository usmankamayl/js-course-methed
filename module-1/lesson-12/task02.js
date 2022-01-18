{
    'use strict'


    function fn (arr) {
        arr.push(Math.floor(Math.random() * 11));


        while ( arr.reduce((sum, current) => sum + current) < 50) {
            fn(arr);
        }
        return arr;
    }

    console.log(fn([]));

}
