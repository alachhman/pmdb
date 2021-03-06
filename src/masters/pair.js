import React from 'react';
import {getPKMNIcon} from "./pokedex";
import {Col, Container, Row} from "shards-react";
import {Box, DataTable, Meter, Tab, Table, TableBody, TableCell, TableHeader, TableRow, Tabs, Text} from "grommet/es6";
import {Helmet} from 'react-helmet'
import pkmnList from './pokemon';
import trainers from './trainers';

export default function Info() {
    let unit = "";
    trainers.units.forEach((entry) => {
        if (entry.name.toLowerCase() === document.URL
            .toString()
            .split("/")[6]
            .replace("_", " ")) {
            unit = entry;
        }
    });
    return (
        <Container>
            <Helmet>
                <title>{unit.name + " | Antnee.net"}</title>
            </Helmet>
            <Col>
                <h1>{unit.name}</h1>
                <TrainerInfo unit={unit}/>
                <div className={"divider"}/>
                <PkmnLevelInfo pkmn={unit.pokemon_list}/>
            </Col>
        </Container>
    )
}

function TrainerInfo(props) {
    const trainer = props.unit;
    return (
        <div>
            <Row>
                <Col>
                    <div className={"ImageContainer"}>
                        <img
                            className={"image"}
                            height={"360"}
                            width={"auto"}
                            src={
                                (trainer.name.includes("Christmas"))
                                    ? ((trainer.name.includes('Rosa'))
                                    ? 'https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/styles/300h/public/2019-11/Christmas%20Rosa.png?itok=9uO9ketF'
                                    : 'https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/styles/300h/public/2019-11/Siebold.png?itok=LEizSANS')
                                    : 'https://www.serebii.net/pokemonmasters/syncpairs/' + trainer.name.replace("Synga Suit ", "").replace('Player', 'maincharacter').toLowerCase().replace(" ", "") + '.png'
                            }
                            alt={'trainer'}
                        />
                    </div>
                </Col>
                <Col>
                    <Container className={"InfoTable"}>
                        <DataTable
                            columns={[
                                {
                                    property: "rarity",
                                    header: <Text>Rarity</Text>,
                                    primary: false,
                                    render: datum => (
                                        <Col>
                                            <strong>
                                                {datum.rarity}
                                            </strong>
                                            <img src={process.env.PUBLIC_URL + '/assets/star.png'}
                                                 height={16}
                                                 width={16}
                                            />
                                        </Col>
                                    )
                                },
                                {
                                    property: "recruit_method",
                                    header: <Text>Obtain By</Text>
                                }
                            ]}
                            data={[
                                {
                                    rarity: trainer.base_potential,
                                    recruit_method: trainer.recruit_method
                                }
                            ]}
                        />
                        <Text>

                            <div style={{marginBottom: "8px"}}>
                                {trainer.info}
                            </div>
                        </Text>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

function PkmnLevelInfo(props) {
    const pkmn = props.pkmn;
    const ownedPkmn = [];
    pkmn.forEach(function (entry) {
        for (const mon of pkmnList.pokemon) {
            if (entry.split("& ")[1].toUpperCase() === mon.name.toUpperCase()) {
                ownedPkmn.push(mon);
            }
        }
    });
    const returnValues = ownedPkmn.map((pkmn) => {
        const icon = getPKMNIcon(pkmn.name);
        return (
            <div>
                <div style={{marginBottom: "8px", marginTop: "8px"}}>
                    <strong>
                        <h3>
                            <span>
                                <img
                                    src={icon}
                                    alt={"pkmnIcon"}
                                />
                            </span>
                            {"  " + pkmn.name}
                        </h3>
                    </strong>
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
                    <Row>
                        <Col>
                            <PassivesBlock passives={pkmn.passives}/>
                        </Col>
                    </Row>
                </div>
                <br/>
                <div className={"divider"}/>
            </div>
        )
    });
    return (
        <div className={"pokemonList"} style={{listStyleType: "none"}}>{returnValues}</div>
    )
}

function PassivesBlock(props) {
    const passives = props.passives;
    return (
        <Container className={"PassiveTable"}>
            <DataTable
                columns={[
                    {
                        property: "name",
                        header: <Text>Passives</Text>,
                        primary: true
                    },
                    {
                        property: "description"
                    }
                ]}
                data={passives}
            />
        </Container>
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
                            Role
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Row>
                                    <Col>
                                        <img
                                            src={process.env.PUBLIC_URL + '/assets/' + pkmn.type1.toLowerCase() + '.png'}
                                            alt={"type1"}
                                            height={32}
                                            width={32}
                                        />
                                        <img
                                            src={process.env.PUBLIC_URL + '/assets/' + pkmn.type1.toLowerCase() + '.png'}
                                            alt={"type2"}
                                            height={(pkmn.type2 !== "") ? 32 : 0}
                                            width={(pkmn.type2 !== "") ? 32 : 0}
                                        />
                                    </Col>
                                </Row>
                            </TableCell>
                            <TableCell>
                                <span>
                                        <img
                                            src={process.env.PUBLIC_URL + '/assets/' + pkmn.weakness.toLowerCase() + '.png'}
                                            alt={"weakness"}
                                            height={32}
                                            width={32}/>
                                </span>
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
                            Power
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            Type
                        </TableCell>
                        <TableCell scope="col" border="bottom">
                            Cat.
                        </TableCell>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                {pkmn.syncMove.name}
                            </TableCell>
                            <TableCell>
                                {pkmn.syncMove.power.min_power + "→" + pkmn.syncMove.power.max_power}
                            </TableCell>
                            <TableCell>
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/' + pkmn.syncMove.type.replace(' ', '').toLowerCase() + '.png'}
                                    alt={"syncType"}
                                    height={(pkmn.syncMove.type !== "") ? 32 : 0}
                                    width={(pkmn.syncMove.type !== "") ? 32 : 0}
                                />
                            </TableCell>
                            <TableCell>
                                <img
                                    src={process.env.PUBLIC_URL + '/assets/' + categoryToImage(pkmn.syncMove.category) + '.png'}
                                    alt={"syncCategory"}
                                    height={25}
                                    width={50}
                                />
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
                            <Col>
                                <Box pad={{vertical: 'xsmall'}}>
                                    <Meter
                                        values={[{
                                            value: datum.percent.min,
                                            color: datum.percent.color
                                        }]}
                                        round={true}
                                        thickness="xsmall"
                                        size="small"
                                    />
                                </Box>
                                <Box pad={{vertical: 'xsmall'}}>
                                    <Meter
                                        values={[{
                                            value: datum.percent.max,
                                            color: datum.percent.maxColor
                                        }]}
                                        round={true}
                                        thickness="xsmall"
                                        size="small"
                                    />
                                </Box>
                            </Col>
                        ),
                    },
                ]}
                data={[
                    {
                        name: 'HP',
                        value: pkmn.stats.base.hp + "(" + pkmn.stats.max.hp + ")",
                        percent: {
                            min: pkmn.stats.base.hp / 5,
                            minColor: (pkmn.stats.base.hp >= 400) ? "status-ok" : ((pkmn.stats.base.hp <= 200) ? "status-critical" : "status-warning"),
                            max: pkmn.stats.max.hp / 5,
                            maxColor: (pkmn.stats.max.hp >= 200) ? "status-ok" : ((pkmn.stats.max.hp <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'ATK',
                        value: pkmn.stats.base.attack + "(" + pkmn.stats.max.attack + ")",
                        percent: {
                            min: pkmn.stats.base.attack / 5,
                            minColor: (pkmn.stats.base.attack >= 200) ? "status-ok" : ((pkmn.stats.base.attack <= 100) ? "status-critical" : "status-warning"),
                            max: pkmn.stats.max.attack / 5,
                            maxColor: (pkmn.stats.max.attack >= 200) ? "status-ok" : ((pkmn.stats.max.attack <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'DEF',
                        value: pkmn.stats.base.defense + "(" + pkmn.stats.max.defense + ")",
                        percent: {
                            min: pkmn.stats.base.defense / 5,
                            minColor: (pkmn.stats.base.defense >= 200) ? "status-ok" : ((pkmn.stats.base.defense <= 100) ? "status-critical" : "status-warning"),
                            max: pkmn.stats.max.defense / 5,
                            maxColor: (pkmn.stats.max.defense >= 200) ? "status-ok" : ((pkmn.stats.max.defense <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPATK',
                        value: pkmn.stats.base.sp_atk + "(" + pkmn.stats.max.sp_atk + ")",
                        percent: {
                            min: pkmn.stats.base.sp_atk / 5,
                            minColor: (pkmn.stats.base.sp_atk >= 200) ? "status-ok" : ((pkmn.stats.base.sp_atk <= 100) ? "status-critical" : "status-warning"),
                            max: pkmn.stats.max.sp_atk / 5,
                            maxColor: (pkmn.stats.max.sp_atk >= 200) ? "status-ok" : ((pkmn.stats.max.sp_atk <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPDEF',
                        value: pkmn.stats.base.sp_def + "(" + pkmn.stats.max.sp_def + ")",
                        percent: {
                            min: pkmn.stats.base.sp_def / 5,
                            minColor: (pkmn.stats.base.sp_def >= 200) ? "status-ok" : ((pkmn.stats.base.sp_def <= 100) ? "status-critical" : "status-warning"),
                            max: pkmn.stats.max.sp_def / 5,
                            maxColor: (pkmn.stats.max.defense >= 200) ? "status-ok" : ((pkmn.stats.max.sp_def <= 100) ? "status-critical" : "status-warning")
                        }
                    },
                    {
                        name: 'SPD',
                        value: pkmn.stats.base.speed + "(" + pkmn.stats.max.speed + ")",
                        percent: {
                            min: pkmn.stats.base.speed / 5,
                            minColor: (pkmn.stats.base.speed >= 200) ? "status-ok" : ((pkmn.stats.base.speed <= 100) ? "status-critical" : "status-warning"),
                            max: pkmn.stats.max.speed / 5,
                            maxColor: (pkmn.stats.max.speed >= 200) ? "status-ok" : ((pkmn.stats.max.speed <= 100) ? "status-critical" : "status-warning")
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
                            <strong><img
                                src={process.env.PUBLIC_URL + '/assets/' + categoryToImage(move.category) + '.png'}
                                alt={"category"}/>{"  " + move.name}:</strong>
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
                                <TableCell>
                                    {(move.power.max_power > 0) ? (move.power.min_power + "→" + move.power.max_power) : "-"}
                                </TableCell>
                                <TableCell>
                                    {(move.accuracy > 0) ? move.accuracy : "-"}
                                </TableCell>
                                <TableCell>
                                    <TypeOrNah type={move.type}/>
                                </TableCell>
                                <TableCell>
                                    {(move.cost !== '') ? (move.cost + " cost") : (move.uses + " uses")}
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <div style={{marginBottom: "8px"}}>
                        <Text>
                            <strong>Target: </strong>{move.target}
                        </Text>
                        <br/>
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

function TypeOrNah(props) {
    const type = props.type;
    if (type === "") {
        return ("-")
    } else {
        return (
            <img src={process.env.PUBLIC_URL + '/assets/' + type.toLowerCase() + '.png'}
                 alt={"type"}
                 height={32}
                 width={32}
            />
        )
    }
}


function categoryToImage(category) {
    switch (category) {
        case "Status Effect":
            return 'status';
        case "Special":
            return 'special';
        case "Physical":
            return 'physical';
        default:
            return 'status';
    }
}


