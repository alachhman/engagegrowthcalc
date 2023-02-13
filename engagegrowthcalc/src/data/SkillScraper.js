const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://serenesforest.net/engage/classes/learnable-skills/";

async function scrapeData() {
    try {
        const {data} = await axios.get(url);
        const $ = cheerio.load(data);

        let results = [];

        const rows = $('tr');
        rows.each((i, el) => {
            if(i === 0) return;
            let arr = []
            $(el).find('td').each((i, el) => {
                if(i === 0) {
                    arr.push($(el).find('img').attr('src'))
                } else {
                    arr.push($(el).text())
                }
            })
            results.push({
                img: arr[0],
                name: arr[1],
                desc: arr [2],
                unit: arr [3]
            })
        })

        console.log(results)


        fs.writeFile("ClassSkills.json", JSON.stringify(results, null, 2), (err) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log("Successfully written data to file");
        });
    } catch (err) {
        console.error(err);
    }
}

// Invoke the above function
scrapeData();
