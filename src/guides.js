import React from 'react';
import {Button, Card, CardBody, CardHeader, CardTitle, Col, Container, Row} from "shards-react";
import {guides} from './guidesData';

export default function GuideList() {
    return (
        <Container>
            <h3>Masters | Guides</h3>
            <GuideDisplay guides={guides}/>
        </Container>
    )
}

function GuideDisplay(props) {
    const guides = props.guides;
    return guides.map((guide) => {
        return (
            <Card style={{marginBottom: "8px", marginTop: "8px"}}>
                <CardHeader>
                    <Row>
                        <Col>
                            <strong>
                                <CardTitle>
                                    {guide.title}
                                </CardTitle>
                            </strong>
                        </Col>
                        <Col>
                            <Button size={"sm"} outline pill style={{float: "right"}}
                                    href={"#/pm/guide/" + guide.src}>+</Button>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    {guide.description}
                </CardBody>
            </Card>
        )
    });
}
