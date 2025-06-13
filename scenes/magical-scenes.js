// Magical spells, crystal shards, and arcane scenes
export const MAGICAL_SCENES = {
    dark_analysis: {
        emojis: '🔮👹📊',
        text: 'You carefully analyze the dark energy swirling around the temple ruins. Your magical senses reveal corruption patterns and identify weak points in the shadow magic\'s structure.',
        choices: [
            {
                text: '🛡️ Create protective wards against the dark energy',
                nextScene: 'containment_wards',
                effects: {
                    magical: true,
                    setFlag: { dark_analysis_complete: true },
                    experience: 35
                }
            },
            {
                text: '💎 Search for Crystal Shards within the corruption',
                nextScene: 'fragment_collected',
                effects: {
                    magical: true,
                    health: -15,
                    experience: 30
                }
            },
            {
                text: '📚 Document your findings for future reference',
                nextScene: 'research_notes',
                effects: {
                    setFlag: { dark_energy_expert: true },
                    experience: 25
                }
            }
        ]
    },

    defensive_magic_demo: {
        emojis: '🛡️✨🔮',
        text: 'You demonstrate advanced defensive magic techniques, creating multiple layers of protective barriers and showing how to counter various forms of magical attacks.',
        choices: [
            {
                text: '🏰 Teach others to create permanent defensive wards',
                nextScene: 'magic_teaching',
                effects: {
                    magical: true,
                    setFlag: { defense_instructor: true },
                    experience: 40
                }
            },
            {
                text: '💎 Enhance the demonstration with Crystal Shard power',
                nextScene: 'shard_empowered_combat',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { crystal_defense_master: true },
                    experience: 45
                }
            },
            {
                text: '👥 Organize a defensive magic training program',
                nextScene: 'guard_training_program',
                effects: {
                    magical: true,
                    setFlag: { magical_academy: true },
                    experience: 35
                }
            }
        ]
    },

    divination_magic_learned: {
        emojis: '🔮👁️✨',
        text: 'You master the art of divination magic, learning to see beyond the present moment and glimpse possible futures, hidden truths, and distant locations.',
        choices: [
            {
                text: '🌟 Use divination to locate Crystal Shards',
                nextScene: 'shard_locations_revealed',
                effects: {
                    magical: true,
                    setFlag: { divination_master: true },
                    experience: 50
                }
            },
            {
                text: '👹 Seek visions of the Shadow Lord\'s plans',
                nextScene: 'shadow_lord_observation',
                effects: {
                    magical: true,
                    setFlag: { future_sight: true },
                    experience: 45
                }
            },
            {
                text: '🔍 Use divination to aid tactical planning',
                nextScene: 'tactical_analysis',
                effects: {
                    magical: true,
                    setFlag: { tactical_diviner: true },
                    experience: 40
                }
            }
        ]
    },

    emergency_crystal_restoration: {
        emojis: '💎⚡🚨',
        text: 'In a moment of desperate need, you attempt an emergency restoration of the Crystal of Harmony using the shards you\'ve gathered. The process is dangerous but could turn the tide of battle.',
        choices: [
            {
                text: '⚡ Channel all your power into the restoration',
                nextScene: 'shard_power_unleashed',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    health: -30,
                    setFlag: { emergency_restorer: true },
                    experience: 70
                }
            },
            {
                text: '🤝 Ask allies to help stabilize the process',
                nextScene: 'cooperative_restoration',
                effects: {
                    magical: true,
                    health: -15,
                    setFlag: { team_restorer: true },
                    experience: 55
                }
            },
            {
                text: '🛡️ Focus on partial restoration for immediate aid',
                nextScene: 'crystal_healing',
                effects: {
                    magical: true,
                    health: -10,
                    setFlag: { cautious_restorer: true },
                    experience: 45
                }
            }
        ]
    },

    essence_balancing: {
        emojis: '⚖️✨🌟',
        text: 'You learn to balance different magical essences within the Crystal Shards, harmonizing their conflicting energies to create stable, powerful magical effects.',
        choices: [
            {
                text: '💎 Perfect the balance between all shards you possess',
                nextScene: 'shard_harmony_practice',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { essence_master: true },
                    experience: 55
                }
            },
            {
                text: '👻 Balance spiritual and physical magical forces',
                nextScene: 'spirit_restoration_offer',
                effects: {
                    magical: true,
                    setFlag: { spirit_balancer: true },
                    experience: 45
                }
            },
            {
                text: '🌿 Harmonize natural and arcane magic',
                nextScene: 'nature_magic_fusion',
                effects: {
                    magical: true,
                    setFlag: { nature_arcane_master: true },
                    experience: 50
                }
            }
        ]
    },

    light_based_attack: {
        emojis: '☀️⚡💥',
        text: 'You unleash a devastating light-based attack, channeling pure radiance to obliterate shadow creatures and corrupt magic. The brilliant energy illuminates the entire battlefield.',
        choices: [
            {
                text: '🌟 Maximize the attack\'s power and range',
                nextScene: 'complete_power_destruction',
                effects: {
                    magical: true,
                    health: -20,
                    setFlag: { light_devastator: true },
                    experience: 60
                }
            },
            {
                text: '🛡️ Focus the light to protect allies',
                nextScene: 'divine_protection_granted',
                effects: {
                    magical: true,
                    setFlag: { protective_light: true },
                    experience: 45
                }
            },
            {
                text: '🎯 Target specific high-priority enemies',
                nextScene: 'precision_trial',
                effects: {
                    magical: true,
                    setFlag: { precision_light_mage: true },
                    experience: 50
                }
            }
        ]
    },

    light_sharing: {
        emojis: '💡🤝✨',
        text: 'You share your light magic with others, teaching them to create their own radiant energy and resist the corrupting influence of shadow magic.',
        choices: [
            {
                text: '👥 Establish a Light Magic Academy',
                nextScene: 'magic_teaching',
                effects: {
                    magical: true,
                    setFlag: { light_academy_founder: true },
                    experience: 50
                }
            },
            {
                text: '🏰 Infuse the castle with protective light',
                nextScene: 'castle_ward_creation',
                effects: {
                    magical: true,
                    setFlag: { light_fortress: true },
                    experience: 45
                }
            },
            {
                text: '🌍 Spread light magic across the entire realm',
                nextScene: 'realm_healing_attempt',
                effects: {
                    magical: true,
                    health: -25,
                    setFlag: { realm_illuminator: true },
                    experience: 65
                }
            }
        ]
    },

    lunar_power_summoned: {
        emojis: '🌙⚡🔮',
        text: 'You call upon the power of the moon itself, drawing down celestial energy to enhance your magical abilities and illuminate the darkness with pure lunar radiance.',
        choices: [
            {
                text: '🌟 Channel lunar power through Crystal Shards',
                nextScene: 'shard_power_unleashed',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { lunar_crystal_master: true },
                    experience: 60
                }
            },
            {
                text: '🌙 Use lunar magic to enhance divination',
                nextScene: 'future_visions',
                effects: {
                    magical: true,
                    setFlag: { lunar_seer: true },
                    experience: 50
                }
            },
            {
                text: '👥 Share lunar blessings with your allies',
                nextScene: 'group_blessing_requested',
                effects: {
                    magical: true,
                    setFlag: { lunar_blessing_giver: true },
                    experience: 45
                }
            }
        ]
    },

    magic_teaching: {
        emojis: '🧙‍♂️📚✨',
        text: 'You establish a magical academy, teaching others the arts of wizardry, defensive magic, and proper Crystal Shard handling. Your students show great promise and dedication.',
        choices: [
            {
                text: '⚔️ Focus on combat magic training',
                nextScene: 'combat_magic_learned',
                effects: {
                    magical: true,
                    setFlag: { combat_instructor: true },
                    experience: 45
                }
            },
            {
                text: '🛡️ Emphasize protective and healing magic',
                nextScene: 'magical_healing_mastery',
                effects: {
                    magical: true,
                    setFlag: { healing_instructor: true },
                    experience: 50
                }
            },
            {
                text: '🔬 Teach advanced magical theory and research',
                nextScene: 'magical_theory_research',
                effects: {
                    magical: true,
                    setFlag: { arcane_professor: true },
                    experience: 55
                }
            }
        ]
    },

    magical_communications: {
        emojis: '🔮📡✨',
        text: 'You establish a network of magical communication devices, allowing instant contact between distant allies and coordinated strategic responses across the realm.',
        choices: [
            {
                text: '⚔️ Use communications for tactical coordination',
                nextScene: 'tactical_command',
                effects: {
                    magical: true,
                    setFlag: { comm_master: true },
                    experience: 40
                }
            },
            {
                text: '📊 Create an intelligence gathering network',
                nextScene: 'intelligence_report',
                effects: {
                    magical: true,
                    setFlag: { magical_spy_network: true },
                    experience: 45
                }
            },
            {
                text: '🚨 Set up early warning systems',
                nextScene: 'warning_network',
                effects: {
                    magical: true,
                    setFlag: { warning_system: true },
                    experience: 35
                }
            }
        ]
    },

    magical_component_gathering: {
        emojis: '🌿🔮⚗️',
        text: 'You gather rare magical components from across the realm - dragon scales, phoenix feathers, moonstone dust, and other precious materials needed for powerful spellcasting.',
        choices: [
            {
                text: '🧪 Use components to brew powerful potions',
                nextScene: 'potion_brewing_help',
                effects: {
                    magical: true,
                    addItem: '🧪',
                    setFlag: { master_alchemist: true },
                    experience: 40
                }
            },
            {
                text: '🔮 Craft powerful magical artifacts',
                nextScene: 'ancient_weapons_found',
                effects: {
                    magical: true,
                    addItem: '⚔️',
                    setFlag: { artifact_creator: true },
                    experience: 45
                }
            },
            {
                text: '💎 Enhance Crystal Shards with components',
                nextScene: 'shard_experimentation',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { crystal_enhancer: true },
                    experience: 50
                }
            }
        ]
    },

    magical_dispel: {
        emojis: '🚫✨💥',
        text: 'You master the art of magical dispelling, learning to unravel enemy spells, break curses, and neutralize hostile magical effects with precision and power.',
        choices: [
            {
                text: '👹 Dispel the Shadow Lord\'s corrupting magic',
                nextScene: 'power_source_purification',
                effects: {
                    magical: true,
                    setFlag: { dispel_master: true },
                    experience: 55
                }
            },
            {
                text: '🧝‍♀️ Help elves break ancient curses',
                nextScene: 'elven_curse_breaking',
                effects: {
                    magical: true,
                    setFlag: { curse_breaker: true },
                    experience: 45
                }
            },
            {
                text: '👥 Teach dispelling techniques to others',
                nextScene: 'protection_ritual_learned',
                effects: {
                    magical: true,
                    setFlag: { dispel_teacher: true },
                    experience: 40
                }
            }
        ]
    },

    magical_healing_mastery: {
        emojis: '💚🔮✨',
        text: 'You achieve mastery in magical healing, learning to restore not just physical wounds but also spiritual damage, magical corruption, and even memories lost to dark magic.',
        choices: [
            {
                text: '🏥 Establish a magical healing center',
                nextScene: 'medical_network_established',
                effects: {
                    magical: true,
                    setFlag: { healing_master: true },
                    experience: 50
                }
            },
            {
                text: '👹 Attempt to heal the Shadow Lord\'s corruption',
                nextScene: 'redemption_offered',
                effects: {
                    magical: true,
                    setFlag: { corruption_healer: true },
                    experience: 60
                }
            },
            {
                text: '🌍 Use healing magic to restore the land itself',
                nextScene: 'land_restoration_project',
                effects: {
                    magical: true,
                    health: -20,
                    setFlag: { land_healer: true },
                    experience: 65
                }
            }
        ]
    },

    magical_retrieval: {
        emojis: '🔮🏃‍♂️💎',
        text: 'Using advanced magical techniques, you attempt to retrieve important artifacts or Crystal Shards from dangerous locations using teleportation, magical projection, and remote manipulation.',
        choices: [
            {
                text: '💎 Retrieve Crystal Shards from the fortress',
                nextScene: 'shard_secured',
                effects: {
                    magical: true,
                    addItem: '💎',
                    setFlag: { magical_retriever: true },
                    experience: 45
                }
            },
            {
                text: '📚 Recover ancient magical knowledge',
                nextScene: 'ancient_knowledge',
                effects: {
                    magical: true,
                    setFlag: { knowledge_retriever: true },
                    experience: 40
                }
            },
            {
                text: '👥 Rescue prisoners using magic',
                nextScene: 'mass_prisoner_liberation',
                effects: {
                    magical: true,
                    setFlag: { magical_liberator: true },
                    experience: 50
                }
            }
        ]
    },

    magical_wisdom_success: {
        emojis: '🧠✨📚',
        text: 'Your magical wisdom proves decisive as you solve complex mystical puzzles and understand the deeper truths of the Crystal\'s power. Knowledge becomes your greatest weapon.',
        choices: [
            {
                text: '💎 Apply wisdom to perfect Crystal restoration',
                nextScene: 'crystal_restoration_vision',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { wisdom_master: true },
                    experience: 60
                }
            },
            {
                text: '👹 Use wisdom to understand the Shadow Lord',
                nextScene: 'shadow_lord_understanding',
                effects: {
                    magical: true,
                    setFlag: { shadow_sage: true },
                    experience: 55
                }
            },
            {
                text: '📖 Document your wisdom for future generations',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { wisdom_keeper: true },
                    experience: 45
                }
            }
        ]
    },

    multi_shard_study: {
        emojis: '💎💎💎',
        text: 'With multiple Crystal Shards in your possession, you study their interactions and resonances. The combined power is immense, but also unstable and potentially dangerous.',
        choices: [
            {
                text: '⚡ Attempt to merge the shards temporarily',
                nextScene: 'shard_power_unleashed',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    health: -25,
                    setFlag: { shard_merger: true },
                    experience: 70
                }
            },
            {
                text: '⚖️ Focus on stabilizing their interactions',
                nextScene: 'shard_harmony_practice',
                effects: {
                    magical: true,
                    setFlag: { shard_stabilizer: true },
                    experience: 55
                }
            },
            {
                text: '🔬 Conduct careful scientific analysis',
                nextScene: 'shard_experimentation',
                effects: {
                    magical: true,
                    setFlag: { crystal_researcher: true },
                    experience: 45
                }
            }
        ]
    },

    nature_magic_empowered: {
        emojis: '🌿⚡🦋',
        text: 'Your connection to nature magic grows stronger, allowing you to communicate with all living things, accelerate plant growth, and channel the raw power of the natural world.',
        choices: [
            {
                text: '🌲 Merge completely with the forest\'s consciousness',
                nextScene: 'forest_bond_permanent',
                effects: {
                    magical: true,
                    setFlag: { nature_one: true },
                    experience: 60
                }
            },
            {
                text: '🦌 Rally all forest creatures to your cause',
                nextScene: 'forest_army_assault',
                effects: {
                    magical: true,
                    setFlag: { beast_master: true },
                    experience: 50
                }
            },
            {
                text: '💎 Infuse Crystal Shards with nature\'s power',
                nextScene: 'nature_magic_fusion',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { nature_crystal_master: true },
                    experience: 55
                }
            }
        ]
    },

    nature_magic_fusion: {
        emojis: '🌿💎🌟',
        text: 'You successfully fuse nature magic with Crystal Shard power, creating a harmonious blend of natural and mystical energies that enhances both forms of magic exponentially.',
        choices: [
            {
                text: '🌍 Use the fusion to heal the entire realm',
                nextScene: 'realm_healing_attempt',
                effects: {
                    magical: true,
                    health: -30,
                    setFlag: { realm_fusion_healer: true },
                    experience: 75
                }
            },
            {
                text: '👹 Direct the fusion against the Shadow Lord',
                nextScene: 'final_power_surge',
                effects: {
                    magical: true,
                    setFlag: { fusion_warrior: true },
                    experience: 65
                }
            },
            {
                text: '🌟 Create a permanent source of harmony',
                nextScene: 'cooperative_restoration',
                effects: {
                    magical: true,
                    setFlag: { harmony_creator: true },
                    experience: 70
                }
            }
        ]
    },

    offensive_magic_demo: {
        emojis: '⚡🔥💥',
        text: 'You demonstrate powerful offensive magic techniques, showing devastating spells and tactical magical combat to inspire and train others in the magical arts of war.',
        choices: [
            {
                text: '🎯 Focus on precision and efficiency',
                nextScene: 'precision_trial',
                effects: {
                    magical: true,
                    setFlag: { precision_mage: true },
                    experience: 45
                }
            },
            {
                text: '💥 Showcase maximum destructive power',
                nextScene: 'complete_power_destruction',
                effects: {
                    magical: true,
                    setFlag: { destruction_master: true },
                    experience: 50
                }
            },
            {
                text: '⚔️ Integrate magic with combat techniques',
                nextScene: 'shard_empowered_combat',
                effects: {
                    magical: true,
                    setFlag: { battle_mage: true },
                    experience: 40
                }
            }
        ]
    },

    power_redirection: {
        emojis: '🔄⚡🛡️',
        text: 'You master the advanced technique of redirecting hostile magical energy, turning enemy spells against them and channeling dark magic into beneficial purposes.',
        choices: [
            {
                text: '👹 Redirect the Shadow Lord\'s own power against him',
                nextScene: 'shadow_weakness_revealed',
                effects: {
                    magical: true,
                    setFlag: { power_redirector: true },
                    experience: 60
                }
            },
            {
                text: '💎 Channel redirected power into Crystal Shards',
                nextScene: 'shard_power_unleashed',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { power_channeler: true },
                    experience: 55
                }
            },
            {
                text: '🏰 Use redirected energy to strengthen defenses',
                nextScene: 'fortress_reinforcement',
                effects: {
                    magical: true,
                    setFlag: { defensive_redirector: true },
                    experience: 45
                }
            }
        ]
    },

    power_sharing_ceremony: {
        emojis: '🤝⚡🌟',
        text: 'You conduct a sacred ceremony to share magical power among all your allies, creating bonds of magical energy that strengthen everyone and create a network of shared consciousness.',
        choices: [
            {
                text: '👥 Create permanent magical bonds',
                nextScene: 'unified_army_formed',
                effects: {
                    magical: true,
                    setFlag: { bond_creator: true },
                    experience: 65
                }
            },
            {
                text: '💎 Share Crystal Shard power with everyone',
                nextScene: 'cooperative_restoration',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { crystal_sharer: true },
                    experience: 70
                }
            },
            {
                text: '🛡️ Focus the shared power on protection',
                nextScene: 'divine_protection_granted',
                effects: {
                    magical: true,
                    setFlag: { group_protector: true },
                    experience: 55
                }
            }
        ]
    },

    power_source_destroyed: {
        emojis: '💥🏰🔥',
        text: 'You successfully destroy the primary source of the Shadow Lord\'s power, causing massive explosions and magical backlash that shakes the entire fortress to its foundations.',
        choices: [
            {
                text: '💎 Use Crystal Shards to contain the explosion',
                nextScene: 'containment_wards',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { explosion_controller: true },
                    experience: 60
                }
            },
            {
                text: '🏃‍♂️ Escape quickly before the fortress collapses',
                nextScene: 'hasty_retreat_with_shard',
                effects: {
                    health: -20,
                    setFlag: { power_destroyer: true },
                    experience: 50
                }
            },
            {
                text: '👹 Press the attack while the Shadow Lord is weakened',
                nextScene: 'final_duel',
                effects: {
                    setFlag: { opportunistic_warrior: true },
                    experience: 55
                }
            }
        ]
    },

    power_source_purification: {
        emojis: '✨🏰💚',
        text: 'Instead of destroying the Shadow Lord\'s power source, you attempt to purify it, transforming the corrupted energy into beneficial magic that could heal the realm.',
        choices: [
            {
                text: '🌟 Channel purification through Crystal Shards',
                nextScene: 'crystal_restoration_vision',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { source_purifier: true },
                    experience: 65
                }
            },
            {
                text: '🤝 Work with allies to contain the purified energy',
                nextScene: 'cooperative_restoration',
                effects: {
                    magical: true,
                    setFlag: { group_purifier: true },
                    experience: 55
                }
            },
            {
                text: '👹 Offer the purified energy to the Shadow Lord',
                nextScene: 'redemption_offered',
                effects: {
                    magical: true,
                    setFlag: { merciful_purifier: true },
                    experience: 70
                }
            }
        ]
    },

    spell_mastery: {
        emojis: '🧙‍♂️✨📚',
        text: 'You achieve complete mastery over all forms of magic, understanding the fundamental forces that govern reality itself. Your spellcasting becomes effortless and incredibly powerful.',
        choices: [
            {
                text: '🌟 Use mastery to restore the Crystal of Harmony',
                nextScene: 'cooperative_restoration',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { spell_master: true },
                    experience: 80
                }
            },
            {
                text: '👥 Teach the secrets of mastery to others',
                nextScene: 'knowledge_sharing',
                effects: {
                    magical: true,
                    setFlag: { master_teacher: true },
                    experience: 60
                }
            },
            {
                text: '🌍 Use mastery to heal the entire realm',
                nextScene: 'realm_healing_attempt',
                effects: {
                    magical: true,
                    health: -20,
                    setFlag: { realm_master: true },
                    experience: 75
                }
            }
        ]
    }
};
