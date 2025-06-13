// Starting scenes for each character class
const STARTING_SCENES = {
    // Starting scene
    start: {
        emojis: '🏰✨🌟',
        text: 'Welcome to the Crystal Kingdom! The land where emojis once lived in harmony is now in danger. The great Crystal of Harmony has been shattered, and emojis are beginning to fade away. You must choose your path and restore balance to the realm!',
        choices: [
            {
                text: '🧙‍♂️ Begin as a Wizard',
                nextScene: 'wizard_start',
                effects: {
                    setPlayerClass: 'wizard',
                    addItem: '🔮',
                    experience: 10
                }
            },
            {
                text: '🏹 Begin as an Archer',
                nextScene: 'archer_start',
                effects: {
                    setPlayerClass: 'archer',
                    addItem: '🏹',
                    experience: 10
                }
            },
            {
                text: '🛡️ Begin as a Knight',
                nextScene: 'knight_start',
                effects: {
                    setPlayerClass: 'knight',
                    addItem: '🛡️',
                    experience: 10
                }
            }
        ]
    },

    // Wizard starting path
    wizard_start: {
        emojis: '🧙‍♂️🔮⚡',
        text: 'As a wise Wizard, you feel the magical energy draining from the world. Your crystal orb glows dimly, sensing the broken harmony. An old sage approaches you with urgent news.',
        choices: [
            {
                text: '🏛️ Visit the Ancient Library for knowledge',
                nextScene: 'library',
                effects: {
                    setFlag: { visited_library: true }
                }
            },
            {
                text: '🌲 Seek the Forest Elves for guidance',
                nextScene: 'forest_entrance',
                effects: {
                    setFlag: { seeking_elves: true }
                }
            },
            {
                text: '🔍 Investigate the Crystal Temple ruins',
                nextScene: 'temple_ruins'
            }
        ]
    },

    // Archer starting path
    archer_start: {
        emojis: '🏹🌿🎯',
        text: 'As a skilled Archer, you notice the forest animals fleeing in panic. The natural balance is disturbed. Your keen eyes spot strange shadows moving toward the Crystal Temple.',
        choices: [
            {
                text: '🌲 Follow the animals into the Deep Forest',
                nextScene: 'deep_forest',
                effects: {
                    setFlag: { animal_guide: true }
                }
            },
            {
                text: '👥 Rally the village guards',
                nextScene: 'village_rally'
            },
            {
                text: '🏰 Scout the Crystal Temple from afar',
                nextScene: 'temple_scout'
            }
        ]
    },

    // Knight starting path
    knight_start: {
        emojis: '🛡️⚔️🏰',
        text: 'As a noble Knight, you swore an oath to protect the realm. The Crystal of Harmony\'s destruction has weakened the kingdom\'s defenses. Dark creatures are emerging from the shadows.',
        choices: [
            {
                text: '⚔️ Confront the Shadow Beasts directly',
                nextScene: 'shadow_battle',
                effects: {
                    setFlag: { brave_charge: true }
                }
            },
            {
                text: '🏘️ Protect the frightened villagers',
                nextScene: 'village_defense'
            },
            {
                text: '🗝️ Seek the Royal Armory for ancient weapons',
                nextScene: 'royal_armory'
            }
        ]
    }
};
