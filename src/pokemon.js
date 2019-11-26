module.exports = {
    pokemon:
        [
            {
                name: 'Abomasnow',
                type1: 'Ice',
                type2: '',
                weakness: 'Fire',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0460_01_yukinooh_256.ktx.png',
                stats: {
                    base: {
                        attack: 16,
                        defense: 11,
                        hp: 97,
                        speed: 15,
                        sp_atk: 10,
                        sp_def: 13
                    },
                    max: {
                        attack: 182,
                        bulk: 366,
                        defense: 103,
                        hp: 437,
                        speed: 192,
                        sp_atk: 127,
                        sp_def: 105
                    }
                },
                moves: [
                    {
                        name: 'Ice Punch',
                        type: 'Ice',
                        category: 'Physical',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target frozen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Hail',
                        type: 'Ice',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Entire field',
                        cost: 2,
                        uses: 2,
                        effect: 'Causes a hailstorm.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'It’s All about Focus!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Uses a maximum of three slots of the user’s move gauge. Based on the amount used, this move raises both the user’s Attack and Sp. Def by up to four stat ranks.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'All-about-Focus Avalanche',
                    type: ' Ice',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The power of this move is increased during a hailstorm.'
                },
                passives: [
                    {
                        name: 'Antifreeze',
                        description: 'Prevents the Pokémon from becoming frozen.'
                    },
                    {
                        name: 'Snow Shelter',
                        description: 'Protects the Pokémon from damage from a hailstorm.'
                    }
                ]
            },
            {
                name: 'Aegislash (Blade Forme)',
                type1: 'Steel',
                type2: '',
                weakness: 'Fire',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0746_12_sword3_256.ktx.png',
                stats: {
                    base: {
                        attack: 24,
                        defense: 4,
                        hp: 117,
                        speed: 15,
                        sp_atk: 24,
                        sp_def: 4
                    },
                    max: {
                        attack: 219,
                        bulk: 279,
                        defense: 55,
                        hp: 467,
                        speed: 221,
                        sp_atk: 219,
                        sp_def: 55
                    }
                },
                moves: [
                    {
                        name: 'Gyro Ball',
                        type: 'Steel',
                        category: 'Physical',
                        power: {min_power: 44, max_power: 52},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Its power is doubled if the target’s Speed has risen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'King’s Shield',
                        type: 'Steel',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: 2,
                        uses: 2,
                        effect: 'The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies attacks that target the user while it is in this defensive posture. Sharply lowers the Attack of opponents that use physical attacks against the user while it is in this defensive posture.',
                        unlock_requirements: []
                    },
                    {
                        name: 'En Garde!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Drastically raises the user’s Attack and raises its critical-hit rate when it is in Blade Forme. Sharply raises the user’s Defense and Sp. Def when it is in Shield Forme.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Iron Head',
                        type: 'Steel',
                        category: 'Physical',
                        power: {min_power: 92, max_power: 110},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Shining Knight Iron Head',
                    type: ' Steel',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the opponent’s Attack is lowered, the greater the power of this move.'
                },
                passives: [
                    {
                        name: 'Stance Change',
                        description: 'Changes to Blade Forme when the Pokémon attacks. Changes to Shield Forme when the Pokémon uses King’s Shield or switches out.'
                    },
                    {
                        name: 'Vigilance',
                        description: 'The Pokémon is protected against critical hits.'
                    }
                ]
            },
            {
                name: 'Aegislash (Shield Forme)',
                type1: 'Steel',
                type2: '',
                weakness: 'Fire',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0746_11_sword3_256.ktx.png',
                stats: {
                    base: {
                        attack: 8,
                        defense: 15,
                        hp: 117,
                        speed: 15,
                        sp_atk: 8,
                        sp_def: 15
                    },
                    max: {
                        attack: 73,
                        bulk: 541,
                        defense: 186,
                        hp: 467,
                        speed: 221,
                        sp_atk: 73,
                        sp_def: 186
                    }
                },
                moves: [
                    {
                        name: 'Gyro Ball',
                        type: 'Steel',
                        category: 'Physical',
                        power: {min_power: 44, max_power: 52},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Its power is doubled if the target’s Speed has risen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'King’s Shield',
                        type: 'Steel',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: 2,
                        uses: 2,
                        effect: 'The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies attacks that target the user while it is in this defensive posture. Sharply lowers the Attack of opponents that use physical attacks against the user while it is in this defensive posture.',
                        unlock_requirements: []
                    },
                    {
                        name: 'En Garde!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Drastically raises the user’s Attack and raises its critical-hit rate when it is in Blade Forme. Sharply raises the user’s Defense and Sp. Def when it is in Shield Forme.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Iron Head',
                        type: 'Steel',
                        category: 'Physical',
                        power: {min_power: 92, max_power: 110},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Shining Knight Iron Head',
                    type: ' Steel',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the opponent’s Attack is lowered, the greater the power of this move.'
                },
                passives: [
                    {
                        name: 'Stance Change',
                        description: 'Changes to Blade Forme when the Pokémon attacks. Changes to Shield Forme when the Pokémon uses King’s Shield or switches out.'
                    },
                    {
                        name: 'Vigilance',
                        description: 'The Pokémon is protected against critical hits.'
                    }
                ]
            },
            {
                name: 'Amaura',
                type1: 'Rock',
                type2: '',
                weakness: 'Steel',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0739_00_aurora1_256.ktx.png',
                stats: {
                    base: {
                        attack: 12,
                        defense: 12,
                        hp: 102,
                        speed: 19,
                        sp_atk: 11,
                        sp_def: 15
                    },
                    max: {
                        attack: 152,
                        bulk: 444,
                        defense: 125,
                        hp: 495,
                        speed: 225,
                        sp_atk: 87,
                        sp_def: 139
                    }
                },
                moves: [
                    {
                        name: 'Rock Tomb',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 39, max_power: 46},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Def',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Rock Slide',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 105, max_power: 126},
                        accuracy: 90,
                        target: 'All opponents',
                        cost: 3,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Over the Wall!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the user’s move gauge by two. Raises the user’s accuracy. Makes the user gradually heal itself.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Rock Sync Impact',
                    type: ' Rock',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Snow Shelter',
                        description: 'Protects the Pokémon from damage from a hailstorm.'
                    },
                    {
                        name: 'Sand Shelter',
                        description: 'Protects the Pokémon from damage from a sandstorm.'
                    },
                    {
                        name: 'Aggravation 1',
                        description: 'Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves.'
                    }
                ]
            },
            {
                name: 'Arcanine',
                type1: 'Fire',
                type2: '',
                weakness: 'Ground',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0059_00_windie_256.ktx.png',
                stats: {
                    base: {
                        attack: 9,
                        defense: 13,
                        hp: 117,
                        speed: 11,
                        sp_atk: 8,
                        sp_def: 13
                    },
                    max: {
                        attack: 141,
                        bulk: 492,
                        defense: 159,
                        hp: 519,
                        speed: 177,
                        sp_atk: 140,
                        sp_def: 145
                    }
                },
                moves: [
                    {
                        name: 'Flame Wheel',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Unfreezes the user. Has a very small chance of leaving the target burned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Speed of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'We’re Standing Strong!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 1,
                        effect: 'Blocks status conditions on the allied field of play. Removes all status conditions from all allied sync pairs.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Flamethrower',
                        type: 'Fire',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target burned.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Grateful Friend Flare Blitz',
                    type: ' Fire',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the user’s Speed has been raised, the greater the power of this move.'
                },
                passives: [{name: 'Haste', description: 'Speed cannot be lowered.'}]
            },
            {
                name: 'Ariados',
                type1: 'Poison',
                type2: '',
                weakness: 'Fire',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0168_00_ariados_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 12,
                        hp: 95,
                        speed: 13,
                        sp_atk: 9,
                        sp_def: 11
                    },
                    max: {
                        attack: 172,
                        bulk: 401,
                        defense: 133,
                        hp: 387,
                        speed: 189,
                        sp_atk: 100,
                        sp_def: 128
                    }
                },
                moves: [
                    {
                        name: 'Cross Poison',
                        type: 'Poison',
                        category: 'Physical',
                        power: {min_power: 38, max_power: 45},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Critical hits land more easily. Has a very small chance of leaving the target poisoned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Venom Drench',
                        type: 'Poison',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Attack, Sp. Atk, and Speed if the target is poisoned or badly poisoned. Fails if the target is not poisoned or badly poisoned.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Move Like the Wind!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed and evasiveness.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Ninja Spirit Cross Poison',
                    type: ' Poison',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is poisoned or badly poisoned.'
                },
                passives: [
                    {
                        name: 'Hostile Environment 1',
                        description: 'Raises the chance of inflicting status conditions with the additional effects of moves.'
                    }
                ]
            },
            {
                name: 'Avalugg',
                type1: 'Ice',
                type2: '',
                weakness: 'Fire',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0751_00_ice3_256.ktx.png',
                stats: {
                    base: {
                        attack: 17,
                        defense: 10,
                        hp: 90,
                        speed: 9,
                        sp_atk: 3,
                        sp_def: 5
                    },
                    max: {
                        attack: 254,
                        bulk: 334,
                        defense: 100,
                        hp: 419,
                        speed: 84,
                        sp_atk: 34,
                        sp_def: 82
                    }
                },
                moves: [
                    {
                        name: 'Ice Fang',
                        type: 'Ice',
                        category: 'Physical',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of making the target flinch or leaving the target frozen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Avalanche',
                        type: 'Ice',
                        category: 'Physical',
                        power: {min_power: 75, max_power: 90},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'The user gets ready to counterattack. Using this move again will cause the user to attack the target. No other actions can be taken while ready to counterattack. If the user is attacked with a move while ready to counterattack, the user then attacks the target with double that power.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Outstanding!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 1,
                        effect: 'Makes opponents target the user for a short time. Drastically raises the user’s Defense.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Unstoppable Avalanche',
                    type: ' Ice',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Clearheaded',
                        description: 'Prevents the Pokémon from becoming confused.'
                    }
                ]
            },
            {
                name: 'Bayleef',
                type1: 'Grass',
                type2: '',
                weakness: 'Fire',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0153_00_bayleaf_256.ktx.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 21,
                        hp: 155,
                        speed: 14,
                        sp_atk: 16,
                        sp_def: 21
                    },
                    max: {
                        attack: 115,
                        bulk: 500,
                        defense: 107,
                        hp: 695,
                        speed: 151,
                        sp_atk: 187,
                        sp_def: 141
                    }
                },
                moves: [
                    {
                        name: 'Energy Ball',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the critical-hit rate of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Sunny Side Up!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the Attack, Sp. Atk, and Speed of all allied sync pairs. Sharply raises them if the weather is sunny.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Light Screen',
                        type: 'Psychic',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Allied side',
                        cost: 3,
                        uses: 2,
                        effect: 'Reduces special damage done to the allied field of play.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Grass Sync Beam',
                    type: ' Grass',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Solar Shield',
                        description: 'The Pokémon is not affected by status conditions when the weather is sunny.'
                    }
                ]
            },
            {
                name: 'Beedrill',
                type1: 'Bug',
                type2: '',
                weakness: 'Rock',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0015_00_spear_256.ktx.png',
                stats: {
                    base: {
                        attack: 19,
                        defense: 8,
                        hp: 67,
                        speed: 19,
                        sp_atk: 8,
                        sp_def: 8
                    },
                    max: {
                        attack: 270,
                        bulk: 289,
                        defense: 70,
                        hp: 370,
                        speed: 255,
                        sp_atk: 99,
                        sp_def: 85
                    }
                },
                moves: [
                    {
                        name: 'Fell Stinger',
                        type: 'Bug',
                        category: 'Physical',
                        power: {min_power: 44, max_power: 52},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Drastically raises the user’s Attack when it knocks out a target with this move.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Sure Crit',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Ensures that the user’s next attack will be a critical hit.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Twineedle',
                        type: 'Bug',
                        category: 'Physical',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Attacks twice in a row. Has a small chance of leaving the target poisoned.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Beehold My Research!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Speed. Drastically raises the user’s evasiveness.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Bug Expert Twineedle',
                    type: ' Bug',
                    category: 'Physical',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Beedrill.'
                },
                passives: [
                    {
                        name: 'Critical Strike 2',
                        description: 'Powers up moves when those moves land critical hits.'
                    }
                ]
            },
            {
                name: 'Blissey',
                type1: 'Normal',
                type2: 'Fire',
                weakness: 'Fighting',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0242_00_happinas_256.ktx.png',
                stats: {
                    base: {
                        attack: 5,
                        defense: 8,
                        hp: 137,
                        speed: 9,
                        sp_atk: 11,
                        sp_def: 16
                    },
                    max: {
                        attack: 67,
                        bulk: 424,
                        defense: 38,
                        hp: 612,
                        speed: 110,
                        sp_atk: 143,
                        sp_def: 164
                    }
                },
                moves: [
                    {
                        name: 'Hyper Voice',
                        type: 'Normal',
                        category: 'Special',
                        power: {min_power: 63, max_power: 75},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Sp. Atk of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'All Out of Patience!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of an ally’s HP. Sharply raises an ally’s Defense and Sp. Def.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Flamethrower',
                        type: 'Fire',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target burned.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Blissful Echo Hyper Voice',
                    type: ' Normal',
                    category: 'Special',
                    power: {min_power: 300, max_power: 360},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Healing Hand 2',
                        description: 'Occasionally removes all status conditions of all allied sync pairs after the Pokémon uses a move.'
                    }
                ]
            },
            {
                name: 'Bronzong',
                type1: 'Psychic',
                type2: 'Steel',
                weakness: 'Fire',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0437_00_dohtakun_256.ktx.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 14,
                        hp: 107,
                        speed: 12,
                        sp_atk: 11,
                        sp_def: 12
                    },
                    max: {
                        attack: 200,
                        bulk: 509,
                        defense: 187,
                        hp: 379,
                        speed: 152,
                        sp_atk: 198,
                        sp_def: 185
                    }
                },
                moves: [
                    {
                        name: 'Gyro Ball',
                        type: 'Steel',
                        category: 'Physical',
                        power: {min_power: 44, max_power: 52},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Its power is doubled if the target’s Speed has risen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Zen Headbutt',
                        type: 'Psychic',
                        category: 'Physical',
                        power: {min_power: 51, max_power: 61},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Analysis Complete!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Defense and Sp. Def. Makes the user resistant to the type of the last move it was hit by.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Telekinesis',
                        type: 'Psychic',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Makes the target unable to evade moves.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Post-analysis Flash Cannon',
                    type: ' Steel',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is flinching.'
                },
                passives: [
                    {
                        name: 'Aggravation 1',
                        description: 'Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves.'
                    }
                ]
            },
            {
                name: 'Carracosta',
                type1: 'Water',
                type2: 'Rock',
                weakness: 'Grass',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0565_00_abagoura_256.ktx.png',
                stats: {
                    base: {
                        attack: 17,
                        defense: 14,
                        hp: 115,
                        speed: 8,
                        sp_atk: 7,
                        sp_def: 12
                    },
                    max: {
                        attack: 179,
                        bulk: 368,
                        defense: 135,
                        hp: 369,
                        speed: 109,
                        sp_atk: 79,
                        sp_def: 99
                    }
                },
                moves: [
                    {
                        name: 'Aqua Tail',
                        type: 'Water',
                        category: 'Physical',
                        power: {min_power: 56, max_power: 67},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Defense All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Defense of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Rough Seas Ahead!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 1,
                        effect: 'Makes opponents target the user for a short time. Makes the user able to endure the next hit they take.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Rock Tomb',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 39, max_power: 46},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Oversplash Aqua Tail',
                    type: ' Water',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the user’s Defense has been raised, the greater the power of this move.'
                },
                passives: [
                    {name: 'Unbending', description: 'Defense cannot be lowered.'}
                ]
            },
            {
                name: 'Chandelure',
                type1: 'Ghost',
                type2: '',
                weakness: 'Rock',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0609_00_chandela_256.ktx.png',
                stats: {
                    base: {
                        attack: 4,
                        defense: 8,
                        hp: 82,
                        speed: 14,
                        sp_atk: 18,
                        sp_def: 11
                    },
                    max: {
                        attack: 96,
                        bulk: 354,
                        defense: 88,
                        hp: 392,
                        speed: 187,
                        sp_atk: 298,
                        sp_def: 124
                    }
                },
                moves: [
                    {
                        name: 'Hex',
                        type: 'Ghost',
                        category: 'Special',
                        power: {min_power: 38, max_power: 45},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Its power is doubled if the target is affected by a status condition.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Shadow Ball',
                        type: 'Ghost',
                        category: 'Special',
                        power: {min_power: 99, max_power: 118},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'A Tale of Triumph!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Drastically raises the user’s Speed. Sharply raises the user’s evasiveness. Leaves the user burned.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Dark Tales of the Shadow Ball',
                    type: ' Ghost',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Unhindered',
                        description: 'When the Pokémon uses a move to attack, ignores the damage-reducing effects on the opponent’s field of play.'
                    },
                    {
                        name: 'Power Reserves 2',
                        description: 'Powers up moves in a pinch.'
                    }
                ]
            },
            {
                name: 'Chikorita',
                type1: 'Grass',
                type2: '',
                weakness: 'Fire',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0152_00_chicorita_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 18,
                        hp: 132,
                        speed: 11,
                        sp_atk: 12,
                        sp_def: 17
                    },
                    max: {
                        attack: 113,
                        bulk: 467,
                        defense: 104,
                        hp: 635,
                        speed: 148,
                        sp_atk: 183,
                        sp_def: 133
                    }
                },
                moves: [
                    {
                        name: 'Energy Ball',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the critical-hit rate of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Sunny Side Up!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the Attack, Sp. Atk, and Speed of all allied sync pairs. Sharply raises them if the weather is sunny.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Light Screen',
                        type: 'Psychic',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Allied side',
                        cost: 3,
                        uses: 2,
                        effect: 'Reduces special damage done to the allied field of play.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Grass Sync Beam',
                    type: ' Grass',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Solar Shield',
                        description: 'The Pokémon is not affected by status conditions when the weather is sunny.'
                    }
                ]
            },
            {
                name: 'Clawitzer',
                type1: 'Water',
                type2: 'Fighting',
                weakness: 'Electric',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0757_00_shrimp2_256.ktx.png',
                stats: {
                    base: {
                        attack: 10,
                        defense: 10,
                        hp: 92,
                        speed: 16,
                        sp_atk: 22,
                        sp_def: 10
                    },
                    max: {
                        attack: 118,
                        bulk: 429,
                        defense: 134,
                        hp: 444,
                        speed: 205,
                        sp_atk: 286,
                        sp_def: 134
                    }
                },
                moves: [
                    {
                        name: 'Water Pulse',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of leaving the target confused.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Aura Sphere',
                        type: 'Fighting',
                        category: 'Special',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 0,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Never misses.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'The Definition of Art!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a tiny bit of the user’s HP. Ensures that the user’s next attack will be a critical hit. Makes the user gradually heal itself.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Water Pulse Du Jour',
                    type: ' Water',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Critical Focus 1',
                        description: 'Raises the Pokémon’s critical-hit rate when it lands a critical hit.'
                    }
                ]
            },
            {
                name: 'Conkeldurr',
                type1: 'Fighting',
                type2: '',
                weakness: 'Psychic',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0534_00_roubushin_256.ktx.png',
                stats: {
                    base: {
                        attack: 18,
                        defense: 14,
                        hp: 87,
                        speed: 12,
                        sp_atk: 12,
                        sp_def: 8
                    },
                    max: {
                        attack: 254,
                        bulk: 341,
                        defense: 110,
                        hp: 449,
                        speed: 109,
                        sp_atk: 104,
                        sp_def: 68
                    }
                },
                moves: [
                    {
                        name: 'Rock Smash',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a good chance of lowering the target’s Defense.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Drain Punch',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 91, max_power: 109},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Restores the user’s HP based on the amount of damage dealt to the target.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'It’s All Down to This!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the user’s move gauge by two. Drastically raises the user’s Defense.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Way-of-the-Warrior Focus Punch',
                    type: ' Fighting',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Gritty 5',
                        description: 'Powers up moves if the Pokémon is affected by a status condition.'
                    }
                ]
            },
            {
                name: 'Cranidos',
                type1: 'Rock',
                type2: '',
                weakness: 'Water',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0408_00_zugaidos_256.ktx.png',
                stats: {
                    base: {
                        attack: 21,
                        defense: 9,
                        hp: 75,
                        speed: 11,
                        sp_atk: 4,
                        sp_def: 8
                    },
                    max: {
                        attack: 257,
                        bulk: 397,
                        defense: 80,
                        hp: 655,
                        speed: 157,
                        sp_atk: 80,
                        sp_def: 79
                    }
                },
                moves: [
                    {
                        name: 'Smack Down',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Head Smash',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 188, max_power: 225},
                        accuracy: 80,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'The user also takes 33% of the damage it dealt to the target.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'You’re Gonna Need a Helmet!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the user’s move gauge by three. Makes the user’s next attack a sure hit.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Rock Sync Impact',
                    type: ' Rock',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {name: 'Headstrong', description: 'Attack cannot be lowered.'}
                ]
            },
            {
                name: 'Crobat',
                type1: 'Poison',
                type2: '',
                weakness: 'Electric',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0169_00_crobat_256.ktx.png',
                stats: {
                    base: {
                        attack: 7,
                        defense: 7,
                        hp: 70,
                        speed: 12,
                        sp_atk: 7,
                        sp_def: 8
                    },
                    max: {
                        attack: 237,
                        bulk: 421,
                        defense: 122,
                        hp: 402,
                        speed: 322,
                        sp_atk: 237,
                        sp_def: 153
                    }
                },
                moves: [
                    {
                        name: 'Poison Fang',
                        type: 'Poison',
                        category: 'Physical',
                        power: {min_power: 34, max_power: 40},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a good chance of leaving the target badly poisoned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Venoshock',
                        type: 'Poison',
                        category: 'Special',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Its power is doubled if the target is poisoned or badly poisoned.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Move Like a Shadow!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s evasiveness. Raises the user’s critical-hit rate.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Modern Ninja Sludge Bomb',
                    type: ' Poison',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is poisoned or badly poisoned.'
                },
                passives: [{name: 'Haste', description: 'Speed cannot be lowered.'}]
            },
            {
                name: 'Croconaw',
                type1: 'Water',
                type2: 'Normal',
                weakness: 'Grass',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0159_00_alligates_256.ktx.png',
                stats: {
                    base: {
                        attack: 21,
                        defense: 13,
                        hp: 110,
                        speed: 21,
                        sp_atk: 10,
                        sp_def: 13
                    },
                    max: {
                        attack: 220,
                        bulk: 405,
                        defense: 111,
                        hp: 537,
                        speed: 255,
                        sp_atk: 95,
                        sp_def: 99
                    }
                },
                moves: [
                    {
                        name: 'Waterfall',
                        type: 'Water',
                        category: 'Physical',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Mega Kick',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 167, max_power: 200},
                        accuracy: 75,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Pick Up the Pace!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed. Makes the user’s next attack a sure hit and a critical hit.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Water Sync Impact',
                    type: ' Water',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Endurance',
                        description: 'If the Pokémon enters battle with full HP, allows it to endure a single overwhelming attack with 1 HP left.'
                    },
                    {
                        name: 'Water Shift',
                        description: 'Normal-type moves become Water-type moves.'
                    }
                ]
            },
            {
                name: 'Cryogonal',
                type1: 'Ice',
                type2: 'Rock',
                weakness: 'Fighting',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0615_00_freegeo_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 5,
                        hp: 87,
                        speed: 16,
                        sp_atk: 11,
                        sp_def: 14
                    },
                    max: {
                        attack: 162,
                        bulk: 358,
                        defense: 92,
                        hp: 414,
                        speed: 282,
                        sp_atk: 162,
                        sp_def: 116
                    }
                },
                moves: [
                    {
                        name: 'Ice Beam',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target frozen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Ancient Power',
                        type: 'Rock',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of raising the user’s Attack, Defense, Sp. Atk, Sp. Def, and Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Stone-Cold Endurance!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Def. Makes the user able to endure the next hit it takes.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Haze',
                        type: 'Ice',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All opponents',
                        cost: 2,
                        uses: 2,
                        effect: 'Returns raised stats of all opposing sync pairs to normal.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Lights, Camera, Ice Shard',
                    type: ' Ice',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The power of this move is increased if not all of the opponent’s stats are raised.'
                },
                passives: [
                    {
                        name: 'Snow Shelter',
                        description: 'Protects the Pokémon from damage from a hailstorm.'
                    },
                    {
                        name: 'Healing Hail 1',
                        description: 'Restores the Pokémon’s HP whenever it takes an action during a hailstorm.'
                    }
                ]
            },
            {
                name: 'Dewgong',
                type1: 'Ice',
                type2: '',
                weakness: 'Electric',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0087_00_jugon_256.ktx.png',
                stats: {
                    base: {
                        attack: 15,
                        defense: 11,
                        hp: 85,
                        speed: 11,
                        sp_atk: 15,
                        sp_def: 11
                    },
                    max: {
                        attack: 199,
                        bulk: 364,
                        defense: 61,
                        hp: 504,
                        speed: 132,
                        sp_atk: 210,
                        sp_def: 120
                    }
                },
                moves: [
                    {
                        name: 'Ice Beam',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target frozen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Icy Wind',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 92, max_power: 110},
                        accuracy: 95,
                        target: 'All opponents',
                        cost: 3,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'It Ain’t Over!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed. Makes the user able to endure the next hit it takes.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Winter’s Lesson Aurora Beam',
                    type: ' Ice',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Superduper Effective 2',
                        description: 'Powers up moves that are super effective.'
                    }
                ]
            },
            {
                name: 'Dusclops',
                type1: 'Ghost',
                type2: '',
                weakness: 'Dark',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0356_00_samayouru_256.ktx.png',
                stats: {
                    base: {
                        attack: 14,
                        defense: 13,
                        hp: 105,
                        speed: 11,
                        sp_atk: 10,
                        sp_def: 14
                    },
                    max: {
                        attack: 181,
                        bulk: 584,
                        defense: 197,
                        hp: 477,
                        speed: 148,
                        sp_atk: 130,
                        sp_def: 214
                    }
                },
                moves: [
                    {
                        name: 'Shadow Punch',
                        type: 'Ghost',
                        category: 'Physical',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 0,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Never misses.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit All +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the critical-hit rate of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Unbreakable Bonds!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'The lower the user’s HP is, the more this move increases the move gauges and raises the Attack of all allied sync pairs.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Double-Edge',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 167, max_power: 200},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'The user also takes 25% of the damage it dealt to the target.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Ghost Sync Impact',
                    type: ' Ghost',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Pass It On',
                        description: 'Transfers half the amount of this sync pair’s raised stats to the sync pair that will switch in when this sync pair faints.'
                    },
                    {
                        name: 'Vigilance',
                        description: 'The Pokémon is protected against critical hits.'
                    }
                ]
            },
            {
                name: 'Emboar',
                type1: 'Fire',
                type2: '',
                weakness: 'Water',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-09/pm0500_00_enbuoh_256.ktx_.png',
                stats: {
                    base: {
                        attack: 36,
                        defense: 21,
                        hp: 125,
                        speed: 19,
                        sp_atk: 24,
                        sp_def: 23
                    },
                    max: {
                        attack: 317,
                        bulk: 447,
                        defense: 85,
                        hp: 758,
                        speed: 135,
                        sp_atk: 127,
                        sp_def: 87
                    }
                },
                moves: [
                    {
                        name: 'Flame Charge',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 30, max_power: 36},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Potion',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of an ally’s HP.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Flare Blitz',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 123, max_power: 147},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Unfreezes the user. The user also takes 25% of the damage it dealt to the target. Has a very small chance of leaving the target burned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Try and Stop Us!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'If the user’s Speed has been raised, raises the user’s Attack by double the amount its Speed has been raised.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Battle Fanatic Heat Crash',
                    type: ' Fire',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Antitoxin',
                        description: 'Prevents the Pokémon from getting poisoned or badly poisoned.'
                    },
                    {
                        name: 'First Aid 4',
                        description: 'Restores a bit of the Pokémon’s HP once during battle when the Pokémon is in a pinch.'
                    }
                ]
            },
            {
                name: 'Empoleon',
                type1: 'Water',
                type2: '',
                weakness: 'Grass',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0395_00_emperte_256.ktx.png',
                stats: {
                    base: {
                        attack: 19,
                        defense: 13,
                        hp: 92,
                        speed: 22,
                        sp_atk: 26,
                        sp_def: 13
                    },
                    max: {
                        attack: 170,
                        bulk: 390,
                        defense: 117,
                        hp: 429,
                        speed: 190,
                        sp_atk: 286,
                        sp_def: 117
                    }
                },
                moves: [
                    {
                        name: 'Bubble',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 19, max_power: 22},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Full Heal',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Removes all status conditions from an ally.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Bubble Beam',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'No Hesitation!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed. Raises the user’s critical-hit rate.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Late Fee Bubble Beam',
                    type: ' Water',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Flux 5',
                        description: 'The fuller the move gauge, the more this powers up moves.'
                    }
                ]
            },
            {
                name: 'Espurr',
                type1: 'Psychic',
                type2: '',
                weakness: 'Ghost',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-10/pm0733_00_cat1_256.ktx_.png',
                stats: {
                    base: {
                        attack: 9,
                        defense: 10,
                        hp: 83,
                        speed: 23,
                        sp_atk: 15,
                        sp_def: 11
                    },
                    max: {
                        attack: 114,
                        bulk: 423,
                        defense: 115,
                        hp: 493,
                        speed: 348,
                        sp_atk: 205,
                        sp_def: 129
                    }
                },
                moves: [
                    {
                        name: 'Psybeam',
                        type: 'Psychic',
                        category: 'Special',
                        power: {min_power: 48, max_power: 57},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target confused.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Thunder Wave',
                        type: 'Electric',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Leaves the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'We’re Not Done Yet!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of the user’s HP. The lower the user’s HP is, the more this move raises the user’s Sp. Atk.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Psychic Sync Beam',
                    type: ' Psychic',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {name: 'Acuity', description: 'Accuracy cannot be lowered.'},
                    {
                        name: 'Aggravation 1',
                        description: 'Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves.'
                    }
                ]
            },
            {
                name: 'Feraligatr',
                type1: 'Water',
                type2: 'Normal',
                weakness: 'Grass',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0160_00_ordile_256.ktx.png',
                stats: {
                    base: {
                        attack: 28,
                        defense: 18,
                        hp: 132,
                        speed: 30,
                        sp_atk: 19,
                        sp_def: 17
                    },
                    max: {
                        attack: 229,
                        bulk: 422,
                        defense: 116,
                        hp: 560,
                        speed: 265,
                        sp_atk: 104,
                        sp_def: 103
                    }
                },
                moves: [
                    {
                        name: 'Waterfall',
                        type: 'Water',
                        category: 'Physical',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Mega Kick',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 167, max_power: 200},
                        accuracy: 75,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Pick Up the Pace!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed. Makes the user’s next attack a sure hit and a critical hit.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Crystalline Aqua Tail',
                    type: ' Water',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Endurance',
                        description: 'If the Pokémon enters battle with full HP, allows it to endure a single overwhelming attack with 1 HP left.'
                    },
                    {
                        name: 'Water Shift',
                        description: 'Normal-type moves become Water-type moves.'
                    }
                ]
            },
            {
                name: 'Floatzel',
                type1: 'Water',
                type2: '',
                weakness: 'Grass',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0419_00_floazel_256.ktx.png',
                stats: {
                    base: {
                        attack: 21,
                        defense: 10,
                        hp: 72,
                        speed: 20,
                        sp_atk: 21,
                        sp_def: 10
                    },
                    max: {
                        attack: 182,
                        bulk: 378,
                        defense: 116,
                        hp: 375,
                        speed: 316,
                        sp_atk: 182,
                        sp_def: 126
                    }
                },
                moves: [
                    {
                        name: 'Waterfall',
                        type: 'Water',
                        category: 'Physical',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Water Pulse',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of leaving the target confused.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'CRASH!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Drastically raises the user’s Attack. Raises the user’s Sp. Atk.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Crashdown Aqua Jet',
                    type: ' Water',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is flinching.'
                },
                passives: [
                    {
                        name: 'Racing Rain 2',
                        description: 'Quickly charges the move gauge when the weather is rainy.'
                    },
                    {
                        name: 'Aggravation 1',
                        description: 'Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves.'
                    }
                ]
            },
            {
                name: 'Gengar',
                type1: 'Ghost',
                type2: '',
                weakness: 'Dark',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0094_00_gangar_256.ktx.png',
                stats: {
                    base: {
                        attack: 10,
                        defense: 10,
                        hp: 107,
                        speed: 23,
                        sp_atk: 15,
                        sp_def: 12
                    },
                    max: {
                        attack: 119,
                        bulk: 390,
                        defense: 102,
                        hp: 417,
                        speed: 307,
                        sp_atk: 283,
                        sp_def: 137
                    }
                },
                moves: [
                    {
                        name: 'Lick',
                        type: 'Ghost',
                        category: 'Physical',
                        power: {min_power: 12, max_power: 14},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Has a moderate chance of leaving the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Hypnosis',
                        type: 'Psychic',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 75,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Puts the target to sleep.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Run Along Now!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Radically raises the user’s Speed. The user takes damage based on its maximum HP.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Shadow Ball',
                        type: 'Ghost',
                        category: 'Special',
                        power: {min_power: 99, max_power: 118},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Tried-and-True Hex',
                    type: ' Ghost',
                    category: 'Special',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Gengar. This move’s power increases if the opponent is asleep.'
                },
                passives: [
                    {
                        name: 'Wide Awake',
                        description: 'Prevents the Pokémon from falling asleep.'
                    }
                ]
            },
            {
                name: 'Glalie',
                type1: 'Ice',
                type2: '',
                weakness: 'Steel',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-10/pm0362_00_onigohri_256.ktx_.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 11,
                        hp: 118,
                        speed: 11,
                        sp_atk: 11,
                        sp_def: 11
                    },
                    max: {
                        attack: 177,
                        bulk: 469,
                        defense: 144,
                        hp: 500,
                        speed: 195,
                        sp_atk: 210,
                        sp_def: 144
                    }
                },
                moves: [
                    {
                        name: 'Powder Snow',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 16, max_power: 19},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target frozen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Regen All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Makes all allied sync pairs gradually heal themselves.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Attention Here!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 1,
                        effect: 'Makes opponents target the user for a short time. Sharply raises the Sp. Atk of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Ice Beam',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target frozen.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Glacial Freeze-Dry',
                    type: ' Ice',
                    category: 'Special',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Glalie until the end of battle.'
                },
                passives: [
                    {
                        name: 'Snow Shelter',
                        description: 'Protects the Pokémon from damage from a hailstorm.'
                    }
                ]
            },
            {
                name: 'Granbull',
                type1: 'Fairy',
                type2: '',
                weakness: 'Steel',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0210_00_granbulu_256.ktx.png',
                stats: {
                    base: {
                        attack: 17,
                        defense: 11,
                        hp: 90,
                        speed: 13,
                        sp_atk: 10,
                        sp_def: 11
                    },
                    max: {
                        attack: 178,
                        bulk: 350,
                        defense: 112,
                        hp: 419,
                        speed: 159,
                        sp_atk: 127,
                        sp_def: 86
                    }
                },
                moves: [
                    {
                        name: 'Dazzling Gleam',
                        type: 'Fairy',
                        category: 'Special',
                        power: {min_power: 50, max_power: 60},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Charm',
                        type: 'Fairy',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Sharply lowers the target’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'What Great Composition!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An opponent',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s stats by the same amount that the target’s stats have been raised.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Play Rough',
                        type: 'Fairy',
                        category: 'Physical',
                        power: {min_power: 111, max_power: 133},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Attack.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Wandering Artist Twinkle Tackle',
                    type: ' Fairy',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the opponent’s Attack is lowered, the greater the power of this move.'
                },
                passives: [{name: 'Impervious', description: 'Stats cannot be lowered.'}]
            },
            {
                name: 'Grovyle',
                type1: 'Grass',
                type2: '',
                weakness: 'Poison',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-10/pm0253_00_juptile_256.ktx_.png',
                stats: {
                    base: {
                        attack: 27,
                        defense: 10,
                        hp: 105,
                        speed: 27,
                        sp_atk: 27,
                        sp_def: 10
                    },
                    max: {
                        attack: 313,
                        bulk: 411,
                        defense: 125,
                        hp: 445,
                        speed: 359,
                        sp_atk: 325,
                        sp_def: 125
                    }
                },
                moves: [
                    {
                        name: 'Bullet Seed',
                        type: 'Grass',
                        category: 'Physical',
                        power: {min_power: 15, max_power: 18},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Attacks the target two to five times in a row.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Leaf Storm',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 136, max_power: 163},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Sharply lowers the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'No Turning Back!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Uses a maximum of three slots of the user’s move gauge. Based on the amount used, this move raises both the user’s Attack and Sp. Atk by up to six stat ranks.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Grass Sync Impact',
                    type: ' Grass',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {name: 'Haste', description: 'Speed cannot be lowered.'},
                    {
                        name: 'Lithe',
                        description: 'Prevents the Pokémon from getting paralyzed.'
                    }
                ]
            },
            {
                name: 'Haxorus',
                type1: 'Dragon',
                type2: '',
                weakness: 'Ice',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0612_00_ononokus_256.ktx.png',
                stats: {
                    base: {
                        attack: 18,
                        defense: 6,
                        hp: 55,
                        speed: 9,
                        sp_atk: 3,
                        sp_def: 5
                    },
                    max: {
                        attack: 213,
                        bulk: 322,
                        defense: 110,
                        hp: 355,
                        speed: 134,
                        sp_atk: 53,
                        sp_def: 83
                    }
                },
                moves: [
                    {
                        name: 'Dragon Claw',
                        type: 'Dragon',
                        category: 'Physical',
                        power: {min_power: 50, max_power: 60},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Outrage',
                        type: 'Dragon',
                        category: 'Physical',
                        power: {min_power: 115, max_power: 138},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Leaves the user confused.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'You’re Going Down!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Speed. Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Dragon Sage Outrage',
                    type: ' Dragon',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Reserves 2',
                        description: 'Powers up moves in a pinch.'
                    }
                ]
            },
            {
                name: 'Houndoom',
                type1: 'Dark',
                type2: '',
                weakness: 'Fighting',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0229_00_hellgar_256.ktx.png',
                stats: {
                    base: {
                        attack: 18,
                        defense: 9,
                        hp: 85,
                        speed: 19,
                        sp_atk: 20,
                        sp_def: 9
                    },
                    max: {
                        attack: 268,
                        bulk: 449,
                        defense: 141,
                        hp: 460,
                        speed: 288,
                        sp_atk: 306,
                        sp_def: 141
                    }
                },
                moves: [
                    {
                        name: 'Bite',
                        type: 'Dark',
                        category: 'Physical',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Snarl',
                        type: 'Dark',
                        category: 'Special',
                        power: {min_power: 39, max_power: 46},
                        accuracy: 95,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Sp. Atk.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Entertain Me!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'The lower the user’s HP is, the more this move raises the user’s Sp. Atk.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Beguiling Dark Pulse',
                    type: ' Dark',
                    category: 'Special',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Houndoom.'
                },
                passives: [
                    {
                        name: 'Flameproof',
                        description: 'Prevents the Pokémon from getting burned.'
                    },
                    {
                        name: 'Wide Awake',
                        description: 'Prevents the Pokémon from falling asleep.'
                    }
                ]
            },
            {
                name: 'Infernape',
                type1: 'Fire',
                type2: '',
                weakness: 'Water',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0392_00_goukazaru_256.ktx.png',
                stats: {
                    base: {
                        attack: 15,
                        defense: 5,
                        hp: 62,
                        speed: 13,
                        sp_atk: 15,
                        sp_def: 5
                    },
                    max: {
                        attack: 275,
                        bulk: 363,
                        defense: 104,
                        hp: 427,
                        speed: 208,
                        sp_atk: 275,
                        sp_def: 104
                    }
                },
                moves: [
                    {
                        name: 'Fire Punch',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target burned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Fire Blast',
                        type: 'Fire',
                        category: 'Special',
                        power: {min_power: 116, max_power: 139},
                        accuracy: 85,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target burned.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'We’re On Fire!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack and Sp. Atk.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Burn-It-All Overheat',
                    type: ' Fire',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Reserves 2',
                        description: 'Powers up moves in a pinch.'
                    }
                ]
            },
            {
                name: 'Kingdra',
                type1: 'Dragon',
                type2: '',
                weakness: 'Dragon',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0230_00_kingdra_256.ktx.png',
                stats: {
                    base: {
                        attack: 8,
                        defense: 5,
                        hp: 70,
                        speed: 10,
                        sp_atk: 11,
                        sp_def: 6
                    },
                    max: {
                        attack: 204,
                        bulk: 415,
                        defense: 121,
                        hp: 475,
                        speed: 202,
                        sp_atk: 258,
                        sp_def: 122
                    }
                },
                moves: [
                    {
                        name: 'Dragon Breath',
                        type: 'Dragon',
                        category: 'Special',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of leaving the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Draco Meteor',
                        type: 'Dragon',
                        category: 'Special',
                        power: {min_power: 136, max_power: 163},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Sharply lowers the user’s Sp. Atk.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Victory Is Mine!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Returns the user’s lowered stats to normal. Raises the user’s critical-hit rate.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'No Mercy Dragon Pulse',
                    type: ' Dragon',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Racing Rain 2',
                        description: 'Quickly charges the move gauge when the weather is rainy.'
                    }
                ]
            },
            {
                name: 'Lapras',
                type1: 'Ice',
                type2: '',
                weakness: 'Grass',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0131_00_laplace_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 12,
                        hp: 107,
                        speed: 17,
                        sp_atk: 15,
                        sp_def: 13
                    },
                    max: {
                        attack: 103,
                        bulk: 504,
                        defense: 137,
                        hp: 500,
                        speed: 207,
                        sp_atk: 188,
                        sp_def: 186
                    }
                },
                moves: [
                    {
                        name: 'Ice Beam',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target frozen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Blizzard',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 126, max_power: 151},
                        accuracy: 70,
                        target: 'All opponents',
                        cost: 3,
                        uses: null,
                        effect: 'Never misses during a hailstorm. Has a very small chance of leaving the target frozen.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Brace Yourself!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'The lower the user’s HP is, the more this move raises the user’s Defense. Makes the user gradually heal itself.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Freezing Terror Blizzard',
                    type: ' Ice',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is frozen.'
                },
                passives: [
                    {
                        name: 'Hostile Environment 1',
                        description: 'Raises the chance of inflicting status conditions with the additional effects of moves.'
                    }
                ]
            },
            {
                name: 'Lucario',
                type1: 'Fighting',
                type2: '',
                weakness: 'Fire',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0448_00_lucario_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 5,
                        hp: 62,
                        speed: 13,
                        sp_atk: 11,
                        sp_def: 5
                    },
                    max: {
                        attack: 271,
                        bulk: 313,
                        defense: 99,
                        hp: 362,
                        speed: 138,
                        sp_atk: 255,
                        sp_def: 83
                    }
                },
                moves: [
                    {
                        name: 'Vacuum Wave',
                        type: 'Fighting',
                        category: 'Special',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Close Combat',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 124, max_power: 148},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Lowers the user’s Defense and Sp. Def.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Skate On Through!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Attack. Drastically raises the user’s Speed.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Give-It-All-Ya-Got Power-Up Punch',
                    type: ' Fighting',
                    category: 'Physical',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Lucario.'
                },
                passives: [
                    {
                        name: 'Unflappable',
                        description: 'Prevents the Pokémon from flinching.'
                    }
                ]
            },
            {
                name: 'Lunatone',
                type1: 'Psychic',
                type2: '',
                weakness: 'Bug',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0337_00_lunatone_256.ktx.png',
                stats: {
                    base: {
                        attack: 8,
                        defense: 12,
                        hp: 112,
                        speed: 11,
                        sp_atk: 12,
                        sp_def: 14
                    },
                    max: {
                        attack: 95,
                        bulk: 417,
                        defense: 99,
                        hp: 519,
                        speed: 112,
                        sp_atk: 128,
                        sp_def: 130
                    }
                },
                moves: [
                    {
                        name: 'Confusion',
                        type: 'Psychic',
                        category: 'Special',
                        power: {min_power: 18, max_power: 21},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target confused.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Def All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Sp. Def of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Of One Mind!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Attack and Sp. Atk of all allied sync pairs.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Psychic',
                        type: 'Psychic',
                        category: 'Special',
                        power: {min_power: 99, max_power: 118},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Psychic of Duality',
                    type: ' Psychic',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Chain 3',
                        description: 'Powers up moves when unity bonus is in effect.'
                    },
                    {name: 'Dauntless', description: 'Sp. Atk cannot be lowered.'},
                    {name: 'Stalwart', description: 'Sp. Def cannot be lowered.'}
                ]
            },
            {
                name: 'Lycanroc (Midnight Form)',
                type1: 'Rock',
                type2: '',
                weakness: 'Grass',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0829_12_okami2night_256.ktx.png',
                stats: {
                    base: {
                        attack: 25,
                        defense: 10,
                        hp: 97,
                        speed: 15,
                        sp_atk: 8,
                        sp_def: 10
                    },
                    max: {
                        attack: 357,
                        bulk: 431,
                        defense: 130,
                        hp: 472,
                        speed: 216,
                        sp_atk: 72,
                        sp_def: 130
                    }
                },
                moves: [
                    {
                        name: 'Rock Throw',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 23, max_power: 27},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Stone Edge',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 100, max_power: 120},
                        accuracy: 80,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Critical hits land more easily.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Hard as Diamonds!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s accuracy and critical-hit rate. Sharply lowers the user’s Sp. Def.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Shining Gem Continental Crush',
                    type: ' Rock',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Amped Up 1',
                        description: 'Raises the Pokémon’s Speed when it lands a critical hit.'
                    }
                ]
            },
            {
                name: 'Machamp',
                type1: 'Fighting',
                type2: '',
                weakness: 'Flying',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0068_00_kairiky_256.ktx.png',
                stats: {
                    base: {
                        attack: 20,
                        defense: 11,
                        hp: 100,
                        speed: 13,
                        sp_atk: 9,
                        sp_def: 9
                    },
                    max: {
                        attack: 256,
                        bulk: 378,
                        defense: 108,
                        hp: 495,
                        speed: 154,
                        sp_atk: 150,
                        sp_def: 90
                    }
                },
                moves: [
                    {
                        name: 'Karate Chop',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 16, max_power: 19},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Critical hits land more easily.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Cross Chop',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 100, max_power: 120},
                        accuracy: 80,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Critical hits land more easily.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Hoo Hah!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack and Sp. Def.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Trained-to-the-Max Dynamic Punch',
                    type: ' Fighting',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Critical Strike 2',
                        description: 'Powers up moves when those moves land critical hits.'
                    }
                ]
            },
            {
                name: 'Makuhita',
                type1: 'Fighting',
                type2: '',
                weakness: 'Flying',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0296_00_makunoshita_256.ktx.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 11,
                        hp: 120,
                        speed: 11,
                        sp_atk: 5,
                        sp_def: 11
                    },
                    max: {
                        attack: 160,
                        bulk: 370,
                        defense: 71,
                        hp: 599,
                        speed: 147,
                        sp_atk: 52,
                        sp_def: 82
                    }
                },
                moves: [
                    {
                        name: 'Rock Smash',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a good chance of lowering the target’s Defense.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Potion',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of an ally’s HP.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Brick Break',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 35, max_power: 42},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Removes physical and special damage-reducing effects from the opponents’ field of play.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'A Rain of Fists!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack. Raises the user’s Defense and Sp. Def.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Fighting Sync Impact',
                    type: ' Fighting',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Reserves 2',
                        description: 'Powers up moves in a pinch.'
                    }
                ]
            },
            {
                name: 'Masquerain',
                type1: 'Bug',
                type2: '',
                weakness: 'Rock',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0284_00_amemoth_256.ktx.png',
                stats: {
                    base: {
                        attack: 9,
                        defense: 13,
                        hp: 95,
                        speed: 15,
                        sp_atk: 14,
                        sp_def: 12
                    },
                    max: {
                        attack: 108,
                        bulk: 502,
                        defense: 163,
                        hp: 454,
                        speed: 223,
                        sp_atk: 191,
                        sp_def: 174
                    }
                },
                moves: [
                    {
                        name: 'Infestation',
                        type: 'Bug',
                        category: 'Special',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Leaves the target trapped.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Struggle Bug',
                        type: 'Bug',
                        category: 'Special',
                        power: {min_power: 30, max_power: 36},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Sp. Atk.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Just Fantastic!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Def. Makes the user gradually heal itself.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Silver Wind Victory Shot',
                    type: ' Bug',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is trapped.'
                },
                passives: [
                    {
                        name: 'Terrify 1',
                        description: 'Lowers the Attack of all opposing sync pairs when the Pokémon enters a battle.'
                    }
                ]
            },
            {
                name: 'Meditite',
                type1: 'Fighting',
                type2: '',
                weakness: 'Fairy',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0307_01_asanan_256.ktx.png',
                stats: {
                    base: {
                        attack: 16,
                        defense: 13,
                        hp: 100,
                        speed: 11,
                        sp_atk: 8,
                        sp_def: 13
                    },
                    max: {
                        attack: 102,
                        bulk: 436,
                        defense: 145,
                        hp: 402,
                        speed: 186,
                        sp_atk: 95,
                        sp_def: 145
                    }
                },
                moves: [
                    {
                        name: 'Rock Smash',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a good chance of lowering the target’s Defense.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Attack of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Gloves Off!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the critical-hit rate of all allied sync pairs and makes their next attack a sure hit.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Drain Punch',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 91, max_power: 109},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Restores the user’s HP based on the amount of damage dealt to the target.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Fighting Sync Impact',
                    type: ' Fighting',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'On the Ropes 3',
                        description: 'Reduces damage when the Pokémon is in a pinch and is hit by a physical attack.'
                    }
                ]
            },
            {
                name: 'Mega Beedrill',
                type1: 'Bug',
                type2: '',
                weakness: 'Rock',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0015_51_megaspear_256.ktx.png',
                stats: {
                    base: {
                        attack: 22,
                        defense: 8,
                        hp: 67,
                        speed: 22,
                        sp_atk: 8,
                        sp_def: 8
                    },
                    max: {
                        attack: 323,
                        bulk: 289,
                        defense: 70,
                        hp: 370,
                        speed: 305,
                        sp_atk: 99,
                        sp_def: 85
                    }
                },
                moves: [
                    {
                        name: 'Fell Stinger',
                        type: 'Bug',
                        category: 'Physical',
                        power: {min_power: 44, max_power: 52},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Drastically raises the user’s Attack when it knocks out a target with this move.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Sure Crit',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Ensures that the user’s next attack will be a critical hit.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Twineedle',
                        type: 'Bug',
                        category: 'Physical',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Attacks twice in a row. Has a small chance of leaving the target poisoned.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Beehold My Research!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Speed. Drastically raises the user’s evasiveness.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Bug Expert Twineedle',
                    type: ' Bug',
                    category: 'Physical',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Beedrill.'
                },
                passives: [
                    {
                        name: 'Critical Strike 2',
                        description: 'Powers up moves when those moves land critical hits.'
                    },
                    {
                        name: 'Amped Up 1',
                        description: 'Raises the Pokémon’s Speed when it lands a critical hit.'
                    }
                ]
            },
            {
                name: 'Mega Gengar',
                type1: 'Ghost',
                type2: '',
                weakness: 'Dark',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0094_51_megagangar_256.ktx.png',
                stats: {
                    base: {
                        attack: 10,
                        defense: 10,
                        hp: 107,
                        speed: 25,
                        sp_atk: 18,
                        sp_def: 13
                    },
                    max: {
                        attack: 119,
                        bulk: 403,
                        defense: 102,
                        hp: 417,
                        speed: 337,
                        sp_atk: 339,
                        sp_def: 150
                    }
                },
                moves: [
                    {
                        name: 'Hex',
                        type: 'Ghost',
                        category: 'Special',
                        power: {min_power: 38, max_power: 45},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Its power is doubled if the target is affected by a status condition.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Hypnosis',
                        type: 'Psychic',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 75,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Puts the target to sleep.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Run Along Now!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Radically raises the user’s Speed. The user takes damage based on its maximum HP.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Shadow Ball',
                        type: 'Ghost',
                        category: 'Special',
                        power: {min_power: 99, max_power: 118},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Tried-and-True Hex',
                    type: ' Ghost',
                    category: 'Special',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Gengar. This move’s power increases if the opponent is asleep.'
                },
                passives: [
                    {
                        name: 'Wide Awake',
                        description: 'Prevents the Pokémon from falling asleep.'
                    }
                ]
            },
            {
                name: 'Mega Glalie',
                type1: 'Ice',
                type2: '',
                weakness: 'Steel',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-10/pm0362_51_megaonigohri_256.ktx__0.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 11,
                        hp: 118,
                        speed: 13,
                        sp_atk: 13,
                        sp_def: 11
                    },
                    max: {
                        attack: 177,
                        bulk: 469,
                        defense: 144,
                        hp: 500,
                        speed: 234,
                        sp_atk: 252,
                        sp_def: 144
                    }
                },
                moves: [
                    {
                        name: 'Powder Snow',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 16, max_power: 19},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target frozen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Regen All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Makes all allied sync pairs gradually heal themselves.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Attention Here!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 1,
                        effect: 'Makes opponents target the user for a short time. Sharply raises the Sp. Atk of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Frost Breath',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 38, max_power: 45},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Except in certain circumstances, successful hits with this attack become critical hits.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Glacial Freeze-Dry',
                    type: ' Ice',
                    category: 'Special',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Glalie until the end of battle.'
                },
                passives: [
                    {
                        name: 'Snow Shelter',
                        description: 'Protects the Pokémon from damage from a hailstorm.'
                    },
                    {
                        name: 'Fortuitous 4',
                        description: 'Has a good chance of raising the user’s Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness at random when an attack is successful.\n'
                    }
                ]
            },
            {
                name: 'Mega Houndoom',
                type1: 'Dark',
                type2: '',
                weakness: 'Fighting',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0229_51_megahellgar_256.ktx.png',
                stats: {
                    base: {
                        attack: 18,
                        defense: 9,
                        hp: 85,
                        speed: 22,
                        sp_atk: 22,
                        sp_def: 9
                    },
                    max: {
                        attack: 268,
                        bulk: 463,
                        defense: 155,
                        hp: 460,
                        speed: 345,
                        sp_atk: 336,
                        sp_def: 141
                    }
                },
                moves: [
                    {
                        name: 'Snarl',
                        type: 'Dark',
                        category: 'Special',
                        power: {min_power: 39, max_power: 46},
                        accuracy: 95,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dark Pulse',
                        type: 'Dark',
                        category: 'Special',
                        power: {min_power: 95, max_power: 114},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a small chance of making the target flinch.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Entertain Me!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'The lower the user’s HP is, the more this move raises the user’s Sp. Atk.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Beguiling Dark Pulse',
                    type: ' Dark',
                    category: 'Special',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Houndoom.'
                },
                passives: [
                    {
                        name: 'Flameproof',
                        description: 'Prevents the Pokémon from getting burned.'
                    },
                    {
                        name: 'Wide Awake',
                        description: 'Prevents the Pokémon from falling asleep.'
                    }
                ]
            },
            {
                name: 'Mega Lucario',
                type1: 'Fighting',
                type2: '',
                weakness: 'Fire',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0448_51_megalucario_256.ktx.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 5,
                        hp: 62,
                        speed: 15,
                        sp_atk: 11,
                        sp_def: 5
                    },
                    max: {
                        attack: 325,
                        bulk: 313,
                        defense: 99,
                        hp: 362,
                        speed: 165,
                        sp_atk: 255,
                        sp_def: 83
                    }
                },
                moves: [
                    {
                        name: 'Power-Up Punch',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 30, max_power: 36},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Close Combat',
                        type: 'Fighting',
                        category: 'Physical',
                        power: {min_power: 124, max_power: 148},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Lowers the user’s Defense and Sp. Def.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Skate On Through!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Attack. Drastically raises the user’s Speed.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Give-It-All-Ya-Got Power-Up Punch',
                    type: ' Fighting',
                    category: 'Physical',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Lucario.'
                },
                passives: [
                    {
                        name: 'Unflappable',
                        description: 'Prevents the Pokémon from flinching.'
                    }
                ]
            },
            {
                name: 'Mega Pidgeot',
                type1: 'Flying',
                type2: '',
                weakness: 'Rock',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0018_51_megapigeot_256.ktx__0.png',
                stats: {
                    base: {
                        attack: 15,
                        defense: 9,
                        hp: 92,
                        speed: 19,
                        sp_atk: 25,
                        sp_def: 9
                    },
                    max: {
                        attack: 118,
                        bulk: 461,
                        defense: 146,
                        hp: 465,
                        speed: 322,
                        sp_atk: 403,
                        sp_def: 146
                    }
                },
                moves: [
                    {
                        name: 'Air Cutter',
                        type: 'Flying',
                        category: 'Special',
                        power: {min_power: 43, max_power: 51},
                        accuracy: 95,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'Critical hits land more easily.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Hurricane',
                        type: 'Flying',
                        category: 'Special',
                        power: {min_power: 126, max_power: 151},
                        accuracy: 70,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Never misses when the weather is rainy. Has a moderate chance of leaving the target confused.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Smell Ya Later!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s accuracy, evasiveness, and critical-hit rate.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'World-Swallowing Hurricane',
                    type: ' Flying',
                    category: 'Special',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Pidgeot.'
                },
                passives: [
                    {name: 'Acuity', description: 'Accuracy cannot be lowered.'},
                    {name: 'Haste', description: 'Speed cannot be lowered.'}
                ]
            },
            {
                name: 'Mega Pinsir',
                type1: 'Bug',
                type2: '',
                weakness: 'Flying',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0127_51_megakailios_256.ktx.png',
                stats: {
                    base: {
                        attack: 25,
                        defense: 12,
                        hp: 87,
                        speed: 15,
                        sp_atk: 6,
                        sp_def: 10
                    },
                    max: {
                        attack: 365,
                        bulk: 432,
                        defense: 141,
                        hp: 477,
                        speed: 251,
                        sp_atk: 71,
                        sp_def: 118
                    }
                },
                moves: [
                    {
                        name: 'Fury Cutter',
                        type: 'Bug',
                        category: 'Physical',
                        power: {min_power: 8, max_power: 9},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Its power increases when used in succession.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X-Scissor',
                        type: 'Bug',
                        category: 'Physical',
                        power: {min_power: 50, max_power: 60},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Bring It On!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of the user’s HP. Sharply raises the user’s Speed.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Factory Head X-Scissor',
                    type: ' Bug',
                    category: 'Physical',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Pinsir.'
                },
                passives: [
                    {name: 'Impervious', description: 'Stats cannot be lowered.'},
                    {
                        name: 'Unhindered',
                        description: 'When the Pokémon uses a move to attack, ignores the damage-reducing effects on the opponent’s field of play.'
                    }
                ]
            },
            {
                name: 'Meganium',
                type1: 'Grass',
                type2: '',
                weakness: 'Fire',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0154_01_meganium_256.ktx.png',
                stats: {
                    base: {
                        attack: 17,
                        defense: 26,
                        hp: 177,
                        speed: 20,
                        sp_atk: 22,
                        sp_def: 27
                    },
                    max: {
                        attack: 119,
                        bulk: 533,
                        defense: 112,
                        hp: 722,
                        speed: 157,
                        sp_atk: 193,
                        sp_def: 159
                    }
                },
                moves: [
                    {
                        name: 'Energy Ball',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the critical-hit rate of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Sunny Side Up!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the Attack, Sp. Atk, and Speed of all allied sync pairs. Sharply raises them if the weather is sunny.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Light Screen',
                        type: 'Psychic',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Allied side',
                        cost: 3,
                        uses: 2,
                        effect: 'Reduces special damage done to the allied field of play.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Heart of Gold Leaf Storm',
                    type: ' Grass',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the user’s stats are raised, the greater the power of this move.'
                },
                passives: [
                    {
                        name: 'Solar Shield',
                        description: 'The Pokémon is not affected by status conditions when the weather is sunny.'
                    }
                ]
            },
            {
                name: 'Miltank',
                type1: 'Normal',
                type2: '',
                weakness: 'Fighting',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0241_00_miltank_256.ktx.png',
                stats: {
                    base: {
                        attack: 12,
                        defense: 12,
                        hp: 117,
                        speed: 17,
                        sp_atk: 10,
                        sp_def: 12
                    },
                    max: {
                        attack: 244,
                        bulk: 386,
                        defense: 93,
                        hp: 507,
                        speed: 223,
                        sp_atk: 102,
                        sp_def: 109
                    }
                },
                moves: [
                    {
                        name: 'Body Slam',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 53, max_power: 63},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of leaving the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Stomp',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 53, max_power: 63},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'I’m All Kinds of Strong!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of the user’s HP. Sharply raises the user’s Defense.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Supercute Rolling Tackle',
                    type: ' Normal',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is paralyzed.'
                },
                passives: [
                    {
                        name: 'Mad Strength 2',
                        description: 'Occasionally raises the Pokémon’s Attack when one of its attacks is successful.'
                    }
                ]
            },
            {
                name: 'Mudsdale',
                type1: 'Ground',
                type2: '',
                weakness: 'Grass',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0840_00_roba2_256.ktx.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 9,
                        hp: 62,
                        speed: 7,
                        sp_atk: 8,
                        sp_def: 5
                    },
                    max: {
                        attack: 198,
                        bulk: 358,
                        defense: 146,
                        hp: 399,
                        speed: 128,
                        sp_atk: 192,
                        sp_def: 67
                    }
                },
                moves: [
                    {
                        name: 'Mud-Slap',
                        type: 'Ground',
                        category: 'Special',
                        power: {min_power: 13, max_power: 15},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Lowers the target’s accuracy.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Accuracy',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s accuracy.',
                        unlock_requirements: []
                    },
                    {
                        name: 'High Horsepower',
                        type: 'Ground',
                        category: 'Physical',
                        power: {min_power: 106, max_power: 127},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Stand Strong!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Attack. Drastically raises the user’s Defense.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Ultimately Worthy Tectonic Rage',
                    type: ' Ground',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Clearheaded',
                        description: 'Prevents the Pokémon from becoming confused.'
                    }
                ]
            },
            {
                name: 'Nosepass',
                type1: 'Rock',
                type2: '',
                weakness: 'Fighting',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0299_00_nosepass_256.ktx.png',
                stats: {
                    base: {
                        attack: 9,
                        defense: 14,
                        hp: 110,
                        speed: 8,
                        sp_atk: 14,
                        sp_def: 14
                    },
                    max: {
                        attack: 96,
                        bulk: 428,
                        defense: 160,
                        hp: 299,
                        speed: 85,
                        sp_atk: 101,
                        sp_def: 160
                    }
                },
                moves: [
                    {
                        name: 'Ancient Power',
                        type: 'Rock',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of raising the user’s Attack, Defense, Sp. Atk, Sp. Def, and Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Defense All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Defense of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Study Buddies!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Sp. Atk and Speed of all allied sync pairs.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Wide Guard',
                        type: 'Rock',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: 1,
                        uses: 1,
                        effect: 'The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies moves that target all allies when hit by such a move while in this defensive posture.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Rock Sync Beam',
                    type: ' Rock',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Surging Sand 5',
                        description: 'Powers up moves in a sandstorm.'
                    }
                ]
            },
            {
                name: 'Onix',
                type1: 'Rock',
                type2: '',
                weakness: 'Grass',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0095_00_iwark_256.ktx.png',
                stats: {
                    base: {
                        attack: 7,
                        defense: 8,
                        hp: 80,
                        speed: 10,
                        sp_atk: 6,
                        sp_def: 7
                    },
                    max: {
                        attack: 161,
                        bulk: 428,
                        defense: 144,
                        hp: 465,
                        speed: 194,
                        sp_atk: 52,
                        sp_def: 115
                    }
                },
                moves: [
                    {
                        name: 'Rock Throw',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 23, max_power: 27},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Potion',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of an ally’s HP.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Rock Tomb',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 39, max_power: 46},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Rock-Hard Determination!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack and Defense.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Rock-Solid Rockslide',
                    type: ' Rock',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the opponent’s Speed is lowered, the greater the power of this move.'
                },
                passives: [
                    {
                        name: 'Stoic 2',
                        description: 'Occasionally raises the Pokémon’s Defense after it uses a move.'
                    }
                ]
            },
            {
                name: 'Oshawott',
                type1: 'Water',
                type2: '',
                weakness: 'Electric',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0501_00_mijumaru_256.ktx.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 13,
                        hp: 117,
                        speed: 17,
                        sp_atk: 10,
                        sp_def: 13
                    },
                    max: {
                        attack: 197,
                        bulk: 536,
                        defense: 179,
                        hp: 490,
                        speed: 202,
                        sp_atk: 130,
                        sp_def: 179
                    }
                },
                moves: [
                    {
                        name: 'Aqua Tail',
                        type: 'Water',
                        category: 'Physical',
                        power: {min_power: 56, max_power: 67},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Speed of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'In This Together!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'The lower the user’s HP is, the more this move raises the Attack of all allied sync pairs.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Waterfall',
                        type: 'Water',
                        category: 'Physical',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of making the target flinch.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Water Sync Impact',
                    type: ' Water',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [{name: 'Impervious', description: 'Stats cannot be lowered.'}]
            },
            {
                name: 'Palossand',
                type1: 'Ghost',
                type2: '',
                weakness: 'Ice',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0823_00_sunaba2_256.ktx.png',
                stats: {
                    base: {attack: 7, defense: 8, hp: 85, speed: 8, sp_atk: 6, sp_def: 8},
                    max: {
                        attack: 143,
                        bulk: 451,
                        defense: 149,
                        hp: 437,
                        speed: 180,
                        sp_atk: 111,
                        sp_def: 144
                    }
                },
                moves: [
                    {
                        name: 'Astonish',
                        type: 'Ghost',
                        category: 'Physical',
                        power: {min_power: 12, max_power: 14},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Defense',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Defense.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Sandstorm',
                        type: 'Rock',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Entire field',
                        cost: 2,
                        uses: 2,
                        effect: 'Causes a sandstorm.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Over Here!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 1,
                        effect: 'Makes opponents target the user for a short time. Makes the user gradually heal itself.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Never-Ending Royal Nightmare',
                    type: ' Ghost',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the user’s Defense has been raised, the greater the power of this move.'
                },
                passives: [
                    {
                        name: 'Sand Fortress',
                        description: 'Stats cannot be lowered in a sandstorm.'
                    }
                ]
            },
            {
                name: 'Palpitoad',
                type1: 'Ground',
                type2: '',
                weakness: 'Grass',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0536_00_gamagaru_256.ktx.png',
                stats: {
                    base: {
                        attack: 15,
                        defense: 12,
                        hp: 85,
                        speed: 13,
                        sp_atk: 10,
                        sp_def: 13
                    },
                    max: {
                        attack: 163,
                        bulk: 383,
                        defense: 114,
                        hp: 385,
                        speed: 190,
                        sp_atk: 127,
                        sp_def: 129
                    }
                },
                moves: [
                    {
                        name: 'Mud Shot',
                        type: 'Ground',
                        category: 'Special',
                        power: {min_power: 39, max_power: 46},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Def',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Bulldoze',
                        type: 'Ground',
                        category: 'Physical',
                        power: {min_power: 80, max_power: 96},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 3,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'It Ain’t Over!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed. Makes the user able to endure the next hit it takes.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Ground Sync Impact',
                    type: ' Ground',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Antitoxin',
                        description: 'Prevents the Pokémon from getting poisoned or badly poisoned.'
                    }
                ]
            },
            {
                name: 'Pelipper',
                type1: 'Flying',
                type2: '',
                weakness: 'Electric',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0279_00_pelipper_256.ktx.png',
                stats: {
                    base: {
                        attack: 9,
                        defense: 11,
                        hp: 97,
                        speed: 15,
                        sp_atk: 9,
                        sp_def: 11
                    },
                    max: {
                        attack: 156,
                        bulk: 397,
                        defense: 113,
                        hp: 390,
                        speed: 192,
                        sp_atk: 156,
                        sp_def: 143
                    }
                },
                moves: [
                    {
                        name: 'Air Slash',
                        type: 'Flying',
                        category: 'Special',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Rain Dance',
                        type: 'Water',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Entire field',
                        cost: 2,
                        uses: 2,
                        effect: 'Makes the weather rainy.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Graceful Aerobatics!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Defense and Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Hurricane',
                        type: 'Flying',
                        category: 'Special',
                        power: {min_power: 126, max_power: 151},
                        accuracy: 70,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Never misses when the weather is rainy. Has a moderate chance of leaving the target confused.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Flyaway Air Cutter',
                    type: ' Flying',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is flinching.'
                },
                passives: [
                    {
                        name: 'Racing Rain 2',
                        description: 'Quickly charges the move gauge when the weather is rainy.'
                    }
                ]
            },
            {
                name: 'Persian',
                type1: 'Dark',
                type2: '',
                weakness: 'Bug',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0053_61_apersian_256.ktx.png',
                stats: {
                    base: {
                        attack: 7,
                        defense: 8,
                        hp: 80,
                        speed: 11,
                        sp_atk: 6,
                        sp_def: 7
                    },
                    max: {
                        attack: 184,
                        bulk: 420,
                        defense: 153,
                        hp: 400,
                        speed: 271,
                        sp_atk: 105,
                        sp_def: 122
                    }
                },
                moves: [
                    {
                        name: 'Bite',
                        type: 'Dark',
                        category: 'Physical',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Screech',
                        type: 'Normal',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Sharply lowers the target’s Defense.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Just Warming Up...',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s evasiveness. Ensures that the user’s next attack will be a critical hit.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Dark Authority Black Hole Eclipse',
                    type: ' Dark',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is flinching.'
                },
                passives: [
                    {
                        name: 'Critical Sting 1',
                        description: 'When a critical hit lands, raises the chance of making the target flinch, become confused, or become trapped with the additional effect of the move.'
                    }
                ]
            },
            {
                name: 'Pidgeot',
                type1: 'Normal',
                type2: '',
                weakness: 'Rock',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0018_00_pigeot_256.ktx.png',
                stats: {
                    base: {
                        attack: 15,
                        defense: 9,
                        hp: 92,
                        speed: 16,
                        sp_atk: 21,
                        sp_def: 9
                    },
                    max: {
                        attack: 118,
                        bulk: 461,
                        defense: 146,
                        hp: 465,
                        speed: 268,
                        sp_atk: 336,
                        sp_def: 146
                    }
                },
                moves: [
                    {
                        name: 'Air Slash',
                        type: 'Flying',
                        category: 'Special',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Air Cutter',
                        type: 'Flying',
                        category: 'Special',
                        power: {min_power: 43, max_power: 51},
                        accuracy: 95,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'Critical hits land more easily.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Smell Ya Later!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s accuracy, evasiveness, and critical-hit rate.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'World-Swallowing Hurricane',
                    type: ' Flying',
                    category: 'Special',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Pidgeot.'
                },
                passives: [
                    {name: 'Acuity', description: 'Accuracy cannot be lowered.'},
                    {name: 'Haste', description: 'Speed cannot be lowered.'}
                ]
            },
            {
                name: 'Pignite',
                type1: 'Fire',
                type2: '',
                weakness: 'Water',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-09/pm0499_00_chaoboo_256.ktx_.png',
                stats: {
                    base: {
                        attack: 27,
                        defense: 16,
                        hp: 115,
                        speed: 14,
                        sp_atk: 19,
                        sp_def: 18
                    },
                    max: {
                        attack: 295,
                        bulk: 423,
                        defense: 80,
                        hp: 719,
                        speed: 130,
                        sp_atk: 122,
                        sp_def: 82
                    }
                },
                moves: [
                    {
                        name: 'Flame Charge',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 30, max_power: 36},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Potion',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of an ally’s HP.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Flare Blitz',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 123, max_power: 147},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Unfreezes the user. The user also takes 25% of the damage it dealt to the target. Has a very small chance of leaving the target burned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Try and Stop Us!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'If the user’s Speed has been raised, raises the user’s Attack by double the amount its Speed has been raised.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Fire Sync Impact',
                    type: ' Fire',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Antitoxin',
                        description: 'Prevents the Pokémon from getting poisoned or badly poisoned.'
                    },
                    {
                        name: 'First Aid 4',
                        description: 'Restores a bit of the Pokémon’s HP once during battle when the Pokémon is in a pinch.'
                    }
                ]
            },
            {
                name: 'Pikachu',
                type1: 'Electric',
                type2: '',
                weakness: 'Ground',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0025_00_pikachu_256.ktx.png',
                stats: {
                    base: {
                        attack: 10,
                        defense: 5,
                        hp: 62,
                        speed: 9,
                        sp_atk: 11,
                        sp_def: 6
                    },
                    max: {
                        attack: 194,
                        bulk: 338,
                        defense: 83,
                        hp: 399,
                        speed: 210,
                        sp_atk: 255,
                        sp_def: 110
                    }
                },
                moves: [
                    {
                        name: 'Thunder Shock',
                        type: 'Electric',
                        category: 'Special',
                        power: {min_power: 17, max_power: 20},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Potion',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of an ally’s HP.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Thunderbolt',
                        type: 'Electric',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target paralyzed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Jump Start!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk. Raises the user’s Speed.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Thunder of Newfound Passion',
                    type: ' Electric',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Endurance',
                        description: 'If the Pokémon enters battle with full HP, allows it to endure a single overwhelming attack with 1 HP left.'
                    }
                ]
            },
            {
                name: 'Pinsir',
                type1: 'Bug',
                type2: '',
                weakness: 'Flying',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0127_00_kailios_256.ktx.png',
                stats: {
                    base: {
                        attack: 21,
                        defense: 10,
                        hp: 87,
                        speed: 15,
                        sp_atk: 6,
                        sp_def: 10
                    },
                    max: {
                        attack: 305,
                        bulk: 409,
                        defense: 118,
                        hp: 477,
                        speed: 251,
                        sp_atk: 71,
                        sp_def: 118
                    }
                },
                moves: [
                    {
                        name: 'Fury Cutter',
                        type: 'Bug',
                        category: 'Physical',
                        power: {min_power: 8, max_power: 9},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Its power increases when used in succession.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X-Scissor',
                        type: 'Bug',
                        category: 'Physical',
                        power: {min_power: 50, max_power: 60},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Bring It On!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of the user’s HP. Sharply raises the user’s Speed.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Factory Head X-Scissor',
                    type: ' Bug',
                    category: 'Physical',
                    power: {min_power: 160, max_power: 192},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Become Mega Pinsir.'
                },
                passives: [
                    {name: 'Headstrong', description: 'Attack cannot be lowered.'}
                ]
            },
            {
                name: 'Piplup',
                type1: 'Water',
                type2: '',
                weakness: 'Grass',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0393_00_pochama_256.ktx.png',
                stats: {
                    base: {
                        attack: 9,
                        defense: 6,
                        hp: 62,
                        speed: 9,
                        sp_atk: 11,
                        sp_def: 6
                    },
                    max: {
                        attack: 160,
                        bulk: 365,
                        defense: 110,
                        hp: 399,
                        speed: 161,
                        sp_atk: 255,
                        sp_def: 110
                    }
                },
                moves: [
                    {
                        name: 'Bubble',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 19, max_power: 22},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Full Heal',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Removes all status conditions from an ally.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Bubble Beam',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'No Hesitation!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed. Raises the user’s critical-hit rate.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Water Sync Beam',
                    type: ' Water',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Flux 5',
                        description: 'The fuller the move gauge, the more this powers up moves.'
                    }
                ]
            },
            {
                name: 'Ponyta',
                type1: 'Fire',
                type2: '',
                weakness: 'Rock',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0077_00_ponyta_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 10,
                        hp: 100,
                        speed: 25,
                        sp_atk: 10,
                        sp_def: 13
                    },
                    max: {
                        attack: 151,
                        bulk: 419,
                        defense: 119,
                        hp: 492,
                        speed: 358,
                        sp_atk: 119,
                        sp_def: 122
                    }
                },
                moves: [
                    {
                        name: 'Flame Wheel',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Unfreezes the user. Has a very small chance of leaving the target burned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Fire Spin',
                        type: 'Fire',
                        category: 'Special',
                        power: {min_power: 38, max_power: 45},
                        accuracy: 85,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Leaves the target trapped.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Raging Inferno!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Drastically raises the user’s Attack. Sharply raises either the user’s Defense, Sp. Atk, Sp. Def, or Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Sunny Day',
                        type: 'Fire',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Entire field',
                        cost: 2,
                        uses: 2,
                        effect: 'Makes the weather sunny.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Fire Sync Impact',
                    type: ' Fire',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Hostile Environment 1',
                        description: 'Raises the chance of inflicting status conditions with the additional effects of moves.'
                    }
                ]
            },
            {
                name: 'Prinplup',
                type1: 'Water',
                type2: '',
                weakness: 'Grass',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0394_00_pottaishi_256.ktx.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 9,
                        hp: 75,
                        speed: 14,
                        sp_atk: 18,
                        sp_def: 9
                    },
                    max: {
                        attack: 164,
                        bulk: 375,
                        defense: 113,
                        hp: 412,
                        speed: 168,
                        sp_atk: 276,
                        sp_def: 113
                    }
                },
                moves: [
                    {
                        name: 'Bubble',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 19, max_power: 22},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Full Heal',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Removes all status conditions from an ally.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Bubble Beam',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'No Hesitation!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed. Raises the user’s critical-hit rate.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Water Sync Beam',
                    type: ' Water',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Flux 5',
                        description: 'The fuller the move gauge, the more this powers up moves.'
                    }
                ]
            },
            {
                name: 'Raichu (Alola Form)',
                type1: 'Electric',
                type2: '',
                weakness: 'Ground',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0026_61_araichu_256.ktx.png',
                stats: {
                    base: {
                        attack: 10,
                        defense: 5,
                        hp: 62,
                        speed: 11,
                        sp_atk: 13,
                        sp_def: 8
                    },
                    max: {
                        attack: 74,
                        bulk: 388,
                        defense: 120,
                        hp: 352,
                        speed: 208,
                        sp_atk: 271,
                        sp_def: 140
                    }
                },
                moves: [
                    {
                        name: 'Thunder Shock',
                        type: 'Electric',
                        category: 'Special',
                        power: {min_power: 17, max_power: 20},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Discharge',
                        type: 'Electric',
                        category: 'Special',
                        power: {min_power: 92, max_power: 110},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 3,
                        uses: null,
                        effect: 'Has a moderate chance of leaving the target paralyzed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Feel the Alolan Breeze!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Drastically raises the user’s Speed. Raises the user’s evasiveness.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Endless Summer Gigavolt Havoc',
                    type: ' Electric',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'First Aid 4',
                        description: 'Restores a bit of the Pokémon’s HP once during battle when the Pokémon is in a pinch.'
                    }
                ]
            },
            {
                name: 'Reuniclus',
                type1: 'Psychic',
                type2: '',
                weakness: 'Ghost',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-10/pm0579_00_lanculus_256.ktx_.png',
                stats: {
                    base: {
                        attack: 9,
                        defense: 10,
                        hp: 99,
                        speed: 9,
                        sp_atk: 18,
                        sp_def: 11
                    },
                    max: {
                        attack: 125,
                        bulk: 427,
                        defense: 131,
                        hp: 453,
                        speed: 175,
                        sp_atk: 333,
                        sp_def: 132
                    }
                },
                moves: [
                    {
                        name: 'Hidden Power',
                        type: 'Psychic',
                        category: 'Special',
                        power: {min_power: 50, max_power: 60},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Move Gauge Boost',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the user’s move gauge by three.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Psychic',
                        type: 'Psychic',
                        category: 'Special',
                        power: {min_power: 99, max_power: 118},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Don’t Bore Me!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk. Raises the user’s Defense and Sp. Def.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Broken Sleep Psychic',
                    type: ' Psychic',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Antitoxin',
                        description: 'Prevents the Pokémon from getting poisoned or badly poisoned.'
                    },
                    {
                        name: 'Flameproof',
                        description: 'Prevents the Pokémon from getting burned.'
                    },
                    {
                        name: 'Escape Artist',
                        description: 'Prevents the Pokémon from becoming trapped.'
                    }
                ]
            },
            {
                name: 'Roserade',
                type1: 'Grass',
                type2: '',
                weakness: 'Flying',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0407_01_roserade_256.ktx.png',
                stats: {
                    base: {
                        attack: 5,
                        defense: 8,
                        hp: 72,
                        speed: 16,
                        sp_atk: 20,
                        sp_def: 14
                    },
                    max: {
                        attack: 102,
                        bulk: 387,
                        defense: 84,
                        hp: 354,
                        speed: 252,
                        sp_atk: 304,
                        sp_def: 175
                    }
                },
                moves: [
                    {
                        name: 'Absorb',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 19, max_power: 22},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Restores the user’s HP based on the amount of damage dealt to the target.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Leaf Storm',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 136, max_power: 163},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Sharply lowers the user’s Sp. Atk.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Trust in Nature!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the user’s move gauge by two. Converts the user’s stat reductions into stat increases.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Vivid Leaf Storm',
                    type: ' Grass',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Speeding Sun 2',
                        description: 'Quickly charges the move gauge when the weather is sunny.'
                    }
                ]
            },
            {
                name: 'Salamence',
                type1: 'Dragon',
                type2: '',
                weakness: 'Fairy',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0373_00_bohmander_256.ktx.png',
                stats: {
                    base: {
                        attack: 14,
                        defense: 14,
                        hp: 102,
                        speed: 12,
                        sp_atk: 10,
                        sp_def: 13
                    },
                    max: {
                        attack: 218,
                        bulk: 471,
                        defense: 159,
                        hp: 425,
                        speed: 157,
                        sp_atk: 214,
                        sp_def: 158
                    }
                },
                moves: [
                    {
                        name: 'Dragon Claw',
                        type: 'Dragon',
                        category: 'Physical',
                        power: {min_power: 50, max_power: 60},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Def All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Sp. Def of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Hard to Starboard!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the move gauges of all allied sync pairs by two. Sharply raises the Defense of all allied sync pairs.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Dragon Breath',
                        type: 'Dragon',
                        category: 'Special',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of leaving the target paralyzed.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Righteous Heart Dragon Claw',
                    type: ' Dragon',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Terrify 1',
                        description: 'Lowers the Attack of all opposing sync pairs when the Pokémon enters a battle.'
                    }
                ]
            },
            {
                name: 'Sceptile',
                type1: 'Grass',
                type2: '',
                weakness: 'Poison',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-10/pm0254_00_jukain_256.ktx_.png',
                stats: {
                    base: {
                        attack: 36,
                        defense: 14,
                        hp: 125,
                        speed: 36,
                        sp_atk: 36,
                        sp_def: 14
                    },
                    max: {
                        attack: 322,
                        bulk: 427,
                        defense: 129,
                        hp: 465,
                        speed: 373,
                        sp_atk: 339,
                        sp_def: 129
                    }
                },
                moves: [
                    {
                        name: 'Bullet Seed',
                        type: 'Grass',
                        category: 'Physical',
                        power: {min_power: 15, max_power: 18},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Attacks the target two to five times in a row.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Leaf Storm',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 136, max_power: 163},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Sharply lowers the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'No Turning Back!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Uses a maximum of three slots of the user’s move gauge. Based on the amount used, this move raises both the user’s Attack and Sp. Atk by up to six stat ranks.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Leaf Blade of Sundering',
                    type: ' Grass',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {name: 'Haste', description: 'Speed cannot be lowered.'},
                    {
                        name: 'Lithe',
                        description: 'Prevents the Pokémon from getting paralyzed.'
                    }
                ]
            },
            {
                name: 'Seel',
                type1: 'Ice',
                type2: '',
                weakness: 'Electric',
                role: 'Strike (Special)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0086_00_pawou_256.ktx.png',
                stats: {
                    base: {
                        attack: 10,
                        defense: 8,
                        hp: 67,
                        speed: 7,
                        sp_atk: 10,
                        sp_def: 8
                    },
                    max: {
                        attack: 194,
                        bulk: 347,
                        defense: 58,
                        hp: 487,
                        speed: 128,
                        sp_atk: 194,
                        sp_def: 112
                    }
                },
                moves: [
                    {
                        name: 'Ice Beam',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 46, max_power: 55},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target frozen.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Icy Wind',
                        type: 'Ice',
                        category: 'Special',
                        power: {min_power: 92, max_power: 110},
                        accuracy: 95,
                        target: 'All opponents',
                        cost: 3,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'I’ll Teach You a Lesson!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk and Sp. Def.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Ice Sync Beam',
                    type: ' Ice',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Superduper Effective 2',
                        description: 'Powers up moves that are super effective.'
                    }
                ]
            },
            {
                name: 'Serperior',
                type1: 'Grass',
                type2: '',
                weakness: 'Flying',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0497_00_jalorda_256.ktx.png',
                stats: {
                    base: {
                        attack: 10,
                        defense: 19,
                        hp: 120,
                        speed: 17,
                        sp_atk: 14,
                        sp_def: 21
                    },
                    max: {
                        attack: 79,
                        bulk: 612,
                        defense: 172,
                        hp: 595,
                        speed: 158,
                        sp_atk: 104,
                        sp_def: 224
                    }
                },
                moves: [
                    {
                        name: 'Energy Ball',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Sp. Atk of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Time to Energize!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the move gauges of all allied sync pairs by three.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Giga Drain',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 91, max_power: 109},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Restores the user’s HP based on the amount of damage dealt to the target.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Shoot for the Stars Leaf Storm',
                    type: ' Grass',
                    category: 'Special',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [{name: 'Stalwart', description: 'Sp. Def cannot be lowered.'}]
            },
            {
                name: 'Servine',
                type1: 'Grass',
                type2: '',
                weakness: 'Flying',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0496_00_janovy_256.ktx.png',
                stats: {
                    base: {
                        attack: 7,
                        defense: 13,
                        hp: 100,
                        speed: 11,
                        sp_atk: 9,
                        sp_def: 14
                    },
                    max: {
                        attack: 76,
                        bulk: 564,
                        defense: 166,
                        hp: 535,
                        speed: 152,
                        sp_atk: 99,
                        sp_def: 204
                    }
                },
                moves: [
                    {
                        name: 'Energy Ball',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Sp. Atk of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Time to Energize!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the move gauges of all allied sync pairs by three.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Giga Drain',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 91, max_power: 109},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Restores the user’s HP based on the amount of damage dealt to the target.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Grass Sync Beam',
                    type: ' Grass',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [{name: 'Stalwart', description: 'Sp. Def cannot be lowered.'}]
            },
            {
                name: 'Slaking',
                type1: 'Normal',
                type2: '',
                weakness: 'Fighting',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0289_00_kekking_256.ktx.png',
                stats: {
                    base: {
                        attack: 12,
                        defense: 6,
                        hp: 67,
                        speed: 6,
                        sp_atk: 2,
                        sp_def: 6
                    },
                    max: {
                        attack: 272,
                        bulk: 381,
                        defense: 110,
                        hp: 445,
                        speed: 100,
                        sp_atk: 31,
                        sp_def: 110
                    }
                },
                moves: [
                    {
                        name: 'Body Slam',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 53, max_power: 63},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of leaving the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Double-Edge',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 167, max_power: 200},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'The user also takes 25% of the damage it dealt to the target.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'All-Out Effort!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of the user’s HP. Increases the user’s move gauge by two.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Power-Chasing Giga Impact',
                    type: ' Normal',
                    category: 'Physical',
                    power: {min_power: 300, max_power: 360},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Reserves 2',
                        description: 'Powers up moves in a pinch.'
                    }
                ]
            },
            {
                name: 'Snivy',
                type1: 'Grass',
                type2: '',
                weakness: 'Flying',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0495_00_tsutarja_256.ktx.png',
                stats: {
                    base: {attack: 5, defense: 9, hp: 82, speed: 7, sp_atk: 6, sp_def: 9},
                    max: {
                        attack: 74,
                        bulk: 531,
                        defense: 162,
                        hp: 512,
                        speed: 148,
                        sp_atk: 96,
                        sp_def: 183
                    }
                },
                moves: [
                    {
                        name: 'Energy Ball',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Sp. Atk of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Time to Energize!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the move gauges of all allied sync pairs by three.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Giga Drain',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 91, max_power: 109},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Restores the user’s HP based on the amount of damage dealt to the target.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Grass Sync Beam',
                    type: ' Grass',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [{name: 'Stalwart', description: 'Sp. Def cannot be lowered.'}]
            },
            {
                name: 'Solrock',
                type1: 'Psychic',
                type2: 'Rock',
                weakness: 'Dark',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0338_00_solrock_256.ktx.png',
                stats: {
                    base: {
                        attack: 18,
                        defense: 11,
                        hp: 92,
                        speed: 11,
                        sp_atk: 7,
                        sp_def: 8
                    },
                    max: {
                        attack: 270,
                        bulk: 398,
                        defense: 147,
                        hp: 419,
                        speed: 128,
                        sp_atk: 83,
                        sp_def: 99
                    }
                },
                moves: [
                    {
                        name: 'Zen Headbutt',
                        type: 'Psychic',
                        category: 'Physical',
                        power: {min_power: 51, max_power: 61},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Rock Tomb',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 39, max_power: 46},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'All as One!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'If the user’s stats have been raised, the amount of increase is doubled.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Zen Headbutt of Duality',
                    type: ' Psychic',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Power Chain 3',
                        description: 'Powers up moves when unity bonus is in effect.'
                    },
                    {name: 'Headstrong', description: 'Attack cannot be lowered.'},
                    {name: 'Unbending', description: 'Defense cannot be lowered.'}
                ]
            },
            {
                name: 'Starmie',
                type1: 'Water',
                type2: '',
                weakness: 'Electric',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0121_00_starmie_256.ktx.png',
                stats: {
                    base: {
                        attack: 5,
                        defense: 10,
                        hp: 82,
                        speed: 8,
                        sp_atk: 7,
                        sp_def: 9
                    },
                    max: {
                        attack: 97,
                        bulk: 480,
                        defense: 151,
                        hp: 462,
                        speed: 177,
                        sp_atk: 159,
                        sp_def: 161
                    }
                },
                moves: [
                    {
                        name: 'Bubble Beam',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Def All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Sp. Def of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Catch Us If You Can!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises an ally’s evasiveness. Makes an ally gradually heal itself.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Hydro Pump',
                        type: 'Water',
                        category: 'Special',
                        power: {min_power: 125, max_power: 150},
                        accuracy: 80,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Tomboyish Mermaid Bubble Beam',
                    type: ' Water',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the user’s Sp. Def has been raised, the greater the power of this move.'
                },
                passives: [
                    {
                        name: 'Healing Hand 2',
                        description: 'Occasionally removes all status conditions of all allied sync pairs after the Pokémon uses a move.'
                    }
                ]
            },
            {
                name: 'Stoutland',
                type1: 'Normal',
                type2: '',
                weakness: 'Fighting',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0508_00_mooland_256.ktx.png',
                stats: {
                    base: {
                        attack: 7,
                        defense: 9,
                        hp: 92,
                        speed: 12,
                        sp_atk: 5,
                        sp_def: 8
                    },
                    max: {
                        attack: 179,
                        bulk: 523,
                        defense: 183,
                        hp: 572,
                        speed: 203,
                        sp_atk: 43,
                        sp_def: 132
                    }
                },
                moves: [
                    {
                        name: 'Facade',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Its power is doubled when the user is poisoned, badly poisoned, paralyzed, or burned. Ignores lowered Attack from burns.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Full Heal',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Removes all status conditions from an ally.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Apply Yourself!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Increases the move gauges of all allied sync pairs by two. Makes all allied sync pairs gradually heal themselves.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Crunch',
                        type: 'Dark',
                        category: 'Physical',
                        power: {min_power: 99, max_power: 118},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a small chance of lowering the target’s Defense.',
                        unlock_requirements: [
                            'Great Aid Ade x10',
                            'Ultra Aid Ade x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Fundamental Takedown',
                    type: ' Normal',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the user is affected by a status condition.'
                },
                passives: [
                    {
                        name: 'Outrun 4',
                        description: 'Quickly charges the move gauge when the Pokémon is affected by a status condition.'
                    }
                ]
            },
            {
                name: 'Surskit',
                type1: 'Bug',
                type2: '',
                weakness: 'Rock',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0283_00_ametama_256.ktx.png',
                stats: {
                    base: {
                        attack: 6,
                        defense: 9,
                        hp: 80,
                        speed: 10,
                        sp_atk: 9,
                        sp_def: 8
                    },
                    max: {
                        attack: 105,
                        bulk: 476,
                        defense: 159,
                        hp: 439,
                        speed: 206,
                        sp_atk: 186,
                        sp_def: 158
                    }
                },
                moves: [
                    {
                        name: 'Infestation',
                        type: 'Bug',
                        category: 'Special',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Leaves the target trapped.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Struggle Bug',
                        type: 'Bug',
                        category: 'Special',
                        power: {min_power: 30, max_power: 36},
                        accuracy: 100,
                        target: 'All opponents',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Sp. Atk.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Just Fantastic!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Def. Makes the user gradually heal itself.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Bug Sync Beam',
                    type: ' Bug',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Terrify 1',
                        description: 'Lowers the Attack of all opposing sync pairs when the Pokémon enters a battle.'
                    }
                ]
            },
            {
                name: 'Swanna',
                type1: 'Flying',
                type2: '',
                weakness: 'Rock',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0581_00_swanna_256.ktx.png',
                stats: {
                    base: {attack: 6, defense: 9, hp: 82, speed: 8, sp_atk: 6, sp_def: 9},
                    max: {
                        attack: 158,
                        bulk: 450,
                        defense: 134,
                        hp: 502,
                        speed: 177,
                        sp_atk: 174,
                        sp_def: 134
                    }
                },
                moves: [
                    {
                        name: 'Gust',
                        type: 'Flying',
                        category: 'Special',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Potion',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of an ally’s HP.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Take Flight!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Defense of all allied sync pairs. Sharply raises the Speed of all allied sync pairs.',
                        unlock_requirements: ['Training Machine x']
                    },
                    {
                        name: 'Aerial Ace',
                        type: 'Flying',
                        category: 'Physical',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 0,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Never misses.',
                        unlock_requirements: [
                            'Great Aid Ade x',
                            'Ultra Aid Ade x',
                            'Training Machine x',
                            'Super Training Machine x'
                        ]
                    }
                ],
                syncMove: {
                    name: 'High-Flying Sky Attack',
                    type: ' Flying',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'The more the user’s Speed has been raised, the greater the power of this move.'
                },
                passives: [{name: 'Haste', description: 'Speed cannot be lowered.'}]
            },
            {
                name: 'Tepig',
                type1: 'Fire',
                type2: '',
                weakness: 'Water',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-09/pm0498_00_pokabu_256.ktx_.png',
                stats: {
                    base: {
                        attack: 20,
                        defense: 13,
                        hp: 105,
                        speed: 11,
                        sp_atk: 16,
                        sp_def: 15
                    },
                    max: {
                        attack: 284,
                        bulk: 407,
                        defense: 77,
                        hp: 691,
                        speed: 127,
                        sp_atk: 119,
                        sp_def: 79
                    }
                },
                moves: [
                    {
                        name: 'Flame Charge',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 30, max_power: 36},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Potion',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'An ally',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of an ally’s HP.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Flare Blitz',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 123, max_power: 147},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Unfreezes the user. The user also takes 25% of the damage it dealt to the target. Has a very small chance of leaving the target burned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Try and Stop Us!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'If the user’s Speed has been raised, raises the user’s Attack by double the amount its Speed has been raised.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Fire Sync Impact',
                    type: ' Fire',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Antitoxin',
                        description: 'Prevents the Pokémon from getting poisoned or badly poisoned.'
                    },
                    {
                        name: 'First Aid 4',
                        description: 'Restores a bit of the Pokémon’s HP once during battle when the Pokémon is in a pinch.'
                    }
                ]
            },
            {
                name: 'Togedemaru',
                type1: 'Electric',
                type2: '',
                weakness: 'Ground',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0858_00_nijichu_256.ktx.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 9,
                        hp: 100,
                        speed: 19,
                        sp_atk: 10,
                        sp_def: 9
                    },
                    max: {
                        attack: 184,
                        bulk: 404,
                        defense: 117,
                        hp: 422,
                        speed: 303,
                        sp_atk: 119,
                        sp_def: 134
                    }
                },
                moves: [
                    {
                        name: 'Zing Zap',
                        type: 'Electric',
                        category: 'Physical',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Def',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Nuzzle',
                        type: 'Electric',
                        category: 'Physical',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Leaves the target paralyzed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'The Power of Science!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Drastically raises the user’s Attack and Speed. Sharply lowers the user’s Defense.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Whiz Kid Gigavolt Havoc',
                    type: ' Electric',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is flinching.'
                },
                passives: [
                    {
                        name: 'Endurance',
                        description: 'If the Pokémon enters battle with full HP, allows it to endure a single overwhelming attack with 1 HP left.'
                    }
                ]
            },
            {
                name: 'Torchic',
                type1: 'Fire',
                type2: '',
                weakness: 'Water',
                role: 'Support',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-10/pm0255_00_achamo_256.ktx_.png',
                stats: {
                    base: {
                        attack: 13,
                        defense: 12,
                        hp: 90,
                        speed: 19,
                        sp_atk: 11,
                        sp_def: 12
                    },
                    max: {
                        attack: 150,
                        bulk: 450,
                        defense: 137,
                        hp: 484,
                        speed: 262,
                        sp_atk: 146,
                        sp_def: 137
                    }
                },
                moves: [
                    {
                        name: 'Flame Charge',
                        type: 'Fire',
                        category: 'Physical',
                        power: {min_power: 30, max_power: 36},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack All',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the Attack of all allied sync pairs.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Blazing Hope!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'All allies',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the critical-hit rate of all allied sync pairs and sharply raises their Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Flamethrower',
                        type: 'Fire',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target burned.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Fire Sync Impact',
                    type: ' Fire',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [{name: 'Haste', description: 'Speed cannot be lowered.'}]
            },
            {
                name: 'Torkoal',
                type1: 'Fire',
                type2: '',
                weakness: 'Water',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0324_00_cotoise_256.ktx.png',
                stats: {
                    base: {attack: 7, defense: 8, hp: 70, speed: 9, sp_atk: 7, sp_def: 8},
                    max: {
                        attack: 67,
                        bulk: 444,
                        defense: 162,
                        hp: 382,
                        speed: 160,
                        sp_atk: 173,
                        sp_def: 144
                    }
                },
                moves: [
                    {
                        name: 'Ember',
                        type: 'Fire',
                        category: 'Special',
                        power: {min_power: 17, max_power: 20},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target burned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Atk',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Will-O-Wisp',
                        type: 'Fire',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Leaves the target burned.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Too Hot to Handle!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Defense. Raises the user’s critical-hit rate.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Fiery Passion Overheat',
                    type: ' Fire',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is burned.'
                },
                passives: [{name: 'Impervious', description: 'Stats cannot be lowered.'}]
            },
            {
                name: 'Totodile',
                type1: 'Normal',
                type2: 'Water',
                weakness: 'Grass',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0158_00_waninoko_256.ktx.png',
                stats: {
                    base: {
                        attack: 15,
                        defense: 10,
                        hp: 95,
                        speed: 16,
                        sp_atk: 5,
                        sp_def: 10
                    },
                    max: {
                        attack: 199,
                        bulk: 393,
                        defense: 108,
                        hp: 522,
                        speed: 234,
                        sp_atk: 90,
                        sp_def: 96
                    }
                },
                moves: [
                    {
                        name: 'Waterfall',
                        type: 'Water',
                        category: 'Physical',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a small chance of making the target flinch.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Mega Kick',
                        type: 'Normal',
                        category: 'Physical',
                        power: {min_power: 167, max_power: 200},
                        accuracy: 75,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Pick Up the Pace!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed. Makes the user’s next attack a sure hit and a critical hit.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Water Sync Impact',
                    type: ' Water',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Endurance',
                        description: 'If the Pokémon enters battle with full HP, allows it to endure a single overwhelming attack with 1 HP left.'
                    },
                    {
                        name: 'Water Shift',
                        description: 'Normal-type moves become Water-type moves.'
                    }
                ]
            },
            {
                name: 'Toucannon',
                type1: 'Flying',
                type2: '',
                weakness: 'Ice',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0809_00_kuchibashi3_256.ktx.png',
                stats: {
                    base: {
                        attack: 22,
                        defense: 12,
                        hp: 95,
                        speed: 14,
                        sp_atk: 10,
                        sp_def: 10
                    },
                    max: {
                        attack: 334,
                        bulk: 432,
                        defense: 136,
                        hp: 447,
                        speed: 203,
                        sp_atk: 123,
                        sp_def: 134
                    }
                },
                moves: [
                    {
                        name: 'Peck',
                        type: 'Flying',
                        category: 'Physical',
                        power: {min_power: 20, max_power: 24},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 1,
                        uses: null,
                        effect: 'No additional effect.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Beak Blast',
                        type: 'Flying',
                        category: 'Physical',
                        power: {min_power: 75, max_power: 90},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'The user gets ready to counterattack. Using this move again will cause the user to attack. No other actions can be taken while ready to counterattack. The user will attack if attacked while ready to counterattack. Leaves opponents burned when they use physical attacks on the user while it is ready to counterattack.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Second Wind!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Ensures that the user’s next attack will be a critical hit. Makes the user able to endure the next hit it takes.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Supersonic Skystrike Drive',
                    type: ' Flying',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [{name: 'Piercing Gaze', description: 'Moves never miss.'}]
            },
            {
                name: 'Treecko',
                type1: 'Grass',
                type2: '',
                weakness: 'Poison',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0252_00_kimori_256.ktx.png',
                stats: {
                    base: {
                        attack: 20,
                        defense: 8,
                        hp: 90,
                        speed: 20,
                        sp_atk: 20,
                        sp_def: 8
                    },
                    max: {
                        attack: 306,
                        bulk: 402,
                        defense: 123,
                        hp: 430,
                        speed: 340,
                        sp_atk: 306,
                        sp_def: 123
                    }
                },
                moves: [
                    {
                        name: 'Bullet Seed',
                        type: 'Grass',
                        category: 'Physical',
                        power: {min_power: 15, max_power: 18},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Attacks the target two to five times in a row.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Dire Hit +',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s critical-hit rate.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Leaf Storm',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 136, max_power: 163},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Sharply lowers the user’s Sp. Atk.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'No Turning Back!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Uses a maximum of three slots of the user’s move gauge. Based on the amount used, this move raises both the user’s Attack and Sp. Atk by up to six stat ranks.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Grass Sync Impact',
                    type: ' Grass',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {name: 'Haste', description: 'Speed cannot be lowered.'},
                    {
                        name: 'Lithe',
                        description: 'Prevents the Pokémon from getting paralyzed.'
                    }
                ]
            },
            {
                name: 'Tyranitar',
                type1: 'Rock',
                type2: '',
                weakness: 'Fighting',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0248_00_bangiras_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 6,
                        hp: 67,
                        speed: 7,
                        sp_atk: 10,
                        sp_def: 4
                    },
                    max: {
                        attack: 207,
                        bulk: 361,
                        defense: 143,
                        hp: 419,
                        speed: 111,
                        sp_atk: 101,
                        sp_def: 66
                    }
                },
                moves: [
                    {
                        name: 'Rock Tomb',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 39, max_power: 46},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Lowers the target’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Rock Slide',
                        type: 'Rock',
                        category: 'Physical',
                        power: {min_power: 105, max_power: 126},
                        accuracy: 90,
                        target: 'All opponents',
                        cost: 3,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Rock-Solid Finisher!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Defense. Makes the user’s next attack a sure hit and a critical hit.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Sygnature Rock-Solid Stone Edge',
                    type: ' Rock',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Sand Fortress',
                        description: 'Stats cannot be lowered in a sandstorm.'
                    }
                ]
            },
            {
                name: 'Vileplume',
                type1: 'Grass',
                type2: '',
                weakness: 'Fire',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0045_01_ruffresia_256.ktx.png',
                stats: {
                    base: {attack: 7, defense: 7, hp: 85, speed: 9, sp_atk: 7, sp_def: 8},
                    max: {
                        attack: 41,
                        bulk: 491,
                        defense: 115,
                        hp: 507,
                        speed: 160,
                        sp_atk: 159,
                        sp_def: 192
                    }
                },
                moves: [
                    {
                        name: 'Energy Ball',
                        type: 'Grass',
                        category: 'Special',
                        power: {min_power: 49, max_power: 58},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Sp. Def',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Def.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Stun Spore',
                        type: 'Grass',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 90,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Leaves the target paralyzed.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Pour It On!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Raises the user’s Sp. Atk. Drastically raises the user’s Defense.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Nature-Loving Petal Dance',
                    type: ' Grass',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is paralyzed.'
                },
                passives: [{name: 'Piercing Gaze', description: 'Moves never miss.'}]
            },
            {
                name: 'Voltorb',
                type1: 'Electric',
                type2: '',
                weakness: 'Ground',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0100_00_biriridama_256.ktx.png',
                stats: {
                    base: {
                        attack: 14,
                        defense: 11,
                        hp: 90,
                        speed: 28,
                        sp_atk: 10,
                        sp_def: 11
                    },
                    max: {
                        attack: 116,
                        bulk: 364,
                        defense: 113,
                        hp: 382,
                        speed: 334,
                        sp_atk: 156,
                        sp_def: 113
                    }
                },
                moves: [
                    {
                        name: 'Thunderbolt',
                        type: 'Electric',
                        category: 'Special',
                        power: {min_power: 47, max_power: 56},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a very small chance of leaving the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Eerie Impulse',
                        type: 'Electric',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Sharply lowers the target’s Sp. Atk.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'A Surge of Power!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Atk and evasiveness.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Electric Sync Beam',
                    type: ' Electric',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Last Word',
                        description: 'The Pokémon uses Explosion immediately before fainting.'
                    }
                ]
            },
            {
                name: 'Weepinbell',
                type1: 'Grass',
                type2: '',
                weakness: 'Ice',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0070_00_utsudon_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 10,
                        hp: 92,
                        speed: 15,
                        sp_atk: 10,
                        sp_def: 11
                    },
                    max: {
                        attack: 173,
                        bulk: 357,
                        defense: 102,
                        hp: 395,
                        speed: 192,
                        sp_atk: 127,
                        sp_def: 112
                    }
                },
                moves: [
                    {
                        name: 'Bullet Seed',
                        type: 'Grass',
                        category: 'Physical',
                        power: {min_power: 15, max_power: 18},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Attacks the target two to five times in a row.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Speed',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Speed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Sleep Powder',
                        type: 'Grass',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 75,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Puts the target to sleep.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Not Too Late to Bloom!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack. Makes the user gradually heal itself.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Grass Sync Impact',
                    type: ' Grass',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Defense Crush 2',
                        description: 'Occasionally lowers the target’s Defense when an attack against it is successful.'
                    }
                ]
            },
            {
                name: 'Whirlipede',
                type1: 'Poison',
                type2: '',
                weakness: 'Psychic',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0544_00_wheega_256.ktx.png',
                stats: {
                    base: {
                        attack: 19,
                        defense: 10,
                        hp: 90,
                        speed: 17,
                        sp_atk: 8,
                        sp_def: 8
                    },
                    max: {
                        attack: 255,
                        bulk: 383,
                        defense: 134,
                        hp: 400,
                        speed: 297,
                        sp_atk: 100,
                        sp_def: 104
                    }
                },
                moves: [
                    {
                        name: 'Poison Tail',
                        type: 'Poison',
                        category: 'Physical',
                        power: {min_power: 38, max_power: 45},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Critical hits land more easily. Has a very small chance of leaving the target poisoned.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Poison Jab',
                        type: 'Poison',
                        category: 'Physical',
                        power: {min_power: 92, max_power: 110},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'Has a moderate chance of leaving the target poisoned.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Time to Rock!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Sp. Def. Raises the user’s critical-hit rate.',
                        unlock_requirements: [
                            'Great Buff Blend x10',
                            'Ultra Buff Blend x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Poison Sync Impact',
                    type: ' Poison',
                    category: 'Physical',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Hit and Run 2',
                        description: 'Occasionally raises the Pokémon’s Speed after it uses a move.'
                    }
                ]
            },
            {
                name: 'Xatu',
                type1: 'Flying',
                type2: 'Psychic',
                weakness: 'Electric',
                role: 'Tech',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0178_01_natio_256.ktx.png',
                stats: {
                    base: {
                        attack: 11,
                        defense: 11,
                        hp: 95,
                        speed: 20,
                        sp_atk: 13,
                        sp_def: 11
                    },
                    max: {
                        attack: 151,
                        bulk: 483,
                        defense: 168,
                        hp: 405,
                        speed: 304,
                        sp_atk: 201,
                        sp_def: 168
                    }
                },
                moves: [
                    {
                        name: 'Stored Power',
                        type: 'Psychic',
                        category: 'Special',
                        power: {min_power: 13, max_power: 15},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'The more the user’s stats are raised, the greater the power of this move.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Confuse Ray',
                        type: 'Ghost',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Leaves the target confused.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Our Power Is Limitless!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'If any of the target’s stats have been raised, the user’s same stats are raised by double that amount.',
                        unlock_requirements: ['Training Machine x5']
                    },
                    {
                        name: 'Air Slash',
                        type: 'Flying',
                        category: 'Special',
                        power: {min_power: 45, max_power: 54},
                        accuracy: 95,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of making the target flinch.',
                        unlock_requirements: [
                            'Great Tech Tonic x10',
                            'Ultra Tech Tonic x3',
                            'Training Machine x30',
                            'Super Training Machine x5'
                        ]
                    }
                ],
                syncMove: {
                    name: 'Mystery Masquerade Psychic',
                    type: ' Psychic',
                    category: 'Special',
                    power: {min_power: 200, max_power: 240},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'Its power increases if the target is confused.'
                },
                passives: [{name: 'Impervious', description: 'Stats cannot be lowered.'}]
            },
            {
                name: 'Zebstrika',
                type1: 'Electric',
                type2: '',
                weakness: 'Ground',
                role: 'Strike (Physical)',
                image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-09/pm0523_00_zebraika_256.ktx_.png',
                stats: {
                    base: {
                        attack: 23,
                        defense: 10,
                        hp: 96,
                        speed: 20,
                        sp_atk: 16,
                        sp_def: 10
                    },
                    max: {
                        attack: 270,
                        bulk: 436,
                        defense: 91,
                        hp: 700,
                        speed: 289,
                        sp_atk: 149,
                        sp_def: 91
                    }
                },
                moves: [
                    {
                        name: 'Spark',
                        type: 'Electric',
                        category: 'Physical',
                        power: {min_power: 42, max_power: 50},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 2,
                        uses: null,
                        effect: 'Has a moderate chance of leaving the target paralyzed.',
                        unlock_requirements: []
                    },
                    {
                        name: 'X Attack',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: 0, max_power: 0},
                        accuracy: 0,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Sharply raises the user’s Attack.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Wild Charge',
                        type: 'Electric',
                        category: 'Physical',
                        power: {min_power: 125, max_power: 150},
                        accuracy: 100,
                        target: 'An opponent',
                        cost: 3,
                        uses: null,
                        effect: 'The user also takes 20% of the damage it dealt to the target.',
                        unlock_requirements: []
                    },
                    {
                        name: 'Electrifying!',
                        type: '',
                        category: 'Status Effect',
                        power: {min_power: null, max_power: null},
                        accuracy: null,
                        target: 'Self',
                        cost: '',
                        uses: 2,
                        effect: 'Restores a bit of the user’s HP. Ensures that the user’s next attack will be a critical hit.',
                        unlock_requirements: []
                    }
                ],
                syncMove: {
                    name: 'Shining Spotlight Wild Bolt',
                    type: ' Electric',
                    category: 'Physical',
                    power: {min_power: 250, max_power: 300},
                    target: 'An opponent',
                    effect_tag: '-',
                    description: 'No additional effect.'
                },
                passives: [
                    {
                        name: 'Hit and Run 2',
                        description: 'Occasionally raises the Pokémon’s Speed after it uses a move.'
                    },
                    {
                        name: 'Lithe',
                        description: 'Prevents the Pokémon from getting paralyzed.'
                    }
                ]
            }
        ]

};
