import React from 'react';
import {Button, Card, CardBody, CardColumns, CardHeader, CardImg, Col, Container, Row} from "shards-react";
import {Helmet} from "react-helmet";
import {dragons} from './data/dragons';

export default function DragonList() {
    return (
        <Container>
            <Helmet>
                <title>{"Dragalia Dragons | Antnee.net"}</title>
            </Helmet>
            <Col>
                <h3>{'Dragalia | Dragons'}</h3>
                <div className={'divider'}/>
                <Listing units={dragons}/>
            </Col>
        </Container>
    )
}

function Listing(props) {
    const units = props.units;
    return (
        <CardColumns>
            {units.map((unit) => {
                return (
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col xs="10" sm="10">
                                    <strong>
                                        {unit.name}
                                    </strong>
                                </Col>
                                <Col xs="1" sm="1">
                                    <Button size={"sm"} outline pill style={{float: "right"}}
                                            href={"#/drag/unit/" + unit.name.replace(" ", "_").replace('\'', '%27')}>+</Button>
                                </Col>
                            </Row>
                        </CardHeader>
                        <CardBody className={"CardImageContainer"}>
                            <CardImg alt={unit.name} src={unit.image} className={"CardImage"}/>
                        </CardBody>
                    </Card>
                )
            })}
        </CardColumns>
    )
}
