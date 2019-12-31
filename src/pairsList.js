import React from 'react';
import {Button, Card, CardColumns, CardHeader, CardTitle, Col, Container, Row} from "shards-react";
import {Box, RadioButtonGroup} from "grommet/es6";
//import trainers from './trainers';
import GPressData from './GPressData';
import Fire from './assets/fire.png';
import Water from './assets/water.png';
import Bug from './assets/bug.png';
import Dark from './assets/dark.png';
import Dragon from './assets/dragon.png';
import Fairy from './assets/fairy.png';
import Fighting from './assets/fighting.png';
import Flying from './assets/flying.png';
import Ghost from './assets/ghost.png';
import Grass from './assets/grass.png';
import Ground from './assets/ground.png';
import Ice from './assets/ice.png';
import Normal from './assets/normal.png';
import Psychic from './assets/psychic.png';
import Poison from './assets/poison.png';
import Rock from './assets/rock.png';
import Steel from './assets/steel.png';
import Thunder from './assets/thunder.png';
import Star from './assets/star.png';
import Status from './assets/status.png';
import Special from './assets/special.png';
import Physical from './assets/physical.png';

//TODO: Change >ms pooldata trainers to include type1 attr and any other sorting criteria, then refactor so this .js file pulls from trainers and not from gpressdata
export default function UnitList() {
    const [rarity, setRarity] = React.useState('Any');
    const [type, setType] = React.useState('All');
    return (
        <Container>
            <h3> Masters | Sync Pairs</h3>
            <div className={'Border'} background={"light-2"}>
                <div className={'FilterSpacing'}>
                    <RadioButtonGroup
                        name="rarity"
                        gap="xsmall"
                        direction={"row"}
                        options={['Any', '3', '4', '5']}
                        value={rarity}
                        onChange={(event) => setRarity(event.target.value)}
                    >
                        {(option, {checked, hover}) => {
                            let background;
                            if (checked) background = "brand";
                            else if (hover) background = "light-4";
                            return (
                                <Box background={background} round={"small"}>
                                    <Container>
                                        <span>
                                        {option} <img alt={option} src={getStarImage()}
                                                      style={{width: '24px', height: '24px'}}/>
                                        </span>
                                    </Container>
                                </Box>
                            );
                        }}
                    </RadioButtonGroup>
                </div>
                <RadioButtonGroup
                    name="type"
                    direction={'row'}
                    gap={'xsmall'}
                    options={['All', 'Fire', 'Water', 'Grass', 'Electric', 'Steel', 'Psychic', 'Dark', 'Fighting', 'Rock', 'Ground', 'Flying', 'Fairy', 'Bug', 'Dragon', 'Poison', 'Ghost', 'Ice']}
                    overflow={"auto"}
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                >
                    {(option, {checked, hover}) => {
                        let background;
                        if (checked) background = "brand";
                        else if (hover) background = "light-4";
                        return (
                            <Box background={background} round={"full"} border={{
                                "color": background,
                                "size": "medium",
                                "style": "solid",
                                "side": "all"
                            }}>
                                <img alt={option} src={typeToImage(option)}
                                     style={{width: '34px', height: '34px'}}/>
                            </Box>
                        );
                    }}
                </RadioButtonGroup>
            </div>

            <UnitDataMapping units={GPressData.GpressData} rarity={rarity} type={type}/>
        </Container>
    )
}

function UnitDataMapping(props) {
    let populatedCount = 0;
    const listItems = props.units.map((unit) => {
            if (unit.rarity === props.rarity || props.rarity === 'Any') {
                if (unit.type1 === props.type || props.type === 'All') {
                    populatedCount++;
                    return (
                        UnitDisplay(unit)
                    )
                }
            }
        }
    );
    if (populatedCount === 0) {
        return (
            <h2 className={'Error'}>
                Sorry, Nothing to Display
            </h2>
        )
    } else {
        return (
            <CardColumns>{listItems}</CardColumns>
        )
    }
}

function UnitDisplay(unit) {
    let icon = "";
    if (unit.title.toUpperCase() === "PLAYER") {
        icon = 'https://images-ext-2.discordapp.net/external/tjpAph1skkuFCYRYKYLw3PBREDKI-ykqGp5UDeHuf9U/https/serebii.net//pokedex-sm/icon/025.png'
    } else {
        for (const trainer of GPressData.GpressData) {
            if (unit.title === trainer.title) {
                icon = 'https://pokemonmasters.gamepress.gg' + trainer.icon.substring(trainer.icon.indexOf('<img src="') + 10, trainer.icon.indexOf('" width'));
            }
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
                                {unit.title}
                            </CardTitle>
                        </strong>
                    </Col>
                    <Col>
                        <Button size={"sm"} outline pill style={{float: "right"}}
                                href={"#/pm/pair/" + unit.title.replace(" ", "_")}>+</Button>
                    </Col>
                </Row>
            </CardHeader>
        </Card>
    );
}

function typeToImage(type) {
    switch (type) {
        case "Fire":
            return Fire;
        case "Water":
            return Water;
        case "Bug":
            return Bug;
        case "Dark":
            return Dark;
        case "Dragon":
            return Dragon;
        case "Fairy":
            return Fairy;
        case "Fighting":
            return Fighting;
        case "Flying":
            return Flying;
        case "Ghost":
            return Ghost;
        case "Grass":
            return Grass;
        case "Ground":
            return Ground;
        case "Ice":
            return Ice;
        case "Normal":
            return Normal;
        case "Psychic":
            return Psychic;
        case "Poison":
            return Poison;
        case "Rock":
            return Rock;
        case "Steel":
            return Steel;
        case "Electric":
            return Thunder;
        default:
            return Normal;
    }
}

function categoryToImage(category) {
    switch (category) {
        case "Status":
            return Status;
        case "Special":
            return Special;
        case "Physical":
            return Physical;
        default:
            return Status;
    }
}

function getStarImage() {
    return Star;
}

