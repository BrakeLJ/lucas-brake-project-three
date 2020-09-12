//Namespace
const app = {};

//Code to run on initialization 
app.init = () => {
    //Stores keycode when  button PRESSED and plays audio sample assosiated with it
    $(document).on('keydown', function(event) {
        const keyPress = (`audio[data-key="${event.keyCode}"]`);
        const btnPress = (`button[data-key="${event.keyCode}"]`)
        console.log(btnPress);
        $(keyPress)[0].currentTime = 0;
        $(keyPress)[0].play();
        //adds class to handle button animation with a delay to then remove class
        $(btnPress).addClass('mixer__btn--js-press').delay(100).queue(function (next) {
            $(this).removeClass('mixer__btn--js-press');
            next();
        });
    });

    //stores keycode when button CLICKED and plays audio sample assosiated with it 
    //Animation is handled with active state within css
    $('.mixer__btn').on('click', function (e) {
        const getKeyCode = $(this).attr('data-key');
        const buttonClick = (`audio[data-key="${getKeyCode}"]`);
        $(buttonClick)[0].currentTime = 0;
        $(buttonClick)[0].play();
    })
}

//Document ready function
$(function(){
    app.init();
});


