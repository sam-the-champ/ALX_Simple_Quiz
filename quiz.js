// Define the checkAnswer function
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element
    const feedback = document.getElementById('feedback');

    // Compare the user's answer with the correct answer and update feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else if (userAnswer) {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Please select an answer before submitting!";
        feedback.style.color = "orange";
    }
}

// Add an event listener to the Submit Answer button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
