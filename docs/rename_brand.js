const fs = require('fs');
const path = require('path');

// Target the root of the project (one level up from /docs)
const rootDir = path.resolve(__dirname, '..');
console.log('🚀 Starting Global Rename in:', rootDir);

// Define all the case variations that need to be replaced
const replaceRules = [
    { from: /Vidya Vatika/g, to: 'Vidya Upavan' },
    { from: /vidya vatika/gi, to: 'vidya upavan' },
    { from: /vidya-vatika/g, to: 'vidya-upavan' },
    { from: /vidyavatika/gi, to: 'vidyaupavan' },
    { from: /Vidya_Vatika/g, to: 'Vidya_Upavan' }
];

// Recursively find all text-based files
function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            // Exclude heavy/system directories
            if (!file.includes('node_modules') && !file.includes('.git') && !file.includes('assets\\fonts')) {
                results = results.concat(walk(file));
            }
        } else { 
            const ext = path.extname(file).toLowerCase();
            if (['.html', '.md', '.json', '.txt', '.js', '.css'].includes(ext)) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(rootDir);
let updatedCount = 0;

files.forEach(file => {
    // Don't modify the rename script itself
    if (file.endsWith('rename_brand.js')) return;

    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    replaceRules.forEach(rule => {
        content = content.replace(rule.from, rule.to);
    });

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
        console.log(`✅ Updated: ${file.replace(rootDir, '')}`);
    }
});

console.log(`\n🎉 Success! Renamed 'Vidya Vatika' to 'Vidya Upavan' across ${updatedCount} files.`);
