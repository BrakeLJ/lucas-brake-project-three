//Namespace
const app = {};

app.sampleChoice = '6am';

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

    //Listen for click on switch button to change audio samples between two sets
    $('.mixer__switch').on('click', function() {
        //Changes to tears sample
        if (app.sampleChoice === '6am') {
            app.sampleChoice = 'tears'
            $('.audio-files').html(`
                <audio data-key="49" src="./assets/audio/tears/1_4 Note Chops/After Laughter Verse1.wav"></audio>
                <audio data-key="50" src="./assets/audio/tears/1_4 Note Chops/After Laughter Verse2.wav"></audio>
                <audio data-key="51" src="./assets/audio/tears/1_4 Note Chops/After Laughter Verse3.wav"></audio>
                <audio data-key="52" src="./assets/audio/tears/1_4 Note Chops/After Laughter Verse4.wav"></audio>
                <audio data-key="81" src="./assets/audio/tears/1_4 Note Chops/After Laughter Verse5.wav"></audio>
                <audio data-key="87" src="./assets/audio/tears/1_4 Note Chops/After Laughter Verse6.wav"></audio>
                <audio data-key="69" src="./assets/audio/tears/1_4 Note Chops/After Laughter Verse7.wav"></audio>
                <audio data-key="82" src="./assets/audio/tears/1_4 Note Chops/After Laughter Verse8.wav"></audio>
                <audio data-key="65" src="./assets/audio/tears/Whole Bar Chops/After Laughter Chorus Bar 1.wav"></audio>
                <audio data-key="83" src="./assets/audio/tears/Whole Bar Chops/After Laughter Chorus Bar 2.wav"></audio>
                <audio data-key="68" src="./assets/audio/tears/Whole Bar Chops/After Laughter Chorus Bar 3.wav"></audio>
                <audio data-key="70" src="./assets/audio/tears/Whole Bar Chops/After Laughter Chorus Bar 4.wav"></audio>
                <audio data-key="90" src="./assets/audio/tears/Drum Samples/Kick Gold 13.wav"></audio>
                <audio data-key="88" src="./assets/audio/tears/Drum Samples/Snare RnB A 1.wav"></audio>
                <audio data-key="67" src="./assets/audio/tears/Drum Samples/ClosedHH HipHop A 2.wav"></audio>
                <audio data-key="86" src="./assets/audio/tears/Wu Tan Stab.wav  "></audio>`
            );
            $('.mixer__song-name').html(`After Laughter - Wendy Rene`);
        } else {
            //changes to 6am sample
            app.sampleChoice = '6am'
            $('.audio-files').html(`
                <audio data-key="49" src="./assets/audio/6am/verse1.wav"></audio>
                <audio data-key="50" src="./assets/audio/6am/verse2.wav"></audio>
                <audio data-key="51" src="./assets/audio/6am/verse3.wav"></audio>
                <audio data-key="52" src="./assets/audio/6am/verse4.wav"></audio>
                <audio data-key="81" src="./assets/audio/6am/verse5.wav"></audio>
                <audio data-key="87" src="./assets/audio/6am/verse6.wav"></audio>
                <audio data-key="69" src="./assets/audio/6am/verse7.wav"></audio>
                <audio data-key="82" src="./assets/audio/6am/verse8.wav"></audio>
                <audio data-key="65" src="./assets/audio/6am/chorus1.wav"></audio>
                <audio data-key="83" src="./assets/audio/6am/chorus2.wav"></audio>
                <audio data-key="68" src="./assets/audio/6am/chorus3.wav"></audio>
                <audio data-key="70" src="./assets/audio/6am/chorus4.wav"></audio>
                <audio data-key="90" src="./assets/audio/6am/chorus5.wav"></audio>
                <audio data-key="88" src="./assets/audio/6am/chorus6.wav"></audio>
                <audio data-key="67" src="./assets/audio/6am/chorus7.wav"></audio>
                <audio data-key="86" src="./assets/audio/6am/chorus8.wav"></audio>`
            );
            $('.mixer__song-name').html(`6am - Fits and the Tantrums`);
        };
    })
}

//Document ready function
$(function(){
    app.init();
});


//assign button a variable called wu tang. if button ===wutang then on click change variable to fitz and 

// < !--Audio files-- >
                

                