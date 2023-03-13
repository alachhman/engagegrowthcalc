const Classes = [
  {
    "name": "Dragon Child",
    "hp": {
      "growth": 10,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 41
    },
    "mag": {
      "growth": 0,
      "max": 25
    },
    "dex": {
      "growth": 10,
      "max": 36
    },
    "spd": {
      "growth": 15,
      "max": 43
    },
    "def": {
      "growth": 10,
      "max": 35
    },
    "res": {
      "growth": 10,
      "max": 25
    },
    "lck": {
      "growth": 5,
      "max": 35
    },
    "bld": {
      "growth": 5,
      "max": 13
    },
    "skill": {}
  },
  {
    "name": "Tireur d’élite",
    "hp": {
      "growth": 10,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 41
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 30,
      "max": 41
    },
    "spd": {
      "growth": 10,
      "max": 40
    },
    "def": {
      "growth": 15,
      "max": 29
    },
    "res": {
      "growth": 5,
      "max": 19
    },
    "lck": {
      "growth": 5,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 15
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Luna.png",
      "name": "Luna",
      "desc": "While making an attack, may ignore half of foe’s Def/Res. Trigger %=Dex.",
      "unit": "Tireur d’élite"
    }
  },
  {
    "name": "Sniper",
    "hp": {
      "growth": 15,
      "max": 68
    },
    "str": {
      "growth": 15,
      "max": 45
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 30,
      "max": 52
    },
    "spd": {
      "growth": 10,
      "max": 32
    },
    "def": {
      "growth": 10,
      "max": 29
    },
    "res": {
      "growth": 0,
      "max": 24
    },
    "lck": {
      "growth": 10,
      "max": 28
    },
    "bld": {
      "growth": 0,
      "max": 14
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/No_Distractions.png",
      "name": "No Distractions",
      "desc": "Grants Crit+10 during combat with a foe that can’t counter.",
      "unit": "Sniper"
    }
  },
  {
    "name": "Lord (Alcryst)",
    "hp": {
      "growth": 10,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 41
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 25,
      "max": 41
    },
    "spd": {
      "growth": 10,
      "max": 40
    },
    "def": {
      "growth": 10,
      "max": 29
    },
    "res": {
      "growth": 0,
      "max": 19
    },
    "lck": {
      "growth": 5,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 15
    },
    "skill": {}
  },
  {
    "name": "Archer",
    "hp": {
      "growth": 10,
      "max": 68
    },
    "str": {
      "growth": 15,
      "max": 38
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 25,
      "max": 45
    },
    "spd": {
      "growth": 10,
      "max": 32
    },
    "def": {
      "growth": 5,
      "max": 23
    },
    "res": {
      "growth": 0,
      "max": 24
    },
    "lck": {
      "growth": 5,
      "max": 28
    },
    "bld": {
      "growth": 0,
      "max": 14
    },
    "skill": {}
  },
  {
    "name": "Cupido",
    "hp": {
      "growth": 10,
      "max": 67
    },
    "str": {
      "growth": 5,
      "max": 35
    },
    "mag": {
      "growth": 5,
      "max": 28
    },
    "dex": {
      "growth": 20,
      "max": 33
    },
    "spd": {
      "growth": 20,
      "max": 49
    },
    "def": {
      "growth": 5,
      "max": 28
    },
    "res": {
      "growth": 20,
      "max": 31
    },
    "lck": {
      "growth": 0,
      "max": 33
    },
    "bld": {
      "growth": 0,
      "max": 16
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Back_at_You.png",
      "name": "Back at You",
      "desc": "When countering, unit may deal extra damage = half of damage taken. Trigger %=Dex.",
      "unit": "Cupido"
    }
  },
  {
    "name": "Lance Fighter",
    "hp": {
      "growth": 10,
      "max": 69
    },
    "str": {
      "growth": 10,
      "max": 43
    },
    "mag": {
      "growth": 5,
      "max": 29
    },
    "dex": {
      "growth": 20,
      "max": 47
    },
    "spd": {
      "growth": 5,
      "max": 36
    },
    "def": {
      "growth": 10,
      "max": 28
    },
    "res": {
      "growth": 5,
      "max": 25
    },
    "lck": {
      "growth": 0,
      "max": 25
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {}
  },
  {
    "name": "Halberdier",
    "hp": {
      "growth": 10,
      "max": 76
    },
    "str": {
      "growth": 15,
      "max": 46
    },
    "mag": {
      "growth": 5,
      "max": 29
    },
    "dex": {
      "growth": 20,
      "max": 47
    },
    "spd": {
      "growth": 10,
      "max": 36
    },
    "def": {
      "growth": 15,
      "max": 35
    },
    "res": {
      "growth": 5,
      "max": 25
    },
    "lck": {
      "growth": 5,
      "max": 25
    },
    "bld": {
      "growth": 0,
      "max": 15
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Pincer_Attack.png",
      "name": "Pincer Attack",
      "desc": "If unit initiates combat while an ally is on the opposite side of the foe, always follow up (if weapon allows).",
      "unit": "Halberdier"
    }
  },
  {
    "name": "Bow Knight",
    "hp": {
      "growth": 10,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 38
    },
    "mag": {
      "growth": 0,
      "max": 23
    },
    "dex": {
      "growth": 20,
      "max": 45
    },
    "spd": {
      "growth": 20,
      "max": 37
    },
    "def": {
      "growth": 0,
      "max": 23
    },
    "res": {
      "growth": 15,
      "max": 29
    },
    "lck": {
      "growth": 15,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 14
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Careful_Aim.png",
      "name": "Careful Aim",
      "desc": "If unit initiates combat without moving first, grants Hit+40 during combat.",
      "unit": "Bow Knight"
    }
  },
  {
    "name": "Thief",
    "hp": {
      "growth": 5,
      "max": 60
    },
    "str": {
      "growth": 10,
      "max": 43
    },
    "mag": {
      "growth": 0,
      "max": 22
    },
    "dex": {
      "growth": 20,
      "max": 51
    },
    "spd": {
      "growth": 15,
      "max": 42
    },
    "def": {
      "growth": 15,
      "max": 33
    },
    "res": {
      "growth": 5,
      "max": 23
    },
    "lck": {
      "growth": 15,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 13
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Pass.png",
      "name": "Pass",
      "desc": "Foes do not block this unit’s movement.",
      "unit": "Thief"
    }
  },
  {
    "name": "Sleipnir Rider",
    "hp": {
      "growth": 0,
      "max": 47
    },
    "str": {
      "growth": 0,
      "max": 26
    },
    "mag": {
      "growth": 20,
      "max": 39
    },
    "dex": {
      "growth": 15,
      "max": 36
    },
    "spd": {
      "growth": 15,
      "max": 45
    },
    "def": {
      "growth": 0,
      "max": 19
    },
    "res": {
      "growth": 30,
      "max": 51
    },
    "lck": {
      "growth": 15,
      "max": 53
    },
    "bld": {
      "growth": 0,
      "max": 11
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/World_Tree.png",
      "name": "World Tree",
      "desc": "When unit uses a staff, may not consume a use. Trigger %=Dex.",
      "unit": "Sleipnir Rider"
    }
  },
  {
    "name": "Royal Knight",
    "hp": {
      "growth": 5,
      "max": 69
    },
    "str": {
      "growth": 10,
      "max": 43
    },
    "mag": {
      "growth": 15,
      "max": 39
    },
    "dex": {
      "growth": 15,
      "max": 47
    },
    "spd": {
      "growth": 15,
      "max": 40
    },
    "def": {
      "growth": 5,
      "max": 28
    },
    "res": {
      "growth": 20,
      "max": 36
    },
    "lck": {
      "growth": 10,
      "max": 32
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Reforge.png",
      "name": "Reforge",
      "desc": "If unit’s HP is 11 or more and an adjacent ally is broken after combat, sacrifices 10 HP and removes the break status from that ally.",
      "unit": "Royal Knight"
    }
  },
  {
    "name": "Griffin Knight",
    "hp": {
      "growth": 0,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 15,
      "max": 37
    },
    "dex": {
      "growth": 15,
      "max": 48
    },
    "spd": {
      "growth": 20,
      "max": 49
    },
    "def": {
      "growth": 0,
      "max": 27
    },
    "res": {
      "growth": 15,
      "max": 35
    },
    "lck": {
      "growth": 15,
      "max": 35
    },
    "bld": {
      "growth": 0,
      "max": 14
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Clear_the_Way.png",
      "name": "Clear the Way",
      "desc": "Unit’s space and adjacent spaces have a movement cost of 1 for allies.",
      "unit": "Griffin Knight"
    }
  },
  {
    "name": "Sentinel (Fogado)",
    "hp": {
      "growth": 10,
      "max": 67
    },
    "str": {
      "growth": 5,
      "max": 35
    },
    "mag": {
      "growth": 0,
      "max": 28
    },
    "dex": {
      "growth": 15,
      "max": 33
    },
    "spd": {
      "growth": 15,
      "max": 49
    },
    "def": {
      "growth": 5,
      "max": 28
    },
    "res": {
      "growth": 15,
      "max": 31
    },
    "lck": {
      "growth": 0,
      "max": 33
    },
    "bld": {
      "growth": 0,
      "max": 16
    },
    "skill": {}
  },
  {
    "name": "Sword Fighter",
    "hp": {
      "growth": 10,
      "max": 67
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 15,
      "max": 37
    },
    "spd": {
      "growth": 20,
      "max": 41
    },
    "def": {
      "growth": 0,
      "max": 27
    },
    "res": {
      "growth": 15,
      "max": 22
    },
    "lck": {
      "growth": 10,
      "max": 33
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {}
  },
  {
    "name": "Swordmaster",
    "hp": {
      "growth": 10,
      "max": 67
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 0,
      "max": 25
    },
    "dex": {
      "growth": 15,
      "max": 44
    },
    "spd": {
      "growth": 20,
      "max": 49
    },
    "def": {
      "growth": 0,
      "max": 27
    },
    "res": {
      "growth": 15,
      "max": 26
    },
    "lck": {
      "growth": 15,
      "max": 37
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Run_Through.png",
      "name": "Run Through",
      "desc": "Use to attack an adjacent foe, then move to the space opposite that foe.",
      "unit": "Swordmaster"
    }
  },
  {
    "name": "Great Knight",
    "hp": {
      "growth": 20,
      "max": 75
    },
    "str": {
      "growth": 15,
      "max": 42
    },
    "mag": {
      "growth": 0,
      "max": 19
    },
    "dex": {
      "growth": 15,
      "max": 43
    },
    "spd": {
      "growth": 0,
      "max": 25
    },
    "def": {
      "growth": 25,
      "max": 51
    },
    "res": {
      "growth": 10,
      "max": 22
    },
    "lck": {
      "growth": 5,
      "max": 30
    },
    "bld": {
      "growth": 5,
      "max": 20
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Allied_Defense.png",
      "name": "Allied Defense",
      "desc": "If unit is between an ally and a foe, reduces damage to unit by 3 during combat with that foe.",
      "unit": "Great Knight"
    }
  },
  {
    "name": "Wolf Knight",
    "hp": {
      "growth": 10,
      "max": 69
    },
    "str": {
      "growth": 5,
      "max": 40
    },
    "mag": {
      "growth": 0,
      "max": 26
    },
    "dex": {
      "growth": 15,
      "max": 41
    },
    "spd": {
      "growth": 20,
      "max": 45
    },
    "def": {
      "growth": 5,
      "max": 27
    },
    "res": {
      "growth": 20,
      "max": 33
    },
    "lck": {
      "growth": 20,
      "max": 34
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Hobble.png",
      "name": "Hobble",
      "desc": "If unit initiates combat with a knife, inflicts Mov-2 on foe for 1 turn.",
      "unit": "Wolf Knight"
    }
  },
  {
    "name": "Fell Child",
    "hp": {
      "growth": 10,
      "max": 48
    },
    "str": {
      "growth": 10,
      "max": 35
    },
    "mag": {
      "growth": 25,
      "max": 48
    },
    "dex": {
      "growth": 10,
      "max": 36
    },
    "spd": {
      "growth": 5,
      "max": 33
    },
    "def": {
      "growth": 10,
      "max": 25
    },
    "res": {
      "growth": 25,
      "max": 41
    },
    "lck": {
      "growth": 0,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 11
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Fell_Spirit.png",
      "name": "Fell Spirit",
      "desc": "At the start of each turn, unit’s engage meter is filled by 1.",
      "unit": "Fell Child"
    }
  },
  {
    "name": "Wing Tamer (Hortensia)",
    "hp": {
      "growth": 0,
      "max": 47
    },
    "str": {
      "growth": 0,
      "max": 26
    },
    "mag": {
      "growth": 15,
      "max": 39
    },
    "dex": {
      "growth": 10,
      "max": 36
    },
    "spd": {
      "growth": 10,
      "max": 45
    },
    "def": {
      "growth": 0,
      "max": 19
    },
    "res": {
      "growth": 25,
      "max": 51
    },
    "lck": {
      "growth": 10,
      "max": 53
    },
    "bld": {
      "growth": 0,
      "max": 11
    },
    "skill": {}
  },
  {
    "name": "Sword Flier",
    "hp": {
      "growth": 5,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 5,
      "max": 31
    },
    "dex": {
      "growth": 10,
      "max": 43
    },
    "spd": {
      "growth": 10,
      "max": 38
    },
    "def": {
      "growth": 0,
      "max": 27
    },
    "res": {
      "growth": 10,
      "max": 22
    },
    "lck": {
      "growth": 10,
      "max": 25
    },
    "bld": {
      "growth": 0,
      "max": 14
    },
    "skill": {}
  },
  {
    "name": "Lance Flier",
    "hp": {
      "growth": 5,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 5,
      "max": 31
    },
    "dex": {
      "growth": 10,
      "max": 43
    },
    "spd": {
      "growth": 10,
      "max": 38
    },
    "def": {
      "growth": 0,
      "max": 27
    },
    "res": {
      "growth": 10,
      "max": 22
    },
    "lck": {
      "growth": 10,
      "max": 25
    },
    "bld": {
      "growth": 0,
      "max": 14
    },
    "skill": {}
  },
  {
    "name": "Axe Flier",
    "hp": {
      "growth": 5,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 5,
      "max": 31
    },
    "dex": {
      "growth": 10,
      "max": 43
    },
    "spd": {
      "growth": 10,
      "max": 38
    },
    "def": {
      "growth": 0,
      "max": 27
    },
    "res": {
      "growth": 10,
      "max": 22
    },
    "lck": {
      "growth": 10,
      "max": 25
    },
    "bld": {
      "growth": 0,
      "max": 14
    },
    "skill": {}
  },
  {
    "name": "Divine Dragon",
    "hp": {
      "growth": 10,
      "max": 68
    },
    "str": {
      "growth": 10,
      "max": 41
    },
    "mag": {
      "growth": 0,
      "max": 25
    },
    "dex": {
      "growth": 10,
      "max": 36
    },
    "spd": {
      "growth": 15,
      "max": 43
    },
    "def": {
      "growth": 15,
      "max": 35
    },
    "res": {
      "growth": 15,
      "max": 25
    },
    "lck": {
      "growth": 10,
      "max": 35
    },
    "bld": {
      "growth": 5,
      "max": 13
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Divine_Spirit.png",
      "name": "Divine Spirit",
      "desc": "Unit’s engage meter is shortened one step.",
      "unit": "Divine Dragon"
    }
  },
  {
    "name": "Lord (Diamant)",
    "hp": {
      "growth": 15,
      "max": 77
    },
    "str": {
      "growth": 20,
      "max": 43
    },
    "mag": {
      "growth": 0,
      "max": 23
    },
    "dex": {
      "growth": 10,
      "max": 23
    },
    "spd": {
      "growth": 10,
      "max": 38
    },
    "def": {
      "growth": 10,
      "max": 38
    },
    "res": {
      "growth": 0,
      "max": 20
    },
    "lck": {
      "growth": 5,
      "max": 25
    },
    "bld": {
      "growth": 0,
      "max": 20
    },
    "skill": {}
  },
  {
    "name": "Successeur",
    "hp": {
      "growth": 15,
      "max": 77
    },
    "str": {
      "growth": 20,
      "max": 43
    },
    "mag": {
      "growth": 0,
      "max": 23
    },
    "dex": {
      "growth": 10,
      "max": 23
    },
    "spd": {
      "growth": 15,
      "max": 38
    },
    "def": {
      "growth": 15,
      "max": 38
    },
    "res": {
      "growth": 0,
      "max": 20
    },
    "lck": {
      "growth": 10,
      "max": 25
    },
    "bld": {
      "growth": 5,
      "max": 20
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Sol.png",
      "name": "Sol",
      "desc": "Unit may recover HP=50% damage dealt. Trigger %=Dex.",
      "unit": "Successeur"
    }
  },
  {
    "name": "Sentinel (Timerra)",
    "hp": {
      "growth": 10,
      "max": 63
    },
    "str": {
      "growth": 10,
      "max": 35
    },
    "mag": {
      "growth": 0,
      "max": 27
    },
    "dex": {
      "growth": 10,
      "max": 47
    },
    "spd": {
      "growth": 5,
      "max": 41
    },
    "def": {
      "growth": 20,
      "max": 33
    },
    "res": {
      "growth": 0,
      "max": 26
    },
    "lck": {
      "growth": 5,
      "max": 37
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {}
  },
  {
    "name": "Picket",
    "hp": {
      "growth": 10,
      "max": 63
    },
    "str": {
      "growth": 15,
      "max": 35
    },
    "mag": {
      "growth": 0,
      "max": 27
    },
    "dex": {
      "growth": 10,
      "max": 47
    },
    "spd": {
      "growth": 10,
      "max": 41
    },
    "def": {
      "growth": 20,
      "max": 33
    },
    "res": {
      "growth": 5,
      "max": 26
    },
    "lck": {
      "growth": 5,
      "max": 37
    },
    "bld": {
      "growth": 5,
      "max": 12
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Sandstorm.png",
      "name": "Sandstorm",
      "desc": "While making a physical attack, may calculate damage with 150% of Def instead of Str. Trigger %=Dex.",
      "unit": "Picket"
    }
  },
  {
    "name": "Hero",
    "hp": {
      "growth": 15,
      "max": 75
    },
    "str": {
      "growth": 15,
      "max": 45
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 10,
      "max": 37
    },
    "spd": {
      "growth": 15,
      "max": 41
    },
    "def": {
      "growth": 0,
      "max": 34
    },
    "res": {
      "growth": 10,
      "max": 22
    },
    "lck": {
      "growth": 15,
      "max": 33
    },
    "bld": {
      "growth": 0,
      "max": 16
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Brave_Assist.png",
      "name": "Brave Assist",
      "desc": "If unit’s HP is at max while unit makes a chain attack, unit attacks twice.",
      "unit": "Hero"
    }
  },
  {
    "name": "Warrior",
    "hp": {
      "growth": 25,
      "max": 94
    },
    "str": {
      "growth": 20,
      "max": 46
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 10,
      "max": 30
    },
    "spd": {
      "growth": 15,
      "max": 33
    },
    "def": {
      "growth": 10,
      "max": 27
    },
    "res": {
      "growth": 5,
      "max": 18
    },
    "lck": {
      "growth": 0,
      "max": 23
    },
    "bld": {
      "growth": 5,
      "max": 20
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Merciless.png",
      "name": "Merciless",
      "desc": "Unit deals +50% damage against broken foes.",
      "unit": "Warrior"
    }
  },
  {
    "name": "Sword Armor",
    "hp": {
      "growth": 20,
      "max": 75
    },
    "str": {
      "growth": 15,
      "max": 42
    },
    "mag": {
      "growth": 0,
      "max": 16
    },
    "dex": {
      "growth": 10,
      "max": 39
    },
    "spd": {
      "growth": 0,
      "max": 17
    },
    "def": {
      "growth": 30,
      "max": 51
    },
    "res": {
      "growth": 0,
      "max": 16
    },
    "lck": {
      "growth": 0,
      "max": 25
    },
    "bld": {
      "growth": 5,
      "max": 20
    },
    "skill": {}
  },
  {
    "name": "Lance Armor",
    "hp": {
      "growth": 20,
      "max": 75
    },
    "str": {
      "growth": 15,
      "max": 42
    },
    "mag": {
      "growth": 0,
      "max": 16
    },
    "dex": {
      "growth": 10,
      "max": 39
    },
    "spd": {
      "growth": 0,
      "max": 17
    },
    "def": {
      "growth": 30,
      "max": 51
    },
    "res": {
      "growth": 0,
      "max": 16
    },
    "lck": {
      "growth": 0,
      "max": 25
    },
    "bld": {
      "growth": 5,
      "max": 20
    },
    "skill": {}
  },
  {
    "name": "Axe Armor",
    "hp": {
      "growth": 20,
      "max": 75
    },
    "str": {
      "growth": 15,
      "max": 42
    },
    "mag": {
      "growth": 0,
      "max": 16
    },
    "dex": {
      "growth": 10,
      "max": 39
    },
    "spd": {
      "growth": 0,
      "max": 17
    },
    "def": {
      "growth": 30,
      "max": 51
    },
    "res": {
      "growth": 0,
      "max": 16
    },
    "lck": {
      "growth": 0,
      "max": 25
    },
    "bld": {
      "growth": 5,
      "max": 20
    },
    "skill": {}
  },
  {
    "name": "General",
    "hp": {
      "growth": 25,
      "max": 86
    },
    "str": {
      "growth": 20,
      "max": 47
    },
    "mag": {
      "growth": 0,
      "max": 16
    },
    "dex": {
      "growth": 10,
      "max": 39
    },
    "spd": {
      "growth": 0,
      "max": 17
    },
    "def": {
      "growth": 30,
      "max": 55
    },
    "res": {
      "growth": 0,
      "max": 16
    },
    "lck": {
      "growth": 0,
      "max": 25
    },
    "bld": {
      "growth": 10,
      "max": 25
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Swap.png",
      "name": "Swap",
      "desc": "Use to switch places with an adjacent ally.",
      "unit": "General"
    }
  },
  {
    "name": "Sword Cavalier",
    "hp": {
      "growth": 10,
      "max": 69
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 0,
      "max": 21
    },
    "dex": {
      "growth": 10,
      "max": 41
    },
    "spd": {
      "growth": 10,
      "max": 37
    },
    "def": {
      "growth": 10,
      "max": 27
    },
    "res": {
      "growth": 10,
      "max": 29
    },
    "lck": {
      "growth": 10,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {}
  },
  {
    "name": "Lance Cavalier",
    "hp": {
      "growth": 10,
      "max": 69
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 0,
      "max": 21
    },
    "dex": {
      "growth": 10,
      "max": 41
    },
    "spd": {
      "growth": 10,
      "max": 37
    },
    "def": {
      "growth": 10,
      "max": 27
    },
    "res": {
      "growth": 10,
      "max": 29
    },
    "lck": {
      "growth": 10,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {}
  },
  {
    "name": "Axe Cavalier",
    "hp": {
      "growth": 10,
      "max": 69
    },
    "str": {
      "growth": 10,
      "max": 40
    },
    "mag": {
      "growth": 0,
      "max": 21
    },
    "dex": {
      "growth": 10,
      "max": 41
    },
    "spd": {
      "growth": 10,
      "max": 37
    },
    "def": {
      "growth": 10,
      "max": 27
    },
    "res": {
      "growth": 10,
      "max": 29
    },
    "lck": {
      "growth": 10,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {}
  },
  {
    "name": "Paladin",
    "hp": {
      "growth": 15,
      "max": 77
    },
    "str": {
      "growth": 15,
      "max": 45
    },
    "mag": {
      "growth": 0,
      "max": 21
    },
    "dex": {
      "growth": 10,
      "max": 45
    },
    "spd": {
      "growth": 15,
      "max": 37
    },
    "def": {
      "growth": 15,
      "max": 35
    },
    "res": {
      "growth": 15,
      "max": 29
    },
    "lck": {
      "growth": 10,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 16
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Pivot.png",
      "name": "Pivot",
      "desc": "Use to move to the opposite side of an adjacent ally.",
      "unit": "Paladin"
    }
  },
  {
    "name": "Wyvern Knight",
    "hp": {
      "growth": 20,
      "max": 83
    },
    "str": {
      "growth": 20,
      "max": 46
    },
    "mag": {
      "growth": 0,
      "max": 31
    },
    "dex": {
      "growth": 10,
      "max": 43
    },
    "spd": {
      "growth": 5,
      "max": 38
    },
    "def": {
      "growth": 20,
      "max": 35
    },
    "res": {
      "growth": 5,
      "max": 22
    },
    "lck": {
      "growth": 5,
      "max": 25
    },
    "bld": {
      "growth": 5,
      "max": 18
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Air_Raid.png",
      "name": "Air Raid",
      "desc": "If unit initiates combat from a space a foe cannot enter, grants Spd+5 during combat.",
      "unit": "Wyvern Knight"
    }
  },
  {
    "name": "Sage",
    "hp": {
      "growth": 0,
      "max": 43
    },
    "str": {
      "growth": 0,
      "max": 26
    },
    "mag": {
      "growth": 30,
      "max": 48
    },
    "dex": {
      "growth": 5,
      "max": 34
    },
    "spd": {
      "growth": 0,
      "max": 30
    },
    "def": {
      "growth": 0,
      "max": 20
    },
    "res": {
      "growth": 30,
      "max": 44
    },
    "lck": {
      "growth": 15,
      "max": 30
    },
    "bld": {
      "growth": 0,
      "max": 11
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Spell_Harmony.png",
      "name": "Spell Harmony",
      "desc": "If unit initiates combat with a tome, grants Atk equal to the number of adjacent allies with tomes.",
      "unit": "Sage"
    }
  },
  {
    "name": "Lindwurm",
    "hp": {
      "growth": 5,
      "max": 60
    },
    "str": {
      "growth": 0,
      "max": 31
    },
    "mag": {
      "growth": 25,
      "max": 40
    },
    "dex": {
      "growth": 5,
      "max": 25
    },
    "spd": {
      "growth": 0,
      "max": 34
    },
    "def": {
      "growth": 15,
      "max": 31
    },
    "res": {
      "growth": 25,
      "max": 40
    },
    "lck": {
      "growth": 0,
      "max": 20
    },
    "bld": {
      "growth": 0,
      "max": 15
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Grasping_Void.png",
      "name": "Grasping Void",
      "desc": "When attacking with a tome, unit may deal extra damage = half of foe’s Mag. Trigger %=Dex.",
      "unit": "Lindwurm"
    }
  },
  {
    "name": "Mage",
    "hp": {
      "growth": 0,
      "max": 43
    },
    "str": {
      "growth": 0,
      "max": 26
    },
    "mag": {
      "growth": 25,
      "max": 40
    },
    "dex": {
      "growth": 5,
      "max": 28
    },
    "spd": {
      "growth": 0,
      "max": 30
    },
    "def": {
      "growth": 0,
      "max": 20
    },
    "res": {
      "growth": 25,
      "max": 40
    },
    "lck": {
      "growth": 5,
      "max": 24
    },
    "bld": {
      "growth": 0,
      "max": 11
    },
    "skill": {}
  },
  {
    "name": "Vidame",
    "hp": {
      "growth": 5,
      "max": 56
    },
    "str": {
      "growth": 10,
      "max": 38
    },
    "mag": {
      "growth": 15,
      "max": 37
    },
    "dex": {
      "growth": 5,
      "max": 29
    },
    "spd": {
      "growth": 5,
      "max": 41
    },
    "def": {
      "growth": 5,
      "max": 27
    },
    "res": {
      "growth": 15,
      "max": 35
    },
    "lck": {
      "growth": 20,
      "max": 50
    },
    "bld": {
      "growth": 0,
      "max": 11
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Ignis.png",
      "name": "Ignis",
      "desc": "During combat, may add half of Str to magic damage or half of Mag to all other damage. Trigger %=Dex.",
      "unit": "Vidame"
    }
  },
  {
    "name": "Noble (Celine)",
    "hp": {
      "growth": 0,
      "max": 56
    },
    "str": {
      "growth": 5,
      "max": 38
    },
    "mag": {
      "growth": 10,
      "max": 37
    },
    "dex": {
      "growth": 5,
      "max": 29
    },
    "spd": {
      "growth": 5,
      "max": 41
    },
    "def": {
      "growth": 5,
      "max": 27
    },
    "res": {
      "growth": 10,
      "max": 35
    },
    "lck": {
      "growth": 20,
      "max": 50
    },
    "bld": {
      "growth": 0,
      "max": 11
    },
    "skill": {}
  },
  {
    "name": "Noble (Alfred)",
    "hp": {
      "growth": 15,
      "max": 71
    },
    "str": {
      "growth": 15,
      "max": 45
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 5,
      "max": 33
    },
    "spd": {
      "growth": 5,
      "max": 35
    },
    "def": {
      "growth": 20,
      "max": 37
    },
    "res": {
      "growth": 5,
      "max": 21
    },
    "lck": {
      "growth": 15,
      "max": 45
    },
    "bld": {
      "growth": 0,
      "max": 16
    },
    "skill": {}
  },
  {
    "name": "Avenir",
    "hp": {
      "growth": 15,
      "max": 71
    },
    "str": {
      "growth": 15,
      "max": 45
    },
    "mag": {
      "growth": 0,
      "max": 20
    },
    "dex": {
      "growth": 5,
      "max": 33
    },
    "spd": {
      "growth": 10,
      "max": 35
    },
    "def": {
      "growth": 25,
      "max": 37
    },
    "res": {
      "growth": 5,
      "max": 21
    },
    "lck": {
      "growth": 20,
      "max": 45
    },
    "bld": {
      "growth": 5,
      "max": 16
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Golden_Lotus.png",
      "name": "Golden Lotus",
      "desc": "During combat, may prevent 50% of physical damage taken. Trigger %=Dex.",
      "unit": "Avenir"
    }
  },
  {
    "name": "Axe Fighter",
    "hp": {
      "growth": 25,
      "max": 94
    },
    "str": {
      "growth": 20,
      "max": 46
    },
    "mag": {
      "growth": 0,
      "max": 17
    },
    "dex": {
      "growth": 5,
      "max": 23
    },
    "spd": {
      "growth": 10,
      "max": 29
    },
    "def": {
      "growth": 5,
      "max": 20
    },
    "res": {
      "growth": 0,
      "max": 11
    },
    "lck": {
      "growth": 0,
      "max": 23
    },
    "bld": {
      "growth": 5,
      "max": 20
    },
    "skill": {}
  },
  {
    "name": "Berserker",
    "hp": {
      "growth": 30,
      "max": 96
    },
    "str": {
      "growth": 30,
      "max": 49
    },
    "mag": {
      "growth": 0,
      "max": 17
    },
    "dex": {
      "growth": 5,
      "max": 23
    },
    "spd": {
      "growth": 10,
      "max": 29
    },
    "def": {
      "growth": 5,
      "max": 20
    },
    "res": {
      "growth": 0,
      "max": 11
    },
    "lck": {
      "growth": 0,
      "max": 23
    },
    "bld": {
      "growth": 10,
      "max": 24
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Smash.png",
      "name": "Smash+",
      "desc": "When making a smash attack, push the target 2 spaces instead of 1.",
      "unit": "Berserker"
    }
  },
  {
    "name": "Dancer",
    "hp": {
      "growth": 5,
      "max": 64
    },
    "str": {
      "growth": 10,
      "max": 36
    },
    "mag": {
      "growth": 0,
      "max": 31
    },
    "dex": {
      "growth": 5,
      "max": 29
    },
    "spd": {
      "growth": 15,
      "max": 43
    },
    "def": {
      "growth": 10,
      "max": 24
    },
    "res": {
      "growth": 20,
      "max": 26
    },
    "lck": {
      "growth": 20,
      "max": 39
    },
    "bld": {
      "growth": 0,
      "max": 15
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Special_Dance.png",
      "name": "Special Dance",
      "desc": "If unit uses Dance, grants Dex/Spd/Lck+3 to target for 1 turn.",
      "unit": "Dancer"
    }
  },
  {
    "name": "Mage Knight",
    "hp": {
      "growth": 5,
      "max": 47
    },
    "str": {
      "growth": 5,
      "max": 35
    },
    "mag": {
      "growth": 25,
      "max": 40
    },
    "dex": {
      "growth": 0,
      "max": 28
    },
    "spd": {
      "growth": 5,
      "max": 32
    },
    "def": {
      "growth": 10,
      "max": 26
    },
    "res": {
      "growth": 25,
      "max": 40
    },
    "lck": {
      "growth": 5,
      "max": 24
    },
    "bld": {
      "growth": 0,
      "max": 12
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Chaos_Style.png",
      "name": "Chaos Style",
      "desc": "If unit initiates combat with a physical attack against a foe armed with magic or vice versa, grants Spd+3 during combat.",
      "unit": "Mage Knight"
    }
  },
  {
    "name": "Martial Monk",
    "hp": {
      "growth": 0,
      "max": 55
    },
    "str": {
      "growth": 10,
      "max": 28
    },
    "mag": {
      "growth": 25,
      "max": 41
    },
    "dex": {
      "growth": 0,
      "max": 26
    },
    "spd": {
      "growth": 0,
      "max": 28
    },
    "def": {
      "growth": 10,
      "max": 20
    },
    "res": {
      "growth": 20,
      "max": 39
    },
    "lck": {
      "growth": 10,
      "max": 29
    },
    "bld": {
      "growth": 0,
      "max": 13
    },
    "skill": {}
  },
  {
    "name": "High Priest",
    "hp": {
      "growth": 0,
      "max": 55
    },
    "str": {
      "growth": 0,
      "max": 28
    },
    "mag": {
      "growth": 25,
      "max": 45
    },
    "dex": {
      "growth": 0,
      "max": 31
    },
    "spd": {
      "growth": 5,
      "max": 32
    },
    "def": {
      "growth": 0,
      "max": 20
    },
    "res": {
      "growth": 30,
      "max": 48
    },
    "lck": {
      "growth": 30,
      "max": 38
    },
    "bld": {
      "growth": 0,
      "max": 13
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Self-Healing.png",
      "name": "Self-Healing",
      "desc": "Unit can target itself with healing staves.",
      "unit": "High Priest"
    }
  },
  {
    "name": "Wing Tamer (Ivy)",
    "hp": {
      "growth": 5,
      "max": 60
    },
    "str": {
      "growth": 0,
      "max": 31
    },
    "mag": {
      "growth": 20,
      "max": 40
    },
    "dex": {
      "growth": 0,
      "max": 25
    },
    "spd": {
      "growth": 0,
      "max": 34
    },
    "def": {
      "growth": 10,
      "max": 31
    },
    "res": {
      "growth": 20,
      "max": 40
    },
    "lck": {
      "growth": 0,
      "max": 20
    },
    "bld": {
      "growth": 0,
      "max": 15
    },
    "skill": {}
  },
  {
    "name": "Martial Master",
    "hp": {
      "growth": 5,
      "max": 66
    },
    "str": {
      "growth": 10,
      "max": 38
    },
    "mag": {
      "growth": 20,
      "max": 41
    },
    "dex": {
      "growth": 0,
      "max": 26
    },
    "spd": {
      "growth": 0,
      "max": 28
    },
    "def": {
      "growth": 15,
      "max": 27
    },
    "res": {
      "growth": 25,
      "max": 39
    },
    "lck": {
      "growth": 10,
      "max": 29
    },
    "bld": {
      "growth": 0,
      "max": 15
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Diffuse_Healer.png",
      "name": "Diffuse Healer",
      "desc": "When unit is healed by a staff, all adjacent allies also recover 50% of the HP that the unit recovered.",
      "unit": "Martial Master"
    }
  }
]
 export default Classes