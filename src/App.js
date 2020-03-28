import React from 'react';
import {
    Col,
    Collapse,
    Container,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    Row
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./App.css";
import MastersUnitList from "./masters/pairsList";
import {HashRouter, Route, Switch,} from "react-router-dom";
import Info from "./masters/pair";
import Guides from './masters/guides'
import Guide from './masters/guide';
import DragUnitList from './dragalia/unitList';
import DragUnitInfo from './dragalia/unitInfo';
import DragDragList from './dragalia/dragonList'
import {Helmet} from "react-helmet";


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.toggleMastersDropdown = this.toggleMastersDropdown.bind(this);
        this.toggleDragDropdown = this.toggleDragDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            mastersDropdownOpen: false,
            dragDropdownOpen: false,
            CollapseOpen: false,
        };
    }

    toggleDragDropdown() {
        this.setState({
            ...this.state,
            ...{
                dragDropdownOpen: !this.state.dragDropdownOpen
            }
        });
    }

    toggleMastersDropdown() {
        this.setState({
            ...this.state,
            ...{
                mastersDropdownOpen: !this.state.mastersDropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                CollapseOpen: !this.state.CollapseOpen
            }
        });
    }

    render() {
        return (
            <div id={'page-container'}>
                <div id={'content-wrap'}>
                    <HashRouter basename={'/'}>
                        <Navbar type="dark" theme="primary" expand="md">
                            <NavbarBrand href="/">Home</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar}/>
                            <Collapse open={this.state.CollapseOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <Dropdown
                                            open={this.state.mastersDropdownOpen}
                                            toggle={this.toggleMastersDropdown}
                                        >
                                            <DropdownToggle nav caret>
                                                Pokemon Masters
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href={"#/pm/pairs"}>Sync Pairs</DropdownItem>
                                                <DropdownItem href={"#/pm/gear"}>Gear</DropdownItem>
                                                <DropdownItem href={"#/pm/guides"}>Guides</DropdownItem>
                                                <DropdownItem href={"#/pm/tier-list"}>Tier List</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </NavItem>
                                    <NavItem>
                                        <Dropdown
                                            open={this.state.dragDropdownOpen}
                                            toggle={this.toggleDragDropdown}
                                        >
                                            <DropdownToggle nav caret>
                                                Dragalia Lost
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem href={"#/dl/units"}>Units</DropdownItem>
                                                <DropdownItem href={"#/dl/dragons"}>Dragons</DropdownItem>
                                                <DropdownItem href={"#/dl/weapons"}>Weapons</DropdownItem>
                                                <DropdownItem href={"#/dl/prints"}>Wyrmprints</DropdownItem>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                        <div className={'divider'}/>
                        <Switch>
                            <Route path="/dl/unit/">
                                <DragUnitInfo/>
                            </Route>
                            <Route path="/dl/units">
                                <DragUnitList/>
                            </Route>
                            <Route path="/dl/dragons">
                                <DragDragList/>
                            </Route>
                            <Route path="/dl/weapons">
                                <Helmet>
                                    <title>{"Weapons | Antnee.net"}</title>
                                </Helmet>
                                <h3> Dragalia | Weapons </h3>
                            </Route>
                            <Route path="/dl/prints">
                                <Helmet>
                                    <title>{"Wyrmprints | Antnee.net"}</title>
                                </Helmet>
                                <h3> Dragalia | Wyrmprints </h3>
                            </Route>
                            <Route path="/pm/pair/">
                                <Info/>
                            </Route>
                            <Route path="/pm/pairs">
                                <Helmet>
                                    <title>{"Sync Pairs | Antnee.net"}</title>
                                </Helmet>
                                <MastersUnitList/>
                            </Route>
                            <Route path="/pm/gear">
                                <Helmet>
                                    <title>{"Masters Gear | Antnee.net"}</title>
                                </Helmet>
                                <h3> Masters | Gear</h3>
                            </Route>
                            <Route path="/pm/tier-list">
                                <Helmet>
                                    <title>{"Tier List | Antnee.net"}</title>
                                </Helmet>
                                <h3> Masters | Tier List</h3>
                            </Route>
                            <Route path="/pm/guide/">
                                <Guide/>
                            </Route>
                            <Route path="/pm/guides">
                                <Helmet>
                                    <title>{"Guides | Antnee.net"}</title>
                                </Helmet>
                                <Guides/>
                            </Route>
                            <Route path="/">
                                <Helmet>
                                    <title>{"Antnee.net"}</title>
                                </Helmet>
                                <div style={{height: "400px"}}/>
                                <div style={{background: "#007bff"}}>
                                    <Container style={{
                                        textAlign: "center",
                                        verticalAlign: "middle",
                                        lineHeight: "150px",
                                        margin: "auto"
                                    }}>
                                        <Row>
                                            <Col>
                                                <strong>
                                                    <div style={{
                                                        color: "#fff",
                                                        margin: "auto",
                                                        textAlign: "center"
                                                    }}>
                                                        Join the Pokemon Masters Community &rarr;
                                                    </div>
                                                </strong>
                                            </Col>
                                            <iframe src="https://discordapp.com/widget?id=583120259708616715&theme=dark"
                                                    width="400" height="200" allowTransparency="true" frameBorder="0"/>
                                        </Row>
                                    </Container>
                                </div>
                            </Route>
                        </Switch>
                    </HashRouter>
                    <div className="footer">
                        <Container>
                            <div style={{marginTop: "25px"}}>
                                This site is currently a work in progress. For any errors, message <strong><a
                                className={'HeaderLink'}
                                href={'https://discord.gg/XEyTDE9'}>Antnee#0777</a></strong> &rarr;
                            </div>
                        </Container>
                    </div>
                </div>
            </div>
        )
    }
}
