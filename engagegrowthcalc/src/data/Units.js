const Units = [
  {
    "name": "Alear",
    "hp": {
      "growth": 60,
      "max": 0
    },
    "str": {
      "growth": 35,
      "max": 1
    },
    "mag": {
      "growth": 20,
      "max": 0
    },
    "dex": {
      "growth": 45,
      "max": 1
    },
    "spd": {
      "growth": 50,
      "max": 1
    },
    "def": {
      "growth": 40,
      "max": 0
    },
    "res": {
      "growth": 25,
      "max": 0
    },
    "lck": {
      "growth": 25,
      "max": 0
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Divinely_Inspiring.png",
      "name": "Divinely Inspiring",
      "desc": "Adjacent allies deal +3 damage and take 1 less damage.",
      "unit": "Alear"
    }
  },
  {
    "name": "Vander",
    "hp": {
      "growth": 60,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": 1
    },
    "mag": {
      "growth": 10,
      "max": -1
    },
    "dex": {
      "growth": 25,
      "max": 1
    },
    "spd": {
      "growth": 35,
      "max": -2
    },
    "def": {
      "growth": 35,
      "max": 3
    },
    "res": {
      "growth": 20,
      "max": -2
    },
    "lck": {
      "growth": 10,
      "max": 0
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Alabaster_Duty.png",
      "name": "Alabaster Duty",
      "desc": "If unit is adjacent to the Divine Dragon, grants Crit+5 during combat to both of them.",
      "unit": "Vander"
    }
  },
  {
    "name": "Clanne",
    "hp": {
      "growth": 40,
      "max": 0
    },
    "str": {
      "growth": 35,
      "max": 1
    },
    "mag": {
      "growth": 10,
      "max": -1
    },
    "dex": {
      "growth": 40,
      "max": 2
    },
    "spd": {
      "growth": 50,
      "max": 2
    },
    "def": {
      "growth": 30,
      "max": -2
    },
    "res": {
      "growth": 25,
      "max": -1
    },
    "lck": {
      "growth": 20,
      "max": 0
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Verdant_Faith.png",
      "name": "Verdant Faith",
      "desc": "If unit is adjacent to the Divine Dragon, grants Hit+10 during combat to both of them.",
      "unit": "Clanne"
    }
  },
  {
    "name": "Framme",
    "hp": {
      "growth": 55,
      "max": 0
    },
    "str": {
      "growth": 30,
      "max": 0
    },
    "mag": {
      "growth": 25,
      "max": 1
    },
    "dex": {
      "growth": 35,
      "max": -1
    },
    "spd": {
      "growth": 55,
      "max": 2
    },
    "def": {
      "growth": 25,
      "max": -1
    },
    "res": {
      "growth": 30,
      "max": -1
    },
    "lck": {
      "growth": 25,
      "max": 1
    },
    "bld": {
      "growth": 0,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Crimson_Cheer.png",
      "name": "Crimson Cheer",
      "desc": "If unit is adjacent to the Divine Dragon, grants Avo+10 during combat to both of them.",
      "unit": "Framme"
    }
  },
  {
    "name": "Alfred",
    "hp": {
      "growth": 65,
      "max": 0
    },
    "str": {
      "growth": 40,
      "max": 2
    },
    "mag": {
      "growth": 5,
      "max": -1
    },
    "dex": {
      "growth": 35,
      "max": 1
    },
    "spd": {
      "growth": 40,
      "max": 0
    },
    "def": {
      "growth": 40,
      "max": 2
    },
    "res": {
      "growth": 20,
      "max": -2
    },
    "lck": {
      "growth": 40,
      "max": -1
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Self-Improver.png",
      "name": "Self-Improver",
      "desc": "If unit uses Wait without attacking or using items, grants Str+2 for 1 turn.",
      "unit": "Alfred"
    }
  },
  {
    "name": "Etie",
    "hp": {
      "growth": 45,
      "max": 0
    },
    "str": {
      "growth": 40,
      "max": 2
    },
    "mag": {
      "growth": 0,
      "max": -2
    },
    "dex": {
      "growth": 25,
      "max": 2
    },
    "spd": {
      "growth": 35,
      "max": 0
    },
    "def": {
      "growth": 25,
      "max": 0
    },
    "res": {
      "growth": 30,
      "max": -1
    },
    "lck": {
      "growth": 25,
      "max": -1
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Energized.png",
      "name": "Energized",
      "desc": "When unit recovers HP using an item, grants Str+2 for 1 turn.",
      "unit": "Etie"
    }
  },
  {
    "name": "Boucheron",
    "hp": {
      "growth": 85,
      "max": 0
    },
    "str": {
      "growth": 20,
      "max": 1
    },
    "mag": {
      "growth": 0,
      "max": 0
    },
    "dex": {
      "growth": 50,
      "max": 2
    },
    "spd": {
      "growth": 45,
      "max": 2
    },
    "def": {
      "growth": 35,
      "max": -2
    },
    "res": {
      "growth": 20,
      "max": 0
    },
    "lck": {
      "growth": 15,
      "max": -2
    },
    "bld": {
      "growth": 20,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Moved_to_Tears.png",
      "name": "Moved to Tears",
      "desc": "When an ally joins a chain attack in this unit’s combat, unit deals +2 damage.",
      "unit": "Boucheron"
    }
  },
  {
    "name": "Céline",
    "hp": {
      "growth": 50,
      "max": 0
    },
    "str": {
      "growth": 35,
      "max": -2
    },
    "mag": {
      "growth": 25,
      "max": 2
    },
    "dex": {
      "growth": 30,
      "max": -2
    },
    "spd": {
      "growth": 45,
      "max": 1
    },
    "def": {
      "growth": 30,
      "max": -3
    },
    "res": {
      "growth": 40,
      "max": 1
    },
    "lck": {
      "growth": 50,
      "max": 3
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Gentle_Flower.png",
      "name": "Gentle Flower",
      "desc": "Recovery items used by allies within 2 spaces heal +50% HP.",
      "unit": "Céline"
    }
  },
  {
    "name": "Chloé",
    "hp": {
      "growth": 75,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": -2
    },
    "mag": {
      "growth": 35,
      "max": 1
    },
    "dex": {
      "growth": 40,
      "max": 0
    },
    "spd": {
      "growth": 55,
      "max": 3
    },
    "def": {
      "growth": 30,
      "max": -1
    },
    "res": {
      "growth": 25,
      "max": 0
    },
    "lck": {
      "growth": 25,
      "max": 0
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Fairy-Tale_Folk.png",
      "name": "Fairy-Tale Folk",
      "desc": "If a male and a female ally are adjacent within 2 spaces, unit deals +2 damage during combat.",
      "unit": "Chloé"
    }
  },
  {
    "name": "Louis",
    "hp": {
      "growth": 75,
      "max": 0
    },
    "str": {
      "growth": 40,
      "max": 1
    },
    "mag": {
      "growth": 0,
      "max": 0
    },
    "dex": {
      "growth": 25,
      "max": -1
    },
    "spd": {
      "growth": 25,
      "max": -2
    },
    "def": {
      "growth": 50,
      "max": 3
    },
    "res": {
      "growth": 20,
      "max": -2
    },
    "lck": {
      "growth": 25,
      "max": 1
    },
    "bld": {
      "growth": 15,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Admiration.png",
      "name": "Admiration",
      "desc": "If two female allies are adjacent within 2 spaces, this unit takes 2 less damage during combat.",
      "unit": "Louis"
    }
  },
  {
    "name": "Yunaka",
    "hp": {
      "growth": 50,
      "max": 0
    },
    "str": {
      "growth": 35,
      "max": -1
    },
    "mag": {
      "growth": 25,
      "max": 0
    },
    "dex": {
      "growth": 40,
      "max": 1
    },
    "spd": {
      "growth": 45,
      "max": 2
    },
    "def": {
      "growth": 15,
      "max": -2
    },
    "res": {
      "growth": 45,
      "max": 2
    },
    "lck": {
      "growth": 25,
      "max": -1
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Trained_to_Kill.png",
      "name": "Trained to Kill",
      "desc": "While unit occupies terrain that provides an Avo bonus, grants Crit+15.",
      "unit": "Yunaka"
    }
  },
  {
    "name": "Alcryst",
    "hp": {
      "growth": 65,
      "max": 0
    },
    "str": {
      "growth": 30,
      "max": 1
    },
    "mag": {
      "growth": 10,
      "max": -1
    },
    "dex": {
      "growth": 40,
      "max": 3
    },
    "spd": {
      "growth": 45,
      "max": 0
    },
    "def": {
      "growth": 30,
      "max": 1
    },
    "res": {
      "growth": 20,
      "max": -2
    },
    "lck": {
      "growth": 15,
      "max": -1
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Get_Behind_Me.png",
      "name": "Get Behind Me!",
      "desc": "When an ally within 2 spaces is attacked, grants Str+3 to unit for 1 turn.",
      "unit": "Alcryst"
    }
  },
  {
    "name": "Citrinne",
    "hp": {
      "growth": 45,
      "max": 0
    },
    "str": {
      "growth": 10,
      "max": -1
    },
    "mag": {
      "growth": 40,
      "max": 3
    },
    "dex": {
      "growth": 25,
      "max": 0
    },
    "spd": {
      "growth": 30,
      "max": -1
    },
    "def": {
      "growth": 20,
      "max": -2
    },
    "res": {
      "growth": 40,
      "max": 2
    },
    "lck": {
      "growth": 25,
      "max": 0
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Generosity.png",
      "name": "Generosity",
      "desc": "When this unit uses a healing item, adjacent allies also recover the same amount of HP.",
      "unit": "Citrinne"
    }
  },
  {
    "name": "Lapis",
    "hp": {
      "growth": 55,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": -2
    },
    "mag": {
      "growth": 20,
      "max": -2
    },
    "dex": {
      "growth": 35,
      "max": 2
    },
    "spd": {
      "growth": 55,
      "max": 3
    },
    "def": {
      "growth": 35,
      "max": 0
    },
    "res": {
      "growth": 30,
      "max": 0
    },
    "lck": {
      "growth": 25,
      "max": 0
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Share_Spoils.png",
      "name": "Share Spoils",
      "desc": "If there is an ally within 1 space, grants Hit/Avo+10 at a cost of Crit-10 to unit.",
      "unit": "Lapis"
    }
  },
  {
    "name": "Diamant",
    "hp": {
      "growth": 75,
      "max": 0
    },
    "str": {
      "growth": 30,
      "max": 2
    },
    "mag": {
      "growth": 15,
      "max": -1
    },
    "dex": {
      "growth": 20,
      "max": -1
    },
    "spd": {
      "growth": 40,
      "max": 0
    },
    "def": {
      "growth": 40,
      "max": 2
    },
    "res": {
      "growth": 25,
      "max": -1
    },
    "lck": {
      "growth": 20,
      "max": 0
    },
    "bld": {
      "growth": 15,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Fair_Fight.png",
      "name": "Fair Fight",
      "desc": "If unit initiates combat, grants Hit+15 to unit and foe if foe is able to counterattack.",
      "unit": "Diamant"
    }
  },
  {
    "name": "Amber",
    "hp": {
      "growth": 65,
      "max": 0
    },
    "str": {
      "growth": 45,
      "max": 2
    },
    "mag": {
      "growth": 0,
      "max": -1
    },
    "dex": {
      "growth": 25,
      "max": -1
    },
    "spd": {
      "growth": 30,
      "max": -1
    },
    "def": {
      "growth": 35,
      "max": 1
    },
    "res": {
      "growth": 5,
      "max": -1
    },
    "lck": {
      "growth": 35,
      "max": 1
    },
    "bld": {
      "growth": 15,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Aspiring_Hero.png",
      "name": "Aspiring Hero",
      "desc": "If no other units are within 1 space of unit or foe, grants Hit+20 at a cost of Avo-10 during combat.",
      "unit": "Amber"
    }
  },
  {
    "name": "Jade",
    "hp": {
      "growth": 55,
      "max": 0
    },
    "str": {
      "growth": 35,
      "max": 1
    },
    "mag": {
      "growth": 25,
      "max": -1
    },
    "dex": {
      "growth": 35,
      "max": 0
    },
    "spd": {
      "growth": 30,
      "max": 0
    },
    "def": {
      "growth": 40,
      "max": 2
    },
    "res": {
      "growth": 30,
      "max": 0
    },
    "lck": {
      "growth": 20,
      "max": -1
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Meditation.png",
      "name": "Meditation",
      "desc": "If unit uses Wait without attacking or using items, grants Res+2 for 1 turn.",
      "unit": "Jade"
    }
  },
  {
    "name": "Ivy",
    "hp": {
      "growth": 55,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": 0
    },
    "mag": {
      "growth": 30,
      "max": 2
    },
    "dex": {
      "growth": 25,
      "max": -2
    },
    "spd": {
      "growth": 40,
      "max": 0
    },
    "def": {
      "growth": 30,
      "max": 2
    },
    "res": {
      "growth": 35,
      "max": 2
    },
    "lck": {
      "growth": 15,
      "max": -3
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Single-Minded.png",
      "name": "Single-Minded",
      "desc": "During combat with a foe who was also unit’s most recent opponent, grants Hit+20.",
      "unit": "Ivy"
    }
  },
  {
    "name": "Kagetsu",
    "hp": {
      "growth": 60,
      "max": 0
    },
    "str": {
      "growth": 30,
      "max": -1
    },
    "mag": {
      "growth": 15,
      "max": -1
    },
    "dex": {
      "growth": 50,
      "max": 2
    },
    "spd": {
      "growth": 50,
      "max": 2
    },
    "def": {
      "growth": 40,
      "max": 0
    },
    "res": {
      "growth": 25,
      "max": -2
    },
    "lck": {
      "growth": 40,
      "max": 1
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Blinding_Flash.png",
      "name": "Blinding Flash",
      "desc": "If unit initiates combat, inflicts Avo-10 on foe during combat.",
      "unit": "Kagetsu"
    }
  },
  {
    "name": "Zelkov",
    "hp": {
      "growth": 65,
      "max": 0
    },
    "str": {
      "growth": 35,
      "max": 0
    },
    "mag": {
      "growth": 15,
      "max": -1
    },
    "dex": {
      "growth": 40,
      "max": 2
    },
    "spd": {
      "growth": 35,
      "max": 0
    },
    "def": {
      "growth": 35,
      "max": 0
    },
    "res": {
      "growth": 15,
      "max": -1
    },
    "lck": {
      "growth": 25,
      "max": 1
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Not__Quite_.png",
      "name": "Not *Quite*",
      "desc": "If foe initiates combat, inflicts Hit-10 on that foe during combat.",
      "unit": "Zelkov"
    }
  },
  {
    "name": "Fogado",
    "hp": {
      "growth": 60,
      "max": 0
    },
    "str": {
      "growth": 30,
      "max": -1
    },
    "mag": {
      "growth": 25,
      "max": -1
    },
    "dex": {
      "growth": 30,
      "max": 0
    },
    "spd": {
      "growth": 55,
      "max": 3
    },
    "def": {
      "growth": 30,
      "max": -1
    },
    "res": {
      "growth": 35,
      "max": 1
    },
    "lck": {
      "growth": 25,
      "max": 0
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Charmer.png",
      "name": "Charmer",
      "desc": "During combat with a foe who was also unit’s most recent opponent, inflicts Crit-10 on that foe.",
      "unit": "Fogado"
    }
  },
  {
    "name": "Pandreo",
    "hp": {
      "growth": 60,
      "max": 0
    },
    "str": {
      "growth": 5,
      "max": -3
    },
    "mag": {
      "growth": 30,
      "max": 2
    },
    "dex": {
      "growth": 45,
      "max": 0
    },
    "spd": {
      "growth": 45,
      "max": -1
    },
    "def": {
      "growth": 15,
      "max": -2
    },
    "res": {
      "growth": 55,
      "max": 3
    },
    "lck": {
      "growth": 30,
      "max": 2
    },
    "bld": {
      "growth": 15,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Party_Animal.png",
      "name": "Party Animal",
      "desc": "Grants a bonus to Hit and Avo equal to 3× the number of allies and foes within 2 spaces.",
      "unit": "Pandreo"
    }
  },
  {
    "name": "Bunet",
    "hp": {
      "growth": 65,
      "max": 0
    },
    "str": {
      "growth": 30,
      "max": 1
    },
    "mag": {
      "growth": 10,
      "max": -3
    },
    "dex": {
      "growth": 40,
      "max": 1
    },
    "spd": {
      "growth": 35,
      "max": 0
    },
    "def": {
      "growth": 45,
      "max": 2
    },
    "res": {
      "growth": 25,
      "max": -1
    },
    "lck": {
      "growth": 40,
      "max": 1
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Seconds_.png",
      "name": "Seconds?",
      "desc": "On eating a packed lunch, unit may obtain another of the same item. Trigger %=Lck.",
      "unit": "Bunet"
    }
  },
  {
    "name": "Timerra",
    "hp": {
      "growth": 55,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": -1
    },
    "mag": {
      "growth": 25,
      "max": -1
    },
    "dex": {
      "growth": 45,
      "max": 3
    },
    "spd": {
      "growth": 45,
      "max": 0
    },
    "def": {
      "growth": 30,
      "max": 2
    },
    "res": {
      "growth": 30,
      "max": -3
    },
    "lck": {
      "growth": 30,
      "max": 1
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Racket_of_Solm.png",
      "name": "Racket of Solm",
      "desc": "Inflicts Crit-5 on foes within 3 spaces.",
      "unit": "Timerra"
    }
  },
  {
    "name": "Panette",
    "hp": {
      "growth": 75,
      "max": 0
    },
    "str": {
      "growth": 45,
      "max": 3
    },
    "mag": {
      "growth": 10,
      "max": -1
    },
    "dex": {
      "growth": 40,
      "max": 0
    },
    "spd": {
      "growth": 25,
      "max": 0
    },
    "def": {
      "growth": 30,
      "max": 0
    },
    "res": {
      "growth": 15,
      "max": -1
    },
    "lck": {
      "growth": 20,
      "max": 0
    },
    "bld": {
      "growth": 15,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Blood_Fury.png",
      "name": "Blood Fury",
      "desc": "If unit’s HP is not at max after combat, grants Crit+10 as long as unit’s HP stays below max.",
      "unit": "Panette"
    }
  },
  {
    "name": "Merrin",
    "hp": {
      "growth": 55,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": -1
    },
    "mag": {
      "growth": 25,
      "max": -1
    },
    "dex": {
      "growth": 40,
      "max": 1
    },
    "spd": {
      "growth": 50,
      "max": 2
    },
    "def": {
      "growth": 30,
      "max": -1
    },
    "res": {
      "growth": 30,
      "max": 0
    },
    "lck": {
      "growth": 25,
      "max": 1
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Knightly_Escort.png",
      "name": "Knightly Escort",
      "desc": "When 2 or more female allies are within 2 spaces, grants Hit/Avo+5 to unit and those allies.",
      "unit": "Merrin"
    }
  },
  {
    "name": "Hortensia",
    "hp": {
      "growth": 40,
      "max": 0
    },
    "str": {
      "growth": 20,
      "max": -2
    },
    "mag": {
      "growth": 20,
      "max": 0
    },
    "dex": {
      "growth": 35,
      "max": 0
    },
    "spd": {
      "growth": 50,
      "max": 1
    },
    "def": {
      "growth": 25,
      "max": -3
    },
    "res": {
      "growth": 55,
      "max": 3
    },
    "lck": {
      "growth": 50,
      "max": 2
    },
    "bld": {
      "growth": 0,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Big_Personality.png",
      "name": "Big Personality",
      "desc": "When unit uses a healing staff, grants range +1.",
      "unit": "Hortensia"
    }
  },
  {
    "name": "Seadall",
    "hp": {
      "growth": 55,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": 0
    },
    "mag": {
      "growth": 15,
      "max": -2
    },
    "dex": {
      "growth": 25,
      "max": -1
    },
    "spd": {
      "growth": 50,
      "max": 2
    },
    "def": {
      "growth": 25,
      "max": 0
    },
    "res": {
      "growth": 25,
      "max": 0
    },
    "lck": {
      "growth": 35,
      "max": 2
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Curious_Dance.png",
      "name": "Curious Dance",
      "desc": "At start of turn, allies within 2 spaces of unit recover 10% of their max HP.",
      "unit": "Seadall"
    }
  },
  {
    "name": "Rosado",
    "hp": {
      "growth": 75,
      "max": 0
    },
    "str": {
      "growth": 45,
      "max": 3
    },
    "mag": {
      "growth": 25,
      "max": -2
    },
    "dex": {
      "growth": 40,
      "max": 1
    },
    "spd": {
      "growth": 45,
      "max": 0
    },
    "def": {
      "growth": 30,
      "max": 1
    },
    "res": {
      "growth": 30,
      "max": -2
    },
    "lck": {
      "growth": 20,
      "max": 0
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Stunning_Smile.png",
      "name": "Stunning Smile",
      "desc": "If foe is male, inflicts Avo-20 on that foe during combat.",
      "unit": "Rosado"
    }
  },
  {
    "name": "Goldmary",
    "hp": {
      "growth": 65,
      "max": 0
    },
    "str": {
      "growth": 30,
      "max": 1
    },
    "mag": {
      "growth": 5,
      "max": -3
    },
    "dex": {
      "growth": 25,
      "max": 0
    },
    "spd": {
      "growth": 25,
      "max": 0
    },
    "def": {
      "growth": 55,
      "max": 2
    },
    "res": {
      "growth": 25,
      "max": -1
    },
    "lck": {
      "growth": 25,
      "max": 2
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Disarming_Sigh.png",
      "name": "Disarming Sigh",
      "desc": "If foe is male, inflicts Hit-20 on that foe during combat.",
      "unit": "Goldmary"
    }
  },
  {
    "name": "Lindon",
    "hp": {
      "growth": 65,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": 0
    },
    "mag": {
      "growth": 25,
      "max": 2
    },
    "dex": {
      "growth": 25,
      "max": -1
    },
    "spd": {
      "growth": 40,
      "max": 0
    },
    "def": {
      "growth": 25,
      "max": -2
    },
    "res": {
      "growth": 40,
      "max": 2
    },
    "lck": {
      "growth": 15,
      "max": 0
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Weapon_Insight.png",
      "name": "Weapon Insight",
      "desc": "If unit is equipped with a weapon of lower level than foe’s, grants Crit+20 during combat.",
      "unit": "Lindon"
    }
  },
  {
    "name": "Saphir",
    "hp": {
      "growth": 80,
      "max": 0
    },
    "str": {
      "growth": 35,
      "max": 2
    },
    "mag": {
      "growth": 0,
      "max": -2
    },
    "dex": {
      "growth": 25,
      "max": 0
    },
    "spd": {
      "growth": 30,
      "max": 1
    },
    "def": {
      "growth": 30,
      "max": 1
    },
    "res": {
      "growth": 5,
      "max": -2
    },
    "lck": {
      "growth": 20,
      "max": 0
    },
    "bld": {
      "growth": 10,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Will_to_Win.png",
      "name": "Will to Win",
      "desc": "If unit’s HP is 50% or less at start of combat, grants Hit/Avo+20 during combat.",
      "unit": "Saphir"
    }
  },
  {
    "name": "Veyle",
    "hp": {
      "growth": 40,
      "max": 0
    },
    "str": {
      "growth": 25,
      "max": 0
    },
    "mag": {
      "growth": 45,
      "max": 3
    },
    "dex": {
      "growth": 35,
      "max": 0
    },
    "spd": {
      "growth": 30,
      "max": -1
    },
    "def": {
      "growth": 25,
      "max": 0
    },
    "res": {
      "growth": 35,
      "max": 3
    },
    "lck": {
      "growth": 20,
      "max": -2
    },
    "bld": {
      "growth": 0,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Fell_Protection.png",
      "name": "Fell Protection",
      "desc": "Adjacent allies deal +1 damage and take 3 less damage.",
      "unit": "Veyle"
    }
  },
  {
    "name": "Mauvier",
    "hp": {
      "growth": 70,
      "max": 0
    },
    "str": {
      "growth": 35,
      "max": 1
    },
    "mag": {
      "growth": 40,
      "max": 2
    },
    "dex": {
      "growth": 40,
      "max": 1
    },
    "spd": {
      "growth": 35,
      "max": -2
    },
    "def": {
      "growth": 50,
      "max": 1
    },
    "res": {
      "growth": 45,
      "max": 1
    },
    "lck": {
      "growth": 15,
      "max": -2
    },
    "bld": {
      "growth": 15,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Contemplative.png",
      "name": "Contemplative",
      "desc": "If unit uses Wait without attacking or using items, grants Def+2 for 1 turn.",
      "unit": "Mauvier"
    }
  },
  {
    "name": "Anna",
    "hp": {
      "growth": 55,
      "max": 0
    },
    "str": {
      "growth": 15,
      "max": 0
    },
    "mag": {
      "growth": 50,
      "max": 1
    },
    "dex": {
      "growth": 50,
      "max": 1
    },
    "spd": {
      "growth": 50,
      "max": 1
    },
    "def": {
      "growth": 20,
      "max": -2
    },
    "res": {
      "growth": 35,
      "max": -1
    },
    "lck": {
      "growth": 45,
      "max": 1
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Make_a_Killing.png",
      "name": "Make a Killing",
      "desc": "May obtain 500G when unit defeats a foe. Trigger %=Lck.",
      "unit": "Anna"
    }
  },
  {
    "name": "Jean",
    "hp": {
      "growth": 50,
      "max": 0
    },
    "str": {
      "growth": 20,
      "max": 0
    },
    "mag": {
      "growth": 20,
      "max": 2
    },
    "dex": {
      "growth": 35,
      "max": -1
    },
    "spd": {
      "growth": 40,
      "max": -1
    },
    "def": {
      "growth": 25,
      "max": 0
    },
    "res": {
      "growth": 20,
      "max": 0
    },
    "lck": {
      "growth": 25,
      "max": 1
    },
    "bld": {
      "growth": 5,
      "max": 0
    },
    "skill": {
      "img": "https://serenesforest.net/wp-content/uploads/2023/01/Expertise.png",
      "name": "Expertise",
      "desc": "Grants unit enhanced stat growth when leveling up. [Doubles class growths.]",
      "unit": "Jean"
    }
  }
]
 export default Units