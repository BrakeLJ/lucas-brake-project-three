const app = {};

app.init = () => {
    $('.mixer').on('keydown', function(e) {
        const keyPress = (`audio[data-key="${e.keyCode}"]`)
        $(keyPress)[0].currentTime = 0;
        $(keyPress)[0].play();
        //add class to handle transition
    });

    $('.mixer').on('click', function() {

    })


    // $('.mixer__btn2').on('click', function () {
    //     $('audio')[1].play();
    // });
    // $('.mixer__btn3').on('click', function () {
    //     $('audio')[2].play();
    // });
    // $('.mixer__btn4').on('click', function () {
    //     $('audio')[3].play();
    // });
    // $('.mixer__btn5').on('click', function () {
    //     $('audio')[4].play();
    // });
    // $('.mixer__btn6').on('click', function () {
    //     $('audio')[5].play();
    // });
    // $('.mixer__btn7').on('click', function () {
    //     $('audio')[6].play();
    // });
    // $('.mixer__btn8').on('click', function () {
    //     $('audio')[7].play();
    // });
    // $('.mixer__btn9').on('click', function () {
    //     $('audio')[8].play();
    // });
    // $('.mixer__btn10').on('click', function () {
    //     $('audio')[9].play();
    // });
    // $('.mixer__btn11').on('click', function () {
    //     $('audio')[10].play();
    // });
    // $('.mixer__btn12').on('click', function () {
    //     $('audio')[11].play();
    // });
    // $('.mixer__btn13').on('click', function () {
    //     $('audio')[12].play();
    // });
    // $('.mixer__btn14').on('click', function () {
    //     $('audio')[13].play();
    // });
    // $('.mixer__btn15').on('click', function () {
    //     $('audio')[14].play();
    // });
    // $('.mixer__btn16').on('click', function () {
    //     $('audio')[15].play();
    // });
}

$(function(){
    app.init();
    });

    //write a function that stores the value of a key being pressed
    //when the key is clicked it stores the value and plays that key in the array