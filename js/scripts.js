optionA=0;
optionB=0;
optionC=0;
counter=0;
target=0;
const questions = ["♫ you like pina coladas ♫", "♫ you enjoy getting caught in the rain ♫","♫ you're not into yoga ♫", "♫ you have half a brain ♫", "♫ You're not into healthfood ♫", "♫ you are into champagne ♫","♫ you prefer not to be stopped when you're having such a good time, or when you're havin' a ball ♫","♫ we are human ♫", "♫ we are dancer ♫","♫ my sign is vital ♫","♫ my hands are cold ♫"]

function updateQuestion() {
  counter += 1;
  $("#questionContent").text(questions[counter-1]);
  $("#default").prop("checked",true);
}
function logAnswer() {
  test = parseInt(((counter-1)%3)+1);
  if (test===1){
    optionA += parseInt($("input:radio[name=userInput]:checked").val());
    console.log("I ran")
  }else if (test===2){
    optionB += parseInt($("input:radio[name=userInput]:checked").val());
  }else{
    optionC += parseInt($("input:radio[name=userInput]:checked").val());
  }
  console.log(test===1);
  console.log(test===2);
  console.log(test===3);
  console.log(optionA);
  console.log(optionB);
  console.log(optionC);
}
function results(){
  if (optionA>optionB&&optionB>=optionC){
    return "Result A";
  }else if (optionB>optionC&&optionC>=optionA){
    return "Result B";
  }else{
    return "Result C";
  }
}

$(document).ready(function(){
  $("#startButton").click(function(){
    $(".titleCard").addClass("hidden");
    $(".questionCard").removeClass("hidden")
    updateQuestion();
  });
  $("#nextButton").click(function(){
    if (counter > (questions.length-1)){
      $(".questionCard").addClass("hidden");
      $("#answer").text(results());
      $(".answerCard").removeClass("hidden");
    }else{
    logAnswer();
    updateQuestion();
    }
  });
});