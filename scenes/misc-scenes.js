// Miscellaneous scenes (elves, healing, investigation, etc.)
export const MISC_SCENES = {
    // Elf rescue and related scenes
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

    // Forest healing and restoration
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

    // Moonwell trials and scenes
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

    // Investigation and knowledge scenes
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

    // Library and knowledge scenes
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

    // Village and social scenes
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

    // Additional healing and recovery scenes
    magical_recovery: {
        emojis: '✨💚🔮',
        text: 'You channel your magical energy to heal your wounds, drawing power from the ancient ley lines. The restoration magic flows through you, mending both body and spirit, though it leaves you magically drained.',
        choices: [
            {
                text: '🧘‍♂️ Meditate to restore magical energy',
                nextScene: 'meditation_recovery',
                effects: {
                    health: 40,
                    magical: true,
                    experience: 20
                }
            },
            {
                text: '🌿 Gather herbs to supplement the healing',
                nextScene: 'herb_gathering',
                effects: {
                    health: 30,
                    addItem: '🌿'
                }
            },
            {
                text: '⚡ Push forward despite the magical drain',
                nextScene: 'exhausted_advance',
                effects: {
                    health: 20,
                    setFlag: { magically_drained: true }
                }
            }
        ]
    },

    meditation_recovery: {
        emojis: '🧘‍♂️🌟💫',
        text: 'Through deep meditation, you reconnect with the fundamental forces of magic. Your energy returns stronger than before, and you gain new insights into the nature of harmony magic.',
        choices: [
            {
                text: '📚 Apply your new understanding to research',
                nextScene: 'research_notes'
            },
            {
                text: '🔍 Continue your quest with renewed vigor',
                nextScene: 'shard_quest'
            }
        ]
    },

    // Royal and kingdom scenes
    royal_audience: {
        emojis: '👑🏰⚔️',
        text: 'The King receives you in his throne room, his face grave with concern. "The reports of darkness spreading are troubling," he says. "What would you have us do, brave hero? Our kingdom\'s army stands ready."',
        choices: [
            {
                text: '🛡️ Request troops for defending key locations',
                nextScene: 'defense_preparation',
                effects: {
                    setFlag: { royal_army: true },
                    experience: 25
                }
            },
            {
                text: '🗺️ Ask for maps and intelligence',
                nextScene: 'intelligence_gathering',
                effects: {
                    addItem: '🗺️',
                    setFlag: { royal_intel: true }
                }
            },
            {
                text: '🏹 Request training for the royal guard',
                nextScene: 'light_combat_training'
            }
        ]
    },

    defense_preparation: {
        emojis: '🛡️⚔️🏰',
        text: 'Working with the royal strategists, you plan the kingdom\'s defense. Troops are positioned at key locations, supplies are distributed, and evacuation routes are established. The kingdom prepares for war.',
        choices: [
            {
                text: '🎯 Focus on training elite archers',
                nextScene: 'ranged_defense',
                effects: {
                    setFlag: { archer_corps: true },
                    experience: 30
                }
            },
            {
                text: '🏰 Strengthen castle fortifications',
                nextScene: 'fortress_reinforcement',
                effects: {
                    setFlag: { reinforced_defenses: true }
                }
            },
            {
                text: '👥 Organize civilian militias',
                nextScene: 'militia_training',
                effects: {
                    setFlag: { civilian_army: true }
                }
            }
        ]
    },

    // Moonwell scenes
    moonwell_judgment: {
        emojis: '🌙⚖️💧',
        text: 'The Moonwell\'s waters swirl around you, ancient magic probing your very soul. The sacred pool weighs your deeds, your intentions, and your worthiness. The judgment will determine if you can claim the Crystal Shard.',
        choices: [
            {
                text: '💖 Let your compassionate deeds speak',
                nextScene: 'compassion_judgment',
                conditions: { hasFlag: 'helped_others' },
                effects: {
                    addItem: '💎',
                    experience: 35
                }
            },
            {
                text: '⚔️ Show your determination to save the realm',
                nextScene: 'determination_judgment',
                effects: {
                    addItem: '💎',
                    experience: 25
                }
            },
            {
                text: '🙏 Humbly accept whatever judgment comes',
                nextScene: 'humble_judgment',
                effects: {
                    setFlag: { humble_heart: true }
                }
            }
        ]
    },

    wisdom_test: {
        emojis: '📚🧠🌙',
        text: 'The Moonwell presents you with ancient riddles and mystical puzzles. Each correct answer causes the waters to glow brighter. "Wisdom illuminates the path to power," whispers an ethereal voice.',
        choices: [
            {
                text: '🔮 Answer using magical knowledge',
                nextScene: 'magical_wisdom_success',
                conditions: { hasFlag: 'visited_library' },
                effects: {
                    addItem: '💎',
                    experience: 30,
                    setFlag: { moonwell_sage: true }
                }
            },
            {
                text: '🌿 Draw upon nature\'s wisdom',
                nextScene: 'natural_wisdom_success',
                conditions: { hasFlag: 'forest_ally' },
                effects: {
                    addItem: '💎',
                    experience: 25
                }
            },
            {
                text: '💡 Use common sense and life experience',
                nextScene: 'practical_wisdom_test'
            }
        ]
    },

    power_demonstration: {
        emojis: '⚡🔮💪',
        text: 'The Moonwell challenges you to demonstrate your magical prowess. Pillars of water rise from the pool, demanding you show the extent of your power while maintaining perfect control.',
        choices: [
            {
                text: '🔥 Display offensive magic mastery',
                nextScene: 'offensive_magic_demo',
                effects: {
                    magical: true,
                    experience: 25
                }
            },
            {
                text: '💚 Show healing and protective magic',
                nextScene: 'defensive_magic_demo',
                effects: {
                    magical: true,
                    health: 20,
                    experience: 30
                }
            },
            {
                text: '⚖️ Demonstrate perfect magical balance',
                nextScene: 'balanced_magic_demo',
                effects: {
                    magical: true,
                    experience: 35,
                    addItem: '💎'
                }
            }
        ]
    },

    moonwell_guidance: {
        emojis: '🌙🗣️✨',
        text: 'The Moonwell\'s ancient consciousness speaks directly to your mind: "The path ahead is treacherous, young seeker. The Shadow Lord\'s power grows with each passing hour. Seek the aid of the forest spirits and trust in the bonds you forge."',
        choices: [
            {
                text: '🌲 Ask about the forest spirits',
                nextScene: 'spirit_guidance_info',
                effects: {
                    setFlag: { knows_spirit_location: true }
                }
            },
            {
                text: '👹 Inquire about the Shadow Lord\'s weakness',
                nextScene: 'shadow_weakness_revealed',
                effects: {
                    setFlag: { shadow_weakness_known: true },
                    experience: 25
                }
            },
            {
                text: '💎 Ask about the remaining Crystal Shards',
                nextScene: 'shard_locations_revealed'
            }
        ]
    },

    // Village and survivor scenes
    village_healer: {
        emojis: '🏥👨‍⚕️💚',
        text: 'You work alongside the village healer, tending to those wounded by shadow creatures. Your magical knowledge proves invaluable in treating curse-inflicted injuries. The grateful villagers offer what aid they can.',
        choices: [
            {
                text: '🧪 Request healing supplies for your journey',
                nextScene: 'supplies_received',
                effects: {
                    addItem: '🧪',
                    addItem: '🧪',
                    setFlag: { village_gratitude: true }
                }
            },
            {
                text: '📚 Share your knowledge of curse treatment',
                nextScene: 'medical_knowledge_shared',
                effects: {
                    experience: 25,
                    setFlag: { medical_teacher: true }
                }
            },
            {
                text: '⚔️ Organize the village\'s defenses',
                nextScene: 'village_defense_organized'
            }
        ]
    },

    survivor_rally: {
        emojis: '👥💪🛡️',
        text: 'You gather the surviving villagers and refugees, inspiring them with tales of hope and heroism. "We are not helpless!" you declare. "Together we can rebuild and resist the darkness!" Their spirits lift visibly.',
        choices: [
            {
                text: '⚔️ Train them in basic combat',
                nextScene: 'civilian_combat_training',
                effects: {
                    setFlag: { trained_militia: true },
                    experience: 20
                }
            },
            {
                text: '🏰 Lead them to safety in the castle',
                nextScene: 'evacuation_mission'
            },
            {
                text: '🔥 Inspire them to become heroes themselves',
                nextScene: 'hero_inspiration',
                effects: {
                    setFlag: { inspired_heroes: true },
                    experience: 30
                }
            }
        ]
    },

    // Beast and creature investigation
    beast_investigation: {
        emojis: '🔍🐺👁️',
        text: 'You carefully examine the strange creatures plaguing the forest. These are not natural beasts - they\'ve been corrupted by shadow magic, their eyes glowing with malevolent energy. The corruption seems recent.',
        choices: [
            {
                text: '🔮 Analyze the magical corruption',
                nextScene: 'corruption_analysis',
                effects: {
                    magical: true,
                    experience: 25,
                    setFlag: { corruption_expert: true }
                }
            },
            {
                text: '🌿 Search for the source of corruption',
                nextScene: 'corruption_source_search'
            },
            {
                text: '⚔️ Attempt to purify one of the creatures',
                nextScene: 'creature_purification',
                effects: {
                    magical: true,
                    health: -15
                }
            }
        ]
    },

    // Prayer and divine scenes
    soul_prayer: {
        emojis: '🙏✨👼',
        text: 'You kneel and offer a heartfelt prayer to the divine forces of light and justice. Your words seem to echo through the spiritual realm, and you feel a warm presence responding to your call for guidance.',
        choices: [
            {
                text: '✨ Request divine protection',
                nextScene: 'divine_protection_granted',
                effects: {
                    setFlag: { divine_protected: true },
                    health: 20,
                    experience: 25
                }
            },
            {
                text: '⚔️ Pray for strength in battle',
                nextScene: 'divine_empowerment',
                effects: {
                    setFlag: { divinely_empowered: true },
                    experience: 30
                }
            },
            {
                text: '🌟 Ask for wisdom to guide others',
                nextScene: 'divine_wisdom_granted',
                effects: {
                    setFlag: { divine_wisdom: true },
                    experience: 35
                }
            }
        ]
    },

    divine_empowerment: {
        emojis: '⚔️✨👼',
        text: 'Divine light flows through you, strengthening your resolve and empowering your abilities. You feel the blessing of higher powers, granting you the strength to face any darkness. Your weapons glow with holy energy.',
        choices: [
            {
                text: '⚔️ Channel this power into your weapon',
                nextScene: 'holy_weapon_blessed',
                effects: {
                    setFlag: { holy_weapon: true },
                    experience: 25
                }
            },
            {
                text: '🛡️ Use it to protect the innocent',
                nextScene: 'divine_protector_role',
                effects: {
                    setFlag: { divine_protector: true }
                }
            },
            {
                text: '👥 Share this blessing with others',
                nextScene: 'blessing_shared',
                effects: {
                    setFlag: { blessing_giver: true },
                    experience: 30
                }
            }
        ]
    },

    kingdom_blessing: {
        emojis: '👑🙏✨',
        text: 'The King formally bestows his royal blessing upon your quest. "May the light of our kingdom guide you through the darkness," he proclaims. The blessing carries both spiritual weight and practical benefits.',
        choices: [
            {
                text: '🏰 Accept the blessing with humility',
                nextScene: 'royal_blessing_accepted',
                effects: {
                    setFlag: { royal_blessed: true },
                    experience: 30,
                    health: 25
                }
            },
            {
                text: '👥 Request the blessing be extended to others',
                nextScene: 'group_blessing_requested',
                effects: {
                    setFlag: { group_blessed: true }
                }
            },
            {
                text: '⚔️ Ask for material support as well',
                nextScene: 'royal_equipment_granted'
            }
        ]
    },

    // Spirit and magical guidance scenes
    spirit_guidance: {
        emojis: '👻🌟🗺️',
        text: 'The forest spirits materialize around you in shimmering forms of light and shadow. They offer to guide you through the hidden paths of the realm, revealing secrets known only to the ancient guardians of nature.',
        choices: [
            {
                text: '🙏 Accept their guidance with gratitude',
                nextScene: 'spirit_path_revealed',
                effects: {
                    setFlag: { spirit_guided: true },
                    experience: 35,
                    magical: true
                }
            },
            {
                text: '💎 Ask them about the Crystal Shards',
                nextScene: 'spirit_crystal_knowledge',
                effects: {
                    experience: 30
                }
            },
            {
                text: '🤝 Offer to help restore the spirit realm',
                nextScene: 'spirit_restoration_offer',
                effects: {
                    setFlag: { spirit_helper: true }
                }
            }
        ]
    },

    spirit_wisdom: {
        emojis: '🧙‍♂️👻📚',
        text: 'The ancient spirits share their accumulated wisdom from millennia of watching over the realm. They speak of the true nature of harmony, the corruption of power, and the paths to redemption.',
        choices: [
            {
                text: '📖 Learn about the Crystal\'s original purpose',
                nextScene: 'crystal_true_purpose',
                effects: {
                    setFlag: { crystal_wisdom: true },
                    experience: 40
                }
            },
            {
                text: '💔 Ask about the Shadow Lord\'s corruption',
                nextScene: 'corruption_origins',
                effects: {
                    setFlag: { corruption_knowledge: true },
                    experience: 35
                }
            },
            {
                text: '🌟 Request guidance for the final battle',
                nextScene: 'final_battle_wisdom',
                effects: {
                    setFlag: { battle_wisdom: true },
                    experience: 45
                }
            }
        ]
    },

    spirit_pact: {
        emojis: '🤝👻✨',
        text: 'You forge a sacred pact with the forest spirits, pledging to restore balance to the realm in exchange for their eternal aid. The pact binds your souls together in a covenant of protection and renewal.',
        choices: [
            {
                text: '🌟 Embrace the full power of the pact',
                nextScene: 'spirit_empowerment',
                effects: {
                    setFlag: { spirit_bonded: true },
                    magical: true,
                    experience: 50,
                    health: 20
                }
            },
            {
                text: '⚖️ Accept the pact with careful consideration',
                nextScene: 'measured_spirit_bond',
                effects: {
                    setFlag: { spirit_ally: true },
                    experience: 35
                }
            },
            {
                text: '💎 Ask the spirits to help find the Crystal Shards',
                nextScene: 'spirit_shard_search',
                effects: {
                    setFlag: { spirit_tracking: true }
                }
            }
        ]
    },

    // Advanced magical learning scenes
    purification_learned: {
        emojis: '✨🌟🧙‍♂️',
        text: 'Through your communion with the spirits, you learn the ancient art of purification magic. This powerful ability can cleanse corruption, heal tainted lands, and restore balance to disrupted magical forces.',
        choices: [
            {
                text: '🌲 Use the purification magic on the forest',
                nextScene: 'forest_purification',
                effects: {
                    magical: true,
                    setFlag: { purification_master: true },
                    experience: 40
                }
            },
            {
                text: '💎 Apply it to cleanse a corrupted Crystal Shard',
                nextScene: 'shard_purification',
                effects: {
                    magical: true,
                    experience: 35
                }
            },
            {
                text: '📚 Study the magic to understand its limits',
                nextScene: 'purification_study',
                effects: {
                    experience: 30,
                    setFlag: { magic_scholar: true }
                }
            }
        ]
    },

    light_shield_learned: {
        emojis: '🛡️✨💡',
        text: 'You master the creation of Light Shields - protective barriers of pure radiance that can deflect shadow magic and protect allies. The shields pulse with holy energy that repels darkness.',
        choices: [
            {
                text: '🛡️ Create a permanent protective ward',
                nextScene: 'permanent_ward_created',
                effects: {
                    magical: true,
                    setFlag: { ward_master: true },
                    experience: 35
                }
            },
            {
                text: '👥 Teach others to create Light Shields',
                nextScene: 'shield_teaching',
                effects: {
                    setFlag: { magic_teacher: true },
                    experience: 40
                }
            },
            {
                text: '⚔️ Use shields in combat tactics',
                nextScene: 'shield_combat_tactics',
                effects: {
                    experience: 30
                }
            }
        ]
    },

    harmony_learned: {
        emojis: '⚖️🌈🎵',
        text: 'The deepest magical secret is revealed to you - Harmony Magic, the force that originally bound the Crystal together. This magic can unite opposing elements, heal ancient wounds, and restore balance to anything.',
        choices: [
            {
                text: '💎 Practice harmony magic on the Crystal Shards',
                nextScene: 'shard_harmony_practice',
                effects: {
                    magical: true,
                    setFlag: { harmony_adept: true },
                    experience: 50
                }
            },
            {
                text: '🌟 Use it to understand the Shadow Lord\'s pain',
                nextScene: 'shadow_lord_understanding',
                effects: {
                    setFlag: { empathic_understanding: true },
                    experience: 45
                }
            },
            {
                text: '🌍 Apply harmony magic to heal the entire realm',
                nextScene: 'realm_healing_attempt',
                effects: {
                    magical: true,
                    health: -20,
                    experience: 60
                }
            }
        ]
    },

    // Elven magic and summoning
    elf_summoning: {
        emojis: '🧝‍♀️✨🌙',
        text: 'With Lyralei\'s guidance, you learn the ancient elven art of spirit summoning. This magic can call forth the souls of fallen elven warriors and the essence of nature itself to aid in battle.',
        choices: [
            {
                text: '⚔️ Summon elven warrior spirits for the final battle',
                nextScene: 'warrior_spirits_summoned',
                effects: {
                    magical: true,
                    setFlag: { spirit_army: true },
                    experience: 40
                }
            },
            {
                text: '🌿 Call upon the essence of nature',
                nextScene: 'nature_essence_summoned',
                effects: {
                    magical: true,
                    setFlag: { nature_caller: true },
                    experience: 35
                }
            },
            {
                text: '🌙 Summon the power of the moon itself',
                nextScene: 'lunar_power_summoned',
                effects: {
                    magical: true,
                    setFlag: { lunar_blessed: true },
                    experience: 45
                }
            }
        ]
    },

    spirit_revelation: {
        emojis: '👻💡🌟',
        text: 'The forest spirits reveal a crucial truth: the Crystal Shards are not just fragments of power, but contain the memories and essence of the realm\'s greatest guardians. Each shard holds knowledge that could change everything.',
        choices: [
            {
                text: '💎 Commune with the guardian spirits in the shards',
                nextScene: 'guardian_communion',
                effects: {
                    magical: true,
                    setFlag: { guardian_knowledge: true },
                    experience: 50
                }
            },
            {
                text: '🔍 Search for the specific location of each shard',
                nextScene: 'shard_locations_revealed',
                effects: {
                    setFlag: { all_locations_known: true },
                    experience: 35
                }
            },
            {
                text: '⚖️ Learn to balance the guardian essences',
                nextScene: 'essence_balancing',
                effects: {
                    magical: true,
                    experience: 40
                }
            }
        ]
    },

    forest_army: {
        emojis: '🌲⚔️🦌',
        text: 'The forest responds to your call, and an army of magical creatures emerges: ancient treants, swift deer, fierce wolves, and ethereal spirits. They pledge to fight alongside you against the shadow forces.',
        choices: [
            {
                text: '⚔️ Lead them directly to the Shadow Lord\'s fortress',
                nextScene: 'forest_army_assault',
                effects: {
                    setFlag: { nature_army: true },
                    experience: 45
                }
            },
            {
                text: '🛡️ Use them to protect the villages',
                nextScene: 'village_protection_force',
                effects: {
                    setFlag: { village_guardians: true },
                    experience: 35
                }
            },
            {
                text: '🌟 Combine their power with your magic',
                nextScene: 'nature_magic_fusion',
                effects: {
                    magical: true,
                    setFlag: { nature_fused: true },
                    experience: 50
                }
            }
        ]
    },

    // Oak and ancient tree scenes
    oak_blessing: {
        emojis: '🌳🙏✨',
        text: 'The Great Oak, ancient beyond measure, bestows its blessing upon you. Roots of power extend through the earth, connecting you to every living thing in the realm. You feel the strength of ages flow through you.',
        choices: [
            {
                text: '🌿 Accept the mantle of Nature\'s Champion',
                nextScene: 'nature_champion_crowned',
                effects: {
                    setFlag: { nature_champion: true },
                    health: 40,
                    experience: 50,
                    magical: true
                }
            },
            {
                text: '💎 Ask the Oak to reveal the Crystal Shard\'s location',
                nextScene: 'oak_shard_revelation',
                effects: {
                    setFlag: { oak_knowledge: true },
                    experience: 35
                }
            },
            {
                text: '🤝 Forge a permanent bond with the forest',
                nextScene: 'forest_bond_permanent',
                effects: {
                    setFlag: { forest_bonded: true },
                    magical: true
                }
            }
        ]
    },

    oak_communion: {
        emojis: '🌳🔮💬',
        text: 'In deep communion with the Great Oak, you experience visions of the realm\'s history spanning thousands of years. You witness the creation of the Crystal, the rise of the Shadow Lord, and possible futures.',
        choices: [
            {
                text: '🔮 Focus on visions of the Shadow Lord\'s past',
                nextScene: 'shadow_lord_origins',
                effects: {
                    setFlag: { knows_shadow_origin: true },
                    experience: 40
                }
            },
            {
                text: '🌟 Seek visions of how to restore the Crystal',
                nextScene: 'crystal_restoration_vision',
                effects: {
                    setFlag: { restoration_method: true },
                    experience: 45
                }
            },
            {
                text: '⚖️ Look for visions of possible futures',
                nextScene: 'future_visions',
                effects: {
                    setFlag: { future_sight: true },
                    experience: 35
                }
            }
        ]
    },

    // Shard collection and study scenes
    shard_claimed: {
        emojis: '💎✋🌟',
        text: 'You successfully claim another Crystal Shard, feeling its power resonate with any others you possess. The shards seem to sing in harmony when brought together, their combined energy growing exponentially.',
        choices: [
            {
                text: '💎 Study the interaction between multiple shards',
                nextScene: 'multi_shard_study',
                effects: {
                    magical: true,
                    setFlag: { shard_expert: true },
                    experience: 40
                }
            },
            {
                text: '🔍 Search for the remaining Crystal Shards',
                nextScene: 'final_shard_hunt',
                effects: {
                    experience: 30
                }
            },
            {
                text: '🏰 Consider confronting the Shadow Lord now',
                nextScene: 'premature_confrontation_consideration',
                conditions: { hasItem: '💎' }
            }
        ]
    },

    gratitude_ritual: {
        emojis: '🙏🌟💖',
        text: 'The creatures and beings you\'ve helped throughout your journey gather to perform a gratitude ritual. Their combined appreciation creates a powerful blessing that strengthens your resolve and abilities.',
        choices: [
            {
                text: '🌟 Accept their gratitude and blessing',
                nextScene: 'gratitude_blessing_received',
                effects: {
                    setFlag: { universally_beloved: true },
                    health: 30,
                    experience: 45
                }
            },
            {
                text: '🤝 Ask them to join you in the final battle',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { united_forces: true },
                    experience: 40
                }
            },
            {
                text: '💫 Share your power with them in return',
                nextScene: 'power_sharing_ceremony',
                effects: {
                    magical: true,
                    setFlag: { power_shared: true },
                    experience: 50
                }
            }
        ]
    },

    ancient_knowledge: {
        emojis: '📚🔮🗿',
        text: 'You uncover a repository of ancient knowledge hidden in the ruins - texts, artifacts, and magical implements from the realm\'s golden age. This treasure trove contains secrets about the Crystal and the Shadow Lord.',
        choices: [
            {
                text: '📖 Study the texts about Crystal creation',
                nextScene: 'crystal_creation_knowledge',
                effects: {
                    setFlag: { crystal_expert: true },
                    experience: 40
                }
            },
            {
                text: '🗡️ Examine the ancient magical weapons',
                nextScene: 'ancient_weapons_found',
                effects: {
                    addItem: '⚔️',
                    setFlag: { ancient_weapon: true },
                    experience: 30
                }
            },
            {
                text: '🔮 Research the Shadow Lord\'s original identity',
                nextScene: 'shadow_lord_identity',
                effects: {
                    setFlag: { true_identity_known: true },
                    experience: 45
                }
            }
        ]
    },

    // Medical and healing continuation scenes
    refugee_care: {
        emojis: '🏥👨‍👩‍👧‍👦💚',
        text: 'You dedicate yourself to caring for the refugees, using your skills to heal wounds both physical and emotional. Your compassionate work helps restore hope to those who have lost everything.',
        choices: [
            {
                text: '🧪 Organize a medical supply network',
                nextScene: 'medical_network_established',
                effects: {
                    setFlag: { medical_organizer: true },
                    experience: 30
                }
            },
            {
                text: '🏠 Help refugees establish new homes',
                nextScene: 'refugee_settlement',
                effects: {
                    setFlag: { settlement_founder: true },
                    experience: 35
                }
            },
            {
                text: '⚔️ Train refugees to defend themselves',
                nextScene: 'refugee_militia_training',
                effects: {
                    setFlag: { refugee_trainer: true },
                    experience: 25
                }
            }
        ]
    },

    wound_treatment: {
        emojis: '🩹💊🔮',
        text: 'You carefully tend to your battle wounds, combining traditional healing methods with magical restoration. The process is slow but thorough, ensuring you recover fully from your injuries.',
        choices: [
            {
                text: '🔮 Use magical healing to accelerate recovery',
                nextScene: 'magical_healing_mastery',
                effects: {
                    magical: true,
                    health: 35,
                    setFlag: { healing_expert: true },
                    experience: 30
                }
            },
            {
                text: '🌿 Rely on natural remedies and herbs',
                nextScene: 'natural_healing_path',
                effects: {
                    health: 25,
                    setFlag: { herbalist: true },
                    experience: 20
                }
            },
            {
                text: '💪 Push through with sheer willpower',
                nextScene: 'willpower_recovery',
                effects: {
                    health: 15,
                    setFlag: { iron_constitution: true },
                    experience: 25
                }
            }
        ]
    },

    castle_defender: {
        emojis: '🏰🛡️⚔️',
        text: 'You volunteer to help defend the castle, using your experience and skills to strengthen its defenses. Your knowledge of shadow creatures proves invaluable in preparing for attacks.',
        choices: [
            {
                text: '🎯 Set up strategic defensive positions',
                nextScene: 'castle_defense_improved',
                effects: {
                    setFlag: { castle_strategist: true },
                    experience: 35
                }
            },
            {
                text: '👨‍🏫 Train the castle guards in anti-shadow tactics',
                nextScene: 'guard_training_program',
                effects: {
                    setFlag: { guard_trainer: true },
                    experience: 30
                }
            },
            {
                text: '🔮 Establish magical wards around the castle',
                nextScene: 'castle_ward_creation',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { ward_creator: true },
                    experience: 40
                }
            }
        ]
    }
};
