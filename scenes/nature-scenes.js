// Nature, forest, and environmental scenes
export const NATURE_SCENES = {
    forest_army_assault: {
        emojis: '🌲⚔️🦌',
        text: 'Leading an army of forest creatures, you launch a coordinated assault on shadow forces. Trees themselves seem to fight alongside you as the very forest rises up against the corruption.',
        choices: [
            {
                text: '🌊 Unleash the full fury of nature',
                nextScene: 'nature_essence_summoned',
                effects: {
                    magical: true,
                    setFlag: { nature_army_leader: true },
                    experience: 60
                }
            },
            {
                text: '🎯 Focus the assault on strategic targets',
                nextScene: 'weakness_exploitation',
                effects: {
                    setFlag: { tactical_nature_commander: true },
                    experience: 50
                }
            },
            {
                text: '🛡️ Protect villages during the assault',
                nextScene: 'village_protection_force',
                effects: {
                    setFlag: { protective_nature_leader: true },
                    experience: 45
                }
            }
        ]
    },

    forest_bond_permanent: {
        emojis: '🌲💚🔗',
        text: 'You forge a permanent spiritual bond with the Enchanted Forest, becoming one with the ancient woodland. Your consciousness expands to encompass every tree, stream, and creature.',
        choices: [
            {
                text: '🌍 Extend your influence to heal the entire realm',
                nextScene: 'land_restoration_project',
                effects: {
                    magical: true,
                    setFlag: { forest_consciousness: true },
                    experience: 70
                }
            },
            {
                text: '👑 Accept your role as the Forest\'s eternal guardian',
                nextScene: 'nature_champion_crowned',
                effects: {
                    setFlag: { forest_spirit: true },
                    experience: 60
                }
            },
            {
                text: '⚖️ Use the bond to bring balance to all magic',
                nextScene: 'realm_healing_attempt',
                effects: {
                    magical: true,
                    setFlag: { balance_keeper: true },
                    experience: 65
                }
            }
        ]
    },

    forest_champion_crowned: {
        emojis: '👑🌲🌟',
        text: 'The ancient spirits of the forest crown you as their eternal champion. A crown of living branches and glowing leaves appears upon your head, marking you as nature\'s chosen protector.',
        choices: [
            {
                text: '🌍 Use your authority to heal corrupted lands',
                nextScene: 'land_restoration_project',
                effects: {
                    magical: true,
                    setFlag: { nature_champion: true },
                    experience: 65
                }
            },
            {
                text: '⚔️ Lead all of nature against the Shadow Lord',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { nature_general: true },
                    experience: 60
                }
            },
            {
                text: '🕊️ Seek peaceful coexistence with all realms',
                nextScene: 'peaceful_resolution',
                effects: {
                    setFlag: { peace_champion: true },
                    experience: 55
                }
            }
        ]
    },

    forest_guerrilla_warfare: {
        emojis: '🌲🤫⚔️',
        text: 'You master forest guerrilla warfare, using the woodland\'s natural cover and the aid of forest creatures to conduct hit-and-run attacks against enemy forces.',
        choices: [
            {
                text: '🦌 Coordinate attacks with forest animals',
                nextScene: 'forest_army_assault',
                effects: {
                    setFlag: { guerrilla_leader: true },
                    experience: 50
                }
            },
            {
                text: '🏹 Focus on precision archery from treetops',
                nextScene: 'treetop_archery',
                effects: {
                    setFlag: { forest_sniper: true },
                    experience: 45
                }
            },
            {
                text: '🤫 Remain hidden and gather intelligence',
                nextScene: 'enemy_tracking',
                effects: {
                    setFlag: { forest_spy: true },
                    experience: 40
                }
            }
        ]
    },

    land_restoration_project: {
        emojis: '🌍💚🌱',
        text: 'You undertake a massive project to restore all corrupted lands across the realm, using nature magic and the power of the Crystal Shards to heal the very earth itself.',
        choices: [
            {
                text: '💎 Channel Crystal Shard power into the restoration',
                nextScene: 'realm_healing_attempt',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { land_healer: true },
                    experience: 80,
                    health: -30
                }
            },
            {
                text: '👥 Recruit volunteers from all races and classes',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { restoration_leader: true },
                    experience: 60
                }
            },
            {
                text: '🌿 Focus on gradual, sustainable healing',
                nextScene: 'natural_healing_path',
                effects: {
                    setFlag: { sustainable_healer: true },
                    experience: 50
                }
            }
        ]
    },

    mural_study: {
        emojis: '🖼️📚🔍',
        text: 'The ancient murals tell the complete story of the Crystal of Harmony - its creation by the united races, its shattering during the great war, and prophecies about its eventual restoration.',
        choices: [
            {
                text: '💎 Learn the original Crystal creation process',
                nextScene: 'crystal_creation_knowledge',
                effects: {
                    setFlag: { mural_scholar: true },
                    experience: 45
                }
            },
            {
                text: '🔮 Study the magical symbols and runes',
                nextScene: 'magical_theory_research',
                conditions: { playerClass: 'wizard' },
                effects: {
                    magical: true,
                    setFlag: { runic_scholar: true },
                    experience: 50
                }
            },
            {
                text: '👹 Examine depictions of the Shadow Lord\'s origin',
                nextScene: 'shadow_lord_origins',
                effects: {
                    setFlag: { lore_keeper: true },
                    experience: 40
                }
            }
        ]
    },

    natural_healing_path: {
        emojis: '🌿💚🕊️',
        text: 'You choose the path of natural healing, working with herbs, crystals, and the earth\'s own restorative powers to slowly but surely heal both people and land.',
        choices: [
            {
                text: '🌱 Establish healing gardens across the realm',
                nextScene: 'medical_network_established',
                effects: {
                    setFlag: { healing_gardener: true },
                    experience: 50
                }
            },
            {
                text: '🦌 Work with forest creatures as healing partners',
                nextScene: 'forest_bond_permanent',
                effects: {
                    magical: true,
                    setFlag: { creature_healer: true },
                    experience: 55
                }
            },
            {
                text: '👥 Teach natural healing to others',
                nextScene: 'knowledge_sharing',
                effects: {
                    setFlag: { healing_teacher: true },
                    experience: 45
                }
            }
        ]
    },

    natural_wisdom_success: {
        emojis: '🌿🧠🌟',
        text: 'Your deep connection to nature\'s wisdom allows you to understand the sacred truths hidden in the natural world, gaining insights that pure book learning could never provide.',
        choices: [
            {
                text: '💎 Apply natural wisdom to Crystal restoration',
                nextScene: 'crystal_restoration_vision',
                conditions: { hasItem: '💎' },
                effects: {
                    magical: true,
                    setFlag: { nature_sage: true },
                    experience: 60
                }
            },
            {
                text: '👹 Use nature\'s wisdom to understand corruption',
                nextScene: 'corruption_origins',
                effects: {
                    setFlag: { natural_scholar: true },
                    experience: 50
                }
            },
            {
                text: '🌍 Share natural wisdom with all peoples',
                nextScene: 'knowledge_documentation',
                effects: {
                    setFlag: { wisdom_teacher: true },
                    experience: 45
                }
            }
        ]
    },

    nature_champion_crowned: {
        emojis: '👑🌿🦋',
        text: 'In recognition of your dedication to protecting and restoring the natural world, you are crowned as Nature\'s Champion by the spirits of all living things.',
        choices: [
            {
                text: '🌍 Accept responsibility for all of nature',
                nextScene: 'realm_healing_attempt',
                effects: {
                    magical: true,
                    setFlag: { supreme_nature_champion: true },
                    experience: 70,
                    health: -25
                }
            },
            {
                text: '⚖️ Use your authority to bring balance',
                nextScene: 'peaceful_resolution',
                effects: {
                    setFlag: { nature_diplomat: true },
                    experience: 60
                }
            },
            {
                text: '🌟 Transform into a nature spirit',
                nextScene: 'spirit_restoration_offer',
                effects: {
                    magical: true,
                    setFlag: { nature_spirit_transformation: true },
                    experience: 65
                }
            }
        ]
    },

    nature_essence_summoned: {
        emojis: '🌿⚡🌟',
        text: 'You call upon the pure essence of nature itself, summoning the collective power of every living thing in the realm to aid you in the fight against corruption and shadow.',
        choices: [
            {
                text: '💥 Direct the essence in a devastating attack',
                nextScene: 'complete_power_destruction',
                effects: {
                    magical: true,
                    setFlag: { nature_devastator: true },
                    experience: 70,
                    health: -20
                }
            },
            {
                text: '🌍 Use the essence to heal the entire realm',
                nextScene: 'realm_healing_attempt',
                effects: {
                    magical: true,
                    setFlag: { realm_nature_healer: true },
                    experience: 75,
                    health: -25
                }
            },
            {
                text: '🤝 Share the essence with all your allies',
                nextScene: 'power_sharing_ceremony',
                effects: {
                    magical: true,
                    setFlag: { nature_sharer: true },
                    experience: 65
                }
            }
        ]
    },

    oak_shard_revelation: {
        emojis: '🌳💎✨',
        text: 'The Great Oak reveals that it has been guarding more than just one Crystal Shard - it knows the locations of all remaining shards and the secret to safely reuniting them.',
        choices: [
            {
                text: '🗺️ Learn the locations of all Crystal Shards',
                nextScene: 'shard_locations_revealed',
                effects: {
                    setFlag: { oak_knowledge: true },
                    experience: 50
                }
            },
            {
                text: '🔮 Learn the safe reunion technique',
                nextScene: 'cooperative_restoration',
                effects: {
                    magical: true,
                    setFlag: { safe_restoration_method: true },
                    experience: 60
                }
            },
            {
                text: '🌳 Ask the Oak to help with the final restoration',
                nextScene: 'unified_army_formed',
                effects: {
                    setFlag: { oak_ally: true },
                    experience: 45
                }
            }
        ]
    },

    pattern_exploitation: {
        emojis: '🔍💡⚔️',
        text: 'You identify consistent patterns in enemy behavior and exploit them ruthlessly, turning their predictability into your tactical advantage.',
        choices: [
            {
                text: '🎯 Use patterns to set up perfect ambushes',
                nextScene: 'surprise_attack',
                effects: {
                    setFlag: { pattern_master: true },
                    experience: 50
                }
            },
            {
                text: '🛡️ Predict attacks to optimize defenses',
                nextScene: 'integrated_defense',
                effects: {
                    setFlag: { defensive_predictor: true },
                    experience: 45
                }
            },
            {
                text: '🧠 Document patterns for strategic planning',
                nextScene: 'intelligence_report',
                effects: {
                    setFlag: { pattern_analyst: true },
                    experience: 40
                }
            }
        ]
    },

    treetop_archery: {
        emojis: '🌳🏹🎯',
        text: 'You master the art of treetop archery, using the forest canopy as your platform to rain arrows down upon enemies while remaining completely hidden among the leaves.',
        choices: [
            {
                text: '🎯 Perfect your precision from extreme height',
                nextScene: 'precision_trial',
                effects: {
                    setFlag: { treetop_sniper: true },
                    experience: 45
                }
            },
            {
                text: '👥 Train other archers in treetop techniques',
                nextScene: 'precision_archer_corps',
                effects: {
                    setFlag: { treetop_instructor: true },
                    experience: 50
                }
            },
            {
                text: '🦅 Work with birds to coordinate attacks',
                nextScene: 'forest_guerrilla_warfare',
                effects: {
                    setFlag: { aerial_coordinator: true },
                    experience: 40
                }
            }
        ]
    }
};
