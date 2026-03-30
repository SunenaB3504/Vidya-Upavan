# 📹 Vidya Upavan — Standardized YouTube Upload Guide

This guide ensures maximum SEO consistency, COPPA compliance, and brand alignment across all video uploads for the Vidya Upavan project. Follow the templates below to standardize your "Pension Asset" on YouTube.

---

## 📌 1. Title Field (Dual-Language Strategy)

**Template:**
`[Topic in English] | [Topic in Native Script] | Class 5 CBSE/ICSE | Vidya Upavan`

**Rules:**
- Keep it under 100 characters.
- Your primary keyword (e.g., `Sanskrit Vowels`) must appear in the first 40 characters for mobile display.

**Example (Sanskrit):** 
`Sanskrit Vowels Explained | स्वर: अ आ इ | Class 5 CBSE/ICSE | Vidya Upavan`

**Example (Marathi):** 
`Daily Marathi Words | रोजचे शब्द | Class 5 CBSE/ICSE | Vidya Upavan`

---

## 📝 2. Description Box (The "First 125" & Funnel)

Copy and paste the following template into the description box. The first 125 characters are vital because they appear in YouTube Search Snippets.

```text
Learn [Language] easily! Today we explore [Topic in English] ([Topic in Native Script]) step-by-step for Class 5 students.

✅ Take the Quiz & track progress in the Private Vidya Upavan App:
https://sunenab3504.github.io/Marathi-Sanskrit-App/nia-language-adventure-index.html

⏱️ Chapters:
0:00 - Introduction to [Topic]
1:15 - Core Lesson
3:30 - Vocabulary Review
4:45 - Summary & Next Steps

🌱 The Gardener's Call
Vidya Upavan is a 'Garden of Knowledge' kept free and private for every student. 
- Vision: To be the global hub for privacy-protected Indian language education.
- Mission: Providing high-quality Sanskrit, Hindi, and Marathi resources with zero tracking.
- Principle: Heritage learning open to all, guarded by integrity.

🙏 Support the Garden (Dakshina)
Help keep this adventure safe, ad-light, and free for students everywhere:
UPI: YOUR_UPI_ID@bank (India)
Ko-fi: https://ko-fi.com/datastoriesai (Global)
```

---

## 🛡️ 3. Audience & Safety Settings

These settings are non-negotiable to protect the channel from COPPA (Children's Online Privacy Protection Act) violations and maintain a safe learning environment.

1. **Audience Setup**: 
   - Select **"Yes, it's Made for Kids"**. (This disables personalized ads and keeps you compliant with global child data laws).
2. **Shorts Remixing**: 
   - Set to **"Don't allow remixing"**. (Protects your educational IP from being used inappropriately).
3. **Comments**:
   - Comments will be **Disabled** automatically because it is "Made for Kids". If forced to choose, explicitly select "Disable Comments".

---

## 🏷️ 4. Tag Section (Hierarchy Logic)

Copy and paste the relevant set of tags. YouTube allows 500 characters.

**Broad Tags:**
`Sanskrit Learning, Marathi Lessons, Hindi Grammar, Indian Languages for Kids, CBSE Language Curriculum`

**Specific Tags (Adjust per video):**
`Class 5 CBSE English Medium, Standard 5 Marathi Poems, Sanskrit Vowels for Kids, ICSE Class 5 Languages`

**Brand Tags:**
`Vidya Upavan, Suncube-AI, Nia's Language Adventure, DataStoriesAI`

*(Note: Comma separated values map directly to YouTube tags when pasted).*

---

## 🎓 5. Category & License

Protect your intellectual property while ensuring it reaches the right audience algorithmically.

- **Category:** `Education` (Set "Type" to `Concept Overview` or `Lecture` if prompted, and "Level" to `Beginner`).
- **License:** `Standard YouTube License` (Do not use Creative Commons, as you want to maintain exclusive rights to your primary pension asset).

---

## 🤖 6. Implementation Detail: Metadata Generator Script

If you wish to automate this process, run the following JavaScript function in your browser console, or embed it in a small Node.js/HTML utility page.

```javascript
/**
 * Auto-generates SEO-optimized YouTube Metadata for Vidya Upavan Videos.
 * 
 * @param {string} topicEnglish - The topic in English (e.g., "Sanskrit Vowels Explained")
 * @param {string} topicNative - The topic in Native (e.g., "स्वर: अ आ इ")
 * @param {string} track - The language track (e.g., "Sanskrit" or "Marathi")
 * @param {string} appUrl - Link to the app
 */
function generateYouTubeMetadata(topicEnglish, topicNative, track, appUrl = "https://sunenab3504.github.io/Marathi-Sanskrit-App/nia-language-adventure-index.html") {
    
    // 1. Title Generation
    const title = `${topicEnglish} | ${topicNative} | Class 5 CBSE/ICSE | Vidya Upavan`;
    
    if (title.length > 100) {
        console.warn("⚠️ Warning: Title exceeds YouTube's 100 character limit!");
    }

    // 2. Description Generation
    const description = `Learn ${track} easily! Today we explore ${topicEnglish} (${topicNative}) step-by-step for Class 5 students.

✅ Take the Quiz & track progress in the Private Vidya Upavan App:
${appUrl}

⏱️ Chapters:
0:00 - Introduction to ${topicEnglish}
1:15 - Core Lesson
3:30 - Vocabulary Review
4:45 - Summary & Next Steps

🌱 The Gardener's Call
Vidya Upavan is a 'Garden of Knowledge' kept free and private for every student. 
- Vision: To be the global hub for privacy-protected Indian language education.
- Mission: Providing high-quality Sanskrit, Hindi, and Marathi resources with zero tracking.
- Principle: Heritage learning open to all, guarded by integrity.

🙏 Support the Garden (Dakshina)
Help keep this adventure safe and free for students everywhere:
UPI: YOUR_UPI_ID@bank (India)
Ko-fi: https://ko-fi.com/datastoriesai (Global)`;

    // 3. Tags Generation
    const tags = `Class 5 CBSE English Medium, ${track} Learning, ${track} Lessons for kids, ${topicEnglish}, ${topicNative}, Vidya Upavan, Nia's Language Adventure, Suncube-AI, Education, CBSE, ICSE`;

    // Output Data
    console.log("========== YOUTUBE UPLOAD METADATA ==========");
    console.log(`[TITLE]\n${title}\n`);
    console.log(`[DESCRIPTION]\n${description}\n`);
    console.log(`[TAGS]\n${tags}\n`);
    console.log("=============================================");
    
    return { title, description, tags };
}

// Example Execution:
// generateYouTubeMetadata("Daily Marathi Words", "रोजचे शब्द", "Marathi");
```
