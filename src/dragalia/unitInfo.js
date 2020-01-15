import React from 'react';
import {Col, Container, Row} from "shards-react";
import {DataTable, Text} from "grommet/es6";
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
                        <Text>
                            <div className={'divider'}/>
                            <div style={{marginBottom: "10px"}}>
                                {unit.description}
                            </div>
                            <div className={'divider'}/>
                            <div style={{marginBottom: "10px"}}>
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
