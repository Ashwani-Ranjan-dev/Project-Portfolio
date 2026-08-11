// Question Bank
const questions = [
  // 🌍 General Knowledge
  { q: "What is the capital of Japan?", options: ["Tokyo", "Beijing", "Seoul", "Bangkok"], answer: "Tokyo" },
  { q: "Which country is known as the Land of the Rising Sun?", options: ["China", "Japan", "Thailand", "India"], answer: "Japan" },
  { q: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctica", "Kalahari"], answer: "Antarctica" },
  { q: "Which is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile" },
  { q: "Which is the smallest country in the world?", options: ["Monaco", "Vatican City", "Malta", "San Marino"], answer: "Vatican City" },

  // 🔬 Science
  { q: "What is the chemical symbol for water?", options: ["O2", "H2O", "CO2", "HO"], answer: "H2O" },
  { q: "Which gas do humans exhale?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], answer: "Carbon Dioxide" },
  { q: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "1,000 km/s", "30,000 km/s"], answer: "300,000 km/s" },
  { q: "Which planet has rings?", options: ["Earth", "Mars", "Saturn", "Venus"], answer: "Saturn" },
  { q: "What is the hardest natural substance?", options: ["Gold", "Iron", "Diamond", "Platinum"], answer: "Diamond" },

  // ➗ Math
  { q: "What is 12 × 8?", options: ["96", "88", "108", "100"], answer: "96" },
  { q: "What is the square root of 144?", options: ["10", "11", "12", "13"], answer: "12" },
  { q: "What is 15% of 200?", options: ["20", "25", "30", "35"], answer: "30" },
  { q: "Solve: 2x + 6 = 10", options: ["x=1", "x=2", "x=3", "x=4"], answer: "x=2" },
  { q: "What is π approximately?", options: ["2.14", "3.14", "4.14", "5.14"], answer: "3.14" },

  // 💻 Computer Science
  { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Learning", "Hyper Transfer Markup Language", "Home Tool Markup Language"], answer: "Hyper Text Markup Language" },
  { q: "Which language is used for styling web pages?", options: ["HTML", "CSS", "JavaScript", "Python"], answer: "CSS" },
  { q: "Which company developed Java?", options: ["Microsoft", "Sun Microsystems", "Google", "IBM"], answer: "Sun Microsystems" },
  { q: "Which protocol is used for secure communication?", options: ["HTTP", "HTTPS", "FTP", "SMTP"], answer: "HTTPS" },
  { q: "Which database is NoSQL?", options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"], answer: "MongoDB" },

  // 📜 History
  { q: "Who was the first President of the USA?", options: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"], answer: "George Washington" },
  { q: "In which year did World War II end?", options: ["1940", "1945", "1950", "1939"], answer: "1945" },
  { q: "Who discovered America?", options: ["Christopher Columbus", "Vasco da Gama", "Magellan", "Marco Polo"], answer: "Christopher Columbus" },
  { q: "Which empire built the Colosseum?", options: ["Greek", "Roman", "Egyptian", "Persian"], answer: "Roman" },
  { q: "Who was known as the Iron Man of India?", options: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Subhash Chandra Bose"], answer: "Sardar Patel" },

  // 🎨 Mixed Trivia
  { q: "Which sport uses a shuttlecock?", options: ["Tennis", "Badminton", "Squash", "Table Tennis"], answer: "Badminton" },
  { q: "Which is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Tiger"], answer: "Cheetah" },
  { q: "Which instrument has black and white keys?", options: ["Guitar", "Piano", "Violin", "Drums"], answer: "Piano" },
  { q: "Which fruit is known as the king of fruits?", options: ["Apple", "Banana", "Mango", "Orange"], answer: "Mango" },
  { q: "Which festival is known as the festival of lights?", options: ["Holi", "Diwali", "Eid", "Christmas"], answer: "Diwali" },

  // 🌍 General Knowledge
  { q: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata", "Chennai"], answer: "Delhi" },
  { q: "Which country has the largest population?", options: ["India", "China", "USA", "Russia"], answer: "China" },
  { q: "Which is the tallest mountain in the world?", options: ["K2", "Everest", "Kangchenjunga", "Makalu"], answer: "Everest" },
  { q: "Which continent is known as the Dark Continent?", options: ["Asia", "Africa", "Europe", "Australia"], answer: "Africa" },
  { q: "Which is the largest island in the world?", options: ["Greenland", "Madagascar", "Borneo", "Iceland"], answer: "Greenland" },

  // 🔬 Science
  { q: "Which gas is essential for breathing?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"], answer: "Oxygen" },
  { q: "Which vitamin is produced when sunlight hits the skin?", options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"], answer: "Vitamin D" },
  { q: "What is the boiling point of water?", options: ["50°C", "75°C", "100°C", "120°C"], answer: "100°C" },
  { q: "Which organ pumps blood in the human body?", options: ["Brain", "Lungs", "Heart", "Kidneys"], answer: "Heart" },
  { q: "Which part of the plant makes food?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" },

  // ➗ Math
  { q: "What is 25 × 4?", options: ["50", "75", "100", "125"], answer: "100" },
  { q: "What is the cube of 3?", options: ["9", "27", "81", "243"], answer: "27" },
  { q: "What is 20% of 150?", options: ["20", "25", "30", "35"], answer: "30" },
  { q: "Solve: 3x = 12", options: ["x=2", "x=3", "x=4", "x=5"], answer: "x=4" },
  { q: "What is 7²?", options: ["42", "49", "56", "64"], answer: "49" },

  // 💻 Computer Science
  { q: "Which language runs in the browser?", options: ["Java", "Python", "JavaScript", "C++"], answer: "JavaScript" },
  { q: "Which company created Windows OS?", options: ["Apple", "Microsoft", "IBM", "Google"], answer: "Microsoft" },
  { q: "What does CSS stand for?", options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
  { q: "Which tag is used for links in HTML?", options: ["<p>", "<a>", "<div>", "<link>"], answer: "<a>" },
  { q: "Which database is relational?", options: ["MongoDB", "MySQL", "Cassandra", "Redis"], answer: "MySQL" },

  // 📜 History
  { q: "Who was the first Prime Minister of India?", options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Indira Gandhi"], answer: "Jawaharlal Nehru" },
  { q: "In which year did India gain independence?", options: ["1945", "1946", "1947", "1948"], answer: "1947" },
  { q: "Who was the Mughal emperor during the Taj Mahal construction?", options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"], answer: "Shah Jahan" },
  { q: "Who discovered the sea route to India?", options: ["Columbus", "Vasco da Gama", "Magellan", "Marco Polo"], answer: "Vasco da Gama" },
  { q: "Which war ended in 1918?", options: ["World War I", "World War II", "Cold War", "Vietnam War"], answer: "World War I" },

  // 🎨 Mixed Trivia
  { q: "Which sport uses a bat and ball?", options: ["Football", "Cricket", "Hockey", "Tennis"], answer: "Cricket" },
  { q: "Which bird is a national symbol of the USA?", options: ["Eagle", "Sparrow", "Crow", "Parrot"], answer: "Eagle" },
  { q: "Which fruit is yellow and curved?", options: ["Apple", "Banana", "Mango", "Orange"], answer: "Banana" },
  { q: "Which festival is celebrated with colors in India?", options: ["Diwali", "Holi", "Eid", "Christmas"], answer: "Holi" },
  { q: "Which currency is used in Japan?", options: ["Yuan", "Yen", "Won", "Dollar"], answer: "Yen" },

  // 🌍 General Knowledge (cont.)
  { q: "Which ocean is the smallest?", options: ["Pacific", "Atlantic", "Indian", "Arctic"], answer: "Arctic" },
  { q: "Which country invented pizza?", options: ["France", "Italy", "USA", "Germany"], answer: "Italy" },
  { q: "Which is the national animal of India?", options: ["Lion", "Tiger", "Elephant", "Peacock"], answer: "Tiger" },
  { q: "Which city is called the City of Love?", options: ["Rome", "Paris", "Venice", "Florence"], answer: "Paris" },
  { q: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "North America"], answer: "Asia" },

  // 🔬 Science (cont.)
  { q: "Which planet is closest to the Sun?", options: ["Mercury", "Venus", "Earth", "Mars"], answer: "Mercury" },
  { q: "Which blood group is universal donor?", options: ["A", "B", "AB", "O"], answer: "O" },
  { q: "Which part of the body controls balance?", options: ["Heart", "Brain", "Ear", "Lungs"], answer: "Ear" },
  { q: "Which gas is used in balloons?", options: ["Oxygen", "Nitrogen", "Helium", "Hydrogen"], answer: "Helium" },
  { q: "Which organ purifies blood?", options: ["Liver", "Kidney", "Heart", "Lungs"], answer: "Kidney" },

  // ➗ Math (cont.)
  { q: "What is 9 × 9?", options: ["81", "72", "99", "90"], answer: "81" },
  { q: "What is 100 ÷ 25?", options: ["2", "3", "4", "5"], answer: "4" },
  { q: "What is 11 × 11?", options: ["111", "121", "101", "131"], answer: "121" },
  { q: "What is 50% of 300?", options: ["100", "150", "200", "250"], answer: "150" },
  { q: "Solve: x + 7 = 15", options: ["x=7", "x=8", "x=9", "x=10"], answer: "x=8" },

  // 💻 Computer Science (cont.)
  { q: "Which language is used for AI?", options: ["Python", "C", "Java", "HTML"], answer: "Python" },
  { q: "Which company created Android?", options: ["Apple", "Google", "Microsoft", "Samsung"], answer: "Google" },
  { q: "Which tag is used for images in HTML?", options: ["<img>", "<image>", "<src>", "<pic>"], answer: "<img>" },
  { q: "Which protocol is used for email?", options: ["SMTP", "HTTP", "FTP", "IP"], answer: "SMTP" },
  { q: "Which is an operating system?", options: ["Linux", "Oracle", "MongoDB", "MySQL"], answer: "Linux" },

  // 📜 History (cont.)
  { q: "Who was the first man on the moon?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"], answer: "Neil Armstrong" },
  { q: "Who was the first emperor of China?", options: ["Qin Shi Huang", "Sun Yat-sen", "Mao Zedong", "Confucius"], answer: "Qin Shi Huang" },
  { q: "Which year did World War I begin?", options: ["1912", "1914", "1916", "1918"], answer: "1914" },
  { q: "Who was the founder of the Maurya Empire?", options: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"], answer: "Chandragupta Maurya" },
  { q: "Which country gifted the Statue of Liberty to USA?", options: ["UK", "France", "Germany", "Italy"], answer: "France" },

  // 🎨 Mixed Trivia (cont.)
  { q: "Which sport is played at Wimbledon?", options: ["Football", "Tennis", "Cricket", "Hockey"], answer: "Tennis" },
  { q: "Which animal is known as the Ship of the Desert?", options: ["Horse", "Camel", "Elephant", "Donkey"], answer: "Camel" },
  { q: "Which fruit keeps doctors away?", options: ["Banana", "Apple", "Mango", "Orange"], answer: "Apple" },
  { q: "Which festival is celebrated with lights?", options: ["Holi", "Diwali", "Eid", "Christmas"], answer: "Diwali" },
  { q: "Which currency is used in the USA?", options: ["Dollar", "Euro", "Pound", "Yen"], answer: "Dollar" },

  // 🏏 Sports
  { q: "Which country won the 2011 Cricket World Cup?", options: ["India", "Australia", "Pakistan", "Sri Lanka"], answer: "India" },
  { q: "Which sport is known as the king of sports?", options: ["Football", "Cricket", "Basketball", "Tennis"], answer: "Football" },
  { q: "Which player is known as the 'God of Cricket'?", options: ["Virat Kohli", "MS Dhoni", "Sachin Tendulkar", "Kapil Dev"], answer: "Sachin Tendulkar" },
  { q: "Which country hosted the 2016 Olympics?", options: ["China", "Brazil", "UK", "Japan"], answer: "Brazil" },
  { q: "Which sport uses a hoop?", options: ["Football", "Basketball", "Tennis", "Hockey"], answer: "Basketball" },

  // 🎭 Culture
  { q: "Which is the national flower of India?", options: ["Rose", "Lotus", "Sunflower", "Tulip"], answer: "Lotus" },
  { q: "Which dance is from Kerala?", options: ["Kathak", "Bharatanatyam", "Kathakali", "Odissi"], answer: "Kathakali" },
  { q: "Which festival marks the harvest season in Punjab?", options: ["Holi", "Diwali", "Baisakhi", "Eid"], answer: "Baisakhi" },
  { q: "Which language has the most native speakers?", options: ["English", "Mandarin Chinese", "Spanish", "Hindi"], answer: "Mandarin Chinese" },
  { q: "Which is the national bird of India?", options: ["Crow", "Peacock", "Sparrow", "Eagle"], answer: "Peacock" },

  // 🧠 Logic & Puzzles
  { q: "If 2 cats catch 2 mice in 2 minutes, how many cats are needed to catch 100 mice in 100 minutes?", options: ["2", "50", "100", "1"], answer: "2" },
  { q: "Which number comes next: 2, 4, 8, 16, ?", options: ["18", "20", "24", "32"], answer: "32" },
  { q: "If you rearrange the letters 'CIFAIPC', you get the name of a:", options: ["City", "Animal", "Ocean", "River"], answer: "Pacific" },
  { q: "What is always coming but never arrives?", options: ["Tomorrow", "Yesterday", "Today", "Future"], answer: "Tomorrow" },
  { q: "What has keys but can’t open locks?", options: ["Piano", "Keyboard", "Map", "Clock"], answer: "Piano" },

  // 🏛️ Civics & Current Affairs
  { q: "Who is known as the Father of the Nation in India?", options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhash Bose"], answer: "Mahatma Gandhi" },
  { q: "Which is the highest court in India?", options: ["High Court", "Supreme Court", "District Court", "Civil Court"], answer: "Supreme Court" },
  { q: "Which is the national anthem of India?", options: ["Vande Mataram", "Jana Gana Mana", "Sare Jahan Se Achha", "Maa Tujhe Salaam"], answer: "Jana Gana Mana" },
  { q: "Which is the currency of the UK?", options: ["Euro", "Dollar", "Pound", "Yen"], answer: "Pound" },
  { q: "Which organization is known as the UN?", options: ["United Nations", "Union Nations", "United Network", "Universal Nations"], answer: "United Nations" },

];


let usedQuestions = [];
let currentQuestion = {};
let score = 0;
let questionCount = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function getRandomQuestion() {
  let available = questions.filter(q => !usedQuestions.includes(q));
  let randomIndex = Math.floor(Math.random() * available.length);
  let selected = available[randomIndex];
  usedQuestions.push(selected);
  return selected;
}

function showQuestion() {
  if (questionCount >= 20) {
    endQuiz();
    return;
  }
  currentQuestion = getRandomQuestion();
  questionEl.textContent = `Q${questionCount + 1}: ${currentQuestion.q}`;
  optionsEl.innerHTML = "";
  currentQuestion.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(opt);
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  if (selected === currentQuestion.answer) {
    score++;
  }
  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  questionCount++;
  nextBtn.style.display = "none";
  showQuestion();
});

function endQuiz() {
  document.getElementById("quiz-box").classList.add("hidden");
  resultBox.classList.remove("hidden");
  scoreEl.textContent = `Your Score: ${score} / 20`;
}

// Start Quiz
showQuestion();
