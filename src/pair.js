import React from 'react';
import {pokedexLookup, getPKMNIcon} from "./pokedex";
import {Container, Row, Col} from "shards-react";
import {Box, DataTable, Meter, Tab, Table, TableBody, TableCell, TableHeader, TableRow, Tabs, Text} from "grommet/es6";
import {Helmet} from 'react-helmet'
import pkmnList from './pokemon';
import trainers from './trainers';

export default function Info() {
    let unit = "";
    trainers.units.forEach((entry) => {
        if (entry.name.replace("_", "") === document.URL.toString().split("/")[6]) {
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

function TrainerInfo(props){
    const trainer = props.unit;
    return(
        <div>
            <Row>
                <Col>
                    <div className={"ImageContainer"}>
                        <img
                            className={"image"}
                            height={"360"}
                            width={"auto"}
                            src={'https://www.serebii.net/pokemonmasters/syncpairs/' + trainer.name.replace("Synga Suit ", "").toLowerCase().replace(" ", "") + '.png'}
                            alt={'trainer'}
                        />
                    </div>
                </Col>
                <Col>
                    <Container className={"InfoTable"}>
                        <Text>
                            <DataTable
                                columns={[
                                    {
                                        property: "rarity",
                                        header: <Text>Rarity</Text>,
                                        primary: false
                                    }
                                ]}
                                data={[
                                    {rarity: trainer.base_potential}
                                ]}
                            />

                            {trainer.info}
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
        console.log(icon);
        return (
            <div>
                <div style={{marginBottom: "8px", marginTop: "8px"}}>
                    <strong>
                        <h4>
                            <span>
                                <img
                                    src={icon}
                                    alt={"pkmnIcon"}
                                />
                            </span>
                            {"  " + pkmn.name}
                        </h4>
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

function PassivesBlock(props){
    const passives = props.passives;
    return(
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
