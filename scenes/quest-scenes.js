// Quest progression and trial scenes
export const QUEST_SCENES = {
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

    // Crystal and shard related scenes
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

    // Shard collection scenes
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

    // Research and knowledge gathering scenes
    dangerous_collection: {
        emojis: '⚠️💎🔥',
        text: 'Collecting this crystal fragment proves more hazardous than expected. The shard is surrounded by unstable magical energy that lashes out as you approach. Shadow magic has corrupted the area around it.',
        choices: [
            {
                text: '🛡️ Use protective magic to safely extract it',
                nextScene: 'protected_extraction',
                effects: {
                    magical: true,
                    health: -10,
                    addItem: '💎',
                    experience: 30
                }
            },
            {
                text: '⚡ Risk direct contact despite the danger',
                nextScene: 'risky_extraction',
                effects: {
                    health: -25,
                    addItem: '💎',
                    experience: 20,
                    setFlag: { shadow_touched: true }
                }
            },
            {
                text: '🔍 Study the corruption before proceeding',
                nextScene: 'corruption_study',
                effects: {
                    experience: 25,
                    magical: true
                }
            }
        ]
    },

    research_notes: {
        emojis: '📚✍️🔍',
        text: 'You carefully document your discoveries about the Crystal Shards and shadow corruption. Your notes reveal patterns - the corruption spreads from specific nexus points, and the shards seem to resonate with each other.',
        choices: [
            {
                text: '🗺️ Use this knowledge to locate more shards',
                nextScene: 'calculated_search',
                effects: {
                    setFlag: { research_completed: true },
                    experience: 35
                }
            },
            {
                text: '📜 Share your findings with allies',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { shared_knowledge: true },
                    experience: 25
                }
            },
            {
                text: '🔮 Apply your research to enhance magic',
                nextScene: 'enhanced_magic_learned',
                effects: {
                    magical: true,
                    setFlag: { enhanced_caster: true },
                    experience: 40
                }
            }
        ]
    },

    ruins_search: {
        emojis: '🏛️🔍💎',
        text: 'You methodically search through the ancient ruins, using your knowledge of magical resonance to locate hidden fragments. Your careful exploration reveals secret chambers and concealed Crystal Shards.',
        choices: [
            {
                text: '💎 Collect the hidden Crystal Shard',
                nextScene: 'shard_claimed',
                effects: {
                    addItem: '💎',
                    experience: 30
                }
            },
            {
                text: '🗿 Examine the ancient inscriptions',
                nextScene: 'symbol_study',
                effects: {
                    experience: 25,
                    setFlag: { ancient_knowledge: true }
                }
            },
            {
                text: '🔍 Search for trap mechanisms',
                nextScene: 'trap_detection',
                effects: {
                    experience: 20
                }
            }
        ]
    },

    shard_study: {
        emojis: '🔮💎📊',
        text: 'Your magical analysis reveals fascinating properties of the Crystal Shard. It contains layered enchantments dating back millennia, and its resonance frequency matches ancient harmony magic. The knowledge enhances your understanding of magical theory.',
        choices: [
            {
                text: '✨ Learn to attune with the shard\'s power',
                nextScene: 'shard_attunement',
                effects: {
                    magical: true,
                    setFlag: { shard_attuned: true },
                    experience: 40
                }
            },
            {
                text: '📚 Record your findings for future research',
                nextScene: 'research_notes'
            },
            {
                text: '🔍 Use the shard to locate its siblings',
                nextScene: 'shard_resonance_tracking',
                effects: {
                    setFlag: { can_track_shards: true },
                    experience: 30
                }
            }
        ]
    },

    symbol_study: {
        emojis: '🗿📜🔍',
        text: 'The ancient symbols tell a story of the realm\'s creation and the forging of the Crystal of Harmony. You learn that the Shadow Lord was once a guardian like yourself, but power corrupted him. The inscriptions reveal his true name and his weakness.',
        choices: [
            {
                text: '💡 Memorize the Shadow Lord\'s true name',
                nextScene: 'true_name_learned',
                effects: {
                    setFlag: { knows_true_name: true },
                    experience: 35
                }
            },
            {
                text: '🛡️ Learn the ancient protection rituals',
                nextScene: 'protection_ritual_learned',
                effects: {
                    setFlag: { ancient_protection: true },
                    experience: 30
                }
            },
            {
                text: '📚 Copy all the inscriptions for study',
                nextScene: 'ancient_knowledge',
                effects: {
                    addItem: '📜',
                    experience: 25
                }
            }
        ]
    },

    // Forest and nature scenes
    forest_reborn: {
        emojis: '🌲🌺🦋',
        text: 'Your combined magical energies transform the Enchanted Forest into something beyond its original glory. Ancient trees grow even mightier, magical creatures emerge from legend, and the very air shimmers with renewed life force.',
        choices: [
            {
                text: '👑 Accept the title of Forest Champion',
                nextScene: 'forest_champion_crowned',
                effects: {
                    setFlag: { forest_champion: true },
                    experience: 50,
                    health: 30
                }
            },
            {
                text: '🌟 Channel this power for the final battle',
                nextScene: 'nature_magic_empowered',
                effects: {
                    setFlag: { nature_empowered: true },
                    magical: true,
                    experience: 40
                }
            },
            {
                text: '🕊️ Choose to remain as the forest\'s eternal guardian',
                nextScene: 'ending_guardian'
            }
        ]
    },

    // Training and combat preparation scenes
    light_combat_training: {
        emojis: '⚔️🏹🛡️',
        text: 'You train the royal guards in advanced combat techniques, sharing your knowledge of fighting shadow creatures. The training focuses on light-based weapons and protective formations.',
        choices: [
            {
                text: '🏹 Specialize in ranged combat tactics',
                nextScene: 'ranged_defense',
                effects: {
                    setFlag: { trained_archers: true },
                    experience: 30
                }
            },
            {
                text: '🛡️ Focus on defensive formations',
                nextScene: 'defensive_training',
                effects: {
                    setFlag: { trained_defenders: true },
                    experience: 25
                }
            },
            {
                text: '⚖️ Provide balanced combat instruction',
                nextScene: 'balanced_training',
                effects: {
                    setFlag: { well_trained_army: true },
                    experience: 35
                }
            }
        ]
    },

    defensive_training: {
        emojis: '🛡️⚔️👥',
        text: 'You organize intensive defensive training, teaching shield walls, protective magic, and coordinated resistance tactics. The guards learn to work as a unified force against shadow creatures.',
        choices: [
            {
                text: '🏰 Prepare for castle defense',
                nextScene: 'castle_fortification',
                effects: {
                    setFlag: { fortress_ready: true }
                }
            },
            {
                text: '👥 Train civilian volunteers as well',
                nextScene: 'militia_expansion',
                effects: {
                    setFlag: { civilian_defenders: true },
                    experience: 20
                }
            },
            {
                text: '⚔️ Focus on counter-attack strategies',
                nextScene: 'offensive_training'
            }
        ]
    },

    // Quest beginning and progression scenes
    quest_begins: {
        emojis: '🚀⚔️🌟',
        text: 'Armed with knowledge from the ancient library, you step out into the world with clear purpose. The quest to restore the Crystal of Harmony begins in earnest. Three paths lie before you - each leading to a different Crystal Shard.',
        choices: [
            {
                text: '🌲 Head to the Enchanted Forest first',
                nextScene: 'forest_entrance',
                effects: {
                    setFlag: { quest_begun: true }
                }
            },
            {
                text: '🌙 Journey directly to the Sacred Moonwell',
                nextScene: 'moonwell',
                effects: {
                    setFlag: { quest_begun: true }
                }
            },
            {
                text: '🗺️ Study your map to plan the optimal route',
                nextScene: 'route_planning',
                effects: {
                    experience: 15
                }
            }
        ]
    },

    map_study: {
        emojis: '🗺️🔍📍',
        text: 'Studying the magical map reveals hidden details: secret passages, ancient wards, and the optimal timing for approaching each location. The map also shows areas of heavy shadow corruption to avoid.',
        choices: [
            {
                text: '🛤️ Plan the safest route to all shards',
                nextScene: 'route_mapping',
                effects: {
                    setFlag: { optimal_route: true },
                    experience: 25
                }
            },
            {
                text: '⚡ Identify the quickest path to power',
                nextScene: 'speed_route',
                effects: {
                    setFlag: { hasty_approach: true }
                }
            },
            {
                text: '🕵️ Look for secret locations not marked',
                nextScene: 'hidden_location_search',
                effects: {
                    experience: 30
                }
            }
        ]
    },

    spell_learned: {
        emojis: '✨📚🧙‍♂️',
        text: 'The harmony spell flows into your consciousness - a powerful magic that can restore balance, heal corruption, and unite opposing forces. This ancient magic will be crucial in the final confrontation with the Shadow Lord.',
        choices: [
            {
                text: '🌟 Practice the spell to master it',
                nextScene: 'spell_mastery',
                effects: {
                    magical: true,
                    setFlag: { harmony_master: true },
                    experience: 45
                }
            },
            {
                text: '📚 Research complementary spells',
                nextScene: 'spell_research',
                effects: {
                    experience: 30
                }
            },
            {
                text: '🔍 Use the spell to seek the Crystal Shards',
                nextScene: 'magical_shard_search',
                effects: {
                    magical: true,
                    setFlag: { magical_tracking: true }
                }
            }
        ]
    },

    shadow_lore: {
        emojis: '👹📖🔮',
        text: 'The dark knowledge reveals the Shadow Lord\'s history: once a noble guardian corrupted by his desire to "protect" the realm through control. His weakness lies in his forgotten connection to the light he once served.',
        choices: [
            {
                text: '💡 Learn to exploit this weakness',
                nextScene: 'weakness_exploitation',
                effects: {
                    setFlag: { shadow_weakness_known: true },
                    experience: 35
                }
            },
            {
                text: '💔 Understand his tragic fall from grace',
                nextScene: 'shadow_lord_story',
                effects: {
                    setFlag: { knows_full_story: true },
                    experience: 30
                }
            },
            {
                text: '🕊️ Seek a way to redeem rather than destroy',
                nextScene: 'redemption_path',
                effects: {
                    setFlag: { redemption_seeker: true },
                    experience: 40
                }
            }
        ]
    },

    // Research and specialized knowledge scenes
    shard_research: {
        emojis: '💎📚🔬',
        text: 'You dedicate time to researching the Crystal Shards, studying their magical properties, resonance patterns, and the ancient texts that describe their creation. Your research reveals crucial insights about their power.',
        choices: [
            {
                text: '🔮 Focus on the magical theory behind the shards',
                nextScene: 'magical_theory_research',
                effects: {
                    setFlag: { shard_theorist: true },
                    experience: 40
                }
            },
            {
                text: '📜 Study historical accounts of their use',
                nextScene: 'historical_shard_research',
                effects: {
                    setFlag: { shard_historian: true },
                    experience: 35
                }
            },
            {
                text: '⚗️ Experiment with shard interactions',
                nextScene: 'shard_experimentation',
                effects: {
                    magical: true,
                    setFlag: { shard_experimenter: true },
                    experience: 45
                }
            }
        ]
    },

    curse_research: {
        emojis: '📚🔮👹',
        text: 'You delve into ancient texts about curse-breaking magic, studying the dark arts that have corrupted the land. The research is dangerous - exposure to curse knowledge can be harmful, but the insights are invaluable.',
        choices: [
            {
                text: '🛡️ Research protective wards against curses',
                nextScene: 'curse_protection_learned',
                effects: {
                    setFlag: { curse_protection: true },
                    experience: 35
                }
            },
            {
                text: '💥 Study curse-breaking techniques',
                nextScene: 'curse_breaking_learned',
                effects: {
                    setFlag: { curse_breaker: true },
                    experience: 40
                }
            },
            {
                text: '🔍 Investigate the source of the realm\'s curses',
                nextScene: 'curse_origin_discovered',
                effects: {
                    setFlag: { curse_expert: true },
                    experience: 45
                }
            }
        ]
    },

    spell_research: {
        emojis: '📖✨🧙‍♂️',
        text: 'You immerse yourself in studying advanced magical techniques, seeking spells that could aid in your quest. The library\'s ancient tomes contain powerful magic waiting to be rediscovered.',
        choices: [
            {
                text: '⚡ Research combat magic spells',
                nextScene: 'combat_magic_learned',
                effects: {
                    setFlag: { combat_mage: true },
                    experience: 35
                }
            },
            {
                text: '🛡️ Focus on protective and healing magic',
                nextScene: 'protection_magic_learned',
                effects: {
                    setFlag: { protective_mage: true },
                    experience: 30
                }
            },
            {
                text: '🔮 Study divination and scrying spells',
                nextScene: 'divination_magic_learned',
                effects: {
                    setFlag: { divination_mage: true },
                    experience: 40
                }
            }
        ]
    },

    // Action and movement scenes
    sniper_attack: {
        emojis: '🏹🎯💥',
        text: 'Your precise arrow finds its mark, striking down the lead shadow creature with a single, perfectly aimed shot. The other creatures scatter in confusion, giving you the advantage you need.',
        choices: [
            {
                text: '🏹 Continue picking off enemies from range',
                nextScene: 'ranged_elimination',
                effects: {
                    experience: 30,
                    setFlag: { sniper_expert: true }
                }
            },
            {
                text: '🏃‍♂️ Move to a new position before they spot you',
                nextScene: 'tactical_repositioning',
                effects: {
                    experience: 25
                }
            },
            {
                text: '💎 Use the confusion to grab the Crystal Shard',
                nextScene: 'shard_retrieval',
                effects: {
                    addItem: '💎',
                    experience: 35
                }
            }
        ]
    },

    stealth_approach: {
        emojis: '🤫👤🌙',
        text: 'You move with cat-like silence, using shadows and cover to approach your target undetected. Your stealth skills allow you to gather crucial intelligence and position yourself for the perfect moment to strike.',
        choices: [
            {
                text: '👁️ Observe and gather intelligence',
                nextScene: 'intelligence_gathering',
                effects: {
                    setFlag: { reconnaissance_expert: true },
                    experience: 30
                }
            },
            {
                text: '🗡️ Wait for the perfect moment to strike',
                nextScene: 'perfect_strike_opportunity',
                effects: {
                    setFlag: { assassination_opportunity: true },
                    experience: 35
                }
            },
            {
                text: '💎 Attempt to steal the Crystal Shard quietly',
                nextScene: 'stealth_theft',
                effects: {
                    setFlag: { master_thief: true },
                    experience: 40
                }
            }
        ]
    },

    urgent_warning: {
        emojis: '🏃‍♂️⚠️📢',
        text: 'You race back to the village with urgent news of the approaching danger. Your warning gives the villagers precious time to prepare defenses or evacuate, potentially saving countless lives.',
        choices: [
            {
                text: '🛡️ Help organize the village defenses',
                nextScene: 'village_defense_organized',
                effects: {
                    setFlag: { defense_organizer: true },
                    experience: 30
                }
            },
            {
                text: '🏃‍♂️ Lead an evacuation to safety',
                nextScene: 'evacuation_leadership',
                effects: {
                    setFlag: { evacuation_leader: true },
                    experience: 35
                }
            },
            {
                text: '📯 Send word to neighboring villages',
                nextScene: 'warning_network',
                effects: {
                    setFlag: { warning_coordinator: true },
                    experience: 25
                }
            }
        ]
    },

    // Alliance and coordination scenes
    forest_patrol: {
        emojis: '🌲👥🔍',
        text: 'You lead a patrol through the forest, searching for signs of shadow creatures and securing the woodland paths. Your knowledge of the forest proves invaluable in detecting threats before they can strike.',
        choices: [
            {
                text: '👻 Track down a group of shadow wraiths',
                nextScene: 'wraith_tracking',
                effects: {
                    experience: 35,
                    setFlag: { wraith_tracker: true }
                }
            },
            {
                text: '🧝‍♀️ Search for surviving forest elves',
                nextScene: 'elf_search',
                effects: {
                    experience: 30
                }
            },
            {
                text: '🌿 Look for signs of forest corruption',
                nextScene: 'corruption_investigation',
                effects: {
                    experience: 25,
                    setFlag: { corruption_detector: true }
                }
            }
        ]
    },

    alliance_building: {
        emojis: '🤝👥🏰',
        text: 'You work to build alliances between villages, kingdoms, and magical beings. Your diplomatic efforts unite former enemies and create a powerful coalition against the Shadow Lord\'s forces.',
        choices: [
            {
                text: '👑 Negotiate with neighboring kingdoms',
                nextScene: 'kingdom_alliance',
                effects: {
                    setFlag: { diplomatic_leader: true },
                    experience: 40
                }
            },
            {
                text: '🧝‍♀️ Forge an alliance with the forest elves',
                nextScene: 'elven_alliance',
                effects: {
                    setFlag: { elven_diplomat: true },
                    experience: 35
                }
            },
            {
                text: '🏘️ Unite the village militias',
                nextScene: 'militia_confederation',
                effects: {
                    setFlag: { militia_coordinator: true },
                    experience: 30
                }
            }
        ]
    },

    temple_defense: {
        emojis: '🏛️🛡️⚔️',
        text: 'You organize the defense of the Crystal Temple against shadow forces. The sacred site must be protected at all costs, as it contains knowledge and artifacts crucial to restoring the Crystal of Harmony.',
        choices: [
            {
                text: '🏹 Set up archer positions on the temple walls',
                nextScene: 'temple_archer_defense',
                effects: {
                    setFlag: { temple_defender: true },
                    experience: 35
                }
            },
            {
                text: '🔮 Activate the temple\'s magical defenses',
                nextScene: 'temple_ward_activation',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { ward_activator: true },
                    experience: 40
                }
            },
            {
                text: '⚔️ Lead a direct defense at the temple entrance',
                nextScene: 'entrance_defense',
                effects: {
                    setFlag: { entrance_guardian: true },
                    experience: 30
                }
            }
        ]
    },

    // Nature and magical scenes
    shadow_tracking: {
        emojis: '👻🔍🌙',
        text: 'You follow the trail of shadow magic through the forest, tracking its source and learning about the corruption\'s spread patterns. The dark energy leaves traces that only a skilled tracker can follow.',
        choices: [
            {
                text: '🌲 Follow the trail to its source',
                nextScene: 'corruption_source_found',
                effects: {
                    setFlag: { corruption_source_known: true },
                    experience: 40
                }
            },
            {
                text: '📊 Map the corruption\'s spread pattern',
                nextScene: 'corruption_mapping',
                effects: {
                    setFlag: { corruption_mapper: true },
                    experience: 30
                }
            },
            {
                text: '🛡️ Set up wards to contain the corruption',
                nextScene: 'containment_wards',
                effects: {
                    magical: true,
                    setFlag: { containment_specialist: true },
                    experience: 35
                }
            }
        ]
    },

    purification_ritual: {
        emojis: '✨🌿💚',
        text: 'You perform an ancient purification ritual, channeling cleansing energy into the corrupted forest. The ritual is demanding, requiring you to sacrifice some of your own life force to heal the land.',
        choices: [
            {
                text: '🌟 Pour all your energy into the purification',
                nextScene: 'complete_purification',
                effects: {
                    health: -30,
                    magical: true,
                    setFlag: { master_purifier: true },
                    experience: 50
                }
            },
            {
                text: '⚖️ Maintain balance between purification and self-preservation',
                nextScene: 'balanced_purification',
                effects: {
                    health: -15,
                    magical: true,
                    setFlag: { wise_purifier: true },
                    experience: 35
                }
            },
            {
                text: '🤝 Ask the forest spirits for assistance',
                nextScene: 'spirit_assisted_purification',
                conditions: { hasFlag: 'spirit_ally' },
                effects: {
                    magical: true,
                    setFlag: { spirit_purifier: true },
                    experience: 40
                }
            }
        ]
    }
};
