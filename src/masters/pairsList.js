import React from 'react';
import {Button, Card, CardColumns, CardHeader, CardTitle, Col, Container, Row} from "shards-react";
import {Box, RadioButtonGroup} from "grommet/es6";
import trainers from './trainers';
import GPressData from './GPressData';

//TODO: Change >ms pooldata trainers to include type1 attr and any other sorting criteria, then refactor so this .js file pulls from trainers and not from gpressdata
export default function UnitList() {
    const [rarity, setRarity] = React.useState('Any');
    const [type, setType] = React.useState('All');
    return (
        <Container>
            <h3>Masters | Sync Pairs</h3>
            <div className={'Border'} background={"light-2"}>
                <div className={'FilterSpacing'}>
                    <RadioButtonGroup
                        name="rarity"
                        gap="xsmall"
                        direction={"row"}
                        options={['Any', '3', '4', '5']}
                        value={rarity}
                        onChange={(event) => setRarity(event.target.value)}
                        className={"RadioGroup"}
                    >
                        {(option, {checked, hover}) => {
                            let background;
                            if (checked) background = "brand";
                            else if (hover) background = "light-4";
                            return (
                                <Box background={background} round={"small"}>
                                    <Container>
                                        <span>
                                        {option} <img alt={option} src={process.env.PUBLIC_URL + '/assets/star.png'}
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
                    options={['Normal', 'Fire', 'Water', 'Grass', 'Electric', 'Steel', 'Psychic', 'Dark', 'Fighting', 'Rock', 'Ground', 'Flying', 'Fairy', 'Bug', 'Dragon', 'Poison', 'Ghost', 'Ice']}
                    overflow={"auto"}
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                    className={"RadioGroup"}
                >
                    {(option, {checked, hover}) => {
                        let background;
                        if (checked) background = "brand";
                        else if (hover) background = "light-4";
                        return (
                            <Box className={"FilterImage"} background={background} round={"full"} border={{
                                "color": background,
                                "size": "medium",
                                "style": "solid",
                                "side": "all"
                            }}>
                                <img alt={option}
                                     src={process.env.PUBLIC_URL + '/assets/' + option.toLowerCase() + '.png'}
                                     style={{width: '34px', height: '34px'}}/>
                            </Box>
                        );
                    }}
                </RadioButtonGroup>
            </div>
            <UnitDataMapping units={trainers.units} rarity={rarity} type={type}/>
        </Container>
    )
}

function UnitDataMapping(props) {
    let populatedCount = 0;
    const listItems = props.units.map((unit) => {
            if (unit.base_potential === parseInt(props.rarity) || props.rarity === 'Any') {
                if (unit.type === props.type || props.type === 'All') {
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
    if (unit.name.toUpperCase() === "PLAYER") {
        icon = 'https://images-ext-2.discordapp.net/external/tjpAph1skkuFCYRYKYLw3PBREDKI-ykqGp5UDeHuf9U/https/serebii.net//pokedex-sm/icon/025.png'
    } else if (unit.name.toUpperCase() === "OAK") {
        icon = "https://pokemonmasters.gamepress.gg" + "/pokemonmasters/sites/pokemonmasters/files/styles/55x55/public/2020-02/ch0137_00_orchid1_st_1001_128.ktx__0.png?itok=rP_xVXGZ";
    } else {
        for (const trainer of GPressData.GpressData) {
            //const trainer = JSON.parse(entry);
            if (unit.name === trainer.title) {
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
                                {unit.name}
                            </CardTitle>
                        </strong>
                    </Col>
                    <Col>
                        <Button size={"sm"} outline pill style={{float: "right"}}
                                href={"#/pm/pair/" + unit.name.replace(" ", "_")}>+</Button>
                    </Col>
                </Row>
            </CardHeader>
        </Card>
    );
}
