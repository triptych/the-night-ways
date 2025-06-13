// Final completion scenes for "The Night Ways"
// Simplified to reference only existing scenes for complete game closure

export const COMPLETION_SCENES = {
    // Military & Combat Scenes
    diplomatic_duel: {
        emojis: '⚔️🤝🎭',
        text: 'You face your opponent in a diplomatic duel - a formal combat where words and blades dance together in equal measure. The outcome will determine not just victory, but the terms of peace.',
        choices: [
            {
                text: 'Challenge with honor and restraint',
                nextScene: 'final_duel',
                effects: { experience: 40, setFlag: { diplomatic_honor: true } }
            },
            {
                text: 'Focus on tactical superiority',
                nextScene: 'skill_based_duel',
                effects: { experience: 35, health: 10 }
            },
            {
                text: 'Attempt to end it peacefully',
                nextScene: 'peaceful_resolution',
                effects: { experience: 50, magical: true }
            }
        ]
    },

    fighting_retreat: {
        emojis: '🏃‍♂️⚔️🛡️',
        text: 'Overwhelmed by enemy forces, you execute a fighting retreat. Every step backward must be earned with steel and strategy, protecting your allies as you withdraw.',
        choices: [
            {
                text: 'Cover the rear guard personally',
                nextScene: 'rear_guard_action',
                effects: { health: -15, experience: 30, setFlag: { heroic_retreat: true } }
            },
            {
                text: 'Coordinate tactical withdrawal',
                nextScene: 'strategic_withdrawal',
                effects: { experience: 25, setFlag: { tactical_retreat: true } }
            },
            {
                text: 'Use magic to create barriers',
                nextScene: 'magical_dispel',
                effects: { experience: 35, magical: true }
            }
        ]
    },

    guard_training_program: {
        emojis: '🛡️📚⚔️',
        text: 'You establish a comprehensive guard training program, transforming raw recruits into disciplined defenders. Your expertise shapes the future of the realm\'s security.',
        choices: [
            {
                text: 'Focus on defensive formations',
                nextScene: 'defensive_training',
                effects: { experience: 30, setFlag: { defensive_guard_trained: true } }
            },
            {
                text: 'Emphasize rapid response tactics',
                nextScene: 'rapid_response_formed',
                effects: { experience: 35, setFlag: { rapid_guard_trained: true } }
            },
            {
                text: 'Train elite guard unit',
                nextScene: 'chokepoint_training',
                effects: { experience: 45, setFlag: { elite_guard: true } }
            }
        ]
    },

    merciful_combat: {
        emojis: '⚔️💝🕊️',
        text: 'In the heat of battle, you choose mercy over vengeance. Your restraint in combat becomes a powerful statement that echoes throughout the conflict.',
        choices: [
            {
                text: 'Offer redemption to enemies',
                nextScene: 'redemption_offered',
                effects: { experience: 40, setFlag: { merciful_warrior: true } }
            },
            {
                text: 'Focus on disabling, not killing',
                nextScene: 'defensive_victory',
                effects: { experience: 35, health: 15 }
            },
            {
                text: 'Protect the innocent in battle',
                nextScene: 'village_defense',
                effects: { experience: 45, magical: true }
            }
        ]
    },

    militia_confederation: {
        emojis: '🤝⚔️🏰',
        text: 'Multiple village militias agree to form a confederation under your leadership. This united force represents hope for coordinated resistance against the darkness.',
        choices: [
            {
                text: 'Establish unified command structure',
                nextScene: 'unified_army_formed',
                effects: { experience: 40, setFlag: { militia_commander: true } }
            },
            {
                text: 'Focus on mobile strike forces',
                nextScene: 'rapid_response_formed',
                effects: { experience: 35, setFlag: { mobile_militia: true } }
            },
            {
                text: 'Create regional defense network',
                nextScene: 'defense_network',
                effects: { experience: 45, setFlag: { defense_network: true } }
            }
        ]
    },

    militia_expansion: {
        emojis: '📈⚔️👥',
        text: 'Your successful militia model spreads to neighboring regions. What started as a local defense force is becoming a movement of resistance.',
        choices: [
            {
                text: 'Standardize training across regions',
                nextScene: 'militia_training',
                effects: { experience: 35, setFlag: { standardized_militia: true } }
            },
            {
                text: 'Focus on specialized units',
                nextScene: 'civilian_combat_training',
                effects: { experience: 40, setFlag: { specialized_militia: true } }
            },
            {
                text: 'Establish supply networks',
                nextScene: 'supply_line_established',
                effects: { experience: 30, setFlag: { militia_supplies: true } }
            }
        ]
    },

    militia_rally: {
        emojis: '📯⚔️🔥',
        text: 'You sound the call to arms, rallying militias from across the land. Farmers, crafters, and common folk take up weapons to defend their homes.',
        choices: [
            {
                text: 'Lead them in inspiring speech',
                nextScene: 'troop_rally',
                effects: { experience: 30, setFlag: { inspiring_leader: true } }
            },
            {
                text: 'Organize immediate deployment',
                nextScene: 'village_defense_organized',
                effects: { experience: 35, setFlag: { quick_response: true } }
            },
            {
                text: 'Focus on coordinated tactics',
                nextScene: 'tactical_analysis',
                effects: { experience: 40, setFlag: { tactical_rally: true } }
            }
        ]
    },

    militia_training: {
        emojis: '🎯⚔️📋',
        text: 'You implement comprehensive militia training, turning willing volunteers into capable defenders. Each lesson could mean the difference between victory and defeat.',
        choices: [
            {
                text: 'Focus on group combat tactics',
                nextScene: 'coordinated_village_defense',
                effects: { experience: 35, setFlag: { formation_trained: true } }
            },
            {
                text: 'Emphasize individual skills',
                nextScene: 'civilian_combat_training',
                effects: { experience: 30, setFlag: { skilled_militia: true } }
            },
            {
                text: 'Train in guerrilla warfare',
                nextScene: 'forest_guerrilla_warfare',
                effects: { experience: 40, setFlag: { guerrilla_militia: true } }
            }
        ]
    },

    pain_powered_strength: {
        emojis: '💪⚡💢',
        text: 'You tap into your pain and injuries, transforming suffering into raw power. This dangerous technique pushes your body beyond normal limits.',
        choices: [
            {
                text: 'Channel pain into devastating attack',
                nextScene: 'rage_focus',
                effects: { health: -20, experience: 50, setFlag: { pain_warrior: true } }
            },
            {
                text: 'Use controlled pain focus',
                nextScene: 'focused_combat',
                effects: { health: -10, experience: 35 }
            },
            {
                text: 'Convert pain to protective fury',
                nextScene: 'pain_endurance',
                effects: { health: -15, experience: 40, magical: true }
            }
        ]
    },

    ranged_elimination: {
        emojis: '🏹💀🎯',
        text: 'You execute precise ranged attacks to eliminate key threats from distance. Your archery skills turn the tide of battle before enemies can close range.',
        choices: [
            {
                text: 'Target enemy commanders',
                nextScene: 'sniper_attack',
                effects: { experience: 45, setFlag: { tactical_archer: true } }
            },
            {
                text: 'Focus on magical threats',
                nextScene: 'ranged_combat',
                effects: { experience: 40, setFlag: { mage_hunter: true } }
            },
            {
                text: 'Eliminate siege weapons',
                nextScene: 'covering_fire_support',
                effects: { experience: 35, setFlag: { siege_breaker: true } }
            }
        ]
    },

    fortress_reinforcement: {
        emojis: '🏰🔨⚔️',
        text: 'You oversee the reinforcement of the fortress, adding new defenses and strengthening existing walls. Every improvement could save lives in the coming siege.',
        choices: [
            {
                text: 'Focus on wall strength',
                nextScene: 'castle_fortification',
                effects: { experience: 30, setFlag: { reinforced_walls: true } }
            },
            {
                text: 'Add magical protections',
                nextScene: 'castle_ward_creation',
                effects: { experience: 40, magical: true, setFlag: { warded_fortress: true } }
            },
            {
                text: 'Improve defensive positions',
                nextScene: 'defensive_training',
                effects: { experience: 35, setFlag: { tactical_defenses: true } }
            }
        ]
    },

    stronghold_consolidation: {
        emojis: '🏰📊⚔️',
        text: 'You consolidate multiple strongholds under unified command, creating a network of defensive positions that can support each other.',
        choices: [
            {
                text: 'Establish communication network',
                nextScene: 'warning_network',
                effects: { experience: 35, setFlag: { connected_strongholds: true } }
            },
            {
                text: 'Create rapid response system',
                nextScene: 'rapid_response_formed',
                effects: { experience: 40, setFlag: { responsive_strongholds: true } }
            },
            {
                text: 'Focus on resource sharing',
                nextScene: 'supplies_received',
                effects: { experience: 30, setFlag: { shared_resources: true } }
            }
        ]
    },

    stronghold_regrouping: {
        emojis: '🏰🔄⚔️',
        text: 'After setbacks, you orchestrate a strategic regrouping at the stronghold. This temporary withdrawal allows for reorganization and planning.',
        choices: [
            {
                text: 'Plan counterattack from stronghold',
                nextScene: 'counter_attack_planned',
                effects: { experience: 35, setFlag: { planned_counterattack: true } }
            },
            {
                text: 'Fortify for defensive stand',
                nextScene: 'defense_preparation',
                effects: { experience: 30, setFlag: { defensive_stronghold: true } }
            },
            {
                text: 'Organize evacuation routes',
                nextScene: 'evacuation_routes_planned',
                effects: { experience: 25, setFlag: { evacuation_prepared: true } }
            }
        ]
    },

    // Elf & Spirit Scenes
    elf_lore_gathering: {
        emojis: '📚🧝‍♀️✨',
        text: 'You work with elven scholars to gather ancient lore that could aid in your quest. Their knowledge spans millennia of magical understanding.',
        choices: [
            {
                text: 'Study ancient magical practices',
                nextScene: 'ancient_knowledge',
                effects: { experience: 40, magical: true, setFlag: { elven_magic_lore: true } }
            },
            {
                text: 'Learn about Crystal Shard history',
                nextScene: 'crystal_true_purpose',
                effects: { experience: 35, setFlag: { shard_history: true } }
            },
            {
                text: 'Research shadow creature weaknesses',
                nextScene: 'shadow_weakness_learned',
                effects: { experience: 30, setFlag: { creature_lore: true } }
            }
        ]
    },

    elf_protection_offered: {
        emojis: '🧝‍♀️🛡️🤝',
        text: 'The elves formally offer you their protection, extending the safety of their ancient wards and the wisdom of their guardians.',
        choices: [
            {
                text: 'Accept their sanctuary',
                nextScene: 'elven_alliance',
                effects: { health: 30, experience: 25, setFlag: { elven_protection: true } }
            },
            {
                text: 'Request combat training instead',
                nextScene: 'defensive_training',
                effects: { experience: 35, setFlag: { elven_trained: true } }
            },
            {
                text: 'Ask for magical knowledge',
                nextScene: 'enhanced_magic_learned',
                effects: { experience: 40, magical: true, setFlag: { elven_magic: true } }
            }
        ]
    },

    peaceful_elf_contact: {
        emojis: '🧝‍♀️🕊️🤝',
        text: 'You make peaceful contact with a group of elves, approaching with respect for their ancient customs and demonstrating your noble intentions.',
        choices: [
            {
                text: 'Share your quest purpose',
                nextScene: 'elven_alliance',
                effects: { experience: 30, setFlag: { elf_trust: true } }
            },
            {
                text: 'Offer assistance with their concerns',
                nextScene: 'elf_healing',
                effects: { experience: 35, setFlag: { elf_ally: true } }
            },
            {
                text: 'Request their wisdom',
                nextScene: 'elf_lore_gathering',
                effects: { experience: 25, magical: true }
            }
        ]
    },

    spirit_assisted_purification: {
        emojis: '👻✨🌟',
        text: 'Benevolent spirits join their power with yours to purify corrupted areas. Their ancient wisdom guides the cleansing process.',
        choices: [
            {
                text: 'Channel spirits through Crystal Shard',
                nextScene: 'shard_purification',
                effects: { experience: 45, magical: true, setFlag: { spirit_shard_bond: true } }
            },
            {
                text: 'Create permanent spirit sanctuary',
                nextScene: 'spirit_pact',
                effects: { experience: 40, setFlag: { spirit_sanctuary: true } }
            },
            {
                text: 'Learn spirit communication',
                nextScene: 'spirit_communion',
                effects: { experience: 35, magical: true, setFlag: { spirit_speaker: true } }
            }
        ]
    },

    spirit_path_revealed: {
        emojis: '👻🛤️✨',
        text: 'The spirits reveal a hidden path that bypasses dangerous areas, sharing secrets known only to those who have walked between worlds.',
        choices: [
            {
                text: 'Follow the spirit path immediately',
                nextScene: 'hidden_passage',
                effects: { experience: 35, setFlag: { spirit_path_used: true } }
            },
            {
                text: 'Learn to see spirit paths yourself',
                nextScene: 'spirit_guidance',
                effects: { experience: 40, magical: true, setFlag: { spirit_sight: true } }
            },
            {
                text: 'Map the path for others',
                nextScene: 'route_mapping',
                effects: { experience: 30, setFlag: { spirit_guide: true } }
            }
        ]
    },

    spirit_restoration_offer: {
        emojis: '👻🌱💫',
        text: 'The spirits offer to help restore what has been lost - whether lands, people, or hope itself. Their power transcends mortal limitations.',
        choices: [
            {
                text: 'Request land restoration',
                nextScene: 'forest_restoration',
                effects: { experience: 45, magical: true, setFlag: { land_restored: true } }
            },
            {
                text: 'Ask for healing of the people',
                nextScene: 'healing_offer',
                effects: { experience: 40, health: 20, setFlag: { mass_healed: true } }
            },
            {
                text: 'Seek restoration of hope',
                nextScene: 'ending_peaceful',
                effects: { experience: 50, magical: true, setFlag: { hope_restored: true } }
            }
        ]
    },

    spirit_shard_search: {
        emojis: '👻💎🔍',
        text: 'You work with spirit allies to search for Crystal Shards, using their ability to sense magical emanations across great distances.',
        choices: [
            {
                text: 'Let spirits guide you directly',
                nextScene: 'shard_hunt',
                effects: { experience: 40, setFlag: { spirit_shard_found: true } }
            },
            {
                text: 'Learn spirit detection methods',
                nextScene: 'magical_shard_detection',
                effects: { experience: 35, magical: true, setFlag: { spirit_detection: true } }
            },
            {
                text: 'Use spirits to map all shards',
                nextScene: 'shard_locations_revealed',
                effects: { experience: 50, setFlag: { all_shards_located: true } }
            }
        ]
    },

    // Healing & Potion Scenes
    healing_attempt: {
        emojis: '💚🙏✨',
        text: 'You attempt to heal serious injuries using whatever medical knowledge and magical power you possess. Lives hang in the balance.',
        choices: [
            {
                text: 'Use pure magical healing',
                nextScene: 'magical_healing_mastery',
                effects: { experience: 35, magical: true, setFlag: { magical_healer: true } }
            },
            {
                text: 'Combine magic with herbal medicine',
                nextScene: 'herb_gathering',
                effects: { experience: 40, health: 15, setFlag: { master_healer: true } }
            },
            {
                text: 'Focus on stabilizing for transport',
                nextScene: 'wound_treatment',
                effects: { experience: 30, setFlag: { field_medic: true } }
            }
        ]
    },

    potion_brewing_help: {
        emojis: '🧪🌿👥',
        text: 'You assist a skilled alchemist in brewing powerful potions, learning advanced techniques while helping create valuable resources.',
        choices: [
            {
                text: 'Focus on healing potions',
                nextScene: 'enhanced_potions_received',
                effects: { experience: 35, addItem: '🧪', setFlag: { healing_brewer: true } }
            },
            {
                text: 'Learn combat enhancement brews',
                nextScene: 'equipment_improvement',
                effects: { experience: 40, addItem: '⚡', setFlag: { combat_brewer: true } }
            },
            {
                text: 'Study magical detection potions',
                nextScene: 'magical_shard_detection',
                effects: { experience: 30, magical: true, setFlag: { detection_brewer: true } }
            }
        ]
    },

    potions_saved: {
        emojis: '🧪💾✨',
        text: 'You successfully preserve a collection of valuable potions from destruction, ensuring these precious resources remain available for future need.',
        choices: [
            {
                text: 'Distribute potions to allies',
                nextScene: 'supplies_received',
                effects: { experience: 30, setFlag: { generous_leader: true } }
            },
            {
                text: 'Study potion formulations',
                nextScene: 'potion_brewing_help',
                effects: { experience: 35, magical: true }
            },
            {
                text: 'Create secure potion storage',
                nextScene: 'castle_sanctuary',
                effects: { experience: 25, setFlag: { potion_vault: true } }
            }
        ]
    },

    // Royal & Political Scenes
    royal_blessing_accepted: {
        emojis: '👑🙏✨',
        text: 'You formally accept the royal blessing, taking on the responsibilities and honors that come with royal recognition and support.',
        choices: [
            {
                text: 'Pledge service to the realm',
                nextScene: 'kingdom_blessing',
                effects: { experience: 40, setFlag: { royal_champion: true } }
            },
            {
                text: 'Request specific resources',
                nextScene: 'royal_equipment_granted',
                effects: { experience: 30, addItem: '⚔️', setFlag: { royal_equipment: true } }
            },
            {
                text: 'Accept with humble gratitude',
                nextScene: 'humble_judgment',
                effects: { experience: 35, setFlag: { humble_champion: true } }
            }
        ]
    },

    royal_equipment_granted: {
        emojis: '👑⚔️🎁',
        text: 'The royal armory opens to you, granting access to the finest weapons and armor in the kingdom. These tools of legend await your worthy hands.',
        choices: [
            {
                text: 'Choose the legendary sword',
                nextScene: 'armed_and_ready',
                effects: { experience: 35, addItem: '⚔️', setFlag: { legendary_sword: true } }
            },
            {
                text: 'Select enchanted armor',
                nextScene: 'equipment_improvement',
                effects: { experience: 30, health: 25, setFlag: { royal_armor: true } }
            },
            {
                text: 'Request magical artifacts',
                nextScene: 'ancient_weapons_found',
                effects: { experience: 40, magical: true, setFlag: { royal_artifacts: true } }
            }
        ]
    },

    // Prisoner & Rescue Scenes
    mass_prison_break: {
        emojis: '🔓⛓️🏃‍♂️',
        text: 'You orchestrate a massive prison break, freeing dozens of captives in a coordinated operation that strikes at the heart of enemy operations.',
        choices: [
            {
                text: 'Lead the prisoners to safety',
                nextScene: 'prisoner_evacuation',
                effects: { experience: 45, setFlag: { mass_liberator: true } }
            },
            {
                text: 'Organize prisoners into fighting force',
                nextScene: 'prisoner_army',
                effects: { experience: 50, setFlag: { prisoner_army_leader: true } }
            },
            {
                text: 'Create diversion for other operations',
                nextScene: 'prisoner_rescue',
                effects: { experience: 40, setFlag: { tactical_liberator: true } }
            }
        ]
    },

    mass_prisoner_liberation: {
        emojis: '⛓️💥🕊️',
        text: 'You lead a comprehensive liberation effort, freeing prisoners from multiple locations and establishing safe routes to friendly territory.',
        choices: [
            {
                text: 'Establish liberation network',
                nextScene: 'informant_network',
                effects: { experience: 50, setFlag: { liberation_network: true } }
            },
            {
                text: 'Focus on immediate rescue',
                nextScene: 'prisoner_rescue',
                effects: { experience: 40, setFlag: { rescue_specialist: true } }
            },
            {
                text: 'Coordinate with resistance groups',
                nextScene: 'new_alliance',
                effects: { experience: 45, setFlag: { resistance_leader: true } }
            }
        ]
    },

    prisoner_army: {
        emojis: '⛓️⚔️💪',
        text: 'The freed prisoners, motivated by their suffering and desire for justice, form into an impromptu army under your leadership.',
        choices: [
            {
                text: 'Train them quickly for combat',
                nextScene: 'civilian_combat_training',
                effects: { experience: 40, setFlag: { prisoner_army_trained: true } }
            },
            {
                text: 'Use their knowledge for intelligence',
                nextScene: 'intelligence_gathering',
                effects: { experience: 35, setFlag: { inside_intelligence: true } }
            },
            {
                text: 'Focus on guerrilla tactics',
                nextScene: 'forest_guerrilla_warfare',
                effects: { experience: 45, setFlag: { guerrilla_army: true } }
            }
        ]
    },

    prisoner_evacuation: {
        emojis: '🏃‍♂️🛡️🚪',
        text: 'You oversee the evacuation of rescued prisoners, ensuring their safe passage to friendly territory while managing the complex logistics.',
        choices: [
            {
                text: 'Lead evacuation personally',
                nextScene: 'evacuation_mission',
                effects: { experience: 35, setFlag: { personal_evacuation_leader: true } }
            },
            {
                text: 'Coordinate multiple escape routes',
                nextScene: 'route_planning',
                effects: { experience: 40, setFlag: { evacuation_master: true } }
            },
            {
                text: 'Provide rear guard protection',
                nextScene: 'rear_guard_action',
                effects: { experience: 30, health: -10, setFlag: { protective_evacuator: true } }
            }
        ]
    },

    prisoner_revolt: {
        emojis: '⛓️💥🔥',
        text: 'Your actions inspire a full prisoner revolt, turning captivity into rebellion as the oppressed rise up against their captors.',
        choices: [
            {
                text: 'Lead the revolt directly',
                nextScene: 'survivor_rally',
                effects: { experience: 45, setFlag: { revolt_leader: true } }
            },
            {
                text: 'Coordinate with outside forces',
                nextScene: 'counter_attack_planned',
                effects: { experience: 40, setFlag: { coordinated_revolt: true } }
            },
            {
                text: 'Focus on protecting civilians',
                nextScene: 'village_defense',
                effects: { experience: 35, setFlag: { protective_revolt: true } }
            }
        ]
    },

    // Shard & Crystal Scenes
    historical_shard_research: {
        emojis: '📚💎⏳',
        text: 'You delve into historical records about the Crystal Shards, uncovering ancient knowledge about their creation, purpose, and power.',
        choices: [
            {
                text: 'Study shard creation methods',
                nextScene: 'crystal_creation_knowledge',
                effects: { experience: 40, magical: true, setFlag: { shard_creation_known: true } }
            },
            {
                text: 'Research original purposes',
                nextScene: 'crystal_true_purpose',
                effects: { experience: 35, setFlag: { shard_purpose_known: true } }
            },
            {
                text: 'Learn about shard interactions',
                nextScene: 'shard_harmony_practice',
                effects: { experience: 45, magical: true, setFlag: { shard_mastery: true } }
            }
        ]
    },

    shard_escape_attempt: {
        emojis: '💎🏃‍♂️⚡',
        text: 'You attempt to escape with a Crystal Shard while enemy forces close in, using the shard\'s power to aid your flight.',
        choices: [
            {
                text: 'Use shard for speed boost',
                nextScene: 'hasty_escape',
                effects: { experience: 35, setFlag: { shard_speed_user: true } }
            },
            {
                text: 'Create magical barriers',
                nextScene: 'magical_dispel',
                effects: { experience: 40, magical: true, setFlag: { shard_barrier_master: true } }
            },
            {
                text: 'Teleport to safety',
                nextScene: 'quick_grab',
                effects: { experience: 45, magical: true, setFlag: { shard_teleporter: true } }
            }
        ]
    },

    shard_resonance_tracking: {
        emojis: '💎📡🔍',
        text: 'You use the resonance between Crystal Shards to track their locations, sensing the harmonic vibrations that connect them across vast distances.',
        choices: [
            {
                text: 'Follow strongest resonance',
                nextScene: 'shard_hunt',
                effects: { experience: 40, setFlag: { strong_shard_located: true } }
            },
            {
                text: 'Map all shard locations',
                nextScene: 'systematic_shard_search',
                effects: { experience: 45, magical: true, setFlag: { shard_mapper: true } }
            },
            {
                text: 'Focus on nearby shards',
                nextScene: 'shard_claimed',
                effects: { experience: 35, setFlag: { local_shard_hunter: true } }
            }
        ]
    },

    systematic_shard_search: {
        emojis: '💎🗺️🔍',
        text: 'You conduct a systematic search for Crystal Shards using magical detection methods and careful investigation of ancient sites.',
        choices: [
            {
                text: 'Use magical detection spells',
                nextScene: 'magical_shard_detection',
                effects: { experience: 40, magical: true, setFlag: { shard_detector: true } }
            },
            {
                text: 'Research historical locations',
                nextScene: 'historical_shard_research',
                effects: { experience: 35, setFlag: { shard_historian: true } }
            },
            {
                text: 'Follow spirit guidance',
                nextScene: 'spirit_shard_search',
                effects: { experience: 45, magical: true, setFlag: { spirit_guided_hunter: true } }
            }
        ]
    },

    // Combat Enhancement & Wisdom Scenes
    future_visions: {
        emojis: '🔮⏰✨',
        text: 'You experience visions of possible futures, seeing the consequences of different choices and the paths that lead to victory or defeat.',
        choices: [
            {
                text: 'Focus on tactical advantages',
                nextScene: 'tactical_analysis',
                effects: { experience: 40, setFlag: { tactical_prophet: true } }
            },
            {
                text: 'Seek to prevent disasters',
                nextScene: 'warning_spread',
                effects: { experience: 45, magical: true, setFlag: { disaster_seer: true } }
            },
            {
                text: 'Find path to peace',
                nextScene: 'peaceful_resolution',
                effects: { experience: 50, setFlag: { peace_prophet: true } }
            }
        ]
    },

    holy_weapon_blessed: {
        emojis: '⚔️✨🙏',
        text: 'Your weapon receives a divine blessing, transforming it into a holy artifact capable of striking down evil with righteous power.',
        choices: [
            {
                text: 'Test the weapon\'s new power',
                nextScene: 'light_based_attack',
                effects: { experience: 35, addItem: '⚔️', setFlag: { holy_weapon: true } }
            },
            {
                text: 'Learn proper blessing rituals',
                nextScene: 'blessing_shared',
                effects: { experience: 40, magical: true, setFlag: { blessing_caster: true } }
            },
            {
                text: 'Share blessing with allies',
                nextScene: 'group_blessing_requested',
                effects: { experience: 30, setFlag: { blessing_sharer: true } }
            }
        ]
    },

    immediate_enhancement: {
        emojis: '⚡💪✨',
        text: 'You receive immediate magical enhancement to your abilities, granting you the power needed to face the challenges ahead.',
        choices: [
            {
                text: 'Enhance combat abilities',
                nextScene: 'equipment_improvement',
                effects: { experience: 35, health: 20, setFlag: { combat_enhanced: true } }
            },
            {
                text: 'Boost magical power',
                nextScene: 'enhanced_magic_learned',
                effects: { experience: 40, magical: true, setFlag: { magic_enhanced: true } }
            },
            {
                text: 'Improve wisdom and perception',
                nextScene: 'wisdom_test',
                effects: { experience: 45, setFlag: { wisdom_enhanced: true } }
            }
        ]
    },

    practical_wisdom_test: {
        emojis: '🧠⚖️📚',
        text: 'You face a practical test of wisdom, where theoretical knowledge must be applied to real-world challenges and moral dilemmas.',
        choices: [
            {
                text: 'Apply tactical wisdom',
                nextScene: 'tactical_victory',
                effects: { experience: 35, setFlag: { tactical_wise: true } }
            },
            {
                text: 'Show moral judgment',
                nextScene: 'compassion_judgment',
                effects: { experience: 40, setFlag: { moral_wise: true } }
            },
            {
                text: 'Demonstrate magical insight',
                nextScene: 'magical_wisdom_success',
                effects: { experience: 45, magical: true, setFlag: { magical_wise: true } }
            }
        ]
    },

    // Blessing & Alliance Scenes
    gratitude_blessing_received: {
        emojis: '🙏✨💝',
        text: 'Those you have helped offer their heartfelt gratitude in the form of a powerful blessing, their combined hope manifesting as tangible aid.',
        choices: [
            {
                text: 'Accept blessing of protection',
                nextScene: 'divine_protection_granted',
                effects: { health: 25, experience: 30, setFlag: { protection_blessed: true } }
            },
            {
                text: 'Request blessing of wisdom',
                nextScene: 'divine_wisdom_granted',
                effects: { experience: 40, magical: true, setFlag: { wisdom_blessed: true } }
            },
            {
                text: 'Ask for blessing of strength',
                nextScene: 'divine_empowerment',
                effects: { experience: 35, setFlag: { strength_blessed: true } }
            }
        ]
    },

    group_blessing_requested: {
        emojis: '👥🙏✨',
        text: 'You request that the blessing be extended to your entire group, sharing the divine favor among all who fight beside you.',
        choices: [
            {
                text: 'Bless the entire army',
                nextScene: 'unified_army_formed',
                effects: { experience: 45, setFlag: { army_blessed: true } }
            },
            {
                text: 'Focus on key leaders',
                nextScene: 'council_leadership',
                effects: { experience: 35, setFlag: { leaders_blessed: true } }
            },
            {
                text: 'Protect the innocent',
                nextScene: 'village_protection_force',
                effects: { experience: 40, magical: true, setFlag: { civilians_blessed: true } }
            }
        ]
    },

    valdris_ally: {
        emojis: '🤝⚔️🛡️',
        text: 'Valdris, a powerful warrior, agrees to become your ally, bringing considerable combat expertise and tactical knowledge to your cause.',
        choices: [
            {
                text: 'Learn from Valdris\'s experience',
                nextScene: 'combat_analysis',
                effects: { experience: 40, setFlag: { valdris_trained: true } }
            },
            {
                text: 'Plan joint military operations',
                nextScene: 'campaign_planning',
                effects: { experience: 35, setFlag: { valdris_tactics: true } }
            },
            {
                text: 'Gain access to Valdris\'s network',
                nextScene: 'new_alliance',
                effects: { experience: 30, setFlag: { valdris_connections: true } }
            }
        ]
    },

    // Enhanced Combat & Dueling Scenes
    honorable_challenge: {
        emojis: '⚔️🛡️🏆',
        text: 'You issue or accept an honorable challenge, facing your opponent in single combat where skill and honor matter more than victory.',
        choices: [
            {
                text: 'Fight with perfect honor',
                nextScene: 'victory_determination',
                effects: { experience: 40, setFlag: { honorable_duelist: true } }
            },
            {
                text: 'Focus on displaying skill',
                nextScene: 'skill_based_duel',
                effects: { experience: 35, setFlag: { skilled_duelist: true } }
            },
            {
                text: 'Seek to teach through combat',
                nextScene: 'defensive_training',
                effects: { experience: 45, setFlag: { teacher_warrior: true } }
            }
        ]
    },

    honorable_final_duel: {
        emojis: '⚔️👑🏆',
        text: 'In a climactic honorable duel, you face your greatest opponent with the fate of the realm hanging in the balance, honor intact.',
        choices: [
            {
                text: 'Fight with restraint and mercy',
                nextScene: 'peaceful_resolution',
                effects: { experience: 50, setFlag: { merciful_champion: true } }
            },
            {
                text: 'Display perfect technique',
                nextScene: 'final_duel',
                effects: { experience: 45, setFlag: { master_duelist: true } }
            },
            {
                text: 'Offer redemption in combat',
                nextScene: 'redemption_offered',
                effects: { experience: 55, setFlag: { redemptive_warrior: true } }
            }
        ]
    },

    trial_by_combat: {
        emojis: '⚔️⚖️🏛️',
        text: 'You face trial by combat, where your innocence or guilt will be determined by the outcome of single combat before witnesses.',
        choices: [
            {
                text: 'Fight with righteous fury',
                nextScene: 'justice_battle',
                effects: { experience: 40, setFlag: { righteous_warrior: true } }
            },
            {
                text: 'Display calm mastery',
                nextScene: 'balanced_training',
                effects: { experience: 35, setFlag: { calm_master: true } }
            },
            {
                text: 'Fight defensively to prove innocence',
                nextScene: 'defensive_victory',
                effects: { experience: 30, health: 15, setFlag: { proven_innocent: true } }
            }
        ]
    },

    // Rage & Mental Control Scenes
    rage_control_attempt: {
        emojis: '😤🧘‍♂️⚖️',
        text: 'You struggle to control overwhelming rage, fighting to maintain your humanity and moral center in the face of injustice.',
        choices: [
            {
                text: 'Channel rage into focused determination',
                nextScene: 'rage_focus',
                effects: { experience: 40, setFlag: { rage_master: true } }
            },
            {
                text: 'Seek calming meditation',
                nextScene: 'meditation_recovery',
                effects: { experience: 35, health: 15, setFlag: { inner_peace: true } }
            },
            {
                text: 'Use rage for protective fury',
                nextScene: 'pain_endurance',
                effects: { experience: 45, setFlag: { protective_fury: true } }
            }
        ]
    },

    rage_driven_assault: {
        emojis: '😤⚔️💥',
        text: 'Consumed by righteous fury, you launch a devastating assault against those who threaten the innocent, your rage becoming a weapon.',
        choices: [
            {
                text: 'Focus rage on true enemies',
                nextScene: 'focused_combat',
                effects: { experience: 40, health: -10, setFlag: { focused_rage: true } }
            },
            {
                text: 'Protect others while raging',
                nextScene: 'village_defense',
                effects: { experience: 45, health: -15, setFlag: { protective_berserker: true } }
            },
            {
                text: 'Try to maintain some control',
                nextScene: 'rage_focus',
                effects: { experience: 35, health: -5, setFlag: { controlled_berserker: true } }
            }
        ]
    },

    willpower_recovery: {
        emojis: '🧠💪✨',
        text: 'Through sheer force of will, you recover from mental exhaustion or magical influence, reasserting control over your own mind.',
        choices: [
            {
                text: 'Focus on strengthening mental defenses',
                nextScene: 'protection_magic_learned',
                effects: { experience: 35, magical: true, setFlag: { mental_fortress: true } }
            },
            {
                text: 'Help others resist mental attacks',
                nextScene: 'village_protection_force',
                effects: { experience: 40, setFlag: { mind_protector: true } }
            },
            {
                text: 'Learn to detect mental influence',
                nextScene: 'magical_investigation',
                effects: { experience: 30, magical: true, setFlag: { mind_detector: true } }
            }
        ]
    },

    // Refugee & Settlement Scenes
    refugee_militia_training: {
        emojis: '🏠⚔️👥',
        text: 'You organize refugee camps into defensive militias, teaching displaced people to protect themselves and their new communities.',
        choices: [
            {
                text: 'Focus on defensive tactics',
                nextScene: 'defensive_training',
                effects: { experience: 35, setFlag: { refugee_defender: true } }
            },
            {
                text: 'Teach guerrilla warfare',
                nextScene: 'forest_guerrilla_warfare',
                effects: { experience: 40, setFlag: { refugee_guerrilla_trainer: true } }
            },
            {
                text: 'Create integrated defense force',
                nextScene: 'integrated_defense',
                effects: { experience: 45, setFlag: { refugee_integrator: true } }
            }
        ]
    },

    refugee_settlement: {
        emojis: '🏠🌱👥',
        text: 'You help establish a permanent settlement for refugees, creating a new community that can thrive and defend itself.',
        choices: [
            {
                text: 'Focus on agricultural development',
                nextScene: 'herb_gathering',
                effects: { experience: 30, setFlag: { settlement_farmer: true } }
            },
            {
                text: 'Emphasize defensive positioning',
                nextScene: 'fortified_position',
                effects: { experience: 35, setFlag: { settlement_defender: true } }
            },
            {
                text: 'Create trade and craft center',
                nextScene: 'supplies_received',
                effects: { experience: 40, setFlag: { settlement_trader: true } }
            }
        ]
    },

    reinforcement_rally: {
        emojis: '📯⚔️🏃‍♂️',
        text: 'You rally reinforcements from across the realm, calling upon old allies and new friends to join the final battle.',
        choices: [
            {
                text: 'Rally military forces',
                nextScene: 'troop_rally',
                effects: { experience: 40, setFlag: { military_rallier: true } }
            },
            {
                text: 'Call upon civilian volunteers',
                nextScene: 'civilian_combat_training',
                effects: { experience: 35, setFlag: { civilian_rallier: true } }
            },
            {
                text: 'Summon magical allies',
                nextScene: 'elven_alliance',
                effects: { experience: 45, magical: true, setFlag: { magical_rallier: true } }
            }
        ]
    },

    // Advanced Magic & Temple Scenes
    measured_spirit_bond: {
        emojis: '👻⚖️🤝',
        text: 'You form a carefully measured bond with spirits, maintaining the balance between mortal and ethereal while gaining their aid.',
        choices: [
            {
                text: 'Establish permanent spirit alliance',
                nextScene: 'spirit_pact',
                effects: { experience: 45, magical: true, setFlag: { spirit_ally: true } }
            },
            {
                text: 'Learn spirit communication protocols',
                nextScene: 'spirit_communion',
                effects: { experience: 40, magical: true, setFlag: { spirit_diplomat: true } }
            },
            {
                text: 'Create spirit summoning rituals',
                nextScene: 'spirit_guidance',
                effects: { experience: 35, magical: true, setFlag: { spirit_summoner: true } }
            }
        ]
    },

    temple_archer_defense: {
        emojis: '🏛️🏹⚔️',
        text: 'You organize the defense of a sacred temple using archer tactics, turning the holy site into an impregnable fortress.',
        choices: [
            {
                text: 'Position archers in temple towers',
                nextScene: 'treetop_archery',
                effects: { experience: 35, setFlag: { temple_archer_captain: true } }
            },
            {
                text: 'Create overlapping fields of fire',
                nextScene: 'covering_fire_support',
                effects: { experience: 40, setFlag: { temple_tactician: true } }
            },
            {
                text: 'Combine archery with temple wards',
                nextScene: 'temple_defense',
                effects: { experience: 45, magical: true, setFlag: { temple_ward_archer: true } }
            }
        ]
    },

    temple_ward_activation: {
        emojis: '🏛️✨🛡️',
        text: 'You activate the ancient protective wards of the temple, calling upon sacred power to defend this holy place.',
        choices: [
            {
                text: 'Channel personal energy into wards',
                nextScene: 'permanent_ward_created',
                effects: { experience: 40, magical: true, health: -10, setFlag: { ward_channeler: true } }
            },
            {
                text: 'Rally others to power the wards',
                nextScene: 'temple_defense',
                effects: { experience: 35, setFlag: { ward_coordinator: true } }
            },
            {
                text: 'Enhance wards with Crystal Shard',
                nextScene: 'shard_power_unleashed',
                effects: { experience: 50, magical: true, setFlag: { shard_ward_master: true } }
            }
        ]
    },

    // Knowledge & Research Scenes
    true_name_learned: {
        emojis: '📚✨🔍',
        text: 'You discover the true name of a powerful entity, gaining knowledge that grants you influence over forces beyond mortal understanding.',
        choices: [
            {
                text: 'Use the name for binding',
                nextScene: 'containment_wards',
                effects: { experience: 45, magical: true, setFlag: { name_binder: true } }
            },
            {
                text: 'Negotiate using the name',
                nextScene: 'peaceful_resolution',
                effects: { experience: 40, setFlag: { name_diplomat: true } }
            },
            {
                text: 'Protect the name\'s secrecy',
                nextScene: 'wisdom_recorded',
                effects: { experience: 35, setFlag: { name_guardian: true } }
            }
        ]
    },

    // Specialized Combat & Enhancement Scenes
    precise_power_sabotage: {
        emojis: '🎯💥⚡',
        text: 'You execute a precisely planned sabotage of enemy power sources, using surgical strikes to cripple their magical capabilities.',
        choices: [
            {
                text: 'Target magical power sources',
                nextScene: 'power_source_destroyed',
                effects: { experience: 45, magical: true, setFlag: { magic_saboteur: true } }
            },
            {
                text: 'Destroy physical infrastructure',
                nextScene: 'fortress_battle',
                effects: { experience: 40, setFlag: { infrastructure_saboteur: true } }
            },
            {
                text: 'Plant time-delayed disruptions',
                nextScene: 'delayed_sabotage',
                effects: { experience: 35, setFlag: { time_saboteur: true } }
            }
        ]
    },

    premature_confrontation_consideration: {
        emojis: '⚔️🤔⏰',
        text: 'You consider whether to force a premature confrontation with the enemy, weighing the risks of acting before you\'re fully prepared.',
        choices: [
            {
                text: 'Proceed with immediate confrontation',
                nextScene: 'final_battle_combat',
                effects: { experience: 40, setFlag: { bold_warrior: true } }
            },
            {
                text: 'Wait for better timing',
                nextScene: 'battle_preparation',
                effects: { experience: 35, setFlag: { patient_strategist: true } }
            },
            {
                text: 'Create conditions for confrontation',
                nextScene: 'tactical_analysis',
                effects: { experience: 45, setFlag: { tactical_manipulator: true } }
            }
        ]
    },

    protection_ritual_learned: {
        emojis: '🛡️✨📚',
        text: 'You master powerful protection rituals, learning to shield yourself and others from both physical and magical harm.',
        choices: [
            {
                text: 'Focus on personal protection',
                nextScene: 'divine_protection_granted',
                effects: { experience: 35, health: 20, setFlag: { self_protector: true } }
            },
            {
                text: 'Learn group protection rituals',
                nextScene: 'village_protection_force',
                effects: { experience: 40, magical: true, setFlag: { group_protector: true } }
            },
            {
                text: 'Master area protection wards',
                nextScene: 'permanent_ward_created',
                effects: { experience: 45, magical: true, setFlag: { ward_master: true } }
            }
        ]
    },

    protector_path: {
        emojis: '🛡️🌟🛤️',
        text: 'You fully embrace the path of the protector, dedicating yourself to shielding others from harm and standing as their guardian.',
        choices: [
            {
                text: 'Become guardian of the innocent',
                nextScene: 'village_healer',
                effects: { experience: 45, setFlag: { innocent_guardian: true } }
            },
            {
                text: 'Protect the realm itself',
                nextScene: 'realm_healing_mission',
                effects: { experience: 50, magical: true, setFlag: { realm_guardian: true } }
            },
            {
                text: 'Guard ancient knowledge',
                nextScene: 'wisdom_recorded',
                effects: { experience: 40, setFlag: { knowledge_guardian: true } }
            }
        ]
    },

    purification_study: {
        emojis: '✨📚🌟',
        text: 'You delve deep into the study of purification magic, learning advanced techniques for cleansing corruption and evil.',
        choices: [
            {
                text: 'Master land purification',
                nextScene: 'forest_purification',
                effects: { experience: 45, magical: true, setFlag: { land_purifier: true } }
            },
            {
                text: 'Learn creature purification',
                nextScene: 'creature_purification',
                effects: { experience: 40, magical: true, setFlag: { creature_purifier: true } }
            },
            {
                text: 'Study object purification',
                nextScene: 'shard_purification',
                effects: { experience: 35, magical: true, setFlag: { object_purifier: true } }
            }
        ]
    },

    // Victory & Conclusion Scenes
    victory_report: {
        emojis: '🏆📜✨',
        text: 'You compile a comprehensive report of your victories, documenting the strategies and sacrifices that led to triumph.',
        choices: [
            {
                text: 'Focus on tactical innovations',
                nextScene: 'tactical_manual_created',
                effects: { experience: 35, setFlag: { tactical_historian: true } }
            },
            {
                text: 'Honor fallen heroes',
                nextScene: 'fallen_heroes_honored',
                effects: { experience: 40, setFlag: { hero_chronicler: true } }
            },
            {
                text: 'Document magical discoveries',
                nextScene: 'wisdom_recorded',
                effects: { experience: 45, magical: true, setFlag: { magical_chronicler: true } }
            }
        ]
    },

    vigilant_protector: {
        emojis: '👁️🛡️⚔️',
        text: 'You take on the role of vigilant protector, maintaining constant watch against threats to peace and innocent lives.',
        choices: [
            {
                text: 'Establish early warning systems',
                nextScene: 'warning_network',
                effects: { experience: 35, setFlag: { early_warning_master: true } }
            },
            {
                text: 'Train new protectors',
                nextScene: 'civilian_combat_training',
                effects: { experience: 40, setFlag: { protector_trainer: true } }
            },
            {
                text: 'Create protective sanctuaries',
                nextScene: 'castle_sanctuary',
                effects: { experience: 45, magical: true, setFlag: { sanctuary_creator: true } }
            }
        ]
    },

    warrior_spirits_summoned: {
        emojis: '👻⚔️✨',
        text: 'You summon the spirits of ancient warriors to fight beside you, calling upon the honored dead to defend the living.',
        choices: [
            {
                text: 'Lead spirit warriors in battle',
                nextScene: 'spirit_ally_combat',
                effects: { experience: 45, magical: true, setFlag: { spirit_general: true } }
            },
            {
                text: 'Learn from spirit tactics',
                nextScene: 'spirit_wisdom',
                effects: { experience: 40, setFlag: { spirit_student: true } }
            },
            {
                text: 'Establish permanent spirit guard',
                nextScene: 'spirit_pact',
                effects: { experience: 50, magical: true, setFlag: { spirit_commander: true } }
            }
        ]
    },

    // Wraith & Creature Scenes
    wraith_hunting_spree: {
        emojis: '👻⚔️🏹',
        text: 'You embark on a focused campaign to hunt down wraiths, using specialized techniques to track and eliminate these ethereal threats.',
        choices: [
            {
                text: 'Use blessed weapons against wraiths',
                nextScene: 'wraith_shot',
                effects: { experience: 40, addItem: '⚔️', setFlag: { wraith_slayer: true } }
            },
            {
                text: 'Develop anti-wraith tactics',
                nextScene: 'wraith_analysis',
                effects: { experience: 45, setFlag: { wraith_tactician: true } }
            },
            {
                text: 'Learn wraith weaknesses',
                nextScene: 'shadow_weakness_revealed',
                effects: { experience: 35, setFlag: { wraith_scholar: true } }
            }
        ]
    },

    wraith_study: {
        emojis: '👻📚🔍',
        text: 'You conduct careful study of wraith behavior and nature, seeking to understand these creatures to better combat them.',
        choices: [
            {
                text: 'Study wraith origins',
                nextScene: 'shadow_lore',
                effects: { experience: 40, magical: true, setFlag: { wraith_historian: true } }
            },
            {
                text: 'Research wraith banishment',
                nextScene: 'purification_ritual',
                effects: { experience: 45, magical: true, setFlag: { wraith_banisher: true } }
            },
            {
                text: 'Learn wraith communication',
                nextScene: 'spirit_communion',
                effects: { experience: 35, magical: true, setFlag: { wraith_speaker: true } }
            }
        ]
    },

    wraith_tracking: {
        emojis: '👻🕵️‍♂️🔍',
        text: 'You develop methods for tracking wraiths across the ethereal and material planes, following their spectral trails through multiple dimensions.',
        choices: [
            {
                text: 'Use magical tracking spells',
                nextScene: 'magical_investigation',
                effects: { experience: 40, magical: true, setFlag: { wraith_tracker: true } }
            },
            {
                text: 'Follow ethereal disturbances',
                nextScene: 'spirit_guidance',
                effects: { experience: 35, magical: true, setFlag: { ethereal_tracker: true } }
            },
            {
                text: 'Create wraith detection network',
                nextScene: 'warning_network',
                effects: { experience: 45, setFlag: { wraith_network_master: true } }
            }
        ]
    },

    // Final redemption scene
    redemption_offer: {
        emojis: '🕊️💝✨',
        text: 'You offer redemption to fallen enemies, extending hope and a chance for atonement even to those who have committed great wrongs.',
        choices: [
            {
                text: 'Offer unconditional redemption',
                nextScene: 'redemption_completion',
                effects: { experience: 50, magical: true, setFlag: { redemption_master: true } }
            },
            {
                text: 'Require acts of atonement',
                nextScene: 'redemption_path',
                effects: { experience: 40, setFlag: { redemption_guide: true } }
            },
            {
                text: 'Create redemption sanctuary',
                nextScene: 'castle_sanctuary',
                effects: { experience: 45, magical: true, setFlag: { sanctuary_of_redemption: true } }
            }
        ]
    }
};
