const questions = [
    { question: 'پایتخت ایران کجاست؟', options: ['مشهد', 'تهران', 'اصفهان', 'شیراز'], correct: 1 },
    { question: 'بزرگ‌ترین سیاره منظومه شمسی؟', options: ['زمین', 'زهره', 'مشتری', 'مریخ'], correct: 2 },
    { question: 'نماد شیمیایی O مربوط به چه عنصری است؟', options: ['طلا', 'اکسیژن', 'نقره', 'مس'], correct: 1 },
    { question: 'حاصل 5 × 8 چیست؟', options: ['35', '45', '40', '50'], correct: 2 },
    { question: 'سریع‌ترین حیوان جهان؟', options: ['شیر', 'یوزپلنگ', 'گرگ', 'خرگوش'], correct: 1 }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        questionElement.innerHTML = 'آزمون تمام شد!';
        optionsElement.innerHTML = '';
        return;
    }

    let q = questions[currentQuestion];
    questionElement.innerHTML = q.question;
    optionsElement.innerHTML = '';

    q.options.forEach((option, index) => {
        let button = document.createElement('button');
        button.innerText = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(selected) {
    let q = questions[currentQuestion];
    let buttons = optionsElement.getElementsByTagName('button');

    if (selected === q.correct) {
        buttons[selected].classList.add('correct');
        score++;
    } else {
        buttons[selected].classList.add('incorrect');
    }

    scoreElement.innerText = `امتیاز: ${score}`;
    currentQuestion++;
    setTimeout(loadQuestion, 1000);
}

loadQuestion();