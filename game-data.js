// Game Data for Emoji Quest: The Crystal Kingdom
// This file combines all scene components into one game data structure

// Include all scene component files
document.addEventListener('DOMContentLoaded', function() {
    // Load scene files dynamically
    const sceneFiles = [
        'scenes/starting-scenes.js',
        'scenes/location-scenes.js',
        'scenes/combat-scenes.js',
        'scenes/final-battle-scenes.js',
        'scenes/ending-scenes.js',
        'scenes/quest-scenes.js',
        'scenes/misc-scenes.js'
    ];

    let loadedFiles = 0;
    const totalFiles = sceneFiles.length;

    function checkAllLoaded() {
        loadedFiles++;
        if (loadedFiles === totalFiles) {
            // All files loaded, combine the scenes
            combineGameData();
        }
    }

    // Load each scene file
    sceneFiles.forEach(file => {
        const script = document.createElement('script');
        script.src = file;
        script.onload = checkAllLoaded;
        script.onerror = function() {
            console.error(`Failed to load ${file}`);
            checkAllLoaded(); // Still proceed even if a file fails
        };
        document.head.appendChild(script);
    });
});

function combineGameData() {
    // Combine all scene objects into one GAME_DATA structure
    const GAME_DATA = {
        scenes: {
            // Combine all scene collections
            ...STARTING_SCENES,
            ...LOCATION_SCENES,
            ...COMBAT_SCENES,
            ...FINAL_BATTLE_SCENES,
            ...ENDING_SCENES,
            ...QUEST_SCENES,
            ...MISC_SCENES,

            // Add any additional missing scenes that might be referenced
            // These are placeholder scenes that need to be implemented
            map_study: {
                emojis: '🗺️📍🔍',
                text: 'You carefully examine the magical map, noting the hidden paths and secret routes marked in shimmering ink. The map reveals optimal travel routes and warns of dangerous areas to avoid.',
                choices: [
                    {
                        text: '🌲 Take the hidden forest path',
                        nextScene: 'secret_forest_route',
                        effects: {
                            setFlag: { secret_paths: true },
                            experience: 20
                        }
                    },
                    {
                        text: '🌙 Follow the moonlit trail to the Moonwell',
                        nextScene: 'moonwell'
                    },
                    {
                        text: '🏰 Head to the fortress using the main roads',
                        nextScene: 'fortress_approach'
                    }
                ]
            },

            quest_begins: {
                emojis: '🚪🗺️⭐',
                text: 'You leave the Ancient Library with newfound knowledge and purpose. The prophecy weighs heavily on your mind as you step into the wider world. Your quest to restore the Crystal of Harmony has truly begun.',
                choices: [
                    {
                        text: '🌲 Head to the Enchanted Forest first',
                        nextScene: 'forest_entrance',
                        effects: {
                            experience: 15
                        }
                    },
                    {
                        text: '🏰 Visit the Crystal Temple ruins',
                        nextScene: 'temple_ruins'
                    },
                    {
                        text: '🏘️ Return to the village to prepare',
                        nextScene: 'village_preparation'
                    }
                ]
            },

            // Add other commonly referenced scenes that might be missing
            hidden_passage: {
                emojis: '🚪🔍💡',
                text: 'Behind a collapsed pillar, you discover a hidden passage leading underground. Ancient symbols glow faintly on the walls, and you hear the sound of flowing water echoing from within.',
                choices: [
                    {
                        text: '🕯️ Enter the passage with caution',
                        nextScene: 'underground_chamber'
                    },
                    {
                        text: '📚 Study the ancient symbols first',
                        nextScene: 'symbol_study',
                        effects: {
                            experience: 15
                        }
                    },
                    {
                        text: '🔙 Return to search the main temple area',
                        nextScene: 'temple_ruins'
                    }
                ]
            },

            // Royal armory continuations
            armed_and_ready: {
                emojis: '⚔️🛡️💪',
                text: 'Armed with legendary weapons, you feel the power of ancient kings flowing through you. The Dragonslayer Sword hums with holy energy, and the Shield of Light gleams with inner fire. You are ready for the ultimate battle.',
                choices: [
                    {
                        text: '🏰 March directly to the Shadow Lord\'s fortress',
                        nextScene: 'fortress_approach'
                    },
                    {
                        text: '🔍 Seek the remaining Crystal Shards first',
                        nextScene: 'shard_quest'
                    },
                    {
                        text: '👑 Report to the King before departing',
                        nextScene: 'royal_audience'
                    }
                ]
            },

            kingdom_defense: {
                emojis: '🏰🛡️📊',
                text: 'The dwarf shows you the kingdom\'s defensive measures. "Our walls are strong, but shadow magic seeps through stone. The real battle will be at the source - the Shadow Lord\'s fortress."',
                choices: [
                    {
                        text: '⚔️ Accept the legendary weapons now',
                        nextScene: 'armed_and_ready',
                        effects: {
                            addItem: '🗡️',
                            setFlag: { legendary_weapons: true }
                        }
                    },
                    {
                        text: '🏰 Help strengthen the castle defenses',
                        nextScene: 'defense_preparation',
                        effects: {
                            setFlag: { castle_defender: true },
                            experience: 20
                        }
                    }
                ]
            },

            battle_knowledge: {
                emojis: '📚⚔️🧠',
                text: 'You study ancient battle tactics used against shadow creatures. The texts speak of light-based attacks, protective formations, and the importance of maintaining hope in the face of despair.',
                choices: [
                    {
                        text: '💡 Learn light-based combat techniques',
                        nextScene: 'light_combat_training',
                        effects: {
                            setFlag: { light_warrior: true },
                            experience: 25
                        }
                    },
                    {
                        text: '🛡️ Focus on defensive strategies',
                        nextScene: 'defensive_training',
                        effects: {
                            setFlag: { master_defender: true },
                            experience: 20
                        }
                    },
                    {
                        text: '⚔️ Take the weapons and leave immediately',
                        nextScene: 'armed_and_ready'
                    }
                ]
            }
        }
    };

    // Make GAME_DATA available globally
    window.GAME_DATA = GAME_DATA;

    // Trigger game initialization if the engine is ready
    if (window.initializeGame) {
        window.initializeGame();
    }
}

// Fallback for environments where the scene files might not load
window.GAME_DATA = window.GAME_DATA || { scenes: {} };

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { GAME_DATA: window.GAME_DATA };
}
