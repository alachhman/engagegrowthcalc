const classGrowth = [
    {
        name: 'Dragon Child',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 10,
        spd: 15,
        def: 10,
        res: 10,
        lck: 5,
        bld: 5
    },
    {
        name: 'Tireur d’élite',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 30,
        spd: 10,
        def: 15,
        res: 5,
        lck: 5,
        bld: 0
    },
    {
        name: 'Sniper',
        hp: 15,
        str: 15,
        mag: 0,
        dex: 30,
        spd: 10,
        def: 10,
        res: 0,
        lck: 10,
        bld: 0
    },
    {
        name: 'Lord (Alcryst)',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 25,
        spd: 10,
        def: 10,
        res: 0,
        lck: 5,
        bld: 0
    },
    {
        name: 'Archer',
        hp: 10,
        str: 15,
        mag: 0,
        dex: 25,
        spd: 10,
        def: 5,
        res: 0,
        lck: 5,
        bld: 0
    },
    {
        name: 'Cupido',
        hp: 10,
        str: 5,
        mag: 5,
        dex: 20,
        spd: 20,
        def: 5,
        res: 20,
        lck: 0,
        bld: 0
    },
    {
        name: 'Lance Fighter',
        hp: 10,
        str: 10,
        mag: 5,
        dex: 20,
        spd: 5,
        def: 10,
        res: 5,
        lck: 0,
        bld: 0
    },
    {
        name: 'Halberdier',
        hp: 10,
        str: 15,
        mag: 5,
        dex: 20,
        spd: 10,
        def: 15,
        res: 5,
        lck: 5,
        bld: 0
    },
    {
        name: 'Bow Knight',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 20,
        spd: 20,
        def: 0,
        res: 15,
        lck: 15,
        bld: 0
    },
    {
        name: 'Thief',
        hp: 5,
        str: 10,
        mag: 0,
        dex: 20,
        spd: 15,
        def: 15,
        res: 5,
        lck: 15,
        bld: 0
    },
    {
        name: 'Sleipnir Rider',
        hp: 0,
        str: 0,
        mag: 20,
        dex: 15,
        spd: 15,
        def: 0,
        res: 30,
        lck: 15,
        bld: 0
    },
    {
        name: 'Royal Knight',
        hp: 5,
        str: 10,
        mag: 15,
        dex: 15,
        spd: 15,
        def: 5,
        res: 20,
        lck: 10,
        bld: 0
    },
    {
        name: 'Griffin Knight',
        hp: 0,
        str: 10,
        mag: 15,
        dex: 15,
        spd: 20,
        def: 0,
        res: 15,
        lck: 15,
        bld: 0
    },
    {
        name: 'Sentinel',
        hp: 10,
        str: 5,
        mag: 0,
        dex: 15,
        spd: 15,
        def: 5,
        res: 15,
        lck: 0,
        bld: 0
    },
    {
        name: 'Sword Fighter',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 15,
        spd: 20,
        def: 0,
        res: 15,
        lck: 10,
        bld: 0
    },
    {
        name: 'Swordmaster',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 15,
        spd: 20,
        def: 0,
        res: 15,
        lck: 15,
        bld: 0
    },
    {
        name: 'Great Knight',
        hp: 20,
        str: 15,
        mag: 0,
        dex: 15,
        spd: 0,
        def: 25,
        res: 10,
        lck: 5,
        bld: 5
    },
    {
        name: 'Wolf Knight',
        hp: 10,
        str: 5,
        mag: 0,
        dex: 15,
        spd: 20,
        def: 5,
        res: 20,
        lck: 20,
        bld: 0
    },
    {
        name: 'Fell Child',
        hp: 10,
        str: 10,
        mag: 25,
        dex: 10,
        spd: 5,
        def: 10,
        res: 25,
        lck: 0,
        bld: 0
    },
    {
        name: 'Wing Tamer (Hortensia)',
        hp: 0,
        str: 0,
        mag: 15,
        dex: 10,
        spd: 10,
        def: 0,
        res: 25,
        lck: 10,
        bld: 0
    },
    {
        name: 'Melusine',
        hp: 10,
        str: 10,
        mag: 10,
        dex: 10,
        spd: 15,
        def: 10,
        res: 10,
        lck: 0,
        bld: 5
    },
    {
        name: 'Sword Flier',
        hp: 5,
        str: 10,
        mag: 5,
        dex: 10,
        spd: 10,
        def: 0,
        res: 10,
        lck: 10,
        bld: 0
    },
    {
        name: 'Lance Flier',
        hp: 5,
        str: 10,
        mag: 5,
        dex: 10,
        spd: 10,
        def: 0,
        res: 10,
        lck: 10,
        bld: 0
    },
    {
        name: 'Axe Flier',
        hp: 5,
        str: 10,
        mag: 5,
        dex: 10,
        spd: 10,
        def: 0,
        res: 10,
        lck: 10,
        bld: 0
    },
    {
        name: 'Divine Dragon',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 10,
        spd: 15,
        def: 15,
        res: 15,
        lck: 10,
        bld: 5
    },
    {
        name: 'Lord (Diamant)',
        hp: 15,
        str: 20,
        mag: 0,
        dex: 10,
        spd: 10,
        def: 10,
        res: 0,
        lck: 5,
        bld: 0
    },
    {
        name: 'Successeur',
        hp: 15,
        str: 20,
        mag: 0,
        dex: 10,
        spd: 15,
        def: 15,
        res: 0,
        lck: 10,
        bld: 5
    },
    {
        name: 'Sentinel',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 10,
        spd: 5,
        def: 20,
        res: 0,
        lck: 5,
        bld: 0
    },
    {
        name: 'Picket',
        hp: 10,
        str: 15,
        mag: 0,
        dex: 10,
        spd: 10,
        def: 20,
        res: 5,
        lck: 5,
        bld: 5
    },
    {
        name: 'Hero',
        hp: 15,
        str: 15,
        mag: 0,
        dex: 10,
        spd: 15,
        def: 0,
        res: 10,
        lck: 15,
        bld: 0
    },
    {
        name: 'Warrior',
        hp: 25,
        str: 20,
        mag: 0,
        dex: 10,
        spd: 15,
        def: 10,
        res: 5,
        lck: 0,
        bld: 5
    },
    {
        name: 'Sword Armor',
        hp: 20,
        str: 15,
        mag: 0,
        dex: 10,
        spd: 0,
        def: 30,
        res: 0,
        lck: 0,
        bld: 5
    },
    {
        name: 'Lance Armor',
        hp: 20,
        str: 15,
        mag: 0,
        dex: 10,
        spd: 0,
        def: 30,
        res: 0,
        lck: 0,
        bld: 5
    },
    {
        name: 'Axe Armor',
        hp: 20,
        str: 15,
        mag: 0,
        dex: 10,
        spd: 0,
        def: 30,
        res: 0,
        lck: 0,
        bld: 5
    },
    {
        name: 'General',
        hp: 25,
        str: 20,
        mag: 0,
        dex: 10,
        spd: 0,
        def: 30,
        res: 0,
        lck: 0,
        bld: 10
    },
    {
        name: 'Sword Cavalier',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 10,
        spd: 10,
        def: 10,
        res: 10,
        lck: 10,
        bld: 0
    },
    {
        name: 'Lance Cavalier',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 10,
        spd: 10,
        def: 10,
        res: 10,
        lck: 10,
        bld: 0
    },
    {
        name: 'Axe Cavalier',
        hp: 10,
        str: 10,
        mag: 0,
        dex: 10,
        spd: 10,
        def: 10,
        res: 10,
        lck: 10,
        bld: 0
    },
    {
        name: 'Paladin',
        hp: 15,
        str: 15,
        mag: 0,
        dex: 10,
        spd: 15,
        def: 15,
        res: 15,
        lck: 10,
        bld: 0
    },
    {
        name: 'Wyvern Knight',
        hp: 20,
        str: 20,
        mag: 0,
        dex: 10,
        spd: 5,
        def: 20,
        res: 5,
        lck: 5,
        bld: 5
    },
    {
        name: 'Sage',
        hp: 0,
        str: 0,
        mag: 30,
        dex: 5,
        spd: 0,
        def: 0,
        res: 30,
        lck: 15,
        bld: 0
    },
    {
        name: 'Lindwurm',
        hp: 5,
        str: 0,
        mag: 25,
        dex: 5,
        spd: 0,
        def: 15,
        res: 25,
        lck: 0,
        bld: 0
    },
    {
        name: 'Mage',
        hp: 0,
        str: 0,
        mag: 25,
        dex: 5,
        spd: 0,
        def: 0,
        res: 25,
        lck: 5,
        bld: 0
    },
    {
        name: 'Vidame',
        hp: 5,
        str: 10,
        mag: 15,
        dex: 5,
        spd: 5,
        def: 5,
        res: 15,
        lck: 20,
        bld: 0
    },
    {
        name: 'Noble (Celine)',
        hp: 0,
        str: 5,
        mag: 10,
        dex: 5,
        spd: 5,
        def: 5,
        res: 10,
        lck: 20,
        bld: 0
    },
    {
        name: 'Noble (Alfred)',
        hp: 15,
        str: 15,
        mag: 0,
        dex: 5,
        spd: 5,
        def: 20,
        res: 5,
        lck: 15,
        bld: 0
    },
    {
        name: 'Avenir',
        hp: 15,
        str: 15,
        mag: 0,
        dex: 5,
        spd: 10,
        def: 25,
        res: 5,
        lck: 20,
        bld: 5
    },
    {
        name: 'Axe Fighter',
        hp: 25,
        str: 20,
        mag: 0,
        dex: 5,
        spd: 10,
        def: 5,
        res: 0,
        lck: 0,
        bld: 5
    },
    {
        name: 'Berserker',
        hp: 30,
        str: 30,
        mag: 0,
        dex: 5,
        spd: 10,
        def: 5,
        res: 0,
        lck: 0,
        bld: 10
    },
    {
        name: 'Dancer',
        hp: 5,
        str: 10,
        mag: 0,
        dex: 5,
        spd: 15,
        def: 10,
        res: 20,
        lck: 20,
        bld: 0
    },
    {
        name: 'Mage Knight',
        hp: 5,
        str: 5,
        mag: 25,
        dex: 0,
        spd: 5,
        def: 10,
        res: 25,
        lck: 5,
        bld: 0
    },
    {
        name: 'Martial Monk',
        hp: 0,
        str: 10,
        mag: 25,
        dex: 0,
        spd: 0,
        def: 10,
        res: 20,
        lck: 10,
        bld: 0
    },
    {
        name: 'High Priest',
        hp: 0,
        str: 0,
        mag: 25,
        dex: 0,
        spd: 5,
        def: 0,
        res: 30,
        lck: 30,
        bld: 0
    },
    {
        name: 'Wing Tamer (Ivy)',
        hp: 5,
        str: 0,
        mag: 20,
        dex: 0,
        spd: 0,
        def: 10,
        res: 20,
        lck: 0,
        bld: 0
    },
    {
        name: 'Martial Master',
        hp: 5,
        str: 10,
        mag: 20,
        dex: 0,
        spd: 0,
        def: 15,
        res: 25,
        lck: 10,
        bld: 0
    }
]

export default classGrowth
