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
        },

        // Missing Archer scenes
        village_rally: {
            emojis: '👥🏹🛡️',
            text: 'You gather the village guards and rally them to action. "The darkness spreads!" you warn. "We must protect our homes!" The guards look to you with determination, ready to follow your lead.',
            choices: [
                {
                    text: '🏰 Lead them to defend the Crystal Temple',
                    nextScene: 'temple_defense',
                    effects: {
                        setFlag: { village_army: true },
                        experience: 20
                    }
                },
                {
                    text: '🌲 Scout the forest for threats first',
                    nextScene: 'forest_patrol'
                },
                {
                    text: '📯 Send messengers to neighboring villages',
                    nextScene: 'alliance_building'
                }
            ]
        },

        temple_scout: {
            emojis: '🔍🏛️👁️',
            text: 'From a hidden vantage point, you observe the Crystal Temple through your keen archer\'s sight. Dark creatures swarm the ruins, but you spot something glinting in the rubble - a Crystal Shard!',
            choices: [
                {
                    text: '🏹 Take a precise shot at the lead creature',
                    nextScene: 'sniper_attack',
                    effects: {
                        experience: 25
                    }
                },
                {
                    text: '🤫 Sneak closer for a better view',
                    nextScene: 'stealth_approach'
                },
                {
                    text: '🏃‍♂️ Rush back to warn the village',
                    nextScene: 'urgent_warning'
                }
            ]
        },

        // Missing Knight scenes
        village_defense: {
            emojis: '🏘️🛡️⚔️',
            text: 'You stand as the village\'s shield against the encroaching darkness. Families huddle behind you as shadow beasts prowl the streets. Your oath compels you to protect the innocent.',
            choices: [
                {
                    text: '🛡️ Create a defensive perimeter',
                    nextScene: 'defensive_stand',
                    effects: {
                        setFlag: { village_protector: true },
                        health: -15,
                        experience: 30
                    }
                },
                {
                    text: '⚔️ Charge the shadow beasts head-on',
                    nextScene: 'heroic_charge',
                    effects: {
                        health: -25,
                        experience: 35
                    }
                },
                {
                    text: '🏰 Evacuate villagers to the castle',
                    nextScene: 'evacuation_mission'
                }
            ]
        },

        // Missing Wizard scenes
        forest_investigation: {
            emojis: '🔍🌲🧙‍♂️',
            text: 'You carefully examine the forest\'s magical aura. The trees whisper of ancient magic being corrupted. Your wizardly senses detect a powerful disturbance deeper in the woods.',
            choices: [
                {
                    text: '🔮 Cast a divination spell',
                    nextScene: 'magical_vision',
                    effects: {
                        magical: true,
                        experience: 20
                    }
                },
                {
                    text: '🌿 Commune with the forest spirits',
                    nextScene: 'spirit_communion'
                },
                {
                    text: '📚 Consult your spell tome',
                    nextScene: 'spell_research'
                }
            ]
        },

        nature_magic: {
            emojis: '🌿✨🔮',
            text: 'You weave nature magic into your senses, feeling the forest\'s pain as if it were your own. The corruption stems from shadow magic poisoning the very roots of the ancient trees.',
            choices: [
                {
                    text: '🌱 Attempt to purify the corruption',
                    nextScene: 'purification_ritual',
                    effects: {
                        magical: true,
                        health: -20,
                        setFlag: { forest_healer: true }
                    }
                },
                {
                    text: '🔍 Track the source of the shadow magic',
                    nextScene: 'shadow_tracking'
                },
                {
                    text: '🧝‍♀️ Seek the help of forest elves',
                    nextScene: 'elf_rescue'
                }
            ]
        },

        // Forest and nature scenes
        forest_healing: {
            emojis: '🌲💚✨',
            text: 'You offer your aid to heal the wounded forest. The deer nods approvingly as you channel positive energy into the withering plants. Slowly, flowers begin to bloom again.',
            choices: [
                {
                    text: '🌸 Continue the healing ritual',
                    nextScene: 'forest_restored',
                    effects: {
                        magical: true,
                        health: -10,
                        setFlag: { forest_ally: true },
                        experience: 25
                    }
                },
                {
                    text: '💎 Ask about the Crystal Shard now',
                    nextScene: 'crystal_location'
                }
            ]
        },

        crystal_location: {
            emojis: '💎🗺️🌲',
            text: 'The deer reveals the location of the first Crystal Shard. "Beneath the Great Oak, in the heart of the grove, lies what you seek. But the path is guarded by trials that test more than strength."',
            choices: [
                {
                    text: '🌳 Journey to the Great Oak',
                    nextScene: 'great_oak',
                    effects: {
                        setFlag: { knows_shard_location: true }
                    }
                },
                {
                    text: '❓ Ask about the nature of these trials',
                    nextScene: 'trial_explanation'
                },
                {
                    text: '🤝 Request the deer\'s guidance',
                    nextScene: 'deer_guidance'
                }
            ]
        },

        // Temple and ruins scenes
        dark_analysis: {
            emojis: '🔮👹⚡',
            text: 'Your magical analysis reveals the dark energy\'s true nature - it\'s not just destruction, but corruption. The Shadow Lord seeks to twist the crystal\'s power for his own ends. The magic backlashes, draining your life force.',
            choices: [
                {
                    text: '🧪 Use a health potion to recover',
                    nextScene: 'magical_recovery',
                    conditions: { hasItem: '🧪' },
                    effects: {
                        removeItem: '🧪',
                        health: 25
                    }
                },
                {
                    text: '💎 Try to collect a crystal fragment despite the danger',
                    nextScene: 'dangerous_collection',
                    effects: {
                        health: -10
                    }
                },
                {
                    text: '📚 Record your findings for later study',
                    nextScene: 'research_notes',
                    effects: {
                        addItem: '📜',
                        experience: 15
                    }
                }
            ]
        },

        fragment_collected: {
            emojis: '💎✨🎒',
            text: 'You carefully extract a crystal fragment from the ruins. It pulses with residual harmony magic, but you can feel its power is incomplete. This shard yearns to be reunited with its siblings.',
            choices: [
                {
                    text: '🔍 Search for more fragments in the ruins',
                    nextScene: 'ruins_search'
                },
                {
                    text: '🗺️ Leave to seek the other Crystal Shards',
                    nextScene: 'shard_quest'
                },
                {
                    text: '🔮 Study the fragment\'s magical properties',
                    nextScene: 'shard_study',
                    conditions: { playerClass: 'wizard' }
                }
            ]
        },

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

        // Archery trial variations
        trick_shot: {
            emojis: '🏹💫🎯',
            text: 'You attempt a ricochet shot, bouncing your arrow off a tree to hit all three targets in sequence. The shot is spectacular but not quite perfect. The deer is impressed but not fully convinced.',
            choices: [
                {
                    text: '🎯 Try the precision approach instead',
                    nextScene: 'archery_trial'
                },
                {
                    text: '🤝 Humbly ask for another chance',
                    nextScene: 'second_chance',
                    effects: {
                        setFlag: { humble_archer: true }
                    }
                },
                {
                    text: '🌲 Offer to help heal the forest first',
                    nextScene: 'forest_healing'
                }
            ]
        },

        // Elf-related scenes
        elf_healing: {
            emojis: '🧪💚🧝‍♀️',
            text: 'Lyralei brews a powerful healing potion from forest herbs and moonwater. "This will restore your strength," she says, "but more importantly, it will protect you from shadow corruption for a time."',
            choices: [
                {
                    text: '🌙 Now ask to be taken to the Moonwell',
                    nextScene: 'moonwell',
                    effects: {
                        setFlag: { elf_guide: true },
                        setFlag: { shadow_protected: true }
                    }
                },
                {
                    text: '🧪 Ask for more potions',
                    nextScene: 'potion_request'
                },
                {
                    text: '🤝 Offer to help restore the entire forest',
                    nextScene: 'forest_restoration'
                }
            ]
        },

        forest_restoration: {
            emojis: '🌲💚🌸',
            text: 'Together with Lyralei, you work to restore the Enchanted Forest. Using combined magic and nature lore, you begin to push back the shadow corruption. The work is exhausting but deeply rewarding.',
            choices: [
                {
                    text: '✨ Channel all your energy into the restoration',
                    nextScene: 'forest_reborn',
                    effects: {
                        health: -30,
                        experience: 40,
                        setFlag: { forest_champion: true },
                        magical: true
                    }
                },
                {
                    text: '⚖️ Maintain your strength for the quest ahead',
                    nextScene: 'balanced_approach',
                    effects: {
                        health: -15,
                        experience: 25,
                        setFlag: { forest_ally: true }
                    }
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
        },

        // Moonwell scenes
        moonwell_trial: {
            emojis: '🌙💧🔮',
            text: 'As you dive into the Moonwell, the sacred waters test your intentions. Visions of your past choices flash before you. The well judges whether your heart is pure enough to claim the Crystal Shard.',
            choices: [
                {
                    text: '💖 Embrace your compassionate deeds',
                    nextScene: 'moonwell_success',
                    conditions: { hasFlag: 'helped_elf' },
                    effects: {
                        addItem: '💎',
                        experience: 35,
                        magical: true
                    }
                },
                {
                    text: '⚔️ Show your determination to save the realm',
                    nextScene: 'moonwell_determination',
                    effects: {
                        addItem: '💎',
                        experience: 25
                    }
                },
                {
                    text: '🌊 Let the waters judge you honestly',
                    nextScene: 'moonwell_judgment'
                }
            ]
        },

        well_communion: {
            emojis: '🔮🌙💬',
            text: 'Your magic resonates with the ancient enchantments of the Moonwell. The waters speak to you in whispers of moonlight: "Prove your wisdom, young mage, and the shard shall be yours."',
            choices: [
                {
                    text: '📜 Recite ancient magical theory',
                    nextScene: 'wisdom_test',
                    conditions: { hasFlag: 'visited_library' },
                    effects: {
                        addItem: '💎',
                        experience: 30
                    }
                },
                {
                    text: '🔮 Demonstrate your magical prowess',
                    nextScene: 'power_demonstration',
                    effects: {
                        magical: true,
                        experience: 25
                    }
                },
                {
                    text: '🌙 Ask for the well\'s guidance',
                    nextScene: 'moonwell_guidance'
                }
            ]
        },

        elf_ritual: {
            emojis: '🧝‍♀️🌙✨',
            text: 'Lyralei performs an ancient elven ritual, her voice harmonizing with the Moonwell\'s magic. "Because you saved me, the waters will recognize your noble heart," she says as the Crystal Shard rises from the depths.',
            choices: [
                {
                    text: '💎 Accept the Crystal Shard gratefully',
                    nextScene: 'shard_received',
                    effects: {
                        addItem: '💎',
                        experience: 30,
                        setFlag: { elf_blessed: true }
                    }
                },
                {
                    text: '🙏 Thank Lyralei for her help',
                    nextScene: 'elf_gratitude'
                }
            ]
        },

        // Shadow battle outcomes
        defensive_victory: {
            emojis: '🛡️⚔️🏆',
            text: 'Your defensive stance protects many villagers from the shadow beasts. Though wounded, your heroic protection inspires others to join the fight. The beasts retreat, but greater challenges await.',
            choices: [
                {
                    text: '🏥 Tend to the wounded villagers',
                    nextScene: 'village_healer',
                    effects: {
                        setFlag: { beloved_protector: true }
                    }
                },
                {
                    text: '👥 Rally the survivors for the next battle',
                    nextScene: 'survivor_rally',
                    effects: {
                        setFlag: { inspiring_leader: true }
                    }
                },
                {
                    text: '🔍 Search the fallen beasts for clues',
                    nextScene: 'beast_investigation'
                }
            ]
        },

        offensive_victory: {
            emojis: '⚔️💥🔥',
            text: 'Your furious assault drives the shadow beasts back, but at great cost to your own health. Your berserker rage proves effective but dangerous. The villagers look at you with awe and slight fear.',
            choices: [
                {
                    text: '🧪 Use healing magic or potions',
                    nextScene: 'combat_recovery',
                    conditions: { hasItem: '🧪' }
                },
                {
                    text: '💪 Push through the pain to continue',
                    nextScene: 'pain_endurance',
                    effects: {
                        setFlag: { iron_will: true },
                        experience: 15
                    }
                },
                {
                    text: '😤 Channel your rage toward the Shadow Lord',
                    nextScene: 'rage_focus',
                    effects: {
                        setFlag: { berserker_fury: true }
                    }
                }
            ]
        },

        divine_intervention: {
            emojis: '✨👼🛡️',
            text: 'Your Shield of Light erupts with divine power, creating a barrier of pure holy energy. The shadow beasts are not just defeated but purified, returning to their original forms as lost souls who thank you before passing on.',
            choices: [
                {
                    text: '🙏 Pray for the souls you\'ve freed',
                    nextScene: 'soul_prayer',
                    effects: {
                        setFlag: { soul_guardian: true },
                        experience: 40,
                        magical: true
                    }
                },
                {
                    text: '✨ Harness this divine connection',
                    nextScene: 'divine_empowerment',
                    effects: {
                        setFlag: { divinely_blessed: true },
                        experience: 35
                    }
                },
                {
                    text: '🏰 Use this power to protect the kingdom',
                    nextScene: 'kingdom_blessing'
                }
            ]
        },

        // Alternative Shadow Lord confrontations
        shadow_redemption: {
            emojis: '👹💔💡',
            text: 'You attempt to reason with the Shadow Lord. "I sense pain in you, not just evil. What drove you to shatter the Crystal?" The Shadow Lord pauses, memories of his past flickering in his dark eyes.',
            choices: [
                {
                    text: '💞 Show compassion for his pain',
                    nextScene: 'redemption_path',
                    effects: {
                        setFlag: { compassionate_hero: true }
                    }
                },
                {
                    text: '🤝 Offer to help heal his wounds',
                    nextScene: 'healing_offer',
                    conditions: { playerClass: 'wizard' }
                },
                {
                    text: '⚖️ Demand he face justice for his crimes',
                    nextScene: 'justice_demand'
                }
            ]
        },

        // Victory scene variations
        victory_determination: {
            emojis: '⚔️💪🌟',
            text: 'Through sheer determination and skill, you overcome the Shadow Lord in single combat. Your blade strikes true, and as he falls, the Crystal of Harmony reforms from pure willpower and heroism.',
            choices: [
                {
                    text: '👑 Accept the role of Royal Champion',
                    nextScene: 'ending_champion'
                },
                {
                    text: '🌍 Vow to protect all realms from darkness',
                    nextScene: 'ending_wanderer'
                }
            ]
        },

        victory_sacrifice: {
            emojis: '🔮💫⭐',
            text: 'You pour all your magical energy into one final spell, sacrificing your own power to restore the Crystal. The Shadow Lord is defeated, but you are left magically drained. The kingdom is saved, but at great personal cost.',
            choices: [
                {
                    text: '📚 Retire to study and teach others',
                    nextScene: 'ending_teacher'
                },
                {
                    text: '🌱 Find peace in simple village life',
                    nextScene: 'ending_peaceful'
                }
            ]
        },

        victory_skill: {
            emojis: '🏹🎯💯',
            text: 'Your perfect shot finds its mark with supernatural precision. The Shadow Lord falls, struck through the heart by an arrow of pure skill and determination. Your archery skills have saved the realm.',
            choices: [
                {
                    text: '🏹 Become the kingdom\'s master archer',
                    nextScene: 'ending_master_archer'
                },
                {
                    text: '🌲 Return to guard the forest',
                    nextScene: 'ending_guardian'
                }
            ]
        },

        // Additional ending variations
        ending_wanderer: {
            emojis: '🚶‍♂️🌍⭐',
            text: 'You choose the path of the wandering hero, traveling between realms to help those in need. Your legend grows as you become a beacon of hope wherever darkness threatens to take hold.',
            choices: []
        },

        ending_healer: {
            emojis: '🌱💚🏥',
            text: 'You dedicate your life to healing the wounds left by the shadow war. Your magic restores not just the land, but the hearts of those who suffered. The kingdom flourishes under your gentle care.',
            choices: []
        },

        ending_redeemer: {
            emojis: '🤝💡🕊️',
            text: 'You work alongside the redeemed Shadow Lord to undo the damage caused by darkness. Together, you prove that even the most lost souls can find their way back to the light.',
            choices: []
        },

        ending_champion: {
            emojis: '👑⚔️🏆',
            text: 'As the Royal Champion, you establish a new code of honor that inspires generations of heroes. Your name becomes synonymous with courage, and the realm knows peace for centuries.',
            choices: []
        },

        ending_teacher: {
            emojis: '📚👨‍🏫✨',
            text: 'You found a magical academy where you teach future generations to balance power with wisdom. Your students carry on your legacy, ensuring the realm remains protected.',
            choices: []
        },

        ending_peaceful: {
            emojis: '🏡🌻😊',
            text: 'You find contentment in simple village life, your heroic deeds a cherished memory. Sometimes the greatest victory is knowing when to lay down your sword and embrace peace.',
            choices: []
        },

        ending_master_archer: {
            emojis: '🏹🎯👑',
            text: 'You become the legendary Master Archer, training elite guards and hunters. Your perfect aim and wisdom protect the kingdom from threats both seen and unseen.',
            choices: []
        },

        // Complete all missing referenced scenes
        prophecy_revealed: {
            emojis: '📜✨🔮',
            text: 'The ancient prophecy unfolds before you: "When darkness claims the Crystal\'s light, three heroes shall arise to make things right. By arrow, blade, and magic\'s might, they\'ll restore the realm\'s eternal light." The knowledge fills you with purpose.',
            choices: [
                {
                    text: '🗺️ Ask for a map to the Crystal Shards',
                    nextScene: 'map_acquired',
                    effects: {
                        addItem: '🗺️',
                        setFlag: { has_map: true }
                    }
                },
                {
                    text: '🔍 Search for more information about the shards',
                    nextScene: 'shard_research'
                },
                {
                    text: '🚪 Leave the library to begin your quest',
                    nextScene: 'quest_begins'
                }
            ]
        },

        map_acquired: {
            emojis: '🗺️📍✨',
            text: 'The owl provides you with an ancient map showing three locations: the Enchanted Forest, the Sacred Moonwell, and the Shadow Lord\'s Fortress. The map glows with magic, revealing hidden paths.',
            choices: [
                {
                    text: '🌲 Head to the Enchanted Forest first',
                    nextScene: 'forest_entrance'
                },
                {
                    text: '🌙 Journey directly to the Moonwell',
                    nextScene: 'moonwell'
                },
                {
                    text: '📚 Study the map more carefully',
                    nextScene: 'map_study'
                }
            ]
        },

        magical_communion: {
            emojis: '📚🔮💫',
            text: 'Your magic merges with the ancient tomes, and their knowledge flows directly into your mind. You learn of powerful spells and the true nature of the Crystal\'s power. The books whisper secrets of harmony magic.',
            choices: [
                {
                    text: '✨ Learn a powerful harmony spell',
                    nextScene: 'spell_learned',
                    effects: {
                        setFlag: { harmony_spell: true },
                        experience: 40,
                        magical: true
                    }
                },
                {
                    text: '🔍 Seek knowledge about the Shadow Lord',
                    nextScene: 'shadow_lore'
                },
                {
                    text: '🗺️ Ask about the Crystal Shard locations',
                    nextScene: 'map_acquired'
                }
            ]
        },

        temple_defense: {
            emojis: '🏰🏹⚔️',
            text: 'You lead the village guards to defend the Crystal Temple. Working together, you establish defensive positions and prepare for the shadow creatures\' assault. Your leadership inspires courage in all.',
            choices: [
                {
                    text: '🏹 Coordinate ranged attacks',
                    nextScene: 'ranged_defense',
                    effects: {
                        experience: 30
                    }
                },
                {
                    text: '🛡️ Focus on protecting the temple entrance',
                    nextScene: 'entrance_defense'
                },
                {
                    text: '💎 Search for crystal fragments during the battle',
                    nextScene: 'battle_search',
                    effects: {
                        addItem: '💎'
                    }
                }
            ]
        },

        forest_patrol: {
            emojis: '🌲👁️🏹',
            text: 'You lead a scouting mission through the forest. Your keen archer\'s eyes spot corrupted areas where shadow magic has taken hold. The patrol discovers several safe paths and hidden threats.',
            choices: [
                {
                    text: '🗺️ Map the safe routes for villagers',
                    nextScene: 'route_mapping',
                    effects: {
                        setFlag: { safe_routes: true },
                        experience: 20
                    }
                },
                {
                    text: '⚔️ Engage the shadow creatures directly',
                    nextScene: 'forest_combat'
                },
                {
                    text: '🧝‍♀️ Search for signs of the Forest Elves',
                    nextScene: 'elf_search'
                }
            ]
        },

        alliance_building: {
            emojis: '📯🤝🏘️',
            text: 'Your messengers return with news: three neighboring villages pledge their support! The alliance grows stronger as word of your cause spreads. United, you stand a better chance against the darkness.',
            choices: [
                {
                    text: '🏰 Coordinate a joint assault on the fortress',
                    nextScene: 'alliance_assault',
                    effects: {
                        setFlag: { village_alliance: true },
                        experience: 35
                    }
                },
                {
                    text: '🛡️ Organize a defensive network',
                    nextScene: 'defense_network'
                },
                {
                    text: '📜 Send scouts to gather intelligence',
                    nextScene: 'intelligence_gathering'
                }
            ]
        },

        sniper_attack: {
            emojis: '🏹💥👹',
            text: 'Your arrow flies true, striking the lead shadow creature and causing chaos in their ranks! The other creatures scatter, giving you an opportunity to advance toward the Crystal Shard.',
            choices: [
                {
                    text: '🏃‍♂️ Rush in to claim the Crystal Shard',
                    nextScene: 'shard_retrieval',
                    effects: {
                        addItem: '💎',
                        health: -10
                    }
                },
                {
                    text: '🏹 Continue picking off creatures from range',
                    nextScene: 'ranged_combat',
                    effects: {
                        experience: 25
                    }
                },
                {
                    text: '🤫 Use the distraction to sneak closer',
                    nextScene: 'stealth_approach'
                }
            ]
        },

        stealth_approach: {
            emojis: '🤫👤🔍',
            text: 'Moving silently through the ruins, you avoid detection by the shadow creatures. You get close enough to see the Crystal Shard clearly - it\'s guarded by a powerful Shadow Wraith.',
            choices: [
                {
                    text: '🏹 Take a carefully aimed shot at the Wraith',
                    nextScene: 'wraith_shot',
                    effects: {
                        experience: 30
                    }
                },
                {
                    text: '💨 Create a distraction and grab the shard',
                    nextScene: 'quick_grab'
                },
                {
                    text: '📚 Study the Wraith\'s weaknesses first',
                    nextScene: 'wraith_analysis'
                }
            ]
        },

        urgent_warning: {
            emojis: '🏃‍♂️⚠️🔔',
            text: 'You race back to warn the village of the massive shadow army gathering at the temple. Your warning saves countless lives as the villagers evacuate to safer areas.',
            choices: [
                {
                    text: '👥 Help organize the evacuation',
                    nextScene: 'evacuation_leader',
                    effects: {
                        setFlag: { village_savior: true },
                        experience: 25
                    }
                },
                {
                    text: '⚔️ Stay behind to slow the shadow army',
                    nextScene: 'rear_guard_action'
                },
                {
                    text: '📯 Send word to neighboring settlements',
                    nextScene: 'warning_spread'
                }
            ]
        },

        defensive_stand: {
            emojis: '🛡️🏘️⚔️',
            text: 'You create a strong defensive perimeter around the village square. Your tactical knowledge helps position the villagers effectively, turning ordinary citizens into a formidable defensive force.',
            choices: [
                {
                    text: '💪 Hold the line no matter what',
                    nextScene: 'heroic_last_stand',
                    effects: {
                        health: -20,
                        experience: 40,
                        setFlag: { legendary_defender: true }
                    }
                },
                {
                    text: '🧠 Use strategy to outmaneuver the beasts',
                    nextScene: 'tactical_victory'
                },
                {
                    text: '🏰 Fall back to the castle in stages',
                    nextScene: 'strategic_retreat'
                }
            ]
        },

        heroic_charge: {
            emojis: '⚔️💨⚡',
            text: 'You charge headlong into the shadow beasts with a battle cry that rallies every villager! Your fearless assault breaks the creatures\' formation and sends them fleeing into the night.',
            choices: [
                {
                    text: '🏆 Celebrate the victory with the villagers',
                    nextScene: 'victory_celebration',
                    effects: {
                        setFlag: { village_hero: true },
                        experience: 35
                    }
                },
                {
                    text: '🔍 Search the battlefield for clues',
                    nextScene: 'battlefield_investigation'
                },
                {
                    text: '🧪 Tend to your wounds',
                    nextScene: 'wound_treatment',
                    conditions: { hasItem: '🧪' }
                }
            ]
        },

        evacuation_mission: {
            emojis: '🏰👨‍👩‍👧‍👦🛡️',
            text: 'You successfully lead the villagers to the safety of the castle walls. Your protective escort prevents any casualties, though the journey is perilous. The castle guards welcome the refugees.',
            choices: [
                {
                    text: '👑 Report to the King about the threat',
                    nextScene: 'royal_audience'
                },
                {
                    text: '🏥 Help tend to the frightened families',
                    nextScene: 'refugee_care'
                },
                {
                    text: '⚔️ Volunteer for the castle\'s defense',
                    nextScene: 'castle_defender'
                }
            ]
        },

        magical_vision: {
            emojis: '🔮👁️✨',
            text: 'Your divination spell reveals the truth: the forest corruption stems from a cursed artifact buried beneath the Great Oak. The vision shows you the exact location and the nature of the curse.',
            choices: [
                {
                    text: '🌳 Journey immediately to the Great Oak',
                    nextScene: 'great_oak',
                    effects: {
                        setFlag: { knows_curse_location: true }
                    }
                },
                {
                    text: '📚 Research curse-breaking spells first',
                    nextScene: 'curse_research'
                },
                {
                    text: '🧝‍♀️ Seek the Forest Elves\' help with the curse',
                    nextScene: 'elf_curse_help'
                }
            ]
        },

        spirit_communion: {
            emojis: '🌿👻💬',
            text: 'The forest spirits materialize around you, their forms shimmering like moonlight. They speak of ancient times before the corruption, when harmony ruled the land. They offer to guide you to the source of the darkness.',
            choices: [
                {
                    text: '🙏 Accept their guidance respectfully',
                    nextScene: 'spirit_guidance',
                    effects: {
                        setFlag: { spirit_blessed: true },
                        experience: 30
                    }
                },
                {
                    text: '❓ Ask them about the Crystal Shards',
                    nextScene: 'spirit_wisdom'
                },
                {
                    text: '🌱 Offer to help restore their realm',
                    nextScene: 'spirit_pact'
                }
            ]
        },

        spell_research: {
            emojis: '📚🔍💡',
            text: 'Consulting your spell tome, you discover several enchantments that could help against shadow magic: a purification ritual, a light shield spell, and a harmony restoration incantation.',
            choices: [
                {
                    text: '✨ Learn the purification ritual',
                    nextScene: 'purification_learned',
                    effects: {
                        setFlag: { purification_spell: true },
                        experience: 25
                    }
                },
                {
                    text: '🛡️ Master the light shield spell',
                    nextScene: 'light_shield_learned',
                    effects: {
                        setFlag: { light_shield: true }
                    }
                },
                {
                    text: '🎵 Study the harmony restoration',
                    nextScene: 'harmony_learned',
                    effects: {
                        setFlag: { harmony_spell: true }
                    }
                }
            ]
        },

        purification_ritual: {
            emojis: '🌱✨💚',
            text: 'You channel powerful purification magic into the corrupted forest. The shadow-tainted trees begin to heal, their leaves returning to vibrant green. The effort drains you but fills your heart with purpose.',
            choices: [
                {
                    text: '🌲 Continue healing the entire grove',
                    nextScene: 'forest_restored',
                    effects: {
                        health: -15,
                        experience: 40,
                        setFlag: { forest_healer: true }
                    }
                },
                {
                    text: '💎 Focus on finding the Crystal Shard',
                    nextScene: 'shard_quest'
                },
                {
                    text: '🧝‍♀️ Call for the Forest Elves\' aid',
                    nextScene: 'elf_summoning'
                }
            ]
        },

        shadow_tracking: {
            emojis: '🔍👹🗺️',
            text: 'Following the trail of shadow magic, you discover it leads directly to the Shadow Lord\'s fortress. The corruption spreads outward from there like a poison, infecting everything it touches.',
            choices: [
                {
                    text: '🏰 Plan an assault on the fortress',
                    nextScene: 'fortress_approach'
                },
                {
                    text: '💎 Seek the Crystal Shards to counter the corruption',
                    nextScene: 'shard_quest'
                },
                {
                    text: '📚 Research the Shadow Lord\'s weaknesses',
                    nextScene: 'shadow_lore'
                }
            ]
        },

        forest_restored: {
            emojis: '🌲🌸🦋',
            text: 'Your healing magic transforms the forest into a paradise more beautiful than ever before. Flowers bloom in impossible colors, and magical creatures return from hiding. The forest spirits crown you as their champion.',
            choices: [
                {
                    text: '💎 Ask the spirits about the Crystal Shards',
                    nextScene: 'spirit_revelation',
                    effects: {
                        experience: 35,
                        setFlag: { forest_champion: true }
                    }
                },
                {
                    text: '🏹 Request their aid in your quest',
                    nextScene: 'forest_army'
                },
                {
                    text: '🌿 Accept the role of eternal forest guardian',
                    nextScene: 'ending_guardian'
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

        root_chamber: {
            emojis: '🌳💎🕯️',
            text: 'Inside the Great Oak\'s root chamber, ancient magic hums in the air. The Crystal Shard hovers above a natural altar, surrounded by protective root spirals. This is clearly a sacred place.',
            choices: [
                {
                    text: '💎 Respectfully claim the Crystal Shard',
                    nextScene: 'shard_claimed',
                    effects: {
                        addItem: '💎',
                        experience: 30
                    }
                },
                {
                    text: '🙏 Perform a ritual of gratitude first',
                    nextScene: 'gratitude_ritual'
                },
                {
                    text: '📚 Study the ancient carvings on the walls',
                    nextScene: 'ancient_knowledge'
                }
            ]
        },

        fortress_battle: {
            emojis: '🏰⚔️💥',
            text: 'You storm the Shadow Lord\'s fortress gates! Dark sentinels rush to meet you in combat as the very walls seem to pulse with malevolent energy. This is the final battle for the realm\'s soul.',
            choices: [
                {
                    text: '⚔️ Fight your way to the throne room',
                    nextScene: 'throne_room_battle',
                    effects: {
                        health: -25,
                        experience: 40
                    }
                },
                {
                    text: '🏰 Search for the final Crystal Shard',
                    nextScene: 'shard_hunt'
                },
                {
                    text: '🔥 Destroy the fortress\' dark power source',
                    nextScene: 'power_destruction'
                }
            ]
        },

        fortress_stealth: {
            emojis: '🤫🏰👤',
            text: 'Using stealth and cunning, you infiltrate the fortress through a hidden entrance. The corridors are filled with shadow magic, but your careful approach keeps you undetected.',
            choices: [
                {
                    text: '👑 Sneak directly to the Shadow Lord\'s chamber',
                    nextScene: 'stealth_confrontation'
                },
                {
                    text: '💎 Search for the final Crystal Shard',
                    nextScene: 'stealth_shard_hunt'
                },
                {
                    text: '🔓 Try to free any prisoners',
                    nextScene: 'prisoner_rescue'
                }
            ]
        },

        throne_room_battle: {
            emojis: '👑⚔️👹',
            text: 'You burst into the Shadow Lord\'s throne room, where he sits upon a throne of crystallized darkness. The final Crystal Shard hovers above his head, its light corrupted but still recognizable.',
            choices: [
                {
                    text: '⚔️ Challenge him to single combat',
                    nextScene: 'final_duel'
                },
                {
                    text: '💎 Try to grab the Crystal Shard directly',
                    nextScene: 'shard_grab'
                },
                {
                    text: '💬 Demand to know why he shattered the Crystal',
                    nextScene: 'shadow_lord_story'
                }
            ]
        },

        // Moonwell completion scenes
        moonwell_success: {
            emojis: '🌙💎🌟',
            text: 'The Moonwell recognizes your pure heart and noble intentions. The Crystal Shard rises from the depths, glowing with silver light. You have proven yourself worthy of its power.',
            choices: [
                {
                    text: '💎 Accept the Crystal Shard with gratitude',
                    nextScene: 'shard_received',
                    effects: {
                        experience: 35,
                        setFlag: { moonwell_blessed: true }
                    }
                },
                {
                    text: '🌙 Ask the Moonwell for additional guidance',
                    nextScene: 'moonwell_guidance'
                }
            ]
        },

        moonwell_determination: {
            emojis: '⚔️🌙💪',
            text: 'The Moonwell sees your unwavering determination to save the realm. Though your methods are forceful, your cause is just. The Crystal Shard acknowledges your strength of will.',
            choices: [
                {
                    text: '💎 Claim the Crystal Shard',
                    nextScene: 'shard_received',
                    effects: {
                        experience: 25
                    }
                },
                {
                    text: '🔍 Search for clues about the other shards',
                    nextScene: 'shard_quest'
                }
            ]
        },

        shard_received: {
            emojis: '💎✨🎒',
            text: 'The Crystal Shard settles into your hands, its power resonating with your very soul. You now possess one of the three fragments needed to restore the Crystal of Harmony.',
            choices: [
                {
                    text: '🔍 Seek the remaining Crystal Shards',
                    nextScene: 'shard_quest'
                },
                {
                    text: '🏰 Head directly to face the Shadow Lord',
                    nextScene: 'fortress_approach',
                    conditions: { hasItem: '💎' }
                }
            ]
        },

        // Victory and ending completion
        redemption_path: {
            emojis: '💞👹💡',
            text: 'Your compassion touches something deep within the Shadow Lord. "I... I was once like you," he whispers. "I tried to protect this realm, but I failed. The darkness consumed me." A tear falls from his dark eyes.',
            choices: [
                {
                    text: '🤝 Offer to help him find redemption',
                    nextScene: 'shadow_redeemed',
                    effects: {
                        setFlag: { redeemed_shadow_lord: true }
                    }
                },
                {
                    text: '💎 Show him the Crystal Shards\' power',
                    nextScene: 'crystal_healing'
                },
                {
                    text: '🌟 Combine your light with his darkness',
                    nextScene: 'balance_restored'
                }
            ]
        },

        shadow_redeemed: {
            emojis: '🤝💡🌟',
            text: 'The Shadow Lord removes his dark crown, revealing a face marked by centuries of sorrow. "Help me undo the damage I have caused," he pleads. Together, you work to restore the Crystal of Harmony through forgiveness and unity.',
            choices: [
                {
                    text: '🤝 Work together to heal the realm',
                    nextScene: 'ending_redeemer'
                },
                {
                    text: '👑 Help him reclaim his true identity',
                    nextScene: 'identity_restored'
                }
            ]
        },

        crystal_healing: {
            emojis: '💎✨💚',
            text: 'The Crystal Shards respond to both your light and his darkness, creating a perfect balance. The Shadow Lord gasps as the corruption leaves his body, revealing the noble protector he once was.',
            choices: [
                {
                    text: '🌟 Restore the Crystal of Harmony together',
                    nextScene: 'joint_restoration'
                },
                {
                    text: '🤝 Forge a new alliance',
                    nextScene: 'new_alliance'
                }
            ]
        },

        // Final completion scenes
        joint_restoration: {
            emojis: '💎🤝🌟',
            text: 'Working together, you and the redeemed Shadow Lord combine the three Crystal Shards. The resulting Crystal of Harmony is more powerful than ever, its light healing not just the realm but all who dwell within it.',
            choices: [
                {
                    text: '🌍 Establish a new era of peace and understanding',
                    nextScene: 'ending_peace_era'
                }
            ]
        },

        ending_peace_era: {
            emojis: '🌍🕊️✨',
            text: 'You establish a new golden age where light and shadow work in harmony. The realm flourishes under the protection of both heroes, proving that even the greatest enemies can become the truest allies.',
            choices: []
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
