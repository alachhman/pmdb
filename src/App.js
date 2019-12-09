import React from 'react';
import {
    Alert,
    Collapse,
    Dropdown, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav, Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink
} from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import "./App.css";
import UnitList from "./pairsList";
import {
    HashRouter,
    Switch,
    Route,
} from "react-router-dom";
import Info from "./pair";
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
            <div>
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
                    <Alert>
                        This site is currently a work in progress. For any errors message <strong><a className={'HeaderLink'} href={'https://discord.gg/XEyTDE9'}>Antnee#0777</a></strong> &rarr;
                    </Alert>
                    <Switch>
                        <Route path="/dl/units">
                            <Helmet>
                                <title>{"Adventurers | Antnee.net"}</title>
                            </Helmet>
                            <h3> Dragalia | Adventurers </h3>
                        </Route>
                        <Route path="/dl/dragons">
                            <Helmet>
                                <title>{"Dragons | Antnee.net"}</title>
                            </Helmet>
                            <h3> Dragalia | Dragons </h3>
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
                            <UnitList/>
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
                        <Route path="/">
                            <Helmet>
                                <title>{"Antnee.net"}</title>
                            </Helmet>
                            <h3> HOME </h3>
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
