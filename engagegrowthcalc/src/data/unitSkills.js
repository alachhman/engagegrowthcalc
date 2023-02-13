const unitSkills = [
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Divinely_Inspiring.png",
        "name": "Divinely Inspiring",
        "desc": "Adjacent allies deal +3 damage and take 1 less damage.",
        "unit": "Alear"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Alabaster_Duty.png",
        "name": "Alabaster Duty",
        "desc": "If unit is adjacent to the Divine Dragon, grants Crit+5 during combat to both of them.",
        "unit": "Vander"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Verdant_Faith.png",
        "name": "Verdant Faith",
        "desc": "If unit is adjacent to the Divine Dragon, grants Hit+10 during combat to both of them.",
        "unit": "Clanne"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Crimson_Cheer.png",
        "name": "Crimson Cheer",
        "desc": "If unit is adjacent to the Divine Dragon, grants Avo+10 during combat to both of them.",
        "unit": "Framme"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Self-Improver.png",
        "name": "Self-Improver",
        "desc": "If unit uses Wait without attacking or using items, grants Str+2 for 1 turn.",
        "unit": "Alfred"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Energized.png",
        "name": "Energized",
        "desc": "When unit recovers HP using an item, grants Str+2 for 1 turn.",
        "unit": "Etie"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Moved_to_Tears.png",
        "name": "Moved to Tears",
        "desc": "When an ally joins a chain attack in this unit’s combat, unit deals +2 damage.",
        "unit": "Boucheron"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Gentle_Flower.png",
        "name": "Gentle Flower",
        "desc": "Recovery items used by allies within 2 spaces heal +50% HP.",
        "unit": "Céline"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Fairy-Tale_Folk.png",
        "name": "Fairy-Tale Folk",
        "desc": "If a male and a female ally are adjacent within 2 spaces, unit deals +2 damage during combat.",
        "unit": "Chloé"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Admiration.png",
        "name": "Admiration",
        "desc": "If two female allies are adjacent within 2 spaces, this unit takes 2 less damage during combat.",
        "unit": "Louis"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Trained_to_Kill.png",
        "name": "Trained to Kill",
        "desc": "While unit occupies terrain that provides an Avo bonus, grants Crit+15.",
        "unit": "Yunaka"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Get_Behind_Me.png",
        "name": "Get Behind Me!",
        "desc": "When an ally within 2 spaces is attacked, grants Str+3 to unit for 1 turn.",
        "unit": "Alcryst"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Generosity.png",
        "name": "Generosity",
        "desc": "When this unit uses a healing item, adjacent allies also recover the same amount of HP.",
        "unit": "Citrinne"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Share_Spoils.png",
        "name": "Share Spoils",
        "desc": "If there is an ally within 1 space, grants Hit/Avo+10 at a cost of Crit-10 to unit.",
        "unit": "Lapis"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Fair_Fight.png",
        "name": "Fair Fight",
        "desc": "If unit initiates combat, grants Hit+15 to unit and foe if foe is able to counterattack.",
        "unit": "Diamant"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Aspiring_Hero.png",
        "name": "Aspiring Hero",
        "desc": "If no other units are within 1 space of unit or foe, grants Hit+20 at a cost of Avo-10 during combat.",
        "unit": "Amber"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Meditation.png",
        "name": "Meditation",
        "desc": "If unit uses Wait without attacking or using items, grants Res+2 for 1 turn.",
        "unit": "Jade"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Single-Minded.png",
        "name": "Single-Minded",
        "desc": "During combat with a foe who was also unit’s most recent opponent, grants Hit+20.",
        "unit": "Ivy"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Blinding_Flash.png",
        "name": "Blinding Flash",
        "desc": "If unit initiates combat, inflicts Avo-10 on foe during combat.",
        "unit": "Kagetsu"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Not__Quite_.png",
        "name": "Not *Quite*",
        "desc": "If foe initiates combat, inflicts Hit-10 on that foe during combat.",
        "unit": "Zelkov"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Charmer.png",
        "name": "Charmer",
        "desc": "During combat with a foe who was also unit’s most recent opponent, inflicts Crit-10 on that foe.",
        "unit": "Fogado"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Party_Animal.png",
        "name": "Party Animal",
        "desc": "Grants a bonus to Hit and Avo equal to 3× the number of allies and foes within 2 spaces.",
        "unit": "Pandreo"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Seconds_.png",
        "name": "Seconds?",
        "desc": "On eating a packed lunch, unit may obtain another of the same item. Trigger %=Lck.",
        "unit": "Bunet"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Racket_of_Solm.png",
        "name": "Racket of Solm",
        "desc": "Inflicts Crit-5 on foes within 3 spaces.",
        "unit": "Timerra"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Blood_Fury.png",
        "name": "Blood Fury",
        "desc": "If unit’s HP is not at max after combat, grants Crit+10 as long as unit’s HP stays below max.",
        "unit": "Panette"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Knightly_Escort.png",
        "name": "Knightly Escort",
        "desc": "When 2 or more female allies are within 2 spaces, grants Hit/Avo+5 to unit and those allies.",
        "unit": "Merrin"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Big_Personality.png",
        "name": "Big Personality",
        "desc": "When unit uses a healing staff, grants range +1.",
        "unit": "Hortensia"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Curious_Dance.png",
        "name": "Curious Dance",
        "desc": "At start of turn, allies within 2 spaces of unit recover 10% of their max HP.",
        "unit": "Seadall"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Stunning_Smile.png",
        "name": "Stunning Smile",
        "desc": "If foe is male, inflicts Avo-20 on that foe during combat.",
        "unit": "Rosado"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Disarming_Sigh.png",
        "name": "Disarming Sigh",
        "desc": "If foe is male, inflicts Hit-20 on that foe during combat.",
        "unit": "Goldmary"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Weapon_Insight.png",
        "name": "Weapon Insight",
        "desc": "If unit is equipped with a weapon of lower level than foe’s, grants Crit+20 during combat.",
        "unit": "Lindon"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Will_to_Win.png",
        "name": "Will to Win",
        "desc": "If unit’s HP is 50% or less at start of combat, grants Hit/Avo+20 during combat.",
        "unit": "Saphir"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Fell_Protection.png",
        "name": "Fell Protection",
        "desc": "Adjacent allies deal +1 damage and take 3 less damage.",
        "unit": "Veyle"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Contemplative.png",
        "name": "Contemplative",
        "desc": "If unit uses Wait without attacking or using items, grants Def+2 for 1 turn.",
        "unit": "Mauvier"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Make_a_Killing.png",
        "name": "Make a Killing",
        "desc": "May obtain 500G when unit defeats a foe. Trigger %=Lck.",
        "unit": "Anna"
    },
    {
        "img": "https://serenesforest.net/wp-content/uploads/2023/01/Expertise.png",
        "name": "Expertise",
        "desc": "Grants unit enhanced stat growth when leveling up. [Doubles class growths.]",
        "unit": "Jean"
    }
]

export default unitSkills
