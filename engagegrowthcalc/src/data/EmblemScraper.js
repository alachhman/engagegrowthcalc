const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const urls = [
    "https://serenesforest.net/engage/emblems/marth/",
    "https://serenesforest.net/engage/emblems/sigurd/",
    "https://serenesforest.net/engage/emblems/celica/",
    "https://serenesforest.net/engage/emblems/micaiah/",
    "https://serenesforest.net/engage/emblems/roy/",
    "https://serenesforest.net/engage/emblems/leif/",
    "https://serenesforest.net/engage/emblems/lucina/",
    "https://serenesforest.net/engage/emblems/ike/",
    "https://serenesforest.net/engage/emblems/byleth/",
    "https://serenesforest.net/engage/emblems/corrin/",
    "https://serenesforest.net/engage/emblems/eirika/",
    "https://serenesforest.net/engage/emblems/alear/",
    "https://serenesforest.net/engage/emblems/edelgard/",
    "https://serenesforest.net/engage/emblems/tiki/",
    "https://serenesforest.net/engage/emblems/hector/",
    "https://serenesforest.net/engage/emblems/soren/",
    "https://serenesforest.net/engage/emblems/camilla/",
    "https://serenesforest.net/engage/emblems/veronica/",
    "https://serenesforest.net/engage/emblems/chrom/"
];

const scrapeData = async (urls) => {
    return await Promise.all(urls.map(async url => {
        try {
            const {data} = await axios.get(url);
            const $ = cheerio.load(data);

            const name = $('.page-title').text()

            const table = $('table')
            let statKeys = [];
            let statBoosts = [];
            $(table.first()).find('tr').each((i, x) => {
                if (i === 0) {
                    $(x).find('th').each((j, y) => {
                        statKeys.push($(y).text().replace('\n', ''))
                    })
                } else {
                    let temp = {}
                    $(x).find("td").each((j, y) => {
                        temp[statKeys[j]] = parseInt($(y).text().replace('\n', '').replace('+', ''))
                    })
                    statBoosts.push(temp)
                }
            })
            let skills = []
            $(table.last()).find('tr').each((i, x) => {
                if(i !== 0){
                    let skill = {}
                    $(x).find('td').each((j, y) => {
                        switch (j) {
                            case 0: skill['bond'] = $(y).text(); break;
                            case 1: skill['name'] = $(y).text(); break;
                            case 2: skill['desc'] = $(y).text(); break;
                            case 3: skill['type'] = $(y).text(); break;
                            case 4: skill['cost'] = ($(y).text() === '—' ? 0 : parseInt($(y).text())); break;
                        }
                    })
                    skills.push(skill)
                }
            })
            return {
                name: name,
                statBoosts: statBoosts,
                skills: skills
            }
        } catch (err) {
            console.error(err);
        }
    }))
}

scrapeData(urls).then(x => {
    fs.writeFile("Emblems.js", "const Emblems = " + x + "\n" + JSON.stringify(x, null, 2) + "\n\nexport default Emblems", (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("Successfully written data to file");
    });
})
