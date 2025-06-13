// All ending scenes
export const ENDING_SCENES = {
    // Victory endings
    victory_knight: {
        emojis: '🏰👑✨',
        text: 'Your Shield of Light creates a brilliant barrier that reflects the Shadow Lord\'s darkness back upon him! As the light purifies the shadow, the Crystal of Harmony reforms, more beautiful than ever. You are hailed as the Champion of Light!',
        choices: [
            {
                text: '👑 Accept the title of Royal Protector',
                nextScene: 'ending_protector'
            },
            {
                text: '🌍 Choose to wander and help others',
                nextScene: 'ending_wanderer'
            }
        ]
    },

    victory_wizard: {
        emojis: '🔮📚🌟',
        text: 'The ancient prophecy\'s words resonate through the realm as you speak them! The Shadow Lord\'s darkness is transformed into light, and the Crystal of Harmony is reborn. Your wisdom has saved the kingdom through knowledge and understanding.',
        choices: [
            {
                text: '📚 Become the new Keeper of Knowledge',
                nextScene: 'ending_sage'
            },
            {
                text: '🌟 Use your power to heal the world',
                nextScene: 'ending_healer'
            }
        ]
    },

    victory_archer: {
        emojis: '🏹🌲🦋',
        text: 'Your arrow, blessed by the forest itself, pierces through to the Shadow Lord\'s true heart - revealing that he was once a protector corrupted by despair. Your compassion and skill have redeemed him, and the Crystal is restored through forgiveness.',
        choices: [
            {
                text: '🌲 Return to guard the forest',
                nextScene: 'ending_guardian'
            },
            {
                text: '🤝 Help the redeemed Shadow Lord',
                nextScene: 'ending_redeemer'
            }
        ]
    },

    // Multiple endings
    ending_protector: {
        emojis: '🏰👑🛡️',
        text: 'As the Royal Protector, you establish a new order of knights dedicated to maintaining harmony between all the emoji realms. The kingdom prospers under your watchful guard, and peace reigns for generations.',
        choices: []
    },

    ending_sage: {
        emojis: '📚🦉✨',
        text: 'You become the wisest sage in the realm\'s history, teaching future generations how to maintain the balance of magic and nature. Your knowledge ensures that the Crystal of Harmony will never be broken again.',
        choices: []
    },

    ending_guardian: {
        emojis: '🌲🏹🦋',
        text: 'You return to the forest as its eternal guardian, working alongside Lyralei and the nature spirits. Under your protection, the Enchanted Forest becomes a sanctuary where all creatures live in perfect harmony.',
        choices: []
    },

    ending_wanderer: {
        emojis: '🚶‍♂️🌍⭐',
        text: 'You choose the path of the wandering hero, traveling between realms to help those in need. Your legend grows as you become a beacon of hope wherever darkness threatens to take hold.',
        choices: []
    },

    ending_healer: {
        emojis: '🌱💚🏥',
        text: 'You dedicate your life to healing the wounds left by the shadow war. Your magic restores not just the land, but the hearts of those who suffered. The kingdom flourishes under your gentle care.',
        choices: []
    },

    ending_redeemer: {
        emojis: '🤝💡🕊️',
        text: 'You work alongside the redeemed Shadow Lord to undo the damage caused by darkness. Together, you prove that even the most lost souls can find their way back to the light.',
        choices: []
    },

    ending_champion: {
        emojis: '👑⚔️🏆',
        text: 'As the Royal Champion, you establish a new code of honor that inspires generations of heroes. Your name becomes synonymous with courage, and the realm knows peace for centuries.',
        choices: []
    },

    ending_teacher: {
        emojis: '📚👨‍🏫✨',
        text: 'You found a magical academy where you teach future generations to balance power with wisdom. Your students carry on your legacy, ensuring the realm remains protected.',
        choices: []
    },

    ending_peaceful: {
        emojis: '🏡🌻😊',
        text: 'You find contentment in simple village life, your heroic deeds a cherished memory. Sometimes the greatest victory is knowing when to lay down your sword and embrace peace.',
        choices: []
    },

    ending_master_archer: {
        emojis: '🏹🎯👑',
        text: 'You become the legendary Master Archer, training elite guards and hunters. Your perfect aim and wisdom protect the kingdom from threats both seen and unseen.',
        choices: []
    },

    ending_peace_era: {
        emojis: '🌍🕊️✨',
        text: 'You establish a new golden age where light and shadow work in harmony. The realm flourishes under the protection of both heroes, proving that even the greatest enemies can become the truest allies.',
        choices: []
    },

    ending_nature_harmony: {
        emojis: '🌍🌲🤝',
        text: 'You and the redeemed Shadow Lord become the Twin Guardians of Nature and Shadow, maintaining the balance between light and dark, growth and rest, in an eternal dance of harmony.',
        choices: []
    },

    ending_nature_order: {
        emojis: '🌲🏛️🌍',
        text: 'You establish the Order of Natural Harmony, ensuring that all future guardians remain connected to the living world. Never again will isolation and disconnection breed the darkness that threatened the realm.',
        choices: []
    },

    ending_nature_age: {
        emojis: '🌍🌲🏛️',
        text: 'You usher in the Age of Natural Harmony, where all realms are connected through the living network of nature. Magic and nature work as one, and the balance is maintained by the Grove Guardians.',
        choices: []
    },

    // Batch 6: Next 4 missing scenes
    complete_power_destruction: {
        emojis: '💥🔥🏰',
        text: 'With tremendous effort, you completely destroy the fortress\'s dark power source. The explosion rocks the entire structure as shadow magic dissipates in brilliant flashes of light. The Shadow Lord\'s strength visibly diminishes.',
        choices: [
            {
                text: '⚔️ Press the advantage and attack immediately',
                nextScene: 'final_duel',
                effects: {
                    setFlag: { shadow_lord_weakened: true },
                    experience: 50
                }
            },
            {
                text: '💎 Use this moment to secure the Crystal Shard',
                nextScene: 'shard_grab',
                effects: {
                    setFlag: { power_destroyed: true },
                    experience: 40
                }
            },
            {
                text: '🏃‍♂️ Escape before the fortress collapses',
                nextScene: 'hasty_escape',
                effects: {
                    health: -15,
                    experience: 30
                }
            }
        ]
    },

    controlled_power: {
        emojis: '⚖️💪✨',
        text: 'You successfully channel your renewed strength with wisdom and restraint. Rather than rushing into battle, you focus your energy strategically, making every action count. Your balanced approach inspires allies.',
        choices: [
            {
                text: '🧙‍♂️ Use this power to enhance your magic',
                nextScene: 'enhanced_magic_learned',
                effects: {
                    magical: true,
                    setFlag: { power_mastery: true },
                    experience: 40
                }
            },
            {
                text: '🛡️ Focus on protecting others',
                nextScene: 'divine_protector_role',
                effects: {
                    setFlag: { wise_protector: true },
                    experience: 35
                }
            },
            {
                text: '👥 Share your strength with allies',
                nextScene: 'power_sharing_ceremony',
                effects: {
                    setFlag: { power_shared: true },
                    experience: 45
                }
            }
        ]
    },

    determination_judgment: {
        emojis: '⚔️⚖️💪',
        text: 'The Moonwell acknowledges your unwavering determination to save the realm. Though your methods may be forceful, your resolve to protect the innocent shines through the sacred waters like steel.',
        choices: [
            {
                text: '💎 Claim the Crystal Shard',
                nextScene: 'shard_received',
                effects: {
                    addItem: '💎',
                    setFlag: { determined_hero: true },
                    experience: 30
                }
            },
            {
                text: '🔍 Ask about the other Crystal Shards',
                nextScene: 'shard_quest',
                effects: {
                    experience: 25
                }
            },
            {
                text: '🌙 Seek the Moonwell\'s guidance',
                nextScene: 'moonwell_guidance',
                effects: {
                    setFlag: { moonwell_wisdom: true }
                }
            }
        ]
    },

    cooperative_restoration: {
        emojis: '🤝💎🌟',
        text: 'Working together with the redeemed Shadow Lord, you combine your powers to restore the Crystal of Harmony. The unity between former enemies creates a more powerful crystal than ever before.',
        choices: [
            {
                text: '🌟 Celebrate the new era of cooperation',
                nextScene: 'ending_peace_era',
                effects: {
                    setFlag: { cooperative_victory: true },
                    experience: 100
                }
            },
            {
                text: '🏛️ Establish a new order of balance',
                nextScene: 'ending_nature_harmony',
                effects: {
                    setFlag: { balance_keeper: true },
                    experience: 90
                }
            },
            {
                text: '🌍 Focus on healing the realm together',
                nextScene: 'ending_healer',
                effects: {
                    setFlag: { joint_healer: true },
                    experience: 85
                }
            }
        ]
    }
};
