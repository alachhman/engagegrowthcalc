import * as React from "react";
import {useEffect} from "react";

import Selection from "./Selection";
import CheckBox from "./CheckBox";

import Units from "../data/Units";
import Classes from "../data/Classes";
import Divider from "./Divider";
import Tooltip from "./Tooltip";

let Calculator = () => {
    const [Unit, setUnit] = React.useState(Units[0]);
    const [Class, setClass] = React.useState(Classes[0])
    const [StarSphere, setStarSphere] = React.useState(false)

    useEffect(x => {
        console.log({
            Unit: Unit,
            Class: Class,
            StarSphere: StarSphere
        })
    })

    return (
        <div>
            <div className="main-options">
                <Selection name="Unit" pool={Units} set={setUnit}/> |
                <Selection name="Class" pool={Classes} set={setClass}/>
                <CheckBox label="Starsphere" set={setStarSphere}/>
            </div>
            <div className="main-contents">
                <StatGraph unit={Unit} class={Class} ss={StarSphere}/>
            </div>
        </div>
    )
}

let SkillOut = (props) => {
    let skillInfo = props.skill
    let label = props.label

    if (!skillInfo.name) {
        return (
            <div/>
        )
    } else {
        return (
            <div>
                <div className="skill-container">
                    <img src={skillInfo.img} className="skill-item" alt={skillInfo.name}
                         style={{maxWidth: "65px", height: "65px"}}/>
                    <div className={"skill-item"}>
                        <strong>{label + " - " + skillInfo.name}<br/></strong>
                        <div style={{fontSize: "14px"}}>{skillInfo.desc}</div>
                    </div>
                </div>
            </div>
        )
    }
}

let StatGraph = (props) => {
    let Unit = props.unit;
    let Class = props.class;
    let StarSphere = props.ss;

    return (
        <div className="main-results">
            <strong>Stats: {" " + Class.name}</strong>
            <Divider color={"white"}/>
            <div className="main-results-table">
                {Object.keys(Unit).filter(x => x !== "name").map(x => {
                    if (x === "skill") {
                        return (
                            <div>
                                <Divider style={{marginBottom: "16px"}}/>
                                <SkillOut skill={Unit[x]} label={"Personal Skill"}/>
                            </div>
                        )
                    }
                    return (
                        <StatOut statName={x.toUpperCase()}
                                 unitStat={Unit[x]}
                                 classStat={Class[x]}
                                 starSphere={StarSphere}
                                 unitName={Unit.name}
                        />
                    )
                })}
                <SkillOut skill={Class.skill} label={"Class Skill"}/>
            </div>
        </div>
    )
}

let StatOut = (props) => {
    let statname = props.statName;
    let unitname = props.unitName;
    let unitStat = props.unitStat;
    let classStat = props.classStat;
    let starSphere = props.starSphere;

    let classGrowth = (unitname === "Jean") ? classStat.growth * 2 : classStat.growth
    let total = unitStat.growth + classGrowth + (starSphere ? 15 : 0)

    return (
        <div className="statout">
            <Tooltip direction={"right"}
                     content={"Unit Growth (" + unitStat.growth + ") + Class Growth (" + classGrowth + ") " + (starSphere ? "+ StarSphere (15)" : "")}>
                <strong>{statname}:</strong> {unitStat.max + classStat.max} | {total}%
            </Tooltip>
            <div style={{maxWidth: total + "%"}}>
                <Divider color={statToColor(statname)}/>
            </div>
        </div>
    )
}

let statToColor = (stat) => {
    let colorMapping = {
        HP: "green",
        STR: "red",
        MAG: "cyan",
        DEX: "orange",
        SPD: "yellow",
        DEF: "violet",
        RES: "pink",
        LCK: "turquoise",
        BLD: "magenta"
    }
    return colorMapping[stat]
}

export default Calculator
