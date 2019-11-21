import React from 'react';
import {Container, CardHeader, Card, CardBody, Row, Col} from "shards-react";
import {Box, DataTable, Meter, Tab, Table, TableBody, TableCell, TableHeader, TableRow, Tabs, Text} from "grommet/es6";
import {Helmet} from 'react-helmet'

const units = [
    {
        name: "Player",
        pkmn: [
            "Pikachu"
        ]
    },
    {
        name: "Rosa",
        pkmn: [
            "snivy"
        ]
    },
];

const pkmnList = [
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
                power: {
                    min_power: 17,
                    max_power: 20
                },
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
                power: {
                    min_power: 0,
                    max_power: 0
                },
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
                power: {
                    min_power: 47,
                    max_power: 56
                },
                accuracy: 100,
                target: 'An opponent',
                cost: 2,
                uses: null,
                effect: 'Has a very small chance of leaving the target paralyzed.',
                unlock_requirements: [
                    'Training Machine x5'
                ]
            },
            {
                name: 'Jump Start!',
                type: '',
                category: 'Status Effect',
                power: {
                    min_power: 0,
                    max_power: 0
                },
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
            power: {
                min_power: 250,
                max_power: 300
            },
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
        name: "torchic",
        type: "thunder",
        weakness: "ground",
        rarity: 3,
        stats: [60, 50, 180, 10, 30, 110],
        moves: [
            {name: "move1", pow: 40, acc: 30, type: "status", cost: 2, effect: "lorem ipsum"},
            {name: "move2", pow: 40, acc: 30, type: "status", cost: 2, effect: "lorem ipsum"},
            {name: "move3", pow: 40, acc: 30, type: "status", cost: 2, effect: "lorem ipsum"},
            {name: "move4", pow: 40, acc: 30, type: "status", cost: 2, effect: "lorem ipsum"},
        ],
        passives: [
            {
                name: "passive1",
                desc: "passive 1 desc"
            },
            {
                name: "passive2",
                desc: "passive 2 desc"
            }
        ],
        sync: {
            name: "syncmove",
            pow: 200,
            type: "type",
            effect: "lorem ipsum"
        }
    },
    {
        name: "snivy",
        type: "thunder",
        weakness: "ground",
        rarity: 3,
        stats: [40, 50, 140, 60, 20, 80],
        moves: [
            {name: "move1", pow: 40, acc: 30, type: "status", cost: 2, effect: "lorem ipsum"},
            {name: "move2", pow: 40, acc: 30, type: "status", cost: 2, effect: "lorem ipsum"},
            {name: "move3", pow: 40, acc: 30, type: "status", cost: 2, effect: "lorem ipsum"},
            {name: "move4", pow: 40, acc: 30, type: "status", cost: 2, effect: "lorem ipsum"},
        ],
        passives: [
            {
                name: "passive1",
                desc: "passive 1 desc"
            },
            {
                name: "passive2",
                desc: "passive 2 desc"
            }
        ],
        sync: {
            name: "syncmove",
            pow: 200,
            type: "type",
            effect: "lorem ipsum"
        }
    }
];

export default function Info() {
    let unit = "";
    units.forEach((entry) => {
        if (entry.name === document.URL.toString().split("/")[6]) {
            unit = entry;
        }
    });
    return (
        <Container>
            <Helmet>
                <title>{unit.name + " | Antnee.net"}</title>
            </Helmet>
            <Col>
                <h2>{unit.name}</h2>
                <PkmnLevelInfo pkmn={unit.pkmn}/>
            </Col>
        </Container>
    )
}

function PkmnLevelInfo(props) {
    const pkmn = props.pkmn;
    const ownedPkmn = [];
    pkmn.forEach(function (entry) {
        for (const mon of pkmnList) {
            if (entry.toUpperCase() === mon.name.toUpperCase()) {
                ownedPkmn.push(mon);
            }
        }
    });
    const returnValues = ownedPkmn.map((pkmn) => {
        return (
            <div>
                <Card style={{marginBottom: "8px", marginTop: "8px"}}>
                    <CardHeader><strong>
                        <h4>{pkmn.name}</h4>
                    </strong></CardHeader>
                    <CardBody>
                        <Row>
                            <Col md>
                                <StatBlock pkmn={pkmn}/>
                            </Col>
                            <Col md>
                                <InfoBlock pkmn={pkmn}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <MoveBlock pkmn={pkmn}/>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <br/>
            </div>
        )
    });
    return (
        <div className={"pokemonList"} style={{listStyleType: "none"}}>{returnValues}</div>
    )
}

function InfoBlock(props) {
    const pkmn = props.pkmn;
    return (
        <div>
            <Container className={"InfoTable"}>
                <Table>
                    <TableHeader>
                        <TableCell scope="col" border="bottom">
                            Type
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            Weakness
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            Rarity
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Col>
                                    <Row>
                                        {pkmn.type1}
                                    </Row>
                                    <Row>
                                        {pkmn.type2}
                                    </Row>
                                </Col>
                            </TableCell>
                            <TableCell>
                                {pkmn.weakness}
                            </TableCell>
                            <TableCell>
                                {pkmn.role.split(" ")[0]}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Container>
            <Container className={"SyncTable"}>
                <Table>
                    <TableHeader>
                        <TableCell scope="col" border="bottom">
                            Sync
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            Type
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            Power
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {pkmn.syncMove.name}
                            </TableCell>
                            <TableCell>
                                {pkmn.syncMove.type}
                            </TableCell>
                            <TableCell>
                                {pkmn.syncMove.power.max_power}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Text>
                    <blockquote>
                        {pkmn.syncMove.description}
                    </blockquote>
                </Text>
            </Container>
        </div>
    )
}

function StatBlock(props) {
    const pkmn = props.pkmn;
    return (
        <Container className={"StatsTable"}>
            <DataTable
                columns={[
                    {
                        property: 'name',
                        header: <Text>Stats</Text>,
                        primary: true,
                    },
                    {
                        property: 'value'
                    },
                    {
                        property: 'percent',
                        header: '',
                        render: datum => (
                            <Box pad={{vertical: 'xsmall'}}>
                                <Meter
                                    values={[{
                                        value: datum.percent.stat,
                                        color: datum.percent.color
                                    }]}
                                    round={true}
                                    thickness="small"
                                    size="small"
                                />
                            </Box>
                        ),
                    },
                ]}
                data={[
                    {
                        name: 'HP',
                        value: pkmn.stats.max.hp,
                        percent: {
                            stat: pkmn.stats.max.hp / 5,
                            color: (pkmn.stats.max.hp >= 200) ? "status-ok" : ((pkmn.stats.hp <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'ATK',
                        value: pkmn.stats.max.attack,
                        percent: {
                            stat: pkmn.stats.max.attack / 5,
                            color: (pkmn.stats.max.attack >= 200) ? "status-ok" : ((pkmn.stats.attack <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'DEF',
                        value: pkmn.stats.max.defense,
                        percent: {
                            stat: pkmn.stats.max.defense / 5,
                            color: (pkmn.stats.max.defense >= 200) ? "status-ok" : ((pkmn.stats.defense <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPATK',
                        value: pkmn.stats.max.sp_atk,
                        percent: {
                            stat: pkmn.stats.max.sp_atk / 5,
                            color: (pkmn.stats.max.sp_atk >= 200) ? "status-ok" : ((pkmn.stats.sp_atk <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPDEF',
                        value: pkmn.stats.max.sp_def,
                        percent: {
                            stat: pkmn.stats.max.sp_def / 5,
                            color: (pkmn.stats.max.defense >= 200) ? "status-ok" : ((pkmn.stats.sp_def <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPD',
                        value: pkmn.stats.max.speed,
                        percent: {
                            stat: pkmn.stats.max.speed / 5,
                            color: (pkmn.stats.max.speed >= 200) ? "status-ok" : ((pkmn.stats.speed <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                ]}
            />
        </Container>
    )
}

function MoveBlock(props) {
    const moves = props.pkmn.moves;
    let count = 0;
    const moveDatums = moves.map((move) => {
        count++;
        return (
            <Tab title={"M" + count}>
                <Container className={"MovesTable"}>
                    <div style={{marginTop: "12px", marginBottom: "8px"}}>
                        <Text>
                            <strong>{move.name}:</strong>
                        </Text>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableCell>POW</TableCell>
                                <TableCell>ACC</TableCell>
                                <TableCell>Type</TableCell>
                                <TableCell>Uses/Cost</TableCell>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>{move.power.max_power}</TableCell>
                                <TableCell>{move.accuracy}</TableCell>
                                <TableCell>{move.type}</TableCell>
                                <TableCell>{move.cost}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div style={{marginBottom: "8px"}}>
                        <Text>
                            <strong>Description: </strong>{move.effect}
                        </Text>
                    </div>

                </Container>
            </Tab>
        )
    });
    return (
        <Tabs>
            {moveDatums}
        </Tabs>
    )
}
