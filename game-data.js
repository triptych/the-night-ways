// Game Data for Emoji Quest: The Crystal Kingdom
const GAME_DATA = {
    scenes: {
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

        // Archery trial
        archery_trial: {
            emojis: '🏹🎯✨',
            text: 'The deer creates three magical targets that move through the air. "Hit all three with arrows of pure intent, and the forest will grant you its blessing." Your arrows glow with natural energy.',
            choices: [
                {
                    text: '🎯 Focus on precision and shoot',
                    nextScene: 'trial_success',
                    effects: {
                        addItem: '💎',
                        experience: 30,
                        setFlag: { archery_master: true },
                        magical: true
                    }
                },
                {
                    text: '🏹 Use a special trick shot technique',
                    nextScene: 'trick_shot',
                    effects: {
                        experience: 20
                    }
                }
            ]
        },

        // Elf rescue
        elf_rescue: {
            emojis: '🧝‍♀️💕🌟',
            text: 'You find the Elf trapped by dark vines. After freeing her, she introduces herself as Lyralei, Guardian of the Forest. "Thank you, brave one. The darkness is spreading, but I know where the second Crystal Shard is hidden. It lies within the Moonwell."',
            choices: [
                {
                    text: '🌙 Ask to be taken to the Moonwell',
                    nextScene: 'moonwell',
                    effects: {
                        setFlag: { elf_guide: true }
                    }
                },
                {
                    text: '🧪 Request a healing potion first',
                    nextScene: 'elf_healing',
                    effects: {
                        addItem: '🧪',
                        health: 20
                    }
                },
                {
                    text: '🤝 Offer to help restore the forest',
                    nextScene: 'forest_restoration'
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

        // Shadow battle
        shadow_battle: {
            emojis: '⚔️👹⚡',
            text: 'You charge into battle against the Shadow Beasts! Your sword gleams with righteous fury as you face creatures of pure darkness. The battle is fierce, but your courage inspires others to join the fight.',
            choices: [
                {
                    text: '🛡️ Fight defensively and protect others',
                    nextScene: 'defensive_victory',
                    effects: {
                        health: -20,
                        experience: 30,
                        setFlag: { protector: true }
                    }
                },
                {
                    text: '⚔️ Launch an all-out attack',
                    nextScene: 'offensive_victory',
                    effects: {
                        health: -30,
                        experience: 35,
                        setFlag: { berserker: true }
                    }
                },
                {
                    text: '✨ Call upon divine power',
                    nextScene: 'divine_intervention',
                    conditions: { hasItem: '🛡️' },
                    effects: {
                        magical: true,
                        experience: 40
                    }
                }
            ]
        },

        // Crystal convergence - major story point
        crystal_convergence: {
            emojis: '💎💎💎',
            text: 'You have found all three Crystal Shards! They begin to resonate with each other, creating a beautiful harmony of light and sound. But as they merge, a dark figure emerges - the Shadow Lord who shattered the original crystal!',
            conditions: {
                hasItem: '💎'
            },
            choices: [
                {
                    text: '⚔️ Challenge the Shadow Lord to combat',
                    nextScene: 'final_battle_combat',
                    conditions: { playerClass: 'knight' }
                },
                {
                    text: '🔮 Use magic to bind the Shadow Lord',
                    nextScene: 'final_battle_magic',
                    conditions: { playerClass: 'wizard' }
                },
                {
                    text: '🏹 Strike with a perfect shot',
                    nextScene: 'final_battle_precision',
                    conditions: { playerClass: 'archer' }
                },
                {
                    text: '💎 Try to reason with the Shadow Lord',
                    nextScene: 'shadow_redemption'
                }
            ]
        },

        // Final battles - different based on class
        final_battle_combat: {
            emojis: '⚔️👹💥',
            text: 'Steel clashes against shadow as you duel the Shadow Lord! Your legendary weapons blaze with holy light, each strike weakening the darkness. The fate of the realm rests on your blade!',
            choices: [
                {
                    text: '🛡️ Use the Shield of Light to reflect dark magic',
                    nextScene: 'victory_knight',
                    conditions: { hasFlag: 'legendary_weapons' },
                    effects: {
                        magical: true
                    }
                },
                {
                    text: '⚔️ Strike with all your might',
                    nextScene: 'victory_determination'
                }
            ]
        },

        final_battle_magic: {
            emojis: '🔮⚡🌟',
            text: 'You weave powerful spells, binding the Shadow Lord with chains of pure light! Your crystal orb amplifies your magic as reality itself bends to your will. The Shadow Lord struggles against your mystical bonds.',
            choices: [
                {
                    text: '📜 Recite the ancient prophecy',
                    nextScene: 'victory_wizard',
                    conditions: { hasFlag: 'knows_prophecy' },
                    effects: {
                        magical: true
                    }
                },
                {
                    text: '🔮 Channel all your magical energy',
                    nextScene: 'victory_sacrifice'
                }
            ]
        },

        final_battle_precision: {
            emojis: '🏹💫🎯',
            text: 'You draw your bow with perfect form, time seeming to slow as you aim for the Shadow Lord\'s heart. Your arrow glows with the combined power of nature and starlight. One shot to save the kingdom.',
            choices: [
                {
                    text: '🌟 Shoot with the blessing of the forest',
                    nextScene: 'victory_archer',
                    conditions: { hasFlag: 'forest_ally' },
                    effects: {
                        magical: true
                    }
                },
                {
                    text: '🎯 Trust in your skill and shoot',
                    nextScene: 'victory_skill'
                }
            ]
        },

        // Victory endings
        victory_knight: {
            emojis: '🏰👑✨',
            text: 'Your Shield of Light creates a brilliant barrier that reflects the Shadow Lord\'s darkness back upon him! As the light purifies the shadow, the Crystal of Harmony reforms, more beautiful than ever. You are hailed as the Champion of Light!',
            choices: [
                {
                    text: '👑 Accept the title of Royal Protector',
                    nextScene: 'ending_protector'
                },
                {
                    text: '🌍 Choose to wander and help others',
                    nextScene: 'ending_wanderer'
                }
            ]
        },

        victory_wizard: {
            emojis: '🔮📚🌟',
            text: 'The ancient prophecy\'s words resonate through the realm as you speak them! The Shadow Lord\'s darkness is transformed into light, and the Crystal of Harmony is reborn. Your wisdom has saved the kingdom through knowledge and understanding.',
            choices: [
                {
                    text: '📚 Become the new Keeper of Knowledge',
                    nextScene: 'ending_sage'
                },
                {
                    text: '🌟 Use your power to heal the world',
                    nextScene: 'ending_healer'
                }
            ]
        },

        victory_archer: {
            emojis: '🏹🌲🦋',
            text: 'Your arrow, blessed by the forest itself, pierces through to the Shadow Lord\'s true heart - revealing that he was once a protector corrupted by despair. Your compassion and skill have redeemed him, and the Crystal is restored through forgiveness.',
            choices: [
                {
                    text: '🌲 Return to guard the forest',
                    nextScene: 'ending_guardian'
                },
                {
                    text: '🤝 Help the redeemed Shadow Lord',
                    nextScene: 'ending_redeemer'
                }
            ]
        },

        // Multiple endings
        ending_protector: {
            emojis: '🏰👑🛡️',
            text: 'As the Royal Protector, you establish a new order of knights dedicated to maintaining harmony between all the emoji realms. The kingdom prospers under your watchful guard, and peace reigns for generations.',
            choices: []
        },

        ending_sage: {
            emojis: '📚🦉✨',
            text: 'You become the wisest sage in the realm\'s history, teaching future generations how to maintain the balance of magic and nature. Your knowledge ensures that the Crystal of Harmony will never be broken again.',
            choices: []
        },

        ending_guardian: {
            emojis: '🌲🏹🦋',
            text: 'You return to the forest as its eternal guardian, working alongside Lyralei and the nature spirits. Under your protection, the Enchanted Forest becomes a sanctuary where all creatures live in perfect harmony.',
            choices: []
        },

        // Helper scenes for flow
        trial_success: {
            emojis: '🏆💎🌟',
            text: 'Your arrows find their mark with supernatural precision! The forest spirits cheer as you\'ve proven your worth. The deer presents you with the first Crystal Shard, glowing with natural energy.',
            choices: [
                {
                    text: '🗺️ Seek the location of the other shards',
                    nextScene: 'shard_quest'
                }
            ]
        },

        shard_quest: {
            emojis: '🗺️💎🔍',
            text: 'The deer shares ancient knowledge: "The second shard lies in the Moonwell, guarded by the Forest Elves. The third rests in the Shadow Lord\'s fortress. But beware - he grows stronger as the realm weakens."',
            choices: [
                {
                    text: '🌙 Journey to the Moonwell',
                    nextScene: 'moonwell'
                },
                {
                    text: '🏰 Attempt to infiltrate the fortress',
                    nextScene: 'fortress_approach'
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
        }
    }
};

// Make GAME_DATA available globally
if (typeof window !== 'undefined') {
    window.GAME_DATA = GAME_DATA;
}

// Export for Node.js if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GAME_DATA;
}
