import React from 'react';
import {Container, CardHeader, Card, CardBody, Row, Col} from "shards-react";
import {Box, DataTable, Meter, Tab, Table, TableBody, TableCell, TableHeader, TableRow, Tabs, Text} from "grommet/es6";

const units = [
    {
        name: "Player",
        pkmn: [
            "pikachu",
            "torchic"
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
        name: "pikachu",
        type: "thunder / fire",
        weakness: "ground",
        rarity: 3,
        stats: [80, 150, 30, 20, 100, 90],
        moves: [
            {
                name: "move1 this is random text that should break the line limit",
                pow: 40,
                acc: 30,
                type: "status",
                cost: 2,
                effect: "lorem ipsum"
            },
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
            effect: "lorem ipsum sync description goes here"
        }
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
    let ownedPkmn = [];
    units.forEach((entry) => {
        if (entry.name === document.URL.toString().split("/")[6]) {
            unit = entry;
        }
    });
    return (
        <Container>
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
                                {pkmn.type}
                            </TableCell>
                            <TableCell>
                                {pkmn.weakness}
                            </TableCell>
                            <TableCell>
                                {pkmn.rarity}
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
                                {pkmn.sync.name}
                            </TableCell>
                            <TableCell>
                                {pkmn.sync.type}
                            </TableCell>
                            <TableCell>
                                {pkmn.sync.pow}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Text>
                    <blockquote>
                        {pkmn.sync.effect}
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
                        value: pkmn.stats[0],
                        percent: {
                            stat: pkmn.stats[0] / 2,
                            color: (pkmn.stats[0] >= 150) ? "status-ok" : ((pkmn.stats[0] <= 45) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'ATK',
                        value: pkmn.stats[1],
                        percent: {
                            stat: pkmn.stats[1] / 2,
                            color: (pkmn.stats[1] >= 150) ? "status-ok" : ((pkmn.stats[1] <= 45) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'DEF',
                        value: pkmn.stats[2],
                        percent: {
                            stat: pkmn.stats[2] / 2,
                            color: (pkmn.stats[2] >= 150) ? "status-ok" : ((pkmn.stats[2] <= 45) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPATK',
                        value: pkmn.stats[3],
                        percent: {
                            stat: pkmn.stats[3] / 2,
                            color: (pkmn.stats[3] >= 150) ? "status-ok" : ((pkmn.stats[3] <= 45) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPDEF',
                        value: pkmn.stats[4],
                        percent: {
                            stat: pkmn.stats[4] / 2,
                            color: (pkmn.stats[4] >= 150) ? "status-ok" : ((pkmn.stats[4] <= 45) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPD',
                        value: pkmn.stats[5],
                        percent: {
                            stat: pkmn.stats[5] / 2,
                            color: (pkmn.stats[5] >= 150) ? "status-ok" : ((pkmn.stats[5] <= 45) ? "status-critical" : "status-warning")
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
                                <TableCell>{move.pow}</TableCell>
                                <TableCell>{move.acc}</TableCell>
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
