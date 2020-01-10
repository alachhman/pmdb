import React from 'react';
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardImg,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row
} from "shards-react";
import {guides, reRollGuideData} from './guidesData';
import {Table, TableBody, TableCell, TableHeader, TableRow} from "grommet";


export default function Guide() {
    let guide = "";
    guides.forEach((entry) => {
        if (entry.src === document.URL.toString().split("/")[6]) {
            guide = entry.title;
        }
    });
    switch (guide) {
        case "Reroll Guide":
            return (
                <RerollGuide/>
            );
        default:
            return (
                <h2 className={'Error'}>
                    404: Page Not Found
                </h2>
            )
    }
}

function RerollGuide() {
    return (
        <Container>
            <h3>Masters | Reroll Guide</h3>

            <h4>Important Notes</h4>
            <div className={'divider'}/>
            <ListGroup className={'ListGroup'}>
                <ListGroupItem>
                    Reroll: Making a new account and using your starting gems to go for your first set of
                    characters.
                </ListGroupItem>
                <ListGroupItem>
                    *A successful roll would contain 2 or more Primary targets or 1 Primary and 2 Secondary
                    Targets or 3 or more Secondary targets. 1 Striker and 1 Support is fairly necessary in the
                    roll.
                </ListGroupItem>
                <ListGroupItem>
                    *Units on here are chosen because they work in both Co-Op and Single Player as well as events.
                </ListGroupItem>
                <ListGroupItem>
                    *3 stars are easier to obtain and pointless to add since your first roll should be used on harder
                    targets. There ARE very good units that are 3-4 stars, but they shouldn't be what you're rolling for
                    necessarily.
                </ListGroupItem>
                <ListGroupItem>
                    *Banner Ratings consist of Bad, Average, and Great. (Maybe Perfect if we ever see one of
                    those)
                </ListGroupItem>
            </ListGroup>
            <BannerDisplay banners={reRollGuideData.currentRelevantBanners}/>
            <h4>Units To Look Out For</h4>
            <div className={'divider'}/>
            <Container>
                <Row>
                    <ListElems rows={reRollGuideData.primaryRolls} tableName={'Primary Targets'}/>
                    <ListElems rows={reRollGuideData.secondaryRolls} tableName={'Secondary Targets'}/>
                </Row>
            </Container>
        </Container>
    )
}


function BannerDisplay(props) {
    const banners = props.banners.map((elem) => {
        return (
            <Col>
                <Card>
                    <CardHeader>
                        <strong>{elem.banner}</strong>
                    </CardHeader>
                    <CardBody>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell scope="row">
                                        <strong>Score:</strong>
                                    </TableCell>
                                    <TableCell>{elem.score}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <strong>Time:</strong>
                                    </TableCell>
                                    <TableCell>{elem.time}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell scope="row">
                                        <strong>Notes:</strong>
                                    </TableCell>
                                    <TableCell>{elem.notes}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardBody>
                    <CardImg src={process.env.PUBLIC_URL + elem.img} className={'BannerImage'}/>
                    <CardFooter/>
                </Card>
            </Col>
        )
    });
    return (
        <div>
            <h4>Current Relevant Banners</h4>
            <div className={'divider'}/>
            <Row style={{marginBottom: "8px"}}>
                {banners}
            </Row>
        </div>
    )
}

function ListElems(props) {
    const tableName = props.tableName;
    const elems = props.rows.map((elem) => {
        return (
            <TableRow>
                <TableCell scope="row">
                    <a href={"#/pm/pair/" + elem.name}>
                        <img alt={elem.name} src={process.env.PUBLIC_URL + elem.image} className={"BannerImage"}/>
                    </a>
                </TableCell>
                <TableCell><img alt={elem.role} src={process.env.PUBLIC_URL + '/assets/rolesIcons/' + elem.role + '.jpg'}/></TableCell>
                <TableCell>{elem.rate}</TableCell>
                <TableCell>{elem.score}</TableCell>
            </TableRow>
        )
    });
    return(
        <Col>
            <div className={'Border'}>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableCell scope="col" border="bottom">
                                {tableName}
                            </TableCell>
                            <TableCell scope="col" border="bottom">
                                Role
                            </TableCell>
                            <TableCell scope="col" border="bottom">
                                Odds
                            </TableCell>
                            <TableCell scope="col" border="bottom">
                                Priority
                            </TableCell>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {elems}
                    </TableBody>
                </Table>
            </div>
        </Col>
    )
}
