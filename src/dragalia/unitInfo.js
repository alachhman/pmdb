import React from 'react';
import {Col, Container, Row} from "shards-react";
import {DataTable, Table, TableBody, TableCell, TableRow, Text} from "grommet/es6";
import {Helmet} from 'react-helmet'
import {units} from './data/units';


export default function UnitInfo() {
    let unit = "";
    units.forEach((entry) => {
        if (entry.name === document.URL.toString().split("/")[6].replace("_", " ").replace('%27', '\'')) {
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
                <h5>{unit.title}</h5>
                <div className={"divider"}/>
                <Info unit={unit}/>
                <div className={"divider"}/>
                <Container>
                    <Row>
                        <Col>
                            <AbilityDisplay unit={unit}/>
                        </Col>
                        <Col>
                            <SkillDisplay unit={unit}/>
                        </Col>
                    </Row>
                </Container>
            </Col>
        </Container>
    )
}

function Info(props) {
    const unit = props.unit;
    return (
        <div>
            <Row>
                <Col>
                    <div className={"ImageContainer"}>
                        <img
                            className={"image"}
                            height={"360"}
                            width={"auto"}
                            src={unit.image}
                            alt={unit.name}
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
                                        </Col>
                                    )
                                },
                                {
                                    property: "element",
                                    header: <Text>Element</Text>
                                },
                                {
                                    property: "weapon",
                                    header: <Text>Weapon</Text>
                                },
                                {
                                    property: "role",
                                    header: <Text>Role</Text>
                                }
                            ]}
                            data={[
                                {
                                    rarity: unit.rarity,
                                    element: unit.element,
                                    weapon: unit.weapon,
                                    role: unit.role
                                }
                            ]}
                        />
                        <div className={'divider'}/>
                        <Container style={{marginBottom: "16px"}}>
                            <Row>
                                <Col>
                                    <strong>
                                        Strength:
                                        <span style={{color: "red"}}>
                                            {" " + unit.atk}
                                        </span>
                                    </strong>
                                </Col>
                                <Col>
                                    <strong>
                                        HP:
                                        <span style={{color: "green"}}>
                                            {" " + unit.hp}
                                        </span>
                                    </strong>
                                </Col>
                            </Row>
                        </Container>
                        <Text>
                            <div className={'divider'}/>
                            <div style={{marginBottom: "13px"}}>
                                {unit.description}
                            </div>
                            <div className={'divider'}/>
                            <div style={{marginBottom: "14px"}}>
                                <strong>
                                    {'CV: ' + unit.cv[0] + ' / ' + unit.cv[1]}
                                </strong>
                            </div>
                        </Text>
                    </Container>
                </Col>
            </Row>
        </div>
    )
}

function SkillDisplay(props) {
    const unit = props.unit;
    let skillOut = [];

    unit.skills.forEach((skill) => {
        const skillLevelDisplay = skill.levels.map((level) => {
            return (
                <TableRow>
                    <TableCell>
                        <strong>
                            {level.level}
                        </strong>
                    </TableCell>
                    <TableCell>
                        <Text>
                            {level.description}
                        </Text>
                    </TableCell>
                </TableRow>
            )
        });
        let returnHTML = (
            <Container className={"InfoTable"}>
                <div style={{marginBottom: "16px", marginTop: "8px"}}>
                    <strong>
                        {skill.name}
                    </strong>
                    {" | " + skill.iframe + " i-Frames"}
                    <div>
                        {"SP: " + skill.cost}
                        {" | Regen: " + skill.regen}
                    </div>
                </div>
                <div className={'divider'}/>
                <Table>
                    <TableBody>
                        {skillLevelDisplay}
                    </TableBody>
                </Table>
            </Container>
        );
        skillOut.push(returnHTML);
    });
    return (
        <div>
            <h3>
                Skills
            </h3>
            {skillOut}
        </div>
    )
}

function AbilityDisplay(props) {
    const unit = props.unit;
    let count = 0;
    const abilitiesOut = unit.abilities.map((ability) => {
        const levels = ability.map((level) => {
            return (
                <div>
                    <Text>
                        <strong>
                            {level.name + ": "}
                        </strong>
                        {level.effect}
                    </Text>
                </div>
            )
        });
        count++;
        return (
            <Container className={"InfoTable"}>
                <div style={{marginTop: "8px"}}>
                    <strong>
                        Ability{" " + count}
                    </strong>
                </div>
                <div className={'divider'}/>
                <div style={{marginBottom: "8px"}}>
                    {levels}
                </div>
            </Container>
        )
    });
    return (
        <div>
            <h3>
                Abilities
            </h3>
            {abilitiesOut}
        </div>
    )
}



