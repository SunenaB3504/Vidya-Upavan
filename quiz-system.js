/**
 * Vidya Upavan - Quiz System
 * Handles quiz logic, validation, scoring, and tracking
 */

class QuizSystem {
  constructor(quizId, questionsData) {
    this.quizId = quizId;
    this.questions = questionsData;
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.scores = [];
    this.isCompleted = false;
    this.shuffledMatches = {};
    this.injectStyles();
    this.loadFromStorage();
  }

  // Inject necessary styles for advanced question types
  injectStyles() {
    if (document.getElementById('quiz-advanced-styles')) return;
    const style = document.createElement('style');
    style.id = 'quiz-advanced-styles';
    style.innerHTML = `
      .quiz-matching-area, .quiz-arrange-area { margin-top: 20px; }
      .matching-row, .arrange-row { display: flex; align-items: center; justify-content: space-between; padding: 12px; background: #f8f9fa; border-radius: 8px; margin-bottom: 10px; border: 1px solid #e0e0e0; transition: all 0.2s; }
      .matching-row:hover, .arrange-row:hover { border-color: #00B4A6; background: #f0fdfc; }
      .matching-left, .arrange-item { font-weight: 600; color: #1E1040; flex: 1; }
      .matching-connector { margin: 0 15px; color: #999; }
      .matching-right select, .arrange-row select { padding: 8px 12px; border: 2px solid #e0e0e0; border-radius: 6px; font-family: 'Nunito', sans-serif; cursor: pointer; background: white; }
      .matching-right select:focus, .arrange-row select:focus { outline: none; border-color: #00B4A6; }
      .quiz-text-input { width: 100%; padding: 14px; border: 2px solid #e0e0e0; border-radius: 10px; font-size: 1rem; }
    `;
    document.head.appendChild(style);
  }

  // Load quiz progress from localStorage
  loadFromStorage() {
    const stored = localStorage.getItem(`quiz_${this.quizId}`);
    if (stored) {
      const data = JSON.parse(stored);
      this.userAnswers = data.userAnswers || [];
      this.scores = data.scores || [];
      this.currentQuestionIndex = data.currentQuestionIndex || 0;
      this.isCompleted = data.isCompleted || false;
    }
  }

  // Save quiz progress to localStorage
  saveToStorage() {
    const data = {
      userAnswers: this.userAnswers,
      scores: this.scores,
      currentQuestionIndex: this.currentQuestionIndex,
      isCompleted: this.isCompleted,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(`quiz_${this.quizId}`, JSON.stringify(data));
  }

  // Get current question
  getCurrentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  // Validate answer based on question type
  validateAnswer(question, userAnswer) {
    const normalize = (str) => {
      if (typeof str !== 'string') return '';
      return str.trim().toLowerCase().replace(/[^a-z\u0900-\u097F0-9]/g, '');
    };

    const calculateSimilarity = (str1, str2) => {
      const s1 = normalize(str1);
      const s2 = normalize(str2);
      if (s1 === s2) return 1;
      if (s1.length < 2 || s2.length < 2) return s1 === s2 ? 1 : 0;

      const getBigrams = (s) => {
        const bigrams = new Set();
        for (let i = 0; i < s.length - 1; i++) {
          bigrams.add(s.substring(i, i + 2));
        }
        return bigrams;
      };

      const b1 = getBigrams(s1);
      const b2 = getBigrams(s2);
      let intersection = 0;
      for (let bigram of b1) {
        if (b2.has(bigram)) intersection++;
      }
      return (2 * intersection) / (b1.size + b2.size);
    };

    switch (question.type) {
      case 'mcq':
      case 'true-false':
      case 'letter-id':
      case 'pronunciation':
        // Selection based - direct comparison
        return {
          correct: userAnswer === question.correctAnswer,
          score: userAnswer === question.correctAnswer ? 100 : 0,
          feedback: userAnswer === question.correctAnswer 
            ? `✅ Correct! ${question.explanation}`
            : `❌ Incorrect. The correct answer is "${question.options[question.correctAnswer]}". ${question.explanation}`
        };

      case 'matching':
        // Check if all pairs match
        const allCorrect = Object.entries(userAnswer).every(
          ([key, value]) => question.correctAnswer[key] == value
        );
        return {
          correct: allCorrect,
          score: allCorrect ? 100 : 0,
          feedback: allCorrect 
            ? `✅ Perfect matching! ${question.explanation}`
            : `❌ Some matches are incorrect. Review and try again. ${question.explanation}`
        };

      case 'arrange':
        // Check word order
        const correctOrder = question.correctAnswer.join('|');
        const userOrder = userAnswer.join('|');
        const isCorrect = correctOrder === userOrder;
        return {
          correct: isCorrect,
          score: isCorrect ? 100 : 0,
          feedback: isCorrect
            ? `✅ Perfect order! ${question.explanation}`
            : `❌ Incorrect order. The correct sequence is: ${question.correctAnswer.join(' → ')}. ${question.explanation}`
        };

      case 'fill-blank':
      case 'transliteration':
      case 'translation':
      case 'short-answer':
        // Text input - fuzzy matching
        const acceptedAnswers = question.correctAnswer;
        
        // Exact match (best case)
        for (let accepted of acceptedAnswers) {
          if (normalize(userAnswer) === normalize(accepted)) {
            return {
              correct: true,
              score: 100,
              feedback: `✅ Perfect! ${question.explanation}`
            };
          }
        }

        // Fuzzy match (80%+)
        for (let accepted of acceptedAnswers) {
          const similarity = calculateSimilarity(userAnswer, accepted);
          if (similarity > 0.80) {
            return {
              correct: true,
              score: 100,
              feedback: `✅ Correct! (minor typo ignored) ${question.explanation}`
            };
          }
        }

        // Partial match (50-79%)
        for (let accepted of acceptedAnswers) {
          const similarity = calculateSimilarity(userAnswer, accepted);
          if (similarity > 0.50) {
            return {
              correct: false,
              score: 50,
              feedback: `⚠️ Partial credit (50%). Your answer: "${userAnswer}" | Correct answer: "${acceptedAnswers[0]}". ${question.explanation}`
            };
          }
        }

        // No match
        return {
          correct: false,
          score: 0,
          feedback: `❌ Incorrect. Correct answer(s): ${acceptedAnswers.join(', ')}. ${question.explanation}`
        };

      default:
        return { correct: false, score: 0, feedback: 'Unknown question type' };
    }
  }

  // Submit an answer
  submitAnswer(userAnswer) {
    const question = this.getCurrentQuestion();
    const result = this.validateAnswer(question, userAnswer);

    this.userAnswers[this.currentQuestionIndex] = userAnswer;
    this.scores[this.currentQuestionIndex] = result.score;

    this.saveToStorage();

    return result;
  }

  // Move to next question
  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.saveToStorage();
      return true;
    }
    return false;
  }

  // Move to previous question
  prevQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.saveToStorage();
      return true;
    }
    return false;
  }

  // Get total score
  getTotalScore() {
    const totalPoints = this.scores.reduce((a, b) => a + (b || 0), 0);
    const maxPoints = this.questions.length * 100;
    const percentage = Math.round((totalPoints / maxPoints) * 100);
    return { totalPoints, maxPoints, percentage };
  }

  // Complete quiz
  completeQuiz() {
    this.isCompleted = true;
    const score = this.getTotalScore();
    
    // Save final result
    const quizResults = JSON.parse(localStorage.getItem('quiz_results') || '{}');
    quizResults[this.quizId] = {
      percentage: score.percentage,
      totalPoints: score.totalPoints,
      maxPoints: score.maxPoints,
      completedAt: new Date().toISOString(),
      attempts: (quizResults[this.quizId]?.attempts || 0) + 1
    };
    localStorage.setItem('quiz_results', JSON.stringify(quizResults));

    this.saveToStorage();
    return score;
  }

  // Reset quiz
  resetQuiz() {
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
    this.scores = [];
    this.isCompleted = false;
    this.shuffledMatches = {};
    localStorage.removeItem(`quiz_${this.quizId}`);
  }

  // Get quiz progress percentage
  getProgress() {
    return Math.round(((this.currentQuestionIndex + 1) / this.questions.length) * 100);
  }

  render(containerId, onStateChange) {
    const question = this.getCurrentQuestion();
    const type = (question.type || '').trim().toLowerCase();
    
    const container = document.getElementById(containerId);
    if (!container) return;

    const userAnswer = this.userAnswers[this.currentQuestionIndex];
    let html = `<div class="quiz-question"><div class="quiz-question-text">${question.question}</div>`;

    if (['mcq', 'true-false', 'letter-id', 'pronunciation'].includes(type)) {
      html += '<div class="quiz-options">';
      question.options.forEach((option, idx) => {
        const selected = userAnswer === idx ? 'selected' : '';
        html += `
          <div class="quiz-option ${selected}" onclick="currentQuiz.handleUpdate('select', ${idx})">
            <input type="radio" name="ans" value="${idx}" ${selected ? 'checked' : ''}>
            <label>${option}</label>
          </div>`;
      });
      html += '</div>';
    } else if (type === 'matching') {
      // Shuffled options for this question
      if (!this.shuffledMatches[this.currentQuestionIndex]) {
        const options = question.pairs.map((p, pIdx) => ({ text: p.right, value: pIdx }));
        // Fisher-Yates shuffle
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }
        this.shuffledMatches[this.currentQuestionIndex] = options;
      }
      const options = this.shuffledMatches[this.currentQuestionIndex];

      html += '<div class="quiz-matching-area">';
      question.pairs.forEach((pair, idx) => {
        const currentMatch = (userAnswer && userAnswer[idx] !== undefined) ? userAnswer[idx] : '';
        html += `
          <div class="matching-row">
            <div class="matching-left">${pair.left}</div>
            <div class="matching-connector">→</div>
            <div class="matching-right">
              <select onchange="currentQuiz.handleUpdate('match', {pairIdx: ${idx}, value: this.value})">
                <option value="" ${currentMatch === '' ? 'selected' : ''}>Select match...</option>
                ${options.map(opt => `
                  <option value="${opt.value}" ${currentMatch === opt.value ? 'selected' : ''}>${opt.text}</option>
                `).join('')}
              </select>
            </div>
          </div>`;
      });
      html += '</div>';
    } else if (type === 'arrange') {
      html += '<div class="quiz-arrange-area">';
      const items = question.items;
      const currentOrder = userAnswer || [];
      html += '<p style="font-size: 0.9rem; color: #666; margin-bottom: 10px;">Select the position (1, 2, 3...) for each item:</p>';
      items.forEach((item, idx) => {
        const position = currentOrder.indexOf(item) + 1;
        html += `
          <div class="arrange-row">
            <div class="arrange-item">${item}</div>
            <select onchange="currentQuiz.handleUpdate('arrange', {item: '${item}', pos: this.value})">
              <option value="" ${position === 0 ? 'selected' : ''}>Pos...</option>
              ${items.map((_, i) => `
                <option value="${i + 1}" ${position === i + 1 ? 'selected' : ''}>${i + 1}</option>
              `).join('')}
            </select>
          </div>`;
      });
      html += '</div>';
    } else {
      const textVal = userAnswer || '';
      html += `
        <input type="text" class="quiz-text-input" id="textAnswer" 
          value="${textVal}" 
          placeholder="Type your answer here..."
          oninput="currentQuiz.handleUpdate('text', this.value)">`;
    }

    html += '</div>';
    container.innerHTML = html;
    if (onStateChange) onStateChange();
  }

  // NEW: Handle updates from UI
  handleUpdate(type, data) {
    if (type === 'select') {
      this.userAnswers[this.currentQuestionIndex] = data;
    } else if (type === 'text') {
      this.userAnswers[this.currentQuestionIndex] = data;
    } else if (type === 'match') {
      if (!this.userAnswers[this.currentQuestionIndex]) {
        this.userAnswers[this.currentQuestionIndex] = {};
      }
      if (data.value === "") {
        delete this.userAnswers[this.currentQuestionIndex][data.pairIdx];
      } else {
        this.userAnswers[this.currentQuestionIndex][data.pairIdx] = parseInt(data.value);
      }
    } else if (type === 'arrange') {
      const question = this.getCurrentQuestion();
      const items = question.items;
      
      if (!this.userAnswers[this.currentQuestionIndex] || !Array.isArray(this.userAnswers[this.currentQuestionIndex])) {
        this.userAnswers[this.currentQuestionIndex] = new Array(items.length).fill(null);
      }
      
      const order = this.userAnswers[this.currentQuestionIndex];
      
      // Remove item from its current position if any
      const currentPos = order.indexOf(data.item);
      if (currentPos !== -1) order[currentPos] = null;
      
      if (data.pos !== "") {
        const targetPos = parseInt(data.pos) - 1;
        // If someone else is at target, they lose their spot (user must re-assign them)
        order[targetPos] = data.item;
      }
      
      this.userAnswers[this.currentQuestionIndex] = order;
    }
    this.saveToStorage();
    
    // Minimal re-render for options to show selection
    if (type === 'select') {
      document.querySelectorAll('.quiz-option').forEach((el, i) => {
        el.classList.toggle('selected', i === data);
      });
    }
  }
}

// Utility function: Levenshtein distance for string similarity
function levenshteinDistance(str1, str2) {
  const track = Array(str2.length + 1).fill(null).map(() =>
    Array(str1.length + 1).fill(null));

  for (let i = 0; i <= str1.length; i += 1) {
    track[0][i] = i;
  }
  for (let j = 0; j <= str2.length; j += 1) {
    track[j][0] = j;
  }

  for (let j = 1; j <= str2.length; j += 1) {
    for (let i = 1; i <= str1.length; i += 1) {
      const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
      track[j][i] = Math.min(
        track[j][i - 1] + 1,
        track[j - 1][i] + 1,
        track[j - 1][i - 1] + indicator
      );
    }
  }

  return track[str2.length][str1.length];
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuizSystem;
}
