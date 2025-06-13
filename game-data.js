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
        },

        // Missing scenes - Forest and Nature related
        trial_explanation: {
            emojis: '🦌📚💡',
            text: 'The deer explains the nature of the trials: "These tests measure not your strength, but your heart. Courage, wisdom, and compassion are the true keys to claiming the Crystal Shard."',
            choices: [
                {
                    text: '💪 Accept the trials with confidence',
                    nextScene: 'archery_trial',
                    effects: {
                        experience: 15
                    }
                },
                {
                    text: '🙏 Humbly request guidance',
                    nextScene: 'deer_guidance'
                },
                {
                    text: '🤝 Offer to help heal the forest first',
                    nextScene: 'forest_healing'
                }
            ]
        },

        deer_guidance: {
            emojis: '🦌🌟🗺️',
            text: 'The deer shares ancient wisdom: "The forest remembers all who enter with pure intentions. Trust in your heart, and the path will reveal itself. The Crystal Shard awaits one who truly understands harmony."',
            choices: [
                {
                    text: '✨ Begin the archery trial',
                    nextScene: 'archery_trial',
                    effects: {
                        setFlag: { deer_blessed: true },
                        experience: 20
                    }
                },
                {
                    text: '🌲 Ask about the forest\'s history',
                    nextScene: 'forest_lore'
                },
                {
                    text: '💎 Inquire about other Crystal Shards',
                    nextScene: 'crystal_location'
                }
            ]
        },

        forest_lore: {
            emojis: '🌲📖🌟',
            text: 'The deer tells you of the forest\'s ancient past: "Long ago, this realm was one of perfect balance. The Crystal of Harmony was forged here, where nature and magic first learned to dance together in eternal unity."',
            choices: [
                {
                    text: '🔮 Learn about the Crystal\'s creation',
                    nextScene: 'crystal_origins'
                },
                {
                    text: '🏹 Proceed with the archery trial',
                    nextScene: 'archery_trial'
                },
                {
                    text: '💎 Ask about the Crystal Shard\'s location',
                    nextScene: 'crystal_location'
                }
            ]
        },

        crystal_origins: {
            emojis: '💎🌟📜',
            text: 'The deer reveals the Crystal\'s origin: "It was created by the first guardians who understood that true power comes from unity, not dominance. The Shadow Lord once knew this truth, before darkness consumed his heart."',
            choices: [
                {
                    text: '💡 Gain insight into defeating the Shadow Lord',
                    nextScene: 'shadow_weakness_learned',
                    effects: {
                        setFlag: { shadow_weakness_known: true },
                        experience: 30
                    }
                },
                {
                    text: '🏹 Begin the archery trial with this knowledge',
                    nextScene: 'archery_trial'
                },
                {
                    text: '🌲 Explore more of the forest',
                    nextScene: 'deep_forest'
                }
            ]
        },

        shadow_weakness_learned: {
            emojis: '💡👹🛡️',
            text: 'You now understand the Shadow Lord\'s weakness: he fears unity and harmony above all else. This knowledge will serve you well in the final confrontation.',
            choices: [
                {
                    text: '🏹 Continue with the archery trial',
                    nextScene: 'archery_trial'
                },
                {
                    text: '🔍 Seek the Crystal Shards immediately',
                    nextScene: 'shard_quest'
                },
                {
                    text: '📚 Record this knowledge for later',
                    nextScene: 'wisdom_recorded',
                    effects: {
                        addItem: '📜',
                        experience: 15
                    }
                }
            ]
        },

        wisdom_recorded: {
            emojis: '📜✍️🧠',
            text: 'You carefully record the ancient wisdom about the Shadow Lord\'s weakness and the Crystal\'s true nature. This knowledge may prove crucial in the battles ahead.',
            choices: [
                {
                    text: '🏹 Proceed with the archery trial',
                    nextScene: 'archery_trial'
                },
                {
                    text: '🌲 Continue exploring the forest',
                    nextScene: 'deep_forest'
                }
            ]
        },

        forest_reborn: {
            emojis: '🌲🌸🦋',
            text: 'Your powerful restoration magic transforms the entire forest into a paradise beyond imagination. Ancient trees bloom with flowers of every color, and magical creatures emerge from hiding to celebrate the forest\'s rebirth.',
            choices: [
                {
                    text: '💎 Ask the grateful spirits for the Crystal Shard',
                    nextScene: 'spirit_gift',
                    effects: {
                        addItem: '💎',
                        experience: 50,
                        setFlag: { forest_saint: true }
                    }
                },
                {
                    text: '🌟 Accept the role of Forest Guardian',
                    nextScene: 'ending_guardian'
                },
                {
                    text: '⚔️ Use this power to face the Shadow Lord',
                    nextScene: 'empowered_confrontation'
                }
            ]
        },

        spirit_gift: {
            emojis: '👻💎🌟',
            text: 'The grateful forest spirits present you with a Crystal Shard that pulses with natural energy. "You have proven yourself the truest guardian of nature," they whisper. "May this shard guide you to victory."',
            choices: [
                {
                    text: '🔍 Seek the remaining Crystal Shards',
                    nextScene: 'shard_quest'
                },
                {
                    text: '🏰 Challenge the Shadow Lord immediately',
                    nextScene: 'fortress_approach'
                }
            ]
        },

        empowered_confrontation: {
            emojis: '🌟⚔️💚',
            text: 'Empowered by the forest\'s rebirth, you march toward the Shadow Lord\'s fortress. Nature itself seems to march with you - trees bend to clear your path, and flowers bloom in your footsteps.',
            choices: [
                {
                    text: '🌲 Summon the force of nature against the fortress',
                    nextScene: 'nature_assault',
                    effects: {
                        setFlag: { nature_army: true },
                        magical: true
                    }
                },
                {
                    text: '🏰 Approach the fortress with natural allies',
                    nextScene: 'fortress_approach'
                }
            ]
        },

        nature_assault: {
            emojis: '🌲⚔️🏰',
            text: 'The very forces of nature respond to your call! Vines tear at the fortress walls, ancient trees uproot themselves to become siege engines, and a army of forest creatures stands ready to fight.',
            choices: [
                {
                    text: '🌟 Lead the nature army into battle',
                    nextScene: 'nature_victory',
                    effects: {
                        experience: 60,
                        magical: true
                    }
                },
                {
                    text: '🤝 Offer the Shadow Lord a chance to surrender',
                    nextScene: 'nature_ultimatum'
                }
            ]
        },

        nature_victory: {
            emojis: '🌲🏆🌟',
            text: 'The power of nature overwhelms the Shadow Lord\'s fortress! As the walls crumble, the Shadow Lord emerges, forced to face you in direct combat with all his dark power spent.',
            choices: [
                {
                    text: '⚔️ Face him in final combat',
                    nextScene: 'final_battle_nature',
                    effects: {
                        magical: true
                    }
                },
                {
                    text: '🌿 Offer him redemption through nature\'s healing',
                    nextScene: 'nature_redemption'
                }
            ]
        },

        final_battle_nature: {
            emojis: '🌲👹⚔️',
            text: 'In the final battle, you channel the power of the reborn forest against the Shadow Lord. Life energy clashes with darkness as the fate of all realms hangs in the balance.',
            choices: [
                {
                    text: '🌟 Purify the Shadow Lord with nature\'s power',
                    nextScene: 'nature_purification',
                    effects: {
                        magical: true
                    }
                },
                {
                    text: '⚔️ Defeat him with overwhelming natural force',
                    nextScene: 'nature_triumph'
                }
            ]
        },

        nature_purification: {
            emojis: '🌿💚👹',
            text: 'Your nature magic doesn\'t destroy the Shadow Lord - it heals him! The corruption leaves his body as he remembers his true nature as a guardian of balance. The Crystal reforms through forgiveness and renewal.',
            choices: [
                {
                    text: '🤝 Work together to heal all the realms',
                    nextScene: 'ending_nature_harmony'
                }
            ]
        },

        ending_nature_harmony: {
            emojis: '🌍🌲🤝',
            text: 'You and the redeemed Shadow Lord become the Twin Guardians of Nature and Shadow, maintaining the balance between light and dark, growth and rest, in an eternal dance of harmony.',
            choices: []
        },

        nature_triumph: {
            emojis: '🌲🏆🌟',
            text: 'The overwhelming power of nature defeats the Shadow Lord, but as he falls, you realize his corruption was caused by disconnection from the natural world. You vow to prevent such isolation from ever occurring again.',
            choices: [
                {
                    text: '🌍 Establish a new order connecting all realms to nature',
                    nextScene: 'ending_nature_order'
                }
            ]
        },

        ending_nature_order: {
            emojis: '🌲🏛️🌍',
            text: 'You establish the Order of Natural Harmony, ensuring that all future guardians remain connected to the living world. Never again will isolation and disconnection breed the darkness that threatened the realm.',
            choices: []
        },

        nature_ultimatum: {
            emojis: '🌲⚖️👹',
            text: 'Surrounded by the army of nature, you call to the Shadow Lord: "The forest offers you one chance at redemption. Join us in healing the world, or face the wrath of all living things."',
            choices: [
                {
                    text: '🤝 Extend a hand of friendship',
                    nextScene: 'redemption_accepted',
                    conditions: { hasFlag: 'forest_saint' }
                },
                {
                    text: '⚔️ Prepare for battle if he refuses',
                    nextScene: 'nature_battle_ready'
                }
            ]
        },

        redemption_accepted: {
            emojis: '🤝💚🌟',
            text: 'Overwhelmed by the pure power of nature and your genuine offer of friendship, the Shadow Lord\'s darkness begins to crack. "I... I remember," he whispers. "I remember what it was like to nurture life instead of destroy it."',
            choices: [
                {
                    text: '🌱 Help him reconnect with nature',
                    nextScene: 'shadow_healed',
                    effects: {
                        magical: true
                    }
                }
            ]
        },

        shadow_healed: {
            emojis: '👹➡️🌱',
            text: 'Through your nature magic and compassion, the Shadow Lord transforms into the Grove Guardian he was meant to be. Together, you restore the Crystal of Harmony using the power of growth and renewal.',
            choices: [
                {
                    text: '🌍 Establish a new age of natural harmony',
                    nextScene: 'ending_nature_age'
                }
            ]
        },

        ending_nature_age: {
            emojis: '🌍🌲🏛️',
            text: 'You usher in the Age of Natural Harmony, where all realms are connected through the living network of nature. Magic and nature work as one, and the balance is maintained by the Grove Guardians.',
            choices: []
        },

        nature_battle_ready: {
            emojis: '🌲⚔️🔥',
            text: 'The Shadow Lord refuses your offer, choosing to fight to the bitter end. The army of nature prepares for the final battle, with you as their champion against the forces of corruption.',
            choices: [
                {
                    text: '⚔️ Lead the charge',
                    nextScene: 'final_battle_nature'
                }
            ]
        },

        // Temple and magical scenes
        magical_recovery: {
            emojis: '🧪💚✨',
            text: 'The healing potion restores your strength and clears the dark energy from your system. You feel refreshed and ready to continue your investigation of the temple ruins.',
            choices: [
                {
                    text: '💎 Now collect the crystal fragment safely',
                    nextScene: 'fragment_collected',
                    effects: {
                        addItem: '💎'
                    }
                },
                {
                    text: '🔍 Continue analyzing the dark energy',
                    nextScene: 'advanced_analysis',
                    effects: {
                        experience: 20
                    }
                },
                {
                    text: '🚪 Explore the hidden passages',
                    nextScene: 'hidden_passage'
                }
            ]
        },

        advanced_analysis: {
            emojis: '🔮📊⚡',
            text: 'With your strength restored, you perform a deeper analysis of the dark energy. You discover it\'s not random corruption - it\'s a deliberate seal designed to keep something trapped within the temple.',
            choices: [
                {
                    text: '🔓 Attempt to break the seal',
                    nextScene: 'seal_breaking',
                    effects: {
                        magical: true,
                        health: -10
                    }
                },
                {
                    text: '📚 Research what might be trapped',
                    nextScene: 'trapped_mystery'
                },
                {
                    text: '🚶‍♂️ Leave the seal intact and explore elsewhere',
                    nextScene: 'temple_ruins'
                }
            ]
        },

        dangerous_collection: {
            emojis: '💎⚡💀',
            text: 'You push through the dark energy to grab a crystal fragment. The shadow magic burns your hands and drains your life force, but you manage to secure a powerful shard pulsing with corrupted harmony magic.',
            choices: [
                {
                    text: '🔮 Try to purify the corrupted shard',
                    nextScene: 'shard_purification',
                    conditions: { playerClass: 'wizard' },
                    effects: {
                        magical: true,
                        health: -15
                    }
                },
                {
                    text: '🧪 Use a healing potion if available',
                    nextScene: 'emergency_healing',
                    conditions: { hasItem: '🧪' }
                },
                {
                    text: '💪 Endure the pain and continue exploring',
                    nextScene: 'pain_tolerance',
                    effects: {
                        setFlag: { shadow_resistant: true },
                        experience: 20
                    }
                }
            ]
        },

        shard_purification: {
            emojis: '💎✨🔮',
            text: 'Your purification magic clashes with the shadow corruption in an intense battle of wills. Slowly, the darkness is driven from the crystal shard, revealing its true harmonious light.',
            choices: [
                {
                    text: '💎 Successfully purify the shard',
                    nextScene: 'pure_shard_gained',
                    effects: {
                        addItem: '💎',
                        experience: 40,
                        setFlag: { purification_master: true }
                    }
                },
                {
                    text: '🔍 Study the purification process',
                    nextScene: 'purification_knowledge',
                    effects: {
                        experience: 25,
                        setFlag: { shadow_magic_understood: true }
                    }
                }
            ]
        },

        pure_shard_gained: {
            emojis: '💎🌟👑',
            text: 'The purified Crystal Shard gleams with perfect harmony magic. You sense this fragment is more powerful than a regular shard - it carries the essence of the original Crystal\'s pure purpose.',
            choices: [
                {
                    text: '🔍 Seek the remaining shards',
                    nextScene: 'shard_quest'
                },
                {
                    text: '🏰 Confront the Shadow Lord with this pure power',
                    nextScene: 'pure_power_confrontation'
                }
            ]
        },

        pure_power_confrontation: {
            emojis: '💎⚔️👹',
            text: 'Armed with the purified Crystal Shard, you march directly to the Shadow Lord\'s fortress. The pure harmony magic creates a barrier that repels the fortress\'s dark energy.',
            choices: [
                {
                    text: '✨ Use the pure shard to cleanse the fortress',
                    nextScene: 'fortress_purification',
                    effects: {
                        magical: true
                    }
                },
                {
                    text: '⚔️ Challenge the Shadow Lord directly',
                    nextScene: 'pure_shard_battle'
                }
            ]
        },

        research_notes: {
            emojis: '📜🖋️🔍',
            text: 'You carefully document your findings about the dark energy patterns and shadow magic corruption. These notes reveal that the Shadow Lord\'s power has specific weaknesses related to unity and harmony.',
            choices: [
                {
                    text: '📚 Study the weaknesses more deeply',
                    nextScene: 'weakness_research',
                    effects: {
                        experience: 25,
                        setFlag: { enemy_weakness_known: true }
                    }
                },
                {
                    text: '💎 Continue searching for crystal fragments',
                    nextScene: 'ruins_search'
                },
                {
                    text: '🚪 Explore other areas of the temple',
                    nextScene: 'temple_exploration'
                }
            ]
        },

        weakness_research: {
            emojis: '📖💡🛡️',
            text: 'Your research reveals crucial information: the Shadow Lord\'s power diminishes when faced with genuine cooperation and friendship. His greatest fear is being truly understood and forgiven.',
            choices: [
                {
                    text: '💞 Plan a redemption approach',
                    nextScene: 'redemption_planning',
                    effects: {
                        setFlag: { redemption_strategy: true }
                    }
                },
                {
                    text: '🤝 Seek allies who can help with this approach',
                    nextScene: 'ally_gathering'
                },
                {
                    text: '📜 Continue documenting your findings',
                    nextScene: 'comprehensive_notes'
                }
            ]
        },

        ruins_search: {
            emojis: '🔍🏛️💎',
            text: 'You systematically search through the temple ruins, uncovering hidden alcoves and secret compartments. Your thorough investigation reveals several crystal fragments scattered throughout the debris.',
            choices: [
                {
                    text: '💎 Collect all the fragments you can find',
                    nextScene: 'multiple_shards',
                    effects: {
                        addItem: '💎',
                        addItem: '💎',
                        experience: 30
                    }
                },
                {
                    text: '🔮 Use magic to detect more hidden fragments',
                    nextScene: 'magical_detection',
                    conditions: { playerClass: 'wizard' }
                },
                {
                    text: '📚 Look for ancient texts or inscriptions',
                    nextScene: 'ancient_texts'
                }
            ]
        },

        multiple_shards: {
            emojis: '💎💎💎',
            text: 'You\'ve collected multiple crystal fragments! Together, they create a harmonious resonance that makes your entire inventory glow. You now have enough power to attempt major magical workings.',
            choices: [
                {
                    text: '✨ Try to partially restore the Crystal of Harmony',
                    nextScene: 'partial_restoration',
                    effects: {
                        magical: true,
                        experience: 50
                    }
                },
                {
                    text: '🏰 Use this power to assault the Shadow Lord\'s fortress',
                    nextScene: 'shard_powered_assault'
                },
                {
                    text: '🔍 Search for the final missing pieces',
                    nextScene: 'final_shard_hunt'
                }
            ]
        },

        shard_study: {
            emojis: '🔮💎📊',
            text: 'You study the crystal fragment\'s magical properties in detail. The shard contains harmonious frequencies that could be used to counteract shadow magic, but it needs to be properly attuned.',
            choices: [
                {
                    text: '⚡ Attune the shard to your magical frequency',
                    nextScene: 'shard_attunement',
                    effects: {
                        magical: true,
                        experience: 30
                    }
                },
                {
                    text: '📚 Research attunement methods in your tome',
                    nextScene: 'attunement_research'
                },
                {
                    text: '🔍 Look for more shards to study together',
                    nextScene: 'ruins_search'
                }
            ]
        },

        shard_attunement: {
            emojis: '💎⚡🔮',
            text: 'You successfully attune the crystal shard to resonate with your magical energy. The fragment now glows with personalized power, becoming significantly more effective in your hands.',
            choices: [
                {
                    text: '✨ Test the enhanced shard\'s power',
                    nextScene: 'enhanced_abilities',
                    effects: {
                        setFlag: { enhanced_shard: true },
                        experience: 25
                    }
                },
                {
                    text: '🔍 Search for more shards to enhance',
                    nextScene: 'shard_quest'
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
        },

        mural_study: {
            emojis: '🎨📚🔍',
            text: 'The murals tell the complete story of the Crystal\'s creation. You learn that it was forged by three ancient heroes working in perfect harmony - a wizard, an archer, and a knight, just like the current prophecy!',
            choices: [
                {
                    text: '💡 Realize you\'re fulfilling the ancient prophecy',
                    nextScene: 'prophecy_understanding',
                    effects: {
                        setFlag: { prophecy_fulfilled: true },
                        experience: 35
                    }
                },
                {
                    text: '🔍 Look for more details about the original heroes',
                    nextScene: 'hero_research'
                },
                {
                    text: '⛪ Check the altar for more information',
                    nextScene: 'altar_investigation'
                }
            ]
        },

        prophecy_understanding: {
            emojis: '💡📜🌟',
            text: 'The realization hits you like lightning - you are one of the three heroes destined to restore the Crystal! This knowledge fills you with purpose and unlocks latent powers within you.',
            choices: [
                {
                    text: '✨ Embrace your prophetic destiny',
                    nextScene: 'destiny_embraced',
                    effects: {
                        experience: 40,
                        setFlag: { chosen_hero: true },
                        magical: true
                    }
                },
                {
                    text: '🤝 Seek out the other two destined heroes',
                    nextScene: 'hero_search'
                },
                {
                    text: '💎 Focus on finding the Crystal Shards first',
                    nextScene: 'empowered_shard_quest'
                }
            ]
        },

        symbol_study: {
            emojis: '📚🔤✨',
            text: 'The ancient symbols tell of binding rituals and protective wards. You decipher warnings about something powerful sealed beneath the temple - something that must not be released.',
            choices: [
                {
                    text: '⚠️ Heed the warnings and avoid the sealed area',
                    nextScene: 'cautious_exploration',
                    effects: {
                        setFlag: { wise_caution: true }
                    }
                },
                {
                    text: '🔍 Investigate what\'s sealed below',
                    nextScene: 'sealed_investigation',
                    effects: {
                        experience: 25
                    }
                },
                {
                    text: '🚪 Enter the passage despite the warnings',
                    nextScene: 'dangerous_descent'
                }
            ]
        },

        cautious_exploration: {
            emojis: '🔍👁️🛡️',
            text: 'Your cautious approach proves wise. You find safe paths through the ruins and discover hidden caches of crystal fragments without triggering any ancient traps or seals.',
            choices: [
                {
                    text: '💎 Collect the safely accessible fragments',
                    nextScene: 'safe_collection',
                    effects: {
                        addItem: '💎',
                        experience: 30
                    }
                },
                {
                    text: '🗺️ Map the safe routes for future reference',
                    nextScene: 'route_documentation'
                }
            ]
        },

        second_chance: {
            emojis: '🙏🦌💫',
            text: 'The deer is moved by your humility. "Humility is the foundation of wisdom," it says. "I will grant you another opportunity, but this time, the trial will test your heart as much as your skill."',
            choices: [
                {
                    text: '💖 Accept the trial with an open heart',
                    nextScene: 'heart_trial',
                    effects: {
                        setFlag: { humble_heart: true }
                    }
                },
                {
                    text: '🏹 Focus on perfect archery technique',
                    nextScene: 'precision_trial'
                },
                {
                    text: '🌲 Ask if you can help heal the forest instead',
                    nextScene: 'forest_healing'
                }
            ]
        },

        heart_trial: {
            emojis: '💖🏹🌟',
            text: 'This trial is different - your arrows must be guided by compassion, not just skill. You must hit targets while protecting others, showing that true marksmanship serves to defend, not destroy.',
            choices: [
                {
                    text: '🛡️ Prioritize protecting the innocent',
                    nextScene: 'protective_archery',
                    effects: {
                        experience: 35,
                        setFlag: { guardian_archer: true }
                    }
                },
                {
                    text: '⚖️ Balance offense and defense',
                    nextScene: 'balanced_archery'
                }
            ]
        },

        protective_archery: {
            emojis: '🏹🛡️💚',
            text: 'Your arrows become shields of light, intercepting attacks aimed at woodland creatures while precisely striking at shadowy threats. The deer nods approvingly at your protective instincts.',
            choices: [
                {
                    text: '💎 Receive the Crystal Shard as reward',
                    nextScene: 'guardian_shard_received',
                    effects: {
                        addItem: '💎',
                        experience: 40,
                        setFlag: { guardian_blessed: true }
                    }
                }
            ]
        },

        guardian_shard_received: {
            emojis: '💎🛡️🌟',
            text: 'The Crystal Shard you receive pulses with protective energy. This is not just any fragment - it\'s the Guardian\'s Shard, imbued with the power to shield others from harm.',
            choices: [
                {
                    text: '🔍 Seek the remaining Crystal Shards',
                    nextScene: 'shard_quest'
                },
                {
                    text: '🌲 Use its power to heal the forest',
                    nextScene: 'guardian_forest_healing'
                }
            ]
        },

        potion_request: {
            emojis: '🧪🧝‍♀️✨',
            text: 'Lyralei smiles and prepares additional potions. "A wise request," she says. "These vials contain forest essence that will protect you from corruption and enhance your natural abilities."',
            choices: [
                {
                    text: '🧪 Accept the enhanced potions',
                    nextScene: 'enhanced_potions_received',
                    effects: {
                        addItem: '🧪',
                        addItem: '🧪',
                        setFlag: { forest_potions: true }
                    }
                },
                {
                    text: '🌙 Now ask to be taken to the Moonwell',
                    nextScene: 'moonwell',
                    effects: {
                        setFlag: { elf_guide: true }
                    }
                },
                {
                    text: '🤝 Offer to help with potion brewing',
                    nextScene: 'potion_brewing_help'
                }
            ]
        },

        enhanced_potions_received: {
            emojis: '🧪✨💪',
            text: 'The enhanced potions glow with natural magic. Lyralei explains: "These will not only heal you but also strengthen your connection to nature and provide resistance to shadow magic."',
            choices: [
                {
                    text: '🧪 Drink one potion now for immediate benefits',
                    nextScene: 'immediate_enhancement',
                    effects: {
                        removeItem: '🧪',
                        health: 30,
                        setFlag: { nature_enhanced: true }
                    }
                },
                {
                    text: '💼 Save them for when you need them most',
                    nextScene: 'potions_saved',
                    effects: {
                        experience: 15
                    }
                },
                {
                    text: '🌙 Head to the Moonwell',
                    nextScene: 'moonwell'
                }
            ]
        },

        // Royal and kingdom scenes
        royal_audience: {
            emojis: '👑🏰📜',
            text: 'You stand before the King in his throne room. The monarch looks older than his years, worn down by the crisis. "Hero, the realm\'s fate rests in your hands. What do you need from your kingdom?"',
            choices: [
                {
                    text: '🏰 Request military support for your mission',
                    nextScene: 'military_support',
                    effects: {
                        setFlag: { royal_army: true }
                    }
                },
                {
                    text: '📚 Ask for access to the Royal Archives',
                    nextScene: 'royal_archives',
                    effects: {
                        experience: 25
                    }
                },
                {
                    text: '💎 Report your progress with the Crystal Shards',
                    nextScene: 'progress_report'
                },
                {
                    text: '🏃‍♂️ Respectfully decline aid and continue alone',
                    nextScene: 'solo_path',
                    effects: {
                        setFlag: { lone_hero: true }
                    }
                }
            ]
        },

        military_support: {
            emojis: '⚔️🏰👥',
            text: 'The King nods gravely. "Take my finest knights and guard units. They will follow you into darkness itself." A company of elite soldiers pledges their service to your cause.',
            choices: [
                {
                    text: '🏰 Lead the army to attack the Shadow Lord\'s fortress',
                    nextScene: 'army_assault',
                    effects: {
                        experience: 40
                    }
                },
                {
                    text: '🛡️ Use them to protect villages while you quest',
                    nextScene: 'protective_deployment'
                },
                {
                    text: '📊 Coordinate a strategic campaign',
                    nextScene: 'strategic_planning'
                }
            ]
        },

        royal_archives: {
            emojis: '📚👑🔍',
            text: 'The Royal Archives contain centuries of knowledge about the Crystal of Harmony and previous shadow incursions. You discover detailed accounts of past heroes and their strategies.',
            choices: [
                {
                    text: '📜 Study the accounts of previous heroes',
                    nextScene: 'hero_studies',
                    effects: {
                        experience: 30,
                        setFlag: { ancient_knowledge: true }
                    }
                },
                {
                    text: '🔍 Research the Shadow Lord\'s origins',
                    nextScene: 'shadow_lord_research'
                },
                {
                    text: '💎 Look for information about Crystal Shard locations',
                    nextScene: 'shard_archive_research'
                }
            ]
        },

        defense_preparation: {
            emojis: '🏰🛡️📊',
            text: 'You work with the castle engineers and guards to strengthen the kingdom\'s defenses. New ward stones are placed, guard rotations optimized, and emergency evacuation plans created.',
            choices: [
                {
                    text: '✨ Enhance the defenses with magic',
                    nextScene: 'magical_fortification',
                    conditions: { playerClass: 'wizard' },
                    effects: {
                        magical: true,
                        experience: 35
                    }
                },
                {
                    text: '🏹 Set up archer towers and kill zones',
                    nextScene: 'ranged_defenses',
                    conditions: { playerClass: 'archer' }
                },
                {
                    text: '⚔️ Train the guards in advanced combat',
                    nextScene: 'combat_training',
                    conditions: { playerClass: 'knight' }
                },
                {
                    text: '🏰 Focus on overall strategic positioning',
                    nextScene: 'strategic_defense'
                }
            ]
        },

        light_combat_training: {
            emojis: '💡⚔️✨',
            text: 'You master techniques for channeling light energy through your weapons. Your blade now gleams with holy power, and you learn to create blinding flashes and healing light during combat.',
            choices: [
                {
                    text: '⚔️ Practice advanced light sword techniques',
                    nextScene: 'light_sword_mastery',
                    effects: {
                        setFlag: { light_sword: true },
                        experience: 30
                    }
                },
                {
                    text: '🛡️ Learn defensive light magic',
                    nextScene: 'light_shield_mastery'
                },
                {
                    text: '⚔️ Take your weapons and begin your quest',
                    nextScene: 'armed_and_ready'
                }
            ]
        },

        light_sword_mastery: {
            emojis: '⚔️✨🌟',
            text: 'Your mastery of light-infused swordplay is complete! Your blade can cut through shadow magic itself, and your attacks carry the purifying power of starlight.',
            choices: [
                {
                    text: '🏰 Challenge the Shadow Lord with your new abilities',
                    nextScene: 'light_warrior_confrontation'
                },
                {
                    text: '💎 Seek the Crystal Shards to enhance your power further',
                    nextScene: 'shard_quest'
                }
            ]
        },

        defensive_training: {
            emojis: '🛡️📚⚔️',
            text: 'You study advanced defensive formations and protective techniques. You learn to create shield walls, coordinate group defenses, and protect multiple allies simultaneously.',
            choices: [
                {
                    text: '🛡️ Master the art of perfect defense',
                    nextScene: 'perfect_defense_learned',
                    effects: {
                        setFlag: { perfect_defense: true },
                        experience: 35
                    }
                },
                {
                    text: '👥 Focus on group protection techniques',
                    nextScene: 'group_protection_mastery'
                },
                {
                    text: '⚔️ Balance offense and defense',
                    nextScene: 'balanced_combat_training'
                }
            ]
        },

        // Moonwell continuation scenes
        moonwell_judgment: {
            emojis: '🌊⚖️✨',
            text: 'The Moonwell\'s waters swirl around you, testing your very essence. Visions of your past deeds, both noble and questionable, play out in the silvery depths. The well weighs your worthiness.',
            choices: [
                {
                    text: '💖 Accept judgment with humility',
                    nextScene: 'humble_judgment',
                    effects: {
                        experience: 30,
                        setFlag: { humble_soul: true }
                    }
                },
                {
                    text: '⚔️ Stand firm in your convictions',
                    nextScene: 'conviction_judgment',
                    effects: {
                        experience: 25
                    }
                },
                {
                    text: '🌙 Appeal to the well\'s mercy',
                    nextScene: 'mercy_appeal'
                }
            ]
        },

        humble_judgment: {
            emojis: '🙏💎🌟',
            text: 'Your humility touches the ancient magic of the Moonwell. "A truly noble heart acknowledges its flaws," the waters whisper. The Crystal Shard rises from the depths, glowing with pure moonlight.',
            choices: [
                {
                    text: '💎 Accept the Crystal Shard with gratitude',
                    nextScene: 'shard_received',
                    effects: {
                        addItem: '💎',
                        experience: 35,
                        setFlag: { moonwell_blessed: true }
                    }
                }
            ]
        },

        conviction_judgment: {
            emojis: '⚔️🌙💪',
            text: 'The Moonwell acknowledges your unwavering resolve. Though your methods may be direct, your dedication to saving the realm is absolute. The waters grudgingly grant you passage.',
            choices: [
                {
                    text: '💎 Claim the Crystal Shard',
                    nextScene: 'shard_received',
                    effects: {
                        addItem: '💎',
                        experience: 20
                    }
                },
                {
                    text: '🌙 Ask for the well\'s blessing',
                    nextScene: 'moonwell_guidance'
                }
            ]
        },

        wisdom_test: {
            emojis: '📚🌙🔮',
            text: 'You demonstrate your magical knowledge to the Moonwell, reciting ancient theories about harmony magic and the balance of elemental forces. The waters glow brighter with each correct principle.',
            choices: [
                {
                    text: '✨ Continue with advanced magical theory',
                    nextScene: 'advanced_wisdom_test',
                    effects: {
                        addItem: '💎',
                        experience: 35,
                        setFlag: { master_scholar: true }
                    }
                },
                {
                    text: '🌙 Ask the well to judge your knowledge',
                    nextScene: 'moonwell_judgment'
                }
            ]
        },

        power_demonstration: {
            emojis: '🔮⚡💫',
            text: 'You weave impressive displays of magical power above the Moonwell - creating illusions, manipulating elements, and channeling raw arcane energy. The waters respond with growing luminescence.',
            choices: [
                {
                    text: '💎 The Moonwell grants you the Crystal Shard',
                    nextScene: 'power_recognition',
                    effects: {
                        addItem: '💎',
                        experience: 30,
                        setFlag: { power_acknowledged: true }
                    }
                },
                {
                    text: '🌙 Ask for the well\'s guidance',
                    nextScene: 'moonwell_guidance'
                }
            ]
        },

        moonwell_guidance: {
            emojis: '🌙💬✨',
            text: 'The Moonwell speaks in ethereal whispers: "The path ahead is treacherous. The Shadow Lord\'s power grows with each passing day. Seek the unity of all three shards quickly, for time grows short."',
            choices: [
                {
                    text: '💎 Accept the Crystal Shard',
                    nextScene: 'shard_received',
                    effects: {
                        addItem: '💎',
                        experience: 25,
                        setFlag: { moonwell_warned: true }
                    }
                },
                {
                    text: '❓ Ask about the Shadow Lord\'s growing power',
                    nextScene: 'shadow_lord_warning'
                },
                {
                    text: '🗺️ Request guidance to the final shard',
                    nextScene: 'final_shard_guidance'
                }
            ]
        },

        elf_gratitude: {
            emojis: '🧝‍♀️🙏💖',
            text: 'Lyralei\'s eyes shine with tears of gratitude. "You have done more than rescue me - you have saved the entire forest. Please, accept this blessing of the ancient elven magic as a token of our eternal friendship."',
            choices: [
                {
                    text: '🌟 Accept the elven blessing',
                    nextScene: 'elven_blessing_received',
                    effects: {
                        setFlag: { elven_blessing: true },
                        experience: 30,
                        magical: true
                    }
                },
                {
                    text: '🌙 Head to the Moonwell together',
                    nextScene: 'moonwell',
                    effects: {
                        setFlag: { elf_guide: true }
                    }
                },
                {
                    text: '🤝 Offer to help restore the entire forest',
                    nextScene: 'forest_restoration'
                }
            ]
        },

        // Battle aftermath scenes
        village_healer: {
            emojis: '🏥💚🩹',
            text: 'You tend to the wounded villagers with gentle care, using your skills and any healing supplies available. Your compassion in the aftermath of battle shows your true character as a protector.',
            choices: [
                {
                    text: '💖 Continue helping until everyone is treated',
                    nextScene: 'healing_complete',
                    effects: {
                        setFlag: { village_savior: true },
                        experience: 25
                    }
                },
                {
                    text: '👥 Train villagers in basic first aid',
                    nextScene: 'first_aid_training'
                },
                {
                    text: '🔍 Investigate the shadow creatures\' origin',
                    nextScene: 'beast_investigation'
                }
            ]
        },

        survivor_rally: {
            emojis: '👥⚔️💪',
            text: 'Your inspiring leadership rallies the survivors for the battles ahead. "We\'ve proven we can stand against the darkness!" you declare. "Together, we\'ll drive it back completely!" The crowd cheers with renewed hope.',
            choices: [
                {
                    text: '🏰 Lead them in an assault on the Shadow Lord\'s fortress',
                    nextScene: 'civilian_army_assault',
                    effects: {
                        setFlag: { survivor_army: true },
                        experience: 40
                    }
                },
                {
                    text: '🛡️ Organize them into a defensive force',
                    nextScene: 'survivor_defense_force'
                },
                {
                    text: '📜 Send them to warn other villages',
                    nextScene: 'warning_network'
                }
            ]
        },

        beast_investigation: {
            emojis: '🔍👹📋',
            text: 'Examining the fallen shadow beasts, you discover they were once normal creatures corrupted by dark magic. This corruption appears to be spreading from a central source - likely the Shadow Lord\'s fortress.',
            choices: [
                {
                    text: '🔮 Use magic to trace the corruption\'s origin',
                    nextScene: 'corruption_tracking',
                    conditions: { playerClass: 'wizard' },
                    effects: {
                        magical: true,
                        experience: 30
                    }
                },
                {
                    text: '💀 Study the corruption\'s effects',
                    nextScene: 'corruption_study',
                    effects: {
                        experience: 20,
                        setFlag: { corruption_expert: true }
                    }
                },
                {
                    text: '🏰 Head directly to confront the source',
                    nextScene: 'fortress_approach'
                }
            ]
        },

        combat_recovery: {
            emojis: '🧪💚⚡',
            text: 'The healing potion works quickly, restoring your strength and easing the pain from your berserker rage. You feel refreshed and ready to continue your mission with renewed vigor.',
            choices: [
                {
                    text: '💪 Channel your renewed strength wisely',
                    nextScene: 'controlled_power',
                    effects: {
                        health: 30,
                        experience: 20,
                        setFlag: { balanced_warrior: true }
                    }
                },
                {
                    text: '⚔️ Prepare for the next battle',
                    nextScene: 'battle_preparation'
                },
                {
                    text: '🔍 Search for more enemies to face',
                    nextScene: 'seeking_battle'
                }
            ]
        },

        pain_endurance: {
            emojis: '💪⚡🔥',
            text: 'You push through the pain with iron determination, turning your suffering into strength. The villagers watch in awe as you continue fighting despite your wounds, inspired by your incredible willpower.',
            choices: [
                {
                    text: '🔥 Use your pain as fuel for greater strength',
                    nextScene: 'pain_powered_strength',
                    effects: {
                        setFlag: { pain_warrior: true },
                        experience: 30
                    }
                },
                {
                    text: '🏆 Lead by example through your endurance',
                    nextScene: 'inspirational_endurance'
                },
                {
                    text: '⚔️ Focus your pain into precise strikes',
                    nextScene: 'focused_combat'
                }
            ]
        },

        rage_focus: {
            emojis: '😤👹🎯',
            text: 'You channel your berserker rage into a focused hatred for the Shadow Lord and all he represents. Your fury becomes a weapon as sharp as any blade, driving you toward your ultimate goal.',
            choices: [
                {
                    text: '🏰 March directly to the Shadow Lord\'s fortress',
                    nextScene: 'rage_driven_assault',
                    effects: {
                        setFlag: { fury_focused: true },
                        experience: 35
                    }
                },
                {
                    text: '⚔️ Hunt down more shadow creatures',
                    nextScene: 'shadow_hunting'
                },
                {
                    text: '🧘‍♂️ Try to control your rage',
                    nextScene: 'rage_control_attempt'
                }
            ]
        },

        soul_prayer: {
            emojis: '🙏👻✨',
            text: 'You offer prayers for the souls you\'ve freed from shadow corruption. As you pray, you feel a divine connection strengthening within you, and the freed souls bless you before departing to their eternal rest.',
            choices: [
                {
                    text: '✨ Embrace your role as a soul guardian',
                    nextScene: 'soul_guardian_path',
                    effects: {
                        setFlag: { soul_shepherd: true },
                        experience: 45,
                        magical: true
                    }
                },
                {
                    text: '🕊️ Dedicate yourself to freeing more trapped souls',
                    nextScene: 'soul_liberation_mission'
                },
                {
                    text: '💎 Use this divine connection to find the Crystal Shards',
                    nextScene: 'divine_guidance'
                }
            ]
        },

        divine_empowerment: {
            emojis: '✨👼⚡',
            text: 'Divine power flows through you like liquid starlight. Your connection to higher powers grants you abilities beyond mortal ken. You feel chosen by the forces of good to restore balance to the realm.',
            choices: [
                {
                    text: '🌟 Use divine power to purify the entire kingdom',
                    nextScene: 'divine_purification',
                    effects: {
                        magical: true,
                        experience: 50,
                        setFlag: { divine_champion: true }
                    }
                },
                {
                    text: '⚔️ Confront the Shadow Lord with divine authority',
                    nextScene: 'divine_confrontation'
                },
                {
                    text: '🏰 Bless the kingdom\'s defenses',
                    nextScene: 'kingdom_blessing'
                }
            ]
        },

        kingdom_blessing: {
            emojis: '🏰✨🛡️',
            text: 'You channel divine power into the kingdom\'s defenses, creating wards of holy light around every village and town. The blessed barriers will protect the innocent while you face the Shadow Lord.',
            choices: [
                {
                    text: '👑 Report your success to the King',
                    nextScene: 'divine_audience',
                    effects: {
                        setFlag: { kingdom_protected: true },
                        experience: 40
                    }
                },
                {
                    text: '🏰 Lead a divine assault on the fortress',
                    nextScene: 'blessed_army_assault'
                },
                {
                    text: '💎 Seek the Crystal Shards with divine guidance',
                    nextScene: 'divine_shard_quest'
                }
            ]
        },

        healing_offer: {
            emojis: '🤝💚🔮',
            text: 'You extend your hand toward the Shadow Lord, magical healing energy glowing around your fingers. "Your pain doesn\'t have to define you," you say gently. "Let me help heal the wounds that darkness has left on your soul."',
            choices: [
                {
                    text: '💖 Pour healing magic into his corrupted form',
                    nextScene: 'healing_attempt',
                    effects: {
                        magical: true,
                        health: -20
                    }
                },
                {
                    text: '🌟 Offer to share your light with his darkness',
                    nextScene: 'light_sharing'
                },
                {
                    text: '📚 Teach him the healing magic you\'ve learned',
                    nextScene: 'magic_teaching'
                }
            ]
        },

        justice_demand: {
            emojis: '⚖️👹💥',
            text: 'Your voice rings with righteous authority as you demand justice. "You have caused immense suffering! The realm cries out for justice against your crimes!" The Shadow Lord\'s eyes blaze with defiant fury.',
            choices: [
                {
                    text: '⚔️ Enforce justice through combat',
                    nextScene: 'justice_battle',
                    effects: {
                        setFlag: { justice_seeker: true },
                        experience: 30
                    }
                },
                {
                    text: '⚖️ Offer a trial by combat',
                    nextScene: 'trial_by_combat'
                },
                {
                    text: '💎 Use the Crystal Shards to bind him for judgment',
                    nextScene: 'crystal_binding'
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
