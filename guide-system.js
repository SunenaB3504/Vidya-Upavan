/**
 * Nia's Language Adventure - Guide & Quiz System Glue
 * Centralizes the UI logic for guides and their associated quizzes.
 */

// Global instance of the quiz for the current page
let currentQuiz = null;

function initGuideQuiz(quizData) {
    // 1. Inject Modal HTML if not present
    if (!document.getElementById('quizModal')) {
        const modalHtml = `
            <!-- Quiz Modal -->
            <div id="quizModal" class="quiz-modal hidden">
                <div class="quiz-modal-content">
                    <div class="quiz-header">
                        <div>
                            <h2 id="quizTitle">Quiz</h2>
                            <p id="quizSubtitle">Test your knowledge</p>
                        </div>
                        <button id="quizCloseBtn" class="quiz-close-btn">✕</button>
                    </div>
                    <div class="quiz-progress-bar"><div id="quizProgressFill" class="quiz-progress-fill"></div></div>
                    <div class="quiz-progress-text"><span id="quizProgressNum">1</span> / <span id="quizProgressMax">10</span></div>
                    <div id="quizQuestionArea" class="quiz-question-area" style="min-height: 300px;"></div>
                    <div class="quiz-nav-buttons">
                        <button id="quizPrevBtn" class="quiz-nav-btn">← Previous</button>
                        <button id="quizSubmitBtn" class="quiz-submit-btn">Submit Answer</button>
                        <button id="quizNextBtn" class="quiz-nav-btn">Next →</button>
                    </div>
                </div>
            </div>

            <!-- Results Modal -->
            <div id="resultsModal" class="results-modal hidden">
                <div class="results-modal-content">
                    <h2 id="resultTitle">Quiz Complete!</h2>
                    <div class="score-badge"><span id="resultScore">0</span>%</div>
                    <p id="resultMessage">Great job!</p>
                    <div class="score-details">
                        <div class="detail-row"><span>Score:</span><strong id="resultPoints">0 / 0</strong></div>
                        <div class="detail-row"><span>Status:</span><strong id="resultStatus">COMPLETED</strong></div>
                    </div>
                    <div class="result-buttons">
                        <button id="shareBtn" class="result-btn share-btn hidden" style="background:var(--bridge-color, #7C3AED); color:white;">🔗 Share Achievement</button>
                        <button id="retakeBtn" class="result-btn">Retake Quiz</button>
                        <button id="exitBtn" class="result-btn secondary">Back to Guide</button>
                    </div>
                </div>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }



    // 2. Setup Event Listeners
    // Check for start buttons (both ID and class based for flexibility)
    const startBtn = document.getElementById('quizStartBtn');
    if (startBtn) startBtn.onclick = () => startQuiz(quizData);
    
    // Support multiple start buttons if they have the specific ID in guide content
    const customStartBtn = document.getElementById('quizStartBtnCustom');
    if (customStartBtn) customStartBtn.onclick = () => startQuiz(quizData);

    document.getElementById('quizCloseBtn').onclick = closeQuiz;
    document.getElementById('exitBtn').onclick = closeQuiz;
    
    document.getElementById('quizPrevBtn').onclick = () => { 
        if (currentQuiz && currentQuiz.prevQuestion()) {
            currentQuiz.render('quizQuestionArea', updateNavButtons);
        }
    };
    
    document.getElementById('quizNextBtn').onclick = () => { 
        if (currentQuiz && currentQuiz.nextQuestion()) {
            currentQuiz.render('quizQuestionArea', updateNavButtons);
        }
    };
    
    document.getElementById('quizSubmitBtn').onclick = submitAnswer;
    
    document.getElementById('retakeBtn').onclick = () => { 
        currentQuiz.resetQuiz(); 
        startQuiz(quizData); 
    };

    document.getElementById('shareBtn').onclick = () => {
        shareAchievement(currentQuiz);
    };

    function startQuiz(data) {
        if (typeof QuizSystem === 'undefined') {
            console.error('QuizSystem class not found. Make sure quiz-system.js is loaded.');
            return;
        }
        currentQuiz = new QuizSystem(data.id, data.questions);
        document.getElementById('quizTitle').textContent = data.title;
        document.getElementById('quizSubtitle').textContent = data.description;
        document.getElementById('quizProgressMax').textContent = data.totalQuestions;
        document.getElementById('quizModal').classList.remove('hidden');
        document.getElementById('resultsModal').classList.add('hidden');
        currentQuiz.render('quizQuestionArea', updateNavButtons);
    }

    function updateNavButtons() {
        document.getElementById('quizProgressFill').style.width = currentQuiz.getProgress() + '%';
        document.getElementById('quizProgressNum').textContent = currentQuiz.currentQuestionIndex + 1;
        document.getElementById('quizPrevBtn').disabled = currentQuiz.currentQuestionIndex === 0;
        document.getElementById('quizNextBtn').disabled = currentQuiz.currentQuestionIndex === currentQuiz.questions.length - 1;
        
        // Reset submit button text if not on last question
        if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length - 1) {
            document.getElementById('quizSubmitBtn').textContent = 'Submit Answer';
        } else {
             // If we already submitted the last answer, show "See Results"
             const lastAnswer = currentQuiz.userAnswers[currentQuiz.questions.length - 1];
             if (lastAnswer !== undefined) {
                 document.getElementById('quizSubmitBtn').textContent = 'See Results';
             }
        }
    }

    function submitAnswer() {
        if (document.getElementById('quizSubmitBtn').textContent === 'See Results') {
            showResults();
            return;
        }

        const userAnswer = currentQuiz.userAnswers[currentQuiz.currentQuestionIndex];
        if (userAnswer === undefined || (userAnswer && typeof userAnswer === 'object' && Object.keys(userAnswer).length === 0)) {
            alert('Please provide an answer first');
            return;
        }

        const result = currentQuiz.submitAnswer(userAnswer);
        const existingFeedback = document.querySelector('.quiz-feedback');
        if (existingFeedback) existingFeedback.remove();
        
        const feedbackHtml = `<div class="quiz-feedback ${result.correct ? 'correct' : 'incorrect'}">${result.feedback}</div>`;
        document.getElementById('quizQuestionArea').insertAdjacentHTML('beforeend', feedbackHtml);

        if (currentQuiz.currentQuestionIndex === currentQuiz.questions.length - 1) {
            document.getElementById('quizSubmitBtn').textContent = 'See Results';
        }
    }

    function showResults() {
        const score = currentQuiz.completeQuiz();
        const pct = score.percentage;

        // Save progress to localStorage
        const completed = JSON.parse(localStorage.getItem('nia_done') || '[]');
        if (!completed.includes(currentQuiz.quizId)) {
            completed.push(currentQuiz.quizId);
            localStorage.setItem('nia_done', JSON.stringify(completed));
        }

        const message = pct >= 80 ? '🎉 Excellent work!' : pct >= 60 ? '👏 Good job!' : '💪 Keep practicing!';
        const status = pct >= 80 ? '✅ PASSED' : '⚠️ RETAKE RECOMMENDED';

        document.getElementById('resultScore').textContent = pct;
        document.getElementById('resultPoints').textContent = `${score.totalPoints} / ${score.maxPoints}`;
        document.getElementById('resultMessage').textContent = message;
        document.getElementById('resultStatus').textContent = status;
        
        // Show share button if score > 80%
        const shareBtn = document.getElementById('shareBtn');
        if (pct >= 80) {
            shareBtn.classList.remove('hidden');
        } else {
            shareBtn.classList.add('hidden');
        }

        document.getElementById('quizModal').classList.add('hidden');
        document.getElementById('resultsModal').classList.remove('hidden');
    }

    async function shareAchievement(quiz) {
        const score = quiz.getTotalScore();
        const shareData = {
            title: 'I mastered a new phase in Vidya Upavan!',
            text: `Nia just mastered a new phase in Vidya Upavan! Check out this private Sanskrit & Marathi adventure: ${window.location.href}`,
            url: window.location.href
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                // Fallback: Copy to clipboard
                const textArea = document.createElement("textarea");
                textArea.value = shareData.text;
                document.body.appendChild(textArea);
                textArea.select();
                try {
                    document.execCommand('copy');
                    alert('Achievement copied to clipboard! Share it with your friends.');
                } catch (err) {
                    console.error('Copy failed', err);
                }
                document.body.removeChild(textArea);
            }
        } catch (err) {
            console.error('Share failed:', err);
        }
    }

    function closeQuiz() {
        document.getElementById('quizModal').classList.add('hidden');
        document.getElementById('resultsModal').classList.add('hidden');
    }
}
