import React from 'react';
import {
    Container,
    Card,
    CardHeader,
    Button
} from "shards-react";
import trainers from './trainers';

export default function UnitList(){
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
        <div>{listItems}</div>
    )
}

function UnitDisplay(unit) {
    return (
        <div>
            <Card style={{marginBottom: "8px", marginTop: "8px"}}>
                <CardHeader>
                    <strong>
                        {unit.name}
                        <Button size={"sm"} outline pill style={{float: "right"}}
                                href={"#/masters/pair/" + unit.name.replace(" ", "_")}>+</Button>
                    </strong>
                </CardHeader>
            </Card>
        </div>
    );
}

