// Tactical, military, and strategic scenes
export const TACTICAL_SCENES = {
    counter_attack_planned: {
        emojis: '🗺️⚔️📊',
        text: 'You carefully plan a counter-attack against shadow forces, analyzing their weaknesses and coordinating a multi-pronged assault designed to reclaim lost territory and rescue trapped allies.',
        choices: [
            {
                text: '⚔️ Lead a direct frontal assault',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    setFlag: { counter_attack_leader: true },
                    experience: 45
                }
            },
            {
                text: '🎯 Coordinate simultaneous strikes',
                nextScene: 'tactical_command',
                effects: {
                    setFlag: { master_strategist: true },
                    experience: 50
                }
            },
            {
                text: '🤫 Use stealth and surprise tactics',
                nextScene: 'surprise_attack',
                effects: {
                    setFlag: { stealth_commander: true },
                    experience: 40
                }
            }
        ]
    },

    counter_attack_planning: {
        emojis: '📋⚔️🧠',
        text: 'You organize a comprehensive counter-attack strategy, bringing together military leaders, scouts, and magical advisors to plan the most effective response to enemy advances.',
        choices: [
            {
                text: '🏰 Focus on defensive counter-strikes',
                nextScene: 'defensive_duel_strategy',
                effects: {
                    setFlag: { defensive_strategist: true },
                    experience: 40
                }
            },
            {
                text: '⚡ Plan rapid offensive operations',
                nextScene: 'offensive_training',
                effects: {
                    setFlag: { offensive_planner: true },
                    experience: 45
                }
            },
            {
                text: '👥 Coordinate multiple allied forces',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { alliance_coordinator: true },
                    experience: 50
                }
            }
        ]
    },

    defensive_duel_strategy: {
        emojis: '🛡️⚔️🧠',
        text: 'You develop advanced defensive dueling strategies, teaching fighters how to turn enemy aggression against them while maintaining strong protective stances.',
        choices: [
            {
                text: '🛡️ Master shield-based defensive techniques',
                nextScene: 'shield_combat_tactics',
                effects: {
                    setFlag: { shield_master: true },
                    experience: 40
                }
            },
            {
                text: '⚖️ Perfect counter-attack timing',
                nextScene: 'pattern_exploitation',
                effects: {
                    setFlag: { counter_master: true },
                    experience: 45
                }
            },
            {
                text: '👥 Teach defensive strategies to others',
                nextScene: 'guard_training_program',
                effects: {
                    setFlag: { defensive_instructor: true },
                    experience: 35
                }
            }
        ]
    },

    defensive_routes_mapped: {
        emojis: '🗺️🛡️🏰',
        text: 'You complete detailed mapping of all defensive routes and positions across the realm, creating a comprehensive guide for military movements and strategic positioning.',
        choices: [
            {
                text: '🏰 Establish permanent defensive checkpoints',
                nextScene: 'layered_defense',
                effects: {
                    setFlag: { route_master: true },
                    experience: 40
                }
            },
            {
                text: '📡 Set up communication networks along routes',
                nextScene: 'warning_network',
                effects: {
                    setFlag: { communication_network: true },
                    experience: 35
                }
            },
            {
                text: '⚡ Create rapid response protocols',
                nextScene: 'rapid_response_formed',
                effects: {
                    setFlag: { rapid_deployment: true },
                    experience: 45
                }
            }
        ]
    },

    delayed_sabotage: {
        emojis: '💣⏰🤫',
        text: 'You plant delayed sabotage devices throughout enemy positions, timing them to activate during critical moments to maximize disruption and confusion among shadow forces.',
        choices: [
            {
                text: '💥 Target enemy weapon supplies',
                nextScene: 'supplies_received',
                effects: {
                    setFlag: { saboteur: true },
                    experience: 40
                }
            },
            {
                text: '🏰 Sabotage fortress structural supports',
                nextScene: 'fortress_reinforcement',
                effects: {
                    setFlag: { structural_saboteur: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Disrupt magical power sources',
                nextScene: 'power_source_destroyed',
                effects: {
                    setFlag: { magical_saboteur: true },
                    experience: 50
                }
            }
        ]
    },

    enemy_positions_mapped: {
        emojis: '👹🗺️📍',
        text: 'Through careful reconnaissance, you create detailed maps of all enemy positions, patrol routes, and defensive installations. This intelligence proves invaluable for planning attacks.',
        choices: [
            {
                text: '🎯 Plan targeted strikes on weak points',
                nextScene: 'weakness_exploitation',
                effects: {
                    setFlag: { enemy_intelligence: true },
                    experience: 45
                }
            },
            {
                text: '🤫 Plan stealth infiltration routes',
                nextScene: 'stealth_retrieval',
                effects: {
                    setFlag: { infiltration_planner: true },
                    experience: 40
                }
            },
            {
                text: '👥 Share intelligence with allied forces',
                nextScene: 'intelligence_report',
                effects: {
                    setFlag: { intelligence_coordinator: true },
                    experience: 35
                }
            }
        ]
    },

    enemy_tracking: {
        emojis: '👁️👹🔍',
        text: 'You establish systems to track enemy movements across the realm, using scouts, magical surveillance, and informant networks to monitor shadow force activities.',
        choices: [
            {
                text: '🔮 Use magical scrying for surveillance',
                nextScene: 'magical_reconnaissance',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_tracker: true },
                    experience: 45
                }
            },
            {
                text: '👥 Recruit and train scout networks',
                nextScene: 'informant_network',
                effects: {
                    setFlag: { spy_master: true },
                    experience: 40
                }
            },
            {
                text: '📊 Analyze enemy movement patterns',
                nextScene: 'pattern_exploitation',
                effects: {
                    setFlag: { pattern_analyst: true },
                    experience: 35
                }
            }
        ]
    },

    informant_network: {
        emojis: '🕵️👥📡',
        text: 'You establish a comprehensive network of informants and spies throughout enemy territory, gathering crucial intelligence about shadow force plans and weaknesses.',
        choices: [
            {
                text: '📊 Focus on gathering strategic intelligence',
                nextScene: 'intelligence_report',
                effects: {
                    setFlag: { intelligence_master: true },
                    experience: 45
                }
            },
            {
                text: '💣 Use informants for sabotage operations',
                nextScene: 'delayed_sabotage',
                effects: {
                    setFlag: { sabotage_coordinator: true },
                    experience: 50
                }
            },
            {
                text: '🚨 Create early warning systems',
                nextScene: 'warning_network',
                effects: {
                    setFlag: { warning_coordinator: true },
                    experience: 40
                }
            }
        ]
    },

    intelligence_report: {
        emojis: '📊📋🧠',
        text: 'You compile and analyze all gathered intelligence into comprehensive reports that reveal enemy strengths, weaknesses, and strategic opportunities for your forces.',
        choices: [
            {
                text: '⚔️ Use intelligence to plan precise strikes',
                nextScene: 'weakness_exploitation',
                effects: {
                    setFlag: { intelligence_strategist: true },
                    experience: 50
                }
            },
            {
                text: '👥 Share findings with all allied commanders',
                nextScene: 'tactical_command',
                effects: {
                    setFlag: { intelligence_coordinator: true },
                    experience: 45
                }
            },
            {
                text: '🏰 Adjust defensive strategies based on intel',
                nextScene: 'integrated_defense',
                effects: {
                    setFlag: { adaptive_defender: true },
                    experience: 40
                }
            }
        ]
    },

    integrated_defense: {
        emojis: '🛡️🔗🏰',
        text: 'You create an integrated defense system that coordinates archers, knights, wizards, and siege equipment into a unified defensive force greater than the sum of its parts.',
        choices: [
            {
                text: '🏹 Optimize archer positioning and coverage',
                nextScene: 'precision_archer_corps',
                effects: {
                    setFlag: { integrated_archery: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Coordinate magical and mundane defenses',
                nextScene: 'layered_defense',
                effects: {
                    setFlag: { magical_integration: true },
                    experience: 50
                }
            },
            {
                text: '⚡ Create rapid response capabilities',
                nextScene: 'rapid_response_formed',
                effects: {
                    setFlag: { response_coordinator: true },
                    experience: 40
                }
            }
        ]
    },

    layered_defense: {
        emojis: '🛡️🛡️🛡️',
        text: 'You establish multiple layers of defense, each designed to slow, weaken, and channel enemy forces into increasingly difficult positions where they can be eliminated.',
        choices: [
            {
                text: '🏰 Create concentric defensive rings',
                nextScene: 'fortress_reinforcement',
                effects: {
                    setFlag: { fortress_designer: true },
                    experience: 50
                }
            },
            {
                text: '🪤 Install trap networks between layers',
                nextScene: 'trap_defenses',
                effects: {
                    setFlag: { trap_master: true },
                    experience: 45
                }
            },
            {
                text: '👥 Train defenders in layered tactics',
                nextScene: 'guard_training_program',
                effects: {
                    setFlag: { layered_trainer: true },
                    experience: 40
                }
            }
        ]
    },

    offensive_training: {
        emojis: '⚔️💪🎯',
        text: 'You establish intensive offensive training programs, teaching advanced combat techniques, aggressive tactics, and coordinated assault strategies to transform defenders into attackers.',
        choices: [
            {
                text: '⚔️ Focus on individual combat excellence',
                nextScene: 'skill_based_duel',
                effects: {
                    setFlag: { combat_trainer: true },
                    experience: 40
                }
            },
            {
                text: '👥 Develop team assault tactics',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    setFlag: { assault_coordinator: true },
                    experience: 45
                }
            },
            {
                text: '🏰 Train in siege warfare techniques',
                nextScene: 'fortress_architect',
                effects: {
                    setFlag: { siege_trainer: true },
                    experience: 50
                }
            }
        ]
    },

    precision_archer_corps: {
        emojis: '🏹🎯👥',
        text: 'You establish an elite precision archer corps, training the most skilled marksmen in advanced techniques for maximum accuracy and coordinated volleys.',
        choices: [
            {
                text: '🎯 Perfect individual marksmanship skills',
                nextScene: 'precision_trial',
                effects: {
                    setFlag: { precision_master: true },
                    experience: 45
                }
            },
            {
                text: '⚡ Develop rapid-fire techniques',
                nextScene: 'ranged_elimination',
                effects: {
                    setFlag: { rapid_archer: true },
                    experience: 40
                }
            },
            {
                text: '🏰 Integrate archers with fortress defenses',
                nextScene: 'temple_archer_defense',
                effects: {
                    setFlag: { fortress_archer: true },
                    experience: 50
                }
            }
        ]
    },

    rapid_response_formed: {
        emojis: '⚡👥🏃‍♂️',
        text: 'You create elite rapid response teams capable of quickly deploying to any threatened location, providing immediate tactical support and evacuation assistance.',
        choices: [
            {
                text: '🗺️ Establish response route networks',
                nextScene: 'rapid_response_routes',
                effects: {
                    setFlag: { rapid_coordinator: true },
                    experience: 40
                }
            },
            {
                text: '📡 Set up instant communication systems',
                nextScene: 'warning_network',
                effects: {
                    setFlag: { rapid_communications: true },
                    experience: 35
                }
            },
            {
                text: '⚔️ Train teams in versatile combat skills',
                nextScene: 'tactical_repositioning',
                effects: {
                    setFlag: { rapid_trainer: true },
                    experience: 45
                }
            }
        ]
    },

    rapid_response_routes: {
        emojis: '🛤️⚡🗺️',
        text: 'You map and prepare the fastest possible routes for rapid response teams, including hidden paths, emergency supplies, and strategic waypoints for maximum deployment speed.',
        choices: [
            {
                text: '🏰 Connect all major defensive positions',
                nextScene: 'integrated_defense',
                effects: {
                    setFlag: { route_network: true },
                    experience: 40
                }
            },
            {
                text: '🚨 Install emergency beacon systems',
                nextScene: 'warning_network',
                effects: {
                    setFlag: { beacon_master: true },
                    experience: 35
                }
            },
            {
                text: '📦 Pre-position emergency supplies',
                nextScene: 'supply_line_established',
                effects: {
                    setFlag: { supply_strategist: true },
                    experience: 30
                }
            }
        ]
    },

    shield_combat_tactics: {
        emojis: '🛡️⚔️🤺',
        text: 'You master advanced shield combat techniques, learning to use shields not just for defense but as offensive weapons, and teaching these skills to create an elite shield corps.',
        choices: [
            {
                text: '⚔️ Develop shield-and-sword combination attacks',
                nextScene: 'skill_based_duel',
                effects: {
                    setFlag: { shield_warrior: true },
                    experience: 45
                }
            },
            {
                text: '👥 Create shield wall formations',
                nextScene: 'layered_defense',
                effects: {
                    setFlag: { shield_formation_master: true },
                    experience: 40
                }
            },
            {
                text: '🏫 Establish a shield combat academy',
                nextScene: 'shield_teaching',
                effects: {
                    setFlag: { shield_instructor: true },
                    experience: 50
                }
            }
        ]
    },

    shield_teaching: {
        emojis: '🛡️👨‍🏫📚',
        text: 'You establish a comprehensive shield combat academy, teaching students the full range of defensive and offensive shield techniques, from basic blocks to advanced tactical formations.',
        choices: [
            {
                text: '🏰 Focus on fortress defense applications',
                nextScene: 'fortress_reinforcement',
                effects: {
                    setFlag: { fortress_shield_master: true },
                    experience: 45
                }
            },
            {
                text: '👥 Train elite shield formations',
                nextScene: 'guard_training_program',
                effects: {
                    setFlag: { formation_trainer: true },
                    experience: 40
                }
            },
            {
                text: '⚔️ Integrate shields with weapon combat',
                nextScene: 'tactical_manual_created',
                effects: {
                    setFlag: { combat_theorist: true },
                    experience: 50
                }
            }
        ]
    },

    strategy_school_founded: {
        emojis: '🏫📚🧠',
        text: 'You establish a military strategy school, teaching the next generation of commanders the arts of warfare, tactical thinking, and strategic planning to defend the realm.',
        choices: [
            {
                text: '📖 Focus on theoretical strategic studies',
                nextScene: 'tactical_manual_created',
                effects: {
                    setFlag: { strategy_theorist: true },
                    experience: 50
                }
            },
            {
                text: '⚔️ Emphasize practical combat application',
                nextScene: 'tactical_command',
                effects: {
                    setFlag: { practical_strategist: true },
                    experience: 45
                }
            },
            {
                text: '🏰 Specialize in defensive strategies',
                nextScene: 'integrated_defense',
                effects: {
                    setFlag: { defensive_theorist: true },
                    experience: 40
                }
            }
        ]
    },

    supply_line_established: {
        emojis: '🚚📦🛤️',
        text: 'You establish secure supply lines connecting all allied positions, ensuring consistent flow of weapons, food, medical supplies, and magical components to support the war effort.',
        choices: [
            {
                text: '🛡️ Focus on heavily defended supply routes',
                nextScene: 'supplies_received',
                effects: {
                    setFlag: { secure_logistics: true },
                    experience: 35
                }
            },
            {
                text: '🤫 Create hidden and alternate routes',
                nextScene: 'stealth_retrieval',
                effects: {
                    setFlag: { stealth_logistics: true },
                    experience: 40
                }
            },
            {
                text: '⚡ Develop rapid resupply capabilities',
                nextScene: 'rapid_response_routes',
                effects: {
                    setFlag: { rapid_logistics: true },
                    experience: 45
                }
            }
        ]
    },

    supplies_received: {
        emojis: '📦⚔️🧪',
        text: 'Your supply lines successfully deliver crucial resources - weapons, armor, magical components, and healing potions - significantly boosting your forces\' capabilities and morale.',
        choices: [
            {
                text: '⚔️ Distribute weapons and armor immediately',
                nextScene: 'equipment_improvement',
                effects: {
                    addItem: '⚔️',
                    setFlag: { well_supplied: true },
                    experience: 30
                }
            },
            {
                text: '🧪 Focus on medical and magical supplies',
                nextScene: 'potion_brewing_help',
                effects: {
                    addItem: '🧪',
                    setFlag: { medical_supplied: true },
                    experience: 35
                }
            },
            {
                text: '📦 Establish strategic supply reserves',
                nextScene: 'stronghold_consolidation',
                effects: {
                    setFlag: { strategic_reserves: true },
                    experience: 40
                }
            }
        ]
    },

    surprise_attack: {
        emojis: '💥🤫⚔️',
        text: 'You execute a perfectly coordinated surprise attack on enemy positions, using stealth, timing, and overwhelming force to catch shadow forces completely off guard.',
        choices: [
            {
                text: '⚔️ Press the advantage with full assault',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    setFlag: { surprise_master: true },
                    experience: 50
                }
            },
            {
                text: '💎 Target Crystal Shard storage locations',
                nextScene: 'shard_secured',
                effects: {
                    addItem: '💎',
                    setFlag: { shard_raider: true },
                    experience: 45
                }
            },
            {
                text: '🤫 Maintain stealth for follow-up operations',
                nextScene: 'stealth_theft',
                effects: {
                    setFlag: { stealth_operative: true },
                    experience: 40
                }
            }
        ]
    },

    tactical_command: {
        emojis: '👨‍💼⚔️📋',
        text: 'You take overall tactical command of allied forces, coordinating multiple units and strategies in real-time to maximize effectiveness and respond to changing battlefield conditions.',
        choices: [
            {
                text: '⚔️ Direct aggressive offensive operations',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    setFlag: { offensive_commander: true },
                    experience: 50
                }
            },
            {
                text: '🛡️ Focus on coordinated defensive strategies',
                nextScene: 'integrated_defense',
                effects: {
                    setFlag: { defensive_commander: true },
                    experience: 45
                }
            },
            {
                text: '🎯 Use precise tactical strikes',
                nextScene: 'weakness_exploitation',
                effects: {
                    setFlag: { precision_commander: true },
                    experience: 55
                }
            }
        ]
    },

    tactical_delaying_action: {
        emojis: '⏰🛡️🧠',
        text: 'You conduct a masterful delaying action, using tactical withdrawals, obstacles, and harassing attacks to slow enemy advance while preserving your forces for the decisive battle.',
        choices: [
            {
                text: '🏃‍♂️ Execute fighting withdrawal',
                nextScene: 'fighting_retreat',
                effects: {
                    setFlag: { delaying_master: true },
                    experience: 45
                }
            },
            {
                text: '🪤 Use terrain and traps to slow enemies',
                nextScene: 'trap_defenses',
                effects: {
                    setFlag: { tactical_trapper: true },
                    experience: 40
                }
            },
            {
                text: '🏰 Fall back to prepared positions',
                nextScene: 'fortified_position',
                effects: {
                    setFlag: { strategic_withdrawal: true },
                    experience: 35
                }
            }
        ]
    },

    tactical_manual_created: {
        emojis: '📚⚔️🖋️',
        text: 'You compile all your tactical knowledge and battlefield experience into a comprehensive military manual that will train future generations of warriors and commanders.',
        choices: [
            {
                text: '🏫 Use the manual to establish a war college',
                nextScene: 'strategy_school_founded',
                effects: {
                    setFlag: { manual_author: true },
                    experience: 55
                }
            },
            {
                text: '👥 Distribute copies to all allied commanders',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { knowledge_spreader: true },
                    experience: 45
                }
            },
            {
                text: '📖 Focus on specialized combat techniques',
                nextScene: 'skill_based_duel',
                effects: {
                    setFlag: { combat_scholar: true },
                    experience: 40
                }
            }
        ]
    },

    tactical_repositioning: {
        emojis: '🏃‍♂️🗺️⚔️',
        text: 'You execute complex tactical repositioning maneuvers, moving forces to optimal positions while maintaining combat readiness and coordination across multiple fronts.',
        choices: [
            {
                text: '🎯 Position for maximum tactical advantage',
                nextScene: 'weakness_exploitation',
                effects: {
                    setFlag: { positioning_master: true },
                    experience: 45
                }
            },
            {
                text: '🛡️ Reposition to strengthen defensive lines',
                nextScene: 'integrated_defense',
                effects: {
                    setFlag: { defensive_repositioner: true },
                    experience: 40
                }
            },
            {
                text: '⚡ Enable rapid response capabilities',
                nextScene: 'rapid_response_formed',
                effects: {
                    setFlag: { mobile_commander: true },
                    experience: 50
                }
            }
        ]
    },

    trap_defenses: {
        emojis: '🪤💥🕳️',
        text: 'You design and implement sophisticated trap defense systems, creating elaborate networks of hidden obstacles, magical triggers, and devastating surprises for enemy forces.',
        choices: [
            {
                text: '💥 Focus on explosive and damaging traps',
                nextScene: 'delayed_sabotage',
                effects: {
                    setFlag: { explosive_trapper: true },
                    experience: 45
                }
            },
            {
                text: '🕳️ Create capture and delay traps',
                nextScene: 'tactical_delaying_action',
                effects: {
                    setFlag: { delay_trapper: true },
                    experience: 40
                }
            },
            {
                text: '🔮 Integrate magical trap elements',
                nextScene: 'containment_wards',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_trapper: true },
                    experience: 50
                }
            }
        ]
    },

    trap_detection: {
        emojis: '👁️🪤🔍',
        text: 'You develop expertise in detecting and disabling enemy traps, learning to spot magical triggers, mechanical devices, and magical wards that could threaten your forces.',
        choices: [
            {
                text: '🤫 Use detection skills for stealth infiltration',
                nextScene: 'stealth_retrieval',
                effects: {
                    setFlag: { trap_detector: true },
                    experience: 40
                }
            },
            {
                text: '👥 Teach trap detection to scout teams',
                nextScene: 'informant_network',
                effects: {
                    setFlag: { detection_trainer: true },
                    experience: 35
                }
            },
            {
                text: '🔮 Study magical trap construction',
                nextScene: 'magical_theory_research',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { trap_scholar: true },
                    experience: 45
                }
            }
        ]
    },

    troop_rally: {
        emojis: '📯👥⚔️',
        text: 'You rally scattered and demoralized troops, using inspirational leadership and tactical reorganization to transform a disorganized retreat into a coordinated fighting force.',
        choices: [
            {
                text: '🔥 Inspire them with passionate speeches',
                nextScene: 'inspirational_endurance',
                effects: {
                    setFlag: { inspirational_leader: true },
                    experience: 45
                }
            },
            {
                text: '⚔️ Reorganize them into effective units',
                nextScene: 'tactical_repositioning',
                effects: {
                    setFlag: { tactical_organizer: true },
                    experience: 40
                }
            },
            {
                text: '🏰 Lead them to secure defensive positions',
                nextScene: 'fortified_position',
                effects: {
                    setFlag: { rally_commander: true },
                    experience: 35
                }
            }
        ]
    },

    warning_network: {
        emojis: '🚨📡🔔',
        text: 'You establish a comprehensive warning network across the realm, using signal fires, magical communications, and messenger systems to provide early warning of enemy movements.',
        choices: [
            {
                text: '🔥 Use traditional signal fire networks',
                nextScene: 'rapid_response_routes',
                effects: {
                    setFlag: { signal_master: true },
                    experience: 35
                }
            },
            {
                text: '🔮 Implement magical communication systems',
                nextScene: 'magical_communications',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_network: true },
                    experience: 45
                }
            },
            {
                text: '👥 Train dedicated messenger corps',
                nextScene: 'informant_network',
                effects: {
                    setFlag: { messenger_coordinator: true },
                    experience: 40
                }
            }
        ]
    },

    weakness_exploitation: {
        emojis: '🎯💥⚔️',
        text: 'You identify and systematically exploit enemy weaknesses, targeting vulnerable points in their formations, supply lines, and magical defenses to achieve maximum impact.',
        choices: [
            {
                text: '💥 Strike at critical infrastructure',
                nextScene: 'precise_power_sabotage',
                effects: {
                    setFlag: { weakness_master: true },
                    experience: 55
                }
            },
            {
                text: '⚔️ Target enemy command structure',
                nextScene: 'assassination_attempt',
                effects: {
                    setFlag: { precision_striker: true },
                    experience: 50
                }
            },
            {
                text: '🔮 Exploit magical vulnerabilities',
                nextScene: 'magical_dispel',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_exploiter: true },
                    experience: 45
                }
            }
        ]
    }
};
