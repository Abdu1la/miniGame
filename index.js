var buttonColours = ["Red", "Blue", "Green", "Yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$("button").click(function() {
  if (!started) {
    $("button").hide();
    $("h1").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".square").click(function() {

  var userChosenColour = $(this).attr("class");
  userClickedPattern.push(userChosenColour);
  console.log(userChosenColour);
  $(this).addClass("clicked");
  setTimeout(() => {
    $(this).removeClass("clicked");
  }, 300);

  checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {

  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function() {
        nextSequence();
      }, 1000);
    }
  } else {


    $("h1").text("try again?");


    startOver();
  }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push("square " + randomChosenColour);

  $("." + randomChosenColour).fadeIn(200).fadeOut(200).fadeIn(200);

}

// function animatePress(currentColor) {
//   $("." + currentColor).addClass("clicked");
//   setTimeout(function () {
//     $("." + currentColor).removeClass("clicked");
//   }, 300);
// }



function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  $("button").show();
}









// var level = 0;
//
//
//
// $('button').on("click", function() { //Start Game Button Click
//   $('button').hide();
//   $('h1').text('READY!!!');
//
//   level = level + 1;
//   setTimeout(() => {
//     $("h1").text("LEVEL " + level);
//
//   }, 2000);
//
//
//
//
//
//   var buttonColours = ["Red", "Blue", "Green", "Yellow"];
//
//   var gamePattern = [];
//   function randomColor(level) {
//     // for (var i = 0; i < level; i++) {
//     var randomChosenColour = 0;
//     randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
//     gamePattern.push("square " + randomChosenColour);
//     // }
//     console.log(gamePattern);
//     return randomChosenColour;
//
//
//   }
//
//
//   // for(i=0; i<level ; i++){
//
//   setTimeout(() => { //The Game Show Pattern
//     $("." + randomColor(level)).fadeOut(100).fadeIn(500);
//   }, 3000);
//
//   // }
//
//
//
//   $(".square").on("click", function() {
//       var userChosenColour = [];
//     userChosenColour.push($(this).attr("class"));
//     console.log(userChosenColour);
//     $(this).addClass("clicked");
//
//     setTimeout(() => {
//       $(this).removeClass("clicked");
//     }, 100);
//     if (userChosenColour == gamePattern) {
//       $("h1").text("Good");
//     } else {
//       $("h1").text("Game Over");
//       $('button').fadeIn(500);
//     }
//   });
//
//
//
// });
//
//
//
//
//
