// Final battle and climax scenes
export const FINAL_BATTLE_SCENES = {
    // Crystal convergence - major story point
    crystal_convergence: {
        emojis: '💎💎💎',
        text: 'You have found all three Crystal Shards! They begin to resonate with each other, creating a beautiful harmony of light and sound. But as they merge, a dark figure emerges - the Shadow Lord who shattered the original crystal!',
        conditions: {
            hasItem: '💎'
        },
        choices: [
            {
                text: '⚔️ Challenge the Shadow Lord to combat',
                nextScene: 'final_battle_combat',
                conditions: { playerClass: 'knight' }
            },
            {
                text: '🔮 Use magic to bind the Shadow Lord',
                nextScene: 'final_battle_magic',
                conditions: { playerClass: 'wizard' }
            },
            {
                text: '🏹 Strike with a perfect shot',
                nextScene: 'final_battle_precision',
                conditions: { playerClass: 'archer' }
            },
            {
                text: '💎 Try to reason with the Shadow Lord',
                nextScene: 'shadow_redemption'
            }
        ]
    },

    // Final battles - different based on class
    final_battle_combat: {
        emojis: '⚔️👹💥',
        text: 'Steel clashes against shadow as you duel the Shadow Lord! Your legendary weapons blaze with holy light, each strike weakening the darkness. The fate of the realm rests on your blade!',
        choices: [
            {
                text: '🛡️ Use the Shield of Light to reflect dark magic',
                nextScene: 'victory_knight',
                conditions: { hasFlag: 'legendary_weapons' },
                effects: {
                    magical: true
                }
            },
            {
                text: '⚔️ Strike with all your might',
                nextScene: 'victory_determination'
            }
        ]
    },

    final_battle_magic: {
        emojis: '🔮⚡🌟',
        text: 'You weave powerful spells, binding the Shadow Lord with chains of pure light! Your crystal orb amplifies your magic as reality itself bends to your will. The Shadow Lord struggles against your mystical bonds.',
        choices: [
            {
                text: '📜 Recite the ancient prophecy',
                nextScene: 'victory_wizard',
                conditions: { hasFlag: 'knows_prophecy' },
                effects: {
                    magical: true
                }
            },
            {
                text: '🔮 Channel all your magical energy',
                nextScene: 'victory_sacrifice'
            }
        ]
    },

    final_battle_precision: {
        emojis: '🏹💫🎯',
        text: 'You draw your bow with perfect form, time seeming to slow as you aim for the Shadow Lord\'s heart. Your arrow glows with the combined power of nature and starlight. One shot to save the kingdom.',
        choices: [
            {
                text: '🌟 Shoot with the blessing of the forest',
                nextScene: 'victory_archer',
                conditions: { hasFlag: 'forest_ally' },
                effects: {
                    magical: true
                }
            },
            {
                text: '🎯 Trust in your skill and shoot',
                nextScene: 'victory_skill'
            }
        ]
    },

    // Alternative Shadow Lord confrontations
    shadow_redemption: {
        emojis: '👹💔💡',
        text: 'You attempt to reason with the Shadow Lord. "I sense pain in you, not just evil. What drove you to shatter the Crystal?" The Shadow Lord pauses, memories of his past flickering in his dark eyes.',
        choices: [
            {
                text: '💞 Show compassion for his pain',
                nextScene: 'redemption_path',
                effects: {
                    setFlag: { compassionate_hero: true }
                }
            },
            {
                text: '🤝 Offer to help heal his wounds',
                nextScene: 'healing_offer',
                conditions: { playerClass: 'wizard' }
            },
            {
                text: '⚖️ Demand he face justice for his crimes',
                nextScene: 'justice_demand'
            }
        ]
    },

    // Victory scene variations
    victory_determination: {
        emojis: '⚔️💪🌟',
        text: 'Through sheer determination and skill, you overcome the Shadow Lord in single combat. Your blade strikes true, and as he falls, the Crystal of Harmony reforms from pure willpower and heroism.',
        choices: [
            {
                text: '👑 Accept the role of Royal Champion',
                nextScene: 'ending_champion'
            },
            {
                text: '🌍 Vow to protect all realms from darkness',
                nextScene: 'ending_wanderer'
            }
        ]
    },

    victory_sacrifice: {
        emojis: '🔮💫⭐',
        text: 'You pour all your magical energy into one final spell, sacrificing your own power to restore the Crystal. The Shadow Lord is defeated, but you are left magically drained. The kingdom is saved, but at great personal cost.',
        choices: [
            {
                text: '📚 Retire to study and teach others',
                nextScene: 'ending_teacher'
            },
            {
                text: '🌱 Find peace in simple village life',
                nextScene: 'ending_peaceful'
            }
        ]
    },

    victory_skill: {
        emojis: '🏹🎯💯',
        text: 'Your perfect shot finds its mark with supernatural precision. The Shadow Lord falls, struck through the heart by an arrow of pure skill and determination. Your archery skills have saved the realm.',
        choices: [
            {
                text: '🏹 Become the kingdom\'s master archer',
                nextScene: 'ending_master_archer'
            },
            {
                text: '🌲 Return to guard the forest',
                nextScene: 'ending_guardian'
            }
        ]
    },

    // Redemption paths
    redemption_path: {
        emojis: '💞👹💡',
        text: 'Your compassion touches something deep within the Shadow Lord. "I... I was once like you," he whispers. "I tried to protect this realm, but I failed. The darkness consumed me." A tear falls from his dark eyes.',
        choices: [
            {
                text: '🤝 Offer to help him find redemption',
                nextScene: 'shadow_redeemed',
                effects: {
                    setFlag: { redeemed_shadow_lord: true }
                }
            },
            {
                text: '💎 Show him the Crystal Shards\' power',
                nextScene: 'crystal_healing'
            },
            {
                text: '🌟 Combine your light with his darkness',
                nextScene: 'balance_restored'
            }
        ]
    },

    shadow_redeemed: {
        emojis: '🤝💡🌟',
        text: 'The Shadow Lord removes his dark crown, revealing a face marked by centuries of sorrow. "Help me undo the damage I have caused," he pleads. Together, you work to restore the Crystal of Harmony through forgiveness and unity.',
        choices: [
            {
                text: '🤝 Work together to heal the realm',
                nextScene: 'ending_redeemer'
            },
            {
                text: '👑 Help him reclaim his true identity',
                nextScene: 'identity_restored'
            }
        ]
    },

    crystal_healing: {
        emojis: '💎✨💚',
        text: 'The Crystal Shards respond to both your light and his darkness, creating a perfect balance. The Shadow Lord gasps as the corruption leaves his body, revealing the noble protector he once was.',
        choices: [
            {
                text: '🌟 Restore the Crystal of Harmony together',
                nextScene: 'joint_restoration'
            },
            {
                text: '🤝 Forge a new alliance',
                nextScene: 'new_alliance'
            }
        ]
    },

    // Final restoration scenes
    joint_restoration: {
        emojis: '💎🤝🌟',
        text: 'Working together, you and the redeemed Shadow Lord combine the three Crystal Shards. The resulting Crystal of Harmony is more powerful than ever, its light healing not just the realm but all who dwell within it.',
        choices: [
            {
                text: '🌍 Establish a new era of peace and understanding',
                nextScene: 'ending_peace_era'
            }
        ]
    },

    healing_offer: {
        emojis: '🤝💚🔮',
        text: 'You extend your hand toward the Shadow Lord, magical healing energy glowing around your fingers. "Your pain doesn\'t have to define you," you say gently. "Let me help heal the wounds that darkness has left on your soul."',
        choices: [
            {
                text: '💖 Pour healing magic into his corrupted form',
                nextScene: 'healing_attempt',
                effects: {
                    magical: true,
                    health: -20
                }
            },
            {
                text: '🌟 Offer to share your light with his darkness',
                nextScene: 'light_sharing'
            },
            {
                text: '📚 Teach him the healing magic you\'ve learned',
                nextScene: 'magic_teaching'
            }
        ]
    },

    justice_demand: {
        emojis: '⚖️👹💥',
        text: 'Your voice rings with righteous authority as you demand justice. "You have caused immense suffering! The realm cries out for justice against your crimes!" The Shadow Lord\'s eyes blaze with defiant fury.',
        choices: [
            {
                text: '⚔️ Enforce justice through combat',
                nextScene: 'justice_battle',
                effects: {
                    setFlag: { justice_seeker: true },
                    experience: 30
                }
            },
            {
                text: '⚖️ Offer a trial by combat',
                nextScene: 'trial_by_combat'
            },
            {
                text: '💎 Use the Crystal Shards to bind him for judgment',
                nextScene: 'crystal_binding'
            }
        ]
    },

    // Fortress infiltration and shard hunting scenes
    shard_hunt: {
        emojis: '💎🔍🏰',
        text: 'Deep within the Shadow Lord\'s fortress, you search for the final Crystal Shard. The walls pulse with dark energy, and you can feel the shard\'s presence nearby, but it\'s heavily guarded by shadow magic.',
        choices: [
            {
                text: '🤫 Use stealth to avoid the magical defenses',
                nextScene: 'stealth_shard_hunt',
                effects: {
                    setFlag: { stealth_approach: true },
                    experience: 30
                }
            },
            {
                text: '⚔️ Fight through the shadow guardians',
                nextScene: 'guardian_battle',
                effects: {
                    health: -20,
                    experience: 35
                }
            },
            {
                text: '🔮 Use magic to dispel the dark protections',
                nextScene: 'magical_dispel',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    experience: 40
                }
            }
        ]
    },

    power_destruction: {
        emojis: '💥⚡🏰',
        text: 'You locate the source of the fortress\'s dark power - a massive conduit of shadow magic that feeds energy throughout the stronghold. Destroying it could cripple the Shadow Lord\'s defenses, but the explosion might be dangerous.',
        choices: [
            {
                text: '💥 Destroy the power source immediately',
                nextScene: 'power_source_destroyed',
                effects: {
                    health: -25,
                    setFlag: { fortress_weakened: true },
                    experience: 40
                }
            },
            {
                text: '🔮 Try to redirect the power against the Shadow Lord',
                nextScene: 'power_redirection',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { redirected_power: true },
                    experience: 45
                }
            },
            {
                text: '🤫 Sabotage it quietly for a delayed destruction',
                nextScene: 'delayed_sabotage',
                effects: {
                    setFlag: { timed_destruction: true },
                    experience: 35
                }
            }
        ]
    },

    stealth_confrontation: {
        emojis: '🤫👹🗡️',
        text: 'You successfully infiltrate the Shadow Lord\'s private chambers through stealth and cunning. He sits upon his throne, unaware of your presence. You have the advantage of surprise for a critical first strike.',
        choices: [
            {
                text: '🗡️ Strike immediately for maximum damage',
                nextScene: 'surprise_attack',
                effects: {
                    setFlag: { surprise_advantage: true },
                    experience: 35
                }
            },
            {
                text: '💬 Reveal yourself and challenge him honorably',
                nextScene: 'honorable_challenge',
                effects: {
                    setFlag: { honorable_fighter: true },
                    experience: 30
                }
            },
            {
                text: '👁️ Observe him first to learn his weaknesses',
                nextScene: 'shadow_lord_observation',
                effects: {
                    setFlag: { tactical_knowledge: true },
                    experience: 25
                }
            }
        ]
    },

    stealth_shard_hunt: {
        emojis: '🤫💎👻',
        text: 'Moving silently through the fortress corridors, you avoid the roaming shadow wraiths and magical sensors. Your careful approach leads you to a hidden vault where the final Crystal Shard pulses with captive light.',
        choices: [
            {
                text: '💎 Carefully extract the Crystal Shard',
                nextScene: 'careful_extraction',
                effects: {
                    addItem: '💎',
                    experience: 30
                }
            },
            {
                text: '🔍 Check for traps before taking the shard',
                nextScene: 'trap_detection',
                effects: {
                    experience: 25
                }
            },
            {
                text: '🔮 Use magic to safely teleport the shard to you',
                nextScene: 'magical_retrieval',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    addItem: '💎',
                    experience: 35
                }
            }
        ]
    },

    prisoner_rescue: {
        emojis: '🔓👥💪',
        text: 'In the fortress dungeons, you discover prisoners - knights, mages, and villagers captured during the Shadow Lord\'s raids. They look up at you with desperate hope, their spirits broken but not destroyed.',
        choices: [
            {
                text: '🔓 Free all the prisoners immediately',
                nextScene: 'mass_prison_break',
                effects: {
                    setFlag: { freed_prisoners: true },
                    experience: 40
                }
            },
            {
                text: '🤫 Free them quietly to avoid alerting guards',
                nextScene: 'silent_rescue',
                effects: {
                    setFlag: { stealth_rescue: true },
                    experience: 35
                }
            },
            {
                text: '⚔️ Recruit them to fight alongside you',
                nextScene: 'prisoner_army',
                effects: {
                    setFlag: { prisoner_allies: true },
                    experience: 45
                }
            }
        ]
    },

    final_duel: {
        emojis: '⚔️👹🔥',
        text: 'The Shadow Lord descends from his throne for the ultimate confrontation. "So, you have come at last," he says, drawing a blade of pure darkness. "Let us end this, once and for all!" The final duel begins.',
        choices: [
            {
                text: '⚔️ Meet him in honorable single combat',
                nextScene: 'honorable_final_duel',
                effects: {
                    setFlag: { honorable_duel: true },
                    experience: 50
                }
            },
            {
                text: '🛡️ Fight defensively and wait for an opening',
                nextScene: 'defensive_duel_strategy',
                effects: {
                    experience: 40
                }
            },
            {
                text: '⚡ Unleash all your power in an overwhelming assault',
                nextScene: 'all_out_assault',
                effects: {
                    health: -20,
                    experience: 45,
                    setFlag: { berserker_final: true }
                }
            }
        ]
    },

    shard_grab: {
        emojis: '💎✊💨',
        text: 'In a desperate move, you lunge for the final Crystal Shard that hovers above the Shadow Lord\'s throne. Your fingers close around it just as dark magic lashes out at you. The shard\'s power courses through your body.',
        choices: [
            {
                text: '💎 Use the shard\'s power immediately',
                nextScene: 'shard_power_unleashed',
                effects: {
                    addItem: '💎',
                    magical: true,
                    health: -15,
                    experience: 40
                }
            },
            {
                text: '🏃‍♂️ Grab the shard and retreat quickly',
                nextScene: 'hasty_retreat_with_shard',
                effects: {
                    addItem: '💎',
                    health: -10,
                    experience: 30
                }
            },
            {
                text: '⚔️ Use the shard as a weapon against him',
                nextScene: 'shard_weapon_attack',
                effects: {
                    addItem: '💎',
                    experience: 35
                }
            }
        ]
    },

    shadow_lord_story: {
        emojis: '👹📖💔',
        text: 'The Shadow Lord\'s eyes grow distant as he begins to speak: "I was once the realm\'s greatest protector, known as Sir Valdris the Lightbringer. But I failed when it mattered most. The Crystal\'s power corrupted me when I tried to use it to save those I loved."',
        choices: [
            {
                text: '💔 Ask about what happened to those he loved',
                nextScene: 'tragic_backstory_revealed',
                effects: {
                    setFlag: { knows_full_tragedy: true },
                    experience: 35
                }
            },
            {
                text: '💡 Point out that he can still choose redemption',
                nextScene: 'redemption_offer',
                effects: {
                    setFlag: { redemption_offered: true },
                    experience: 40
                }
            },
            {
                text: '⚖️ Argue that his past doesn\'t excuse his crimes',
                nextScene: 'justice_maintained',
                effects: {
                    setFlag: { unwavering_justice: true },
                    experience: 30
                }
            }
        ]
    },

    identity_restored: {
        emojis: '👑✨🌟',
        text: 'As the darkness fades from his form, Sir Valdris the Lightbringer is revealed - the noble knight he once was. His armor gleams silver again, and his eyes shine with renewed purpose. "Thank you for reminding me who I truly am."',
        choices: [
            {
                text: '🤝 Welcome him back as an ally',
                nextScene: 'valdris_ally',
                effects: {
                    setFlag: { valdris_redeemed: true },
                    experience: 50
                }
            },
            {
                text: '👑 Ask him to help rule the realm justly',
                nextScene: 'co_ruler_offer',
                effects: {
                    setFlag: { shared_leadership: true },
                    experience: 45
                }
            },
            {
                text: '🛡️ Suggest he dedicate himself to protecting others',
                nextScene: 'protector_path',
                effects: {
                    setFlag: { valdris_protector: true },
                    experience: 40
                }
            }
        ]
    },

    new_alliance: {
        emojis: '🤝⚔️🌟',
        text: 'Together, you and the redeemed Sir Valdris forge a new alliance to protect the realm. Your combined strength - light and redeemed shadow working in harmony - creates a powerful force for good that will endure for generations.',
        choices: [
            {
                text: '🏰 Establish a new order of guardians',
                nextScene: 'guardian_order_founded',
                effects: {
                    setFlag: { new_guardian_order: true },
                    experience: 60
                }
            },
            {
                text: '🌍 Pledge to heal all realms touched by darkness',
                nextScene: 'realm_healing_mission',
                effects: {
                    setFlag: { healing_mission: true },
                    experience: 55
                }
            },
            {
                text: '📚 Create a new code of honor for future heroes',
                nextScene: 'heroic_code_created',
                effects: {
                    setFlag: { heroic_legacy: true },
                    experience: 50
                }
            }
        ]
    },

    // Additional tactical scenes
    tactical_victory: {
        emojis: '🧠⚔️🏆',
        text: 'Your tactical brilliance allows you to outmaneuver the shadow forces despite being outnumbered. Using terrain, timing, and clever positioning, you achieve a decisive victory that saves countless lives.',
        choices: [
            {
                text: '📊 Document your tactics for future defenders',
                nextScene: 'tactical_manual_created',
                effects: {
                    setFlag: { tactical_legacy: true },
                    experience: 40
                }
            },
            {
                text: '👨‍🏫 Train others in advanced combat strategy',
                nextScene: 'strategy_school_founded',
                effects: {
                    setFlag: { strategy_teacher: true },
                    experience: 35
                }
            },
            {
                text: '🏰 Apply your knowledge to fortress defense',
                nextScene: 'fortress_architect',
                effects: {
                    setFlag: { defense_architect: true },
                    experience: 30
                }
            }
        ]
    },

    strategic_retreat: {
        emojis: '🏃‍♂️🧠🛡️',
        text: 'Your strategic retreat saves lives and preserves forces for a better opportunity. Sometimes wisdom lies not in standing firm, but in knowing when to fall back and regroup for a more favorable engagement.',
        choices: [
            {
                text: '🗺️ Plan a counter-attack from a better position',
                nextScene: 'counter_attack_planned',
                effects: {
                    setFlag: { strategic_mind: true },
                    experience: 35
                }
            },
            {
                text: '📢 Rally reinforcements for the next battle',
                nextScene: 'reinforcement_rally',
                effects: {
                    setFlag: { rally_expert: true },
                    experience: 30
                }
            },
            {
                text: '🛡️ Establish a stronger defensive position',
                nextScene: 'fortified_position',
                effects: {
                    setFlag: { defensive_expert: true },
                    experience: 25
                }
            }
        ]
    },

    victory_celebration: {
        emojis: '🎉🏆🌟',
        text: 'The realm celebrates your victory! Festivals fill the streets, songs are sung of your deeds, and the people look to the future with hope. You have become a legend that will inspire heroes for generations to come.',
        choices: [
            {
                text: '👑 Accept the people\'s acclaim gracefully',
                nextScene: 'graceful_hero',
                effects: {
                    setFlag: { beloved_hero: true },
                    experience: 40
                }
            },
            {
                text: '🙏 Humbly credit others for the victory',
                nextScene: 'humble_victor',
                effects: {
                    setFlag: { humble_hero: true },
                    experience: 35
                }
            },
            {
                text: '🛡️ Remind everyone that vigilance must continue',
                nextScene: 'vigilant_protector',
                effects: {
                    setFlag: { eternal_guardian: true },
                    experience: 30
                }
            }
        ]
    },

    battlefield_investigation: {
        emojis: '🔍⚔️📋',
        text: 'You carefully examine the battlefield aftermath, studying the shadow creatures\' remains and attack patterns. Your investigation reveals valuable intelligence about their weaknesses and origins.',
        choices: [
            {
                text: '📊 Create a detailed report of your findings',
                nextScene: 'intelligence_report',
                effects: {
                    setFlag: { battle_analyst: true },
                    experience: 30
                }
            },
            {
                text: '🔬 Study the shadow corruption samples',
                nextScene: 'corruption_research',
                effects: {
                    setFlag: { corruption_researcher: true },
                    experience: 35
                }
            },
            {
                text: '👨‍🏫 Share your discoveries with other fighters',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { knowledge_sharer: true },
                    experience: 25
                }
            }
        ]
    },

    heroic_last_stand: {
        emojis: '⚔️🛡️🌟',
        text: 'In a moment that will be remembered for ages, you make your heroic last stand against overwhelming odds. Your courage inspires others and your sacrifice ensures that hope survives even in the darkest hour.',
        choices: [
            {
                text: '💪 Fight until your last breath',
                nextScene: 'legendary_sacrifice',
                effects: {
                    health: -50,
                    setFlag: { legendary_hero: true },
                    experience: 100
                }
            },
            {
                text: '📢 Rally others with your example',
                nextScene: 'inspiring_last_stand',
                effects: {
                    health: -30,
                    setFlag: { inspirational_leader: true },
                    experience: 80
                }
            },
            {
                text: '🌟 Channel your life force into one final attack',
                nextScene: 'ultimate_sacrifice',
                effects: {
                    health: -40,
                    setFlag: { ultimate_hero: true },
                    experience: 90
                }
            }
        ]
    },

    // Batch 1: First 10 missing scenes
    all_out_assault: {
        emojis: '⚔️💥🔥',
        text: 'You unleash every ounce of your power in a devastating assault! Your weapons blur with speed as you attack relentlessly, overwhelming the Shadow Lord with sheer force and determination. This is your moment - victory or nothing!',
        choices: [
            {
                text: '⚔️ Continue the relentless assault',
                nextScene: 'victory_determination',
                effects: {
                    health: -15,
                    experience: 50
                }
            },
            {
                text: '🛡️ Switch to a more defensive approach',
                nextScene: 'defensive_duel_strategy',
                effects: {
                    experience: 30
                }
            },
            {
                text: '🌟 Channel your life force for ultimate power',
                nextScene: 'ultimate_sacrifice',
                effects: {
                    health: -30,
                    setFlag: { final_sacrifice: true },
                    experience: 80
                }
            }
        ]
    },

    altar_investigation: {
        emojis: '⛪🔍✨',
        text: 'You approach the ancient altar at the center of the underground chamber. Strange symbols glow faintly on its surface, and you sense powerful magic emanating from within. This altar may hold secrets about the Crystal\'s creation.',
        choices: [
            {
                text: '🔮 Use magic to activate the altar',
                nextScene: 'crystal_restoration_vision',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    experience: 35
                }
            },
            {
                text: '📜 Study the symbols carefully',
                nextScene: 'ancient_knowledge',
                effects: {
                    experience: 25,
                    setFlag: { altar_knowledge: true }
                }
            },
            {
                text: '💎 Place a Crystal Shard on the altar',
                nextScene: 'crystal_convergence',
                conditions: { hasItem: '💎' },
                effects: {
                    experience: 40
                }
            }
        ]
    },

    ancient_weapons_found: {
        emojis: '⚔️🏛️✨',
        text: 'Among the ancient artifacts, you discover legendary weapons from the realm\'s golden age - a sword that glows with inner light, a bow that never misses its mark, and a staff crackling with pure magic.',
        choices: [
            {
                text: '⚔️ Take the legendary sword',
                nextScene: 'royal_armory',
                conditions: { playerClass: 'knight' },
                effects: {
                    addItem: '⚔️',
                    setFlag: { legendary_sword: true },
                    experience: 30
                }
            },
            {
                text: '🏹 Take the perfect bow',
                nextScene: 'shard_quest',
                conditions: { playerClass: 'archer' },
                effects: {
                    addItem: '🏹',
                    setFlag: { perfect_bow: true },
                    experience: 30
                }
            },
            {
                text: '🔮 Take the magical staff',
                nextScene: 'magical_communion',
                conditions: { playerClass: 'wizard' },
                effects: {
                    addItem: '🔮',
                    setFlag: { ancient_staff: true },
                    experience: 30
                }
            }
        ]
    },

    archer_positions_set: {
        emojis: '🏹🎯🏰',
        text: 'You strategically position archers at key vantage points around the battlefield. From towers, rooftops, and hidden alcoves, your marksmen can rain arrows down on enemies while staying protected.',
        choices: [
            {
                text: '🎯 Focus on precision shooting',
                nextScene: 'ranged_combat',
                effects: {
                    setFlag: { precision_archers: true },
                    experience: 25
                }
            },
            {
                text: '⚔️ Coordinate with ground troops',
                nextScene: 'tactical_victory',
                effects: {
                    setFlag: { coordinated_attack: true },
                    experience: 30
                }
            },
            {
                text: '🛡️ Provide covering fire for retreating allies',
                nextScene: 'strategic_retreat',
                effects: {
                    setFlag: { covering_fire: true },
                    experience: 20
                }
            }
        ]
    },

    armed_and_ready: {
        emojis: '⚔️🛡️💪',
        text: 'Equipped with legendary weapons and blessed armor, you stand ready to face whatever challenges await. Your equipment gleams with holy light, and you feel the weight of destiny on your shoulders.',
        choices: [
            {
                text: '🏰 Head to defend the kingdom',
                nextScene: 'village_defense',
                effects: {
                    setFlag: { fully_equipped: true },
                    experience: 20
                }
            },
            {
                text: '💎 Seek out the Crystal Shards',
                nextScene: 'shard_quest',
                effects: {
                    experience: 25
                }
            },
            {
                text: '👹 March directly to face the Shadow Lord',
                nextScene: 'fortress_approach',
                effects: {
                    setFlag: { direct_approach: true },
                    experience: 30
                }
            }
        ]
    },

    assassination_attempt: {
        emojis: '🗡️🌙💀',
        text: 'You strike from the shadows with deadly precision! Your blade finds its mark, but the Shadow Lord\'s dark magic shields him from the worst of the damage. He whirls around, eyes blazing with fury.',
        choices: [
            {
                text: '⚔️ Continue the attack while he\'s surprised',
                nextScene: 'final_duel',
                effects: {
                    health: -10,
                    setFlag: { assassination_attempted: true },
                    experience: 40
                }
            },
            {
                text: '🏃‍♂️ Retreat and try a different approach',
                nextScene: 'stealth_shard_hunt',
                effects: {
                    experience: 25
                }
            },
            {
                text: '💬 Use the surprise to demand answers',
                nextScene: 'shadow_lord_story',
                effects: {
                    setFlag: { forced_revelation: true },
                    experience: 35
                }
            }
        ]
    },

    balance_restored: {
        emojis: '⚖️🌟💎',
        text: 'Your light merges with his darkness, creating perfect balance. The Shadow Lord\'s corruption dissolves as harmony is restored. Light and shadow dance together in beautiful unity, healing both your souls and the realm itself.',
        choices: [
            {
                text: '🤝 Work together to restore the Crystal',
                nextScene: 'joint_restoration',
                effects: {
                    setFlag: { perfect_balance: true },
                    experience: 60,
                    magical: true
                }
            },
            {
                text: '🌍 Use this balance to heal the entire realm',
                nextScene: 'ending_peace_era',
                effects: {
                    setFlag: { realm_healed: true },
                    experience: 80
                }
            },
            {
                text: '👑 Establish a new order based on balance',
                nextScene: 'new_alliance',
                effects: {
                    setFlag: { balance_order: true },
                    experience: 70
                }
            }
        ]
    },

    balanced_approach: {
        emojis: '⚖️🌱💚',
        text: 'You maintain perfect balance between helping the forest and preserving your own strength. Your measured approach allows you to contribute meaningfully while ensuring you remain capable for the greater challenges ahead.',
        choices: [
            {
                text: '🌲 Continue working with the forest spirits',
                nextScene: 'spirit_revelation',
                effects: {
                    setFlag: { balanced_helper: true },
                    experience: 30
                }
            },
            {
                text: '💎 Focus on your main quest',
                nextScene: 'shard_quest',
                effects: {
                    experience: 25
                }
            },
            {
                text: '🤝 Seek allies for the final battle',
                nextScene: 'forest_army',
                effects: {
                    setFlag: { forest_alliance: true },
                    experience: 35
                }
            }
        ]
    },

    balanced_archery: {
        emojis: '🏹⚖️🎯',
        text: 'You demonstrate both offensive precision and defensive protection, showing that true archery mastery serves multiple purposes. Your arrows can strike down threats while also creating barriers of light to shield others.',
        choices: [
            {
                text: '🛡️ Focus on protective techniques',
                nextScene: 'protective_archery',
                effects: {
                    setFlag: { defensive_archer: true },
                    experience: 30
                }
            },
            {
                text: '💎 Earn the Crystal Shard through balance',
                nextScene: 'trial_success',
                effects: {
                    addItem: '💎',
                    setFlag: { balanced_master: true },
                    experience: 35
                }
            },
            {
                text: '🌟 Become a true master of archery',
                nextScene: 'ending_master_archer',
                effects: {
                    setFlag: { archery_perfection: true },
                    experience: 40
                }
            }
        ]
    },

    balanced_magic_demo: {
        emojis: '🔮⚖️✨',
        text: 'You weave together offensive and defensive magic in perfect harmony, creating a dazzling display of balanced power. The Moonwell recognizes your mastery and wisdom, glowing brighter with each perfectly controlled spell.',
        choices: [
            {
                text: '💎 Accept the Crystal Shard as your reward',
                nextScene: 'moonwell_success',
                effects: {
                    addItem: '💎',
                    setFlag: { magic_master: true },
                    experience: 40
                }
            },
            {
                text: '📚 Request knowledge instead of power',
                nextScene: 'moonwell_guidance',
                effects: {
                    setFlag: { wisdom_seeker: true },
                    experience: 35
                }
            },
            {
                text: '🌟 Use this mastery to help others',
                nextScene: 'ending_teacher',
                effects: {
                    setFlag: { balanced_teacher: true },
                    experience: 50
                }
            }
        ]
    }
};
