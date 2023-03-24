const Emblems = [
    {
        "name": "None",
        "statBoosts": [
            {
                "name": 0,
            }
        ]
    },
    {
        "name": "Marth",
        "statBoosts": [
            {
                "name": 1,
                "Str": 1,
                "Dex": 1,
                "Spd": 1
            },
            {
                "name": 2,
                "Str": 1,
                "Dex": 2,
                "Spd": 1
            },
            {
                "name": 4,
                "Str": 1,
                "Dex": 2,
                "Spd": 2
            },
            {
                "name": 6,
                "Str": 2,
                "Dex": 2,
                "Spd": 2
            },
            {
                "name": 9,
                "Str": 2,
                "Dex": 3,
                "Spd": 2
            },
            {
                "name": 13,
                "Str": 2,
                "Dex": 3,
                "Spd": 3
            },
            {
                "name": 14,
                "Str": 3,
                "Dex": 3,
                "Spd": 3
            },
            {
                "name": 17,
                "Str": 3,
                "Dex": 4,
                "Spd": 3
            },
            {
                "name": 19,
                "Str": 3,
                "Dex": 4,
                "Spd": 4
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Perceptive",
                "desc": "If the unit initiates combat, grants Avo+15 during combat. Avo increases with high Spd. [+1 Avoid for every 4 Speed.]",
                "type": "Sync Skill (Can Inherit)",
                "cost": 250
            },
            {
                "bond": "1",
                "name": "Avoid +10",
                "desc": "Grants Avo+10.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "1",
                "name": "Divine Speed",
                "desc": "Unit performs an extra attack at 50% damage in combat.[Covert] If extra attack hits, poisons foe.[Dragon] Unit recovers HP equal to damage dealt by extra attack.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Lodestar Rush",
                "desc": "Use to launch 7 consecutive sword attacks at 30% damage. Adjacent foe only.[Dragon] +2 attacks.[Backup] +1 attack.[Mystical] Damage based on Mag.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Rapier",
                "desc": "Sword wielded by Emblem Marth. Effective: Cavalry, Armored.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Sword Agility 1",
                "desc": "Grants Avo+10 at a cost of Crit-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "3",
                "name": "Break Defenses",
                "desc": "If unit’s attack breaks foe, unit makes an extra attack at 50% damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "4",
                "name": "Avoid +15",
                "desc": "Grants Avo+15.",
                "type": "Inheritable Skill",
                "cost": 1500
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Sword Agility 2",
                "desc": "Grants Avo+15 at a cost of Crit-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "7",
                "name": "Unyielding",
                "desc": "At start of player phase, if HP is 20% or less, restores 20% of unit’s max HP.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 100
            },
            {
                "bond": "8",
                "name": "Sword Agility 3",
                "desc": "Grants Avo+20 at a cost of Crit-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "8",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "9",
                "name": "Avoid +20",
                "desc": "Grants Avo+20.",
                "type": "Inheritable Skill",
                "cost": 2500
            },
            {
                "bond": "10",
                "name": "Mercurius",
                "desc": "Sword wielded by Emblem Marth. Doubles user’s earned experience.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Unyielding+",
                "desc": "At start of player phase, if HP is 30% or less, restores 30% of unit’s max HP.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 200
            },
            {
                "bond": "13",
                "name": "Sword Agility 4",
                "desc": "Grants Avo+25 at a cost of Crit-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 3000
            },
            {
                "bond": "14",
                "name": "Avoid +25",
                "desc": "Grants Avo+25.",
                "type": "Inheritable Skill",
                "cost": 3500
            },
            {
                "bond": "15",
                "name": "Falchion",
                "desc": "Sacred sword wielded by Emblem Marth. Effective: Dragon.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Perceptive+",
                "desc": "If the unit initiates combat, grants Avo+30 during combat. Avo increases with high Spd. [+1 Avoid for every 4 Speed.]",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "17",
                "name": "Sword Agility 5",
                "desc": "Grants Avo+30 at a cost of Crit-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 4000
            },
            {
                "bond": "18",
                "name": "Unyielding++",
                "desc": "At start of player phase, if HP is 40% or less, restores 40% of unit’s max HP.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 300
            },
            {
                "bond": "19",
                "name": "Avoid +30",
                "desc": "Grants Avo+30.",
                "type": "Inheritable Skill",
                "cost": 4500
            }
        ]
    },
    {
        "name": "Sigurd",
        "statBoosts": [
            {
                "name": 1,
                "Dex": 1,
                "Def": 1,
                "Bld": 1,
                "Mov": 1
            },
            {
                "name": 2,
                "Dex": 1,
                "Def": 2,
                "Bld": 1,
                "Mov": 1
            },
            {
                "name": 4,
                "Dex": 2,
                "Def": 2,
                "Bld": 1,
                "Mov": 1
            },
            {
                "name": 8,
                "Dex": 2,
                "Def": 2,
                "Bld": 2,
                "Mov": 1
            },
            {
                "name": 12,
                "Dex": 2,
                "Def": 3,
                "Bld": 2,
                "Mov": 1
            },
            {
                "name": 14,
                "Dex": 3,
                "Def": 3,
                "Bld": 2,
                "Mov": 1
            },
            {
                "name": 16,
                "Dex": 3,
                "Def": 3,
                "Bld": 3,
                "Mov": 1
            },
            {
                "name": 18,
                "Dex": 3,
                "Def": 4,
                "Bld": 3,
                "Mov": 1
            },
            {
                "name": 19,
                "Dex": 4,
                "Def": 4,
                "Bld": 3,
                "Mov": 1
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Canter",
                "desc": "Unit can move 2 spaces after acting.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "1",
                "name": "Hit +10",
                "desc": "Grants Hit+10.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "1",
                "name": "Gallop",
                "desc": "Grants Mov+5.[Dragon] Grants another Mov+1.[Cavalry] Grants another Mov+2.[Covert] Unit does not pay extra movement cost on any terrain.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Override",
                "desc": "Use to attack and move through a line of adjacent foes. Sword/lance only.[Dragon] +20% damage.[Armored] 10% chance of breaking target.[Mystical] Deals extra damage=25% of Mag.[Qi Adept] 20% chance of breaking target.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Ridersbane (Sigurd)",
                "desc": "Lance wielded by Emblem Sigurd. Effective: Cavalry.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Lance Power 1",
                "desc": "Grants Atk+2 at a cost of Avo-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "3",
                "name": "Momentum",
                "desc": "Grants Atk+1 to first attack during combat for each space unit moved before attacking. (Max +10)",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "4",
                "name": "Hit +15",
                "desc": "Grants Hit+15.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Lance Power 2",
                "desc": "Grants Atk+4 at a cost of Avo-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "6",
                "name": "Lance Prof.",
                "desc": "Proficiency with lances. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Headlong Rush",
                "desc": "Grants immunity to freeze.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 200
            },
            {
                "bond": "8",
                "name": "Lance Power 3",
                "desc": "Grants Atk+6 at a cost of Avo-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 3000
            },
            {
                "bond": "9",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "10",
                "name": "Brave Lance (Sigurd)",
                "desc": "Lance wielded by Emblem Sigurd. If user initiates combat, attacks twice.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Hit +20",
                "desc": "Grants Hit+20.",
                "type": "Inheritable Skill",
                "cost": 1500
            },
            {
                "bond": "13",
                "name": "Canter+",
                "desc": "Unit can move 3 spaces after acting.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "14",
                "name": "Lance Power 4",
                "desc": "Grants Atk+8 at a cost of Avo-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 4000
            },
            {
                "bond": "15",
                "name": "Tyrfing",
                "desc": "Sword wielded by Emblem Sigurd. Grants Res+5.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Hit +25",
                "desc": "Grants Hit+25.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "17",
                "name": "Momentum+",
                "desc": "Grants Atk+1 to first attack during combat for each space unit moved before attacking.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "18",
                "name": "Lance Power 5",
                "desc": "Grants Atk+10 at a cost of Avo-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 5000
            },
            {
                "bond": "19",
                "name": "Hit +30",
                "desc": "Grants Hit+30.",
                "type": "Inheritable Skill",
                "cost": 2500
            }
        ]
    },
    {
        "name": "Celica",
        "statBoosts": [
            {
                "name": 1,
                "Str": 1,
                "Mag": 2,
                "Res": 1
            },
            {
                "name": 2,
                "Str": 1,
                "Mag": 3,
                "Res": 1
            },
            {
                "name": 4,
                "Str": 1,
                "Mag": 3,
                "Res": 3
            },
            {
                "name": 7,
                "Str": 2,
                "Mag": 3,
                "Res": 3
            },
            {
                "name": 13,
                "Str": 2,
                "Mag": 4,
                "Res": 3
            },
            {
                "name": 14,
                "Str": 2,
                "Mag": 4,
                "Res": 4
            },
            {
                "name": 17,
                "Str": 3,
                "Mag": 4,
                "Res": 4
            },
            {
                "name": 19,
                "Str": 3,
                "Mag": 5,
                "Res": 4
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Magic +2",
                "desc": "Grants Mag+2.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "1",
                "name": "Holy Stance",
                "desc": "If a Corrupted attacks unit, deals 10% of damage taken back to foe.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 100
            },
            {
                "bond": "1",
                "name": "Echo",
                "desc": "Use to attack with magic at 50% damage. Use a second time to launch another 50% attack.[Dragon] Range +1.[Mystical] +10% damage.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Warp Ragnarok",
                "desc": "Use to warp up to 10 spaces and make a powerful magic attack.[Dragon] Attack range +1.[Cavalry] Warp distance +2.[Flying] Warp distance +5.[Mystical] +20% damage.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Seraphim",
                "desc": "Holy tome wielded by Emblem Celica. Effective: Corrupted.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Magic +3",
                "desc": "Grants Mag+3.",
                "type": "Inheritable Skill",
                "cost": 3000
            },
            {
                "bond": "3",
                "name": "Resonance",
                "desc": "When equipped with a tome, if unit’s HP is 2 or more, unit loses 1 HP at start of combat and deals +2 damage during combat.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "4",
                "name": "Tome Precision 1",
                "desc": "Grants Hit/Avo+3 when using a tome.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Tome Prof.",
                "desc": "Proficiency with tomes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Tome Precision 2",
                "desc": "Grants Hit/Avo+5 when using a tome.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "8",
                "name": "Favorite Food",
                "desc": "When unit eats a packed lunch, its engage meter is maxed out.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 200
            },
            {
                "bond": "9",
                "name": "Tome Precision 3",
                "desc": "Grants Hit/Avo+7 when using a tome.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "9",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "10",
                "name": "Recover",
                "desc": "A staff imbued with healing magic. Recovers vast amounts of an ally’s HP.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Holy Stance+",
                "desc": "If a Corrupted attacks unit, deals 30% of damage taken back to foe.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "13",
                "name": "Magic +4",
                "desc": "Grants Mag+4.",
                "type": "Inheritable Skill",
                "cost": 4000
            },
            {
                "bond": "14",
                "name": "Tome Precision 4",
                "desc": "Grants Hit/Avo+10 when using a tome.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "15",
                "name": "Ragnarok",
                "desc": "Mighty fire tome wielded by Emblem Celica.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Resonance+",
                "desc": "When equipped with a tome, if unit’s HP is 2 or more, unit loses 1 HP at start of combat and deals +3 damage during combat.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "17",
                "name": "Tome Precision 5",
                "desc": "Grants Hit/Avo+15 when using a tome.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "18",
                "name": "Holy Stance++",
                "desc": "If a Corrupted attacks unit, deals 50% of damage taken back to foe.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "19",
                "name": "Magic +5",
                "desc": "Grants Mag+5.",
                "type": "Inheritable Skill",
                "cost": 5000
            }
        ]
    },
    {
        "name": "Micaiah",
        "statBoosts": [
            {
                "name": 1,
                "Mag": 1,
                "Res": 2,
                "Lck": 2
            },
            {
                "name": 2,
                "Mag": 2,
                "Res": 2,
                "Lck": 2
            },
            {
                "name": 4,
                "Mag": 2,
                "Res": 3,
                "Lck": 2
            },
            {
                "name": 8,
                "Mag": 2,
                "Res": 3,
                "Lck": 4
            },
            {
                "name": 12,
                "Mag": 3,
                "Res": 3,
                "Lck": 4
            },
            {
                "name": 14,
                "Mag": 3,
                "Res": 4,
                "Lck": 4
            },
            {
                "name": 16,
                "Mag": 3,
                "Res": 4,
                "Lck": 6
            },
            {
                "name": 17,
                "Mag": 4,
                "Res": 4,
                "Lck": 6
            },
            {
                "name": 19,
                "Mag": 4,
                "Res": 5,
                "Lck": 6
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Resistance +2",
                "desc": "Grants Res+2.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "1",
                "name": "Cleric",
                "desc": "Unit can equip staves up to level C.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Augment",
                "desc": "Grants staff range +5 and area of effect +1.[Dragon] Additional staff range +1.[Qi Adept] +20% to HP healed by staves.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Great Sacrifice",
                "desc": "Use to restore full HP to all allies, even those not under the player’s control. After use, unit’s HP=1.[Dragon] Unit’s HP=30% current.[Armored] Grants Def+1 to all healed during their next combat.[Qi Adept] Also cures status.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Shine",
                "desc": "Light tome wielded by Emblem Micaiah. Illuminates a 5-space radius (shrinks one space per turn).",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Staff Mastery 1",
                "desc": "Grants Hit+10 when using a staff. Staves also heal an additional 3 HP.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "3",
                "name": "Healing Light",
                "desc": "When unit heals an ally with a staff, unit also recovers HP=50% of the amount healed.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 200
            },
            {
                "bond": "3",
                "name": "Staff Prof.",
                "desc": "Proficiency with staves. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "4",
                "name": "Resistance +3",
                "desc": "Grants Res+3.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Knife Prof.",
                "desc": "Proficiency with knives. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Silence Ward",
                "desc": "Grants immunity to silence.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 200
            },
            {
                "bond": "8",
                "name": "Staff Mastery 2",
                "desc": "Grants Hit+15 when using a staff. Staves also heal an additional 5 HP.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "9",
                "name": "Tome Prof.",
                "desc": "Proficiency with tomes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "10",
                "name": "Nosferatu",
                "desc": "Light tome wielded by Emblem Micaiah. User recovers HP equal to 50% of damage dealt.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Staff Mastery 3",
                "desc": "Grants Hit+20 when using a staff. Staves also heal an additional 7 HP.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "13",
                "name": "Cleric+",
                "desc": "Unit can equip staves up to level B.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "14",
                "name": "Resistance +4",
                "desc": "Grants Res+4.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "15",
                "name": "Thani",
                "desc": "Mighty light tome wielded by Emblem Micaiah. Effective: Cavalry, Armored.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Staff Mastery 4",
                "desc": "Grants Hit+25 when using a staff. Staves also heal an additional 10 HP.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "17",
                "name": "Staff Mastery 5",
                "desc": "Grants Hit+30 when using a staff. Staves also heal an additional 15 HP.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "18",
                "name": "Cleric++",
                "desc": "Unit can equip staves up to level A.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "19",
                "name": "Resistance +5",
                "desc": "Grants Res+5.",
                "type": "Inheritable Skill",
                "cost": 2000
            }
        ]
    },
    {
        "name": "Roy",
        "statBoosts": [
            {
                "name": 1,
                "HP": 5,
                "Str": 1,
                "Res": 1
            },
            {
                "name": 2,
                "HP": 5,
                "Str": 2,
                "Res": 1
            },
            {
                "name": 4,
                "HP": 7,
                "Str": 2,
                "Res": 1
            },
            {
                "name": 7,
                "HP": 7,
                "Str": 2,
                "Res": 2
            },
            {
                "name": 9,
                "HP": 7,
                "Str": 3,
                "Res": 2
            },
            {
                "name": 12,
                "HP": 10,
                "Str": 3,
                "Res": 2
            },
            {
                "name": 14,
                "HP": 10,
                "Str": 4,
                "Res": 2
            },
            {
                "name": 16,
                "HP": 10,
                "Str": 4,
                "Res": 3
            },
            {
                "name": 17,
                "HP": 10,
                "Str": 5,
                "Res": 3
            },
            {
                "name": 19,
                "HP": 10,
                "Str": 6,
                "Res": 3
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Strength +1",
                "desc": "Grants Str+1.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "1",
                "name": "Hold Out",
                "desc": "If unit had 30% HP or more at start of combat, unit always survives combat with at least 1 HP.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "1",
                "name": "Rise Above",
                "desc": "Grants Lvl+5.[Dragon] Additional Lvl+1.[Cavalry] Mov+1.[Armored] Max HP+5.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Blazing Lion",
                "desc": "Use to attack adjacent foe and an area 3 spaces wide. Target area and the 2 rows beyond it are set on fire. Sword only.[Dragon] Expands attack area.[Mystical] Expands flame area.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Lancereaver",
                "desc": "Unusual sword wielded by Emblem Roy. Grants advantage vs. lances but disadvantage vs. axes.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Strength +2",
                "desc": "Grants Str+2.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "3",
                "name": "Advance",
                "desc": "Use to move 1 space toward a foe that is 2 spaces away and attack.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "4",
                "name": "Sword Power 1",
                "desc": "Grants Atk+2 at a cost of Avo-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Sword Power 2",
                "desc": "Grants Atk+4 at a cost of Avo-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "8",
                "name": "Hold Out+",
                "desc": "If unit had 20% HP or more at start of combat, unit always survives combat with at least 1 HP.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "9",
                "name": "Strength +3",
                "desc": "Grants Str+3.",
                "type": "Inheritable Skill",
                "cost": 3000
            },
            {
                "bond": "9",
                "name": "Sword Power 3",
                "desc": "Grants Atk+6 at a cost of Avo-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 3000
            },
            {
                "bond": "10",
                "name": "Wyrmslayer (Roy)",
                "desc": "Sword wielded by Emblem Roy. Effective: Dragon.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Sword Power 4",
                "desc": "Grants Atk+8 at a cost of Avo-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 4000
            },
            {
                "bond": "13",
                "name": "Hold Out++",
                "desc": "If unit had 10% HP or more at start of combat, unit always survives combat with at least 1 HP.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 4000
            },
            {
                "bond": "14",
                "name": "Strength +4",
                "desc": "Grants Str+4.",
                "type": "Inheritable Skill",
                "cost": 4000
            },
            {
                "bond": "15",
                "name": "Binding Blade",
                "desc": "Famous sword wielded by Emblem Roy. Grants Def/Res+5. Can strike close or at range.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Sword Power 5",
                "desc": "Grants Atk+10 at a cost of Avo-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 5000
            },
            {
                "bond": "17",
                "name": "Strength +5",
                "desc": "Grants Str+5.",
                "type": "Inheritable Skill",
                "cost": 5000
            },
            {
                "bond": "18",
                "name": "Hold Out+++",
                "desc": "If unit had 2 HP or more at start of combat, unit always survives combat with at least 1 HP.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 5000
            },
            {
                "bond": "19",
                "name": "Strength +6",
                "desc": "Grants Str+6.",
                "type": "Inheritable Skill",
                "cost": 6000
            }
        ]
    },
    {
        "name": "Leif",
        "statBoosts": [
            {
                "name": 1,
                "HP": 3,
                "Def": 1,
                "Bld": 3
            },
            {
                "name": 6,
                "HP": 3,
                "Def": 1,
                "Bld": 4
            },
            {
                "name": 9,
                "HP": 5,
                "Def": 1,
                "Bld": 4
            },
            {
                "name": 13,
                "HP": 5,
                "Def": 2,
                "Bld": 4
            },
            {
                "name": 14,
                "HP": 5,
                "Def": 2,
                "Bld": 5
            },
            {
                "name": 17,
                "HP": 7,
                "Def": 2,
                "Bld": 5
            },
            {
                "name": 19,
                "HP": 7,
                "Def": 3,
                "Bld": 5
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Build +3",
                "desc": "Grants Bld+3.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "1",
                "name": "Arms Shield",
                "desc": "When unit has weapon advantage, unit takes 3 less damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 200
            },
            {
                "bond": "1",
                "name": "Adaptable",
                "desc": "If foe initiates combat, unit counters with the best weapon available (in terms of range, weapon advantage, effective bonus, etc.).[Dragon] Hit+30 during combat.[Backup] Crit+10 during combat.[Covert] Avo+20 during combat.[Armored] Def+5 during combat.[Flying] Res+5 during combat.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Quadruple Hit",
                "desc": "Use to attack once each with sword, lance, axe, and bow.[Dragon] +20% damage.[Covert] Foes may drop 1,000G. Trigger %=Lck.[Qi Adept] Breaks foe.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Killer Axe (Leif)",
                "desc": "Axe wielded by Emblem Leif. Easily inflicts fatal wounds.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Axe Prof.",
                "desc": "Proficiency with axes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "3",
                "name": "Vantage",
                "desc": "If unit’s HP is 25% or less and foe initiates combat, unit can counter before foe’s first attack.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "3",
                "name": "Bow Prof.",
                "desc": "Proficiency with bows. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "4",
                "name": "Knife Precision 1",
                "desc": "Grants Hit/Avo+3 when using a knife.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "4",
                "name": "Knife Prof.",
                "desc": "Proficiency with knives. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Build +4",
                "desc": "Grants Bld+4.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "6",
                "name": "Staff Prof.",
                "desc": "Proficiency with staves. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Arms Shield+",
                "desc": "When unit has weapon advantage, unit takes 5 less damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 400
            },
            {
                "bond": "7",
                "name": "Lance Prof.",
                "desc": "Proficiency with lances. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "8",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "9",
                "name": "Knife Precision 2",
                "desc": "Grants Hit/Avo+5 when using a knife.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "10",
                "name": "Master Lance",
                "desc": "Lance wielded by Emblem Leif. If user initiates combat, attacks twice. Can strike close or at range.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Vantage+",
                "desc": "If unit’s HP is 50% or less and foe initiates combat, unit can counter before foe’s first attack.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "13",
                "name": "Knife Precision 3",
                "desc": "Grants Hit/Avo+7 when using a knife.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "14",
                "name": "Build +5",
                "desc": "Grants Bld+5.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "15",
                "name": "Light Brand",
                "desc": "Magical sword wielded by Emblem Leif. Grants Lck+10. Can strike close or at range.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Arms Shield++",
                "desc": "When unit has weapon advantage, unit takes 7 less damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 600
            },
            {
                "bond": "17",
                "name": "Knife Precision 4",
                "desc": "Grants Hit/Avo+10 when using a knife.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "18",
                "name": "Vantage++",
                "desc": "If unit’s HP is 75% or less and foe initiates combat, unit can counter before foe’s first attack.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "19",
                "name": "Knife Precision 5",
                "desc": "Grants Hit/Avo+15 when using a knife.",
                "type": "Inheritable Skill",
                "cost": 2000
            }
        ]
    },
    {
        "name": "Lucina",
        "statBoosts": [
            {
                "name": 1,
                "Dex": 1,
                "Spd": 1,
                "Lck": 2
            },
            {
                "name": 2,
                "Dex": 2,
                "Spd": 1,
                "Lck": 2
            },
            {
                "name": 4,
                "Dex": 2,
                "Spd": 2,
                "Lck": 2
            },
            {
                "name": 7,
                "Dex": 2,
                "Spd": 2,
                "Lck": 4
            },
            {
                "name": 9,
                "Dex": 3,
                "Spd": 2,
                "Lck": 4
            },
            {
                "name": 12,
                "Dex": 3,
                "Spd": 3,
                "Lck": 4
            },
            {
                "name": 14,
                "Dex": 3,
                "Spd": 3,
                "Lck": 6
            },
            {
                "name": 16,
                "Dex": 4,
                "Spd": 3,
                "Lck": 6
            },
            {
                "name": 17,
                "Dex": 4,
                "Spd": 4,
                "Lck": 6
            },
            {
                "name": 19,
                "Dex": 5,
                "Spd": 4,
                "Lck": 6
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Dexterity +1",
                "desc": "Grants Dex+1.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "1",
                "name": "Dual Strike",
                "desc": "Unit participates in chain attacks as if it were a backup unit.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Bonded Shield",
                "desc": "Use to prevent first attacks on adjacent allies until your next turn. Trigger %=80.[Dragon] +10% to trigger rate.[Cavalry] Trigger %=100 for cavalry allies.[Armored] Trigger %=100 for armored allies.[Flying] Trigger %=100 for flying allies.[Qi Adept] Trigger %=100.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "All For One",
                "desc": "Use to make a sword attack against an adjacent foe. All allies within 2 spaces chain attack.[Dragon] Ally chain attacks are guaranteed to hit.[Backup] Range +1.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Noble Rapier",
                "desc": "Sword wielded by Emblem Lucina. Effective: Cavalry, Armored.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Dexterity +2",
                "desc": "Grants Dex+2.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "3",
                "name": "Dual Assist",
                "desc": "If unit is able to chain attack, unit will do so when allies attack foes unit could reach by moving. Trigger %=35.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "4",
                "name": "Bow Agility 1",
                "desc": "Grants Avo+10 at a cost of Crit-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Bow Agility 2",
                "desc": "Grants Avo+15 at a cost of Crit-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "8",
                "name": "Bow Prof.",
                "desc": "Proficiency with bows. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "9",
                "name": "Dexterity +3",
                "desc": "Grants Dex+3.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "10",
                "name": "Parthia",
                "desc": "Bow wielded by Emblem Lucina. Doubles user’s earned experience. Grants Res+5. Effective: Flying.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Bow Agility 3",
                "desc": "Grants Avo+20 at a cost of Crit-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "13",
                "name": "Dual Support",
                "desc": "Grants a bonus to Avo that increases with unit’s support level with adjacent allies. (Max +90) [+5 Avoid for each support level. None = 1, C = 2, B = 3, A = 4, S = 6.]",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "14",
                "name": "Bow Agility 4",
                "desc": "Grants Avo+25 at a cost of Crit-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 3000
            },
            {
                "bond": "15",
                "name": "Parallel Falchion",
                "desc": "Sacred sword wielded by Emblem Lucina. Effective: Dragon.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Dexterity +4",
                "desc": "Grants Dex+4.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "17",
                "name": "Bow Agility 5",
                "desc": "Grants Avo+30 at a cost of Crit-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 4000
            },
            {
                "bond": "18",
                "name": "Dual Assist+",
                "desc": "If unit is able to chain attack, unit will do so when allies attack foes unit could reach by moving. Trigger %=70.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "19",
                "name": "Dexterity +5",
                "desc": "Grants Dex+5.",
                "type": "Inheritable Skill",
                "cost": 2000
            }
        ]
    },
    {
        "name": "Ike",
        "statBoosts": [
            {
                "name": 1,
                "HP": 3,
                "Str": 1,
                "Def": 1
            },
            {
                "name": 2,
                "HP": 3,
                "Str": 1,
                "Def": 2
            },
            {
                "name": 4,
                "HP": 3,
                "Str": 2,
                "Def": 2
            },
            {
                "name": 7,
                "HP": 5,
                "Str": 2,
                "Def": 2
            },
            {
                "name": 8,
                "HP": 5,
                "Str": 2,
                "Def": 3
            },
            {
                "name": 12,
                "HP": 5,
                "Str": 3,
                "Def": 3
            },
            {
                "name": 14,
                "HP": 7,
                "Str": 3,
                "Def": 3
            },
            {
                "name": 16,
                "HP": 7,
                "Str": 3,
                "Def": 4
            },
            {
                "name": 17,
                "HP": 7,
                "Str": 4,
                "Def": 4
            },
            {
                "name": 19,
                "HP": 7,
                "Str": 4,
                "Def": 5
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Defense +1",
                "desc": "Grants Def+1.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "1",
                "name": "Demolish",
                "desc": "Break destructible terrain in a single blow when using Destroy.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 200
            },
            {
                "bond": "1",
                "name": "Resolve",
                "desc": "If unit’s HP is 75% or less after combat, grants Def/Res+5 as long as unit’s HP stays below 75%.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "1",
                "name": "Laguz Friend",
                "desc": "Unit takes 50% less damage, but sets unit’s Avo to 0.[Dragon] Extra -10% to damage.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Great Aether",
                "desc": "Use to grant Def/Res+5, but unit can’t counter for 1 turn. Next turn, attack a 2-space area, heal HP=30% of damage dealt. Sword/axe only.[Dragon] +1 damage per hit taken.[Armored] Grants an extra Def+5.[Flying] Grants an extra Res+5.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Hammer (Ike)",
                "desc": "Hammer of Emblem Ike. Smashes foes. Cannot follow up, or strike first if initiating combat. Eff: Armored.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Defense +2",
                "desc": "Grants Def+2.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "3",
                "name": "Reposition",
                "desc": "Use to move an adjacent ally to the opposite side of unit.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 200
            },
            {
                "bond": "4",
                "name": "Axe Power 1",
                "desc": "Grants Atk+2 at a cost of Avo-10 when using an axe.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Axe Prof.",
                "desc": "Proficiency with axes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Axe Power 2",
                "desc": "Grants Atk+4 at a cost of Avo-10 when using an axe.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "8",
                "name": "Defense +3",
                "desc": "Grants Def+3.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "9",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "10",
                "name": "Urvan",
                "desc": "Heirloom axe wielded by Emblem Ike. Grants Res+3.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Axe Power 3",
                "desc": "Grants Atk+6 at a cost of Avo-10 when using an axe.",
                "type": "Inheritable Skill",
                "cost": 3000
            },
            {
                "bond": "13",
                "name": "Wrath",
                "desc": "At start of combat, for each HP the unit has lost, grants Crit+1 during combat. (Max +30)",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "14",
                "name": "Axe Power 4",
                "desc": "Grants Atk+8 at a cost of Avo-10 when using an axe.",
                "type": "Inheritable Skill",
                "cost": 4000
            },
            {
                "bond": "15",
                "name": "Ragnell",
                "desc": "Sacred sword wielded by Emblem Ike. Grants Def+5. Can strike close or at range.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Defense +4",
                "desc": "Grants Def+4.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "17",
                "name": "Axe Power 5",
                "desc": "Grants Atk+10 at a cost of Avo-10 when using an axe.",
                "type": "Inheritable Skill",
                "cost": 5000
            },
            {
                "bond": "18",
                "name": "Resolve+",
                "desc": "If unit’s HP is 75% or less after combat, grants Def/Res+7 as long as unit’s HP stays below 75%.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "19",
                "name": "Defense +5",
                "desc": "Grants Def+5.",
                "type": "Inheritable Skill",
                "cost": 2000
            }
        ]
    },
    {
        "name": "Byleth",
        "statBoosts": [
            {
                "name": 1,
                "Mag": 1,
                "Spd": 1,
                "Lck": 2
            },
            {
                "name": 2,
                "Mag": 1,
                "Spd": 1,
                "Lck": 4
            },
            {
                "name": 6,
                "Mag": 2,
                "Spd": 1,
                "Lck": 4
            },
            {
                "name": 7,
                "Mag": 2,
                "Spd": 2,
                "Lck": 4
            },
            {
                "name": 8,
                "Mag": 2,
                "Spd": 2,
                "Lck": 6
            },
            {
                "name": 12,
                "Mag": 3,
                "Spd": 2,
                "Lck": 6
            },
            {
                "name": 14,
                "Mag": 3,
                "Spd": 3,
                "Lck": 6
            },
            {
                "name": 16,
                "Mag": 3,
                "Spd": 3,
                "Lck": 8
            },
            {
                "name": 17,
                "Mag": 3,
                "Spd": 3,
                "Lck": 10
            },
            {
                "name": 19,
                "Mag": 3,
                "Spd": 3,
                "Lck": 12
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Luck +2",
                "desc": "Grants Lck+2.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "1",
                "name": "Divine Pulse",
                "desc": "May turn a missed attack into a hit. Trigger %=30. Chance increases with high Lck. [+1% for every 1 Luck.]",
                "type": "Sync Skill (Can Inherit)",
                "cost": 250
            },
            {
                "bond": "1",
                "name": "Instruct",
                "desc": "Use to grant allies within 2 spaces a stat bonus based on user’s type. Bonus lasts for 1 turn.[Dragon] All seven basic stats +3.[Backup] Str+4.[Cavalry] Dex+10.[Covert] Spd+5.[Armored] Def+5.[Flying] Res+5.[Mystical] Mag+4.[Qi Adept] Lck+10.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Goddess Dance",
                "desc": "Use to grant another action to all adjacent allies.[Dragon] Grants +3 to all targets’ basic stats for 1 turn.[Backup] Grants Str+4 to targets for 1 turn.[Cavalry] Grants Dex+10 to targets for 1 turn.[Covert] Grants Spd+5 to targets for 1 turn.[Armored] Grants Def+5 to targets for 1 turn.[Flying] Grants Res+5 to targets for 1 turn.[Mystical] Grants Mag+4 to targets for 1 turn.[Qi Adept] Grants Lck+10 to targets for 1 turn.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Blutgang",
                "desc": "Magical sword wielded by Emblem Byleth. Effective: Dragon, Cavalry.",
                "type": "Engage Weapon (Backup)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Areadbhar",
                "desc": "Lance wielded by Emblem Byleth. If user initiates combat, grants Mt+50%.",
                "type": "Engage Weapon (Cavalry)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Failnaught",
                "desc": "Bow wielded by Emblem Byleth. If user initiates combat, grants Avo+20. Effective: Dragon, Flying.",
                "type": "Engage Weapon (Covert)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Aegis Shield",
                "desc": "Shield wielded by Emblem Byleth. Grants Def+6 and Res+3. May halve damage if carried. Trigger %=Dex.",
                "type": "Engage Weapon (Armor)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Lúin",
                "desc": "Lance wielded by Emblem Byleth. Raises damage based on user’s Spd. Effective: Dragon. [+1 damage for every 3 Spd.]",
                "type": "Engage Weapon (Flying)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Thyrsus",
                "desc": "Staff wielded by Emblem Byleth. Grants magic range +2. May halve damage if carried. [Trigger %=Dex.]",
                "type": "Engage Weapon (Mystical)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Rafail Gem",
                "desc": "Relic gem of Emblem Byleth. User is immune to Effective and critical hits. May halve damage if carried. [Trigger %=Dex.]",
                "type": "Engage Weapon (Qi Adept)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Aymr",
                "desc": "Axe of Emblem Byleth. Smashes foes. Cannot follow up, or strike first if initiating combat. Eff: Dragon.",
                "type": "Engage Weapon (Dragon)",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Luck +4",
                "desc": "Grants Lck+4.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "3",
                "name": "Mentorship",
                "desc": "Grants 1.2× EXP modifier to unit and adjacent allies.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 250
            },
            {
                "bond": "4",
                "name": "Art Focus 1",
                "desc": "Grants Hit+10 at a cost of Ddg-10 when using an art.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Art Focus 2",
                "desc": "Grants Hit+15 at a cost of Ddg-10 when using an art.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "6",
                "name": "Arts Prof.",
                "desc": "Proficiency with arts. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Art Focus 3",
                "desc": "Grants Hit+20 at a cost of Ddg-10 when using an art.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "8",
                "name": "Luck +6",
                "desc": "Grants Lck+6.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "9",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "10",
                "name": "Vajra-Mushti",
                "desc": "Gauntlets wielded by Emblem Byleth. If user initiates combat, attacks twice. Uses lowest of foe’s Def/Res.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Art Focus 4",
                "desc": "Grants Hit+25 at a cost of Ddg-10 when using an art.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "13",
                "name": "Lost & Found",
                "desc": "If unit finishes an action or waits next to an ally, may find an item and increase support with that ally. Trigger %=Lck.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 250
            },
            {
                "bond": "14",
                "name": "Art Focus 5",
                "desc": "Grants Hit+30 at a cost of Ddg-10 when using an art.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "15",
                "name": "Sword of the Creator",
                "desc": "Sword of Emblem Byleth. Raises damage with user’s Mag. Can strike close or at range. Effective: Dragon [+1 damage for every 3 Mag.]",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Luck +8",
                "desc": "Grants Lck+8.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "17",
                "name": "Luck +10",
                "desc": "Grants Lck+10.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "18",
                "name": "Divine Pulse+",
                "desc": "May turn a missed attack into a hit. Trigger %=50. Chance increases with high Lck. [+1% for every 1 Luck.]",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "19",
                "name": "Luck +12",
                "desc": "Grants Lck+12.",
                "type": "Inheritable Skill",
                "cost": 3000
            }
        ]
    },
    {
        "name": "Corrin",
        "statBoosts": [
            {
                "name": 1,
                "HP": 5,
                "Mag": 1,
                "Res": 1
            },
            {
                "name": 2,
                "HP": 7,
                "Mag": 1,
                "Res": 1
            },
            {
                "name": 4,
                "HP": 7,
                "Mag": 2,
                "Res": 1
            },
            {
                "name": 7,
                "HP": 7,
                "Mag": 2,
                "Res": 2
            },
            {
                "name": 9,
                "HP": 10,
                "Mag": 2,
                "Res": 2
            },
            {
                "name": 12,
                "HP": 10,
                "Mag": 3,
                "Res": 2
            },
            {
                "name": 14,
                "HP": 10,
                "Mag": 3,
                "Res": 3
            },
            {
                "name": 16,
                "HP": 12,
                "Mag": 3,
                "Res": 3
            },
            {
                "name": 17,
                "HP": 12,
                "Mag": 4,
                "Res": 3
            },
            {
                "name": 19,
                "HP": 15,
                "Mag": 4,
                "Res": 3
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "HP +5",
                "desc": "Grants max HP+5.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "1",
                "name": "Dragon Vein",
                "desc": "Use to add a special effect to certain spaces.[Dragon] Choose any Vein effect.[Backup] Creates stone pillars that increase Def/Res.[Cavalry] Creates water that decreases Avo.[Covert] Creates fog that increases Avo.[Armored] Creates vines that grant immunity to break.[Flying] Creates healing glow that restores HP.[Mystical] Creates flames that inflict damage.[Qi Adept] Creates ice pillars that hinder movement.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Dreadful Aura",
                "desc": "If unit initiates combat, target foe and all foes within 1 space of it cannot move for 1 turn after combat.[Covert] Also Avo-20 on target.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Torrential Roar",
                "desc": "Use to attack 3 spaces in a line, turning those spaces into water terrain.[Dragon] Range +1.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Dual Katana",
                "desc": "Unusual sword wielded by Emblem Corrin. Grants advantage vs. lances but disadvantage vs. axes.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "HP +7",
                "desc": "Grants max HP+7.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "3",
                "name": "Quality Time",
                "desc": "After unit acts or waits, restores 5 HP to adjacent allies and slightly increases support with them.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 250
            },
            {
                "bond": "4",
                "name": "Sword Focus 1",
                "desc": "Grants Hit+10 at a cost of Ddg-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Sword Focus 2",
                "desc": "Grants Hit+15 at a cost of Ddg-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "8",
                "name": "Draconic Hex",
                "desc": "If unit initiates combat, inflicts -4 to all of foe’s basic stats after combat. (Penalties shrink by 1 each turn.)",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "9",
                "name": "HP +10",
                "desc": "Grants max HP+10.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "10",
                "name": "Wakizashi",
                "desc": "Throwing sword wielded by Emblem Corrin. Can only strike at range, not close up.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Sword Focus 3",
                "desc": "Grants Hit+20 at a cost of Ddg-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "13",
                "name": "Pair Up",
                "desc": "Prevents damage from foes’ chain attacks against unit.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "14",
                "name": "Sword Focus 4",
                "desc": "Grants Hit+25 at a cost of Ddg-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "15",
                "name": "Yato",
                "desc": "Sacred sword wielded by Emblem Corrin.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "HP +12",
                "desc": "Grants max HP+12.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "17",
                "name": "Sword Focus 5",
                "desc": "Grants Hit+30 at a cost of Ddg-10 when using a sword.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "18",
                "name": "Quality Time+",
                "desc": "After unit acts or waits, restores 10 HP to adjacent allies and slightly increases support with them.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "19",
                "name": "HP +15",
                "desc": "Grants max HP+15.",
                "type": "Inheritable Skill",
                "cost": 3000
            }
        ]
    },
    {
        "name": "Eirika",
        "statBoosts": [
            {
                "name": 1,
                "Mag": 1,
                "Dex": 1,
                "Lck": 2
            },
            {
                "name": 2,
                "Mag": 1,
                "Dex": 1,
                "Lck": 4
            },
            {
                "name": 4,
                "Mag": 1,
                "Dex": 2,
                "Lck": 4
            },
            {
                "name": 7,
                "Mag": 2,
                "Dex": 2,
                "Lck": 4
            },
            {
                "name": 8,
                "Mag": 2,
                "Dex": 2,
                "Lck": 6
            },
            {
                "name": 12,
                "Mag": 2,
                "Dex": 3,
                "Lck": 6
            },
            {
                "name": 14,
                "Mag": 3,
                "Dex": 3,
                "Lck": 6
            },
            {
                "name": 16,
                "Mag": 3,
                "Dex": 3,
                "Lck": 8
            },
            {
                "name": 17,
                "Mag": 3,
                "Dex": 4,
                "Lck": 8
            },
            {
                "name": 19,
                "Mag": 3,
                "Dex": 4,
                "Lck": 10
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Lunar Brace",
                "desc": "If unit initiates combat with a physical attack, deals extra damage=20% of foe’s Def.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "1",
                "name": "Solar Brace",
                "desc": "If unit initiates combat, unit recovers HP=30% of damage dealt.",
                "type": "Sync Skill (Ephraim)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Eclipse Brace",
                "desc": "If unit initiates combat, unit deals extra damage=20% of foe’s Def with physical attacks and recovers HP=30% of damage dealt.",
                "type": "Sync Skill (Engaged)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Dodge +10",
                "desc": "Grants Ddg+10.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "1",
                "name": "Night and Day",
                "desc": "Use to switch Emblems and swap between Lunar Brace/Gentility and Solar Brace/Bravery for all allies.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Sacred Twins",
                "desc": "While engaged with Eirika, changes Lunar Brace to Eclipse Brace and Gentility to Blue Skies for all allies.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Twin Strike",
                "desc": "Use to make a sword attack followed by a lance attack from Ephraim on adjacent foe. Effective: Corrupted.[Dragon] +20% damage.[Cavalry] Ephraim deals +50% damage.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Rapier",
                "desc": "Sword wielded by Emblem Marth. Effective: Cavalry, Armored.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Lance Agility 1",
                "desc": "Grants Avo+10 at a cost of Crit-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "3",
                "name": "Gentility",
                "desc": "Unit takes 3 less damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "3",
                "name": "Bravery",
                "desc": "Unit deals +3 damage.",
                "type": "Sync Skill (Ephraim)",
                "cost": 0
            },
            {
                "bond": "3",
                "name": "Blue Skies",
                "desc": "Unit takes 3 less damage and deals +3 damage.",
                "type": "Sync Skill (Engaged)",
                "cost": 0
            },
            {
                "bond": "4",
                "name": "Dodge +15",
                "desc": "Grants Ddg+15.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Lance Prof.",
                "desc": "Proficiency with lances. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Lance Agility 2",
                "desc": "Grants Avo+15 at a cost of Crit-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "8",
                "name": "Dodge +20",
                "desc": "Grants Ddg+20.",
                "type": "Inheritable Skill",
                "cost": 1500
            },
            {
                "bond": "9",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "10",
                "name": "Wind Sword",
                "desc": "Magical sword wielded by Emblem Eirika. Can strike close or at range. Effective: Flying.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Lance Agility 3",
                "desc": "Grants Avo+20 at a cost of Crit-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "13",
                "name": "Lunar Brace+",
                "desc": "If unit initiates combat with a physical attack, deals extra damage=30% of foe’s Def.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 5000
            },
            {
                "bond": "13",
                "name": "Solar Brace+",
                "desc": "If unit initiates combat, unit recovers HP=50% of damage dealt.",
                "type": "Sync Skill (Ephraim)",
                "cost": 0
            },
            {
                "bond": "13",
                "name": "Eclipse Brace+",
                "desc": "If unit initiates combat, unit deals extra damage=30% of foe’s Def with physical attacks and recovers HP=50% of damage dealt.",
                "type": "Sync Skill (Engaged)",
                "cost": 0
            },
            {
                "bond": "14",
                "name": "Dodge +25",
                "desc": "Grants Ddg+25.",
                "type": "Inheritable Skill",
                "cost": 2000
            },
            {
                "bond": "15",
                "name": "Sieglinde",
                "desc": "Paired sword wielded by Emblem Eirika. Effective: Corrupted.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Lance Agility 4",
                "desc": "Grants Avo+25 at a cost of Crit-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 3000
            },
            {
                "bond": "17",
                "name": "Lance Agility 5",
                "desc": "Grants Avo+30 at a cost of Crit-10 when using a lance.",
                "type": "Inheritable Skill",
                "cost": 4000
            },
            {
                "bond": "18",
                "name": "Gentility+",
                "desc": "Unit takes 5 less damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "18",
                "name": "Bravery+",
                "desc": "Unit deals +5 damage.",
                "type": "Sync Skill (Ephraim)",
                "cost": 0
            },
            {
                "bond": "18",
                "name": "Blue Skies+",
                "desc": "Unit takes 5 less damage and deals +5 damage.",
                "type": "Sync Skill (Engaged)",
                "cost": 0
            },
            {
                "bond": "19",
                "name": "Dodge +30",
                "desc": "Grants Ddg+30.",
                "type": "Inheritable Skill",
                "cost": 2500
            }
        ]
    },
    {
        "name": "Alear",
        "statBoosts": [
            {
                "name": 1,
                "HP": 5,
                "Spd": 1,
                "Def": 1
            },
            {
                "name": 5,
                "HP": 7,
                "Spd": 2,
                "Def": 1
            },
            {
                "name": 10,
                "HP": 10,
                "Spd": 2,
                "Def": 2
            },
            {
                "name": 20,
                "HP": 15,
                "Spd": 4,
                "Def": 4
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Holy Aura",
                "desc": "Unit is Effective: Fell Dragon. Allies within 2 spaces with Effective: Dragon gain Effective: Fell Dragon. [Might multiplier of 2.]",
                "type": "Sync Skill (Cannot Inherit)"
            },
            {
                "bond": "1",
                "name": "Attuned",
                "desc": "If unit initiates combat and defeats foe, grants engage partner +4 to all seven basic stats while engaged.[Dragon] Extra +1 to all stats.[Backup] Extra +2 to Str.[Cavalry] Extra +2 to Dex.[Covert] Extra +2 to Spd.[Armored] Extra +2 to Def.[Flying] Extra +2 to Res.[Mystical] Extra +2 to Mag.[Qi Adept] Extra +2 to Lck.",
                "type": "Engage Skill"
            },
            {
                "bond": "1",
                "name": "Dragon Blast",
                "desc": "Use to make two attacks against an adjacent foe with a sword and powerful magic beam.[Dragon] +20% damage.[Backup] Adds 20% of Str to sword attack.[Mystical] Adds 20% of Mag to beam attack.[Qi Adept] Breaks foe.",
                "type": "Engage Attack"
            },
            {
                "bond": "1",
                "name": "Bond Blast",
                "desc": "Use to make a sword attack from the unit and engage partner followed by a magic beam attack against an adjacent foe.[Dragon] +20% damage.[Backup] +20% of Str to sword.[Mystical] +20% of Mag to beam.[Qi Adept] Breaks foe.",
                "type": "Engage Attack (Emblem Alear is adjacent to Engage partner or vice versa)"
            },
            {
                "bond": "1",
                "name": "Lyrátion",
                "desc": "Sword of Emblem Alear. If user defeats foe in player phase, fills adjacent allies’ engage meters by 1.",
                "type": "Engage Weapon"
            },
            {
                "bond": "5",
                "name": "Bond Forger",
                "desc": "Grants Hit/Avo+20 to unit and allies within 2 spaces that are synced or engaged with an Emblem.",
                "type": "Sync Skill (Cannot Inherit)"
            },
            {
                "bond": "10",
                "name": "Dragon’s Fist",
                "desc": "Magical attack wielded by Emblem Alear. If user initiates combat, attacks twice. (Uses Mag.)",
                "type": "Engage Weapon"
            },
            {
                "bond": "10",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock"
            },
            {
                "bond": "10",
                "name": "Arts Prof.",
                "desc": "Proficiency with arts. Required for promotion to certain classes.",
                "type": "Unlock"
            },
            {
                "bond": "20",
                "name": "Bond Forger+",
                "desc": "Grants Hit/Avo+30 to unit and allies within 2 spaces that are synced or engaged with an Emblem.",
                "type": "Sync Skill (Cannot Inherit)"
            },
            {
                "bond": "20",
                "name": "Holy Shield",
                "desc": "Neutralizes Effective against this unit.",
                "type": "Sync Skill (Cannot Inherit)"
            },
            {
                "bond": "20",
                "name": "Oligoludia",
                "desc": "Sword wielded by Emblem Alear. Effective: Corrupted.",
                "type": "Engage Weapon"
            },
            {
                "bond": "21",
                "name": "Boon of Elyos",
                "desc": "If unit initiates combat, grants bonus to Crit and Ddg equal to 2× the number of allies who have acted this turn.",
                "type": "Sync Skill (Cannot Inherit)"
            }
        ]
    },
    {
        "name": "Edelgard",
        "statBoosts": [
            {
                "name": 1,
                "Str": 2,
                "Dex": 1,
                "Def": 1
            },
            {
                "name": 2,
                "Str": 2,
                "Dex": 2,
                "Def": 1
            },
            {
                "name": 4,
                "Str": 2,
                "Dex": 2,
                "Def": 2
            },
            {
                "name": 7,
                "Str": 3,
                "Dex": 2,
                "Def": 2
            },
            {
                "name": 8,
                "Str": 3,
                "Dex": 3,
                "Def": 2
            },
            {
                "name": 14,
                "Str": 3,
                "Dex": 3,
                "Def": 3
            },
            {
                "name": 16,
                "Str": 4,
                "Dex": 3,
                "Def": 3
            },
            {
                "name": 18,
                "Str": 4,
                "Dex": 4,
                "Def": 3
            },
            {
                "name": 19,
                "Str": 5,
                "Dex": 4,
                "Def": 3
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Gambit",
                "desc": "Effects change based on synced Emblem.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Flame Gambit",
                "desc": "Use when synced with Edelgard to attack a foe, then set the target foe’s space and nearby spaces on fire.",
                "type": "Command Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Shield Gambit",
                "desc": "Use when synced with Dimitri to negate damage from first attacks of ranged foes targeting unit in next enemy phase.",
                "type": "Command Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Poison Gambit",
                "desc": "Use when synced with Claude to attack a foe, then poison target and all foes adjacent to it after combat.",
                "type": "Command Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Friendly Rivalry",
                "desc": "At start of player phase, the Emblem will randomly switch to Edelgard, Dimitri, or Claude.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Combat Arts",
                "desc": "Enables use of Edelgard, Dimitri, or Claude’s Combat Art. Spends some remaining engage turns.[Dragon] +10% damage.[Covert] Avo+20.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Raging Storm",
                "desc": "After combat, take another action. (Spend 3 turns.)",
                "type": "Command Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Atrocity",
                "desc": "Attack at double weapon’s Mt. (Spend 1 turn.)",
                "type": "Command Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Fallen Star",
                "desc": "Avoid foe’s attacks during next combat. (Spend 1 turn.)",
                "type": "Command Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Houses Unite",
                "desc": "Use to attack with Aymr, Areadbhar, and Failnaught at 50% damage.[Dragon] +10% damage.[Cavalry] +10% damage with Areadbhar.[Covert] +10% damage with Failnaught.[Armored] +10% damage with Aymr.[Qi Adept] Breaks foe.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Houses Unite+",
                "desc": "Use to attack with Aymr, Areadbhar, and Failnaught at 50% damage. After combat, take another action.[Dragon] +10% damage.[Cavalry] +10% damage with Areadbhar.[Covert] +10% damage with Failnaught.[Armored] +10% damage with Aymr.[Qi Adept] Breaks foe.",
                "type": "Engage Attack (Requires adjacent Byleth)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Aymr (Edelgard)",
                "desc": "Axe of Emblem Edelgard. Smashes foes. Cannot follow up, or strike first if initiating combat. Eff: Dragon.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Assembly Gambit",
                "desc": "Use to attack an adjacent foe, then move 1 space away after combat. Target foe moves to unit’s previous space.",
                "type": "Inheritable Skill",
                "cost": 1500
            },
            {
                "bond": "3",
                "name": "Str/Dex +1",
                "desc": "Grants Str+1 and Dex+1.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "3",
                "name": "Lineage",
                "desc": "Increases unit’s earned experience by 20%.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 150
            },
            {
                "bond": "4",
                "name": "Bow Guard 1",
                "desc": "If foe is equipped with a bow, unit takes 1 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 200
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Axe Prof.",
                "desc": "Proficiency with axes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Str/Dex +2",
                "desc": "Grants Str+2 and Dex+2.",
                "type": "Inheritable Skill",
                "cost": 1600
            },
            {
                "bond": "8",
                "name": "Bow Guard 2",
                "desc": "If foe is equipped with a bow, unit takes 2 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 400
            },
            {
                "bond": "9",
                "name": "Lance Prof.",
                "desc": "Proficiency with lances. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "10",
                "name": "Areadbhar (Dimitri)",
                "desc": "Lance wielded by Emblem Dimitri. If user initiates combat, grants Mt+50%.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Weapon Sync",
                "desc": "If unit initiates combat using same weapon type as the synced Emblem, grants Atk+5. If engaged, grants Atk+5 regardless of weapon type.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "12",
                "name": "Str/Dex +3",
                "desc": "Grants Str+3 and Dex+3.",
                "type": "Inheritable Skill",
                "cost": 4200
            },
            {
                "bond": "13",
                "name": "Bow Prof.",
                "desc": "Proficiency with bows. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "14",
                "name": "Bow Guard 3",
                "desc": "If foe is equipped with a bow, unit takes 3 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 600
            },
            {
                "bond": "15",
                "name": "Failnaught (Claude)",
                "desc": "Bow wielded by Emblem Claude. If user initiates combat, grants Avo+20. Effective: Dragon, Flying.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Str/Dex +4",
                "desc": "Grants Str+4 and Dex+4.",
                "type": "Inheritable Skill",
                "cost": 6000
            },
            {
                "bond": "17",
                "name": "Weapon Sync+",
                "desc": "If unit initiates combat using same weapon type as the synced Emblem, grants Atk+7. If engaged, grants Atk+7 regardless of weapon type.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 5000
            },
            {
                "bond": "17",
                "name": "Bow Guard 4",
                "desc": "If foe is equipped with a bow, unit takes 4 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 800
            },
            {
                "bond": "18",
                "name": "Str/Dex +5",
                "desc": "Grants Str+5 and Dex+5.",
                "type": "Inheritable Skill",
                "cost": 8400
            },
            {
                "bond": "19",
                "name": "Bow Guard 5",
                "desc": "If foe is equipped with a bow, unit takes 5 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 1000
            }
        ]
    },
    {
        "name": "Tiki",
        "statBoosts": [
            {
                "name": 1,
                "HP": 5,
                "Def": 1,
                "Lck": 2
            },
            {
                "name": 2,
                "HP": 5,
                "Def": 1,
                "Lck": 4
            },
            {
                "name": 4,
                "HP": 5,
                "Def": 2,
                "Lck": 4
            },
            {
                "name": 7,
                "HP": 7,
                "Def": 2,
                "Lck": 4
            },
            {
                "name": 9,
                "HP": 7,
                "Def": 2,
                "Lck": 6
            },
            {
                "name": 12,
                "HP": 7,
                "Def": 3,
                "Lck": 6
            },
            {
                "name": 13,
                "HP": 10,
                "Def": 3,
                "Lck": 6
            },
            {
                "name": 15,
                "HP": 10,
                "Def": 3,
                "Lck": 8
            },
            {
                "name": 17,
                "HP": 10,
                "Def": 4,
                "Lck": 8
            },
            {
                "name": 18,
                "HP": 10,
                "Def": 4,
                "Lck": 10
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Starsphere",
                "desc": "Grants unit enhanced stat growth when leveling up. [Adds +15% to final growth rates.]",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1500
            },
            {
                "bond": "1",
                "name": "Draconic Form",
                "desc": "Unit transforms into and fights as a dragon while engaged. Grants +10 to max HP and +5 to Bld and all basic stats.[Armored] Negates terrain damage.[Mystical] Grants an extra Res+5.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Divine Blessing",
                "desc": "Use to grant 1 ally a Revival Stone.[Dragon] Restore 20 HP to ally.[Qi Adept] Heal their status effects.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Divine Blessing+",
                "desc": "Use to grant 1 ally a Revival Stone. If ally is not synced, fully restore HP. If ally is synced, +3 to engage meter. If ally is engaged, restore engage turns.[Dragon] Restore 20 HP to ally.[Qi Adept] Heal their status effects.",
                "type": "Engage Attack (Requires adjacent Marth)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Eternal Claw",
                "desc": "Claw attack used by Emblem Tiki. Easily inflicts fatal wounds.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Tail Smash",
                "desc": "Smash attack used by Emblem Tiki. Smashes foes. Cannot follow up, or strike first if initiating combat.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Fire Breath",
                "desc": "A scorching breath attack. Ignores foe’s Def/Res.",
                "type": "Engage Weapon (Backup, Cavalry, Covert and Qi Adept)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Ice Breath",
                "desc": "Strikes foes in area at half Def. Freezes foes. Cannot follow up, or strike first if initiating combat.",
                "type": "Engage Weapon (Armor)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Flame Breath",
                "desc": "Sets area on fire. Strikes foes at 70% damage and half Def. Cannot follow up, or strike first if initiating combat.",
                "type": "Engage Weapon (Flying)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Dark Breath",
                "desc": "Magically strikes foes in area at half Res. Cannot follow up, or strike first if initiating combat.",
                "type": "Engage Weapon (Mystical)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Fog Breath",
                "desc": "Strikes foes in area at half Def. Eff: Dragon. Creates fog. Cannot follow up, or strike first if initiating combat.",
                "type": "Engage Weapon (Dragon)",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "HP/Lck +2",
                "desc": "Grants HP+2 and Lck+2.",
                "type": "Inheritable Skill",
                "cost": 200
            },
            {
                "bond": "3",
                "name": "Geosphere",
                "desc": "At start of player phase, if there are allies adjacent to unit, grants Def/Res+3 to unit and those allies for 1 turn.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "4",
                "name": "Special Guard 1",
                "desc": "If foe is equipped with a special attack, unit takes 1 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 200
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Arts Prof.",
                "desc": "Proficiency with arts. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "HP/Lck +4",
                "desc": "Grants HP+4 and Lck+4.",
                "type": "Inheritable Skill",
                "cost": 600
            },
            {
                "bond": "8",
                "name": "Lifesphere",
                "desc": "If unit uses Wait without attacking or using items, restores 20 HP and heals status effects.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "9",
                "name": "Special Guard 2",
                "desc": "If foe is equipped with a special attack, unit takes 2 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 400
            },
            {
                "bond": "10",
                "name": "Lightsphere",
                "desc": "If unit initiates combat, halves chance of receiving critical hit from foe.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 900
            },
            {
                "bond": "12",
                "name": "HP/Lck +6",
                "desc": "Grants HP+6 and Lck+6.",
                "type": "Inheritable Skill",
                "cost": 1100
            },
            {
                "bond": "13",
                "name": "Special Guard 3",
                "desc": "If foe is equipped with a special attack, unit takes 3 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 600
            },
            {
                "bond": "14",
                "name": "Lifesphere+",
                "desc": "If unit uses Wait without attacking or using items, restores 30 HP and heals status effects.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "15",
                "name": "HP/Lck +8",
                "desc": "Grants HP+8 and Lck+8.",
                "type": "Inheritable Skill",
                "cost": 1900
            },
            {
                "bond": "16",
                "name": "Geosphere+",
                "desc": "At start of player phase, if there are allies adjacent to unit, grants Def/Res+5 to unit and those allies for 1 turn.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "17",
                "name": "Special Guard 4",
                "desc": "If foe is equipped with a special attack, unit takes 4 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 800
            },
            {
                "bond": "18",
                "name": "HP/Lck +10",
                "desc": "Grants HP+10 and Lck+10.",
                "type": "Inheritable Skill",
                "cost": 3600
            },
            {
                "bond": "19",
                "name": "Lifesphere++",
                "desc": "If unit uses Wait without attacking or using items, restores 40 HP and heals status effects.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "19",
                "name": "Special Guard 5",
                "desc": "If foe is equipped with a special attack, unit takes 5 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 1000
            }
        ]
    },
    {
        "name": "Hector",
        "statBoosts": [
            {
                "name": 1,
                "Str": 1,
                "Def": 2,
                "Bld": 1
            },
            {
                "name": 2,
                "Str": 2,
                "Def": 2,
                "Bld": 1
            },
            {
                "name": 4,
                "Str": 2,
                "Def": 3,
                "Bld": 1
            },
            {
                "name": 7,
                "Str": 2,
                "Def": 3,
                "Bld": 2
            },
            {
                "name": 9,
                "Str": 3,
                "Def": 3,
                "Bld": 2
            },
            {
                "name": 13,
                "Str": 3,
                "Def": 4,
                "Bld": 2
            },
            {
                "name": 14,
                "Str": 4,
                "Def": 4,
                "Bld": 2
            },
            {
                "name": 17,
                "Str": 4,
                "Def": 4,
                "Bld": 3
            },
            {
                "name": 18,
                "Str": 4,
                "Def": 5,
                "Bld": 3
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Quick Riposte",
                "desc": "If unit’s HP is 80% or more and foe initiates combat, unit will always follow up (if weapon allows).",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "1",
                "name": "Impenetrable",
                "desc": "If foe initiates combat, grants Def/Res+30% during combat.[Dragon] Ddg+50%.[Cavalry] Grants immunity to freeze.[Armored] Grants Def+50% instead of +30%.[Flying] Grants Res+50% instead of +30%.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Storm’s Eye",
                "desc": "Grants immunity to break. Foe cannot follow up. Unit follows up. Lasts 1 turn. Sword/axe only.[Dragon] Prevent one critical hit.[Backup] Crit+20.[Covert] Avo+30.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Storm’s Eye+",
                "desc": "Grants immunity to break. Foe cannot follow up. Unit counters before foe’s first attack and follows up. Lasts 1 turn. Sword/axe only. [Dragon] Prevent one critical hit.[Backup] Crit+20.[Covert] Avo+30.",
                "type": "Engage Attack (Requires adjacent Lyn)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Wolf Beil",
                "desc": "Axe wielded by Emblem Hector. Effective: Cavalry, Armored.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Str/Def +1",
                "desc": "Grants Str+1 and Def+1.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "3",
                "name": "Adaptability",
                "desc": "When hit by a foe’s attack, grants Def+2 for a physical attack or Res+2 for a magical attack after combat. Lasts until end of battle, or until activated again.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 350
            },
            {
                "bond": "4",
                "name": "Axe Guard 1",
                "desc": "If foe is equipped with an axe, unit takes 1 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 200
            },
            {
                "bond": "6",
                "name": "Axe Prof.",
                "desc": "Proficiency with axes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Str/Def +2",
                "desc": "Grants Str+2 and Def+2.",
                "type": "Inheritable Skill",
                "cost": 1600
            },
            {
                "bond": "8",
                "name": "Heavy Attack",
                "desc": "When making a physical attack, if an equipped weapon’s Wt exceeds unit’s Bld, adds excess as damage. (Max +5)",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "9",
                "name": "Axe Guard 2",
                "desc": "If foe is equipped with an axe, unit takes 2 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 400
            },
            {
                "bond": "10",
                "name": "Runesword",
                "desc": "Magic sword of Emblem Hector. Can strike close or at range. Restore HP equal to 50% of damage dealt.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Str/Def +3",
                "desc": "Grants Str+3 and Def+3.",
                "type": "Inheritable Skill",
                "cost": 4200
            },
            {
                "bond": "12",
                "name": "Piercing Glare",
                "desc": "Use when HP is full to consume 20% of max HP and prevent foes from entering the 4 spaces diagonally adjacent to unit for 1 turn.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "13",
                "name": "Axe Guard 3",
                "desc": "If foe is equipped with an axe, unit takes 3 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 600
            },
            {
                "bond": "14",
                "name": "Str/Def +4",
                "desc": "Grants Str+4 and Def+4.",
                "type": "Inheritable Skill",
                "cost": 6000
            },
            {
                "bond": "15",
                "name": "Armads",
                "desc": "Lightning-charged axe wielded by Emblem Hector. Grants Def+5. Effective: Dragon.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Quick Riposte+",
                "desc": "If unit’s HP is 60% or more and foe initiates combat, unit will always follow up (if weapon allows).",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "17",
                "name": "Axe Guard 4",
                "desc": "If foe is equipped with an axe, unit takes 4 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 800
            },
            {
                "bond": "18",
                "name": "Str/Def +5",
                "desc": "Grants Str+5 and Def+5.",
                "type": "Inheritable Skill",
                "cost": 8400
            },
            {
                "bond": "19",
                "name": "Adaptability+",
                "desc": "When hit by a foe’s attack, grants Def+3 for a physical attack or Res+3 for a magical attack after combat. Lasts until end of battle, or until activated again.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 700
            },
            {
                "bond": "19",
                "name": "Axe Guard 5",
                "desc": "If foe is equipped with an axe, unit takes 5 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 1000
            }
        ]
    },
    {
        "name": "Soren",
        "statBoosts": [
            {
                "name": 1,
                "Mag": 1,
                "Dex": 1,
                "Res": 2
            },
            {
                "name": 2,
                "Mag": 2,
                "Dex": 1,
                "Res": 2
            },
            {
                "name": 3,
                "Mag": 2,
                "Dex": 2,
                "Res": 2
            },
            {
                "name": 7,
                "Mag": 2,
                "Dex": 2,
                "Res": 3
            },
            {
                "name": 8,
                "Mag": 3,
                "Dex": 2,
                "Res": 3
            },
            {
                "name": 12,
                "Mag": 3,
                "Dex": 3,
                "Res": 3
            },
            {
                "name": 14,
                "Mag": 3,
                "Dex": 3,
                "Res": 4
            },
            {
                "name": 17,
                "Mag": 4,
                "Dex": 3,
                "Res": 4
            },
            {
                "name": 19,
                "Mag": 4,
                "Dex": 3,
                "Res": 5
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Assign Decoy",
                "desc": "Use to make one chosen ally more likely to be targeted by enemies for 1 turn. Effect is removed after ally is targeted by or otherwise damaged by foes 3 times.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1500
            },
            {
                "bond": "1",
                "name": "Flare",
                "desc": "When attacking with tomes, inflicts Res-20% on foe, and unit recovers 50% of damage dealt.[Dragon] Critical hit rate doubled [error with in-game description].[Mystical] Extra -10% to foe’s Res.[Qi Adept] Unit recovers 100% of damage dealt instead.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Cataclysm",
                "desc": "Use to attack foes in an area with fire, thunder and wind magic at 40% damage. Wind is effective: Flying.[Dragon] Sets terrain on fire.[Mystical] +10% damage.[Qi Adept] 20% chance of breaking target.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Cataclysm+",
                "desc": "Use to attack foes in an area with fire, thunder and wind magic at 40% damage. Wind is effective: Flying.[Dragon] Sets terrain on fire.[Mystical] +10% damage.[Qi Adept] 20% chance of breaking target.",
                "type": "Engage Attack (Requires adjacent Ike)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Bolting",
                "desc": "Long-range thunder magic wielded by Emblem Soren. Cannot follow up.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Mag/Res +1",
                "desc": "Grants Mag+1 and Res+1.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "3",
                "name": "Magic Guard 1",
                "desc": "If foe is equipped with a tome, unit takes 1 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 200
            },
            {
                "bond": "4",
                "name": "Anima Focus",
                "desc": "When using tomes, unit inflicts Def-3 with fire, Hit-20 with thunder, or Mov-2 with wind magic for 1 turn.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 800
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Knife Prof.",
                "desc": "Proficiency with knives. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Mag/Res +2",
                "desc": "Grants Mag+2 and Res+2.",
                "type": "Inheritable Skill",
                "cost": 1600
            },
            {
                "bond": "8",
                "name": "Magic Guard 2",
                "desc": "If foe is equipped with a tome, unit takes 2 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 400
            },
            {
                "bond": "9",
                "name": "Keen Insight",
                "desc": "When unit deals Effective damage, deal +5 damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1500
            },
            {
                "bond": "10",
                "name": "Reflect",
                "desc": "Staff of Emblem Soren. Allies within 2 spaces gain “deals 50% of magic damage taken back to foe” for 1 turn.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Mag/Res +3",
                "desc": "Grants Mag+3 and Res+3.",
                "type": "Inheritable Skill",
                "cost": 4200
            },
            {
                "bond": "12",
                "name": "Staff Prof.",
                "desc": "Proficiency with staves. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "13",
                "name": "Block Recovery",
                "desc": "When attacking a broken foe with a tome, grants a chance the foe will remain broken. Chance increases with high Spd.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1500
            },
            {
                "bond": "13",
                "name": "Magic Guard 3",
                "desc": "If foe is equipped with a tome, unit takes 3 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 600
            },
            {
                "bond": "14",
                "name": "Mag/Res +4",
                "desc": "Grants Mag+4 and Res+4.",
                "type": "Inheritable Skill",
                "cost": 6000
            },
            {
                "bond": "15",
                "name": "Rexcalibur",
                "desc": "Powerful wind magic wielded by Emblem Soren. Effective: Flying.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Tome Prof.",
                "desc": "Proficiency with tomes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "17",
                "name": "Magic Guard 4",
                "desc": "If foe is equipped with a tome, unit takes 4 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 800
            },
            {
                "bond": "18",
                "name": "Keen Insight+",
                "desc": "When unit deals Effective damage, deal +7 damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "18",
                "name": "Mag/Res +5",
                "desc": "Grants Mag+5 and Res+5.",
                "type": "Inheritable Skill",
                "cost": 8400
            },
            {
                "bond": "19",
                "name": "Magic Guard 5",
                "desc": "If foe is equipped with a tome, unit takes 5 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 1000
            }
        ]
    },
    {
        "name": "Camilla",
        "statBoosts": [
            {
                "name": 1,
                "HP": 3,
                "Spd": 2,
                "Res": 1
            },
            {
                "name": 2,
                "HP": 3,
                "Spd": 2,
                "Res": 2
            },
            {
                "name": 3,
                "HP": 5,
                "Spd": 2,
                "Res": 2
            },
            {
                "name": 7,
                "HP": 5,
                "Spd": 3,
                "Res": 2
            },
            {
                "name": 9,
                "HP": 5,
                "Spd": 3,
                "Res": 3
            },
            {
                "name": 13,
                "HP": 7,
                "Spd": 3,
                "Res": 3
            },
            {
                "name": 14,
                "HP": 7,
                "Spd": 4,
                "Res": 3
            },
            {
                "name": 16,
                "HP": 7,
                "Spd": 4,
                "Res": 4
            },
            {
                "name": 19,
                "HP": 7,
                "Spd": 5,
                "Res": 4
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Spd/Res +1",
                "desc": "Grants Spd+1 and Res+1.",
                "type": "Inheritable Skill",
                "cost": 250
            },
            {
                "bond": "1",
                "name": "Dragon Vein",
                "desc": "Use to add a special effect to certain spaces.[Dragon] Choose any Vein effect.[Backup] Creates stone pillars that increase Def/Res.[Cavalry] Creates water that decreases Avo.[Covert] Creates smoke that decreases Def/Avo.[Armored] Creates vines that grant immunity to break.[Flying] Creates healing glow that restores HP.[Mystical] Creates flames that inflict damage.[Qi Adept] Creates ice floor that increases movement.",
                "type": "Sync Skill (Cannot Inherit)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Soar",
                "desc": "Grants Mov+2. Unit can cross terrain as if flying.[Dragon] If unit initiates combat, deals damage to foes within 2 spaces equal to 10% of their max HP after combat.[Cavalry] Grants an extra Mov+2.[Flying] Grants an extra Mov+1.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Dark Inferno",
                "desc": "Use to deal damage to foes on certain spaces near unit and set those spaces on fire.[Dragon] Increases area of effect.[Mystical] +20% damage.[Qi Adept] Adds Glow to adjacent spaces.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Dark Inferno+",
                "desc": "Use to deal damage to foes on certain spaces near unit and set those spaces on fire.[Dragon] Increases area of effect.[Mystical] +20% damage.[Qi Adept] Adds Glow to adjacent spaces.",
                "type": "Engage Attack (Requires adjacent Corrin)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Bolt Axe",
                "desc": "Magic axe wielded by Emblem Camilla. Can strike close or at range.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Lance Guard 1",
                "desc": "If foe is equipped with a lance, unit takes 1 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 200
            },
            {
                "bond": "3",
                "name": "Spd/Res +2",
                "desc": "Grants Spd+2 and Res+2.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "4",
                "name": "Decisive Strike",
                "desc": "If unit initiates combat and lands a critical, deals 5 damage to foe after combat.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Axe Prof.",
                "desc": "Proficiency with axes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Lance Guard 2",
                "desc": "If foe is equipped with a lance, unit takes 2 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 400
            },
            {
                "bond": "8",
                "name": "Detoxify",
                "desc": "Cures poison at start of turn.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 250
            },
            {
                "bond": "9",
                "name": "Spd/Res +3",
                "desc": "Grants Spd+3 and Res+3.",
                "type": "Inheritable Skill",
                "cost": 1200
            },
            {
                "bond": "10",
                "name": "Lightning",
                "desc": "Magic wielded by Emblem Camilla. If user initiates combat, attacks twice.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Groundswell",
                "desc": "After unit acts or waits in flames, miasma, or similar terrain effect, unit clears effect and recovers 10 HP.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 500
            },
            {
                "bond": "13",
                "name": "Lance Guard 3",
                "desc": "If foe is equipped with a lance, unit takes 3 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 600
            },
            {
                "bond": "14",
                "name": "Spd/Res +4",
                "desc": "Grants Spd+4 and Res+4.",
                "type": "Inheritable Skill",
                "cost": 2400
            },
            {
                "bond": "15",
                "name": "Camilla’s Axe",
                "desc": "Axe wielded by Emblem Camilla. Grants Res+10 and deals extra damage = foe’s Res-Def.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Lance Guard 4",
                "desc": "If foe is equipped with a lance, unit takes 4 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 800
            },
            {
                "bond": "17",
                "name": "Tome Prof.",
                "desc": "Proficiency with tomes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "18",
                "name": "Decisive Strike+",
                "desc": "If unit initiates combat and lands a critical, deals 10 damage to foe after combat.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "18",
                "name": "Spd/Res +5",
                "desc": "Grants Spd+5 and Res+5.",
                "type": "Inheritable Skill",
                "cost": 4800
            },
            {
                "bond": "19",
                "name": "Lance Guard 5",
                "desc": "If foe is equipped with a lance, unit takes 5 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 1000
            }
        ]
    },
    {
        "name": "Veronica",
        "statBoosts": [
            {
                "name": 1,
                "Mag": 2,
                "Res": 1,
                "Lck": 2
            },
            {
                "name": 2,
                "Mag": 2,
                "Res": 2,
                "Lck": 2
            },
            {
                "name": 4,
                "Mag": 2,
                "Res": 2,
                "Lck": 4
            },
            {
                "name": 7,
                "Mag": 3,
                "Res": 2,
                "Lck": 4
            },
            {
                "name": 9,
                "Mag": 3,
                "Res": 3,
                "Lck": 4
            },
            {
                "name": 12,
                "Mag": 3,
                "Res": 3,
                "Lck": 6
            },
            {
                "name": 14,
                "Mag": 4,
                "Res": 3,
                "Lck": 6
            },
            {
                "name": 17,
                "Mag": 4,
                "Res": 4,
                "Lck": 6
            },
            {
                "name": 19,
                "Mag": 5,
                "Res": 4,
                "Lck": 6
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Reprisal",
                "desc": "If unit’s HP is not full, adds 30% of lost HP to Atk.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 5000
            },
            {
                "bond": "1",
                "name": "Contract",
                "desc": "Use to grant another action to an adjacent ally who has already acted. (Ally cannot move.)\n[Dragon] Grants Str/Mag/Def/Res+2 to ally during action.\n[Backup] Unit participates in chain attack during ally action.\n[Covert] Grants Hit/Avo+30 to ally during action.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Summon Hero",
                "desc": "Use to summon a random unit.\n[Dragon] Summons a powerful unit.\n[Backup] Summoned unit has the “Dual Strike” skill.\n[Cavarly] Summoned unit gets Mov+1.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Hliðskjálf",
                "desc": "A staff wielded by Emblem Veronica. If user initiates combat, foe cannot counterattack.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Mag/Dex +1",
                "desc": "Grants Mag+1 and Dex+1.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "3",
                "name": "Book of Worlds",
                "desc": "Book of Worlds advances 1 stage (to max 5) for each consecutive round that unit uses Wait. Reverts to base stage if unit triggers the effect.\n[Book I: Seal] If unit initiates combat, freezes foe after combat.\n[Book II: Flame] If unit initiates combat, freezes foe and sets foe’s space on fire after combat.\n[Book III: Death] If unit initiates combat, deals 10 damage, freezes foe, and sets foe’s space on fire after combat.\n[Book IV: Dream] If unit initiates combat, restores HP equal to damage dealt during combat, then deals 10 damage, freezes foe, and sets foe’s space on fire after combat.\n[Book V: Science] If unit initiates combat, restores HP to self and adjacent allies equal to damage dealt during combat, then deals 10 damage, freezes foe, and sets foe’s space on fire after combat.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 300
            },
            {
                "bond": "4",
                "name": "Knife Guard 1",
                "desc": "If foe is equipped with a knife, unit takes 1 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 200
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Staff Prof.",
                "desc": "Proficiency with staves. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Mag/Dex +2",
                "desc": "Grants Mag+2 and Dex+2.",
                "type": "Inheritable Skill",
                "cost": 1600
            },
            {
                "bond": "8",
                "name": "Level Boost",
                "desc": "When unit defeats a foe of a higher level, grants Lvl+1 until the end of battle. (Max +3)",
                "type": "Sync Skill (Can Inherit)",
                "cost": 300
            },
            {
                "bond": "9",
                "name": "Knife Guard 2",
                "desc": "If foe is equipped with a knife, unit takes 2 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 400
            },
            {
                "bond": "10",
                "name": "Fortify+",
                "desc": "A staff wielded by Emblem Veronica. Heals HP and status effects for all allies within a 7-space radius.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Mag/Dex +3",
                "desc": "Grants Mag+3 and Dex+3.",
                "type": "Inheritable Skill",
                "cost": 4200
            },
            {
                "bond": "13",
                "name": "SP Conversion",
                "desc": "Grants +20 SP for each defeated foe. Triggers even without a ring or bracelet equipped.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 300
            },
            {
                "bond": "13",
                "name": "Knife Guard 3",
                "desc": "If foe is equipped with a knife, unit takes 3 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 600
            },
            {
                "bond": "14",
                "name": "Mag/Dex +4",
                "desc": "Grants Mag+4 and Dex+4.",
                "type": "Inheritable Skill",
                "cost": 6000
            },
            {
                "bond": "15",
                "name": "Élivágar",
                "desc": "Powerful magic wielded by Emblem Veronica. Nullifies basic stat bonuses on target for 1 turn after combat.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Tome Prof.",
                "desc": "Proficiency with tomes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "17",
                "name": "Knife Guard 4",
                "desc": "If foe is equipped with a knife, unit takes 4 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 800
            },
            {
                "bond": "18",
                "name": "Reprisal+",
                "desc": "If unit’s HP is not full, adds 50% of lost HP to Atk.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 6000
            },
            {
                "bond": "18",
                "name": "Mag/Dex +5",
                "desc": "Grants Mag+5 and Dex+5.",
                "type": "Inheritable Skill",
                "cost": 8400
            },
            {
                "bond": "19",
                "name": "Knife Guard 5",
                "desc": "If foe is equipped with a knife, unit takes 5 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 1000
            }
        ]
    },
    {
        "name": "Chrom",
        "statBoosts": [
            {
                "name": 1,
                "Str": 1,
                "Dex": 2,
                "Spd": 1
            },
            {
                "name": 2,
                "Str": 1,
                "Dex": 2,
                "Spd": 2
            },
            {
                "name": 3,
                "Str": 2,
                "Dex": 2,
                "Spd": 2
            },
            {
                "name": 7,
                "Str": 2,
                "Dex": 3,
                "Spd": 2
            },
            {
                "name": 9,
                "Str": 2,
                "Dex": 3,
                "Spd": 3
            },
            {
                "name": 12,
                "Str": 3,
                "Dex": 3,
                "Spd": 3
            },
            {
                "name": 14,
                "Str": 3,
                "Dex": 4,
                "Spd": 3
            },
            {
                "name": 17,
                "Str": 3,
                "Dex": 4,
                "Spd": 4
            },
            {
                "name": 19,
                "Str": 3,
                "Dex": 5,
                "Spd": 4
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Surprise Attack",
                "desc": "If unit initiates combat from terrain that provides an Avo bonus, foe cannot counterattack.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "1",
                "name": "Other Half",
                "desc": "If unit initiates combat, Robin chain attacks. Grants Mag+10 while engaged.\n[Dragon] Robin chain attacks 2 times.\n[Backup] Guaranteed hit with chain attack.\n[Covert] Grants Mov+1 while engaged.",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Giga Levin Sword",
                "desc": "Use to attack with a magic sword. Magic attack that uses physical attack power. Swords only.\n[Dragon] Deals extra damage = half of Str.\n[Flying] Deals extra damage = Bld.\n[Mystical] Deals extra damage = half of Mag.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Giga Levin Sword+",
                "desc": "Use to attack with a magic sword. Magic attack that uses physical attack power. Swords only. Adjacent allies chain attack.\n[Dragon] Deals extra damage = half of Str.\n[Flying] Deals extra damage = Bld.\n[Mystical] Deals extra damage = half of Mag.",
                "type": "Engage Attack (requires adjacent Lucina)",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Levin Sword (Robin)",
                "desc": "Magic sword wielded by Emblem Robin. Can hit foes with magic lightning from a distance.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Spd/Dex +1",
                "desc": "Grants Spd+1 and Dex+1.",
                "type": "Inheritable Skill",
                "cost": 250
            },
            {
                "bond": "3",
                "name": "Sword Guard 1",
                "desc": "If foe is equipped with a sword, unit takes 1 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 200
            },
            {
                "bond": "4",
                "name": "Rally Spectrum",
                "desc": "Use to grant adjacent allies +3 to all seven basic stats for 1 turn.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1500
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Spd/Dex +2",
                "desc": "Grants Spd+2 and Dex+2.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "8",
                "name": "Brute Force",
                "desc": "While making a physical attack, critical hits deal increased damage.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1500
            },
            {
                "bond": "9",
                "name": "Sword Guard 2",
                "desc": "If foe is equipped with a sword, unit takes 2 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 400
            },
            {
                "bond": "10",
                "name": "Thoron (Robin)",
                "desc": "Powerful lightning magic wielded by Emblem Robin.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Spd/Dex +3",
                "desc": "Grants Spd+3 and Dex+3.",
                "type": "Inheritable Skill",
                "cost": 1200
            },
            {
                "bond": "13",
                "name": "Charm",
                "desc": "If unit’s attack triggers a chain attack, increases chain attack accuracy to 90%.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 800
            },
            {
                "bond": "13",
                "name": "Sword Guard 3",
                "desc": "If foe is equipped with a sword, unit takes 3 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 600
            },
            {
                "bond": "14",
                "name": "Spd/Dex +4",
                "desc": "Grants Spd+4 and Dex+4.",
                "type": "Inheritable Skill",
                "cost": 2400
            },
            {
                "bond": "15",
                "name": "Falchion (Chrom)",
                "desc": "A legendary sword wielded by Emblem Chrom. Effective: Dragon.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Tome Prof.",
                "desc": "Proficiency with tomes. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "17",
                "name": "Sword Guard 4",
                "desc": "If foe is equipped with a sword, unit takes 4 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 800
            },
            {
                "bond": "18",
                "name": "Rally Spectrum+",
                "desc": "Use to grant allies within 2 spaces +3 to all seven basic stats for 1 turn.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "18",
                "name": "Spd/Dex +5",
                "desc": "Grants Spd+5 and Dex+5.",
                "type": "Inheritable Skill",
                "cost": 4800
            },
            {
                "bond": "19",
                "name": "Sword Guard 5",
                "desc": "If foe is equipped with a sword, unit takes 5 less damage during combat.",
                "type": "Inheritable Skill",
                "cost": 1000
            }
        ]
    },
    {
        "name": "Lyn",
        "statBoosts": [
            {
                "name": 1,
                "Dex": 1,
                "Spd": 1,
                "Res": 1
            },
            {
                "name": 2,
                "Dex": 1,
                "Spd": 2,
                "Res": 1
            },
            {
                "name": 4,
                "Dex": 2,
                "Spd": 2,
                "Res": 1
            },
            {
                "name": 7,
                "Dex": 2,
                "Spd": 2,
                "Res": 2
            },
            {
                "name": 9,
                "Dex": 2,
                "Spd": 3,
                "Res": 2
            },
            {
                "name": 12,
                "Dex": 3,
                "Spd": 3,
                "Res": 2
            },
            {
                "name": 14,
                "Dex": 3,
                "Spd": 3,
                "Res": 3
            },
            {
                "name": 16,
                "Dex": 3,
                "Spd": 4,
                "Res": 3
            },
            {
                "name": 17,
                "Dex": 4,
                "Spd": 4,
                "Res": 3
            },
            {
                "name": 19,
                "Dex": 4,
                "Spd": 5,
                "Res": 3
            }
        ],
        "skills": [
            {
                "bond": "1",
                "name": "Speed +1",
                "desc": "Grants Spd+1.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "1",
                "name": "Alacrity",
                "desc": "If unit initiates combat with a Spd advantage of 9 or more, unit’s follow-up (if possible) occurs before foe can counterattack.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 1000
            },
            {
                "bond": "1",
                "name": "Call Doubles",
                "desc": "Creates four illusory doubles that can make chain attacks with unit.[Dragon] +1 double created.[Flying] Doubles have +10 Avo",
                "type": "Engage Skill",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Astra Storm",
                "desc": "Use to launch 5 bow attacks at 30% damage, up to range 10.[Dragon] Range +5.[Covert] Range +10.[Qi Adept] Breaks the target.",
                "type": "Engage Attack",
                "cost": 0
            },
            {
                "bond": "1",
                "name": "Killer Bow (Lyn)",
                "desc": "Bow wielded by Emblem Lyn. Easily inflicts fatal wounds. Effective: Flying.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "2",
                "name": "Speed +2",
                "desc": "Grants Spd+2.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "3",
                "name": "Speedtaker",
                "desc": "Grants a stacking Spd+2 each time unit initiates combat and defeats a foe. Bonus lasts for the rest of the battle. (Max +10)",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "4",
                "name": "Bow Focus 1",
                "desc": "Grants Hit+10 at a cost of Ddg-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 100
            },
            {
                "bond": "5",
                "name": "Skill Inheritance",
                "desc": "Unit can inherit this Emblem’s skills.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "6",
                "name": "Bow Prof.",
                "desc": "Proficiency with bows. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "7",
                "name": "Bow Focus 2",
                "desc": "Grants Hit+15 at a cost of Ddg-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 300
            },
            {
                "bond": "8",
                "name": "Sword Prof.",
                "desc": "Proficiency with swords. Required for promotion to certain classes.",
                "type": "Unlock",
                "cost": 0
            },
            {
                "bond": "9",
                "name": "Speed +3",
                "desc": "Grants Spd+3.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "10",
                "name": "Mani Katti",
                "desc": "Divine sword wielded by Emblem Lyn. Effective: Cavalry, Armored.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "12",
                "name": "Bow Focus 3",
                "desc": "Grants Hit+20 at a cost of Ddg-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 500
            },
            {
                "bond": "13",
                "name": "Alacrity+",
                "desc": "If unit initiates combat with a Spd advantage of 7 or more, unit’s follow-up (if possible) occurs before foe can counterattack.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 2000
            },
            {
                "bond": "14",
                "name": "Bow Focus 4",
                "desc": "Grants Hit+25 at a cost of Ddg-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 700
            },
            {
                "bond": "15",
                "name": "Mulagir",
                "desc": "Mighty bow wielded by Emblem Lyn. Grants Spd+5. Effective: Flying, Dragon.",
                "type": "Engage Weapon",
                "cost": 0
            },
            {
                "bond": "16",
                "name": "Speed +4",
                "desc": "Grants Spd+4.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "17",
                "name": "Bow Focus 5",
                "desc": "Grants Hit+30 at a cost of Ddg-10 when using a bow.",
                "type": "Inheritable Skill",
                "cost": 1000
            },
            {
                "bond": "18",
                "name": "Alacrity++",
                "desc": "If unit initiates combat with a Spd advantage of 5 or more, unit’s follow-up (if possible) occurs before foe can counterattack.",
                "type": "Sync Skill (Can Inherit)",
                "cost": 3000
            },
            {
                "bond": "19",
                "name": "Speed +5",
                "desc": "Grants Spd+5.",
                "type": "Inheritable Skill",
                "cost": 2000
            }
        ]
    }
]

export default Emblems
