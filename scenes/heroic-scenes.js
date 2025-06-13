// Heroic actions, sacrifices, and legendary moments
export const HEROIC_SCENES = {
    heroic_alliance_charge: {
        emojis: '⚔️🤝🌟',
        text: 'Leading the unified alliance of all free peoples, you charge into the final battle against the forces of darkness. Humans, elves, dwarves, and forest creatures fight as one under your banner.',
        choices: [
            {
                text: '⚔️ Lead from the front lines',
                nextScene: 'inspirational_endurance',
                effects: {
                    health: -25,
                    setFlag: { front_line_leader: true },
                    experience: 60
                }
            },
            {
                text: '🛡️ Protect your allies while fighting',
                nextScene: 'sacrificial_protection',
                effects: {
                    health: -20,
                    setFlag: { protective_leader: true },
                    experience: 55
                }
            },
            {
                text: '💎 Channel Crystal Shard power through the charge',
                nextScene: 'shard_empowered_combat',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { crystal_commander: true },
                    experience: 65
                }
            }
        ]
    },

    legendary_sacrifice: {
        emojis: '💀⚡🌟',
        text: 'Facing impossible odds, you prepare to make the ultimate sacrifice to save the realm. Your life force could power a ritual that would banish all darkness forever.',
        choices: [
            {
                text: '💫 Give your life to save everyone',
                nextScene: 'ultimate_sacrifice',
                effects: {
                    health: -100,
                    setFlag: { legendary_hero: true },
                    experience: 100
                }
            },
            {
                text: '🤝 Share the burden with your closest allies',
                nextScene: 'inspiring_last_stand',
                effects: {
                    health: -50,
                    setFlag: { shared_sacrifice: true },
                    experience: 80
                }
            },
            {
                text: '💎 Use Crystal Shards to amplify the sacrifice',
                nextScene: 'shard_power_unleashed',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    health: -75,
                    setFlag: { crystal_sacrifice: true },
                    experience: 90
                }
            }
        ]
    },

    ultimate_sacrifice: {
        emojis: '💫⚡👑',
        text: 'You pour your very life essence into the realm itself, becoming one with the magic that holds everything together. Your sacrifice will be remembered for all eternity.',
        choices: [
            {
                text: '🌟 Become a guiding spirit for future heroes',
                nextScene: 'ending_sage',
                effects: {
                    setFlag: { eternal_guide: true },
                    experience: 150
                }
            },
            {
                text: '🌍 Merge with the land to heal it forever',
                nextScene: 'ending_guardian',
                effects: {
                    setFlag: { eternal_guardian: true },
                    experience: 150
                }
            },
            {
                text: '💖 Transform your love into protective magic',
                nextScene: 'ending_protector',
                effects: {
                    setFlag: { eternal_protector: true },
                    experience: 150
                }
            }
        ]
    },

    inspirational_endurance: {
        emojis: '💪🔥👥',
        text: 'Your unwavering determination in the face of overwhelming odds inspires all around you. Even when exhausted and wounded, you continue fighting, giving others the courage to persevere.',
        choices: [
            {
                text: '🗣️ Rally the troops with inspiring words',
                nextScene: 'inspiring_last_stand',
                effects: {
                    setFlag: { inspirational_leader: true },
                    experience: 50
                }
            },
            {
                text: '⚔️ Fight harder to show them the way',
                nextScene: 'glorious_death',
                effects: {
                    health: -30,
                    setFlag: { leading_example: true },
                    experience: 55
                }
            },
            {
                text: '🤝 Share your strength with struggling allies',
                nextScene: 'sacrificial_protection',
                effects: {
                    health: -20,
                    setFlag: { strength_sharer: true },
                    experience: 45
                }
            }
        ]
    },

    inspiring_last_stand: {
        emojis: '🛡️⚔️🌅',
        text: 'In what might be your final moments, you inspire your allies to fight with legendary courage. Together, you create a last stand that will be remembered in songs and stories.',
        choices: [
            {
                text: '🔥 Burn brightly in a blaze of glory',
                nextScene: 'glorious_death',
                effects: {
                    health: -40,
                    setFlag: { blazing_hero: true },
                    experience: 70
                }
            },
            {
                text: '🌟 Channel inspiration into a final miracle',
                nextScene: 'heroic_code_created',
                effects: {
                    magical: true,
                    setFlag: { miracle_worker: true },
                    experience: 65
                }
            },
            {
                text: '👥 Ensure others survive even if you fall',
                nextScene: 'fallen_heroes_honored',
                effects: {
                    health: -35,
                    setFlag: { selfless_hero: true },
                    experience: 60
                }
            }
        ]
    },

    glorious_death: {
        emojis: '⚔️💀🌟',
        text: 'You face death with honor and courage, your final moments blazing with heroic defiance. Your sacrifice saves countless others and becomes the stuff of legend.',
        choices: [
            {
                text: '👑 Die as a true hero, inspiring future generations',
                nextScene: 'fallen_heroes_honored',
                effects: {
                    setFlag: { glorious_martyr: true },
                    experience: 100
                }
            },
            {
                text: '💫 Transform death into a final magical act',
                nextScene: 'legendary_sacrifice',
                effects: {
                    magical: true,
                    setFlag: { death_transformation: true },
                    experience: 85
                }
            },
            {
                text: '🤝 Use your final breath to save an ally',
                nextScene: 'sacrificial_protection',
                effects: {
                    setFlag: { final_protection: true },
                    experience: 90
                }
            }
        ]
    },

    fallen_heroes_honored: {
        emojis: '🕯️👑📚',
        text: 'The realm honors all those who gave their lives in the fight against darkness. Your sacrifice and that of your companions will never be forgotten, inspiring future generations of heroes.',
        choices: [
            {
                text: '📚 Ensure your story teaches others about courage',
                nextScene: 'heroic_code_created',
                effects: {
                    setFlag: { legendary_teacher: true },
                    experience: 80
                }
            },
            {
                text: '🌟 Let your sacrifice become a beacon of hope',
                nextScene: 'ending_sage',
                effects: {
                    setFlag: { eternal_beacon: true },
                    experience: 75
                }
            },
            {
                text: '👥 Focus on how your example helps others',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { heroic_inspiration: true },
                    experience: 70
                }
            }
        ]
    },

    heroic_code_created: {
        emojis: '📜⚔️🌟',
        text: 'Your adventures and moral choices become the foundation for a heroic code that will guide warriors and leaders for generations. Your legacy shapes the future of heroism itself.',
        choices: [
            {
                text: '🏫 Establish an academy to teach the heroic code',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { heroic_academy_founder: true },
                    experience: 90
                }
            },
            {
                text: '👑 Become the ideal all future leaders aspire to',
                nextScene: 'ending_teacher',
                effects: {
                    setFlag: { ideal_leader: true },
                    experience: 85
                }
            },
            {
                text: '📚 Ensure the code spreads throughout the realm',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { code_spreader: true },
                    experience: 75
                }
            }
        ]
    },

    sacrificial_protection: {
        emojis: '🛡️💖⚔️',
        text: 'You willingly put yourself in harm\'s way to protect others, taking wounds meant for your allies and shielding innocents from danger with your own body.',
        choices: [
            {
                text: '💪 Endure all pain to save everyone possible',
                nextScene: 'pain_powered_strength',
                effects: {
                    health: -40,
                    setFlag: { ultimate_protector: true },
                    experience: 70
                }
            },
            {
                text: '🤝 Inspire others to protect each other too',
                nextScene: 'inspiring_last_stand',
                effects: {
                    health: -25,
                    setFlag: { protection_inspirer: true },
                    experience: 60
                }
            },
            {
                text: '🌟 Transform protection into a lasting blessing',
                nextScene: 'graceful_hero',
                effects: {
                    magical: true,
                    health: -20,
                    setFlag: { protective_blessing: true },
                    experience: 65
                }
            }
        ]
    },

    graceful_hero: {
        emojis: '🌟💖🕊️',
        text: 'Your heroism transcends mere combat prowess, embodying grace, compassion, and wisdom. You become the type of hero that children dream of becoming and poets sing about.',
        choices: [
            {
                text: '🕊️ Spread peace and healing wherever you go',
                nextScene: 'peaceful_resolution',
                effects: {
                    setFlag: { graceful_peacemaker: true },
                    experience: 85
                }
            },
            {
                text: '💎 Channel grace through Crystal Shard power',
                nextScene: 'cooperative_restoration',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { graceful_restorer: true },
                    experience: 90
                }
            },
            {
                text: '👑 Accept the responsibility of graceful leadership',
                nextScene: 'humble_victor',
                effects: {
                    setFlag: { graceful_leader: true },
                    experience: 80
                }
            }
        ]
    },

    humble_victor: {
        emojis: '👑🙏💫',
        text: 'Victory comes not with pride but with humility. You understand that true heroism lies not in conquering others, but in serving them and making the world better.',
        choices: [
            {
                text: '🤝 Share all credit with those who helped you',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { humble_leader: true },
                    experience: 75
                }
            },
            {
                text: '🏘️ Focus on rebuilding and helping communities',
                nextScene: 'refugee_settlement',
                effects: {
                    setFlag: { community_builder: true },
                    experience: 70
                }
            },
            {
                text: '📚 Document lessons learned for future heroes',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { wisdom_sharer: true },
                    experience: 65
                }
            }
        ]
    },

    humble_judgment: {
        emojis: '⚖️💭🙏',
        text: 'You approach judgment with humility, recognizing that even enemies may deserve compassion and that justice must be tempered with mercy.',
        choices: [
            {
                text: '💔 Show mercy even to those who wronged you',
                nextScene: 'redemption_offered',
                effects: {
                    setFlag: { merciful_judge: true },
                    experience: 80
                }
            },
            {
                text: '⚖️ Seek justice that heals rather than punishes',
                nextScene: 'justice_maintained',
                effects: {
                    setFlag: { healing_justice: true },
                    experience: 70
                }
            },
            {
                text: '🤝 Focus on preventing future conflicts',
                nextScene: 'peaceful_resolution',
                effects: {
                    setFlag: { conflict_preventer: true },
                    experience: 75
                }
            }
        ]
    },

    humble_service_path: {
        emojis: '🤲💖🌍',
        text: 'You choose the path of humble service, dedicating your life to helping others and making the world better through small acts of kindness and great acts of sacrifice.',
        choices: [
            {
                text: '🏥 Dedicate yourself to healing and medicine',
                nextScene: 'medical_network_established',
                effects: {
                    setFlag: { humble_healer: true },
                    experience: 70
                }
            },
            {
                text: '👥 Serve the common people and their needs',
                nextScene: 'village_protection_force',
                effects: {
                    setFlag: { people_servant: true },
                    experience: 65
                }
            },
            {
                text: '🌱 Work to restore and protect the natural world',
                nextScene: 'land_restoration_project',
                effects: {
                    setFlag: { nature_servant: true },
                    experience: 75
                }
            }
        ]
    }
};
