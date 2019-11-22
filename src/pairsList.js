import React from 'react';
import {
    Container,
    Card,
    CardHeader,
    Button, CardImg, CardDeck, CardGroup, CardColumns, Col, Row, CardTitle
} from "shards-react";
import trainers from './trainers';
import GPressData from './GPressData';


export default function UnitList() {
    return (
        <Container>
            <h3> Masters | Sync Pairs</h3>
            <UnitDataMapping units={trainers.units}/>
        </Container>
    )
}

function UnitDataMapping(props) {
    const listItems = props.units.map((unit) => {
            return (
                UnitDisplay(unit)
            )
        }
    );
    return (
        <CardColumns>{listItems}</CardColumns>
    )
}

function UnitDisplay(unit) {
    let icon = "";
    if (unit.name.toUpperCase() === "PLAYER") {
        icon = 'https://images-ext-2.discordapp.net/external/tjpAph1skkuFCYRYKYLw3PBREDKI-ykqGp5UDeHuf9U/https/serebii.net//pokedex-sm/icon/025.png'
    }
    for (const trainer of GPressData.GpressData) {
        if (unit.name === trainer.title) {
            icon = 'https://pokemonmasters.gamepress.gg' + trainer.icon.substring(trainer.icon.indexOf('<img src="') + 10, trainer.icon.indexOf('" width'));
        }
    }

    return (
        <Card style={{marginBottom: "8px", marginTop: "8px"}}>
            <CardHeader>
                <Row>
                    <Col>
                          <img alt={"img"} src={icon}/>
                    </Col>
                    <Col>
                    <strong>
                        <CardTitle>
                            {unit.name}
                        </CardTitle>
                    </strong>
                    </Col>
                    <Col>
                        <Button size={"sm"} outline pill style={{float: "right"}}
                                href={"#/masters/pair/" + unit.name.replace(" ", "_")}>+</Button>
                    </Col>
                </Row>
            </CardHeader>
        </Card>
    );
}

