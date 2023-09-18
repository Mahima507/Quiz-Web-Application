const questions = [
    {
        question: "Which of the following can add a row to a table ?",
        answers:[
            {text: "Alter", correct: false},
            {text: "Update", correct: false},
            {text: "Insert", correct: true},
            {text: "Add", correct: false},
        ] 
    },
    {
        question: "Which data type value is returned by all transcendental math functions ?",
        answers:[
            {text: "int", correct: false},
            {text: "float", correct: false},
            {text: "double", correct: true},
            {text: "long", correct: false},
        ] 
    },
    {
        question: "MySQL written in ",
        answers:[
            {text: "C", correct: false},
            {text: "C++", correct: false},
            {text: "Both the above", correct: true},
            {text: "None of the above", correct: false},
        ] 
    },
    {
        question: "A NULL value is treated as a blank or 0. ",
        answers:[
            {text: "False", correct: true},
            {text: "True", correct: false},
            {text: "All of the above", correct: false},
            {text: "None of the above", correct: false},
        ] 
    },


    {
        question: "What does the acronym CPU stand for in the context of computer science?",
        answers:[
            {text: "Central Peripheral Unit", correct: false},
            {text: "Central Processing Unit", correct: true},
            {text: "Computer Processing Unit", correct: false},
            {text: "Central Power Unit", correct: false},
        ] 
    },
    {    question: "Which programming language is known for its emphasis on readability and simplicity?",
        answers:[
            {text: "C++", correct: false},
            {text: "Java", correct: false},
            {text: "Python", correct: true},
            {text: "Ruby", correct: false},
        ] 

    },
    {    question: "Which data structure follows the Last In, First Out (LIFO) principle?",
        answers:[
            {text: "Queue", correct: false},
            {text: "Linked List", correct: false},
            {text: "Stack", correct: true},
            {text: "Tree", correct: false},
        ] 

    },
    {    question: "1 Gigabyte (GB) = ?",
        answers:[
            {text: "1,024 MB", correct: true},
            {text: "1,000 MB", correct: false},
            {text: "1,200 MB", correct: false},
            {text: "1,275 MB", correct: false},
        ] 

    },
    {    question: "Which among the following cities produces highest e-waste in India?",
        answers:[
        {text: "Delhi", correct: false},
        {text: "Bangalore", correct: false},
        {text: "Chennai", correct: false},
        {text: "Mumbai", correct: true},
    ] 

    },
    {    question: "Who is the father of Computers?",
       answers:[
        {text: " James Gosling", correct: false},
        {text: "Charles Babbage", correct: true},
        {text: "Dennis Ritchie", correct: false},
        {text: "Bjarne Stroustrup", correct: false},
    ] 

   },
   {    question: "The basic architecture of computer was developed by",
   answers:[
    {text: "Charles Babbage", correct: false},
    {text: "Garden Moore", correct: false},
    {text: "Blaise Pascal", correct: false},
    {text: "John Von Neumann", correct: true},
   ] 

  },
  {
    question: "First generation of computer was based on which technology ?",
    answers:[
        {text: "Transistor", correct: false},
        {text: "Vaccum Tube", correct: true},
        {text: "LSI", correct: false},
        {text: "VLSI", correct: false},
    ] 
},
{
    question: "Microprocessor was introduced in which generation of computer ?",
    answers:[
        {text: "Fourth Generation", correct: true},
        {text: "Third Generation", correct: false},
        {text: "Second Generation", correct: false},
        {text: "None of the above", correct: false},
    ] 
},  
{
    question: "Second generation computers are made of ?",
    answers:[
        {text: "LSI", correct: false},
        {text: " VLSI", correct: false},
        {text: "Transistors", correct: true},
        {text: "Vaccum Tubes", correct: false},
    ] 
},

{
    question: "MySQL runs on which operating systems ?",
    answers:[
        {text: "Unix, Linux, Windows and others", correct: true},
        {text: "Any operating system at all", correct: false},
        {text: "Unix and Linux only", correct: false},
        {text: "Linux and Mac OS-X only", correct: false},
    ] 
}
];

 const questionElement = document.getElementById("question");
 const answerButtons = document.getElementById("answer-buttons");
 const nextButton = document.getElementById("next-btn");

 let currentQuestionIndex = 0;
 let score = 0;

 function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }
 function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo +". " + currentQuestion.question;
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML =  answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        });
 }

 function resetState(){
     nextButton.style.display = "none";
     while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
     }
 }

 function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
   }

  function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    } 
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
  }
  function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
  }
  function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
   }


  nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
  });
 

 startQuiz();
