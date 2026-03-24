/**
 * Nia's Language Adventure - Quiz System
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
    this.loadFromStorage();
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
      return str.trim().toLowerCase().replace(/[^a-zा-ह0-9]/g, '');
    };

    const calculateSimilarity = (str1, str2) => {
      const s1 = normalize(str1);
      const s2 = normalize(str2);
      if (s1 === s2) return 1;
      
      let matches = 0;
      const minLen = Math.min(s1.length, s2.length);
      for (let i = 0; i < minLen; i++) {
        if (s1[i] === s2[i]) matches++;
      }
      return matches / Math.max(s1.length, s2.length);
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
          ([key, value]) => question.correctAnswer[key] === value
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
    localStorage.removeItem(`quiz_${this.quizId}`);
  }

  // Get quiz progress percentage
  getProgress() {
    return Math.round(((this.currentQuestionIndex + 1) / this.questions.length) * 100);
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
