var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var level = 0;

var started = false;

function nextSequence(){
    userClickedPattern = [];

    var randomNumber = Math.floor(Math.random() * 4)

    var randomChoseColor = buttonColors[randomNumber];

    gamePattern.push(randomChoseColor);

    $("#level-title").html("Level " + level);

    level++;

    animatePress(randomChoseColor);

    playSound(randomChoseColor);
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    if(started === true){
        checkAnswer(userClickedPattern.length-1);
    }
});

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");

    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");

    setTimeout(function(){
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

$("body").keydown(function(e){
    if(started === false){
        if(e.key === "a"){
            nextSequence();
            started = true;
        }else{
            $("#level-title").html("The A key, dumb, that was the " + e.key + " key");
        }
    }
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    }else{
        $("#level-title").html("You lose! Your score is " + level);

        started = false;
        level = 0;
        gamePattern = [];

        $("body").addClass("game-over");

        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        setTimeout(function () {
            $("#level-title").html("Press A Key to Start");
        }, 2000);
    }
}