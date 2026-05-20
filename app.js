// =================================
// QUIZ DATA
// =================================

const quizData = [
  {
    question: "Me siento triste y desanimado antes de clase. ¿Qué debería elegir?",
    options: [
      { text: "Galletas ultraprocesadas", correct: false },
      { text: "Ensalada de Plátano (Triptófano)", correct: true },
      { text: "Gaseosa helada", correct: false }
    ]
  },

  {
    question: "Tengo un examen importante y estoy muy nervioso. ¿Qué snack ayuda?",
    options: [
      { text: "Mix de Frutos Secos (Magnesio)", correct: true },
      { text: "Un café cargado", correct: false },
      { text: "Caramelos ácidos", correct: false }
    ]
  },

  {
    question: "Estoy muy irritable y de mal humor a mitad de jornada. ¿Qué me falta?",
    options: [
      { text: "Chocolate con leche", correct: false },
      { text: "Snack de papas fritas", correct: false },
      { text: "Jugo de Cítricos (Vitamina C + Hidratación)", correct: true }
    ]
  }
];

// =================================
// VARIABLES
// =================================

let currentQuestionIndex = 0;
let score = 0;

// =================================
// START QUIZ
// =================================

function startQuiz() {

  score = 0;
  currentQuestionIndex = 0;

  document.getElementById('score').innerText = score;

  showScreen('screen-game');

  loadQuestion();
}

// =================================
// LOAD QUESTION
// =================================

function loadQuestion() {

  const currentQuestion = quizData[currentQuestionIndex];

  document.getElementById('question-number').innerText =
    currentQuestionIndex + 1;

  document.getElementById('question-text').innerText =
    currentQuestion.question;

  const optionsContainer =
    document.getElementById('options-container');

  optionsContainer.innerHTML = '';

  currentQuestion.options.forEach(option => {

    const button = document.createElement('button');

    button.innerText = option.text;

    button.className = 'hero-cta';

    button.onclick = () => handleAnswer(option.correct);

    optionsContainer.appendChild(button);

  });
}

// =================================
// HANDLE ANSWER
// =================================

function handleAnswer(isCorrect) {

  if(isCorrect){

    score += 10;

    document.getElementById('score').innerText = score;

    alert("¡Correcto! 🌿 Tu cerebro te lo agradece.");

  } else {

    alert("Cerca, pero ese alimento podría darte un bajón de energía después.");

  }

  currentQuestionIndex++;

  if(currentQuestionIndex < quizData.length){

    loadQuestion();

  } else {

    showResults();

  }
}

// =================================
// SHOW RESULTS
// =================================

function showResults(){

  showScreen('screen-results');

  document.getElementById('final-score').innerText = score;

  let feedback = "";

  if(score >= 30){

    feedback = "¡Eres un experto en Nutrición Emocional!";

  } else if(score >= 10){

    feedback = "Buen intento, sigue aprendiendo con nuestra guía.";

  } else {

    feedback = "Te recomendamos revisar la sección Ciencia.";

  }

  document.getElementById('feedback-final').innerText = feedback;
}

// =================================
// RESET
// =================================

function resetQuiz(){

  showScreen('screen-intro');

}

// =================================
// SCREEN CONTROL
// =================================

function showScreen(screenId){

  document.querySelectorAll('.quiz-screen').forEach(screen => {

    screen.classList.add('hidden');

  });

  document.getElementById(screenId)
    .classList.remove('hidden');
}