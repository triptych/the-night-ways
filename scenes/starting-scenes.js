// Starting scenes for each character class
export const STARTING_SCENES = {
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
    },

    // Batch 7: Next 4 missing scenes
    hasty_escape: {
        emojis: '🏃‍♂️💨⚡',
        text: 'You make a quick escape from the collapsing area, dodging falling debris and dangerous magical discharge. Your speed saves you from serious harm, but you\'re left breathless and slightly injured.',
        choices: [
            {
                text: '🏥 Find a safe place to tend your wounds',
                nextScene: 'wound_treatment',
                effects: {
                    health: 10,
                    experience: 15
                }
            },
            {
                text: '📍 Regroup and plan your next move',
                nextScene: 'tactical_victory',
                effects: {
                    experience: 20
                }
            },
            {
                text: '🔍 Search for survivors in the area',
                nextScene: 'survivor_rally',
                effects: {
                    setFlag: { rescue_mission: true },
                    experience: 25
                }
            }
        ]
    },

    herb_gathering: {
        emojis: '🌿🍃💚',
        text: 'You search the forest for medicinal herbs, using your knowledge of nature\'s healing properties. The ancient trees provide powerful remedies, but you must be careful not to take too much.',
        choices: [
            {
                text: '🌿 Gather a variety of healing herbs',
                nextScene: 'natural_healing_path',
                effects: {
                    addItem: '🌿',
                    health: 15,
                    setFlag: { herbalist: true },
                    experience: 20
                }
            },
            {
                text: '⚗️ Look for rare magical components',
                nextScene: 'magical_component_gathering',
                effects: {
                    addItem: '🔮',
                    setFlag: { component_collector: true },
                    experience: 25
                }
            },
            {
                text: '🧪 Create healing potions on the spot',
                nextScene: 'potion_brewing_help',
                effects: {
                    addItem: '🧪',
                    health: 25,
                    experience: 30
                }
            }
        ]
    },

    hero_inspiration: {
        emojis: '🌟💪👥',
        text: 'Your heroic actions and noble words inspire others to overcome their fears and join the fight against darkness. People who had given up hope now stand ready to defend their homes.',
        choices: [
            {
                text: '⚔️ Lead them into battle immediately',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    setFlag: { inspiring_leader: true },
                    experience: 35
                }
            },
            {
                text: '🛡️ Train them for the battles ahead',
                nextScene: 'civilian_combat_training',
                effects: {
                    setFlag: { mentor: true },
                    experience: 30
                }
            },
            {
                text: '🏰 Organize them to defend their homes',
                nextScene: 'village_defense_organized',
                effects: {
                    setFlag: { community_organizer: true },
                    experience: 25
                }
            }
        ]
    },

    enhanced_magic_learned: {
        emojis: '✨🔮⚡',
        text: 'Through intense study and practice, you master enhanced magical techniques that surpass ordinary spellcasting. Your newfound power allows you to manipulate magical energies with unprecedented precision.',
        choices: [
            {
                text: '🔥 Master elemental manipulation',
                nextScene: 'offensive_magic_demo',
                effects: {
                    magical: true,
                    setFlag: { elemental_master: true },
                    experience: 40
                }
            },
            {
                text: '🛡️ Focus on protective enchantments',
                nextScene: 'permanent_ward_created',
                effects: {
                    magical: true,
                    setFlag: { ward_specialist: true },
                    experience: 35
                }
            },
            {
                text: '💎 Use magic to enhance Crystal Shard power',
                nextScene: 'shard_empowered_combat',
                effects: {
                    magical: true,
                    setFlag: { shard_enhancer: true },
                    experience: 45
                }
            }
        ]
    }
};
