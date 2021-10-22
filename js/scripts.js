optionA=0;
optionB=0;
optionC=0;
counter=0;

function updateQuestion() {
  $("#questionContent").text(questions[counter]);
}


const questions = ["♫ you like pina coladas ♫", "♫ you enjoy getting caught in the rain ♫","♫ you're not into yoga ♫", "♫ you have half a brain ♫", "♫ You're not into healthfood ♫", "♫ you are into champagne ♫","♫ you prefer not to be stopped when you're having such a good time, or when you're havin' a ball ♫","♫ we are human ♫", "♫ we are dancer ♫","♫ my sign is vital ♫","♫ my hands are cold ♫"]
$(document).ready(function(){
  $("#startButton").click(function(){
    $(".titleCard").addClass("hidden");
    $(".questionCard").removeClass("hidden")
    counter = 0;
    updateQuestion();
  });
  $("#nextButton").click(function(){

    // This is where the call to the function will be
    counter+=1;
    $("#default").prop("checked",true);
    //verified this counter works
    updateQuestion()
    console.log(((counter-1)%3)+1);
  });
});