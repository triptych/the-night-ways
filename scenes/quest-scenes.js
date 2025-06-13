// Quest progression and trial scenes
export const QUEST_SCENES = {
    // Helper scenes for flow
    trial_success: {
        emojis: '🏆💎🌟',
        text: 'Your arrows find their mark with supernatural precision! The forest spirits cheer as you\'ve proven your worth. The deer presents you with the first Crystal Shard, glowing with natural energy.',
        choices: [
            {
                text: '🗺️ Seek the location of the other shards',
                nextScene: 'shard_quest'
            }
        ]
    },

    shard_quest: {
        emojis: '🗺️💎🔍',
        text: 'The deer shares ancient knowledge: "The second shard lies in the Moonwell, guarded by the Forest Elves. The third rests in the Shadow Lord\'s fortress. But beware - he grows stronger as the realm weakens."',
        choices: [
            {
                text: '🌙 Journey to the Moonwell',
                nextScene: 'moonwell'
            },
            {
                text: '🏰 Attempt to infiltrate the fortress',
                nextScene: 'fortress_approach'
            }
        ]
    },

    // Archery trial
    archery_trial: {
        emojis: '🏹🎯✨',
        text: 'The deer creates three magical targets that move through the air. "Hit all three with arrows of pure intent, and the forest will grant you its blessing." Your arrows glow with natural energy.',
        choices: [
            {
                text: '🎯 Focus on precision and shoot',
                nextScene: 'trial_success',
                effects: {
                    addItem: '💎',
                    experience: 30,
                    setFlag: { archery_master: true },
                    magical: true
                }
            },
            {
                text: '🏹 Use a special trick shot technique',
                nextScene: 'trick_shot',
                effects: {
                    experience: 20
                }
            }
        ]
    },

    trick_shot: {
        emojis: '🏹💫🎯',
        text: 'You attempt a ricochet shot, bouncing your arrow off a tree to hit all three targets in sequence. The shot is spectacular but not quite perfect. The deer is impressed but not fully convinced.',
        choices: [
            {
                text: '🎯 Try the precision approach instead',
                nextScene: 'archery_trial'
            },
            {
                text: '🤝 Humbly ask for another chance',
                nextScene: 'second_chance',
                effects: {
                    setFlag: { humble_archer: true }
                }
            },
            {
                text: '🌲 Offer to help heal the forest first',
                nextScene: 'forest_healing'
            }
        ]
    },

    second_chance: {
        emojis: '🙏🦌💫',
        text: 'The deer is moved by your humility. "Humility is the foundation of wisdom," it says. "I will grant you another opportunity, but this time, the trial will test your heart as much as your skill."',
        choices: [
            {
                text: '💖 Accept the trial with an open heart',
                nextScene: 'heart_trial',
                effects: {
                    setFlag: { humble_heart: true }
                }
            },
            {
                text: '🏹 Focus on perfect archery technique',
                nextScene: 'precision_trial'
            },
            {
                text: '🌲 Ask if you can help heal the forest instead',
                nextScene: 'forest_healing'
            }
        ]
    },

    heart_trial: {
        emojis: '💖🏹🌟',
        text: 'This trial is different - your arrows must be guided by compassion, not just skill. You must hit targets while protecting others, showing that true marksmanship serves to defend, not destroy.',
        choices: [
            {
                text: '🛡️ Prioritize protecting the innocent',
                nextScene: 'protective_archery',
                effects: {
                    experience: 35,
                    setFlag: { guardian_archer: true }
                }
            },
            {
                text: '⚖️ Balance offense and defense',
                nextScene: 'balanced_archery'
            }
        ]
    },

    protective_archery: {
        emojis: '🏹🛡️💚',
        text: 'Your arrows become shields of light, intercepting attacks aimed at woodland creatures while precisely striking at shadowy threats. The deer nods approvingly at your protective instincts.',
        choices: [
            {
                text: '💎 Receive the Crystal Shard as reward',
                nextScene: 'guardian_shard_received',
                effects: {
                    addItem: '💎',
                    experience: 40,
                    setFlag: { guardian_blessed: true }
                }
            }
        ]
    },

    guardian_shard_received: {
        emojis: '💎🛡️🌟',
        text: 'The Crystal Shard you receive pulses with protective energy. This is not just any fragment - it\'s the Guardian\'s Shard, imbued with the power to shield others from harm.',
        choices: [
            {
                text: '🔍 Seek the remaining Crystal Shards',
                nextScene: 'shard_quest'
            },
            {
                text: '🌲 Use its power to heal the forest',
                nextScene: 'guardian_forest_healing'
            }
        ]
    },

    // Crystal and shard related scenes
    crystal_location: {
        emojis: '💎🗺️🌲',
        text: 'The deer reveals the location of the first Crystal Shard. "Beneath the Great Oak, in the heart of the grove, lies what you seek. But the path is guarded by trials that test more than strength."',
        choices: [
            {
                text: '🌳 Journey to the Great Oak',
                nextScene: 'great_oak',
                effects: {
                    setFlag: { knows_shard_location: true }
                }
            },
            {
                text: '❓ Ask about the nature of these trials',
                nextScene: 'trial_explanation'
            },
            {
                text: '🤝 Request the deer\'s guidance',
                nextScene: 'deer_guidance'
            }
        ]
    },

    trial_explanation: {
        emojis: '🦌📚💡',
        text: 'The deer explains the nature of the trials: "These tests measure not your strength, but your heart. Courage, wisdom, and compassion are the true keys to claiming the Crystal Shard."',
        choices: [
            {
                text: '💪 Accept the trials with confidence',
                nextScene: 'archery_trial',
                effects: {
                    experience: 15
                }
            },
            {
                text: '🙏 Humbly request guidance',
                nextScene: 'deer_guidance'
            },
            {
                text: '🤝 Offer to help heal the forest first',
                nextScene: 'forest_healing'
            }
        ]
    },

    deer_guidance: {
        emojis: '🦌🌟🗺️',
        text: 'The deer shares ancient wisdom: "The forest remembers all who enter with pure intentions. Trust in your heart, and the path will reveal itself. The Crystal Shard awaits one who truly understands harmony."',
        choices: [
            {
                text: '✨ Begin the archery trial',
                nextScene: 'archery_trial',
                effects: {
                    setFlag: { deer_blessed: true },
                    experience: 20
                }
            },
            {
                text: '🌲 Ask about the forest\'s history',
                nextScene: 'forest_lore'
            },
            {
                text: '💎 Inquire about other Crystal Shards',
                nextScene: 'crystal_location'
            }
        ]
    },

    forest_lore: {
        emojis: '🌲📖🌟',
        text: 'The deer tells you of the forest\'s ancient past: "Long ago, this realm was one of perfect balance. The Crystal of Harmony was forged here, where nature and magic first learned to dance together in eternal unity."',
        choices: [
            {
                text: '🔮 Learn about the Crystal\'s creation',
                nextScene: 'crystal_origins'
            },
            {
                text: '🏹 Proceed with the archery trial',
                nextScene: 'archery_trial'
            },
            {
                text: '💎 Ask about the Crystal Shard\'s location',
                nextScene: 'crystal_location'
            }
        ]
    },

    crystal_origins: {
        emojis: '💎🌟📜',
        text: 'The deer reveals the Crystal\'s origin: "It was created by the first guardians who understood that true power comes from unity, not dominance. The Shadow Lord once knew this truth, before darkness consumed his heart."',
        choices: [
            {
                text: '💡 Gain insight into defeating the Shadow Lord',
                nextScene: 'shadow_weakness_learned',
                effects: {
                    setFlag: { shadow_weakness_known: true },
                    experience: 30
                }
            },
            {
                text: '🏹 Begin the archery trial with this knowledge',
                nextScene: 'archery_trial'
            },
            {
                text: '🌲 Explore more of the forest',
                nextScene: 'deep_forest'
            }
        ]
    },

    shadow_weakness_learned: {
        emojis: '💡👹🛡️',
        text: 'You now understand the Shadow Lord\'s weakness: he fears unity and harmony above all else. This knowledge will serve you well in the final confrontation.',
        choices: [
            {
                text: '🏹 Continue with the archery trial',
                nextScene: 'archery_trial'
            },
            {
                text: '🔍 Seek the Crystal Shards immediately',
                nextScene: 'shard_quest'
            },
            {
                text: '📚 Record this knowledge for later',
                nextScene: 'wisdom_recorded',
                effects: {
                    addItem: '📜',
                    experience: 15
                }
            }
        ]
    },

    wisdom_recorded: {
        emojis: '📜✍️🧠',
        text: 'You carefully record the ancient wisdom about the Shadow Lord\'s weakness and the Crystal\'s true nature. This knowledge may prove crucial in the battles ahead.',
        choices: [
            {
                text: '🏹 Proceed with the archery trial',
                nextScene: 'archery_trial'
            },
            {
                text: '🌲 Continue exploring the forest',
                nextScene: 'deep_forest'
            }
        ]
    },

    // Shard collection scenes
    shard_received: {
        emojis: '💎✨🎒',
        text: 'The Crystal Shard settles into your hands, its power resonating with your very soul. You now possess one of the three fragments needed to restore the Crystal of Harmony.',
        choices: [
            {
                text: '🔍 Seek the remaining Crystal Shards',
                nextScene: 'shard_quest'
            },
            {
                text: '🏰 Head directly to face the Shadow Lord',
                nextScene: 'fortress_approach',
                conditions: { hasItem: '💎' }
            }
        ]
    },

    fragment_collected: {
        emojis: '💎✨🎒',
        text: 'You carefully extract a crystal fragment from the ruins. It pulses with residual harmony magic, but you can feel its power is incomplete. This shard yearns to be reunited with its siblings.',
        choices: [
            {
                text: '🔍 Search for more fragments in the ruins',
                nextScene: 'ruins_search'
            },
            {
                text: '🗺️ Leave to seek the other Crystal Shards',
                nextScene: 'shard_quest'
            },
            {
                text: '🔮 Study the fragment\'s magical properties',
                nextScene: 'shard_study',
                conditions: { playerClass: 'wizard' }
            }
        ]
    }
};
