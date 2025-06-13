// Combat and battle-related scenes
export const COMBAT_SCENES = {
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

    // Village defense scenes
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

    // Fortress battles
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

    // Combat aftermath
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
    }
};
