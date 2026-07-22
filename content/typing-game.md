---
title: "Typing Game"
date: 2026-07-21T19:06:10+05:30
draft: false
---

Test your typing speed! Click inside the box and start typing.

<style>
#typing-game {
    font-family: "Courier New", Courier, monospace;
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: #928374;
    position: relative;
    max-height: 120px;
    overflow: hidden;
    margin-bottom: 20px;
    outline: none;
    cursor: text;
    user-select: none;
}

#typing-game:focus {
    box-shadow: 0 0 0 2px #fabd2f;
}

#words-container {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 12px;
    position: relative;
    top: 0;
    transition: top 0.2s ease;
}

.word {
    display: flex;
}

.letter {
    position: relative;
}

.letter.correct {
    color: #b8bb26;
}

.letter.incorrect {
    color: #fb4934;
}

.letter.active {
    color: #ebdbb2;
}

.letter.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 1.2em;
    width: 3px;
    background-color: #fabd2f;
    animation: blink 1s infinite;
}

.letter.active-space::after {
    content: '';
    position: absolute;
    right: -6px;
    top: 50%;
    transform: translateY(-50%);
    height: 1.2em;
    width: 3px;
    background-color: #fabd2f;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

#stats {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 1.2rem;
    color: #ebdbb2;
    margin-bottom: 20px;
    font-weight: bold;
}

.stat-box {
    background: #3c3836;
    padding: 10px 15px;
    border-radius: 5px;
}

#restart-btn {
    background: #fabd2f;
    color: #282828;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    transition: background 0.2s;
}

#restart-btn:hover {
    background: #d79921;
}

#hidden-input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
    width: 1px;
    height: 1px;
    border: none;
}
</style>

<div id="stats">
    <div class="stat-box">Time: <span id="time">30</span>s</div>
    <div class="stat-box">WPM: <span id="wpm">0</span></div>
    <button id="restart-btn">Restart Game</button>
</div>

<div id="typing-game">
    <input type="text" id="hidden-input" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" dir="ltr">
    <div id="words-container"></div>
</div>

<script>
const wordList = ["the","of","to","and","a","in","is","it","you","that","he","was","for","on","are","with","as","I","his","they","be","at","one","have","this","from","or","had","by","not","word","but","what","some","we","can","out","other","were","all","there","when","up","use","your","how","said","an","each","she","which","do","their","time","if","will","way","about","many","then","them","write","would","like","so","these","her","long","make","thing","see","him","two","has","look","more","day","could","go","come","did","number","sound","no","most","people","my","over","know","water","than","call","first","who","may","down","side","been","now","find","any"];

let words = [];
let currentWordIndex = 0;
let currentLetterIndex = 0;
let timer = 30;
let timeInterval = null;
let isPlaying = false;
let correctKeystrokes = 0;

const wordsContainer = document.getElementById('words-container');
const timeEl = document.getElementById('time');
const wpmEl = document.getElementById('wpm');
const gameContainer = document.getElementById('typing-game');
const restartBtn = document.getElementById('restart-btn');
const hiddenInput = document.getElementById('hidden-input');

function initGame() {
    words = [];
    currentWordIndex = 0;
    currentLetterIndex = 0;
    timer = 30;
    isPlaying = false;
    correctKeystrokes = 0;
    timeEl.innerText = timer;
    wpmEl.innerText = 0;
    clearInterval(timeInterval);
    wordsContainer.innerHTML = '';
    wordsContainer.style.top = '0px';
    
    // Generate 100 random words from list
    let generatedWords = [];
    for(let i=0; i<100; i++) {
        generatedWords.push(wordList[Math.floor(Math.random() * wordList.length)]);
    }
    
    generatedWords.forEach(word => {
        const wordEl = document.createElement('div');
        wordEl.className = 'word';
        for(let char of word) {
            const letterEl = document.createElement('span');
            letterEl.className = 'letter';
            letterEl.innerText = char;
            wordEl.appendChild(letterEl);
        }
        wordsContainer.appendChild(wordEl);
        words.push({ el: wordEl, text: word });
    });
    
    updateActiveLetter();
}

function startGame() {
    if(!isPlaying) {
        isPlaying = true;
        timeInterval = setInterval(() => {
            timer--;
            timeEl.innerText = timer;
            if(timer <= 0) {
                endGame();
            }
        }, 1000);
    }
}

function endGame() {
    clearInterval(timeInterval);
    isPlaying = false;
    const wpm = Math.round((correctKeystrokes / 5) / (30 / 60));
    wpmEl.innerText = wpm;
    wordsContainer.innerHTML = `<div style="color:#b8bb26; font-size: 1.8rem; text-align:center; width: 100%; margin-top: 30px;">Time's up! Your WPM: ${wpm}</div>`;
}

function updateActiveLetter() {
    document.querySelectorAll('.letter').forEach(l => {
        l.classList.remove('active');
        l.classList.remove('active-space');
    });
    
    if(currentWordIndex < words.length) {
        const wordObj = words[currentWordIndex];
        
        if(currentLetterIndex < wordObj.text.length) {
            wordObj.el.children[currentLetterIndex].classList.add('active');
        } else {
            // Space active (end of word)
            const lastChild = wordObj.el.children[wordObj.text.length - 1];
            lastChild.classList.add('active-space');
        }
        
        // Auto-scroll logic
        const wordTop = wordObj.el.offsetTop;
        if (wordTop > 60) {
             wordsContainer.style.top = `-${wordTop}px`;
        }
    }
}

hiddenInput.addEventListener('keydown', (e) => {
    if(timer <= 0 || !words[currentWordIndex]) return;
    
    // Ignore meta keys
    if(e.ctrlKey || e.altKey || e.metaKey) return;
    
    if(e.key.length === 1 || e.key === 'Backspace') {
        e.preventDefault();
        startGame();
        
        const wordObj = words[currentWordIndex];
        const letters = wordObj.el.children;
        
        if (e.key === 'Backspace') {
            if (currentLetterIndex > 0) {
                currentLetterIndex--;
                letters[currentLetterIndex].classList.remove('correct', 'incorrect');
            } else if (currentWordIndex > 0) {
                // Go to previous word
                currentWordIndex--;
                const prevWordObj = words[currentWordIndex];
                currentLetterIndex = prevWordObj.text.length; // place at end of prev word
                
                // Remove incorrectly typed state of the whole word if needed
                // For simplicity, we just allow backspacing within the current active word.
            }
        } else if (e.key === ' ') {
            // Move to next word if at least one character was typed
            if(currentLetterIndex > 0) {
                currentWordIndex++;
                currentLetterIndex = 0;
            }
        } else {
            if (currentLetterIndex < wordObj.text.length) {
                if (e.key === wordObj.text[currentLetterIndex]) {
                    letters[currentLetterIndex].classList.add('correct');
                    correctKeystrokes++;
                } else {
                    letters[currentLetterIndex].classList.add('incorrect');
                }
                currentLetterIndex++;
            }
        }
        updateActiveLetter();
    }
});

hiddenInput.addEventListener('input', () => {
    hiddenInput.value = '';
});

gameContainer.addEventListener('click', () => hiddenInput.focus());
restartBtn.addEventListener('click', () => {
    initGame();
    hiddenInput.focus();
});

// Start
initGame();
hiddenInput.focus();

// Auto-focus if the user starts typing anywhere on the page
document.addEventListener('keydown', (e) => {
    if (document.activeElement !== hiddenInput && !e.ctrlKey && !e.metaKey && !e.altKey) {
        if (e.key.length === 1 || e.key === 'Backspace') {
            hiddenInput.focus();
        }
    }
});
</script>
