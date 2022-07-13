var userClickedPattern=[];
var gamePattern=[];
var buttonColors=["red","blue","green","yellow"];
var level=0;
var started= false;

$(".btnstart").on("click" , function(){
    if(started === false )
    {
        // $("h1").text("Let's Play");
        started= true;
        nxtSequence();
    }
    
});



function nxtSequence(){
    userClickedPattern=[];
    level++;
    $("h1").text("Level   "+level);
    var randomNumber=Math.floor((Math.random()*4));
    var randomChosenColor= buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);  
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
   

    
}

$(".bttn").on("click",handler);

function handler(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);

}

function playSound(color){
    var audioo=new Audio("sounds/"+color+".mp3");
    audioo.play();

}

function animatePress(pressed){
    $("#"+pressed).addClass("pressed");
    setTimeout(function(){
        $("#"+pressed).removeClass("pressed")
    },100);
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
    {
        if(gamePattern.length === userClickedPattern.length)
        {
            setTimeout(function(){
                nxtSequence();
            },1000);
        }
    }
    else
    {
        $("h1").text("Game Over,Press any Key to restart ! ");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);
        reset();
    }
}

function reset(){
    started=false;
    gamePattern=[];
    level=0;
}


