$(document).ready(function () {
    initialize();
});

//This will store the total number of 
var totalQuestions = $('.questions').length;

//Sets the current question to display 1
var currentQuestion = 0;

//Store the selector in a variable
var $questions = $('.questions');

//creating array to store radio values for each questions selected
var values = [];

//Hide all questions
$questions.hide();



//Show the first question
$($questions.get(currentQuestion)).fadeIn();
function initialize() {
    //Targets next to cycle through assessment questions
    $('#next').click(function () {

        //this will make current question fade away display next question
        $($questions.get(currentQuestion)).fadeOut(function () {
            //this will increment currentQuestion by 1
            currentQuestion = currentQuestion + 1;
            if (currentQuestion == totalQuestions) {
                var result = sum_values();
                alert(result);
            }
            else {
                //if all question are not answered show next question
                $($questions.get(currentQuestion)).fadeIn();
            }
        });
    }); $('#prev').click(function () {
        //this will make current question fade away display next question
        $($questions.get(currentQuestion)).fadeOut(function () {
            //this will increment currentQuestion by 1
            currentQuestion = currentQuestion - 1;
            if (currentQuestion > 1) {
                var result = sum_values();
                alert(result);
            }
            else {
                //if all question are not answered show next question
                $($questions.get(currentQuestion)).fadeIn();
            }
        });
    });
};