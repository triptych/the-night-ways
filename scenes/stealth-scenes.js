// Stealth, infiltration, and covert operation scenes
export const STEALTH_SCENES = {
    stealth_retrieval: {
        emojis: '🤫💎🏃‍♂️',
        text: 'Using stealth and cunning, you infiltrate enemy territory to retrieve crucial items or information without alerting the guards. Every shadow could hide danger or opportunity.',
        choices: [
            {
                text: '💎 Focus on retrieving Crystal Shards',
                nextScene: 'shard_secured',
                effects: {
                    addItem: '💎',
                    setFlag: { stealth_master: true },
                    experience: 45
                }
            },
            {
                text: '📚 Steal important intelligence documents',
                nextScene: 'intelligence_report',
                effects: {
                    setFlag: { spy_master: true },
                    experience: 40
                }
            },
            {
                text: '👥 Rescue captured allies quietly',
                nextScene: 'silent_rescue',
                effects: {
                    setFlag: { rescue_specialist: true },
                    experience: 50
                }
            }
        ]
    },

    stealth_theft: {
        emojis: '🤫💰🗝️',
        text: 'You employ advanced thievery skills to steal crucial resources from enemy strongholds, including weapons, magical components, and strategic supplies.',
        choices: [
            {
                text: '⚔️ Steal weapons and military equipment',
                nextScene: 'supplies_received',
                effects: {
                    addItem: '⚔️',
                    setFlag: { master_thief: true },
                    experience: 40
                }
            },
            {
                text: '🔮 Steal magical components and artifacts',
                nextScene: 'magical_component_gathering',
                effects: {
                    setFlag: { magical_thief: true },
                    experience: 45
                }
            },
            {
                text: '🗝️ Steal keys and security information',
                nextScene: 'hidden_passage',
                effects: {
                    setFlag: { infiltration_expert: true },
                    experience: 35
                }
            }
        ]
    },

    stealthy_withdrawal: {
        emojis: '🤫🏃‍♂️💨',
        text: 'You execute a masterful stealthy withdrawal, escaping from dangerous situations without alerting enemies to your presence or intentions.',
        choices: [
            {
                text: '🤫 Remain completely undetected',
                nextScene: 'stealth_retrieval',
                effects: {
                    setFlag: { ghost_operative: true },
                    experience: 45
                }
            },
            {
                text: '📊 Gather intelligence during withdrawal',
                nextScene: 'enemy_tracking',
                effects: {
                    setFlag: { intelligence_operative: true },
                    experience: 40
                }
            },
            {
                text: '💣 Plant sabotage devices while escaping',
                nextScene: 'delayed_sabotage',
                effects: {
                    setFlag: { sabotage_specialist: true },
                    experience: 50
                }
            }
        ]
    },

    strategic_withdrawal: {
        emojis: '🧠🏃‍♂️⚖️',
        text: 'You conduct a carefully planned strategic withdrawal, preserving your forces while maintaining tactical options for future engagements.',
        choices: [
            {
                text: '🏰 Withdraw to prepared defensive positions',
                nextScene: 'fortified_position',
                effects: {
                    setFlag: { strategic_commander: true },
                    experience: 40
                }
            },
            {
                text: '🗺️ Plan counter-attack routes during withdrawal',
                nextScene: 'counter_attack_planning',
                effects: {
                    setFlag: { tactical_planner: true },
                    experience: 45
                }
            },
            {
                text: '👥 Coordinate with allied forces',
                nextScene: 'stronghold_regrouping',
                effects: {
                    setFlag: { withdrawal_coordinator: true },
                    experience: 35
                }
            }
        ]
    },

    silent_rescue: {
        emojis: '🤫👥🆘',
        text: 'You infiltrate enemy prison facilities and rescue captured allies without raising any alarms, requiring perfect timing and absolute silence.',
        choices: [
            {
                text: '👥 Rescue all prisoners in a mass operation',
                nextScene: 'mass_prisoner_liberation',
                effects: {
                    setFlag: { mass_liberator: true },
                    experience: 60
                }
            },
            {
                text: '🗝️ Focus on high-value target rescues',
                nextScene: 'protected_extraction',
                effects: {
                    setFlag: { elite_rescuer: true },
                    experience: 50
                }
            },
            {
                text: '🤫 Maintain stealth for future operations',
                nextScene: 'stealthy_withdrawal',
                effects: {
                    setFlag: { stealth_rescuer: true },
                    experience: 45
                }
            }
        ]
    },

    speed_route: {
        emojis: '💨🛤️⚡',
        text: 'You discover and utilize the fastest possible routes through dangerous territory, using your knowledge of terrain and timing to move with incredible speed.',
        choices: [
            {
                text: '🏃‍♂️ Race to deliver urgent messages',
                nextScene: 'warning_spread',
                effects: {
                    setFlag: { speed_messenger: true },
                    experience: 35
                }
            },
            {
                text: '⚡ Lead rapid response teams',
                nextScene: 'rapid_response_formed',
                effects: {
                    setFlag: { rapid_leader: true },
                    experience: 40
                }
            },
            {
                text: '💎 Use speed for quick shard retrieval',
                nextScene: 'hasty_retreat_with_shard',
                effects: {
                    setFlag: { speed_retriever: true },
                    experience: 45
                }
            }
        ]
    },

    hasty_retreat_with_shard: {
        emojis: '🏃‍♂️💎💨',
        text: 'With a Crystal Shard in hand, you make a desperate escape from collapsing enemy strongholds or overwhelming forces, racing against time to bring the shard to safety.',
        choices: [
            {
                text: '💎 Protect the shard at all costs',
                nextScene: 'shard_secured',
                effects: {
                    addItem: '💎',
                    health: -15,
                    setFlag: { shard_guardian: true },
                    experience: 50
                }
            },
            {
                text: '🤝 Rally allies to cover your escape',
                nextScene: 'rear_guard_action',
                effects: {
                    setFlag: { escape_coordinator: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Use the shard\'s power to aid escape',
                nextScene: 'shard_empowered_combat',
                effects: {
                    magical: true,
                    setFlag: { combat_escapist: true },
                    experience: 55
                }
            }
        ]
    },

    risky_extraction: {
        emojis: '⚠️🎯🏃‍♂️',
        text: 'You attempt a high-risk extraction operation in heavily defended territory, where the rewards are great but the chances of detection and combat are extremely high.',
        choices: [
            {
                text: '💎 Go for the most valuable Crystal Shard',
                nextScene: 'shard_escape_attempt',
                effects: {
                    health: -20,
                    setFlag: { high_risk_operative: true },
                    experience: 60
                }
            },
            {
                text: '👥 Extract multiple high-value targets',
                nextScene: 'mass_prisoner_liberation',
                effects: {
                    health: -15,
                    setFlag: { extraction_specialist: true },
                    experience: 55
                }
            },
            {
                text: '📚 Extract crucial intelligence',
                nextScene: 'intelligence_report',
                effects: {
                    health: -10,
                    setFlag: { intel_specialist: true },
                    experience: 45
                }
            }
        ]
    },

    protected_extraction: {
        emojis: '🛡️👥🚁',
        text: 'You organize a well-protected extraction operation, using multiple layers of security and backup plans to ensure the safe recovery of important people or items.',
        choices: [
            {
                text: '👑 Extract VIP targets with full protection',
                nextScene: 'stronghold_consolidation',
                effects: {
                    setFlag: { vip_protector: true },
                    experience: 50
                }
            },
            {
                text: '💎 Secure Crystal Shard extraction',
                nextScene: 'shard_secured',
                effects: {
                    addItem: '💎',
                    setFlag: { secure_retriever: true },
                    experience: 45
                }
            },
            {
                text: '📦 Extract valuable supplies and equipment',
                nextScene: 'supplies_received',
                effects: {
                    addItem: '⚔️',
                    setFlag: { supply_specialist: true },
                    experience: 40
                }
            }
        ]
    },

    exhausted_advance: {
        emojis: '😴⚔️💪',
        text: 'Despite being magically drained and physically exhausted, you push forward through sheer determination, continuing your mission when others would collapse.',
        choices: [
            {
                text: '💪 Draw on inner reserves of strength',
                nextScene: 'willpower_recovery',
                effects: {
                    health: 10,
                    setFlag: { iron_determination: true },
                    experience: 40
                }
            },
            {
                text: '⚔️ Channel exhaustion into focused rage',
                nextScene: 'rage_driven_assault',
                effects: {
                    setFlag: { exhausted_berserker: true },
                    experience: 45
                }
            },
            {
                text: '🧘‍♂️ Find strength through meditation',
                nextScene: 'meditation_recovery',
                effects: {
                    health: 15,
                    magical: true,
                    setFlag: { meditative_warrior: true },
                    experience: 35
                }
            }
        ]
    },

    route_planning: {
        emojis: '🗺️📋🧭',
        text: 'You meticulously plan optimal routes for various operations, considering terrain, enemy positions, weather, and timing to maximize success chances.',
        choices: [
            {
                text: '🛡️ Plan defensive evacuation routes',
                nextScene: 'evacuation_routes_planned',
                effects: {
                    setFlag: { route_planner: true },
                    experience: 35
                }
            },
            {
                text: '⚔️ Design offensive assault corridors',
                nextScene: 'tactical_repositioning',
                effects: {
                    setFlag: { assault_planner: true },
                    experience: 40
                }
            },
            {
                text: '🤫 Create stealth infiltration paths',
                nextScene: 'stealth_retrieval',
                effects: {
                    setFlag: { infiltration_planner: true },
                    experience: 45
                }
            }
        ]
    },

    evacuation_routes_planned: {
        emojis: '🏃‍♂️🗺️🚨',
        text: 'You design comprehensive evacuation routes for civilians and military personnel, ensuring multiple safe paths away from danger zones with adequate supplies and protection.',
        choices: [
            {
                text: '👥 Focus on civilian evacuation safety',
                nextScene: 'refugee_settlement',
                effects: {
                    setFlag: { civilian_protector: true },
                    experience: 40
                }
            },
            {
                text: '⚔️ Plan military tactical withdrawals',
                nextScene: 'strategic_withdrawal',
                effects: {
                    setFlag: { military_planner: true },
                    experience: 45
                }
            },
            {
                text: '🏥 Establish medical evacuation protocols',
                nextScene: 'medical_network_established',
                effects: {
                    setFlag: { medical_evacuator: true },
                    experience: 35
                }
            }
        ]
    },

    evacuation_leadership: {
        emojis: '👨‍💼🚨👥',
        text: 'You take charge of large-scale evacuation operations, coordinating the safe movement of hundreds of people away from danger zones while maintaining order and morale.',
        choices: [
            {
                text: '🏰 Lead evacuation to secure strongholds',
                nextScene: 'stronghold_consolidation',
                effects: {
                    setFlag: { evacuation_commander: true },
                    experience: 50
                }
            },
            {
                text: '🌲 Guide people to forest sanctuaries',
                nextScene: 'forest_bond_permanent',
                effects: {
                    setFlag: { wilderness_guide: true },
                    experience: 45
                }
            },
            {
                text: '🛡️ Provide rear guard protection during evacuation',
                nextScene: 'rear_guard_action',
                effects: {
                    health: -20,
                    setFlag: { selfless_protector: true },
                    experience: 55
                }
            }
        ]
    },

    seeking_battle: {
        emojis: '⚔️🔍💥',
        text: 'Driven by righteous fury or tactical necessity, you actively seek out enemy forces to engage in combat, taking the fight directly to shadow creatures and their masters.',
        choices: [
            {
                text: '👹 Hunt down high-priority shadow targets',
                nextScene: 'shadow_hunting',
                effects: {
                    setFlag: { shadow_hunter: true },
                    experience: 50
                }
            },
            {
                text: '🏰 Assault enemy strongholds directly',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    health: -15,
                    setFlag: { direct_assault_leader: true },
                    experience: 45
                }
            },
            {
                text: '🎯 Target enemy supply lines and support',
                nextScene: 'weakness_exploitation',
                effects: {
                    setFlag: { tactical_disruptor: true },
                    experience: 40
                }
            }
        ]
    }
};
