// Location-based scenes (Library, Forest, Temple, etc.)
export const LOCATION_SCENES = {
    // Library scene
    library: {
        emojis: '📚✨📜',
        text: 'The Ancient Library is filled with floating books and glowing scrolls. The Keeper of Knowledge, an ancient owl 🦉, hoots sadly. "The prophecy speaks of three Crystal Shards hidden across the realm. Only by reuniting them can harmony be restored."',
        choices: [
            {
                text: '📜 Study the Crystal Prophecy',
                nextScene: 'prophecy_revealed',
                effects: {
                    addItem: '📜',
                    experience: 20,
                    setFlag: { knows_prophecy: true }
                }
            },
            {
                text: '🗺️ Ask for a map to the Crystal Shards',
                nextScene: 'map_acquired',
                effects: {
                    addItem: '🗺️',
                    setFlag: { has_map: true }
                }
            },
            {
                text: '🔮 Use your magic to commune with the books',
                nextScene: 'magical_communion',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    experience: 30
                }
            }
        ]
    },

    // Forest entrance
    forest_entrance: {
        emojis: '🌲🧝‍♀️✨',
        text: 'The Enchanted Forest seems darker than usual. Glowing flowers are losing their light. You hear the melodic voice of an Elf calling for help from deeper within the woods.',
        choices: [
            {
                text: '🏃‍♂️ Rush to help the Elf',
                nextScene: 'elf_rescue',
                effects: {
                    health: -10,
                    setFlag: { helped_elf: true }
                }
            },
            {
                text: '🔍 Carefully investigate the surroundings',
                nextScene: 'forest_investigation'
            },
            {
                text: '🌿 Use forest magic to sense the danger',
                nextScene: 'nature_magic',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true
                }
            }
        ]
    },

    // Deep forest
    deep_forest: {
        emojis: '🌲🦌🍄',
        text: 'Following the fleeing animals, you discover a hidden grove where a majestic deer 🦌 stands guard over a glowing mushroom circle. The deer speaks: "Guardian, the first Crystal Shard lies beneath these ancient roots, but it is protected by trials."',
        choices: [
            {
                text: '🏹 Prove your worth through an archery trial',
                nextScene: 'archery_trial',
                conditions: { playerClass: 'archer' },
                effects: {
                    experience: 25
                }
            },
            {
                text: '🤝 Offer to help heal the forest',
                nextScene: 'forest_healing',
                effects: {
                    setFlag: { forest_ally: true }
                }
            },
            {
                text: '💎 Ask about the Crystal Shard directly',
                nextScene: 'crystal_location'
            }
        ]
    },

    // Temple ruins
    temple_ruins: {
        emojis: '🏛️💔⚡',
        text: 'The Crystal Temple lies in ruins, with broken pillars and fading magical circles. At the center, you see the shattered remains of the Crystal of Harmony. Dark energy swirls around the fragments.',
        choices: [
            {
                text: '🔮 Use magic to analyze the dark energy',
                nextScene: 'dark_analysis',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    health: -15
                }
            },
            {
                text: '💎 Carefully collect a crystal fragment',
                nextScene: 'fragment_collected',
                effects: {
                    addItem: '💎',
                    experience: 15
                }
            },
            {
                text: '🚪 Look for hidden passages in the ruins',
                nextScene: 'hidden_passage'
            }
        ]
    },

    // Royal armory
    royal_armory: {
        emojis: '⚔️🛡️👑',
        text: 'The Royal Armory contains ancient weapons blessed by the old kings. The armorer, a wise dwarf 🧔, recognizes your noble quest. "Take the Dragonslayer Sword and the Shield of Light. You will need them for what lies ahead."',
        choices: [
            {
                text: '⚔️ Accept the legendary weapons',
                nextScene: 'armed_and_ready',
                effects: {
                    addItem: '🗡️',
                    removeItem: '🛡️',
                    addItem: '🛡️',
                    experience: 25,
                    setFlag: { legendary_weapons: true }
                }
            },
            {
                text: '🏰 Ask about the kingdom\'s defenses',
                nextScene: 'kingdom_defense'
            },
            {
                text: '📚 Study the ancient battle tactics',
                nextScene: 'battle_knowledge'
            }
        ]
    },

    // Moonwell
    moonwell: {
        emojis: '🌙💧✨',
        text: 'The Moonwell is a sacred pool that reflects not the sky, but the heart\'s true desires. Lyralei chants an ancient song, and the water begins to glow. "The Crystal Shard rests at the bottom, but the well will test your purity of purpose."',
        choices: [
            {
                text: '💧 Dive into the sacred waters',
                nextScene: 'moonwell_trial',
                effects: {
                    setFlag: { moonwell_trial: true }
                }
            },
            {
                text: '🔮 Use magic to communicate with the well',
                nextScene: 'well_communion',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true
                }
            },
            {
                text: '🧝‍♀️ Ask Lyralei to perform the ritual',
                nextScene: 'elf_ritual',
                conditions: { hasFlag: 'helped_elf' }
            }
        ]
    },

    fortress_approach: {
        emojis: '🏰👹⚡',
        text: 'The Shadow Lord\'s fortress looms before you, wreathed in dark clouds and crackling with evil energy. You can feel the third Crystal Shard\'s power calling from within, but the path is perilous.',
        choices: [
            {
                text: '🗡️ Storm the gates directly',
                nextScene: 'fortress_battle'
            },
            {
                text: '🤫 Sneak in through a side entrance',
                nextScene: 'fortress_stealth'
            },
            {
                text: '💎 Use the crystal shards to weaken the fortress',
                nextScene: 'crystal_convergence',
                conditions: { hasItem: '💎' }
            }
        ]
    },

    great_oak: {
        emojis: '🌳💎✨',
        text: 'The Great Oak towers majestically before you, its ancient trunk wide enough to house a village. At its base, you see the entrance to a root chamber where a Crystal Shard pulses with gentle light.',
        choices: [
            {
                text: '🚪 Enter the root chamber carefully',
                nextScene: 'root_chamber',
                effects: {
                    experience: 20
                }
            },
            {
                text: '🙏 Ask the Oak\'s permission first',
                nextScene: 'oak_blessing',
                effects: {
                    setFlag: { oak_blessed: true }
                }
            },
            {
                text: '🔮 Use magic to commune with the tree',
                nextScene: 'oak_communion',
                conditions: { playerClass: 'wizard' }
            }
        ]
    },

    underground_chamber: {
        emojis: '🕯️🏛️💧',
        text: 'The hidden passage leads to an ancient underground chamber. Water drips from crystal formations, and you see murals depicting the original creation of the Crystal of Harmony. An altar stands at the center.',
        choices: [
            {
                text: '🔍 Examine the murals for clues',
                nextScene: 'mural_study',
                effects: {
                    experience: 20
                }
            },
            {
                text: '⛪ Investigate the central altar',
                nextScene: 'altar_investigation'
            },
            {
                text: '💧 Study the crystal formations',
                nextScene: 'crystal_formation_study'
            }
        ]
    }
};
