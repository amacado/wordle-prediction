const wordleSolutionContainer = $('#wordle-solution');

$('#datepicker').datepicker();

$('#datepicker').on('changeDate', function (e) {
    const predictedSolution = Pa(e.date);
    wordleSolutionContainer.html(predictedSolution);
});


