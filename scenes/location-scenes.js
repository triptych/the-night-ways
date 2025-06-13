// Location-based scenes (Library, Forest, Temple, etc.)
export const LOCATION_SCENES = {
    // Library scene
    library: {
        emojis: '📚✨📜',
        text: 'The Ancient Library is filled with floating books and glowing scrolls. The Keeper of Knowledge, an ancient owl 🦉, hoots sadly. "The prophecy speaks of three Crystal Shards hidden across the realm. Only by reuniting them can harmony be restored."',
        choices: [
            {
                text: '📜 Study the Crystal Prophecy',
                nextScene: 'prophecy_revealed',
                effects: {
                    addItem: '📜',
                    experience: 20,
                    setFlag: { knows_prophecy: true }
                }
            },
            {
                text: '🗺️ Ask for a map to the Crystal Shards',
                nextScene: 'map_acquired',
                effects: {
                    addItem: '🗺️',
                    setFlag: { has_map: true }
                }
            },
            {
                text: '🔮 Use your magic to commune with the books',
                nextScene: 'magical_communion',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    experience: 30
                }
            }
        ]
    },

    // Forest entrance
    forest_entrance: {
        emojis: '🌲🧝‍♀️✨',
        text: 'The Enchanted Forest seems darker than usual. Glowing flowers are losing their light. You hear the melodic voice of an Elf calling for help from deeper within the woods.',
        choices: [
            {
                text: '🏃‍♂️ Rush to help the Elf',
                nextScene: 'elf_rescue',
                effects: {
                    health: -10,
                    setFlag: { helped_elf: true }
                }
            },
            {
                text: '🔍 Carefully investigate the surroundings',
                nextScene: 'forest_investigation'
            },
            {
                text: '🌿 Use forest magic to sense the danger',
                nextScene: 'nature_magic',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true
                }
            }
        ]
    },

    // Deep forest
    deep_forest: {
        emojis: '🌲🦌🍄',
        text: 'Following the fleeing animals, you discover a hidden grove where a majestic deer 🦌 stands guard over a glowing mushroom circle. The deer speaks: "Guardian, the first Crystal Shard lies beneath these ancient roots, but it is protected by trials."',
        choices: [
            {
                text: '🏹 Prove your worth through an archery trial',
                nextScene: 'archery_trial',
                conditions: { playerClass: 'archer' },
                effects: {
                    experience: 25
                }
            },
            {
                text: '🤝 Offer to help heal the forest',
                nextScene: 'forest_healing',
                effects: {
                    setFlag: { forest_ally: true }
                }
            },
            {
                text: '💎 Ask about the Crystal Shard directly',
                nextScene: 'crystal_location'
            }
        ]
    },

    // Temple ruins
    temple_ruins: {
        emojis: '🏛️💔⚡',
        text: 'The Crystal Temple lies in ruins, with broken pillars and fading magical circles. At the center, you see the shattered remains of the Crystal of Harmony. Dark energy swirls around the fragments.',
        choices: [
            {
                text: '🔮 Use magic to analyze the dark energy',
                nextScene: 'dark_analysis',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    health: -15
                }
            },
            {
                text: '💎 Carefully collect a crystal fragment',
                nextScene: 'fragment_collected',
                effects: {
                    addItem: '💎',
                    experience: 15
                }
            },
            {
                text: '🚪 Look for hidden passages in the ruins',
                nextScene: 'hidden_passage'
            }
        ]
    },

    // Royal armory
    royal_armory: {
        emojis: '⚔️🛡️👑',
        text: 'The Royal Armory contains ancient weapons blessed by the old kings. The armorer, a wise dwarf 🧔, recognizes your noble quest. "Take the Dragonslayer Sword and the Shield of Light. You will need them for what lies ahead."',
        choices: [
            {
                text: '⚔️ Accept the legendary weapons',
                nextScene: 'armed_and_ready',
                effects: {
                    addItem: '🗡️',
                    removeItem: '🛡️',
                    addItem: '🛡️',
                    experience: 25,
                    setFlag: { legendary_weapons: true }
                }
            },
            {
                text: '🏰 Ask about the kingdom\'s defenses',
                nextScene: 'kingdom_defense'
            },
            {
                text: '📚 Study the ancient battle tactics',
                nextScene: 'battle_knowledge'
            }
        ]
    },

    // Moonwell
    moonwell: {
        emojis: '🌙💧✨',
        text: 'The Moonwell is a sacred pool that reflects not the sky, but the heart\'s true desires. Lyralei chants an ancient song, and the water begins to glow. "The Crystal Shard rests at the bottom, but the well will test your purity of purpose."',
        choices: [
            {
                text: '💧 Dive into the sacred waters',
                nextScene: 'moonwell_trial',
                effects: {
                    setFlag: { moonwell_trial: true }
                }
            },
            {
                text: '🔮 Use magic to communicate with the well',
                nextScene: 'well_communion',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true
                }
            },
            {
                text: '🧝‍♀️ Ask Lyralei to perform the ritual',
                nextScene: 'elf_ritual',
                conditions: { hasFlag: 'helped_elf' }
            }
        ]
    },

    fortress_approach: {
        emojis: '🏰👹⚡',
        text: 'The Shadow Lord\'s fortress looms before you, wreathed in dark clouds and crackling with evil energy. You can feel the third Crystal Shard\'s power calling from within, but the path is perilous.',
        choices: [
            {
                text: '🗡️ Storm the gates directly',
                nextScene: 'fortress_battle'
            },
            {
                text: '🤫 Sneak in through a side entrance',
                nextScene: 'fortress_stealth'
            },
            {
                text: '💎 Use the crystal shards to weaken the fortress',
                nextScene: 'crystal_convergence',
                conditions: { hasItem: '💎' }
            }
        ]
    },

    great_oak: {
        emojis: '🌳💎✨',
        text: 'The Great Oak towers majestically before you, its ancient trunk wide enough to house a village. At its base, you see the entrance to a root chamber where a Crystal Shard pulses with gentle light.',
        choices: [
            {
                text: '🚪 Enter the root chamber carefully',
                nextScene: 'root_chamber',
                effects: {
                    experience: 20
                }
            },
            {
                text: '🙏 Ask the Oak\'s permission first',
                nextScene: 'oak_blessing',
                effects: {
                    setFlag: { oak_blessed: true }
                }
            },
            {
                text: '🔮 Use magic to commune with the tree',
                nextScene: 'oak_communion',
                conditions: { playerClass: 'wizard' }
            }
        ]
    },

    underground_chamber: {
        emojis: '🕯️🏛️💧',
        text: 'The hidden passage leads to an ancient underground chamber. Water drips from crystal formations, and you see murals depicting the original creation of the Crystal of Harmony. An altar stands at the center.',
        choices: [
            {
                text: '🔍 Examine the murals for clues',
                nextScene: 'mural_study',
                effects: {
                    experience: 20
                }
            },
            {
                text: '⛪ Investigate the central altar',
                nextScene: 'altar_investigation'
            },
            {
                text: '💧 Study the crystal formations',
                nextScene: 'crystal_formation_study'
            }
        ]
    },

    // Batch 5: Next 6 missing scenes
    chokepoint_training: {
        emojis: '🏰⚔️🛡️',
        text: 'You organize intensive chokepoint combat training, teaching defenders how to maximize their advantage in narrow passages and doorways. The training focuses on coordinated defense and tactical positioning.',
        choices: [
            {
                text: '🛡️ Emphasize shield wall formations',
                nextScene: 'defensive_training',
                effects: {
                    setFlag: { shield_tactics: true },
                    experience: 30
                }
            },
            {
                text: '🏹 Train coordinated archer support',
                nextScene: 'ranged_defense',
                effects: {
                    setFlag: { chokepoint_archers: true },
                    experience: 25
                }
            },
            {
                text: '⚔️ Practice quick strike tactics',
                nextScene: 'tactical_victory',
                effects: {
                    setFlag: { chokepoint_master: true },
                    experience: 35
                }
            }
        ]
    },

    civilian_combat_training: {
        emojis: '👥⚔️🛡️',
        text: 'You train ordinary villagers in basic combat skills, teaching them to defend themselves and their homes. Though they lack military experience, their determination and courage make up for their inexperience.',
        choices: [
            {
                text: '🛡️ Focus on basic defensive techniques',
                nextScene: 'militia_training',
                effects: {
                    setFlag: { trained_civilians: true },
                    experience: 25
                }
            },
            {
                text: '🏹 Teach simple ranged combat',
                nextScene: 'archer_positions_set',
                effects: {
                    setFlag: { civilian_archers: true },
                    experience: 20
                }
            },
            {
                text: '👥 Organize them into effective units',
                nextScene: 'militia_confederation',
                effects: {
                    setFlag: { organized_militia: true },
                    experience: 30
                }
            }
        ]
    },

    compassion_judgment: {
        emojis: '💖⚖️🌙',
        text: 'The Moonwell weighs your acts of compassion and kindness. Every life you\'ve saved, every moment of mercy you\'ve shown, and every sacrifice you\'ve made for others shines like starlight in the sacred waters.',
        choices: [
            {
                text: '💎 Accept the Crystal Shard with humility',
                nextScene: 'shard_received',
                effects: {
                    addItem: '💎',
                    setFlag: { compassionate_hero: true },
                    experience: 40
                }
            },
            {
                text: '🙏 Thank the Moonwell for its wisdom',
                nextScene: 'moonwell_guidance',
                effects: {
                    setFlag: { moonwell_blessed: true },
                    experience: 30
                }
            },
            {
                text: '🌟 Pledge to continue helping others',
                nextScene: 'compassion_pledge',
                effects: {
                    setFlag: { compassion_sworn: true },
                    experience: 35
                }
            }
        ]
    },

    combat_analysis: {
        emojis: '📊⚔️🧠',
        text: 'You systematically analyze the combat patterns and tactics you\'ve observed, identifying strengths and weaknesses in both ally and enemy forces. This tactical knowledge will prove invaluable in future battles.',
        choices: [
            {
                text: '📈 Focus on enemy weaknesses',
                nextScene: 'weakness_exploitation',
                effects: {
                    setFlag: { enemy_analysis: true },
                    experience: 35
                }
            },
            {
                text: '🛡️ Improve allied defensive strategies',
                nextScene: 'defensive_training',
                effects: {
                    setFlag: { tactical_advisor: true },
                    experience: 30
                }
            },
            {
                text: '📚 Document findings for training others',
                nextScene: 'tactical_manual_created',
                effects: {
                    setFlag: { combat_scholar: true },
                    experience: 40
                }
            }
        ]
    },

    combat_magic_learned: {
        emojis: '⚔️🔮⚡',
        text: 'You master advanced combat magic techniques, learning to weave offensive spells seamlessly with defensive maneuvers. Your magical prowess in battle becomes a formidable weapon against the forces of darkness.',
        choices: [
            {
                text: '⚡ Focus on lightning-based attack spells',
                nextScene: 'magical_investigation',
                effects: {
                    magical: true,
                    setFlag: { lightning_mage: true },
                    experience: 35
                }
            },
            {
                text: '🔥 Master fire magic for area attacks',
                nextScene: 'offensive_magic_demo',
                effects: {
                    magical: true,
                    setFlag: { fire_mage: true },
                    experience: 30
                }
            },
            {
                text: '🧊 Learn ice magic for crowd control',
                nextScene: 'tactical_victory',
                effects: {
                    magical: true,
                    setFlag: { ice_mage: true },
                    experience: 40
                }
            }
        ]
    },

    combat_retrieval: {
        emojis: '🏃‍♂️💎⚔️',
        text: 'You execute a daring combat retrieval mission, fighting your way through enemy forces to secure a vital Crystal Shard. The mission requires quick thinking, precise strikes, and perfect timing.',
        choices: [
            {
                text: '💎 Secure the Crystal Shard and retreat',
                nextScene: 'shard_secured',
                effects: {
                    addItem: '💎',
                    health: -20,
                    experience: 40
                }
            },
            {
                text: '⚔️ Clear out all enemies in the area',
                nextScene: 'tactical_victory',
                effects: {
                    health: -30,
                    experience: 45,
                    setFlag: { area_cleared: true }
                }
            },
            {
                text: '🤝 Rally any survivors to join the fight',
                nextScene: 'survivor_rally',
                effects: {
                    setFlag: { rescue_leader: true },
                    experience: 35
                }
            }
        ]
    },

    // Batch 18: Location and exploration scenes
    fortified_position: {
        emojis: '🏰🛡️⛰️',
        text: 'You establish a fortified position on high ground, using natural terrain and constructed defenses to create an impregnable stronghold. From this vantage point, you can control the surrounding area and coordinate your forces.',
        choices: [
            {
                text: '🏹 Set up archer towers for maximum range',
                nextScene: 'archer_positions_set',
                effects: {
                    setFlag: { fortified_archers: true },
                    experience: 35
                }
            },
            {
                text: '🔮 Install magical defensive wards',
                nextScene: 'permanent_ward_created',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { warded_fortress: true },
                    experience: 40
                }
            },
            {
                text: '👥 Train the garrison in defensive tactics',
                nextScene: 'guard_training_program',
                effects: {
                    setFlag: { elite_garrison: true },
                    experience: 30
                }
            }
        ]
    },

    fortress_architect: {
        emojis: '🏗️🏰📐',
        text: 'You design and oversee the construction of a massive fortress, applying your strategic knowledge to create an impregnable defensive structure. Every wall, tower, and gateway is positioned for maximum tactical advantage.',
        choices: [
            {
                text: '🏰 Focus on creating multiple defensive layers',
                nextScene: 'layered_defense',
                effects: {
                    setFlag: { master_architect: true },
                    experience: 50
                }
            },
            {
                text: '🎯 Design specialized archer positions',
                nextScene: 'precision_archer_corps',
                effects: {
                    setFlag: { archer_fortress: true },
                    experience: 40
                }
            },
            {
                text: '🔮 Integrate magical defenses into the structure',
                nextScene: 'castle_ward_creation',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_fortress: true },
                    experience: 45
                }
            }
        ]
    },

    fortress_inner_sanctum: {
        emojis: '🏰👑💎',
        text: 'You reach the heart of the Shadow Lord\'s fortress - the inner sanctum where he keeps his most precious possessions and darkest secrets. The final Crystal Shard pulses with corrupted energy at the chamber\'s center.',
        choices: [
            {
                text: '💎 Attempt to claim the Crystal Shard directly',
                nextScene: 'shard_grab',
                effects: {
                    setFlag: { sanctum_infiltrator: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Try to purify the shard\'s corruption first',
                nextScene: 'shard_purification',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { purification_master: true },
                    experience: 50
                }
            },
            {
                text: '👹 Confront the Shadow Lord in his seat of power',
                nextScene: 'final_duel',
                effects: {
                    setFlag: { direct_challenger: true },
                    experience: 55
                }
            }
        ]
    },

    hidden_location_search: {
        emojis: '🔍🗺️🏔️',
        text: 'Following ancient maps and cryptic clues, you search for hidden locations where Crystal Shards might be concealed. Your investigation leads you through forgotten paths and secret places known only to legends.',
        choices: [
            {
                text: '🗿 Search among ancient ruins and burial sites',
                nextScene: 'ruins_search',
                effects: {
                    setFlag: { ruin_explorer: true },
                    experience: 35
                }
            },
            {
                text: '🌲 Explore deep forest sanctuaries',
                nextScene: 'forest_investigation',
                effects: {
                    setFlag: { forest_explorer: true },
                    experience: 30
                }
            },
            {
                text: '🔮 Use magical detection to locate hidden caches',
                nextScene: 'magical_shard_detection',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { magical_seeker: true },
                    experience: 40
                }
            }
        ]
    },

    hidden_passage: {
        emojis: '🚪🕯️🗝️',
        text: 'You discover a hidden passage behind crumbling temple walls. The secret corridor is lit by mystical torches that flicker with eternal flame, leading deeper into the ancient structure\'s forgotten chambers.',
        choices: [
            {
                text: '🔍 Explore the passage cautiously',
                nextScene: 'underground_chamber',
                effects: {
                    setFlag: { secret_explorer: true },
                    experience: 30
                }
            },
            {
                text: '🔮 Use magic to detect traps or dangers',
                nextScene: 'trap_detection',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { trap_spotter: true },
                    experience: 35
                }
            },
            {
                text: '💨 Move quickly through the passage',
                nextScene: 'speed_route',
                effects: {
                    setFlag: { quick_explorer: true },
                    experience: 25
                }
            }
        ]
    },

    root_chamber: {
        emojis: '🌳🏛️💎',
        text: 'The root chamber beneath the Great Oak is a sacred space where nature\'s power has crystallized over millennia. Ancient root systems form natural pillars, and in the center lies a Crystal Shard pulsing with pure life energy.',
        choices: [
            {
                text: '💎 Carefully extract the Crystal Shard',
                nextScene: 'careful_extraction',
                effects: {
                    addItem: '💎',
                    setFlag: { nature_blessed: true },
                    experience: 40
                }
            },
            {
                text: '🌿 Commune with the life energy first',
                nextScene: 'nature_magic_fusion',
                effects: {
                    magical: true,
                    setFlag: { life_energy_touched: true },
                    experience: 45
                }
            },
            {
                text: '🙏 Perform a ritual of gratitude to the Oak',
                nextScene: 'oak_blessing',
                effects: {
                    setFlag: { oak_ritualist: true },
                    experience: 35
                }
            }
        ]
    }
};
