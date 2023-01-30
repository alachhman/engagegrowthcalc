import * as React from "react";
import {useEffect} from "react";

import Selection from "./Selection";
import CheckBox from "./CheckBox";

import unitGrowth from "../data/unitGrowth";
import classGrowth from "../data/classGrowth";
import Divider from "./Divider";
import Tooltip from "./Tooltip";


let Calculator = () => {
    const [Unit, setUnit] = React.useState(unitGrowth[0]);
    const [Class, setClass] = React.useState(classGrowth[0])
    const [StarSphere, setStarSphere] = React.useState(false)

    useEffect(x => {
        console.log({
            Unit: Unit,
            Class: Class,
            StarSphere: StarSphere
        })
    })

    return (
        <div className="main-content">
            <div className="main-options">
                <Selection name="Unit" pool={unitGrowth} set={setUnit}/> |
                <Selection name="Class" pool={classGrowth} set={setClass}/> |
                <CheckBox label="Starsphere" set={setStarSphere}/>
            </div>
            <div className="main-results">
                <strong>Growths:</strong>
                <Divider color={"white"}/>
                <div className="main-results-table">
                    {Object.keys(Unit).filter(x => x !== "name").map(x => {
                        return (
                            <StatOut statName={x.toUpperCase()}
                                     unitStat={Unit[x]}
                                     classStat={(Unit.name === "Jean" ? Class[x] * 2: Class[x])}
                                     starSphere={StarSphere}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

let StatOut = (props) => {
    let statname = props.statName;
    let unitStat = props.unitStat;
    let classStat = props.classStat;
    let starSphere = props.starSphere;

    let total = unitStat + classStat + (starSphere ? 15 : 0)

    return (
        <div className="statout">
            <Tooltip direction={"right"} content={"Unit Growth (" + unitStat + ") + Class Growth (" + classStat + ") " + (starSphere ? "+ StarSphere (15)" : "")}>
                <strong>{statname}:</strong> {total}
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
