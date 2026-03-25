/**
 * Nia's Language Adventure - Quiz Data
 * Contains all quiz questions for each phase
 */

// S1 QUIZ - Sanskrit Phase 1 (Alphabets & Sounds)
const S1_QUIZ = {
  id: 'S1-QUIZ',
  title: 'Sanskrit Phase 1 Quiz: Alphabets & Sounds',
  description: 'Test your knowledge of Sanskrit letters, vowels, and basic pronunciation',
  totalQuestions: 30,
  questions: [
    // MCQ Type (5 questions)
    {
      id: 's1-q1',
      type: 'mcq',
      question: 'What does the Devanagari letter "अ" represent?',
      options: ['Consonant ka', 'Vowel a (as in "but")', 'Consonant ha', 'Vowel u (as in "too")'],
      correctAnswer: 1,
      explanation: 'अ (a) is a short vowel, the foundational sound in Sanskrit. It sounds like the "u" in "but".'
    },
    {
      id: 's1-q2',
      type: 'mcq',
      question: 'Which of these is NOT a vowel (स्वर) in Sanskrit?',
      options: ['आ', 'क', 'इ', 'उ'],
      correctAnswer: 1,
      explanation: 'क (ka) is a consonant (व्यंजन). The vowels shown are: आ (aa), इ (i), उ (u).'
    },
    {
      id: 's1-q3',
      type: 'mcq',
      question: 'The consonant "क" is pronounced as:',
      options: ['kha (like "khan")', 'ka (like "car")', 'ja (like "jump")', 'cha (like "church")'],
      correctAnswer: 1,
      explanation: 'क (ka) sounds like "k" in "car" or "king". The aspirated version is ख (kha).'
    },
    {
      id: 's1-q4',
      type: 'mcq',
      question: 'How many basic vowels (स्वर) are there in Sanskrit?',
      options: ['5', '8', '10', '6'],
      correctAnswer: 1,
      explanation: 'There are 8 basic vowels in Sanskrit: अ, आ, इ, ई, उ, ऊ, ऋ, ऌ (though the last 2 are less common).'
    },
    {
      id: 's1-q5',
      type: 'mcq',
      question: 'The letter "ण" is which type of consonant?',
      options: ['Velar (back of throat)', 'Retroflex (curled tongue)', 'Dental (teeth)', 'Labial (lips)'],
      correctAnswer: 1,
      explanation: 'ण (retroflex na) is pronounced with the tongue curled back. It\'s different from the dental न (na).'
    },

    // True/False Type (5 questions)
    {
      id: 's1-q6',
      type: 'true-false',
      question: 'The letter "ख" is pronounced exactly like "क".',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation: 'False! ख (kha) is aspirated and sounds like "kh" in "khan", while क (ka) sounds like "k" in "car".'
    },
    {
      id: 's1-q7',
      type: 'true-false',
      question: 'In Sanskrit, "ह" is a consonant.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! ह (ha) is a consonant, pronounced like "h" in "help".'
    },
    {
      id: 's1-q8',
      type: 'true-false',
      question: 'Devanagari script was originally used only for Sanskrit.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation: 'False! Devanagari is used for Sanskrit, Hindi, Marathi, and many other Indian languages.'
    },
    {
      id: 's1-q9',
      type: 'true-false',
      question: 'The vowel "ई" is a longer version of "इ".',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! इ (short i) and ई (long i) have the same sound but different duration.'
    },
    {
      id: 's1-q10',
      type: 'true-false',
      question: 'Sanskrit has 50 basic letters in total.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! Sanskrit has approximately 50 letters: 14 vowels + 33 consonants = 47-50 depending on classification.'
    },

    // Fill in the Blank (3 questions)
    {
      id: 's1-q11',
      type: 'fill-blank',
      question: 'The common greeting "नमस्ते" can be transliterated as __________ in English.',
      correctAnswer: ['namaste', 'namaskar', 'namsakar'],
      explanation: 'नमस्ते (Namaste) is a greeting meaning "I bow to you" or showing respect.'
    },
    {
      id: 's1-q12',
      type: 'mcq',
      question: 'The consonant "त" sounds like the "t" in which English word?',
      options: ['tap', 'think', 'this', 'she'],
      correctAnswer: 0,
      explanation: 'त (ta) is a dental consonant pronounced like "t" in "tap" or "tea".'
    },
    {
      id: 's1-q13',
      type: 'mcq',
      question: 'The long vowel "ऊ" sounds like "oo" in which word?',
      options: ['zoo', 'book', 'door', 'blood'],
      correctAnswer: 0,
      explanation: 'ऊ (uu) is a long vowel pronounced like "oo" in "zoo", "cool", or "pool".'
    },

    // Short Answer (3 questions)
    {
      id: 's1-q14',
      type: 'mcq',
      question: 'In Devanagari, what is the main difference in sound between "क" (ka) and "ख" (kha)?',
      options: ['"ख" has an extra "h" sound (aspiration)', '"क" is a vowel', '"ख" is only used at the end of words', 'There is no difference'],
      correctAnswer: 0,
      explanation: 'ख (kha) is aspirated, meaning it is pronounced with an extra breath (like "kh" in "khan").'
    },
    {
      id: 's1-q15',
      type: 'short-answer',
      question: 'Name three vowels in Sanskrit that you learned.',
      correctAnswer: ['अ आ इ', 'a aa i', 'अ इ उ', 'a i u', 'आ ई ऊ', 'aa ee oo'],
      explanation: 'Sanskrit has many vowels: अ (a), आ (aa), इ (i), ई (ee), उ (u), ऊ (oo), and more.'
    },
    {
      id: 's1-q16',
      type: 'short-answer',
      question: 'What is the name of the script used to write Sanskrit (shown in these lessons)?',
      correctAnswer: ['devanagari', 'Devanagari', 'devanagri', 'नागरी'],
      explanation: 'Devanagari is the script used to write Sanskrit, Hindi, and many other Indian languages.'
    },

    // Transliteration (2 questions)
    {
      id: 's1-q17',
      type: 'transliteration',
      question: 'Write the transliteration of: "शरीरम्"',
      correctAnswer: ['shariram', 'sharir', 'shariram', 'śarīram'],
      explanation: 'शरीरम् (shariram) means "body" - one of the key Sanskrit vocabulary words.'
    },
    {
      id: 's1-q18',
      type: 'transliteration',
      question: 'How do you write "pranaam" in Devanagari transliteration (from the guide)?',
      correctAnswer: ['pranam', 'pranaama', 'pranaam'],
      explanation: 'प्रणाम (pranaam) means "respectful greeting" or "salutation".'
    },

    // Letter Recognition (2 questions)
    {
      id: 's1-q19',
      type: 'letter-id',
      question: 'What letter is this: "ज"',
      options: ['ja', 'tha', 'cha', 'da'],
      correctAnswer: 0,
      explanation: 'ज (ja) is pronounced like "j" in "jump" or "joy".'
    },
    {
      id: 's1-q20',
      type: 'letter-id',
      question: 'What letter is this: "म"',
      options: ['na', 'ma', 'la', 'pa'],
      correctAnswer: 1,
      explanation: 'म (ma) is pronounced like "m" in "mother" or "man".'
    },

    // Pronunciation (2 questions)
    {
      id: 's1-q21',
      type: 'pronunciation',
      question: 'How is "छ" pronounced?',
      options: ['Like "kh" in "khan"', 'Like "ch" in "church"', 'Like "sh" in "ship"', 'Like "th" in "the"'],
      correctAnswer: 1,
      explanation: 'छ (chha) is an aspirated "ch", pronounced like "ch" in "church" with extra breath.'
    },
    {
      id: 's1-q22',
      type: 'pronunciation',
      question: 'How is "ध" pronounced?',
      options: ['Like "dh" in "Dhaka"', 'Like "d" in "dog"', 'Like "th" in "this"', 'Like "t" in "tea"'],
      correctAnswer: 0,
      explanation: 'ध (dha) is an aspirated "d", like "dh" in the city name "Dhaka".'
    },

    // Matching (2 sets)
    {
      id: 's1-q23',
      type: 'matching',
      question: 'Match each consonant with its pronunciation:',
      pairs: [
        { left: 'क', right: 'ka (like "car")' },
        { left: 'ज', right: 'ja (like "jump")' },
        { left: 'त', right: 'ta (like "tea")' }
      ],
      correctAnswer: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      explanation: 'These are three common Sanskrit consonants with their English pronunciation equivalents.'
    },
    {
      id: 's1-q24',
      type: 'matching',
      question: 'Match vowels with their sounds:',
      pairs: [
        { left: 'अ', right: 'like "a" in "but"' },
        { left: 'आ', right: 'like "aa" in "father"' },
        { left: 'इ', right: 'like "i" in "pit"' }
      ],
      correctAnswer: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      explanation: 'These vowels are the foundation of Sanskrit pronunciation.'
    },

    // Arrange in Order (2 questions)
    {
      id: 's1-q25',
      type: 'arrange',
      question: 'Arrange these vowels in their correct order in the Sanskrit alphabet:',
      items: ['इ', 'अ', 'आ'],
      correctAnswer: ['अ', 'आ', 'इ'],
      explanation: 'The basic order of Sanskrit vowels starts with अ (a), then आ (aa), then इ (i).'
    },
    {
      id: 's1-q26',
      type: 'arrange',
      question: 'Arrange in the correct order of letters:',
      items: ['ज', 'क', 'त'],
      correctAnswer: ['क', 'ज', 'त'],
      explanation: 'क (Velar) comes first, then ज (Palatal), then त (Dental) in Sanskrit alphabetical order.'
    },

    // Translation (4 questions)
    {
      id: 's1-q27',
      type: 'translation',
      question: 'What does "नमस्ते" mean in English?',
      correctAnswer: ['greeting', 'hello', 'i bow to you', 'respectful greeting', 'salutation'],
      explanation: 'नमस्ते (Namaste) is a greeting and also a gesture of respect meaning "I bow to you".'
    },
    {
      id: 's1-q28',
      type: 'translation',
      question: 'What does "शरीरम्" mean?',
      correctAnswer: ['body', 'physical body', 'human body'],
      explanation: 'शरीरम् (shariram) is one of the fundamental Sanskrit words meaning "body".'
    },
    {
      id: 's1-q29',
      type: 'translation',
      question: 'What does "विद्यार्थी" mean?',
      correctAnswer: ['student', 'pupil', 'learner'],
      explanation: 'विद्यार्थी (vidyarthi) means "student" - one who seeks knowledge (vidya = knowledge, arthi = seeker).'
    },
    {
      id: 's1-q30',
      type: 'translation',
      question: 'What does "धन्यवाद" mean?',
      correctAnswer: ['thank you', 'thanks', 'thank you very much'],
      explanation: 'धन्यवाद (dhanyavaad) means "thank you" - expressing gratitude.'
    }
  ]
};

// S2 QUIZ - Sanskrit Phase 2 (Vocabulary)
const S2_QUIZ = {
  id: 'S2-QUIZ',
  title: 'Sanskrit Phase 2 Quiz: Vocabulary',
  description: 'Test your vocabulary knowledge of body parts, nature, animals, and more',
  totalQuestions: 30,
  questions: [
    // MCQ - Body Parts & Nature (5)
    {
      id: 's2-q1',
      type: 'mcq',
      question: 'What does "नेत्र" mean?',
      options: ['Ear', 'Eye', 'Nose', 'Mouth'],
      correctAnswer: 1,
      explanation: 'नेत्र (netra) means "eye" - an important body part in Sanskrit.'
    },
    {
      id: 's2-q2',
      type: 'mcq',
      question: 'Which word means "tree"?',
      options: ['फूल', 'वृक्ष', 'पत्ता', 'पानी'],
      correctAnswer: 1,
      explanation: 'वृक्ष (vriksh) means "tree" - a key nature vocabulary word.'
    },
    {
      id: 's2-q3',
      type: 'mcq',
      question: 'What is "हाथी" in English?',
      options: ['Lion', 'Elephant', 'Tiger', 'Bear'],
      correctAnswer: 1,
      explanation: 'हाथी (hathi) means "elephant" - one of the important animals in Sanskrit.'
    },
    {
      id: 's2-q4',
      type: 'mcq',
      question: 'The word "रक्त" refers to:',
      options: ['Bone', 'Blood', 'Skin', 'Hair'],
      correctAnswer: 1,
      explanation: 'रक्त (rakt) means "blood" - an important body fluid in Sanskrit vocabulary.'
    },
    {
      id: 's2-q5',
      type: 'mcq',
      question: 'What does "सूर्य" mean?',
      options: ['Moon', 'Sun', 'Star', 'Planet'],
      correctAnswer: 1,
      explanation: 'सूर्य (surya) means "sun" - the central star in our solar system.'
    },

    // True/False (5)
    {
      id: 's2-q6',
      type: 'true-false',
      question: '"कान" (kaan) means "eye".',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation: 'False! कान (kaan) means "ear". नेत्र (netra) means "eye".'
    },
    {
      id: 's2-q7',
      type: 'true-false',
      question: '"चंद्र" (chandra) refers to the moon.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! चंद्र (chandra) means "moon" - often used in names and poetry.'
    },
    {
      id: 's2-q8',
      type: 'true-false',
      question: '"फूल" (phool) is the Sanskrit word for "leaf".',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation: 'False! फूल (phool) means "flower". पत्ता (patta) means "leaf".'
    },
    {
      id: 's2-q9',
      type: 'true-false',
      question: '"पानी" (pani) means "water" in Sanskrit.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! पानी (pani) means "water" - an essential element.'
    },
    {
      id: 's2-q10',
      type: 'true-false',
      question: '"बिल्ली" (billi) refers to a dog.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation: 'False! बिल्ली (billi) means "cat". कुत्ता (kutta) means "dog".'
    },

    // Fill in the Blank (3)
    {
      id: 's2-q11',
      type: 'fill-blank',
      question: 'The word for "flower" in Sanskrit is __________.',
      correctAnswer: ['phool', 'pushp', 'फूल'],
      explanation: 'फूल (phool) or पुष्प (pushp) both mean "flower" - a beautiful part of nature.'
    },
    {
      id: 's2-q12',
      type: 'fill-blank',
      question: 'The Sanskrit word "माता" means __________.',
      correctAnswer: ['mother', 'mata'],
      explanation: 'माता (mata) means "mother" - an important family relationship.'
    },
    {
      id: 's2-q13',
      type: 'fill-blank',
      question: 'The number "तीन" (teen) means __________ in English.',
      correctAnswer: ['three', '3'],
      explanation: 'तीन (teen) means "three" - part of the Sanskrit number system.'
    },

    // Short Answer (3)
    {
      id: 's2-q14',
      type: 'mcq',
      question: 'Which of these pairs represents colors in Sanskrit?',
      options: ['लाल (Red) & नीला (Blue)', 'शेर (Lion) & हाथी (Elephant)', 'वन (Forest) & नदी (River)', 'पिता (Father) & माता (Mother)'],
      correctAnswer: 0,
      explanation: 'S2 teaches colors like लाल (red) and नीला (blue).'
    },
    {
      id: 's2-q15',
      type: 'mcq',
      question: 'Which list contains three animals in Sanskrit?',
      options: ['शेर, हाथी, बाघ', 'लाल, नीला, पीला', 'नेत्र, कान, नाक', 'आम, केला, अनार'],
      correctAnswer: 0,
      explanation: 'Animals in S2 include हाथी (elephant), शेर (lion), and बाघ (tiger).'
    },
    {
      id: 's2-q16',
      type: 'short-answer',
      question: 'What body parts did you study in S2?',
      correctAnswer: ['eye ear nose', 'नेत्र कान नाक', 'netra kaan naak', 'eyes and ears'],
      explanation: 'Body parts in S2: नेत्र (eye), कान (ear), नाक (nose), हाथ (hand), पैर (foot), आदि।'
    },

    // Transliteration (2)
    {
      id: 's2-q17',
      type: 'transliteration',
      question: 'Write the transliterated form of: "पानी"',
      correctAnswer: ['pani', 'paani'],
      explanation: 'पानी (pani/paani) means "water" in Sanskrit.'
    },
    {
      id: 's2-q18',
      type: 'transliteration',
      question: 'Transliterate: "बिल्ली"',
      correctAnswer: ['billi', 'bili'],
      explanation: 'बिल्ली (billi) means "cat" - a small furry animal.'
    },

    // Letter Recognition (2)
    {
      id: 's2-q19',
      type: 'letter-id',
      question: 'What letter is this (from vowels): "ई"',
      options: ['Short i', 'Long i', 'Short u', 'Long u'],
      correctAnswer: 1,
      explanation: 'ई (long i) is the longer version of इ (short i) - used in many Sanskrit words.'
    },
    {
      id: 's2-q20',
      type: 'letter-id',
      question: 'What consonant is this: "श"',
      options: ['sa', 'sha', 'tha', 'ja'],
      correctAnswer: 1,
      explanation: 'श (sha) sounds like "sh" in "ship" - a common Sanskrit consonant.'
    },

    // Pronunciation (2)
    {
      id: 's2-q21',
      type: 'pronunciation',
      question: 'How is "ष" pronounced?',
      options: ['Like "s" in "sun"', 'Like "sh" in "ship"', 'Like "shh" (retroflex)', 'Like "z" in "zoo"'],
      correctAnswer: 2,
      explanation: 'ष (retroflex sha) is different from श (sha) - it\'s pronounced deeper in the mouth.'
    },
    {
      id: 's2-q22',
      type: 'pronunciation',
      question: '"ड" sounds like:',
      options: ['ta (like "tea")', 'da (like "dog")', 'retroflex da (like "drum" with curled tongue)', 'ta (like "tap")'],
      correctAnswer: 2,
      explanation: 'ड (retroflex da) is pronounced with tongue curled back - different from dental द (da).'
    },

    // Matching (2)
    {
      id: 's2-q23',
      type: 'matching',
      question: 'Match body parts to their meanings:',
      pairs: [
        { left: 'नेत्र', right: 'Eye' },
        { left: 'कान', right: 'Ear' },
        { left: 'नाक', right: 'Nose' }
      ],
      correctAnswer: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      explanation: 'These are important body parts you should recognize.'
    },
    {
      id: 's2-q24',
      type: 'matching',
      question: 'Match animals to their names:',
      pairs: [
        { left: 'हाथी', right: 'Elephant' },
        { left: 'शेर', right: 'Lion' },
        { left: 'बिल्ली', right: 'Cat' }
      ],
      correctAnswer: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      explanation: 'Important animals in Sanskrit vocabulary.'
    },

    // Arrange (2)
    {
      id: 's2-q25',
      type: 'arrange',
      question: 'Arrange these numbers in order from smallest to largest:',
      items: ['पाँच', 'एक', 'तीन'],
      correctAnswer: ['एक', 'तीन', 'पाँच'],
      explanation: 'एक (one) < तीन (three) < पाँच (five) - basic number ordering.'
    },
    {
      id: 's2-q26',
      type: 'arrange',
      question: 'Arrange these words in the correct order of learning:',
      items: ['नेत्र', 'शरीरम्', 'कान'],
      correctAnswer: ['शरीरम्', 'नेत्र', 'कान'],
      explanation: 'शरीरम् (body) is the main part, and नेत्र (eye) and कान (ear) are parts of it.'
    },

    // Translation (4)
    {
      id: 's2-q27',
      type: 'translation',
      question: 'What does "वृक्ष" mean?',
      correctAnswer: ['tree', 'big tree', 'plant tree'],
      explanation: 'वृक्ष (vriksh) means "tree" - a plant with a trunk and branches.'
    },
    {
      id: 's2-q28',
      type: 'translation',
      question: 'What does "चंद्र" mean?',
      correctAnswer: ['moon', 'moonlight'],
      explanation: 'चंद्र (chandra) means "moon" - the satellite that orbits Earth.'
    },
    {
      id: 's2-q29',
      type: 'translation',
      question: 'What does "सूर्य" mean?',
      correctAnswer: ['sun', 'the sun'],
      explanation: 'सूर्य (surya) means "sun" - the star at the center of our solar system.'
    },
    {
      id: 's2-q30',
      type: 'translation',
      question: 'What does "फूल" mean?',
      correctAnswer: ['flower', 'flowers', 'blossom'],
      explanation: 'फूल (phool) means "flower" - a colorful and fragrant part of plants.'
    }
  ]
};

// M1 QUIZ - Marathi Phase 1 (Alphabets & Sounds)
const M1_QUIZ = {
  id: 'M1-QUIZ',
  title: 'Marathi Phase 1 Quiz: Alphabets & Sounds',
  description: 'Test your knowledge of Marathi letters and pronunciation',
  totalQuestions: 30,
  questions: [
    // MCQ (5)
    {
      id: 'm1-q1',
      type: 'mcq',
      question: 'How many vowels (स्वर) are in Marathi?',
      options: ['5', '8', '12', '10'],
      correctAnswer: 1,
      explanation: 'Marathi has 8 basic vowels, same as Sanskrit.'
    },
    {
      id: 'm1-q2',
      type: 'mcq',
      question: 'Which is a consonant in Marathi?',
      options: ['आ', 'क', 'ई', 'ऊ'],
      correctAnswer: 1,
      explanation: 'क (ka) is a consonant. आ, ई, ऊ are vowels.'
    },
    {
      id: 'm1-q3',
      type: 'mcq',
      question: 'The letter "ण" in Marathi is:',
      options: ['A vowel', 'A dental nasal consonant', 'A retroflex nasal', 'A vowel modifier'],
      correctAnswer: 2,
      explanation: 'ण (retroflex n) is a unique nasal consonant.'
    },
    {
      id: 'm1-q4',
      type: 'mcq',
      question: 'How is "ळ" (retroflex l) unique to Marathi?',
      options: ['It\'s borrowed from English', 'Not many languages have this sound', 'It\'s the same as "ल"', 'It means number'],
      correctAnswer: 1,
      explanation: 'ळ is a retroflex lateral that makes Marathi unique among Indian languages.'
    },
    {
      id: 'm1-q5',
      type: 'mcq',
      question: 'The consonant "म" is pronounced like:',
      options: ['"m" in "mother"', '"n" in "name"', '"l" in "love"', '"r" in "room"'],
      correctAnswer: 0,
      explanation: 'म (ma) sounds like "m" in "mother".'
    },

    // True/False (5)
    {
      id: 'm1-q6',
      type: 'true-false',
      question: 'Marathi uses Devanagari script, just like Sanskrit.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! Marathi also uses Devanagari script, making it similar to Sanskrit.'
    },
    {
      id: 'm1-q7',
      type: 'true-false',
      question: '"ह" (ha) is a vowel in Marathi.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation: 'False! ह is a consonant. Vowels are अ, आ, इ, ई, उ, ऊ, आदि।'
    },
    {
      id: 'm1-q8',
      type: 'true-false',
      question: 'The vowel "ए" (e) is used in Marathi spelled words.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! ए (ay) is a vowel in Marathi pronunciation and spelling.'
    },
    {
      id: 'm1-q9',
      type: 'true-false',
      question: 'All Marathi consonants have the same sound as their Sanskrit counterparts.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! Since both use Devanagari and have similar phonetic bases.'
    },
    {
      id: 'm1-q10',
      type: 'true-false',
      question: '"य" (ya) is pronounced like "y" in "yes".',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! य (ya) sounds like "y" in "yes" or "yellow".'
    },

    // Fill-Blank (3)
    {
      id: 'm1-q11',
      type: 'fill-blank',
      question: 'The common greeting in Marathi similar to "नमस्ते" is __________.',
      correctAnswer: ['namaste', 'namaskar'],
      explanation: 'नमस्ते (namaste) is also used in Marathi as a greeting.'
    },
    {
      id: 'm1-q12',
      type: 'fill-blank',
      question: 'The letter "ज्ञ" (gya) is a unique combination in both Sanskrit and Marathi, sounding like __________ in "knowledge".',
      correctAnswer: ['gya', 'jnya'],
      explanation: 'ज्ञ represents the "gya" sound - a special consonant cluster.'
    },
    {
      id: 'm1-q13',
      type: 'fill-blank',
      question: 'The retroflex "ल" sound is called __________ in linguistics.',
      correctAnswer: ['retroflex', 'retroflex l', 'retroflex lateral'],
      explanation: 'ळ is technically called a "retroflex lateral" because the tongue curls back.'
    },

    // Short Answer (3)
    {
      id: 'm1-q14',
      type: 'mcq',
      question: 'Which of these are the basic vowels in Marathi?',
      options: ['अ आ इ ई उ ऊ ए ओ', 'क ख ग घ ङ', '१ २ ३ ४ ५', 'नमस्ते, धन्यवाद'],
      correctAnswer: 0,
      explanation: 'Marathi vowels are: अ, आ, इ, ई, उ, ऊ, ए, ओ.'
    },
    {
      id: 'm1-q15',
      type: 'short-answer',
      question: 'What makes the letter "ळ" special in Marathi?',
      correctAnswer: ['retroflex l', 'unique sound', 'not in sanskrit', 'distinct from normal l'],
      explanation: 'ळ (retroflex l) is a special Marathi sound not found in many other languages.'
    },
    {
      id: 'm1-q16',
      type: 'short-answer',
      question: 'How many scripting systems does Marathi use?',
      correctAnswer: ['one', 'devanagari', 'just one script'],
      explanation: 'Marathi uses Devanagari script - the same as Sanskrit and Hindi.'
    },

    // Transliteration (2)
    {
      id: 'm1-q17',
      type: 'transliteration',
      question: 'Transliterate: "नमस्कार"',
      correctAnswer: ['namaskaar', 'namaskar'],
      explanation: 'नमस्कार (namaskaar) is a Marathi greeting.'
    },
    {
      id: 'm1-q18',
      type: 'transliteration',
      question: 'Write the transliteration of: "आम्ही"',
      correctAnswer: ['amhi', 'amhee'],
      explanation: 'आम्ही (amhi) is the Marathi word for "we".'
    },

    // Letter ID (2)
    {
      id: 'm1-q19',
      type: 'letter-id',
      question: 'What is this letter: "ळ"',
      options: ['normal l', 'retroflex l', 'retroflex r', 'retroflex n'],
      correctAnswer: 1,
      explanation: 'ळ is the special Marathi retroflex l - unique to Marathi.'
    },
    {
      id: 'm1-q20',
      type: 'letter-id',
      question: 'What letter is this: "य"',
      options: ['ya', 'ra', 'la', 'wa'],
      correctAnswer: 0,
      explanation: 'य (ya) is pronounced like "y" in "yes".'
    },

    // Pronunciation (2)
    {
      id: 'm1-q21',
      type: 'pronunciation',
      question: '"ण" is pronounced:',
      options: ['Like "n" in "nose"', 'Like "n" but with tongue curled back (retroflex)', 'Like "ng" in "sing"', 'Like "ny" in "canyon"'],
      correctAnswer: 1,
      explanation: 'ण (retroflex n) is pronounced with the tongue curled back.'
    },
    {
      id: 'm1-q22',
      type: 'pronunciation',
      question: 'How do you pronounce "श"?',
      options: ['Like "s" in "sun"', 'Like "sh" in "ship"', 'Like "th" in "the"', 'Like "ch" in "church"'],
      correctAnswer: 1,
      explanation: 'श (sha) sounds like "sh" in "ship".'
    },

    // Matching (2)
    {
      id: 'm1-q23',
      type: 'matching',
      question: 'Match these Marathi consonants with their sounds:',
      pairs: [
        { left: 'क', right: 'ka' },
        { left: 'म', right: 'ma' },
        { left: 'य', right: 'ya' }
      ],
      correctAnswer: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      explanation: 'Basic Marathi consonant sounds.'
    },
    {
      id: 'm1-q24',
      type: 'matching',
      question: 'Match Marathi vowels with their phonetic sounds:',
      pairs: [
        { left: 'अ', right: 'uh (like "but")' },
        { left: 'आ', right: 'ah (like "father")' },
        { left: 'इ', right: 'ih (like "pit")' }
      ],
      correctAnswer: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      explanation: 'Basic Marathi vowel sounds.'
    },

    // Arrange (2)
    {
      id: 'm1-q25',
      type: 'arrange',
      question: 'Arrange these vowels in order:',
      items: ['आ', 'अ', 'ई'],
      correctAnswer: ['अ', 'आ', 'ई'],
      explanation: 'अ (shortest), आ (medium), ई (long) - vowel length progression.'
    },
    {
      id: 'm1-q26',
      type: 'arrange',
      question: 'Order these consonants as they appear in the script:',
      items: ['म', 'क', 'त'],
      correctAnswer: ['क', 'त', 'म'],
      explanation: 'क (ka), त (ta), म (ma) - appearing in this script order.'
    },

    // Translation (4)
    {
      id: 'm1-q27',
      type: 'translation',
      question: 'In Marathi, what does "नमस्कार" mean?',
      correctAnswer: ['greeting', 'hello', 'respectful greeting'],
      explanation: 'नमस्कार means "hello" or "respectful greeting" in Marathi.'
    },
    {
      id: 'm1-q28',
      type: 'translation',
      question: 'What does "आम्ही" mean in Marathi?',
      correctAnswer: ['we', 'us'],
      explanation: 'आम्ही (amhi) means "we" - a pronoun in Marathi.'
    },
    {
      id: 'm1-q29',
      type: 'translation',
      question: 'What does "मी" mean?',
      correctAnswer: ['i', 'me'],
      explanation: 'मी (mi) means "I" or "me" - first person singular pronoun.'
    },
    {
      id: 'm1-q30',
      type: 'translation',
      question: 'What does "तु" mean in Marathi?',
      correctAnswer: ['you', 'thou'],
      explanation: 'तु (tu) means "you" (informal) in Marathi.'
    }
  ]
};

// M2 QUIZ - Marathi Phase 2 (Vocabulary)
const M2_QUIZ = {
  id: 'M2-QUIZ',
  title: 'Marathi Phase 2 Quiz: Vocabulary',
  description: 'Test your Marathi vocabulary knowledge',
  totalQuestions: 30,
  questions: [
    // MCQ (5)
    {
      id: 'm2-q1',
      type: 'mcq',
      question: 'What does "घर" mean in Marathi?',
      options: ['Tree', 'House', 'Water', 'Flower'],
      correctAnswer: 1,
      explanation: 'घर (ghar) means "house" or "home" in Marathi.'
    },
    {
      id: 'm2-q2',
      type: 'mcq',
      question: 'Which word means "mother" in Marathi?',
      options: ['पिता', 'आई', 'भाई', 'बहिण'],
      correctAnswer: 1,
      explanation: 'आई (aai) means "mother" in Marathi.'
    },
    {
      id: 'm2-q3',
      type: 'mcq',
      question: 'What does "शाळा" mean?',
      options: ['Farm', 'School', 'Market', 'Park'],
      correctAnswer: 1,
      explanation: 'शाळा (shala) means "school" in Marathi.'
    },
    {
      id: 'm2-q4',
      type: 'mcq',
      question: '"जेवण" refers to:',
      options: ['Clothes', 'Food/Meal', 'Book', 'Toy'],
      correctAnswer: 1,
      explanation: 'जेवण (jevan) means "food" or "meal" in Marathi.'
    },
    {
      id: 'm2-q5',
      type: 'mcq',
      question: 'The Marathi word for "water" is:',
      options: ['पाणी', 'चाय', 'दूध', 'रस'],
      correctAnswer: 0,
      explanation: 'पाणी (pani) means "water" in Marathi. Note the retroflex "ण".'
    },

    // True/False (5)
    {
      id: 'm2-q6',
      type: 'true-false',
      question: '"भाई" (bhai) means "sister" in Marathi.',
      options: ['True', 'False'],
      correctAnswer: 1,
      explanation: 'False! भाई (bhai) means "brother". बहिण (bahin) means "sister".'
    },
    {
      id: 'm2-q7',
      type: 'true-false',
      question: '"रंग" (rang) means "color" in Marathi.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! रंग (rang) means "color" in Marathi.'
    },
    {
      id: 'm2-q8',
      type: 'true-false',
      question: '"पिता" (pita) means "father" in Marathi.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! पिता (pita) or बाप (bap) means "father" in Marathi.'
    },
    {
      id: 'm2-q9',
      type: 'true-false',
      question: 'The Marathi word "निळा" refers to the color blue.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! निळा (nila) means "blue". नारंगी (narangi) means "orange".'
    },
    {
      id: 'm2-q10',
      type: 'true-false',
      question: '"हवामान" (hawaman) means "weather" in Marathi.',
      options: ['True', 'False'],
      correctAnswer: 0,
      explanation: 'True! हवामान (hawaman) means "weather" - a compound of "hawa" (air/wind).'
    },

    // Fill-Blank (3)
    {
      id: 'm2-q11',
      type: 'fill-blank',
      question: 'The Marathi word for "book" is __________.',
      correctAnswer: ['pustaka', 'पुस्तक'],
      explanation: 'पुस्तक (pustaka) means "book" in Marathi.'
    },
    {
      id: 'm2-q12',
      type: 'fill-blank',
      question: 'In Marathi, "चाय" means __________.',
      correctAnswer: ['tea', 'chai'],
      explanation: 'चाय (chai) means "tea" - a popular beverage in Marathi culture.'
    },
    {
      id: 'm2-q13',
      type: 'fill-blank',
      question: 'The word "कपडे" (kapadhe) means __________ in English.',
      correctAnswer: ['clothes', 'clothing'],
      explanation: 'कपडे (kapadhe) means "clothes" or "garments".'
    },

    // Short Answer (3)
    {
      id: 'm2-q14',
      type: 'mcq',
      question: 'Which of these are colors in Marathi?',
      options: ['लाल, निळा, हिरवा', 'घर, शाळा, दफ्तर', 'आई, बाबा, भाऊ', 'सफरचंद, केळी, आंबा'],
      correctAnswer: 0,
      explanation: 'Colors in Marathi include लाल (red), निळा (blue), and हिरवा (green).'
    },
    {
      id: 'm2-q15',
      type: 'mcq',
      question: 'Which of these represents family members in Marathi?',
      options: ['आई & पिता', 'लाल & निळा', 'घर & शाळा', 'आंबा & केळी'],
      correctAnswer: 0,
      explanation: 'आई (mother) and पिता (father) are family members.'
    },
    {
      id: 'm2-q16',
      type: 'short-answer',
      question: 'Name a food item you might eat for breakfast in Marathi culture.',
      correctAnswer: ['poha', 'idli', 'चिवड़ा', 'पोहा'],
      explanation: 'Common Marathi breakfast foods: पोहा (poha - flattened rice), इडली (idli), etc.'
    },

    // Transliteration (2)
    {
      id: 'm2-q17',
      type: 'transliteration',
      question: 'Transliterate: "घर"',
      correctAnswer: ['ghar', 'ghar'],
      explanation: 'घर (ghar) means "house".'
    },
    {
      id: 'm2-q18',
      type: 'transliteration',
      question: 'Write: "शाळा"',
      correctAnswer: ['shala', 'sala'],
      explanation: 'शाळा (shala) means "school".'
    },

    // Letter ID (2)
    {
      id: 'm2-q19',
      type: 'letter-id',
      question: 'Recognize this consonant: "ग"',
      options: ['ka', 'ga', 'ja', 'da'],
      correctAnswer: 1,
      explanation: 'ग (ga) sounds like "g" in "go" or "goal".'
    },
    {
      id: 'm2-q20',
      type: 'letter-id',
      question: 'What is this: "ह"',
      options: ['ha', 'ja', 'ya', 'wa'],
      correctAnswer: 0,
      explanation: 'ह (ha) sounds like "h" in "hello".'
    },

    // Pronunciation (2)
    {
      id: 'm2-q21',
      type: 'pronunciation',
      question: '"ड" is pronounced:',
      options: ['Like "d" in "dog"', 'Like retroflex "d" with curled tongue', 'Like "t" in "tea"', 'Like "ra" sound'],
      correctAnswer: 1,
      explanation: 'ड (retroflex d) is pronounced with the tongue curled back.'
    },
    {
      id: 'm2-q22',
      type: 'pronunciation',
      question: 'How do you pronounce "व"?',
      options: ['Like "w" in "water"', 'Like "v" in "very"', 'Either v or w sound', 'Like "b" in "bat"'],
      correctAnswer: 2,
      explanation: 'व (va/wa) can sound like either "v" or "w" depending on context.'
    },

    // Matching (2)
    {
      id: 'm2-q23',
      type: 'matching',
      question: 'Match Marathi words with their meanings:',
      pairs: [
        { left: 'घर', right: 'House' },
        { left: 'शाळा', right: 'School' },
        { left: 'आई', right: 'Mother' }
      ],
      correctAnswer: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      explanation: 'Important Marathi vocabulary.'
    },
    {
      id: 'm2-q24',
      type: 'matching',
      question: 'Match colors to their Marathi names:',
      pairs: [
        { left: 'Red', right: 'लाल' },
        { left: 'Blue', right: 'निळा' },
        { left: 'Green', right: 'हिरवा' }
      ],
      correctAnswer: {
        '0': '0',
        '1': '1',
        '2': '2'
      },
      explanation: 'Marathi colors: लाल (Red), निळा (Blue), हिरवा (Green).'
    },

    // Arrange (2)
    {
      id: 'm2-q25',
      type: 'arrange',
      question: 'Arrange these family members in order (youngest to oldest):',
      items: ['दादा', 'मुलगा', 'वडील'],
      correctAnswer: ['मुलगा', 'वडील', 'दादा'],
      explanation: 'मुलगा (boy) < वडील (father) < दादा (grandfather) in age.'
    },
    {
      id: 'm2-q26',
      type: 'arrange',
      question: 'Order these words by their typical occurrence during the day:',
      items: ['रात्र', 'दुपार', 'सकाळ'],
      correctAnswer: ['सकाळ', 'दुपार', 'रात्र'],
      explanation: 'सकाळ (morning) → दुपार (afternoon) → रात्र (night) - chronological order.'
    },

    // Translation (4)
    {
      id: 'm2-q27',
      type: 'translation',
      question: 'What does "घर" mean in Marathi?',
      correctAnswer: ['house', 'home'],
      explanation: 'घर (ghar) means "house" or "home".'
    },
    {
      id: 'm2-q28',
      type: 'translation',
      question: 'Translate "जेवण":',
      correctAnswer: ['food', 'meal', 'eating', 'lunch'],
      explanation: 'जेवण (jevan) means "meal" or "food".'
    },
    {
      id: 'm2-q29',
      type: 'translation',
      question: 'What does "पुस्तक" mean?',
      correctAnswer: ['book', 'books'],
      explanation: 'पुस्तक (pustaka) means "book".'
    },
    {
      id: 'm2-q30',
      type: 'translation',
      question: 'What does "चाय" mean in Marathi?',
      correctAnswer: ['tea', 'chai'],
      explanation: 'चाय (chai) means "tea" - a beloved drink in Indian culture.'
    }
  ]
};

// S3, S4, M3, M4 PLACEHOLDERS
const S3_QUIZ = {
  id: 'S3-QUIZ',
  title: 'Sanskrit Phase 3 Quiz (Coming Soon)',
  description: 'Grammar, sentences, and verb conjugations - awaiting video content',
  totalQuestions: 0,
  questions: []
};

const S4_QUIZ = {
  id: 'S4-QUIZ',
  title: 'Sanskrit Phase 4 Quiz (Coming Soon)',
  description: 'Stories, shlokas, and cultural heritage - awaiting video content',
  totalQuestions: 0,
  questions: []
};

const M3_QUIZ = {
  id: 'M3-QUIZ',
  title: 'Marathi Phase 3 Quiz (Coming Soon)',
  description: 'Grammar and sentences in Marathi - awaiting video content',
  totalQuestions: 0,
  questions: []
};

const M4_QUIZ = {
  id: 'M4-QUIZ',
  title: 'Marathi Phase 4 Quiz (Coming Soon)',
  description: 'Stories and cultural content - awaiting video content',
  totalQuestions: 0,
  questions: []
};

// Export all quizzes
const ALL_QUIZZES = {
  'S1-QUIZ': S1_QUIZ,
  'S2-QUIZ': S2_QUIZ,
  'M1-QUIZ': M1_QUIZ,
  'M2-QUIZ': M2_QUIZ,
  'S3-QUIZ': S3_QUIZ,
  'S4-QUIZ': S4_QUIZ,
  'M3-QUIZ': M3_QUIZ,
  'M4-QUIZ': M4_QUIZ
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { S1_QUIZ, S2_QUIZ, M1_QUIZ, M2_QUIZ, S3_QUIZ, S4_QUIZ, M3_QUIZ, M4_QUIZ, ALL_QUIZZES };
}
