// All ending scenes
const ENDING_SCENES = {
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
    }
};
