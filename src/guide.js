import React from 'react';
import {
    Button,
    Card,
    CardBody, CardFooter,
    CardHeader, CardImg,
    CardTitle,
    Col,
    Container,
    ListGroup,
    ListGroupItem,
    Row
} from "shards-react";
import {guides} from './guidesData';
import Lance from './assets/bannerImages/lance.jpg';
import Cynthia from './assets/bannerImages/cynthia.jpg';
import Grimsley from './assets/bannerImages/grimsley.png';
import Olivia from './assets/rolesIcons/olivia.png';
import Phoebe from './assets/rolesIcons/phoebe.png';
import Brendan from './assets/rolesIcons/brenden.png';
import Hilbert from './assets/rolesIcons/hilbert.png';
import Blue from './assets/rolesIcons/blue.png';
import Karen from './assets/rolesIcons/karen.png';
import Kris from './assets/rolesIcons/kriskross.png';
import Will from './assets/rolesIcons/will.png';
import support from './assets/rolesIcons/support.jpg';
import tech from './assets/rolesIcons/tech.jpg';
import strikerPhys from './assets/rolesIcons/strikerPHY.jpg';
import strikerSpec from './assets/rolesIcons/strikerSPE.png';
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
            <h4>Current Relevant Banners</h4>
            <div className={'divider'}/>
            <Row style={{marginBottom: "8px"}}>
                <Col>
                    <Card>
                        <CardHeader>
                            <strong>Cynthia Spotlight Scout</strong>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Score:</strong>
                                        </TableCell>
                                        <TableCell>Great</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Time:</strong>
                                        </TableCell>
                                        <TableCell>1/1/2020 - 1/22/2020</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Notes:</strong>
                                        </TableCell>
                                        <TableCell>Doesn't include Lance. Does include Grimsley.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                        <CardImg src={Cynthia} className={'BannerImage'}/>
                        <CardFooter/>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardHeader>
                            <strong>Lance Spotlight Scout</strong>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Score:</strong>
                                        </TableCell>
                                        <TableCell>Average</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Time:</strong>
                                        </TableCell>
                                        <TableCell>12/26/2019 - 1/22/20</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Notes:</strong>
                                        </TableCell>
                                        <TableCell>Doesn't include Cynthia. Does include Grimsley.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                        <CardImg src={Lance} className={'BannerImage'}/>
                        <CardFooter/>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardHeader>
                            <strong>Grimsley Spotlight Scout</strong>
                        </CardHeader>
                        <CardBody>
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Score:</strong>
                                        </TableCell>
                                        <TableCell>Bad</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Time:</strong>
                                        </TableCell>
                                        <TableCell>1/1/2020 - 1/8/20</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <strong>Notes:</strong>
                                        </TableCell>
                                        <TableCell>Does not include Lance or Cynthia.</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardBody>
                        <CardImg src={Grimsley} className={'BannerImage'}/>
                        <CardFooter/>
                    </Card>
                </Col>
            </Row>
            <h4>Units To Look Out For</h4>
            <div className={'divider'}/>
            <Container>
                <Row>
                    <Col>
                        <div className={'Border'}>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableCell scope="col" border="bottom">
                                            Primary Targets
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
                                    <TableRow>
                                        <TableCell scope="row">
                                            <a href={"#/pm/pair/Olivia"}>
                                                <img alt={'Olivia'} src={Olivia} className={"BannerImage"}/>
                                            </a>
                                        </TableCell>
                                        <TableCell><img alt={'sphys'} src={strikerPhys}/></TableCell>
                                        <TableCell>0.61%</TableCell>
                                        <TableCell>Highest</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <a href={"#/pm/pair/Phoebe"}>
                                                <img alt={'Phoebe'} src={Phoebe} className={"BannerImage"}/>
                                            </a>
                                        </TableCell>
                                        <TableCell><img alt={'sup'} src={support}/></TableCell>
                                        <TableCell>0.61%</TableCell>
                                        <TableCell>Highest</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <a href={"#/pm/pair/Brendan"}>
                                                <img alt={'Brendan'} src={Brendan} className={"BannerImage"}/>
                                            </a>
                                        </TableCell>
                                        <TableCell><img alt={'sphys'} src={strikerPhys}/></TableCell>
                                        <TableCell>0.61%</TableCell>
                                        <TableCell>High</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </Col>
                    <Col>
                        <div className={'Border'}>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableCell scope="col" border="bottom">
                                            Secondary Targets
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
                                    <TableRow>
                                        <TableCell scope="row">
                                            <a href={"#/pm/pair/Hilbert"}>
                                                <img alt={'Hilbert'} src={Hilbert} className={"BannerImage"}/>
                                            </a>
                                        </TableCell>
                                        <TableCell><img alt={'sup'} src={support}/></TableCell>
                                        <TableCell>0.61%</TableCell>
                                        <TableCell>Great</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <a href={"#/pm/pair/Blue"}>
                                                <img alt={'Blue'} src={Blue} className={"BannerImage"}/>
                                            </a>
                                        </TableCell>
                                        <TableCell><img alt={'sspec'} src={strikerSpec}/></TableCell>
                                        <TableCell>0.61%</TableCell>
                                        <TableCell>Great</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <a href={"#/pm/pair/Karen"}>
                                                <img alt={'Karen'} src={Karen} className={"BannerImage"}/>
                                            </a>
                                        </TableCell>
                                        <TableCell><img alt={'sspec'} src={strikerSpec}/></TableCell>
                                        <TableCell>0.61%</TableCell>
                                        <TableCell>Good</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <a href={"#/pm/pair/Kris"}>
                                                <img alt={'Kris'} src={Kris} className={"BannerImage"}/>
                                            </a>
                                        </TableCell>
                                        <TableCell><img alt={'sphys'} src={strikerPhys}/></TableCell>
                                        <TableCell>0.61%</TableCell>
                                        <TableCell>Good</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell scope="row">
                                            <a href={"#/pm/pair/Will"}>
                                                <img alt={'Will'} src={Will} className={"BannerImage"}/>
                                            </a>
                                        </TableCell>
                                        <TableCell><img alt={'tech'} src={tech}/></TableCell>
                                        <TableCell>1.11</TableCell>
                                        <TableCell>Good</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}
