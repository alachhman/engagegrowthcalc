import * as React from "react";
import {useEffect} from "react";

import Selection from "./Selection";
import CheckBox from "./CheckBox";

import Units from "../data/Units";
import Classes from "../data/Classes";
import Emblems from "../data/Emblems";
import Divider from "./Divider";
import Tooltip from "./Tooltip";

let Calculator = () => {
    const [Unit, setUnit] = React.useState(Units[0]);
    const [Class, setClass] = React.useState(Classes[0])
    const [Emblem, setEmblem] = React.useState(Emblems[0])
    const [Level, setLevel] = React.useState({name: 0})
    const [StarSphere, setStarSphere] = React.useState(false)

    const changeEmblem = (emblem) => {
        setEmblem(emblem)
        setLevel(emblem.statBoosts[0])
    }

    const logState = () => {
        console.log({
            Unit: Unit,
            Class: Class,
            Emblem: Emblem,
            Level: Level,
            StarSphere: StarSphere
        })
    }

    useEffect(x => {
        logState()
    })

    return (
        <div>
            <div className="main-options">
                <Selection name="Unit" pool={Units} set={setUnit}/> |
                <Selection name="Class" pool={Classes} set={setClass}/>
                <CheckBox label="Starsphere" set={setStarSphere}/>
            </div>
            <div className="main-options" style={{marginTop: "12px"}}>
                <div style={{width: "89px", height: "20px"}}>
                    <Selection name="Emblem" pool={Emblems} set={changeEmblem} style={{height: "20px"}}/>
                </div>
                |
                <Selection name="BondLevel" pool={Emblem["statBoosts"]} set={setLevel} actual={Level}/>
            </div>
            <div className="main-contents">
                <StatGraph unit={Unit} class={Class} ss={StarSphere} emblem={Emblem} level={Level}/>
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
                         style={{maxWidth: "65px", height: "65px", border: "1px solid white", borderRadius: "20%"}}/>
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
    let Emblem = props.emblem;
    let Level = props.level;

    return (
        <div className="main-results">
            <strong>{Class.name + " " + Unit.name + " " + (Emblem.name !== "None" ? "w/ " + Emblem.name : "")}</strong>
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
                                 level={Level}
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
    let level = props.level;
    let modifier = 0;

    Object.keys(level).forEach(x => {
        if (statname === x.toUpperCase()) modifier = level[x]
    })

    let classGrowth = (unitname === "Jean") ? classStat.growth * 2 : classStat.growth
    let totalGrowth = unitStat.growth + classGrowth + (starSphere ? 15 : 0)
    let totalStat = unitStat.max + classStat.max + modifier

    return (
        <div className="statout">
            <strong>
                {statname + (statname === "HP" ? " " : "")}: {" "}
            </strong>
            <Tooltip direction={"right"}
                     content={"Unit Growth (" + unitStat.growth + "%) + Class Growth (" + classGrowth + "%) " + (starSphere ? "+ StarSphere (15%)" : "")}>

                {totalGrowth + "%" + (totalGrowth.toString().length < 3 ? "\u00A0" : "")}|
            </Tooltip>
            <Tooltip direction={"right"}
                     content={"Class Max (" + classStat.max + ") + Unit Modifier (" + unitStat.max + ")" + ((modifier !== 0) ? " + Emblem Modifier (+" + modifier + ")" : "")}>
                {"\u00A0"}{totalStat}{(totalStat.toString().length < 3 ? "\u00A0" : "")} {(modifier !== 0) ? "(+" + modifier + ")" : ""}
            </Tooltip>
            <div style={{maxWidth: totalGrowth + "%"}}>
                <Divider color={statToColor(statname)}/>
            </div>
        </div>
    )
}

let statToColor = (stat) => {
    let colorMapping = {
        HP: "#6CFF0D",
        STR: "#FF0700",
        MAG: "#FF5201",
        DEX: "#00FCFF",
        SPD: "#0079FF",
        DEF: "#E8A40C",
        RES: "#E8CF0C",
        LCK: "#C10CE8",
        BLD: "#EB00BA"
    }
    return colorMapping[stat]
}

export default Calculator
