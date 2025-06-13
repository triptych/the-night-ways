// Final battle and climax scenes
const FINAL_BATTLE_SCENES = {
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
    }
};
