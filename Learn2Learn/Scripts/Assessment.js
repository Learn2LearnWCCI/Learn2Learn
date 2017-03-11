
//// when document is ready, call the initialize function of our quiz object
//$(document).ready(function () {
//    assessment.initialize();
//});

//// create a javascript quiz object to house our data and functionality
//// it will have a property called scores which is an array
//// and a property called currentQuestion which is an integer
//var assessment = {
//    'scores': [],
//    'currentQuestion': 0
//};

//// create a function to show/hide questions
//assessment.toggleQuestion = function (questionNumber, displayState) {
//    $('#q' + questionNumber).css('display', displayState);
//};

//// add the initialize function to our quiz object
//assessment.initialize = function () {
//    // Determine how many questions we have.
//    // This will add the lastQuestion property to our quiz object along with properties scores and currentQuestion
//    assessment.lastQuestion = $('.question').length;

//    // show first question
//    $('#q1').css('display', 'block');

//    // use jQuery class selector to hook up click event handler to next/prev buttons
//    $(".btnNav").on('click', function () {

//        // figure out id of the current radio group
//        var radioId = 'radio' + assessment.currentQuestion;

//        // store the user's selected radio value
//        assessment.scores[assessment.currentQuestion] = $("input[name='" + radioId + "']:checked").val();

//        // log to console what we've got so far
//        console.log(assessment.scores.join());

//        // navigate either foreward or backward. The $(this) will be a jQuery reference to the clicked button
//        var direction = $(this).attr('value');
//        assessment.toggleQuestion(assessment.currentQuestion, 'none'); // hide showing div
//        if (direction === 'Next') {
//            assessment.currentQuestion++;
//        }
//        else {
//            assessment.currentQuestion--;
//        }
//        assessment.toggleQuestion(assessment.currentQuestion, 'block'); // show new div

//        // test if can go next
//        $('#btnNext').prop('disabled', assessment.canGoNext());

//        // can go prev if haven't asked first question--reverse the logic because test is for disabled not enabled
//        $('#btnPrev').prop('disabled', !(assessment.currentQuestion > 0));
//    });

//    // hook up event handler for radio button selections
//    $('input[type=radio]').change(function () {

//        // enable next button based on test if can go next
//        $('#btnNext').prop('disabled', assessment.canGoNext());

//        // enable submit button if last question has value
//        var canSubmit = assessment.currentQuestion == (assessment.lastQuestion - 1);
//        if (canSubmit) {
//            assessment.enableSubmit();
//        }
//    });
//};

//assessment.enableSubmit = function () {
//    // enable submit button
//    $("#btnSubmit").prop('disabled', false);
//    // change font style from gray to black text to show submit is enabled
//    $(".done").css("color", "#000000");
//    // load values into form's hidden fields
//    var A = 0, K = 0, V = 0;
//    for (var i = 0; i < assessment.lastQuestion; ++i) {
//        if (assessment.scores[i] === 'a') {
//            A++;
//        }
//        if (assessment.scores[i] === 'k') {
//            K++;
//        }
//        if (assessment.scores[i] === 'v') {
//            V++;
//        }
//    }
//    $("#Auditory").val(A);
//    $("#Kinetic").val(K);
//    $("#Visual").val(V);
//};

//assessment.canGoNext = function () {
//    var radioId = 'radio' + assessment.currentQuestion;

//    // can go next if user has both 
//    // selected a radio button value 
//    var canGo = $("input[name='" + radioId + "']:checked").val()

//    // and
//    &&

//    // haven't asked last question
//    assessment.currentQuestion < (assessment.lastQuestion - 1);

//    // reverse the logic here because test is for disabled not enabled
//    return !canGo;
//};





//$(document).ready(function () {
//    assessment.initialize();
//});

//var assessment = {
//    'scores': [],
//}


$(document).ready(function () {
    initialize();
});

var assessmentResults = {
    "scores": [],
}

//This will store the total number of 
var totalQuestions = $(".questions").length;

//Sets the current question to display 1
var currentQuestion = 0;

//Store the selector in a variable
var $questions = $(".questions");

//creating array to store radio values for each questions selected
//var values = [];

//Hide all questions
$questions.hide();



//Show the first question
$($questions.get(currentQuestion)).fadeIn();
function initialize() {
    //Targets next to cycle through assessment questions
    $("#next").click(function () {

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

            // figure out id of the current radio group
            var radioId = "radio" + currentQuestion;
            //console.log(radioId);
            //console.log(assessmentResults.scores);

            // store the user's selected radio value
          
            
             $("input:radio").each(function () {
                if ($(this).is(":checked")) {
                    assessmentResults.scores[currentQuestion] = ($(this).val());
                }
            }

            );
                
            

            // log to console what we've got so far

            //console.log(assessmentResults.scores.join());
            console.log(assessmentResults.scores);
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