const quizQuestions = [
    {
        question: "What is Full Form of HTML",
        a: "HTML",
        b: "TMHL",
        c: "MHTL",
        d: "LTHM",
        ans: "ans1"
    },
    {
        question: "What is Full Form of CSS",
        a: "SSC",
        b: "CSS",
        c: "SCS",
        d: "CCC",
        ans: "ans2"
    },
    {
        question: "What is Full Form of SCSS",
        a: "CSSS",
        b: "SSCS",
        c: "SSSS",
        d: "SCSS",
        ans: "ans4"
    }
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submitButton = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector("#showScore");

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    question.innerText = quizQuestions[questionCount].question;
    option1.innerText = quizQuestions[questionCount].a;
    option2.innerText = quizQuestions[questionCount].b;
    option3.innerText = quizQuestions[questionCount].c;
    option4.innerText = quizQuestions[questionCount].d;
}

loadQuestion();

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((currentElement) => {
        if(currentElement.checked) {
            answer = currentElement.id;
        }
    })
    return answer;
}

const deselectQuestion = () => {
    answers.forEach((currentElement) => currentElement.checked = false);
}

submitButton.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    
    if(checkedAnswer === quizQuestions[questionCount].ans) { 
        // Checking ID of Selected Question with Questions Array List
        score++;
    }

    questionCount++ // Increasing Counter of Question
    deselectQuestion(); // Remove Default Selection of Radio Input
    
    if(questionCount < quizQuestions.length) {
        loadQuestion();
    }
    else {
        showScore.innerHTML = `
            <h3> You Have Score ${score}/${quizQuestions.length} </h3>
            <button onClick="location.reload()">Play Again</button>
        `
    }
})