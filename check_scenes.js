// Script to check which scenes exist and which are missing
const fs = require('fs');
const path = require('path');

// Import all scene files
const scenePaths = [
    './scenes/starting-scenes.js',
    './scenes/location-scenes.js',
    './scenes/quest-scenes.js',
    './scenes/misc-scenes.js',
    './scenes/combat-scenes.js',
    './scenes/final-battle-scenes.js',
    './scenes/ending-scenes.js',
    './scenes/magical-scenes.js',
    './scenes/tactical-scenes.js',
    './scenes/nature-scenes.js',
    './scenes/stealth-scenes.js',
    './scenes/comprehensive-scenes.js',
    './scenes/heroic-scenes.js',
    './scenes/final-missing-scenes.js',
    './scenes/completion-scenes.js'
];

// Collect all existing scenes
const existingScenes = new Set();

scenePaths.forEach(scenePath => {
    try {
        const content = fs.readFileSync(scenePath, 'utf8');

        // Extract scene names from export statements
        // Look for patterns like: scene_name: {
        const sceneMatches = content.match(/^\s*(\w+):\s*{/gm);
        if (sceneMatches) {
            sceneMatches.forEach(match => {
                const sceneName = match.match(/(\w+):/)[1];
                if (sceneName !== 'emojis' && sceneName !== 'text' && sceneName !== 'choices' && sceneName !== 'effects' && sceneName !== 'conditions') {
                    existingScenes.add(sceneName);
                }
            });
        }
    } catch (error) {
        console.log(`Error reading ${scenePath}: ${error.message}`);
    }
});

// Collect all nextScene references
const nextSceneRefs = new Set();

scenePaths.forEach(scenePath => {
    try {
        const content = fs.readFileSync(scenePath, 'utf8');

        // Extract nextScene references
        const nextSceneMatches = content.match(/nextScene:\s*['"]([\w_]+)['"]/g);
        if (nextSceneMatches) {
            nextSceneMatches.forEach(match => {
                const sceneName = match.match(/nextScene:\s*['"]([\w_]+)['"]/)[1];
                nextSceneRefs.add(sceneName);
            });
        }
    } catch (error) {
        console.log(`Error reading ${scenePath}: ${error.message}`);
    }
});

console.log('=== EXISTING SCENES ===');
console.log(`Total existing scenes: ${existingScenes.size}`);
const sortedExisting = Array.from(existingScenes).sort();
sortedExisting.forEach(scene => console.log(`✓ ${scene}`));

console.log('\n=== REFERENCED SCENES ===');
console.log(`Total referenced scenes: ${nextSceneRefs.size}`);
const sortedRefs = Array.from(nextSceneRefs).sort();
sortedRefs.forEach(scene => console.log(`→ ${scene}`));

console.log('\n=== MISSING SCENES ===');
const missingScenes = Array.from(nextSceneRefs).filter(scene => !existingScenes.has(scene));
missingScenes.sort();
console.log(`Total missing scenes: ${missingScenes.length}`);
missingScenes.forEach(scene => console.log(`❌ ${scene}`));

console.log('\n=== UNREFERENCED SCENES ===');
const unreferencedScenes = Array.from(existingScenes).filter(scene => !nextSceneRefs.has(scene) && scene !== 'start');
unreferencedScenes.sort();
console.log(`Total unreferenced scenes: ${unreferencedScenes.length}`);
unreferencedScenes.forEach(scene => console.log(`🔸 ${scene}`));
