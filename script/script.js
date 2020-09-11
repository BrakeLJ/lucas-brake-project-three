const app = {};

app.init = () => {
    //Stores keycode when  button pressed and plays audio sample assosiated with it
    $('.mixer__btn').on('keydown', function(event) {
        const keyPress = (`audio[data-key="${event.keyCode}"]`);
        $(keyPress)[0].currentTime = 0;
        $(keyPress)[0].play();
    });

    //stores keycode when button clicked and plays audio sample assosiated with it
    $('.mixer__btn').on('click', function(e) {
        const getKeyCode = $(this).attr('data-key');
        const buttonClick = (`audio[data-key="${getKeyCode}"]`);
        $(buttonClick)[0].currentTime = 0; 
        $(buttonClick)[0].play();
    })
}

$(function(){
    app.init();
    });

    