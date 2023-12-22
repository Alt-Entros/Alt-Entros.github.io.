
function checkAndDisplayResult(inputId, resultId, expectedValue) {
    var inputValue = document.getElementById(inputId).value;
    var result = document.getElementById(resultId);
    var isCorrect = parseFloat(inputValue) === expectedValue;

    result.textContent = isCorrect ? '1' : '0';
    return isCorrect;
}

function checkAndSaveResults(pageNumber, questions) {
    const results = questions.map(question => {
        const { inputId, resultId, expectedValue } = question;
        return checkAndDisplayResult(inputId, resultId, expectedValue);
    });

    // Сохраняем результаты для данной страницы
    localStorage.setItem('resultsPage' + pageNumber, JSON.stringify(results));
}

function checkAndDisplayResult(inputId, resultId, expectedValue) {
    var inputValue = document.getElementById(inputId) ? document.getElementById(inputId).value : null;
    var isCorrect = parseFloat(inputValue) === expectedValue;

    if (document.getElementById(resultId)) {
        document.getElementById(resultId).textContent = isCorrect ? '1' : '0';
    }
    return isCorrect;
}