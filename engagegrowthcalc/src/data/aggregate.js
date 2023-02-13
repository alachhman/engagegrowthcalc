import classSkills from "./classSkills.js"
import classMaxStats from "./classMaxStats.js"
import classGrowth from "./classGrowth.js";
import unitSkills from "./unitSkills.js";
import unitMaxMods from "./unitMaxMods.js";
import unitGrowth from "./unitGrowth.js";
import fs from "fs";

const aggregate = (Growth, Max, Skill, Type) => {
    let arr = []
    Growth.forEach(growth => {
        let name = growth.name;
        console.log(name)
        let max = Max.find(x => x.Name === name)
        let skill = Skill.find(x => x.unit === name) ?? {}

        arr.push({
            name: name,
            hp: {
                growth: growth.hp,
                max: max.HP
            },
            str: {
                growth: growth.str,
                max: max.Str
            },
            mag: {
                growth: growth.mag,
                max: max.Mag
            },
            dex: {
                growth: growth.dex,
                max: max.Dex
            },
            spd: {
                growth: growth.spd,
                max: max.Spd
            },
            def: {
                growth: growth.def,
                max: max.Def
            },
            res: {
                growth: growth.res,
                max: max.Res
            },
            lck: {
                growth: growth.lck,
                max: max.Lck
            },
            bld: {
                growth: growth.bld,
                max: max.Bld
            },
            skill: skill
        })
    })

    console.log(arr)

    fs.writeFile(Type + ".js", "const " + Type + " = " + JSON.stringify(arr, null, 2) + "\n export default " + Type, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Successfully written data to file");
    });
}

aggregate(unitGrowth, unitMaxMods, unitSkills, "Units")
aggregate(classGrowth, classMaxStats, classSkills, "Classes")
