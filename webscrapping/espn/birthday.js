const request = require("request");
const cheerio = require("cheerio");
// npm i chalk
const chalk = require("chalk");

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';

request(url,callback);

function callback(error,response,html){
    if(error){
        console.log('error',error);
    }
    else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let selectorTools = cheerio.load(html);
    let tableArr = selectorTools('.table tbody');
    // console.log(tableArr.length);
    // console.log(selectorTools(tableArr[0]).text());
    for(let i=0;i<4;i++){
        let allRowsofTable = selectorTools(tableArr[i]).find('tr');
        // console.log(allRowsofTable.length);
        for(let j=0;j<allRowsofTable.length;j++){
            let link = selectorTools(allRowsofTable[j]).find('a').attr('href');
            // console.log(link);
            // https://www.espncricinfo.com/
            if(link){
                let fulllink = "https://www.espncricinfo.com"+link;
                getBirthday(fulllink);
            }
        }
    }
}

function getBirthday(url){
    request(url,callback);
    function callback(error,response,html){
        if(error){
            console.log('error',error);
        }
        else{
            extractHTML(html);
        }
    }

    function extractHTML(html){
        let selectorTools = cheerio.load(html);
        let playerDetails = selectorTools('.player-card-description.gray-900');
        // console.log(playerDetails.length);
        let playerName = selectorTools(playerDetails[0]).text();
        let birthdetails = selectorTools(playerDetails[1]).text().split(",");
        let dob = "";
        for(let i=0;i<2;i++){
            dob += birthdetails[i];
        }
        console.log(chalk.bold.red("Name of the player:",playerName));
        console.log(chalk.green("date of birth:",dob));
        console.log();
    }
}