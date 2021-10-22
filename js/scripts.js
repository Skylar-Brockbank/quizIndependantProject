optionA=0;
optionB=0;
optionC=0;
counter=0;
target=0;
const questions = ["♫ you like pina coladas ♫", "♫ you enjoy getting caught in the rain ♫","♫ you're not into yoga ♫", "♫ you have half a brain ♫", "♫ You're not into healthfood ♫", "♫ you are into champagne ♫","♫ you prefer not to be stopped when you're having such a good time, or when you're havin' a ball ♫","♫ we are human ♫", "♫ we are dancer ♫","♫ my sign is vital ♫","♫ my hands are cold ♫"]

function updateQuestion() {
  $("#questionContent").text(questions[counter-1]);
  counter += 1;
}
function logAnswer() {
  let target = ((counter-1)%3)+1;
  if (target===1){
    optionA+=$("input:radio[name=userInput]:checked").val();
  }else if (target===2){
    optionB+=$("input:radio[name=userInput]:checked").val();
  }else{
    optionC+=$("input:radio[name=userInput]:checked").val();
  }
}
function results(){
  if (optionA>optionB&&optionB>=optionC){
    return "Result A";
  }else if (optionB>optionC&&optionC>=optionA){
    return "Result B"
  }else{
    return "Result C"
  }
}

$(document).ready(function(){
  $("#startButton").click(function(){
    $(".titleCard").addClass("hidden");
    $(".questionCard").removeClass("hidden")
    updateQuestion();
  });
  $("#nextButton").click(function(){
    $("#default").prop("checked",true);
    //verified this counter works
    if (counter > questions.length()){
      $(".questionCard").addClass("hidden");
      $(".answerCard").removeClass("hidden")
      $("#answer").text(results());
    }else{
    updateQuestion()
    }
  });
});