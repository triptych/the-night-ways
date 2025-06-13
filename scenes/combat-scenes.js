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
    },

    // Defense and tactical combat scenes
    ranged_defense: {
        emojis: '🏹🛡️🎯',
        text: 'You organize a ranged defense strategy, positioning archers at key vantage points around the kingdom. Your expertise in archery helps create an effective network of defenders who can strike enemies from a distance.',
        choices: [
            {
                text: '🎯 Focus on precision training for maximum effectiveness',
                nextScene: 'precision_archer_corps',
                effects: {
                    setFlag: { elite_archers: true },
                    experience: 35
                }
            },
            {
                text: '📍 Set up strategic archer positions',
                nextScene: 'archer_positions_set',
                effects: {
                    setFlag: { strategic_positions: true },
                    experience: 25
                }
            },
            {
                text: '🏰 Coordinate with castle defenses',
                nextScene: 'integrated_defense',
                effects: {
                    setFlag: { coordinated_defense: true }
                }
            }
        ]
    },

    entrance_defense: {
        emojis: '🚪🛡️⚔️',
        text: 'You fortify the main entrances to the castle and village, creating chokepoints where defenders can hold off larger forces. Your tactical knowledge helps maximize the defensive advantage.',
        choices: [
            {
                text: '🏰 Create multiple defensive layers',
                nextScene: 'layered_defense',
                effects: {
                    setFlag: { fortress_defense: true },
                    experience: 30
                }
            },
            {
                text: '🪤 Set up traps for shadow creatures',
                nextScene: 'trap_defenses',
                effects: {
                    setFlag: { trapped_entrances: true },
                    experience: 25
                }
            },
            {
                text: '⚔️ Train guards in chokepoint combat',
                nextScene: 'chokepoint_training',
                effects: {
                    setFlag: { trained_defenders: true }
                }
            }
        ]
    },

    battle_search: {
        emojis: '🔍⚔️🗺️',
        text: 'You search the recent battlefields for intelligence about enemy movements and weaknesses. Your investigation reveals valuable tactical information about shadow creature behavior patterns.',
        choices: [
            {
                text: '📊 Analyze enemy combat patterns',
                nextScene: 'combat_analysis',
                effects: {
                    setFlag: { enemy_knowledge: true },
                    experience: 30
                }
            },
            {
                text: '🗡️ Collect weapons and equipment from the battlefield',
                nextScene: 'battlefield_salvage',
                effects: {
                    addItem: '⚔️',
                    experience: 20
                }
            },
            {
                text: '🕵️ Track enemy retreat paths',
                nextScene: 'enemy_tracking',
                effects: {
                    setFlag: { knows_enemy_routes: true }
                }
            }
        ]
    },

    route_mapping: {
        emojis: '🗺️🛤️📍',
        text: 'You carefully map out the safest and most strategic routes through the realm, identifying key chokepoints, defensible positions, and escape routes. This intelligence will be crucial for coordinating defenses.',
        choices: [
            {
                text: '🛡️ Focus on defensive positioning',
                nextScene: 'defensive_routes_mapped',
                effects: {
                    setFlag: { defensive_routes: true },
                    experience: 25
                }
            },
            {
                text: '⚡ Plan rapid response corridors',
                nextScene: 'rapid_response_routes',
                effects: {
                    setFlag: { quick_deployment: true },
                    experience: 30
                }
            },
            {
                text: '🚁 Identify evacuation pathways',
                nextScene: 'evacuation_routes_planned',
                effects: {
                    setFlag: { evacuation_ready: true }
                }
            }
        ]
    },

    // Forest and nature combat
    forest_combat: {
        emojis: '🌲⚔️🏹',
        text: 'Combat in the forest requires different tactics. You use the natural terrain to your advantage, moving between trees and using the environment as both cover and weapon against the shadow creatures.',
        choices: [
            {
                text: '🌿 Use stealth and guerrilla tactics',
                nextScene: 'forest_guerrilla_warfare',
                effects: {
                    setFlag: { forest_warrior: true },
                    experience: 30
                }
            },
            {
                text: '🏹 Engage in ranged combat from the treetops',
                nextScene: 'treetop_archery',
                effects: {
                    experience: 25
                }
            },
            {
                text: '🌳 Call upon the forest spirits for aid',
                nextScene: 'spirit_ally_combat',
                conditions: { hasFlag: 'forest_ally' },
                effects: {
                    magical: true,
                    experience: 35
                }
            }
        ]
    },

    elf_search: {
        emojis: '🧝‍♀️🔍🌲',
        text: 'You search the forest for signs of the missing elves, following faint magical traces and woodland signs. Your persistence leads you to discover hidden elven refuges and survivors.',
        choices: [
            {
                text: '🤝 Approach the elves peacefully',
                nextScene: 'peaceful_elf_contact',
                effects: {
                    setFlag: { elf_friend: true },
                    experience: 25
                }
            },
            {
                text: '🛡️ Offer protection to the elf survivors',
                nextScene: 'elf_protection_offered',
                effects: {
                    setFlag: { elf_protector: true }
                }
            },
            {
                text: '📚 Ask about ancient forest knowledge',
                nextScene: 'elf_lore_gathering',
                effects: {
                    experience: 30,
                    setFlag: { forest_lore: true }
                }
            }
        ]
    },

    // Alliance and coordination scenes
    alliance_assault: {
        emojis: '👥⚔️🏰',
        text: 'Leading a combined force of knights, archers, and magical allies, you launch a coordinated assault on a shadow stronghold. The diverse skills of your alliance prove devastating against the enemy.',
        choices: [
            {
                text: '⚔️ Lead the charge personally',
                nextScene: 'heroic_alliance_charge',
                effects: {
                    health: -20,
                    experience: 40,
                    setFlag: { inspiring_leader: true }
                }
            },
            {
                text: '🧠 Coordinate from the rear',
                nextScene: 'tactical_command',
                effects: {
                    setFlag: { strategic_commander: true },
                    experience: 35
                }
            },
            {
                text: '🏹 Provide covering fire for the assault',
                nextScene: 'covering_fire_support',
                effects: {
                    experience: 30
                }
            }
        ]
    },

    defense_network: {
        emojis: '🕸️🛡️🏰',
        text: 'You establish a comprehensive defense network across the realm, with communication systems, supply lines, and coordinated response protocols. Your organization transforms scattered defenders into a unified force.',
        choices: [
            {
                text: '📡 Set up magical communication systems',
                nextScene: 'magical_communications',
                effects: {
                    magical: true,
                    setFlag: { comm_network: true },
                    experience: 35
                }
            },
            {
                text: '🚚 Organize supply and reinforcement lines',
                nextScene: 'supply_line_established',
                effects: {
                    setFlag: { reliable_supplies: true },
                    experience: 25
                }
            },
            {
                text: '⚡ Create rapid response teams',
                nextScene: 'rapid_response_formed',
                effects: {
                    setFlag: { quick_response: true },
                    experience: 30
                }
            }
        ]
    },

    intelligence_gathering: {
        emojis: '🕵️📊💡',
        text: 'You organize a comprehensive intelligence operation, gathering information about shadow creature movements, the Shadow Lord\'s plans, and potential weaknesses in his forces.',
        choices: [
            {
                text: '🗺️ Focus on mapping enemy positions',
                nextScene: 'enemy_positions_mapped',
                effects: {
                    setFlag: { enemy_intel: true },
                    experience: 30
                }
            },
            {
                text: '👤 Recruit local informants',
                nextScene: 'informant_network',
                effects: {
                    setFlag: { spy_network: true },
                    experience: 25
                }
            },
            {
                text: '🔮 Use magical scrying techniques',
                nextScene: 'magical_reconnaissance',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_intel: true },
                    experience: 35
                }
            }
        ]
    },

    // Specialized combat scenes
    shard_retrieval: {
        emojis: '💎⚔️🏃‍♂️',
        text: 'A dangerous mission to retrieve a Crystal Shard from enemy territory requires careful planning and execution. You must infiltrate, secure the shard, and escape before reinforcements arrive.',
        choices: [
            {
                text: '🤫 Use stealth to avoid detection',
                nextScene: 'stealth_retrieval',
                effects: {
                    setFlag: { stealth_expert: true },
                    experience: 30
                }
            },
            {
                text: '⚔️ Fight your way in and out',
                nextScene: 'combat_retrieval',
                effects: {
                    health: -25,
                    experience: 35
                }
            },
            {
                text: '🏹 Provide ranged support for the mission',
                nextScene: 'ranged_combat',
                effects: {
                    experience: 25
                }
            }
        ]
    },

    ranged_combat: {
        emojis: '🏹🎯⚡',
        text: 'You engage in intense ranged combat, your arrows finding their marks with deadly precision. From your vantage point, you can control the battlefield and protect your allies.',
        choices: [
            {
                text: '👻 Target the shadow wraiths first',
                nextScene: 'wraith_shot',
                effects: {
                    experience: 30,
                    setFlag: { wraith_hunter: true }
                }
            },
            {
                text: '⚡ Attempt a quick precision strike',
                nextScene: 'quick_grab',
                effects: {
                    experience: 25
                }
            },
            {
                text: '🔍 Study the wraith\'s behavior patterns',
                nextScene: 'wraith_analysis',
                effects: {
                    setFlag: { wraith_expert: true },
                    experience: 35
                }
            }
        ]
    },

    wraith_shot: {
        emojis: '👻🏹💥',
        text: 'Your arrow pierces through the ethereal wraith, disrupting its shadowy form. The creature shrieks as your enchanted projectile finds its mark, causing it to dissipate into harmless mist.',
        choices: [
            {
                text: '🏹 Continue targeting other wraiths',
                nextScene: 'wraith_hunting_spree',
                effects: {
                    experience: 30,
                    setFlag: { wraith_slayer: true }
                }
            },
            {
                text: '💎 Quickly secure the Crystal Shard',
                nextScene: 'shard_secured',
                effects: {
                    addItem: '💎',
                    experience: 25
                }
            },
            {
                text: '🔍 Examine the wraith\'s remains',
                nextScene: 'wraith_study',
                effects: {
                    experience: 20,
                    setFlag: { wraith_knowledge: true }
                }
            }
        ]
    },

    quick_grab: {
        emojis: '💨💎✋',
        text: 'In a lightning-fast maneuver, you dash forward and snatch the Crystal Shard before the enemies can react. Your speed and timing are perfect, but now you need to escape quickly.',
        choices: [
            {
                text: '🏃‍♂️ Sprint away immediately',
                nextScene: 'hasty_escape',
                effects: {
                    addItem: '💎',
                    experience: 25
                }
            },
            {
                text: '🤫 Try to sneak away unnoticed',
                nextScene: 'stealthy_withdrawal',
                effects: {
                    addItem: '💎',
                    experience: 30
                }
            },
            {
                text: '⚔️ Fight while retreating',
                nextScene: 'fighting_retreat',
                effects: {
                    addItem: '💎',
                    health: -15,
                    experience: 35
                }
            }
        ]
    },

    wraith_analysis: {
        emojis: '👻🔍📊',
        text: 'You carefully observe the wraith\'s attack patterns and weaknesses. These shadow creatures seem vulnerable to light-based attacks and have predictable movement patterns during their assault phases.',
        choices: [
            {
                text: '💡 Exploit their weakness to light',
                nextScene: 'light_based_attack',
                effects: {
                    magical: true,
                    experience: 35,
                    setFlag: { wraith_weakness_known: true }
                }
            },
            {
                text: '🎯 Use their patterns against them',
                nextScene: 'pattern_exploitation',
                effects: {
                    experience: 30,
                    setFlag: { tactical_advantage: true }
                }
            },
            {
                text: '📚 Record your findings for others',
                nextScene: 'knowledge_documentation',
                effects: {
                    experience: 25,
                    setFlag: { wraith_researcher: true }
                }
            }
        ]
    },

    // Leadership and evacuation scenes
    evacuation_leader: {
        emojis: '🏃‍♂️👥🛡️',
        text: 'You take charge of evacuating civilians from danger zones, organizing safe passage and ensuring no one is left behind. Your leadership keeps people calm and moving efficiently to safety.',
        choices: [
            {
                text: '🛡️ Stay behind to protect the rear guard',
                nextScene: 'rear_guard_action',
                effects: {
                    health: -20,
                    experience: 40,
                    setFlag: { selfless_protector: true }
                }
            },
            {
                text: '📢 Spread warnings to other settlements',
                nextScene: 'warning_spread',
                effects: {
                    setFlag: { warning_network: true },
                    experience: 30
                }
            },
            {
                text: '🏰 Lead them all to the safety of the castle',
                nextScene: 'castle_sanctuary',
                effects: {
                    setFlag: { evacuation_success: true },
                    experience: 35
                }
            }
        ]
    },

    rear_guard_action: {
        emojis: '🛡️⚔️🦸‍♂️',
        text: 'You hold the line as the last defender, buying precious time for civilians to escape. Facing overwhelming odds, you fight with desperate courage, knowing that every second you delay the enemy saves lives.',
        choices: [
            {
                text: '💪 Make your final stand here',
                nextScene: 'heroic_last_stand',
                effects: {
                    health: -30,
                    experience: 50,
                    setFlag: { legendary_sacrifice: true }
                }
            },
            {
                text: '🧠 Use tactics to maximize delay',
                nextScene: 'tactical_delaying_action',
                effects: {
                    health: -15,
                    experience: 35,
                    setFlag: { tactical_genius: true }
                }
            },
            {
                text: '🏃‍♂️ Fall back in stages',
                nextScene: 'strategic_withdrawal',
                effects: {
                    health: -10,
                    experience: 25
                }
            }
        ]
    },

    warning_spread: {
        emojis: '📢🔔🏃‍♂️',
        text: 'You race from village to village, spreading word of the approaching danger. Your urgent warnings allow communities to prepare defenses or evacuate before the shadow creatures arrive.',
        choices: [
            {
                text: '🏘️ Organize a coordinated defense',
                nextScene: 'coordinated_village_defense',
                effects: {
                    setFlag: { defense_coordinator: true },
                    experience: 35
                }
            },
            {
                text: '🏰 Guide everyone to central strongholds',
                nextScene: 'stronghold_consolidation',
                effects: {
                    setFlag: { consolidation_leader: true },
                    experience: 30
                }
            },
            {
                text: '⚔️ Rally militias to join the fight',
                nextScene: 'militia_rally',
                effects: {
                    setFlag: { militia_commander: true },
                    experience: 40
                }
            }
        ]
    },

    // Additional missing combat scenes
    heroic_last_stand: {
        emojis: '🦸‍♂️⚔️💀',
        text: 'Surrounded by overwhelming enemy forces, you make your final stand. With your back against the wall and nowhere to retreat, you fight with legendary courage, inspiring awe in both allies and enemies.',
        choices: [
            {
                text: '⚔️ Fight until your very last breath',
                nextScene: 'glorious_death',
                effects: {
                    health: -50,
                    experience: 100,
                    setFlag: { legendary_hero: true }
                }
            },
            {
                text: '🛡️ Focus on protecting others even as you fall',
                nextScene: 'sacrificial_protection',
                effects: {
                    health: -40,
                    experience: 80,
                    setFlag: { selfless_martyr: true }
                }
            },
            {
                text: '🌟 Call upon all your remaining power',
                nextScene: 'final_power_surge',
                effects: {
                    magical: true,
                    health: -30,
                    experience: 60
                }
            }
        ]
    },

    tactical_victory: {
        emojis: '🧠⚔️🏆',
        text: 'Through brilliant tactical maneuvering, you turn the tide of battle despite being outnumbered. Your strategic mind finds weaknesses in enemy formations and exploits them perfectly.',
        choices: [
            {
                text: '👑 Report your success to command',
                nextScene: 'victory_report',
                effects: {
                    setFlag: { tactical_genius: true },
                    experience: 40
                }
            },
            {
                text: '🔍 Study the battlefield for more intelligence',
                nextScene: 'battlefield_investigation',
                effects: {
                    experience: 30
                }
            },
            {
                text: '👥 Rally troops for the next engagement',
                nextScene: 'troop_rally',
                effects: {
                    setFlag: { inspiring_commander: true },
                    experience: 35
                }
            }
        ]
    },

    strategic_retreat: {
        emojis: '🏃‍♂️🧠⚖️',
        text: 'Recognizing when discretion is the better part of valor, you orchestrate a masterful strategic withdrawal. Your forces escape intact while inflicting maximum damage on the pursuing enemy.',
        choices: [
            {
                text: '🗺️ Plan a counter-attack from a better position',
                nextScene: 'counter_attack_planning',
                effects: {
                    setFlag: { strategic_mind: true },
                    experience: 35
                }
            },
            {
                text: '🏰 Regroup at a defensive stronghold',
                nextScene: 'stronghold_regrouping',
                effects: {
                    setFlag: { tactical_leader: true },
                    experience: 30
                }
            },
            {
                text: '👥 Preserve your forces for the final battle',
                nextScene: 'force_preservation',
                effects: {
                    setFlag: { wise_commander: true }
                }
            }
        ]
    },

    victory_celebration: {
        emojis: '🎉🏆🍻',
        text: 'The hard-won victory deserves celebration! Your forces gather to honor the fallen, celebrate the living, and prepare for whatever challenges lie ahead. Morale soars after your triumph.',
        choices: [
            {
                text: '🙏 Honor the fallen heroes',
                nextScene: 'fallen_heroes_honored',
                effects: {
                    setFlag: { honorable_leader: true },
                    experience: 25
                }
            },
            {
                text: '📋 Plan the next phase of the campaign',
                nextScene: 'campaign_planning',
                effects: {
                    setFlag: { strategic_planner: true },
                    experience: 30
                }
            },
            {
                text: '🛠️ Use the respite to improve equipment',
                nextScene: 'equipment_improvement',
                effects: {
                    addItem: '⚔️',
                    experience: 20
                }
            }
        ]
    },

    battlefield_investigation: {
        emojis: '🔍⚔️📊',
        text: 'You systematically investigate the battlefield, gathering intelligence about enemy tactics, weapons, and weaknesses. Your thorough analysis reveals valuable information for future encounters.',
        choices: [
            {
                text: '🗡️ Examine enemy weapons and equipment',
                nextScene: 'enemy_equipment_analysis',
                effects: {
                    setFlag: { equipment_expert: true },
                    experience: 25
                }
            },
            {
                text: '📈 Analyze combat patterns and tactics',
                nextScene: 'tactical_analysis',
                effects: {
                    setFlag: { tactical_analyst: true },
                    experience: 30
                }
            },
            {
                text: '🔮 Search for magical artifacts or traces',
                nextScene: 'magical_investigation',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    experience: 35
                }
            }
        ]
    },

    // Stealth and infiltration scenes
    stealth_confrontation: {
        emojis: '🤫👹🗡️',
        text: 'Using stealth to your advantage, you confront the Shadow Lord when he least expects it. Your silent approach gives you the element of surprise in this crucial encounter.',
        choices: [
            {
                text: '🗡️ Attempt an assassination strike',
                nextScene: 'assassination_attempt',
                effects: {
                    setFlag: { assassin_approach: true },
                    experience: 40
                }
            },
            {
                text: '💎 Try to steal the final Crystal Shard',
                nextScene: 'stealth_shard_hunt',
                effects: {
                    experience: 35
                }
            },
            {
                text: '💬 Reveal yourself and challenge him directly',
                nextScene: 'final_duel',
                effects: {
                    setFlag: { honorable_challenge: true }
                }
            }
        ]
    },

    stealth_shard_hunt: {
        emojis: '💎🤫🔍',
        text: 'Moving like a shadow yourself, you search for the final Crystal Shard while avoiding detection. The fortress is filled with dark magic, but your stealth skills keep you hidden.',
        choices: [
            {
                text: '💎 Locate and grab the Crystal Shard quickly',
                nextScene: 'shard_grab',
                effects: {
                    addItem: '💎',
                    experience: 35
                }
            },
            {
                text: '🔍 Search for prisoners to rescue first',
                nextScene: 'prisoner_rescue',
                effects: {
                    setFlag: { rescuer: true },
                    experience: 30
                }
            },
            {
                text: '👹 Confront the Shadow Lord directly',
                nextScene: 'stealth_confrontation'
            }
        ]
    },

    prisoner_rescue: {
        emojis: '🔓👥💪',
        text: 'You discover prisoners being held in the fortress dungeons - captured villagers, knights, and even some elves. Rescuing them could provide valuable allies for the final confrontation.',
        choices: [
            {
                text: '🗝️ Free all the prisoners quietly',
                nextScene: 'mass_prisoner_liberation',
                effects: {
                    setFlag: { mass_liberator: true },
                    experience: 40
                }
            },
            {
                text: '⚔️ Arm the prisoners for a revolt',
                nextScene: 'prisoner_revolt',
                effects: {
                    setFlag: { revolt_leader: true },
                    experience: 35
                }
            },
            {
                text: '🤫 Lead them to safety before continuing',
                nextScene: 'prisoner_evacuation',
                effects: {
                    setFlag: { cautious_rescuer: true },
                    experience: 30
                }
            }
        ]
    },

    final_duel: {
        emojis: '⚔️👹🌟',
        text: 'The ultimate confrontation begins! You face the Shadow Lord in single combat, with the fate of the entire realm hanging in the balance. This is the moment all your training has led to.',
        choices: [
            {
                text: '⚔️ Fight with pure martial skill',
                nextScene: 'skill_based_duel',
                effects: {
                    health: -25,
                    experience: 50
                }
            },
            {
                text: '💎 Use the Crystal Shards\' power',
                nextScene: 'crystal_powered_duel',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    experience: 45
                }
            },
            {
                text: '💬 Try to reason with him during combat',
                nextScene: 'diplomatic_duel',
                effects: {
                    setFlag: { diplomatic_warrior: true },
                    experience: 40
                }
            }
        ]
    },

    shard_grab: {
        emojis: '💎⚡✋',
        text: 'In a daring move, you make a desperate grab for the final Crystal Shard. The moment your hand closes around it, massive power surges through you, but also alerts every enemy in the fortress.',
        choices: [
            {
                text: '🏃‍♂️ Escape immediately with the shard',
                nextScene: 'shard_escape_attempt',
                effects: {
                    addItem: '💎',
                    setFlag: { shard_thief: true },
                    experience: 35
                }
            },
            {
                text: '⚔️ Stand and fight with the shard\'s power',
                nextScene: 'shard_empowered_combat',
                effects: {
                    addItem: '💎',
                    magical: true,
                    experience: 40
                }
            },
            {
                text: '🌟 Use the shard to restore the Crystal immediately',
                nextScene: 'emergency_crystal_restoration',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    experience: 50
                }
            }
        ]
    },

    power_destruction: {
        emojis: '💥🏰🔥',
        text: 'You target the fortress\'s dark power source - a massive corruption nexus that feeds the Shadow Lord\'s strength. Destroying it will weaken him significantly but requires tremendous effort.',
        choices: [
            {
                text: '💥 Use all your power to destroy it completely',
                nextScene: 'complete_power_destruction',
                effects: {
                    health: -30,
                    magical: true,
                    setFlag: { power_destroyer: true },
                    experience: 50
                }
            },
            {
                text: '🎯 Target specific weak points carefully',
                nextScene: 'precise_power_sabotage',
                effects: {
                    health: -15,
                    setFlag: { precise_saboteur: true },
                    experience: 35
                }
            },
            {
                text: '💎 Use Crystal Shard power to purify it',
                nextScene: 'power_source_purification',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    experience: 45
                }
            }
        ]
    },

    // Batch 3: Next 6 missing scenes
    battlefield_salvage: {
        emojis: '⚔️📦🔍',
        text: 'You search the battlefield for useful equipment and supplies. Among the debris, you find weapons, armor, and magical items dropped by fallen warriors. These resources could prove valuable in the battles ahead.',
        choices: [
            {
                text: '⚔️ Collect the best weapons',
                nextScene: 'tactical_victory',
                effects: {
                    addItem: '⚔️',
                    setFlag: { battlefield_weapons: true },
                    experience: 20
                }
            },
            {
                text: '🛡️ Gather protective equipment',
                nextScene: 'equipment_improvement',
                effects: {
                    addItem: '🛡️',
                    setFlag: { battlefield_armor: true },
                    experience: 25
                }
            },
            {
                text: '🔮 Search for magical artifacts',
                nextScene: 'magical_investigation',
                effects: {
                    setFlag: { artifact_hunter: true },
                    experience: 30
                }
            }
        ]
    },

    blessing_shared: {
        emojis: '✨🤝💚',
        text: 'You share the divine blessing you received with your allies, spreading its protective power among your companions. The blessing multiplies rather than diminishes when shared with pure hearts.',
        choices: [
            {
                text: '🛡️ Focus the blessing on protection',
                nextScene: 'divine_protection_granted',
                effects: {
                    setFlag: { divine_protector: true },
                    experience: 30,
                    magical: true
                }
            },
            {
                text: '⚔️ Channel the blessing into combat prowess',
                nextScene: 'divine_empowerment',
                effects: {
                    setFlag: { blessed_warrior: true },
                    experience: 35
                }
            },
            {
                text: '🌟 Spread the blessing to all who need it',
                nextScene: 'group_blessing_requested',
                effects: {
                    setFlag: { blessing_spreader: true },
                    experience: 40
                }
            }
        ]
    },

    calculated_search: {
        emojis: '🧮🔍📊',
        text: 'Using your research and analytical skills, you conduct a methodical search for Crystal Shards based on magical resonance patterns and historical data. Your scientific approach yields promising results.',
        choices: [
            {
                text: '🔮 Use magical detection techniques',
                nextScene: 'magical_shard_detection',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_tracker: true },
                    experience: 35
                }
            },
            {
                text: '📚 Cross-reference historical records',
                nextScene: 'historical_shard_research',
                effects: {
                    setFlag: { thorough_researcher: true },
                    experience: 30
                }
            },
            {
                text: '🗺️ Map out potential shard locations',
                nextScene: 'systematic_shard_search',
                effects: {
                    setFlag: { systematic_searcher: true },
                    experience: 25
                }
            }
        ]
    },

    campaign_planning: {
        emojis: '🗺️📋⚔️',
        text: 'You develop a comprehensive military campaign to reclaim territory from shadow forces. Your strategic planning coordinates multiple armies, supply lines, and coordinated strikes against enemy strongholds.',
        choices: [
            {
                text: '🏰 Focus on liberating major fortresses',
                nextScene: 'fortress_architect',
                effects: {
                    setFlag: { fortress_strategist: true },
                    experience: 35
                }
            },
            {
                text: '🌲 Coordinate forest and rural operations',
                nextScene: 'forest_army_assault',
                effects: {
                    setFlag: { wilderness_commander: true },
                    experience: 30
                }
            },
            {
                text: '👥 Unite all allied forces for one decisive strike',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { grand_strategist: true },
                    experience: 40
                }
            }
        ]
    },

    careful_extraction: {
        emojis: '💎🔧⚗️',
        text: 'You carefully extract the Crystal Shard using protective magical techniques and specialized tools. Your methodical approach prevents triggering any dangerous magical traps or corruption.',
        choices: [
            {
                text: '🛡️ Apply additional protective wards',
                nextScene: 'protected_extraction',
                effects: {
                    addItem: '💎',
                    setFlag: { cautious_collector: true },
                    experience: 30
                }
            },
            {
                text: '🔍 Study the shard before moving it',
                nextScene: 'shard_study',
                effects: {
                    setFlag: { careful_researcher: true },
                    experience: 25
                }
            },
            {
                text: '⚡ Quickly complete the extraction',
                nextScene: 'shard_secured',
                effects: {
                    addItem: '💎',
                    experience: 20
                }
            }
        ]
    },

    castle_defense_improved: {
        emojis: '🏰🛡️🔧',
        text: 'You oversee major improvements to the castle\'s defenses - reinforcing walls, installing magical wards, positioning siege weapons, and training the garrison in advanced defensive tactics.',
        choices: [
            {
                text: '🏹 Focus on ranged defensive capabilities',
                nextScene: 'archer_positions_set',
                effects: {
                    setFlag: { archer_commander: true },
                    experience: 30
                }
            },
            {
                text: '🔮 Enhance magical protections',
                nextScene: 'castle_ward_creation',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { ward_master: true },
                    experience: 35
                }
            },
            {
                text: '⚔️ Strengthen close-quarters defenses',
                nextScene: 'chokepoint_training',
                effects: {
                    setFlag: { defensive_tactician: true },
                    experience: 25
                }
            }
        ]
    },

    // Batch 9: Next 6 missing scenes
    corruption_mapping: {
        emojis: '🗺️👹📍',
        text: 'You carefully map the spread of shadow corruption across the realm, identifying patterns and key locations. Your detailed charts reveal the corruption follows ancient ley lines, providing crucial intelligence.',
        choices: [
            {
                text: '🔍 Focus on the corruption\'s source points',
                nextScene: 'corruption_source_search',
                effects: {
                    setFlag: { corruption_mapper: true },
                    experience: 40
                }
            },
            {
                text: '📊 Analyze the spread patterns',
                nextScene: 'corruption_study',
                effects: {
                    setFlag: { pattern_analyst: true },
                    experience: 35
                }
            },
            {
                text: '🚨 Share findings with allies',
                nextScene: 'intelligence_report',
                effects: {
                    setFlag: { intelligence_officer: true },
                    experience: 30
                }
            }
        ]
    },

    corruption_origins: {
        emojis: '👹📚🔍',
        text: 'Through intensive research and investigation, you uncover the true origins of the corruption. It began when the Shadow Lord\'s grief and rage first poisoned the Crystal of Harmony centuries ago.',
        choices: [
            {
                text: '💔 Study the emotional catalyst behind the corruption',
                nextScene: 'empathic_understanding',
                effects: {
                    setFlag: { corruption_origins_known: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Research ways to reverse the ancient corruption',
                nextScene: 'corruption_research',
                effects: {
                    magical: true,
                    setFlag: { corruption_reversal: true },
                    experience: 40
                }
            },
            {
                text: '📖 Document your findings for future generations',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { corruption_scholar: true },
                    experience: 35
                }
            }
        ]
    },

    corruption_research: {
        emojis: '🧪👹🔬',
        text: 'You conduct extensive research into countermeasures against shadow corruption, experimenting with various magical and natural remedies. Your work yields promising results for cleansing techniques.',
        choices: [
            {
                text: '✨ Develop a purification spell',
                nextScene: 'purification_study',
                effects: {
                    magical: true,
                    setFlag: { purification_researcher: true },
                    experience: 45
                }
            },
            {
                text: '🌿 Create herbal remedies',
                nextScene: 'potion_brewing_help',
                effects: {
                    addItem: '🧪',
                    setFlag: { herbal_researcher: true },
                    experience: 35
                }
            },
            {
                text: '🛡️ Design protective wards',
                nextScene: 'containment_wards',
                effects: {
                    magical: true,
                    setFlag: { ward_researcher: true },
                    experience: 40
                }
            }
        ]
    },

    corruption_source_found: {
        emojis: '🎯👹💀',
        text: 'You discover the primary source of corruption - an ancient altar where the Shadow Lord first channeled his rage into dark magic. The site pulses with malevolent energy, but destroying it could break the corruption\'s hold.',
        choices: [
            {
                text: '💥 Destroy the corruption source immediately',
                nextScene: 'power_source_destroyed',
                effects: {
                    health: -25,
                    setFlag: { source_destroyer: true },
                    experience: 50
                }
            },
            {
                text: '🔮 Attempt to purify the source instead',
                nextScene: 'power_source_purification',
                effects: {
                    magical: true,
                    health: -15,
                    setFlag: { source_purifier: true },
                    experience: 45
                }
            },
            {
                text: '📚 Study the source to understand its power',
                nextScene: 'corruption_study',
                effects: {
                    setFlag: { corruption_expert: true },
                    experience: 35
                }
            }
        ]
    },

    corruption_source_search: {
        emojis: '🔍👹🗺️',
        text: 'Following the corruption patterns you\'ve mapped, you search for the primary source of the shadow magic. Your investigation leads you through dangerous territory where the corruption is strongest.',
        choices: [
            {
                text: '🎯 Follow the strongest corruption trail',
                nextScene: 'corruption_source_found',
                effects: {
                    health: -10,
                    setFlag: { corruption_tracker: true },
                    experience: 40
                }
            },
            {
                text: '🔮 Use magic to detect the source',
                nextScene: 'magical_shard_detection',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    experience: 35
                }
            },
            {
                text: '🛡️ Approach with maximum caution',
                nextScene: 'careful_extraction',
                effects: {
                    setFlag: { cautious_approach: true },
                    experience: 30
                }
            }
        ]
    },

    corruption_study: {
        emojis: '📚👹🔬',
        text: 'You conduct a thorough study of the shadow corruption, analyzing its magical properties, spread patterns, and effects on the environment. Your research provides valuable insights for combating it.',
        choices: [
            {
                text: '💡 Develop countermeasures based on your findings',
                nextScene: 'corruption_research',
                effects: {
                    setFlag: { corruption_scholar: true },
                    experience: 40
                }
            },
            {
                text: '🗺️ Create a comprehensive corruption map',
                nextScene: 'corruption_mapping',
                effects: {
                    setFlag: { corruption_cartographer: true },
                    experience: 35
                }
            },
            {
                text: '📖 Document your research for others',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { knowledge_keeper: true },
                    experience: 30
                }
            }
        ]
    }
};
