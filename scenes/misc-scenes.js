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
    }
};
