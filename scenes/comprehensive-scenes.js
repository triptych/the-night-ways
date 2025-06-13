// Comprehensive remaining scenes covering multiple categories
export const COMPREHENSIVE_SCENES = {
    // Shadow Lord and Redemption scenes
    shadow_hunting: {
        emojis: '👹🏹🌙',
        text: 'You actively hunt shadow creatures and corrupt beings across the realm, using specialized techniques and weapons designed to combat the forces of darkness.',
        choices: [
            {
                text: '🏹 Use blessed arrows against shadow creatures',
                nextScene: 'wraith_hunting_spree',
                effects: {
                    setFlag: { shadow_hunter: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Track shadows using magical detection',
                nextScene: 'wraith_tracking',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_hunter: true },
                    experience: 50
                }
            },
            {
                text: '👹 Confront the Shadow Lord directly',
                nextScene: 'shadow_lord_identity',
                effects: {
                    setFlag: { direct_confronter: true },
                    experience: 60
                }
            }
        ]
    },

    shadow_lord_identity: {
        emojis: '👹🎭📜',
        text: 'You uncover the true identity of the Shadow Lord - once a noble hero who fell to corruption while trying to save the realm. This knowledge changes everything.',
        choices: [
            {
                text: '💔 Offer compassion and understanding',
                nextScene: 'redemption_offered',
                effects: {
                    setFlag: { compassionate_hero: true },
                    experience: 60
                }
            },
            {
                text: '⚔️ Accept that he must be stopped regardless',
                nextScene: 'tragic_backstory_revealed',
                effects: {
                    setFlag: { grim_determination: true },
                    experience: 50
                }
            },
            {
                text: '🔍 Investigate how the corruption began',
                nextScene: 'shadow_lord_origins',
                effects: {
                    setFlag: { truth_seeker: true },
                    experience: 45
                }
            }
        ]
    },

    shadow_lord_origins: {
        emojis: '👹📚🌅',
        text: 'You discover the Shadow Lord\'s tragic origins - how his desperate attempt to save his loved ones led him down a dark path of forbidden magic and eventual corruption.',
        choices: [
            {
                text: '💝 Try to heal his original pain',
                nextScene: 'redemption_completion',
                effects: {
                    magical: true,
                    setFlag: { soul_healer: true },
                    experience: 70
                }
            },
            {
                text: '⚖️ Show him the consequences of his choices',
                nextScene: 'shadow_lord_understanding',
                effects: {
                    setFlag: { moral_teacher: true },
                    experience: 55
                }
            },
            {
                text: '🗡️ Use this knowledge in final combat',
                nextScene: 'honorable_final_duel',
                effects: {
                    setFlag: { knowledge_warrior: true },
                    experience: 50
                }
            }
        ]
    },

    shadow_lord_observation: {
        emojis: '👁️👹🔮',
        text: 'Using divination magic, you observe the Shadow Lord\'s current activities and emotional state, gaining insights into his motivations and potential weaknesses.',
        choices: [
            {
                text: '💔 See the pain beneath his corruption',
                nextScene: 'redemption_offered',
                effects: {
                    magical: true,
                    setFlag: { empathic_observer: true },
                    experience: 55
                }
            },
            {
                text: '⚔️ Identify tactical vulnerabilities',
                nextScene: 'shadow_weakness_revealed',
                effects: {
                    magical: true,
                    setFlag: { tactical_diviner: true },
                    experience: 50
                }
            },
            {
                text: '🌟 Look for traces of his former nobility',
                nextScene: 'shadow_lord_understanding',
                effects: {
                    magical: true,
                    setFlag: { hope_seeker: true },
                    experience: 45
                }
            }
        ]
    },

    shadow_lord_understanding: {
        emojis: '🧠💡👹',
        text: 'You achieve deep understanding of the Shadow Lord\'s nature, seeing both the monster he has become and the hero he once was. This knowledge grants you new options.',
        choices: [
            {
                text: '🤝 Attempt to reach his buried humanity',
                nextScene: 'redemption_completion',
                effects: {
                    setFlag: { understanding_hero: true },
                    experience: 65
                }
            },
            {
                text: '⚡ Use understanding to predict his actions',
                nextScene: 'perfect_strike_opportunity',
                effects: {
                    setFlag: { predictive_fighter: true },
                    experience: 55
                }
            },
            {
                text: '📖 Share this understanding with others',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { wisdom_teacher: true },
                    experience: 45
                }
            }
        ]
    },

    shadow_weakness_revealed: {
        emojis: '👹💀⚡',
        text: 'You discover a critical weakness in the Shadow Lord\'s defenses - his corruption has made him vulnerable to pure magical energy, especially light and nature magic.',
        choices: [
            {
                text: '☀️ Exploit weakness with light magic',
                nextScene: 'light_based_attack',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { light_specialist: true },
                    experience: 60
                }
            },
            {
                text: '🌿 Use nature magic against corruption',
                nextScene: 'nature_essence_summoned',
                effects: {
                    magical: true,
                    setFlag: { nature_warrior: true },
                    experience: 55
                }
            },
            {
                text: '💎 Channel weakness through Crystal Shards',
                nextScene: 'shard_weapon_attack',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { strategic_crystal_user: true },
                    experience: 65
                }
            }
        ]
    },

    redemption_offered: {
        emojis: '🤝💔🌅',
        text: 'You offer the Shadow Lord a chance at redemption, showing him that even after all his crimes, the path back to the light remains open if he chooses to take it.',
        choices: [
            {
                text: '💝 Show him the love he thought he lost',
                nextScene: 'redemption_completion',
                effects: {
                    setFlag: { love_redeemer: true },
                    experience: 75
                }
            },
            {
                text: '⚖️ Demand he make amends for his crimes',
                nextScene: 'justice_maintained',
                effects: {
                    setFlag: { justice_seeker: true },
                    experience: 60
                }
            },
            {
                text: '🛡️ Offer to help him resist the corruption',
                nextScene: 'redemption_completion',
                effects: {
                    magical: true,
                    setFlag: { corruption_fighter: true },
                    experience: 70
                }
            }
        ]
    },

    redemption_completion: {
        emojis: '🌅💚🕊️',
        text: 'Against all odds, the Shadow Lord accepts redemption. The corruption begins to leave him as he remembers who he once was and chooses to fight for the light once more.',
        choices: [
            {
                text: '🤝 Welcome him as an ally in the final battle',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { redeemer_hero: true },
                    experience: 80
                }
            },
            {
                text: '💎 Help him restore the Crystal of Harmony',
                nextScene: 'cooperative_restoration',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { redemption_restorer: true },
                    experience: 85
                }
            },
            {
                text: '🌍 Work together to heal the realm',
                nextScene: 'realm_healing_mission',
                effects: {
                    magical: true,
                    setFlag: { harmony_creator: true },
                    experience: 75
                }
            }
        ]
    },

    tragic_backstory_revealed: {
        emojis: '💔📜😢',
        text: 'The full tragic story unfolds - love, loss, desperation, and the terrible choices that led a hero to become the very evil he once fought against.',
        choices: [
            {
                text: '😢 Weep for what was lost',
                nextScene: 'humble_judgment',
                effects: {
                    setFlag: { empathic_mourner: true },
                    experience: 40
                }
            },
            {
                text: '⚔️ Honor his memory through victory',
                nextScene: 'honorable_final_duel',
                effects: {
                    setFlag: { honorable_warrior: true },
                    experience: 60
                }
            },
            {
                text: '📚 Ensure his story teaches future generations',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { historian: true },
                    experience: 45
                }
            }
        ]
    },

    // Community and village scenes
    village_protection_force: {
        emojis: '🏘️🛡️👥',
        text: 'You organize village protection forces, training civilians in basic combat and establishing local defense networks to protect communities from shadow raids.',
        choices: [
            {
                text: '⚔️ Train villagers in combat basics',
                nextScene: 'militia_training',
                effects: {
                    setFlag: { village_trainer: true },
                    experience: 40
                }
            },
            {
                text: '🏰 Build village fortifications',
                nextScene: 'village_defense_organized',
                effects: {
                    setFlag: { village_architect: true },
                    experience: 45
                }
            },
            {
                text: '📡 Connect villages to warning networks',
                nextScene: 'warning_network',
                effects: {
                    setFlag: { network_organizer: true },
                    experience: 35
                }
            }
        ]
    },

    village_defense_organized: {
        emojis: '🏘️🛡️📋',
        text: 'You organize comprehensive village defenses, including watchtowers, stockpiles, escape routes, and coordination with nearby allied forces.',
        choices: [
            {
                text: '🏹 Establish archer positions',
                nextScene: 'precision_archer_corps',
                effects: {
                    setFlag: { village_archer_commander: true },
                    experience: 40
                }
            },
            {
                text: '🏰 Create evacuation procedures',
                nextScene: 'evacuation_routes_planned',
                effects: {
                    setFlag: { village_protector: true },
                    experience: 35
                }
            },
            {
                text: '👥 Form village militia units',
                nextScene: 'militia_confederation',
                effects: {
                    setFlag: { militia_organizer: true },
                    experience: 45
                }
            }
        ]
    },

    // Medical and support scenes
    medical_network_established: {
        emojis: '🏥💚🌐',
        text: 'You establish a comprehensive medical network across the realm, training healers and setting up treatment centers to care for the wounded and sick.',
        choices: [
            {
                text: '🌿 Focus on herbal and natural healing',
                nextScene: 'natural_healing_path',
                effects: {
                    setFlag: { medical_coordinator: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Integrate magical healing techniques',
                nextScene: 'magical_healing_mastery',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_medical_director: true },
                    experience: 55
                }
            },
            {
                text: '👥 Train local healers everywhere',
                nextScene: 'medical_knowledge_shared',
                effects: {
                    setFlag: { healing_teacher: true },
                    experience: 50
                }
            }
        ]
    },

    medical_knowledge_shared: {
        emojis: '📚💚👨‍⚕️',
        text: 'You share medical knowledge and healing techniques throughout the realm, training new healers and establishing standards of care that save countless lives.',
        choices: [
            {
                text: '🏥 Establish healing academies',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { medical_educator: true },
                    experience: 50
                }
            },
            {
                text: '📜 Create comprehensive medical texts',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { medical_author: true },
                    experience: 45
                }
            },
            {
                text: '🌍 Focus on battlefield medicine',
                nextScene: 'willpower_recovery',
                effects: {
                    setFlag: { combat_medic: true },
                    experience: 40
                }
            }
        ]
    },

    // High-value scenes
    realm_healing_mission: {
        emojis: '🌍💚✨',
        text: 'You undertake the ultimate mission - healing the entire realm from the corruption and damage caused by the shadow war, restoring balance to all living things.',
        choices: [
            {
                text: '💎 Use Crystal Shards to channel healing energy',
                nextScene: 'realm_healing_attempt',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { realm_healer: true },
                    experience: 100,
                    health: -40
                }
            },
            {
                text: '👥 Coordinate massive collaborative healing',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { healing_coordinator: true },
                    experience: 80
                }
            },
            {
                text: '🌿 Work with nature spirits for gradual healing',
                nextScene: 'land_restoration_project',
                effects: {
                    magical: true,
                    setFlag: { nature_healer: true },
                    experience: 70
                }
            }
        ]
    },

    realm_healing_attempt: {
        emojis: '🌍⚡💫',
        text: 'You attempt the ultimate magical feat - healing the entire corrupted realm in one massive ritual. The effort is beyond what any one person should attempt.',
        choices: [
            {
                text: '💪 Pour everything into the healing',
                nextScene: 'ultimate_sacrifice',
                effects: {
                    magical: true,
                    health: -50,
                    setFlag: { ultimate_healer: true },
                    experience: 120
                }
            },
            {
                text: '🤝 Share the burden with all your allies',
                nextScene: 'cooperative_restoration',
                effects: {
                    magical: true,
                    health: -25,
                    setFlag: { collaborative_healer: true },
                    experience: 90
                }
            },
            {
                text: '⚖️ Focus on balanced, sustainable healing',
                nextScene: 'peaceful_resolution',
                effects: {
                    magical: true,
                    health: -15,
                    setFlag: { wise_healer: true },
                    experience: 70
                }
            }
        ]
    },

    unified_army_formed: {
        emojis: '⚔️🤝🌟',
        text: 'You successfully unite all the forces of light - humans, elves, dwarves, forest creatures, and even redeemed shadow beings - into one magnificent army.',
        choices: [
            {
                text: '⚔️ Lead the unified army to final victory',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    setFlag: { supreme_commander: true },
                    experience: 80
                }
            },
            {
                text: '🕊️ Use the army\'s power to enforce peace',
                nextScene: 'peaceful_resolution',
                effects: {
                    setFlag: { peace_enforcer: true },
                    experience: 70
                }
            },
            {
                text: '🌍 Direct the army toward realm restoration',
                nextScene: 'land_restoration_project',
                effects: {
                    setFlag: { restoration_general: true },
                    experience: 75
                }
            }
        ]
    },

    peaceful_resolution: {
        emojis: '🕊️🤝🌅',
        text: 'Through wisdom, compassion, and careful diplomacy, you achieve what seemed impossible - a peaceful resolution that ends the conflict without more bloodshed.',
        choices: [
            {
                text: '🌍 Focus on rebuilding the realm',
                nextScene: 'land_restoration_project',
                effects: {
                    setFlag: { peace_builder: true },
                    experience: 90
                }
            },
            {
                text: '📚 Document the path to peace for others',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { peace_teacher: true },
                    experience: 70
                }
            },
            {
                text: '👑 Accept responsibility as the realm\'s leader',
                nextScene: 'co_ruler_offer',
                effects: {
                    setFlag: { peaceful_ruler: true },
                    experience: 80
                }
            }
        ]
    }
};
