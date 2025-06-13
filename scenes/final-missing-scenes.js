// Final comprehensive scene file covering remaining missing scenes
export const FINAL_MISSING_SCENES = {
    // Knowledge and wisdom scenes
    knowledge_documentation: {
        emojis: '📚✍️🌟',
        text: 'You carefully document all the knowledge and wisdom gained during your adventures, creating comprehensive texts that will educate and inspire future generations of heroes and scholars.',
        choices: [
            {
                text: '📖 Focus on magical theory and Crystal Shard lore',
                nextScene: 'magical_theory_research',
                effects: {
                    setFlag: { magical_scholar: true },
                    experience: 60
                }
            },
            {
                text: '⚔️ Document combat techniques and strategies',
                nextScene: 'tactical_manual_created',
                effects: {
                    setFlag: { military_historian: true },
                    experience: 55
                }
            },
            {
                text: '🏫 Establish schools to teach your knowledge',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { educator: true },
                    experience: 65
                }
            }
        ]
    },

    knowledge_sharing: {
        emojis: '👨‍🏫📚👥',
        text: 'You establish schools and academies throughout the realm, sharing your knowledge with eager students and ensuring that hard-won wisdom is preserved for future generations.',
        choices: [
            {
                text: '🔮 Focus on magical education and training',
                nextScene: 'magic_teaching',
                effects: {
                    setFlag: { magic_educator: true },
                    experience: 50
                }
            },
            {
                text: '⚔️ Train the next generation of heroes',
                nextScene: 'heroic_code_created',
                effects: {
                    setFlag: { hero_trainer: true },
                    experience: 55
                }
            },
            {
                text: '🌍 Share knowledge about healing and restoration',
                nextScene: 'medical_knowledge_shared',
                effects: {
                    setFlag: { wisdom_healer: true },
                    experience: 45
                }
            }
        ]
    },

    // Crystal Shard specialized scenes
    shard_empowered_combat: {
        emojis: '💎⚔️⚡',
        text: 'Drawing power from the Crystal Shards, you enter combat with enhanced abilities. The shards amplify your strength, speed, and magical prowess to superhuman levels.',
        choices: [
            {
                text: '⚡ Unleash devastating magical attacks',
                nextScene: 'shard_power_unleashed',
                effects: {
                    magical: true,
                    setFlag: { shard_warrior: true },
                    experience: 70
                }
            },
            {
                text: '🛡️ Create impenetrable crystal barriers',
                nextScene: 'divine_protection_granted',
                effects: {
                    magical: true,
                    setFlag: { crystal_defender: true },
                    experience: 60
                }
            },
            {
                text: '🌟 Share crystal power with all allies',
                nextScene: 'power_sharing_ceremony',
                effects: {
                    magical: true,
                    setFlag: { crystal_sharer: true },
                    experience: 65
                }
            }
        ]
    },

    shard_power_unleashed: {
        emojis: '💎💥⚡',
        text: 'You unleash the full, unbridled power of the Crystal Shards. The energy is overwhelming, capable of reshaping reality itself, but dangerous beyond measure.',
        choices: [
            {
                text: '🌍 Direct all power toward healing the realm',
                nextScene: 'realm_healing_attempt',
                effects: {
                    magical: true,
                    health: -30,
                    setFlag: { shard_healer: true },
                    experience: 100
                }
            },
            {
                text: '👹 Focus the power against the Shadow Lord',
                nextScene: 'final_power_surge',
                effects: {
                    magical: true,
                    health: -25,
                    setFlag: { shard_destroyer: true },
                    experience: 85
                }
            },
            {
                text: '⚖️ Carefully control and stabilize the power',
                nextScene: 'shard_harmony_practice',
                effects: {
                    magical: true,
                    setFlag: { shard_master: true },
                    experience: 75
                }
            }
        ]
    },

    shard_harmony_practice: {
        emojis: '💎🎵⚖️',
        text: 'You practice harmonizing the different Crystal Shards, learning to balance their conflicting energies and create stable, controlled magical effects.',
        choices: [
            {
                text: '🔬 Perfect the scientific approach to harmony',
                nextScene: 'crystal_creation_knowledge',
                effects: {
                    magical: true,
                    setFlag: { harmony_scientist: true },
                    experience: 60
                }
            },
            {
                text: '🎵 Use intuitive, musical harmony principles',
                nextScene: 'cooperative_restoration',
                effects: {
                    magical: true,
                    setFlag: { harmony_artist: true },
                    experience: 55
                }
            },
            {
                text: '👥 Teach harmony techniques to others',
                nextScene: 'knowledge_sharing',
                effects: {
                    magical: true,
                    setFlag: { harmony_teacher: true },
                    experience: 50
                }
            }
        ]
    },

    shard_secured: {
        emojis: '💎🛡️✅',
        text: 'You successfully secure a Crystal Shard, protecting it from enemy forces and ensuring it can be used for the restoration of harmony. The shard pulses with grateful energy.',
        choices: [
            {
                text: '🏰 Take the shard to a secure location',
                nextScene: 'stronghold_consolidation',
                effects: {
                    addItem: '💎',
                    setFlag: { shard_protector: true },
                    experience: 40
                }
            },
            {
                text: '🔮 Study the shard\'s unique properties',
                nextScene: 'shard_experimentation',
                effects: {
                    addItem: '💎',
                    setFlag: { shard_researcher: true },
                    experience: 45
                }
            },
            {
                text: '🤝 Share the shard\'s power with allies',
                nextScene: 'power_sharing_ceremony',
                effects: {
                    addItem: '💎',
                    magical: true,
                    setFlag: { shard_sharer: true },
                    experience: 50
                }
            }
        ]
    },

    shard_locations_revealed: {
        emojis: '💎🗺️✨',
        text: 'Through divination, research, or ancient knowledge, you discover the exact locations of all remaining Crystal Shards. The path to complete restoration becomes clear.',
        choices: [
            {
                text: '🏃‍♂️ Race to collect the shards before enemies do',
                nextScene: 'systematic_shard_search',
                effects: {
                    setFlag: { shard_seeker: true },
                    experience: 50
                }
            },
            {
                text: '👥 Coordinate allied teams to secure all shards',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { shard_coordinator: true },
                    experience: 55
                }
            },
            {
                text: '🔮 Use the knowledge to set up magical defenses',
                nextScene: 'containment_wards',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { shard_defender: true },
                    experience: 45
                }
            }
        ]
    },

    // Community and political scenes
    co_ruler_offer: {
        emojis: '👑🤝⚖️',
        text: 'The people offer you the chance to rule alongside the rightful monarch, recognizing your wisdom and heroism. You could help guide the realm toward a better future.',
        choices: [
            {
                text: '👑 Accept the responsibility of leadership',
                nextScene: 'kingdom_alliance',
                effects: {
                    setFlag: { co_ruler: true },
                    experience: 80
                }
            },
            {
                text: '🎓 Decline but offer to serve as advisor',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { royal_advisor: true },
                    experience: 60
                }
            },
            {
                text: '🌍 Focus on helping rebuild the realm instead',
                nextScene: 'land_restoration_project',
                effects: {
                    setFlag: { realm_rebuilder: true },
                    experience: 70
                }
            }
        ]
    },

    kingdom_alliance: {
        emojis: '🏰🤝👑',
        text: 'You form a powerful alliance with the kingdom, combining your heroic reputation with royal authority to create a force for good that can reshape the realm.',
        choices: [
            {
                text: '⚔️ Focus on military protection and security',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { military_ally: true },
                    experience: 60
                }
            },
            {
                text: '🏛️ Work on rebuilding institutions and justice',
                nextScene: 'justice_maintained',
                effects: {
                    setFlag: { institutional_reformer: true },
                    experience: 65
                }
            },
            {
                text: '🌱 Concentrate on healing and restoration',
                nextScene: 'land_restoration_project',
                effects: {
                    setFlag: { restoration_ally: true },
                    experience: 70
                }
            }
        ]
    },

    kingdom_defense: {
        emojis: '🏰🛡️⚔️',
        text: 'You organize the kingdom\'s defenses, coordinating military forces, fortifications, and magical protections to create an impregnable bastion against the forces of darkness.',
        choices: [
            {
                text: '🏰 Focus on strengthening physical fortifications',
                nextScene: 'layered_defense',
                effects: {
                    setFlag: { fortress_commander: true },
                    experience: 50
                }
            },
            {
                text: '⚔️ Train and organize the military forces',
                nextScene: 'guard_training_program',
                effects: {
                    setFlag: { military_trainer: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Install magical protective systems',
                nextScene: 'castle_ward_creation',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_defender: true },
                    experience: 55
                }
            }
        ]
    },

    justice_maintained: {
        emojis: '⚖️👑🕊️',
        text: 'You work to establish and maintain a fair system of justice throughout the realm, ensuring that both mercy and accountability guide all decisions.',
        choices: [
            {
                text: '📚 Create comprehensive legal codes',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { lawgiver: true },
                    experience: 60
                }
            },
            {
                text: '👥 Train judges and peacekeepers',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { justice_teacher: true },
                    experience: 55
                }
            },
            {
                text: '🕊️ Focus on restorative rather than punitive justice',
                nextScene: 'peaceful_resolution',
                effects: {
                    setFlag: { restorative_justice: true },
                    experience: 65
                }
            }
        ]
    },

    justice_battle: {
        emojis: '⚖️⚔️🔥',
        text: 'You fight not just with weapons, but with the righteous force of justice itself. Your cause is so pure that it seems to strengthen your every blow and protect you from harm.',
        choices: [
            {
                text: '⚡ Let justice guide your magical power',
                nextScene: 'divine_empowerment',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { justice_mage: true },
                    experience: 65
                }
            },
            {
                text: '⚔️ Channel justice into perfect combat',
                nextScene: 'skill_based_duel',
                effects: {
                    setFlag: { justice_warrior: true },
                    experience: 60
                }
            },
            {
                text: '👥 Inspire others to fight for justice',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    setFlag: { justice_leader: true },
                    experience: 70
                }
            }
        ]
    },

    // Combat specialization scenes
    skill_based_duel: {
        emojis: '⚔️🎯💪',
        text: 'You engage in a duel where pure skill, technique, and training matter more than magical power or divine favor. This is a test of everything you\'ve learned about combat.',
        choices: [
            {
                text: '🗡️ Rely on sword technique and footwork',
                nextScene: 'precision_trial',
                effects: {
                    setFlag: { master_duelist: true },
                    experience: 55
                }
            },
            {
                text: '🏹 Use archery skills in close combat',
                nextScene: 'trick_shot',
                conditions: { playerClass: 'archer' },
                effects: {
                    setFlag: { combat_archer: true },
                    experience: 50
                }
            },
            {
                text: '🧠 Outthink your opponent tactically',
                nextScene: 'tactical_victory',
                effects: {
                    setFlag: { tactical_duelist: true },
                    experience: 60
                }
            }
        ]
    },

    precision_trial: {
        emojis: '🎯⚡🏹',
        text: 'You face a test of ultimate precision, where only perfect accuracy and flawless technique will succeed. Every movement must be exact, every strike perfectly placed.',
        choices: [
            {
                text: '🏹 Demonstrate perfect archery precision',
                nextScene: 'perfect_strike_opportunity',
                conditions: { playerClass: 'archer' },
                effects: {
                    setFlag: { precision_master: true },
                    experience: 65
                }
            },
            {
                text: '⚔️ Show perfect sword technique',
                nextScene: 'tactical_victory',
                effects: {
                    setFlag: { blade_master: true },
                    experience: 60
                }
            },
            {
                text: '🔮 Apply precision to magical casting',
                nextScene: 'spell_mastery',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { precision_mage: true },
                    experience: 65
                }
            }
        ]
    },

    perfect_strike_opportunity: {
        emojis: '🎯💥⚡',
        text: 'A perfect moment presents itself - one precise strike could end the conflict decisively. All your training and experience converge on this single, crucial moment.',
        choices: [
            {
                text: '🏹 Take the perfect shot with supreme confidence',
                nextScene: 'victory_skill',
                effects: {
                    setFlag: { perfect_striker: true },
                    experience: 80
                }
            },
            {
                text: '🤝 Create an opportunity for an ally instead',
                nextScene: 'tactical_victory',
                effects: {
                    setFlag: { selfless_tactician: true },
                    experience: 70
                }
            },
            {
                text: '💎 Enhance the strike with Crystal Shard power',
                nextScene: 'shard_weapon_attack',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { empowered_striker: true },
                    experience: 85
                }
            }
        ]
    },

    shard_weapon_attack: {
        emojis: '💎⚔️⚡',
        text: 'You channel Crystal Shard energy through your weapon, creating a devastating attack that combines physical prowess with pure magical power.',
        choices: [
            {
                text: '💥 Unleash maximum destructive power',
                nextScene: 'complete_power_destruction',
                effects: {
                    magical: true,
                    setFlag: { shard_destroyer: true },
                    experience: 75
                }
            },
            {
                text: '✨ Focus on purification rather than destruction',
                nextScene: 'shard_purification',
                effects: {
                    magical: true,
                    setFlag: { purifying_warrior: true },
                    experience: 70
                }
            },
            {
                text: '🛡️ Use the attack to protect others',
                nextScene: 'divine_protection_granted',
                effects: {
                    magical: true,
                    setFlag: { protective_striker: true },
                    experience: 65
                }
            }
        ]
    },

    shard_purification: {
        emojis: '💎✨🌟',
        text: 'Instead of using the Crystal Shard for destruction, you focus its power on purification, cleansing corruption and darkness wherever it touches.',
        choices: [
            {
                text: '👹 Purify the Shadow Lord himself',
                nextScene: 'redemption_completion',
                effects: {
                    magical: true,
                    setFlag: { ultimate_purifier: true },
                    experience: 100
                }
            },
            {
                text: '🌍 Purify the corrupted lands',
                nextScene: 'land_restoration_project',
                effects: {
                    magical: true,
                    setFlag: { land_purifier: true },
                    experience: 80
                }
            },
            {
                text: '👥 Purify corruption in all affected people',
                nextScene: 'mass_prisoner_liberation',
                effects: {
                    magical: true,
                    setFlag: { people_purifier: true },
                    experience: 75
                }
            }
        ]
    }
};
