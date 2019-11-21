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

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.state = {
            dropdownOpen: false,
            collapseOpen: false,
        };
    }

    toggleDropdown() {
        this.setState({
            ...this.state,
            ...{
                dropdownOpen: !this.state.dropdownOpen
            }
        });
    }

    toggleNavbar() {
        this.setState({
            ...this.state,
            ...{
                collapseOpen: !this.state.collapseOpen
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
                        <Collapse open={this.state.collapseOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <Dropdown
                                        open={this.state.dropdownOpen}
                                        toggle={this.toggleDropdown}
                                    >
                                        <DropdownToggle nav caret>
                                            Pokemon Masters
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem href={"#/masters/pairs"}>Sync Pairs</DropdownItem>
                                            <DropdownItem href={"#/masters/gear"}>Gear</DropdownItem>
                                            <DropdownItem href={"#/masters/tier-list"}>Tier List</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/" disabled>
                                        Dragalia Lost
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    <Alert>
                        This is where the discord invite for the bot and masters server will
                        live. <strong>Based</strong>  &rarr;
                    </Alert>
                    <Switch>
                        <Route path="/masters/pair/">
                            <Info/>
                        </Route>
                        <Route path="/masters/pairs">
                            <Helmet>
                                <title>{"Sync Pairs | Antnee.net"}</title>
                            </Helmet>
                            <UnitList/>
                        </Route>
                        <Route path="/masters/gear">
                            <Helmet>
                                <title>{"Masters Gear | Antnee.net"}</title>
                            </Helmet>
                            <h3> Masters | Gear</h3>
                        </Route>
                        <Route path="/masters/tier-list">
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
