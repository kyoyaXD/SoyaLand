const questions = [
{
    question: "What is my favorite food?",
    options: ["Dosa", "Porotta", "KFC Burger", "Momos"],
    correctIndex: 0
},
{
    question: "Name of my hometown?",
    options: ["Dehradun", "Tirunelveli", "Madurai", "Thoothukudi"],
    correctIndex: 3
},
{
    question: "What year will I graduate?",
    options: ["2027", "2028", "2029", "2026"],
    correctIndex: 0
},
{
    question: "If I had a chance, where would I want to travel first?",
    options: ["USA", "Switzerland", "Japan", "Australia"],
    correctIndex: 2
},
{
    question: "My favorite show out of these?",
    options: ["Slam Dunk", "Attack On Titan", "Stein's Gate", "Dr. Stone"],
    correctIndex: 3
},
{
    question: "If I wasn't stuck studying code all day, what would I wanna be?",
    options: ["Sportsperson", "Astrophysicist", "3d Modeller", "Writer"],
    correctIndex: 0
},
{
    question: "How many total subjects did I have in 3rd sem?",
    options: ["6", "7", "8", "9"],
    correctIndex: 3
},
{
    question: "Which of these sports do I NOT like?",
    options: ["Football", "Volleyball", "Cricket", "Basketball"],
    correctIndex: 2
},
{
    question: "My favorite chocolate out of these?",
    options: ["Snickers", "Dairy Milk", "5-Star", "Perk"],
    correctIndex: 0
},
{
    question: "My favorite passtime?",
    options: ["Sleeping", "Eeping", "Fuifuifuifui", "😴😴😴"],
    correctIndex: 0
},
];

let currentQuestionIndex = 0;

function renderQuestion() {
const questionData = questions[currentQuestionIndex];
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

questionText.textContent = questionData.question;

optionsContainer.innerHTML = "";
questionData.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsContainer.appendChild(button);
});
}

function checkAnswer(selectedIndex) {
const questionData = questions[currentQuestionIndex];
const buttons = document.querySelectorAll("#options-container button");

if(currentQuestionIndex===9){
    buttons[selectedIndex].classList.add("correct");
    alert("Correct!");
}
else if (selectedIndex === questionData.correctIndex) {
    buttons[selectedIndex].classList.add("correct");
    alert("Correct!");
} else {
    buttons[selectedIndex].classList.add("wrong");
    buttons[questionData.correctIndex].classList.add("correct");
    alert("Wrong!");
}
setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
    renderQuestion();
    } else {
    document.body.innerHTML = "<h1>Quiz Complete! 🎉</h1><br/><a href='home.html'>Go Home</a>";
    }
}, 2000);
}
renderQuestion();