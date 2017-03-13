$(document).ready(function () {
    initialize();
});

//creates assessmentResults object with property of scores array 
var assessmentResults = {
    "scores": []
}

//This will store the total number of questions (20)
var totalQuestions = $(".questions").length;

//Sets the current question to display 0
var currentQuestion = 0;

//Store the selector in a variable
var $questions = $(".questions");

//Show the first question

$("#0").show();

function initialize() {
    $("input").on("click",
        function () {
            $(".next").prop("disabled", false);
        });

    $(".next").click(function () {
        $("input:radio").each(function () {
            if ($(this).is((":checked"))) {
                assessmentResults.scores[currentQuestion] = ($(this).val());
            };
        });
        $($questions.get(currentQuestion)).fadeOut(function () {
            currentQuestion = currentQuestion + 1;
            if (currentQuestion === totalQuestions) {
                $("#btnnext").hide();
                assessmentResults.enableSubmit();
            } else {
                $(".next").prop("disabled", true);
                $($questions.get(currentQuestion)).fadeIn();
            }
        });
        //if ($(".next").is("#btnprev")) {
        //    currentQuestion = currentQuestion - 1;
        //        $(".next").prop("disabled", true);
        //        $($questions.get(currentQuestion)).fadeIn();
        //    }
        // log to console what we've got so far
        console.log(assessmentResults.scores);
    });

};
assessmentResults.enableSubmit = function () {
    // enable submit button
    $(".btn").show();
    $("#btnSubmit").prop("disabled", false);
    // load values into form's hidden fields
    var a = 0;
    var k = 0;
    var v = 0;
    $("#btnSubmit").click(function () {
        //event.preventDefault();
        $.each(assessmentResults.scores,
            function(index, value) {
                if (value === "a") {
                    a++;
                }
                if (value === "k") {
                    k++;
                }
                if (value === "v") {
                    v++;
                }
            });
        $("#Auditory").val(a);
        $("#Kinetic").val(k);
        $("#Visual").val(v);

        console.log("");
        console.log("Visual = " + v);
        console.log("Auditory = " + a);
        console.log("kinesthetic = " + k);
    });
};
