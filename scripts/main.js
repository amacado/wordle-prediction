// Reference to the DOM element where the solution will be exposed
const wordleSolutionContainer = $('#wordle-solution');

// Initialise DatePicker
$('#datepicker').datepicker();

// When user selects a date predict the wordle solution
// and update the DOM
$('#datepicker').on('changeDate', function (e) {
    const predictedSolution = Pa(e.date);
    wordleSolutionContainer.html(predictedSolution);
});


