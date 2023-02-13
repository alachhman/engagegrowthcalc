const classSkills = [
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Divine_Spirit.png",
        "name": "Divine Spirit",
        "desc": "Unit’s engage meter is shortened one step.",
        "unit": "Divine Dragon"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Fell_Spirit.png",
        "name": "Fell Spirit",
        "desc": "At the start of each turn, unit’s engage meter is filled by 1.",
        "unit": "Fell Child"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Golden_Lotus.png",
        "name": "Golden Lotus",
        "desc": "During combat, may prevent 50% of physical damage taken. Trigger %=Dex.",
        "unit": "Avenir"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Ignis.png",
        "name": "Ignis",
        "desc": "During combat, may add half of Str to magic damage or half of Mag to all other damage. Trigger %=Dex.",
        "unit": "Vidame"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Sol.png",
        "name": "Sol",
        "desc": "Unit may recover HP=50% damage dealt. Trigger %=Dex.",
        "unit": "Successeur"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Luna.png",
        "name": "Luna",
        "desc": "While making an attack, may ignore half of foe’s Def/Res. Trigger %=Dex.",
        "unit": "Tireur d’élite"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Grasping_Void.png",
        "name": "Grasping Void",
        "desc": "When attacking with a tome, unit may deal extra damage = half of foe’s Mag. Trigger %=Dex.",
        "unit": "Lindwurm"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/World_Tree.png",
        "name": "World Tree",
        "desc": "When unit uses a staff, may not consume a use. Trigger %=Dex.",
        "unit": "Sleipnir Rider"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Sandstorm.png",
        "name": "Sandstorm",
        "desc": "While making a physical attack, may calculate damage with 150% of Def instead of Str. Trigger %=Dex.",
        "unit": "Picket"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Back_at_You.png",
        "name": "Back at You",
        "desc": "When countering, unit may deal extra damage = half of damage taken. Trigger %=Dex.",
        "unit": "Cupido"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Run_Through.png",
        "name": "Run Through",
        "desc": "Use to attack an adjacent foe, then move to the space opposite that foe.",
        "unit": "Swordmaster"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Brave_Assist.png",
        "name": "Brave Assist",
        "desc": "If unit’s HP is at max while unit makes a chain attack, unit attacks twice.",
        "unit": "Hero"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Pincer_Attack.png",
        "name": "Pincer Attack",
        "desc": "If unit initiates combat while an ally is on the opposite side of the foe, always follow up (if weapon allows).",
        "unit": "Halberdier"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Reforge.png",
        "name": "Reforge",
        "desc": "If unit’s HP is 11 or more and an adjacent ally is broken after combat, sacrifices 10 HP and removes the break status from that ally.",
        "unit": "Royal Knight"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Smash.png",
        "name": "Smash+",
        "desc": "When making a smash attack, push the target 2 spaces instead of 1.",
        "unit": "Berserker"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Merciless.png",
        "name": "Merciless",
        "desc": "Unit deals +50% damage against broken foes.",
        "unit": "Warrior"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/No_Distractions.png",
        "name": "No Distractions",
        "desc": "Grants Crit+10 during combat with a foe that can’t counter.",
        "unit": "Sniper"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Careful_Aim.png",
        "name": "Careful Aim",
        "desc": "If unit initiates combat without moving first, grants Hit+40 during combat.",
        "unit": "Bow Knight"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Swap.png",
        "name": "Swap",
        "desc": "Use to switch places with an adjacent ally.",
        "unit": "General"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Allied_Defense.png",
        "name": "Allied Defense",
        "desc": "If unit is between an ally and a foe, reduces damage to unit by 3 during combat with that foe.",
        "unit": "Great Knight"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Pivot.png",
        "name": "Pivot",
        "desc": "Use to move to the opposite side of an adjacent ally.",
        "unit": "Paladin"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Hobble.png",
        "name": "Hobble",
        "desc": "If unit initiates combat with a knife, inflicts Mov-2 on foe for 1 turn.",
        "unit": "Wolf Knight"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Spell_Harmony.png",
        "name": "Spell Harmony",
        "desc": "If unit initiates combat with a tome, grants Atk equal to the number of adjacent allies with tomes.",
        "unit": "Sage"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Chaos_Style.png",
        "name": "Chaos Style",
        "desc": "If unit initiates combat with a physical attack against a foe armed with magic or vice versa, grants Spd+3 during combat.",
        "unit": "Mage Knight"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Diffuse_Healer.png",
        "name": "Diffuse Healer",
        "desc": "When unit is healed by a staff, all adjacent allies also recover 50% of the HP that the unit recovered.",
        "unit": "Martial Master"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Self-Healing.png",
        "name": "Self-Healing",
        "desc": "Unit can target itself with healing staves.",
        "unit": "High Priest"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Clear_the_Way.png",
        "name": "Clear the Way",
        "desc": "Unit’s space and adjacent spaces have a movement cost of 1 for allies.",
        "unit": "Griffin Knight"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Air_Raid.png",
        "name": "Air Raid",
        "desc": "If unit initiates combat from a space a foe cannot enter, grants Spd+5 during combat.",
        "unit": "Wyvern Knight"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Pass.png",
        "name": "Pass",
        "desc": "Foes do not block this unit’s movement.",
        "unit": "Thief"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Special_Dance.png",
        "name": "Special Dance",
        "desc": "If unit uses Dance, grants Dex/Spd/Lck+3 to target for 1 turn.",
        "unit": "Dancer"
    }
]

export default classSkills
