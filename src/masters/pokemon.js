module.exports = {
    pokemon: [
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
                    attack: 218,
                    bulk: 433,
                    defense: 123,
                    hp: 510,
                    speed: 230,
                    sp_atk: 153,
                    sp_def: 125
                }
            },
            moves: [
                {
                    name: 'Ice Punch',
                    type: 'Ice',
                    category: 'Physical',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Entire field',
                    cost: 2,
                    uses: 2,
                    effect: 'Causes a hailstorm.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'It’s All about Focus!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 249,
                    bulk: 320,
                    defense: 64,
                    hp: 529,
                    speed: 258,
                    sp_atk: 249,
                    sp_def: 64
                }
            },
            moves: [
                {
                    name: 'Gyro Ball',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 44, max_power: 52 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: 2,
                    uses: 2,
                    effect: 'The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies moves that target the user while it is in this defensive posture. Sharply lowers the Attack of opponents that use physical moves to attack the user while it is in this defensive posture.',
                    unlock_requirements: []
                },
                {
                    name: 'En Garde!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Drastically raises the user’s Attack and raises its critical-hit rate when it is in Blade Forme. Sharply raises the user’s Defense and Sp. Def when it is in Shield Forme.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Iron Head',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 92, max_power: 110 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the opponent’s Attack is lowered, the greater the power of this move.'
            },
            passives: [
                {
                    name: 'Vigilance',
                    description: 'The Pokémon is protected against critical hits.'
                },
                {
                    name: 'Stance Change',
                    description: 'Changes to Blade Forme when the Pokémon attacks. Changes to Shield Forme when the Pokémon uses King’s Shield or switches out.'
                }
            ]
        }
        ,
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
                    attack: 83,
                    bulk: 622,
                    defense: 215,
                    hp: 529,
                    speed: 258,
                    sp_atk: 83,
                    sp_def: 215
                }
            },
            moves: [
                {
                    name: 'Gyro Ball',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 44, max_power: 52 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: 2,
                    uses: 2,
                    effect: 'The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies moves that target the user while it is in this defensive posture. Sharply lowers the Attack of opponents that use physical moves to attack the user while it is in this defensive posture.',
                    unlock_requirements: []
                },
                {
                    name: 'En Garde!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Drastically raises the user’s Attack and raises its critical-hit rate when it is in Blade Forme. Sharply raises the user’s Defense and Sp. Def when it is in Shield Forme.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Iron Head',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 92, max_power: 110 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the opponent’s Attack is lowered, the greater the power of this move.'
            },
            passives: [
                {
                    name: 'Vigilance',
                    description: 'The Pokémon is protected against critical hits.'
                },
                {
                    name: 'Stance Change',
                    description: 'Changes to Blade Forme when the Pokémon attacks. Changes to Shield Forme when the Pokémon uses King’s Shield or switches out.'
                }
            ]
        }
        ,
        {
            name: 'Alakazam',
            type1: 'Psychic',
            type2: '',
            weakness: 'Dark',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0065_00_foodin_256.ktx_.png',
            stats: {
                base: {
                    attack: 4,
                    defense: 7,
                    hp: 91,
                    speed: 17,
                    sp_atk: 16,
                    sp_def: 18
                },
                max: {
                    attack: 63,
                    bulk: 584,
                    defense: 160,
                    hp: 492,
                    speed: 326,
                    sp_atk: 224,
                    sp_def: 246
                }
            },
            moves: [
                {
                    name: 'Psybeam',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 48, max_power: 57 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target confused.',
                    unlock_requirements: []
                },
                {
                    name: 'Dire Hit All',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the critical-hit rate of all allied sync pairs.',
                    unlock_requirements: []
                },
                {
                    name: 'Sixth Sense!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An ally',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of an ally’s HP. Drastically raises an ally’s Sp. Atk. Raises an ally’s accuracy.',
                    unlock_requirements: []
                },
                {
                    name: 'Reflect',
                    type: 'Psychic',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Allied side',
                    cost: 3,
                    uses: 2,
                    effect: 'Reduces physical damage done to the allied field of play.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'ESP Prodigy Psywave',
                type: ' Psychic',
                category: 'Special',
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Alakazam until the end of battle.'
            },
            passives: [
                {
                    name: 'Unflappable',
                    description: 'Prevents the Pokémon from flinching.'
                },
                {
                    name: 'Speedy Entry 1',
                    description: 'Raises the user’s Speed when the Pokémon enters a battle.'
                },
                { name: 'Dauntless', description: 'Sp. Atk cannot be lowered.' }
            ]
        }
        ,
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
                    attack: 176,
                    bulk: 508,
                    defense: 144,
                    hp: 565,
                    speed: 262,
                    sp_atk: 101,
                    sp_def: 159
                }
            },
            moves: [
                {
                    name: 'Rock Tomb',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 39, max_power: 46 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 105, max_power: 126 },
                    accuracy: 90,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of making the target flinch.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Over the Wall!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 169,
                    bulk: 584,
                    defense: 191,
                    hp: 607,
                    speed: 213,
                    sp_atk: 168,
                    sp_def: 173
                }
            },
            moves: [
                {
                    name: 'Flame Wheel',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 42, max_power: 50 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Removes the frozen condition from the user. Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'X Speed All',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 1,
                    effect: 'Blocks status conditions on the allied field of play. Removes all status conditions from all allied sync pairs.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Flamethrower',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the user’s Speed has been raised, the greater the power of this move.'
            },
            passives: [ { name: 'Haste', description: 'Speed cannot be lowered.' } ]
        }
        ,
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
                    attack: 206,
                    bulk: 477,
                    defense: 159,
                    hp: 451,
                    speed: 227,
                    sp_atk: 120,
                    sp_def: 154
                }
            },
            moves: [
                {
                    name: 'Cross Poison',
                    type: 'Poison',
                    category: 'Physical',
                    power: { min_power: 38, max_power: 45 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 2,
                    uses: null,
                    effect: 'Lowers the target’s Attack, Sp. Atk, and Speed if the target is poisoned or badly poisoned. Fails if the target is not poisoned or badly poisoned.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Move Like the Wind!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Aurorus',
            type1: 'Rock',
            type2: '',
            weakness: 'Steel',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0740_00_aurora2_256.ktx_.png',
            stats: {
                base: {
                    attack: 15,
                    defense: 16,
                    hp: 120,
                    speed: 24,
                    sp_atk: 14,
                    sp_def: 20
                },
                max: {
                    attack: 184,
                    bulk: 531,
                    defense: 148,
                    hp: 582,
                    speed: 267,
                    sp_atk: 104,
                    sp_def: 172
                }
            },
            moves: [
                {
                    name: 'Rock Tomb',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 39, max_power: 46 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 105, max_power: 126 },
                    accuracy: 90,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of making the target flinch.',
                    unlock_requirements: []
                },
                {
                    name: 'Over the Wall!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the user’s move gauge by two. Raises the user’s accuracy. Makes the user gradually heal itself.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Crazy Cool Rock Tomb',
                type: ' Rock',
                category: 'Physical',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is flinching.'
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
        }
        ,
        {
            name: 'Avalugg',
            type1: 'Ice',
            type2: '',
            weakness: 'Fire',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0751_00_ice3_256.ktx.png',
            stats: {
                base: { attack: 17, defense: 10, hp: 90, speed: 9, sp_atk: 3, sp_def: 5 },
                max: {
                    attack: 306,
                    bulk: 395,
                    defense: 118,
                    hp: 493,
                    speed: 100,
                    sp_atk: 40,
                    sp_def: 98
                }
            },
            moves: [
                {
                    name: 'Ice Fang',
                    type: 'Ice',
                    category: 'Physical',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 75, max_power: 90 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'The user gets ready to counterattack. Using this move again will cause the user to attack the target. No other actions can be taken while ready to counterattack. If the user is attacked with a move while ready to counterattack, the user then attacks the target with double that power.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Outstanding!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 127,
                    bulk: 556,
                    defense: 119,
                    hp: 771,
                    speed: 171,
                    sp_atk: 211,
                    sp_def: 157
                }
            },
            moves: [
                {
                    name: 'Energy Ball',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 49, max_power: 58 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the Attack, Sp. Atk, and Speed of all allied sync pairs. Sharply raises them if the weather is sunny.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Light Screen',
                    type: 'Psychic',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Beedrill',
            type1: 'Bug',
            type2: '',
            weakness: 'Rock',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0015_00_spear_256.ktx.png',
            stats: {
                base: { attack: 19, defense: 8, hp: 67, speed: 19, sp_atk: 8, sp_def: 8 },
                max: {
                    attack: 324,
                    bulk: 340,
                    defense: 82,
                    hp: 434,
                    speed: 305,
                    sp_atk: 117,
                    sp_def: 101
                }
            },
            moves: [
                {
                    name: 'Fell Stinger',
                    type: 'Bug',
                    category: 'Physical',
                    power: { min_power: 44, max_power: 52 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 20, max_power: 24 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Attacks twice in a row. Has a small chance of leaving the target poisoned.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Beehold My Research!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Beedrill until the end of battle.'
            },
            passives: [
                {
                    name: 'Critical Strike 2',
                    description: 'Powers up attacks if they become critical hits.'
                }
            ]
        }
        ,
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
                    attack: 79,
                    bulk: 500,
                    defense: 44,
                    hp: 715,
                    speed: 132,
                    sp_atk: 171,
                    sp_def: 196
                }
            },
            moves: [
                {
                    name: 'Hyper Voice',
                    type: 'Normal',
                    category: 'Special',
                    power: { min_power: 63, max_power: 75 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An ally',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of an ally’s HP. Sharply raises an ally’s Defense and Sp. Def.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Flamethrower',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
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
                power: { min_power: 300, max_power: 360 },
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
        }
        ,
        {
            name: 'Bronzong',
            type1: 'Steel',
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
                    attack: 233,
                    bulk: 586,
                    defense: 216,
                    hp: 430,
                    speed: 176,
                    sp_atk: 231,
                    sp_def: 214
                }
            },
            moves: [
                {
                    name: 'Gyro Ball',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 44, max_power: 52 },
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
                    power: { min_power: 51, max_power: 61 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the user’s Defense and Sp. Def. Makes the user resistant to the type of the last move it was hit by.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Telekinesis',
                    type: 'Psychic',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 213,
                    bulk: 433,
                    defense: 161,
                    hp: 427,
                    speed: 131,
                    sp_atk: 95,
                    sp_def: 117
                }
            },
            moves: [
                {
                    name: 'Aqua Tail',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 56, max_power: 67 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 1,
                    effect: 'Makes opponents target the user for a short time. Makes the user able to endure the next hit they take.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Rock Tomb',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 39, max_power: 46 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the user’s Defense has been raised, the greater the power of this move.'
            },
            passives: [ { name: 'Unbending', description: 'Defense cannot be lowered.' } ]
        }
        ,
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
                    attack: 111,
                    bulk: 407,
                    defense: 102,
                    hp: 448,
                    speed: 216,
                    sp_atk: 346,
                    sp_def: 143
                }
            },
            moves: [
                {
                    name: 'Hex',
                    type: 'Ghost',
                    category: 'Special',
                    power: { min_power: 38, max_power: 45 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 99, max_power: 118 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'A Tale of Triumph!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Unhindered',
                    description: 'When the Pokémon attacks, ignores damage-reducing effects on the opponent’s field of play.'
                },
                {
                    name: 'Power Reserves 2',
                    description: 'Powers up moves in a pinch.'
                }
            ]
        }
        ,
        {
            name: 'Charizard',
            type1: 'Fire',
            type2: '',
            weakness: 'Rock',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0006_00_lizardon_256.ktx_.png',
            stats: {
                base: {
                    attack: 21,
                    defense: 10,
                    hp: 90,
                    speed: 15,
                    sp_atk: 21,
                    sp_def: 10
                },
                max: {
                    attack: 380,
                    bulk: 498,
                    defense: 129,
                    hp: 660,
                    speed: 265,
                    sp_atk: 380,
                    sp_def: 129
                }
            },
            moves: [
                {
                    name: 'Heat Wave',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 109, max_power: 130 },
                    accuracy: 90,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Dire Hit +',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s critical-hit rate.',
                    unlock_requirements: []
                },
                {
                    name: 'Blast Burn',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 178, max_power: 213 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 4,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                },
                {
                    name: 'My Destiny!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Drastically raises the user’s Sp. Atk and Speed. Lowers the user’s Defense and Sp. Def. If Charizard has Mega Evolved, drastically raises the user’s Attack.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Living Legend Blast Burn',
                type: ' Fire',
                category: 'Special',
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Charizard X until the end of battle. Raises the user’s critical-hit rate.'
            },
            passives: [
                {
                    name: 'Propulsion 1',
                    description: 'Has a small chance of reducing the user’s sync move countdown by one when the user’s move is successful.'
                },
                { name: 'Piercing Gaze', description: 'Moves never miss.' },
                {
                    name: 'Move Gauge Refresh 4',
                    description: 'Has a good chance of increasing the user’s move gauge by one when a move is successful.'
                }
            ]
        }
        ,
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
                    attack: 125,
                    bulk: 522,
                    defense: 116,
                    hp: 707,
                    speed: 168,
                    sp_atk: 207,
                    sp_def: 149
                }
            },
            moves: [
                {
                    name: 'Energy Ball',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 49, max_power: 58 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the Attack, Sp. Atk, and Speed of all allied sync pairs. Sharply raises them if the weather is sunny.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Light Screen',
                    type: 'Psychic',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 137,
                    bulk: 493,
                    defense: 154,
                    hp: 509,
                    speed: 238,
                    sp_atk: 333,
                    sp_def: 154
                }
            },
            moves: [
                {
                    name: 'Water Pulse',
                    type: 'Water',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 45, max_power: 54 },
                    accuracy: 0,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Never misses.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'The Definition of Art!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 296,
                    bulk: 389,
                    defense: 125,
                    hp: 514,
                    speed: 124,
                    sp_atk: 119,
                    sp_def: 78
                }
            },
            moves: [
                {
                    name: 'Rock Smash',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 91, max_power: 109 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Restores the user’s HP based on the amount of damage dealt to the target.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'It’s All Down to This!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Cranidos',
            type1: 'Rock',
            type2: '',
            weakness: 'Water',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0408_00_zugaidos_256.ktx.png',
            stats: {
                base: { attack: 21, defense: 9, hp: 75, speed: 11, sp_atk: 4, sp_def: 8 },
                max: {
                    attack: 307,
                    bulk: 475,
                    defense: 96,
                    hp: 783,
                    speed: 189,
                    sp_atk: 96,
                    sp_def: 95
                }
            },
            moves: [
                {
                    name: 'Smack Down',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 20, max_power: 24 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 188, max_power: 225 },
                    accuracy: 80,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'The user also takes 33% of the damage it dealt to the target.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'You’re Gonna Need a Helmet!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Headstrong', description: 'Attack cannot be lowered.' } ]
        }
        ,
        {
            name: 'Crobat',
            type1: 'Poison',
            type2: '',
            weakness: 'Electric',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0169_00_crobat_256.ktx.png',
            stats: {
                base: { attack: 7, defense: 7, hp: 70, speed: 12, sp_atk: 7, sp_def: 8 },
                max: {
                    attack: 275,
                    bulk: 485,
                    defense: 141,
                    hp: 461,
                    speed: 374,
                    sp_atk: 275,
                    sp_def: 177
                }
            },
            moves: [
                {
                    name: 'Poison Fang',
                    type: 'Poison',
                    category: 'Physical',
                    power: { min_power: 34, max_power: 40 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 42, max_power: 50 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Its power is doubled if the target is poisoned or badly poisoned.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Move Like a Shadow!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is poisoned or badly poisoned.'
            },
            passives: [ { name: 'Haste', description: 'Speed cannot be lowered.' } ]
        }
        ,
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
                    attack: 248,
                    bulk: 452,
                    defense: 123,
                    hp: 601,
                    speed: 287,
                    sp_atk: 107,
                    sp_def: 111
                }
            },
            moves: [
                {
                    name: 'Waterfall',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 167, max_power: 200 },
                    accuracy: 75,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Pick Up the Pace!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 194,
                    bulk: 424,
                    defense: 110,
                    hp: 486,
                    speed: 340,
                    sp_atk: 194,
                    sp_def: 138
                }
            },
            moves: [
                {
                    name: 'Ice Beam',
                    type: 'Ice',
                    category: 'Special',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 47, max_power: 56 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Def. Makes the user able to endure the next hit it takes.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Haze',
                    type: 'Ice',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Cyndaquil',
            type1: 'Fire',
            type2: '',
            weakness: 'Rock',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-12/pm0155_00_hinoarashi_256.ktx_.png',
            stats: {
                base: {
                    attack: 13,
                    defense: 8,
                    hp: 88,
                    speed: 16,
                    sp_atk: 14,
                    sp_def: 9
                },
                max: {
                    attack: 123,
                    bulk: 448,
                    defense: 127,
                    hp: 528,
                    speed: 325,
                    sp_atk: 242,
                    sp_def: 129
                }
            },
            moves: [
                {
                    name: 'Flamethrower',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'X Sp. Atk',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Atk.',
                    unlock_requirements: []
                },
                {
                    name: 'Eruption',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 135, max_power: 162 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'The lower the user’s HP is, the lower the power of this move becomes.',
                    unlock_requirements: []
                },
                {
                    name: 'Stoke the Fire!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of the user’s HP. Raises the user’s Speed and evasiveness.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Fire Sync Beam',
                type: ' Fire',
                category: 'Special',
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Delibird',
            type1: 'Flying',
            type2: '',
            weakness: 'Steel',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-11/pm0225_00_delibird_256.ktx_.png',
            stats: {
                base: {
                    attack: 9,
                    defense: 13,
                    hp: 80,
                    speed: 13,
                    sp_atk: 7,
                    sp_def: 13
                },
                max: {
                    attack: 166,
                    bulk: 593,
                    defense: 208,
                    hp: 558,
                    speed: 221,
                    sp_atk: 105,
                    sp_def: 183
                }
            },
            moves: [
                {
                    name: 'Aerial Ace',
                    type: 'Flying',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
                    accuracy: 0,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Never misses.',
                    unlock_requirements: []
                },
                {
                    name: 'X Attack All',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the Attack of all allied sync pairs.',
                    unlock_requirements: []
                },
                {
                    name: 'All the Presents!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Allied side',
                    cost: '',
                    uses: 2,
                    effect: 'Makes move gauges accelerate on the allied field of play. Raises the Speed of all allied sync pairs. Sharply raises the Attack, Defense, Sp. Atk, Sp. Def, evasiveness, or accuracy of all allied sync pairs at random.',
                    unlock_requirements: []
                },
                {
                    name: 'Drill Peck',
                    type: 'Flying',
                    category: 'Physical',
                    power: { min_power: 100, max_power: 120 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Special Delivery Drill Peck',
                type: ' Flying',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Wide Awake',
                    description: 'Prevents the Pokémon from falling asleep.'
                },
                {
                    name: 'Snow Shelter',
                    description: 'Protects the Pokémon from damage from a hailstorm.'
                },
                {
                    name: 'Healing Hail 1',
                    description: 'Restores the Pokémon’s HP whenever it takes an action during a hailstorm.'
                }
            ]
        }
        ,
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
                    attack: 237,
                    bulk: 428,
                    defense: 71,
                    hp: 592,
                    speed: 156,
                    sp_atk: 250,
                    sp_def: 142
                }
            },
            moves: [
                {
                    name: 'Ice Beam',
                    type: 'Ice',
                    category: 'Special',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 92, max_power: 110 },
                    accuracy: 95,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Lowers the target’s Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'I’ll Teach You a Lesson!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                name: 'Winter’s Lesson Aurora Beam',
                type: ' Ice',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Dewott',
            type1: 'Water',
            type2: '',
            weakness: 'Electric',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0502_00_futachimaru_256.ktx__0.png',
            stats: {
                base: {
                    attack: 17,
                    defense: 17,
                    hp: 135,
                    speed: 22,
                    sp_atk: 13,
                    sp_def: 17
                },
                max: {
                    attack: 225,
                    bulk: 619,
                    defense: 207,
                    hp: 566,
                    speed: 250,
                    sp_atk: 149,
                    sp_def: 207
                }
            },
            moves: [
                {
                    name: 'Aqua Tail',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 56, max_power: 67 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'The lower the user’s HP is, the more this move raises the Attack of all allied sync pairs.',
                    unlock_requirements: []
                },
                {
                    name: 'Waterfall',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a small chance of making the target flinch.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Water Sync Impact',
                type: ' Water',
                category: 'Physical',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Impervious', description: 'Stats cannot be lowered.' } ]
        }
        ,
        {
            name: 'Dragonite',
            type1: 'Dragon',
            type2: '',
            weakness: 'Ice',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-12/pm0149_00_kairyu_256.ktx_.png',
            stats: {
                base: {
                    attack: 23,
                    defense: 11,
                    hp: 98,
                    speed: 12,
                    sp_atk: 22,
                    sp_def: 12
                },
                max: {
                    attack: 403,
                    bulk: 506,
                    defense: 159,
                    hp: 516,
                    speed: 241,
                    sp_atk: 402,
                    sp_def: 160
                }
            },
            moves: [
                {
                    name: 'Dragon Claw',
                    type: 'Dragon',
                    category: 'Physical',
                    power: { min_power: 50, max_power: 60 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                },
                {
                    name: 'Potion',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An ally',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of an ally’s HP.',
                    unlock_requirements: []
                },
                {
                    name: 'Hyper Beam',
                    type: 'Normal',
                    category: 'Special',
                    power: { min_power: 223, max_power: 267 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 4,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                },
                {
                    name: 'Now or Never!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the user’s move gauge by six. The user takes damage equal to half of its remaining HP.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Unrivaled Outrage',
                type: ' Dragon',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Dragon Shift',
                    description: 'Normal-type moves become Dragon-type moves.'
                },
                {
                    name: 'Lithe',
                    description: 'Prevents the Pokémon from getting paralyzed.'
                },
                {
                    name: 'Unflappable',
                    description: 'Prevents the Pokémon from flinching.'
                }
            ]
        }
        ,
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
                    attack: 205,
                    bulk: 649,
                    defense: 221,
                    hp: 525,
                    speed: 168,
                    sp_atk: 146,
                    sp_def: 238
                }
            },
            moves: [
                {
                    name: 'Shadow Punch',
                    type: 'Ghost',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'The lower the user’s HP is, the more this move increases the move gauges and raises the Attack of all allied sync pairs.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Double-Edge',
                    type: 'Normal',
                    category: 'Physical',
                    power: { min_power: 167, max_power: 200 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Dusknoir',
            type1: 'Ghost',
            type2: '',
            weakness: 'Dark',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0477_00_yonoir_256.ktx_.png',
            stats: {
                base: {
                    attack: 18,
                    defense: 17,
                    hp: 122,
                    speed: 14,
                    sp_atk: 13,
                    sp_def: 19
                },
                max: {
                    attack: 209,
                    bulk: 681,
                    defense: 240,
                    hp: 543,
                    speed: 171,
                    sp_atk: 149,
                    sp_def: 244
                }
            },
            moves: [
                {
                    name: 'Shadow Punch',
                    type: 'Ghost',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'The lower the user’s HP is, the more this move increases the move gauges and raises the Attack of all allied sync pairs.',
                    unlock_requirements: []
                },
                {
                    name: 'Double-Edge',
                    type: 'Normal',
                    category: 'Physical',
                    power: { min_power: 167, max_power: 200 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'The user also takes 25% of the damage it dealt to the target.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Lonely Flower Shadow Punch',
                type: ' Ghost',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Eevee',
            type1: 'Normal',
            type2: '',
            weakness: 'Fighting',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-12/pm0133_00_eievui_256.ktx_.png',
            stats: {
                base: {
                    attack: 12,
                    defense: 18,
                    hp: 121,
                    speed: 13,
                    sp_atk: 6,
                    sp_def: 19
                },
                max: {
                    attack: 182,
                    bulk: 648,
                    defense: 208,
                    hp: 636,
                    speed: 221,
                    sp_atk: 142,
                    sp_def: 209
                }
            },
            moves: [
                {
                    name: 'Tackle',
                    type: 'Normal',
                    category: 'Physical',
                    power: { min_power: 25, max_power: 30 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An ally',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of an ally’s HP.',
                    unlock_requirements: []
                },
                {
                    name: 'Iron Tail',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 132, max_power: 158 },
                    accuracy: 75,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of lowering the target’s Defense.',
                    unlock_requirements: []
                },
                {
                    name: 'Let’s Go!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the move gauges of all allied sync pairs by two. Sharply raises the user’s Attack.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Endless Possibilities Extreme Evoboost',
                type: ' Normal',
                category: 'Status Effect',
                power: { min_power: 0, max_power: 0 },
                target: 'All allies',
                effect_tag: '-',
                description: 'Increases the user’s move gauge by the sync move’s current level. Sharply raises the Attack, Defense, Sp. Atk, Sp. Def, Speed, and accuracy of all allied sync pairs.'
            },
            passives: [
                {
                    name: 'Benefactor',
                    description: 'Transfers this sync pair’s stat increases to the sync pair that will switch in when this sync pair switches out.'
                },
                { name: 'Impervious', description: 'Stats cannot be lowered.' }
            ]
        }
        ,
        {
            name: 'Electrode',
            type1: 'Electric',
            type2: '',
            weakness: 'Ground',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0101_00_marumine_256.ktx_.png',
            stats: {
                base: {
                    attack: 17,
                    defense: 14,
                    hp: 105,
                    speed: 36,
                    sp_atk: 13,
                    sp_def: 14
                },
                max: {
                    attack: 141,
                    bulk: 443,
                    defense: 138,
                    hp: 461,
                    speed: 410,
                    sp_atk: 192,
                    sp_def: 138
                }
            },
            moves: [
                {
                    name: 'Thunderbolt',
                    type: 'Electric',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Sharply lowers the target’s Sp. Atk.',
                    unlock_requirements: []
                },
                {
                    name: 'A Surge of Power!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Atk and evasiveness.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Surging Charge Beam',
                type: ' Electric',
                category: 'Special',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the target’s Sp. Atk has been lowered, the greater the power of this move.'
            },
            passives: [
                {
                    name: 'Last Word',
                    description: 'The Pokémon uses Explosion immediately before fainting.'
                }
            ]
        }
        ,
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
                    attack: 357,
                    bulk: 495,
                    defense: 93,
                    hp: 846,
                    speed: 151,
                    sp_atk: 143,
                    sp_def: 95
                }
            },
            moves: [
                {
                    name: 'Flame Charge',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 30, max_power: 36 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 123, max_power: 147 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Removes the frozen condition from the user. The user also takes 25% of the damage it dealt to the target. Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Try and Stop Us!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 200,
                    bulk: 460,
                    defense: 139,
                    hp: 501,
                    speed: 224,
                    sp_atk: 340,
                    sp_def: 139
                }
            },
            moves: [
                {
                    name: 'Bubble',
                    type: 'Water',
                    category: 'Special',
                    power: { min_power: 19, max_power: 22 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 49, max_power: 58 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'No Hesitation!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 126,
                    bulk: 471,
                    defense: 127,
                    hp: 549,
                    speed: 392,
                    sp_atk: 229,
                    sp_def: 145
                }
            },
            moves: [
                {
                    name: 'Psybeam',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 48, max_power: 57 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                { name: 'Acuity', description: 'Accuracy cannot be lowered.' },
                {
                    name: 'Aggravation 1',
                    description: 'Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves.'
                }
            ]
        }
        ,
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
                    attack: 257,
                    bulk: 469,
                    defense: 128,
                    hp: 624,
                    speed: 297,
                    sp_atk: 116,
                    sp_def: 115
                }
            },
            moves: [
                {
                    name: 'Waterfall',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 167, max_power: 200 },
                    accuracy: 75,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Pick Up the Pace!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 216,
                    bulk: 448,
                    defense: 138,
                    hp: 441,
                    speed: 380,
                    sp_atk: 216,
                    sp_def: 150
                }
            },
            moves: [
                {
                    name: 'Waterfall',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 47, max_power: 56 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a small chance of leaving the target confused.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'CRASH!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Garchomp',
            type1: 'Ground',
            type2: '',
            weakness: 'Ice',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-12/pm0445_01_gaburias_256.ktx_.png',
            stats: {
                base: {
                    attack: 22,
                    defense: 12,
                    hp: 108,
                    speed: 21,
                    sp_atk: 13,
                    sp_def: 10
                },
                max: {
                    attack: 331,
                    bulk: 483,
                    defense: 144,
                    hp: 547,
                    speed: 325,
                    sp_atk: 128,
                    sp_def: 141
                }
            },
            moves: [
                {
                    name: 'Stomping Tantrum',
                    type: 'Ground',
                    category: 'Physical',
                    power: { min_power: 44, max_power: 52 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Its power is doubled if the user’s previous move failed.',
                    unlock_requirements: []
                },
                {
                    name: 'X Attack',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Attack.',
                    unlock_requirements: []
                },
                {
                    name: 'Earthquake',
                    type: 'Ground',
                    category: 'Physical',
                    power: { min_power: 100, max_power: 120 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                },
                {
                    name: 'This Match Is Too Fun!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the user’s Speed and critical-hit rate. These stats are sharply raised when the user is in a sandstorm.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Earthquake of Ancient Lore',
                type: ' Ground',
                category: 'Physical',
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Garchomp until the end of battle.'
            },
            passives: [
                {
                    name: 'Hit and Run 2',
                    description: 'Occasionally raises the Pokémon’s Speed after it uses a move.'
                },
                {
                    name: 'Surging Sand 5',
                    description: 'Powers up moves in a sandstorm.'
                }
            ]
        }
        ,
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
                    attack: 138,
                    bulk: 446,
                    defense: 117,
                    hp: 473,
                    speed: 358,
                    sp_atk: 330,
                    sp_def: 157
                }
            },
            moves: [
                {
                    name: 'Lick',
                    type: 'Ghost',
                    category: 'Physical',
                    power: { min_power: 12, max_power: 14 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Radically raises the user’s Speed. The user takes damage based on its maximum HP.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Shadow Ball',
                    type: 'Ghost',
                    category: 'Special',
                    power: { min_power: 99, max_power: 118 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Gengar until the end of the battle. This move’s power increases if the opponent is asleep.'
            },
            passives: [
                {
                    name: 'Wide Awake',
                    description: 'Prevents the Pokémon from falling asleep.'
                }
            ]
        }
        ,
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
                    attack: 201,
                    bulk: 528,
                    defense: 164,
                    hp: 552,
                    speed: 219,
                    sp_atk: 238,
                    sp_def: 164
                }
            },
            moves: [
                {
                    name: 'Powder Snow',
                    type: 'Ice',
                    category: 'Special',
                    power: { min_power: 16, max_power: 19 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 46, max_power: 55 },
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
                power: { min_power: 160, max_power: 192 },
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
                    description: 'Has a good chance of raising the user’s Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness at random when an attack is successful.'
                }
            ]
        }
        ,
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
                    attack: 212,
                    bulk: 415,
                    defense: 134,
                    hp: 493,
                    speed: 191,
                    sp_atk: 153,
                    sp_def: 102
                }
            },
            moves: [
                {
                    name: 'Dazzling Gleam',
                    type: 'Fairy',
                    category: 'Special',
                    power: { min_power: 50, max_power: 60 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An opponent',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the user’s stats by the same amount that the target’s stats have been raised.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Play Rough',
                    type: 'Fairy',
                    category: 'Physical',
                    power: { min_power: 111, max_power: 133 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the opponent’s Attack is lowered, the greater the power of this move.'
            },
            passives: [ { name: 'Impervious', description: 'Stats cannot be lowered.' } ]
        }
        ,
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
                    attack: 349,
                    bulk: 461,
                    defense: 141,
                    hp: 493,
                    speed: 407,
                    sp_atk: 361,
                    sp_def: 141
                }
            },
            moves: [
                {
                    name: 'Bullet Seed',
                    type: 'Grass',
                    category: 'Physical',
                    power: { min_power: 15, max_power: 18 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 136, max_power: 163 },
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
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                { name: 'Haste', description: 'Speed cannot be lowered.' },
                {
                    name: 'Lithe',
                    description: 'Prevents the Pokémon from getting paralyzed.'
                }
            ]
        }
        ,
        {
            name: 'Hariyama',
            type1: 'Fighting',
            type2: '',
            weakness: 'Flying',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0297_00_hariteyama_256.ktx_.png',
            stats: {
                base: {
                    attack: 17,
                    defense: 13,
                    hp: 142,
                    speed: 14,
                    sp_atk: 6,
                    sp_def: 13
                },
                max: {
                    attack: 211,
                    bulk: 463,
                    defense: 85,
                    hp: 767,
                    speed: 178,
                    sp_atk: 63,
                    sp_def: 100
                }
            },
            moves: [
                {
                    name: 'Rock Smash',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 35, max_power: 42 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Removes physical and special damage-reducing effects from the opponents’ field of play.',
                    unlock_requirements: []
                },
                {
                    name: 'A Rain of Fists!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Attack. Raises the user’s Defense and Sp. Def.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Arm Thrust of Mighty Waves',
                type: ' Fighting',
                category: 'Physical',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the opponent’s Defense is lowered, the greater the power of this move.'
            },
            passives: [
                {
                    name: 'Power Reserves 2',
                    description: 'Powers up moves in a pinch.'
                }
            ]
        }
        ,
        {
            name: 'Haxorus',
            type1: 'Dragon',
            type2: '',
            weakness: 'Ice',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0612_00_ononokus_256.ktx.png',
            stats: {
                base: { attack: 18, defense: 6, hp: 55, speed: 9, sp_atk: 3, sp_def: 5 },
                max: {
                    attack: 253,
                    bulk: 383,
                    defense: 132,
                    hp: 419,
                    speed: 160,
                    sp_atk: 63,
                    sp_def: 99
                }
            },
            moves: [
                {
                    name: 'Dragon Claw',
                    type: 'Dragon',
                    category: 'Physical',
                    power: { min_power: 50, max_power: 60 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 115, max_power: 138 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Leaves the user confused.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'You’re Going Down!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 304,
                    bulk: 501,
                    defense: 157,
                    hp: 516,
                    speed: 328,
                    sp_atk: 346,
                    sp_def: 157
                }
            },
            moves: [
                {
                    name: 'Bite',
                    type: 'Dark',
                    category: 'Physical',
                    power: { min_power: 42, max_power: 50 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 39, max_power: 46 },
                    accuracy: 95,
                    target: 'All opponents',
                    cost: 2,
                    uses: null,
                    effect: 'Lowers the target’s Sp. Atk.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Entertain Me!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Houndoom until the end of battle.'
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
        }
        ,
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
                    attack: 318,
                    bulk: 416,
                    defense: 119,
                    hp: 492,
                    speed: 241,
                    sp_atk: 318,
                    sp_def: 119
                }
            },
            moves: [
                {
                    name: 'Fire Punch',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 47, max_power: 56 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 116, max_power: 139 },
                    accuracy: 85,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target burned.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'We’re On Fire!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Kingdra',
            type1: 'Dragon',
            type2: '',
            weakness: 'Dragon',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0230_00_kingdra_256.ktx.png',
            stats: {
                base: { attack: 8, defense: 5, hp: 70, speed: 10, sp_atk: 11, sp_def: 6 },
                max: {
                    attack: 237,
                    bulk: 479,
                    defense: 140,
                    hp: 545,
                    speed: 235,
                    sp_atk: 300,
                    sp_def: 141
                }
            },
            moves: [
                {
                    name: 'Dragon Breath',
                    type: 'Dragon',
                    category: 'Special',
                    power: { min_power: 42, max_power: 50 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 136, max_power: 163 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Sharply lowers the user’s Sp. Atk.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Victory Is Mine!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 118,
                    bulk: 582,
                    defense: 160,
                    hp: 570,
                    speed: 240,
                    sp_atk: 217,
                    sp_def: 215
                }
            },
            moves: [
                {
                    name: 'Ice Beam',
                    type: 'Ice',
                    category: 'Special',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 126, max_power: 151 },
                    accuracy: 70,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Never misses during a hailstorm. Has a very small chance of leaving the target frozen.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Brace Yourself!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Liepard',
            type1: 'Dark',
            type2: '',
            weakness: 'Bug',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-11/pm0510_00_lepardas_256.ktx__1.png',
            stats: {
                base: {
                    attack: 15,
                    defense: 12,
                    hp: 88,
                    speed: 24,
                    sp_atk: 12,
                    sp_def: 12
                },
                max: {
                    attack: 222,
                    bulk: 535,
                    defense: 182,
                    hp: 472,
                    speed: 408,
                    sp_atk: 132,
                    sp_def: 182
                }
            },
            moves: [
                {
                    name: 'Night Slash',
                    type: 'Dark',
                    category: 'Physical',
                    power: { min_power: 40, max_power: 48 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Critical hits land more easily.',
                    unlock_requirements: []
                },
                {
                    name: 'Snatch',
                    type: 'Dark',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An opponent',
                    cost: 2,
                    uses: 2,
                    effect: 'Returns the target’s raised stats to normal and raises the user’s stats by that amount.',
                    unlock_requirements: []
                },
                {
                    name: 'All or Nothing!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s critical-hit rate. Drastically raises the user’s evasiveness. Drastically lowers the user’s Defense.',
                    unlock_requirements: []
                },
                {
                    name: 'Dark Pulse',
                    type: 'Dark',
                    category: 'Special',
                    power: { min_power: 95, max_power: 114 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a small chance of making the target flinch.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Card Shark Night Slash',
                type: ' Dark',
                category: 'Physical',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The power of this move is increased if none of the opponent’s stats are raised.'
            },
            passives: [
                {
                    name: 'Lithe',
                    description: 'Prevents the Pokémon from getting paralyzed.'
                }
            ]
        }
        ,
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
                    attack: 325,
                    bulk: 372,
                    defense: 119,
                    hp: 426,
                    speed: 164,
                    sp_atk: 305,
                    sp_def: 99
                }
            },
            moves: [
                {
                    name: 'Vacuum Wave',
                    type: 'Fighting',
                    category: 'Special',
                    power: { min_power: 20, max_power: 24 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 124, max_power: 148 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Lowers the user’s Defense and Sp. Def.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Skate On Through!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Lucario until the end of battle.'
            },
            passives: [
                {
                    name: 'Unflappable',
                    description: 'Prevents the Pokémon from flinching.'
                }
            ]
        }
        ,
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
                    attack: 113,
                    bulk: 492,
                    defense: 117,
                    hp: 609,
                    speed: 134,
                    sp_atk: 152,
                    sp_def: 154
                }
            },
            moves: [
                {
                    name: 'Confusion',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 18, max_power: 21 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the Attack and Sp. Atk of all allied sync pairs.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Psychic',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 99, max_power: 118 },
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
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Power Chain 3',
                    description: 'Powers up moves when unity bonus is in effect.'
                },
                { name: 'Dauntless', description: 'Sp. Atk cannot be lowered.' },
                { name: 'Stalwart', description: 'Sp. Def cannot be lowered.' }
            ]
        }
        ,
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
                    attack: 401,
                    bulk: 484,
                    defense: 146,
                    hp: 528,
                    speed: 244,
                    sp_atk: 80,
                    sp_def: 146
                }
            },
            moves: [
                {
                    name: 'Rock Throw',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 23, max_power: 27 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 100, max_power: 120 },
                    accuracy: 80,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Critical hits land more easily.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Hard as Diamonds!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Lycanroc',
            type1: 'Rock',
            type2: '',
            weakness: 'Water',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-01/pm0829_11_okami2noon_256.ktx_.png',
            stats: {
                base: {
                    attack: 15,
                    defense: 12,
                    hp: 94,
                    speed: 23,
                    sp_atk: 8,
                    sp_def: 10
                },
                max: {
                    attack: 244,
                    bulk: 517,
                    defense: 165,
                    hp: 533,
                    speed: 407,
                    sp_atk: 80,
                    sp_def: 159
                }
            },
            moves: [
                {
                    name: 'Rock Tomb',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 39, max_power: 46 },
                    accuracy: 95,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Lowers the target’s Speed.',
                    unlock_requirements: []
                },
                {
                    name: 'Accelerock',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 75, max_power: 90 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: '',
                    uses: 3,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                },
                {
                    name: 'Woo! Refreshing!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Refreshes the number of times the user can use its quick moves by three. Sharply raises the user’s Attack.',
                    unlock_requirements: []
                },
                {
                    name: 'Leer',
                    type: 'Normal',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 1,
                    uses: null,
                    effect: 'Lowers the target’s Defense.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Island Splintered Stormshards',
                type: ' Rock',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Removes physical and special damage-reducing effects from the opponents’ field of play.'
            },
            passives: [
                {
                    name: 'Surging Sand 5',
                    description: 'Powers up moves in a sandstorm.'
                },
                {
                    name: 'Unflappable',
                    description: 'Prevents the Pokémon from flinching.'
                }
            ]
        }
        ,
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
                    attack: 298,
                    bulk: 433,
                    defense: 123,
                    hp: 568,
                    speed: 178,
                    sp_atk: 174,
                    sp_def: 104
                }
            },
            moves: [
                {
                    name: 'Karate Chop',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 16, max_power: 19 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 100, max_power: 120 },
                    accuracy: 80,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Critical hits land more easily.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Hoo Hah!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Critical Strike 2',
                    description: 'Powers up attacks if they become critical hits.'
                }
            ]
        }
        ,
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
                    attack: 192,
                    bulk: 437,
                    defense: 83,
                    hp: 705,
                    speed: 175,
                    sp_atk: 62,
                    sp_def: 98
                }
            },
            moves: [
                {
                    name: 'Rock Smash',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 35, max_power: 42 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Removes physical and special damage-reducing effects from the opponents’ field of play.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'A Rain of Fists!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 123,
                    bulk: 576,
                    defense: 187,
                    hp: 516,
                    speed: 257,
                    sp_atk: 220,
                    sp_def: 202
                }
            },
            moves: [
                {
                    name: 'Infestation',
                    type: 'Bug',
                    category: 'Special',
                    power: { min_power: 20, max_power: 24 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 30, max_power: 36 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 2,
                    uses: null,
                    effect: 'Lowers the target’s Sp. Atk.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Just Fantastic!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Medicham',
            type1: 'Fighting',
            type2: '',
            weakness: 'Fairy',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0308_01_charem_256.ktx_.png',
            stats: {
                base: {
                    attack: 20,
                    defense: 17,
                    hp: 115,
                    speed: 15,
                    sp_atk: 10,
                    sp_def: 17
                },
                max: {
                    attack: 124,
                    bulk: 540,
                    defense: 177,
                    hp: 513,
                    speed: 230,
                    sp_atk: 115,
                    sp_def: 177
                }
            },
            moves: [
                {
                    name: 'Rock Smash',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the critical-hit rate of all allied sync pairs and makes their next attack a sure hit.',
                    unlock_requirements: []
                },
                {
                    name: 'Drain Punch',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 91, max_power: 109 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Restores the user’s HP based on the amount of damage dealt to the target.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Barefoot High Jump Kick',
                type: ' Fighting',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'On the Ropes 3',
                    description: 'Reduces damage when the Pokémon is in a pinch and is hit by a physical attack move.'
                }
            ]
        }
        ,
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
                    attack: 120,
                    bulk: 515,
                    defense: 173,
                    hp: 466,
                    speed: 224,
                    sp_atk: 113,
                    sp_def: 173
                }
            },
            moves: [
                {
                    name: 'Rock Smash',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the critical-hit rate of all allied sync pairs and makes their next attack a sure hit.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Drain Punch',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 91, max_power: 109 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'On the Ropes 3',
                    description: 'Reduces damage when the Pokémon is in a pinch and is hit by a physical attack move.'
                }
            ]
        }
        ,
        {
            name: 'Mega Alakazam',
            type1: 'Psychic',
            type2: '',
            weakness: 'Dark',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0065_51_megafoodin_256.ktx_.png',
            stats: {
                base: {
                    attack: 4,
                    defense: 7,
                    hp: 91,
                    speed: 20,
                    sp_atk: 19,
                    sp_def: 18
                },
                max: {
                    attack: 63,
                    bulk: 584,
                    defense: 160,
                    hp: 492,
                    speed: 391,
                    sp_atk: 268,
                    sp_def: 246
                }
            },
            moves: [
                {
                    name: 'Psychic',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 99, max_power: 118 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: []
                },
                {
                    name: 'Dire Hit All',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the critical-hit rate of all allied sync pairs.',
                    unlock_requirements: []
                },
                {
                    name: 'Sixth Sense!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An ally',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of an ally’s HP. Drastically raises an ally’s Sp. Atk. Raises an ally’s accuracy.',
                    unlock_requirements: []
                },
                {
                    name: 'Reflect',
                    type: 'Psychic',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Allied side',
                    cost: 3,
                    uses: 2,
                    effect: 'Reduces physical damage done to the allied field of play.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'ESP Prodigy Psywave',
                type: ' Psychic',
                category: 'Special',
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Alakazam until the end of battle.'
            },
            passives: [
                {
                    name: 'Unflappable',
                    description: 'Prevents the Pokémon from flinching.'
                },
                {
                    name: 'Speedy Entry 1',
                    description: 'Raises the user’s Speed when the Pokémon enters a battle.'
                },
                { name: 'Dauntless', description: 'Sp. Atk cannot be lowered.' }
            ]
        }
        ,
        {
            name: 'Mega Beedrill',
            type1: 'Bug',
            type2: '',
            weakness: 'Rock',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0015_51_megaspear_256.ktx.png',
            stats: {
                base: { attack: 22, defense: 8, hp: 67, speed: 22, sp_atk: 8, sp_def: 8 },
                max: {
                    attack: 388,
                    bulk: 340,
                    defense: 82,
                    hp: 434,
                    speed: 366,
                    sp_atk: 117,
                    sp_def: 101
                }
            },
            moves: [
                {
                    name: 'Fell Stinger',
                    type: 'Bug',
                    category: 'Physical',
                    power: { min_power: 44, max_power: 52 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 20, max_power: 24 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Attacks twice in a row. Has a small chance of leaving the target poisoned.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Beehold My Research!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Beedrill until the end of battle.'
            },
            passives: [
                {
                    name: 'Critical Strike 2',
                    description: 'Powers up attacks if they become critical hits.'
                },
                {
                    name: 'Amped Up 1',
                    description: 'Raises the Pokémon’s Speed when it lands a critical hit.'
                }
            ]
        }
        ,
        {
            name: 'Mega Charizard X',
            type1: 'Fire',
            type2: '',
            weakness: 'Rock',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0006_51_megalizardonX_256.ktx_.png',
            stats: {
                base: {
                    attack: 25,
                    defense: 10,
                    hp: 90,
                    speed: 15,
                    sp_atk: 25,
                    sp_def: 10
                },
                max: {
                    attack: 456,
                    bulk: 498,
                    defense: 129,
                    hp: 660,
                    speed: 265,
                    sp_atk: 456,
                    sp_def: 129
                }
            },
            moves: [
                {
                    name: 'Heat Wave',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 109, max_power: 130 },
                    accuracy: 90,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Flare Blitz',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 123, max_power: 147 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Removes the frozen condition from the user. The user also takes 25% of the damage it dealt to the target. Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Blast Burn',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 178, max_power: 213 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 4,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                },
                {
                    name: 'My Destiny!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Drastically raises the user’s Sp. Atk and Speed. Lowers the user’s Defense and Sp. Def. If Charizard has Mega Evolved, drastically raises the user’s Attack.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Living Legend Blast Burn',
                type: ' Fire',
                category: 'Special',
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Charizard X until the end of battle. Raises the user’s critical-hit rate.'
            },
            passives: [
                {
                    name: 'Propulsion 1',
                    description: 'Has a small chance of reducing the user’s sync move countdown by one when the user’s move is successful.'
                },
                { name: 'Piercing Gaze', description: 'Moves never miss.' },
                {
                    name: 'Move Gauge Refresh 4',
                    description: 'Has a good chance of increasing the user’s move gauge by one when a move is successful.'
                }
            ]
        }
        ,
        {
            name: 'Mega Garchomp',
            type1: 'Ground',
            type2: '',
            weakness: 'Ice',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-12/pm0445_51_megagaburias_256.ktx_.png',
            stats: {
                base: {
                    attack: 26,
                    defense: 14,
                    hp: 108,
                    speed: 21,
                    sp_atk: 13,
                    sp_def: 10
                },
                max: {
                    attack: 397,
                    bulk: 511,
                    defense: 172,
                    hp: 547,
                    speed: 325,
                    sp_atk: 128,
                    sp_def: 141
                }
            },
            moves: [
                {
                    name: 'Earthquake',
                    type: 'Ground',
                    category: 'Physical',
                    power: { min_power: 100, max_power: 120 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                },
                {
                    name: 'X Attack',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Attack.',
                    unlock_requirements: []
                },
                {
                    name: 'Slash',
                    type: 'Normal',
                    category: 'Physical',
                    power: { min_power: 50, max_power: 60 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Critical hits land more easily.',
                    unlock_requirements: []
                },
                {
                    name: 'This Match Is Too Fun!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the user’s Speed and critical-hit rate. These stats are sharply raised when the user is in a sandstorm.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Earthquake of Ancient Lore',
                type: ' Ground',
                category: 'Physical',
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Garchomp until the end of battle.'
            },
            passives: [
                {
                    name: 'Hit and Run 2',
                    description: 'Occasionally raises the Pokémon’s Speed after it uses a move.'
                },
                {
                    name: 'Surging Sand 5',
                    description: 'Powers up moves in a sandstorm.'
                }
            ]
        }
        ,
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
                    attack: 138,
                    bulk: 461,
                    defense: 117,
                    hp: 473,
                    speed: 393,
                    sp_atk: 396,
                    sp_def: 172
                }
            },
            moves: [
                {
                    name: 'Hex',
                    type: 'Ghost',
                    category: 'Special',
                    power: { min_power: 38, max_power: 45 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Radically raises the user’s Speed. The user takes damage based on its maximum HP.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Shadow Ball',
                    type: 'Ghost',
                    category: 'Special',
                    power: { min_power: 99, max_power: 118 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Gengar until the end of the battle. This move’s power increases if the opponent is asleep.'
            },
            passives: [
                {
                    name: 'Wide Awake',
                    description: 'Prevents the Pokémon from falling asleep.'
                }
            ]
        }
        ,
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
                    attack: 201,
                    bulk: 528,
                    defense: 164,
                    hp: 552,
                    speed: 262,
                    sp_atk: 285,
                    sp_def: 164
                }
            },
            moves: [
                {
                    name: 'Powder Snow',
                    type: 'Ice',
                    category: 'Special',
                    power: { min_power: 16, max_power: 19 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 38, max_power: 45 },
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
                power: { min_power: 160, max_power: 192 },
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
                    description: 'Has a good chance of raising the user’s Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness at random when an attack is successful.'
                }
            ]
        }
        ,
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
                    attack: 304,
                    bulk: 516,
                    defense: 172,
                    hp: 516,
                    speed: 393,
                    sp_atk: 380,
                    sp_def: 157
                }
            },
            moves: [
                {
                    name: 'Snarl',
                    type: 'Dark',
                    category: 'Special',
                    power: { min_power: 39, max_power: 46 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 95, max_power: 114 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a small chance of making the target flinch.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Entertain Me!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Houndoom until the end of battle.'
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
        }
        ,
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
                    attack: 390,
                    bulk: 372,
                    defense: 119,
                    hp: 426,
                    speed: 196,
                    sp_atk: 305,
                    sp_def: 99
                }
            },
            moves: [
                {
                    name: 'Power-Up Punch',
                    type: 'Fighting',
                    category: 'Physical',
                    power: { min_power: 30, max_power: 36 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 124, max_power: 148 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Lowers the user’s Defense and Sp. Def.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Skate On Through!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Lucario until the end of battle.'
            },
            passives: [
                {
                    name: 'Unflappable',
                    description: 'Prevents the Pokémon from flinching.'
                }
            ]
        }
        ,
        {
            name: 'Mega Metagross',
            type1: 'Steel',
            type2: '',
            weakness: 'Ghost',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-01/pm0376_51_megametagross_256.ktx_.png',
            stats: {
                base: {
                    attack: 30,
                    defense: 18,
                    hp: 80,
                    speed: 14,
                    sp_atk: 10,
                    sp_def: 14
                },
                max: {
                    attack: 460,
                    bulk: 530,
                    defense: 187,
                    hp: 443,
                    speed: 222,
                    sp_atk: 125,
                    sp_def: 182
                }
            },
            moves: [
                {
                    name: 'Iron Head',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 92, max_power: 110 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of making the target flinch.',
                    unlock_requirements: []
                },
                {
                    name: 'X Attack',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Attack.',
                    unlock_requirements: []
                },
                {
                    name: 'Bullet Punch',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 75, max_power: 90 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: '',
                    uses: 3,
                    effect: 'No additional effect.',
                    unlock_requirements: []
                },
                {
                    name: 'Best There Is!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the user’s Defense. Ensures that the user’s next attack will be a critical hit. If Metagross has Mega Evolved, makes the user able to endure the next hit it takes.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Solid Steel Meteor Mash',
                type: ' Steel',
                category: 'Physical',
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Metagross until the end of the battle.'
            },
            passives: [
                {
                    name: 'Power Chain 3',
                    description: 'Powers up moves when unity bonus is in effect.'
                },
                { name: 'Impervious', description: 'Stats cannot be lowered.' }
            ]
        }
        ,
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
                    attack: 130,
                    bulk: 520,
                    defense: 166,
                    hp: 517,
                    speed: 364,
                    sp_atk: 456,
                    sp_def: 166
                }
            },
            moves: [
                {
                    name: 'Air Cutter',
                    type: 'Flying',
                    category: 'Special',
                    power: { min_power: 43, max_power: 51 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 126, max_power: 151 },
                    accuracy: 70,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Never misses when the weather is rainy. Has a moderate chance of leaving the target confused.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Smell Ya Later!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Pidgeot until the end of battle.'
            },
            passives: [
                { name: 'Acuity', description: 'Accuracy cannot be lowered.' },
                { name: 'Haste', description: 'Speed cannot be lowered.' }
            ]
        }
        ,
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
                    attack: 427,
                    bulk: 499,
                    defense: 164,
                    hp: 547,
                    speed: 293,
                    sp_atk: 81,
                    sp_def: 137
                }
            },
            moves: [
                {
                    name: 'Fury Cutter',
                    type: 'Bug',
                    category: 'Physical',
                    power: { min_power: 8, max_power: 9 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 50, max_power: 60 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Bring It On!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Pinsir until the end of battle.'
            },
            passives: [
                { name: 'Impervious', description: 'Stats cannot be lowered.' },
                {
                    name: 'Unhindered',
                    description: 'When the Pokémon attacks, ignores damage-reducing effects on the opponent’s field of play.'
                }
            ]
        }
        ,
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
                    attack: 131,
                    bulk: 590,
                    defense: 124,
                    hp: 802,
                    speed: 177,
                    sp_atk: 217,
                    sp_def: 175
                }
            },
            moves: [
                {
                    name: 'Energy Ball',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 49, max_power: 58 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the Attack, Sp. Atk, and Speed of all allied sync pairs. Sharply raises them if the weather is sunny.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Light Screen',
                    type: 'Psychic',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Meowstic',
            type1: 'Psychic',
            type2: '',
            weakness: 'Ghost',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0734_00_cat2_256.ktx_.png',
            stats: {
                base: {
                    attack: 12,
                    defense: 13,
                    hp: 98,
                    speed: 32,
                    sp_atk: 20,
                    sp_def: 14
                },
                max: {
                    attack: 129,
                    bulk: 483,
                    defense: 130,
                    hp: 564,
                    speed: 406,
                    sp_atk: 251,
                    sp_def: 148
                }
            },
            moves: [
                {
                    name: 'Psybeam',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 48, max_power: 57 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of the user’s HP. The lower the user’s HP is, the more this move raises the user’s Sp. Atk.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Mind-Bending Psychic',
                type: ' Psychic',
                category: 'Special',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is paralyzed.'
            },
            passives: [
                { name: 'Acuity', description: 'Accuracy cannot be lowered.' },
                {
                    name: 'Aggravation 1',
                    description: 'Raises the chance of inflicting the flinching, confused, or trapped condition with the additional effects of moves.'
                }
            ]
        }
        ,
        {
            name: 'Metagross',
            type1: 'Steel',
            type2: '',
            weakness: 'Ghost',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-01/pm0376_00_metagross_256.ktx_.png',
            stats: {
                base: {
                    attack: 25,
                    defense: 17,
                    hp: 80,
                    speed: 14,
                    sp_atk: 10,
                    sp_def: 13
                },
                max: {
                    attack: 384,
                    bulk: 497,
                    defense: 170,
                    hp: 443,
                    speed: 222,
                    sp_atk: 125,
                    sp_def: 166
                }
            },
            moves: [
                {
                    name: 'Meteor Mash',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 55, max_power: 66 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a small chance of raising the user’s Attack.',
                    unlock_requirements: []
                },
                {
                    name: 'X Attack',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Attack.',
                    unlock_requirements: []
                },
                {
                    name: 'Iron Head',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 92, max_power: 110 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of making the target flinch.',
                    unlock_requirements: []
                },
                {
                    name: 'Best There Is!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the user’s Defense. Ensures that the user’s next attack will be a critical hit. If Metagross has Mega Evolved, makes the user able to endure the next hit it takes.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Solid Steel Meteor Mash',
                type: ' Steel',
                category: 'Physical',
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Metagross until the end of the battle.'
            },
            passives: [
                {
                    name: 'Power Chain 3',
                    description: 'Powers up moves when unity bonus is in effect.'
                },
                { name: 'Impervious', description: 'Stats cannot be lowered.' }
            ]
        }
        ,
        {
            name: 'Mew (After Sync)',
            type1: 'Psychic',
            type2: '',
            weakness: 'Bug',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0460_01_yukinooh_256.ktx.png',
            stats: {
                base: {
                    attack: 220,
                    defense: 220,
                    hp: 321,
                    speed: 220,
                    sp_atk: 220,
                    sp_def: 220
                },
                max: {
                    attack: 280,
                    bulk: 433,
                    defense: 280,
                    hp: 420,
                    speed: 280,
                    sp_atk: 280,
                    sp_def: 280
                }
            },
            moves: [
                {
                    name: 'Fire Blast',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 116, max_power: 116 },
                    accuracy: 85,
                    target: 'An Opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Thunder',
                    type: 'Electric',
                    category: 'Special',
                    power: { min_power: 124, max_power: 124 },
                    accuracy: 70,
                    target: 'An Opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Never misses when the weather is rainy. Has a moderate chance of leaving the target paralyzed.',
                    unlock_requirements: []
                },
                {
                    name: 'Psychic',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 99, max_power: 99 },
                    accuracy: 100,
                    target: 'An Opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Blizzard',
                    type: 'Ice',
                    category: 'Special',
                    power: { min_power: 126, max_power: 126 },
                    accuracy: 70,
                    target: 'An Opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Never misses during a hailstorm. Has a very small chance of leaving the target frozen.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Pokémon Professor Psychic',
                type: 'Psychic',
                category: 'Special',
                power: { min_power: 250, max_power: 250 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Superduper Effective 1',
                    description: 'Powers up moves that are super effective.'
                },
                {
                    name: 'Unfortuitous 9',
                    description: 'Lowers the target’s Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness at random when an attack is successful.'
                }
            ]
        }
        ,
        {
            name: 'Mew (Synced)',
            type1: 'Psychic',
            type2: '',
            weakness: 'Bug',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0151_00_mew_256.ktx__0.png',
            stats: {
                base: {
                    attack: 10,
                    defense: 10,
                    hp: 100,
                    speed: 10,
                    sp_atk: 10,
                    sp_def: 10
                },
                max: {
                    attack: 220,
                    bulk: 556,
                    defense: 220,
                    hp: 321,
                    speed: 220,
                    sp_atk: 220,
                    sp_def: 220
                }
            },
            moves: [
                {
                    name: 'Fire Blast',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 116, max_power: 139 },
                    accuracy: 85,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Thunder',
                    type: 'Electric',
                    category: 'Special',
                    power: { min_power: 124, max_power: 148 },
                    accuracy: 70,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Never misses when the weather is rainy. Has a moderate chance of leaving the target paralyzed.',
                    unlock_requirements: []
                },
                {
                    name: 'Psychic',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 99, max_power: 118 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: []
                },
                {
                    name: 'Blizzard',
                    type: 'Ice',
                    category: 'Special',
                    power: { min_power: 126, max_power: 151 },
                    accuracy: 70,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Never misses during a hailstorm. Has a very small chance of leaving the target frozen.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Pokémon Professor Psychic',
                type: ' Psychic',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Superduper Effective 1',
                    description: 'Powers up moves that are super effective.'
                },
                {
                    name: 'Unfortuitous 9',
                    description: 'Lowers the target’s Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness at random when an attack is successful.'
                },
                {
                    name: 'Oak’s Research',
                    description: 'Replaces some of the user’s moves with different moves after using a sync move.'
                }
            ]
        }
        ,
        {
            name: 'Mew',
            type1: 'Psychic',
            type2: '',
            weakness: 'Bug',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0151_00_mew_256.ktx_.png',
            stats: {
                base: {
                    attack: 10,
                    defense: 10,
                    hp: 100,
                    speed: 10,
                    sp_atk: 10,
                    sp_def: 10
                },
                max: {
                    attack: 220,
                    bulk: 556,
                    defense: 220,
                    hp: 321,
                    speed: 220,
                    sp_atk: 220,
                    sp_def: 220
                }
            },
            moves: [
                {
                    name: 'Swift',
                    type: 'Normal',
                    category: 'Special',
                    power: { min_power: 57, max_power: 68 },
                    accuracy: 0,
                    target: 'All opponents',
                    cost: 2,
                    uses: null,
                    effect: 'Never misses.',
                    unlock_requirements: []
                },
                {
                    name: 'X Speed',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Speed.',
                    unlock_requirements: []
                },
                {
                    name: 'Psychic',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 99, max_power: 118 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: []
                },
                {
                    name: 'A World of Dreams!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Atk. Drastically raises either the user’s Attack, Defense, Sp. Def, Speed, accuracy, or evasiveness.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Pokémon Professor Psychic',
                type: ' Psychic',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Superduper Effective 1',
                    description: 'Powers up moves that are super effective.'
                },
                {
                    name: 'Unfortuitous 9',
                    description: 'Lowers the target’s Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness at random when an attack is successful.'
                },
                {
                    name: 'Oak’s Research',
                    description: 'Replaces some of the user’s moves with different moves after using a sync move.'
                }
            ]
        }
        ,
        {
            name: 'Mewtwo',
            type1: 'Psychic',
            type2: '',
            weakness: 'Dark',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-11/pm0150_00_mewtwo_256.ktx__0.png',
            stats: {
                base: {
                    attack: 15,
                    defense: 10,
                    hp: 82,
                    speed: 25,
                    sp_atk: 30,
                    sp_def: 10
                },
                max: {
                    attack: 359,
                    bulk: 369,
                    defense: 96,
                    hp: 488,
                    speed: 390,
                    sp_atk: 440,
                    sp_def: 96
                }
            },
            moves: [
                {
                    name: 'Confusion',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 18, max_power: 21 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 1,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target confused.',
                    unlock_requirements: []
                },
                {
                    name: 'Psychic',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 99, max_power: 118 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: []
                },
                {
                    name: 'Nowhere to Hide!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Raises the user’s evasiveness. Sharply raises the user’s critical-hit rate.',
                    unlock_requirements: []
                },
                {
                    name: 'Shadow Ball',
                    type: 'Ghost',
                    category: 'Special',
                    power: { min_power: 99, max_power: 118 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'World Domination Psystrike',
                type: ' Psychic',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 286,
                    bulk: 440,
                    defense: 107,
                    hp: 577,
                    speed: 260,
                    sp_atk: 117,
                    sp_def: 124
                }
            },
            moves: [
                {
                    name: 'Body Slam',
                    type: 'Normal',
                    category: 'Physical',
                    power: { min_power: 53, max_power: 63 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 53, max_power: 63 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a moderate chance of making the target flinch.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'I’m All Kinds of Strong!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Mismagius',
            type1: 'Ghost',
            type2: '',
            weakness: 'Dark',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0429_00_mumargi_256.ktx_.png',
            stats: {
                base: {
                    attack: 7,
                    defense: 9,
                    hp: 77,
                    speed: 16,
                    sp_atk: 19,
                    sp_def: 13
                },
                max: {
                    attack: 121,
                    bulk: 456,
                    defense: 123,
                    hp: 473,
                    speed: 304,
                    sp_atk: 323,
                    sp_def: 161
                }
            },
            moves: [
                {
                    name: 'Ominous Wind',
                    type: 'Ghost',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of raising the user’s Attack, Defense, Sp. Atk, Sp. Def, and Speed.',
                    unlock_requirements: []
                },
                {
                    name: 'X Sp. Atk',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 99, max_power: 118 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: []
                },
                {
                    name: 'Dance with Me!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the user’s move gauge by three. Raises the user’s critical-hit rate.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Soulful Dancer Shadow Ball',
                type: ' Ghost',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Backfire 2',
                    description: 'Sharply lowers the Attack and Sp. Atk of all opposing sync pairs just before the user faints.'
                },
                {
                    name: 'Bulk Buster 4',
                    description: 'The more HP the target has, the more it powers up moves.'
                }
            ]
        }
        ,
        {
            name: 'Mudsdale',
            type1: 'Ground',
            type2: '',
            weakness: 'Grass',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0840_00_roba2_256.ktx.png',
            stats: {
                base: { attack: 13, defense: 9, hp: 62, speed: 7, sp_atk: 8, sp_def: 5 },
                max: {
                    attack: 236,
                    bulk: 424,
                    defense: 174,
                    hp: 471,
                    speed: 152,
                    sp_atk: 230,
                    sp_def: 79
                }
            },
            moves: [
                {
                    name: 'Mud-Slap',
                    type: 'Ground',
                    category: 'Special',
                    power: { min_power: 13, max_power: 15 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 106, max_power: 127 },
                    accuracy: 95,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Stand Strong!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 114,
                    bulk: 508,
                    defense: 192,
                    hp: 341,
                    speed: 101,
                    sp_atk: 119,
                    sp_def: 192
                }
            },
            moves: [
                {
                    name: 'Ancient Power',
                    type: 'Rock',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the Sp. Atk and Speed of all allied sync pairs.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Wide Guard',
                    type: 'Rock',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Octillery',
            type1: 'Water',
            type2: '',
            weakness: 'Electric',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-11/pm0224_00_okutank_256.ktx_.png',
            stats: {
                base: {
                    attack: 8,
                    defense: 16,
                    hp: 101,
                    speed: 9,
                    sp_atk: 15,
                    sp_def: 16
                },
                max: {
                    attack: 139,
                    bulk: 576,
                    defense: 190,
                    hp: 541,
                    speed: 178,
                    sp_atk: 231,
                    sp_def: 190
                }
            },
            moves: [
                {
                    name: 'Octazooka',
                    type: 'Water',
                    category: 'Special',
                    power: { min_power: 56, max_power: 67 },
                    accuracy: 85,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a good chance of lowering the target’s accuracy.',
                    unlock_requirements: []
                },
                {
                    name: 'X Sp. Def',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Def.',
                    unlock_requirements: []
                },
                {
                    name: 'Scald',
                    type: 'Water',
                    category: 'Special',
                    power: { min_power: 87, max_power: 104 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Removes the frozen condition. Has a moderate chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Only the Best!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Defense and Sp. Atk.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Gourmet Octazooka',
                type: ' Water',
                category: 'Special',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is burned.'
            },
            passives: [
                {
                    name: 'Hostile Environment 1',
                    description: 'Raises the chance of inflicting status conditions with the additional effects of moves.'
                },
                {
                    name: 'Fortuitous 4',
                    description: 'Has a good chance of raising the user’s Attack, Defense, Sp. Atk, Sp. Def, Speed, accuracy, or evasiveness at random when an attack is successful.'
                },
                { name: 'Piercing Gaze', description: 'Moves never miss.' }
            ]
        }
        ,
        {
            name: 'Onix',
            type1: 'Rock',
            type2: '',
            weakness: 'Grass',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0095_00_iwark_256.ktx.png',
            stats: {
                base: { attack: 7, defense: 8, hp: 80, speed: 10, sp_atk: 6, sp_def: 7 },
                max: {
                    attack: 193,
                    bulk: 507,
                    defense: 172,
                    hp: 547,
                    speed: 232,
                    sp_atk: 62,
                    sp_def: 137
                }
            },
            moves: [
                {
                    name: 'Rock Throw',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 23, max_power: 27 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 39, max_power: 46 },
                    accuracy: 95,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Lowers the target’s Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Rock-Hard Determination!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 221,
                    bulk: 603,
                    defense: 203,
                    hp: 542,
                    speed: 230,
                    sp_atk: 146,
                    sp_def: 203
                }
            },
            moves: [
                {
                    name: 'Aqua Tail',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 56, max_power: 67 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'The lower the user’s HP is, the more this move raises the Attack of all allied sync pairs.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Waterfall',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Impervious', description: 'Stats cannot be lowered.' } ]
        }
        ,
        {
            name: 'Palossand',
            type1: 'Ghost',
            type2: '',
            weakness: 'Ice',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0823_00_sunaba2_256.ktx.png',
            stats: {
                base: { attack: 7, defense: 8, hp: 85, speed: 8, sp_atk: 6, sp_def: 8 },
                max: {
                    attack: 159,
                    bulk: 506,
                    defense: 169,
                    hp: 489,
                    speed: 204,
                    sp_atk: 123,
                    sp_def: 160
                }
            },
            moves: [
                {
                    name: 'Astonish',
                    type: 'Ghost',
                    category: 'Physical',
                    power: { min_power: 12, max_power: 14 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Entire field',
                    cost: 2,
                    uses: 2,
                    effect: 'Causes a sandstorm.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Over Here!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 195,
                    bulk: 452,
                    defense: 136,
                    hp: 449,
                    speed: 228,
                    sp_atk: 153,
                    sp_def: 153
                }
            },
            moves: [
                {
                    name: 'Mud Shot',
                    type: 'Ground',
                    category: 'Special',
                    power: { min_power: 39, max_power: 46 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 80, max_power: 96 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Lowers the target’s Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'It Ain’t Over!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 188,
                    bulk: 471,
                    defense: 135,
                    hp: 454,
                    speed: 230,
                    sp_atk: 188,
                    sp_def: 171
                }
            },
            moves: [
                {
                    name: 'Air Slash',
                    type: 'Flying',
                    category: 'Special',
                    power: { min_power: 45, max_power: 54 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Defense and Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Hurricane',
                    type: 'Flying',
                    category: 'Special',
                    power: { min_power: 126, max_power: 151 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Persian',
            type1: 'Dark',
            type2: '',
            weakness: 'Bug',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0053_61_apersian_256.ktx.png',
            stats: {
                base: { attack: 7, defense: 8, hp: 80, speed: 11, sp_atk: 6, sp_def: 7 },
                max: {
                    attack: 213,
                    bulk: 483,
                    defense: 177,
                    hp: 456,
                    speed: 314,
                    sp_atk: 120,
                    sp_def: 141
                }
            },
            moves: [
                {
                    name: 'Bite',
                    type: 'Dark',
                    category: 'Physical',
                    power: { min_power: 42, max_power: 50 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Sharply lowers the target’s Defense.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Just Warming Up...',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is flinching.'
            },
            passives: [
                {
                    name: 'Critical Sting 1',
                    description: 'When critical hits land, raises the chance of making the target flinch, become confused, or become trapped with the additional effect of the attack.'
                }
            ]
        }
        ,
        {
            name: 'Pidgeot',
            type1: 'Flying',
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
                    attack: 130,
                    bulk: 520,
                    defense: 166,
                    hp: 517,
                    speed: 304,
                    sp_atk: 380,
                    sp_def: 166
                }
            },
            moves: [
                {
                    name: 'Air Slash',
                    type: 'Flying',
                    category: 'Special',
                    power: { min_power: 45, max_power: 54 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 43, max_power: 51 },
                    accuracy: 95,
                    target: 'All opponents',
                    cost: 2,
                    uses: null,
                    effect: 'Critical hits land more easily.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Smell Ya Later!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Pidgeot until the end of battle.'
            },
            passives: [
                { name: 'Acuity', description: 'Accuracy cannot be lowered.' },
                { name: 'Haste', description: 'Speed cannot be lowered.' }
            ]
        }
        ,
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
                    attack: 331,
                    bulk: 471,
                    defense: 88,
                    hp: 807,
                    speed: 146,
                    sp_atk: 138,
                    sp_def: 90
                }
            },
            moves: [
                {
                    name: 'Flame Charge',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 30, max_power: 36 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 123, max_power: 147 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Removes the frozen condition from the user. The user also takes 25% of the damage it dealt to the target. Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Try and Stop Us!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Pikachu',
            type1: 'Electric',
            type2: '',
            weakness: 'Ground',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0025_00_pikachu_256.ktx.png',
            stats: {
                base: { attack: 10, defense: 5, hp: 62, speed: 9, sp_atk: 11, sp_def: 6 },
                max: {
                    attack: 232,
                    bulk: 402,
                    defense: 99,
                    hp: 471,
                    speed: 252,
                    sp_atk: 305,
                    sp_def: 132
                }
            },
            moves: [
                {
                    name: 'Thunder Shock',
                    type: 'Electric',
                    category: 'Special',
                    power: { min_power: 17, max_power: 20 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 47, max_power: 56 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target paralyzed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Jump Start!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 356,
                    bulk: 472,
                    defense: 137,
                    hp: 547,
                    speed: 293,
                    sp_atk: 81,
                    sp_def: 137
                }
            },
            moves: [
                {
                    name: 'Fury Cutter',
                    type: 'Bug',
                    category: 'Physical',
                    power: { min_power: 8, max_power: 9 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 50, max_power: 60 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Bring It On!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 160, max_power: 192 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Become Mega Pinsir until the end of battle.'
            },
            passives: [ { name: 'Headstrong', description: 'Attack cannot be lowered.' } ]
        }
        ,
        {
            name: 'Piplup',
            type1: 'Water',
            type2: '',
            weakness: 'Grass',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0393_00_pochama_256.ktx.png',
            stats: {
                base: { attack: 9, defense: 6, hp: 62, speed: 9, sp_atk: 11, sp_def: 6 },
                max: {
                    attack: 190,
                    bulk: 435,
                    defense: 132,
                    hp: 471,
                    speed: 193,
                    sp_atk: 305,
                    sp_def: 132
                }
            },
            moves: [
                {
                    name: 'Bubble',
                    type: 'Water',
                    category: 'Special',
                    power: { min_power: 19, max_power: 22 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 49, max_power: 58 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'No Hesitation!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 175,
                    bulk: 483,
                    defense: 138,
                    hp: 562,
                    speed: 418,
                    sp_atk: 138,
                    sp_def: 141
                }
            },
            moves: [
                {
                    name: 'Flame Wheel',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 42, max_power: 50 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Removes the frozen condition from the user. Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Fire Spin',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 38, max_power: 45 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Drastically raises the user’s Attack. Sharply raises either the user’s Defense, Sp. Atk, Sp. Def, or Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Sunny Day',
                    type: 'Fire',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 194,
                    bulk: 445,
                    defense: 135,
                    hp: 483,
                    speed: 200,
                    sp_atk: 330,
                    sp_def: 135
                }
            },
            moves: [
                {
                    name: 'Bubble',
                    type: 'Water',
                    category: 'Special',
                    power: { min_power: 19, max_power: 22 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 49, max_power: 58 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'No Hesitation!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Probopass',
            type1: 'Rock',
            type2: '',
            weakness: 'Fighting',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0476_00_dainose_256.ktx_.png',
            stats: {
                base: {
                    attack: 11,
                    defense: 19,
                    hp: 125,
                    speed: 10,
                    sp_atk: 17,
                    sp_def: 19
                },
                max: {
                    attack: 116,
                    bulk: 525,
                    defense: 198,
                    hp: 356,
                    speed: 103,
                    sp_atk: 122,
                    sp_def: 198
                }
            },
            moves: [
                {
                    name: 'Ancient Power',
                    type: 'Rock',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the Sp. Atk and Speed of all allied sync pairs.',
                    unlock_requirements: []
                },
                {
                    name: 'Wide Guard',
                    type: 'Rock',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: 1,
                    uses: 1,
                    effect: 'The user takes up a defensive posture. Using this move again will make the user leave this defensive posture. No other actions can be taken when in this defensive posture. Nullifies moves that target all allies when hit by such a move while in this defensive posture.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Honor Student Power Gem',
                type: ' Rock',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Quilava',
            type1: 'Fire',
            type2: '',
            weakness: 'Rock',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-12/pm0156_00_magmarashi_256.ktx_.png',
            stats: {
                base: {
                    attack: 16,
                    defense: 10,
                    hp: 103,
                    speed: 22,
                    sp_atk: 20,
                    sp_def: 11
                },
                max: {
                    attack: 126,
                    bulk: 457,
                    defense: 129,
                    hp: 543,
                    speed: 347,
                    sp_atk: 249,
                    sp_def: 131
                }
            },
            moves: [
                {
                    name: 'Flamethrower',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'X Sp. Atk',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Atk.',
                    unlock_requirements: []
                },
                {
                    name: 'Eruption',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 135, max_power: 162 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'The lower the user’s HP is, the lower the power of this move becomes.',
                    unlock_requirements: []
                },
                {
                    name: 'Stoke the Fire!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of the user’s HP. Raises the user’s Speed and evasiveness.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Fire Sync Beam',
                type: ' Fire',
                category: 'Special',
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 84,
                    bulk: 448,
                    defense: 139,
                    hp: 403,
                    speed: 241,
                    sp_atk: 314,
                    sp_def: 163
                }
            },
            moves: [
                {
                    name: 'Thunder Shock',
                    type: 'Electric',
                    category: 'Special',
                    power: { min_power: 17, max_power: 20 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 92, max_power: 110 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of leaving the target paralyzed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Feel the Alolan Breeze!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Rampardos',
            type1: 'Rock',
            type2: '',
            weakness: 'Water',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0409_00_rampald_256.ktx_.png',
            stats: {
                base: {
                    attack: 27,
                    defense: 12,
                    hp: 90,
                    speed: 15,
                    sp_atk: 6,
                    sp_def: 10
                },
                max: {
                    attack: 328,
                    bulk: 489,
                    defense: 99,
                    hp: 808,
                    speed: 193,
                    sp_atk: 98,
                    sp_def: 97
                }
            },
            moves: [
                {
                    name: 'Smack Down',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 20, max_power: 24 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 188, max_power: 225 },
                    accuracy: 80,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'The user also takes 33% of the damage it dealt to the target.',
                    unlock_requirements: []
                },
                {
                    name: 'You’re Gonna Need a Helmet!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the user’s move gauge by three. Makes the user’s next attack a sure hit.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Rock Head Smash',
                type: ' Rock',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Headstrong', description: 'Attack cannot be lowered.' } ]
        }
        ,
        {
            name: 'Rapidash',
            type1: 'Fire',
            type2: '',
            weakness: 'Rock',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0078_00_gallop_256.ktx_.png',
            stats: {
                base: {
                    attack: 14,
                    defense: 12,
                    hp: 117,
                    speed: 33,
                    sp_atk: 13,
                    sp_def: 16
                },
                max: {
                    attack: 178,
                    bulk: 510,
                    defense: 140,
                    hp: 623,
                    speed: 438,
                    sp_atk: 141,
                    sp_def: 144
                }
            },
            moves: [
                {
                    name: 'Flame Wheel',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 42, max_power: 50 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Removes the frozen condition from the user. Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Fire Spin',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 38, max_power: 45 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Drastically raises the user’s Attack. Sharply raises either the user’s Defense, Sp. Atk, Sp. Def, or Speed.',
                    unlock_requirements: []
                },
                {
                    name: 'Sunny Day',
                    type: 'Fire',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Entire field',
                    cost: 2,
                    uses: 2,
                    effect: 'Makes the weather sunny.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Quizmaster Flame Charge',
                type: ' Fire',
                category: 'Physical',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is trapped.'
            },
            passives: [
                {
                    name: 'Hostile Environment 1',
                    description: 'Raises the chance of inflicting status conditions with the additional effects of moves.'
                }
            ]
        }
        ,
        {
            name: 'Rayquaza',
            type1: 'Dragon',
            type2: '',
            weakness: 'Rock',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-01/pm0384_00_rayquaza_256.ktx_.png',
            stats: {
                base: {
                    attack: 23,
                    defense: 9,
                    hp: 97,
                    speed: 10,
                    sp_atk: 23,
                    sp_def: 9
                },
                max: {
                    attack: 347,
                    bulk: 456,
                    defense: 136,
                    hp: 506,
                    speed: 234,
                    sp_atk: 347,
                    sp_def: 136
                }
            },
            moves: [
                {
                    name: 'Outrage',
                    type: 'Dragon',
                    category: 'Physical',
                    power: { min_power: 115, max_power: 138 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Leaves the user confused.',
                    unlock_requirements: []
                },
                {
                    name: 'Aerial Ace',
                    type: 'Flying',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
                    accuracy: 0,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Never misses.',
                    unlock_requirements: []
                },
                {
                    name: 'Stellar Imagination!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Removes the confused, flinching, and trapped conditions. Sharply raises the user’s Attack and Sp. Atk. Raises the user’s Speed and accuracy. Sharply lowers the user’s Defense and Sp. Def.',
                    unlock_requirements: []
                },
                {
                    name: 'Draco Meteor',
                    type: 'Dragon',
                    category: 'Special',
                    power: { min_power: 136, max_power: 163 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Sharply lowers the user’s Sp. Atk.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Dimensional Defender Draco Meteor',
                type: ' Dragon',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Weather Surge 3',
                    description: 'Powers up moves when weather conditions are in effect.'
                }
            ]
        }
        ,
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
                    attack: 141,
                    bulk: 478,
                    defense: 147,
                    hp: 505,
                    speed: 199,
                    sp_atk: 377,
                    sp_def: 148
                }
            },
            moves: [
                {
                    name: 'Hidden Power',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 50, max_power: 60 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 99, max_power: 118 },
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
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
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
                    attack: 117,
                    bulk: 448,
                    defense: 98,
                    hp: 405,
                    speed: 294,
                    sp_atk: 346,
                    sp_def: 203
                }
            },
            moves: [
                {
                    name: 'Absorb',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 19, max_power: 22 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 136, max_power: 163 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Sharply lowers the user’s Sp. Atk.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Trust in Nature!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Rotom',
            type1: 'Electric',
            type2: '',
            weakness: 'Dark',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0479_11_rotom_256.ktx_.png',
            stats: {
                base: {
                    attack: 6,
                    defense: 17,
                    hp: 99,
                    speed: 14,
                    sp_atk: 13,
                    sp_def: 17
                },
                max: {
                    attack: 99,
                    bulk: 696,
                    defense: 261,
                    hp: 479,
                    speed: 280,
                    sp_atk: 204,
                    sp_def: 261
                }
            },
            moves: [
                {
                    name: 'Thunder Shock',
                    type: 'Electric',
                    category: 'Special',
                    power: { min_power: 17, max_power: 20 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 1,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target paralyzed.',
                    unlock_requirements: []
                },
                {
                    name: 'X Sp. Atk All',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the Sp. Atk of all allied sync pairs.',
                    unlock_requirements: []
                },
                {
                    name: 'Breathtaking!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An ally',
                    cost: '',
                    uses: 1,
                    effect: 'Reduces the sync move countdown of an allied sync pair by two and raises the accuracy and critical-hit rate of the sync pair selected. Sharply raises accuracy and critical-hit rate when the user’s team has a sync buff.',
                    unlock_requirements: []
                },
                {
                    name: 'Thunder',
                    type: 'Electric',
                    category: 'Special',
                    power: { min_power: 124, max_power: 148 },
                    accuracy: 70,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Never misses when the weather is rainy. Has a moderate chance of leaving the target paralyzed.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'High Fashion Thunderbolt',
                type: ' Electric',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Look Alive 9',
                    description: 'Increases the user’s evasiveness when the user is hit by an attack move.'
                },
                {
                    name: 'Fast Runner',
                    description: 'Evasiveness cannot be lowered.'
                }
            ]
        }
        ,
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
                    attack: 252,
                    bulk: 541,
                    defense: 183,
                    hp: 484,
                    speed: 181,
                    sp_atk: 248,
                    sp_def: 182
                }
            },
            moves: [
                {
                    name: 'Dragon Claw',
                    type: 'Dragon',
                    category: 'Physical',
                    power: { min_power: 50, max_power: 60 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the move gauges of all allied sync pairs by two. Sharply raises the Defense of all allied sync pairs.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Dragon Breath',
                    type: 'Dragon',
                    category: 'Special',
                    power: { min_power: 42, max_power: 50 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Samurott',
            type1: 'Water',
            type2: '',
            weakness: 'Electric',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0503_00_daikenki_256.ktx_.png',
            stats: {
                base: {
                    attack: 25,
                    defense: 24,
                    hp: 155,
                    speed: 31,
                    sp_atk: 18,
                    sp_def: 24
                },
                max: {
                    attack: 233,
                    bulk: 657,
                    defense: 214,
                    hp: 630,
                    speed: 260,
                    sp_atk: 154,
                    sp_def: 214
                }
            },
            moves: [
                {
                    name: 'Aqua Tail',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 56, max_power: 67 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'The lower the user’s HP is, the more this move raises the Attack of all allied sync pairs.',
                    unlock_requirements: []
                },
                {
                    name: 'Waterfall',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a small chance of making the target flinch.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'The True Razor Shell',
                type: ' Water',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Impervious', description: 'Stats cannot be lowered.' } ]
        }
        ,
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
                    attack: 358,
                    bulk: 476,
                    defense: 145,
                    hp: 513,
                    speed: 421,
                    sp_atk: 379,
                    sp_def: 145
                }
            },
            moves: [
                {
                    name: 'Bullet Seed',
                    type: 'Grass',
                    category: 'Physical',
                    power: { min_power: 15, max_power: 18 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 136, max_power: 163 },
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
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                { name: 'Haste', description: 'Speed cannot be lowered.' },
                {
                    name: 'Lithe',
                    description: 'Prevents the Pokémon from getting paralyzed.'
                }
            ]
        }
        ,
        {
            name: 'Scolipede',
            type1: 'Poison',
            type2: '',
            weakness: 'Psychic',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0545_00_pendror_256.ktx_.png',
            stats: {
                base: {
                    attack: 25,
                    defense: 13,
                    hp: 102,
                    speed: 23,
                    sp_atk: 10,
                    sp_def: 10
                },
                max: {
                    attack: 316,
                    bulk: 448,
                    defense: 157,
                    hp: 468,
                    speed: 358,
                    sp_atk: 117,
                    sp_def: 121
                }
            },
            moves: [
                {
                    name: 'Poison Tail',
                    type: 'Poison',
                    category: 'Physical',
                    power: { min_power: 38, max_power: 45 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 92, max_power: 110 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of leaving the target poisoned.',
                    unlock_requirements: []
                },
                {
                    name: 'Time to Rock!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Def. Raises the user’s critical-hit rate.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Radical Poison Jab',
                type: ' Poison',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Seel',
            type1: 'Ice',
            type2: '',
            weakness: 'Electric',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0086_00_pawou_256.ktx.png',
            stats: {
                base: { attack: 10, defense: 8, hp: 67, speed: 7, sp_atk: 10, sp_def: 8 },
                max: {
                    attack: 232,
                    bulk: 410,
                    defense: 68,
                    hp: 574,
                    speed: 152,
                    sp_atk: 232,
                    sp_def: 134
                }
            },
            moves: [
                {
                    name: 'Ice Beam',
                    type: 'Ice',
                    category: 'Special',
                    power: { min_power: 46, max_power: 55 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 92, max_power: 110 },
                    accuracy: 95,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Lowers the target’s Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'I’ll Teach You a Lesson!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Seismitoad',
            type1: 'Ground',
            type2: '',
            weakness: 'Grass',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0537_00_gamageroge_256.ktx_.png',
            stats: {
                base: {
                    attack: 19,
                    defense: 16,
                    hp: 97,
                    speed: 18,
                    sp_atk: 13,
                    sp_def: 17
                },
                max: {
                    attack: 214,
                    bulk: 464,
                    defense: 140,
                    hp: 461,
                    speed: 248,
                    sp_atk: 156,
                    sp_def: 157
                }
            },
            moves: [
                {
                    name: 'Mud Shot',
                    type: 'Ground',
                    category: 'Special',
                    power: { min_power: 39, max_power: 46 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 80, max_power: 96 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Lowers the target’s Speed.',
                    unlock_requirements: []
                },
                {
                    name: 'It Ain’t Over!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Speed. Makes the user able to endure the next hit it takes.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Rock-Bottom Bulldoze',
                type: ' Ground',
                category: 'Physical',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the target’s Speed has been lowered, the greater the power of this move.'
            },
            passives: [
                {
                    name: 'Antitoxin',
                    description: 'Prevents the Pokémon from getting poisoned or badly poisoned.'
                }
            ]
        }
        ,
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
                    attack: 87,
                    bulk: 683,
                    defense: 192,
                    hp: 659,
                    speed: 178,
                    sp_atk: 112,
                    sp_def: 252
                }
            },
            moves: [
                {
                    name: 'Energy Ball',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 49, max_power: 58 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the move gauges of all allied sync pairs by three.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Giga Drain',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 91, max_power: 109 },
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
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Stalwart', description: 'Sp. Def cannot be lowered.' } ]
        }
        ,
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
                    attack: 84,
                    bulk: 631,
                    defense: 186,
                    hp: 599,
                    speed: 172,
                    sp_atk: 107,
                    sp_def: 228
                }
            },
            moves: [
                {
                    name: 'Energy Ball',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 49, max_power: 58 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the move gauges of all allied sync pairs by three.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Giga Drain',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 91, max_power: 109 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Stalwart', description: 'Sp. Def cannot be lowered.' } ]
        }
        ,
        {
            name: 'Slaking',
            type1: 'Normal',
            type2: '',
            weakness: 'Fighting',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0289_00_kekking_256.ktx.png',
            stats: {
                base: { attack: 12, defense: 6, hp: 67, speed: 6, sp_atk: 2, sp_def: 6 },
                max: {
                    attack: 326,
                    bulk: 454,
                    defense: 132,
                    hp: 525,
                    speed: 120,
                    sp_atk: 37,
                    sp_def: 132
                }
            },
            moves: [
                {
                    name: 'Body Slam',
                    type: 'Normal',
                    category: 'Physical',
                    power: { min_power: 53, max_power: 63 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 167, max_power: 200 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'The user also takes 25% of the damage it dealt to the target.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'All-Out Effort!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 300, max_power: 360 },
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
        }
        ,
        {
            name: 'Snivy',
            type1: 'Grass',
            type2: '',
            weakness: 'Flying',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0495_00_tsutarja_256.ktx.png',
            stats: {
                base: { attack: 5, defense: 9, hp: 82, speed: 7, sp_atk: 6, sp_def: 9 },
                max: {
                    attack: 82,
                    bulk: 597,
                    defense: 182,
                    hp: 572,
                    speed: 168,
                    sp_atk: 104,
                    sp_def: 207
                }
            },
            moves: [
                {
                    name: 'Energy Ball',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 49, max_power: 58 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the move gauges of all allied sync pairs by three.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Giga Drain',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 91, max_power: 109 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Stalwart', description: 'Sp. Def cannot be lowered.' } ]
        }
        ,
        {
            name: 'Solgaleo',
            type1: 'Steel',
            type2: '',
            weakness: 'Ground',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-12/pm0873_00_sun_256.ktx_.png',
            stats: {
                base: {
                    attack: 25,
                    defense: 10,
                    hp: 84,
                    speed: 12,
                    sp_atk: 14,
                    sp_def: 9
                },
                max: {
                    attack: 369,
                    bulk: 498,
                    defense: 156,
                    hp: 529,
                    speed: 259,
                    sp_atk: 315,
                    sp_def: 150
                }
            },
            moves: [
                {
                    name: 'Metal Claw',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 21, max_power: 25 },
                    accuracy: 95,
                    target: 'An opponent',
                    cost: 1,
                    uses: null,
                    effect: 'Has a very small chance of raising the user’s Attack.',
                    unlock_requirements: []
                },
                {
                    name: 'Sunsteel Strike',
                    type: 'Steel',
                    category: 'Physical',
                    power: { min_power: 100, max_power: 120 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Ignores passive skills that would reduce the damage of this attack. Ignores passive skills that would protect the target against a critical hit. Opponents cannot endure this attack.',
                    unlock_requirements: []
                },
                {
                    name: 'Bright As the Sun!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: 3,
                    uses: 2,
                    effect: 'Drastically raises the user’s Attack, Sp. Atk, and accuracy.',
                    unlock_requirements: []
                },
                {
                    name: 'Focus Blast',
                    type: 'Fighting',
                    category: 'Special',
                    power: { min_power: 142, max_power: 170 },
                    accuracy: 70,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a very small chance of lowering the target’s Sp. Def.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Shining Friendship Sunraze Smash',
                type: ' Steel',
                category: 'Physical',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Impervious', description: 'Stats cannot be lowered.' } ]
        }
        ,
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
                    attack: 324,
                    bulk: 472,
                    defense: 175,
                    hp: 491,
                    speed: 154,
                    sp_atk: 99,
                    sp_def: 119
                }
            },
            moves: [
                {
                    name: 'Zen Headbutt',
                    type: 'Psychic',
                    category: 'Physical',
                    power: { min_power: 51, max_power: 61 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 39, max_power: 46 },
                    accuracy: 95,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Lowers the target’s Speed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'All as One!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'Power Chain 3',
                    description: 'Powers up moves when unity bonus is in effect.'
                },
                { name: 'Headstrong', description: 'Attack cannot be lowered.' },
                { name: 'Unbending', description: 'Defense cannot be lowered.' }
            ]
        }
        ,
        {
            name: 'Starmie',
            type1: 'Water',
            type2: '',
            weakness: 'Electric',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0121_00_starmie_256.ktx.png',
            stats: {
                base: { attack: 5, defense: 10, hp: 82, speed: 8, sp_atk: 7, sp_def: 9 },
                max: {
                    attack: 115,
                    bulk: 569,
                    defense: 179,
                    hp: 542,
                    speed: 211,
                    sp_atk: 191,
                    sp_def: 193
                }
            },
            moves: [
                {
                    name: 'Bubble Beam',
                    type: 'Water',
                    category: 'Special',
                    power: { min_power: 49, max_power: 58 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'An ally',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises an ally’s evasiveness. Makes an ally gradually heal itself.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Hydro Pump',
                    type: 'Water',
                    category: 'Special',
                    power: { min_power: 125, max_power: 150 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Stoutland',
            type1: 'Normal',
            type2: '',
            weakness: 'Fighting',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0508_00_mooland_256.ktx.png',
            stats: {
                base: { attack: 7, defense: 9, hp: 92, speed: 12, sp_atk: 5, sp_def: 8 },
                max: {
                    attack: 203,
                    bulk: 587,
                    defense: 207,
                    hp: 640,
                    speed: 227,
                    sp_atk: 47,
                    sp_def: 148
                }
            },
            moves: [
                {
                    name: 'Facade',
                    type: 'Normal',
                    category: 'Physical',
                    power: { min_power: 47, max_power: 56 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Increases the move gauges of all allied sync pairs by two. Makes all allied sync pairs gradually heal themselves.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Crunch',
                    type: 'Dark',
                    category: 'Physical',
                    power: { min_power: 99, max_power: 118 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Surskit',
            type1: 'Bug',
            type2: '',
            weakness: 'Rock',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0283_00_ametama_256.ktx.png',
            stats: {
                base: { attack: 6, defense: 9, hp: 80, speed: 10, sp_atk: 9, sp_def: 8 },
                max: {
                    attack: 120,
                    bulk: 547,
                    defense: 183,
                    hp: 501,
                    speed: 239,
                    sp_atk: 215,
                    sp_def: 182
                }
            },
            moves: [
                {
                    name: 'Infestation',
                    type: 'Bug',
                    category: 'Special',
                    power: { min_power: 20, max_power: 24 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 30, max_power: 36 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 2,
                    uses: null,
                    effect: 'Lowers the target’s Sp. Atk.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Just Fantastic!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Swanna',
            type1: 'Flying',
            type2: '',
            weakness: 'Rock',
            role: 'Support',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0581_00_swanna_256.ktx.png',
            stats: {
                base: { attack: 6, defense: 9, hp: 82, speed: 8, sp_atk: 6, sp_def: 9 },
                max: {
                    attack: 190,
                    bulk: 534,
                    defense: 160,
                    hp: 591,
                    speed: 211,
                    sp_atk: 208,
                    sp_def: 160
                }
            },
            moves: [
                {
                    name: 'Gust',
                    type: 'Flying',
                    category: 'Special',
                    power: { min_power: 20, max_power: 24 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'All allies',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the Defense of all allied sync pairs. Sharply raises the Speed of all allied sync pairs.',
                    unlock_requirements: [
                        'Great Aid Ade x',
                        'Ultra Aid Ade x',
                        'Training Machine x',
                        'Super Training Machine x'
                    ]
                },
                {
                    name: 'Aerial Ace',
                    type: 'Flying',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
                    accuracy: 0,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Never misses.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'High-Flying Sky Attack',
                type: ' Flying',
                category: 'Physical',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'The more the user’s Speed has been raised, the greater the power of this move.'
            },
            passives: [ { name: 'Haste', description: 'Speed cannot be lowered.' } ]
        }
        ,
        {
            name: 'Sylveon',
            type1: 'Fairy',
            type2: '',
            weakness: 'Poison',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0767_00_ninnfi_256.ktx_.png',
            stats: {
                base: { attack: 8, defense: 5, hp: 75, speed: 5, sp_atk: 13, sp_def: 9 },
                max: {
                    attack: 122,
                    bulk: 425,
                    defense: 102,
                    hp: 493,
                    speed: 153,
                    sp_atk: 316,
                    sp_def: 144
                }
            },
            moves: [
                {
                    name: 'Disarming Voice',
                    type: 'Fairy',
                    category: 'Special',
                    power: { min_power: 45, max_power: 54 },
                    accuracy: 0,
                    target: 'All opponents',
                    cost: 2,
                    uses: null,
                    effect: 'Never misses.',
                    unlock_requirements: []
                },
                {
                    name: 'X Sp. Atk',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Atk.',
                    unlock_requirements: []
                },
                {
                    name: 'Draining Kiss',
                    type: 'Fairy',
                    category: 'Special',
                    power: { min_power: 46, max_power: 55 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Restores the user’s HP based on amount of damage dealt to the target.',
                    unlock_requirements: []
                },
                {
                    name: 'Not So Delicate!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Def and Speed.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Fashionista Dazzling Gleam',
                type: ' Fairy',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                {
                    name: 'HP Advantage 4',
                    description: 'The more HP the user has remaining, the more it powers up moves.'
                }
            ]
        }
        ,
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
                    attack: 320,
                    bulk: 453,
                    defense: 85,
                    hp: 775,
                    speed: 143,
                    sp_atk: 135,
                    sp_def: 87
                }
            },
            moves: [
                {
                    name: 'Flame Charge',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 30, max_power: 36 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 123, max_power: 147 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Removes the frozen condition from the user. The user also takes 25% of the damage it dealt to the target. Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'Try and Stop Us!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 213,
                    bulk: 467,
                    defense: 136,
                    hp: 481,
                    speed: 354,
                    sp_atk: 138,
                    sp_def: 157
                }
            },
            moves: [
                {
                    name: 'Zing Zap',
                    type: 'Electric',
                    category: 'Physical',
                    power: { min_power: 42, max_power: 50 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 20, max_power: 24 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Leaves the target paralyzed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'The Power of Science!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 178,
                    bulk: 531,
                    defense: 163,
                    hp: 566,
                    speed: 312,
                    sp_atk: 174,
                    sp_def: 163
                }
            },
            moves: [
                {
                    name: 'Flame Charge',
                    type: 'Fire',
                    category: 'Physical',
                    power: { min_power: 30, max_power: 36 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 47, max_power: 56 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Haste', description: 'Speed cannot be lowered.' } ]
        }
        ,
        {
            name: 'Torkoal',
            type1: 'Fire',
            type2: '',
            weakness: 'Water',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0324_00_cotoise_256.ktx.png',
            stats: {
                base: { attack: 7, defense: 8, hp: 70, speed: 9, sp_atk: 7, sp_def: 8 },
                max: {
                    attack: 79,
                    bulk: 528,
                    defense: 194,
                    hp: 448,
                    speed: 190,
                    sp_atk: 207,
                    sp_def: 172
                }
            },
            moves: [
                {
                    name: 'Ember',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 17, max_power: 20 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Leaves the target burned.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Too Hot to Handle!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is burned.'
            },
            passives: [ { name: 'Impervious', description: 'Stats cannot be lowered.' } ]
        }
        ,
        {
            name: 'Totodile',
            type1: 'Water',
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
                    attack: 223,
                    bulk: 441,
                    defense: 120,
                    hp: 586,
                    speed: 266,
                    sp_atk: 102,
                    sp_def: 108
                }
            },
            moves: [
                {
                    name: 'Waterfall',
                    type: 'Water',
                    category: 'Physical',
                    power: { min_power: 45, max_power: 54 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 167, max_power: 200 },
                    accuracy: 75,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'No additional effect.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Pick Up the Pace!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 389,
                    bulk: 496,
                    defense: 156,
                    hp: 512,
                    speed: 236,
                    sp_atk: 142,
                    sp_def: 154
                }
            },
            moves: [
                {
                    name: 'Peck',
                    type: 'Flying',
                    category: 'Physical',
                    power: { min_power: 20, max_power: 24 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 75, max_power: 90 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'The user gets ready to counterattack. Using this move again will cause the user to attack. No other actions can be taken while ready to counterattack. The user will attack if attacked with a move while it is ready to counterattack. Leaves opponents burned when they use physical moves to attack the user while it is ready to counterattack.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Second Wind!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [ { name: 'Piercing Gaze', description: 'Moves never miss.' } ]
        }
        ,
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
                    attack: 342,
                    bulk: 451,
                    defense: 139,
                    hp: 478,
                    speed: 384,
                    sp_atk: 342,
                    sp_def: 139
                }
            },
            moves: [
                {
                    name: 'Bullet Seed',
                    type: 'Grass',
                    category: 'Physical',
                    power: { min_power: 15, max_power: 18 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                    power: { min_power: 136, max_power: 163 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Sharply lowers the user’s Sp. Atk.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'No Turning Back!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'No additional effect.'
            },
            passives: [
                { name: 'Haste', description: 'Speed cannot be lowered.' },
                {
                    name: 'Lithe',
                    description: 'Prevents the Pokémon from getting paralyzed.'
                }
            ]
        }
        ,
        {
            name: 'Typhlosion',
            type1: 'Fire',
            type2: '',
            weakness: 'Rock',
            role: 'Strike (Special)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-12/pm0157_00_bakphoon_256.ktx_.png',
            stats: {
                base: {
                    attack: 21,
                    defense: 15,
                    hp: 125,
                    speed: 31,
                    sp_atk: 29,
                    sp_def: 16
                },
                max: {
                    attack: 131,
                    bulk: 475,
                    defense: 134,
                    hp: 565,
                    speed: 357,
                    sp_atk: 274,
                    sp_def: 136
                }
            },
            moves: [
                {
                    name: 'Flamethrower',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Has a very small chance of leaving the target burned.',
                    unlock_requirements: []
                },
                {
                    name: 'X Sp. Atk',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Sp. Atk.',
                    unlock_requirements: []
                },
                {
                    name: 'Eruption',
                    type: 'Fire',
                    category: 'Special',
                    power: { min_power: 135, max_power: 162 },
                    accuracy: 100,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'The lower the user’s HP is, the lower the power of this move becomes.',
                    unlock_requirements: []
                },
                {
                    name: 'Stoke the Fire!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Restores a bit of the user’s HP. Raises the user’s Speed and evasiveness.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Fierce Flames Eruption',
                type: ' Fire',
                category: 'Special',
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Tyranitar',
            type1: 'Rock',
            type2: '',
            weakness: 'Fighting',
            role: 'Strike (Physical)',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0248_00_bangiras_256.ktx.png',
            stats: {
                base: { attack: 11, defense: 6, hp: 67, speed: 7, sp_atk: 10, sp_def: 4 },
                max: {
                    attack: 247,
                    bulk: 428,
                    defense: 171,
                    hp: 493,
                    speed: 133,
                    sp_atk: 119,
                    sp_def: 78
                }
            },
            moves: [
                {
                    name: 'Rock Tomb',
                    type: 'Rock',
                    category: 'Physical',
                    power: { min_power: 39, max_power: 46 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 105, max_power: 126 },
                    accuracy: 90,
                    target: 'All opponents',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of making the target flinch.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Rock-Solid Finisher!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 250, max_power: 300 },
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
        }
        ,
        {
            name: 'Victreebel',
            type1: 'Grass',
            type2: '',
            weakness: 'Ice',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/pm0071_00_utsubot_256.ktx_.png',
            stats: {
                base: {
                    attack: 15,
                    defense: 12,
                    hp: 107,
                    speed: 20,
                    sp_atk: 13,
                    sp_def: 14
                },
                max: {
                    attack: 228,
                    bulk: 434,
                    defense: 124,
                    hp: 476,
                    speed: 250,
                    sp_atk: 156,
                    sp_def: 137
                }
            },
            moves: [
                {
                    name: 'Bullet Seed',
                    type: 'Grass',
                    category: 'Physical',
                    power: { min_power: 15, max_power: 18 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 75,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Puts the target to sleep.',
                    unlock_requirements: []
                },
                {
                    name: 'Not Too Late to Bloom!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'Sharply raises the user’s Attack. Makes the user gradually heal itself.',
                    unlock_requirements: []
                }
            ],
            syncMove: {
                name: 'Old Growth Razor Leaf',
                type: '  Grass',
                category: 'Physical',
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is asleep.'
            },
            passives: [
                {
                    name: 'Defense Crush 2',
                    description: 'Occasionally lowers the target’s Defense when an attack against it is successful.'
                }
            ]
        }
        ,
        {
            name: 'Vileplume',
            type1: 'Grass',
            type2: '',
            weakness: 'Fire',
            role: 'Tech',
            image: '/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2019-08/pm0045_01_ruffresia_256.ktx.png',
            stats: {
                base: { attack: 7, defense: 7, hp: 85, speed: 9, sp_atk: 7, sp_def: 8 },
                max: {
                    attack: 47,
                    bulk: 583,
                    defense: 137,
                    hp: 596,
                    speed: 190,
                    sp_atk: 191,
                    sp_def: 230
                }
            },
            moves: [
                {
                    name: 'Energy Ball',
                    type: 'Grass',
                    category: 'Special',
                    power: { min_power: 49, max_power: 58 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 90,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Leaves the target paralyzed.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Pour It On!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is paralyzed.'
            },
            passives: [ { name: 'Piercing Gaze', description: 'Moves never miss.' } ]
        }
        ,
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
                    attack: 138,
                    bulk: 432,
                    defense: 135,
                    hp: 446,
                    speed: 400,
                    sp_atk: 188,
                    sp_def: 135
                }
            },
            moves: [
                {
                    name: 'Thunderbolt',
                    type: 'Electric',
                    category: 'Special',
                    power: { min_power: 47, max_power: 56 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Sharply lowers the target’s Sp. Atk.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'A Surge of Power!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 207,
                    bulk: 423,
                    defense: 122,
                    hp: 461,
                    speed: 230,
                    sp_atk: 153,
                    sp_def: 134
                }
            },
            moves: [
                {
                    name: 'Bullet Seed',
                    type: 'Grass',
                    category: 'Physical',
                    power: { min_power: 15, max_power: 18 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 75,
                    target: 'An opponent',
                    cost: 2,
                    uses: null,
                    effect: 'Puts the target to sleep.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Not Too Late to Bloom!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
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
                    attack: 297,
                    bulk: 438,
                    defense: 154,
                    hp: 456,
                    speed: 345,
                    sp_atk: 115,
                    sp_def: 119
                }
            },
            moves: [
                {
                    name: 'Poison Tail',
                    type: 'Poison',
                    category: 'Physical',
                    power: { min_power: 38, max_power: 45 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 92, max_power: 110 },
                    accuracy: 100,
                    target: 'An opponent',
                    cost: 3,
                    uses: null,
                    effect: 'Has a moderate chance of leaving the target poisoned.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Time to Rock!',
                    type: '',
                    category: 'Status Effect',
                    power: { min_power: 0, max_power: 0 },
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
                power: { min_power: 200, max_power: 240 },
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
        }
        ,
        {
            name: 'Xatu',
            type1: 'Psychic',
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
                    attack: 175,
                    bulk: 559,
                    defense: 196,
                    hp: 461,
                    speed: 355,
                    sp_atk: 234,
                    sp_def: 196
                }
            },
            moves: [
                {
                    name: 'Stored Power',
                    type: 'Psychic',
                    category: 'Special',
                    power: { min_power: 13, max_power: 15 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
                    target: 'Self',
                    cost: '',
                    uses: 2,
                    effect: 'If any of the target’s stats have been raised, the user’s same stats are raised by double that amount.',
                    unlock_requirements: [ 'Training Machine x5' ]
                },
                {
                    name: 'Air Slash',
                    type: 'Flying',
                    category: 'Special',
                    power: { min_power: 45, max_power: 54 },
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
                power: { min_power: 200, max_power: 240 },
                target: 'An opponent',
                effect_tag: '-',
                description: 'Its power increases if the target is confused.'
            },
            passives: [ { name: 'Impervious', description: 'Stats cannot be lowered.' } ]
        }
        ,
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
                    attack: 306,
                    bulk: 492,
                    defense: 103,
                    hp: 788,
                    speed: 329,
                    sp_atk: 169,
                    sp_def: 103
                }
            },
            moves: [
                {
                    name: 'Spark',
                    type: 'Electric',
                    category: 'Physical',
                    power: { min_power: 42, max_power: 50 },
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
                    power: { min_power: 0, max_power: 0 },
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
                    power: { min_power: 125, max_power: 150 },
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
                    power: { min_power: 0, max_power: 0 },
                    accuracy: 0,
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
                power: { min_power: 250, max_power: 300 },
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
