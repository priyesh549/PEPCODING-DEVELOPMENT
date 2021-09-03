const request = require('request');
const cheerio = require('cheerio');


// my code
// const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';

// request(url,callback);

// function callback(error,response,html){
//     if(error){
//         console.log('error',error);
//     }
//     else{
//         extractHTML(html);
//     }
// }

// function extractHTML(html){
//     let selectorTools = cheerio.load(html);
//     let highestwicketstats = selectorTools('.table.bowler .text-nowrap ,.table.bowler td span');
//     let bowlername = "";
//     let maxwicket = -1;
//     for(let i=0;i<highestwicketstats.length;i++){
//         let currbowler = selectorTools(highestwicketstats[i]).text();
//         let currwicket = selectorTools(highestwicketstats[i+1]).text();
//         if(!isNaN(currwicket) && maxwicket < currwicket){
//             bowlername = currbowler;
//             maxwicket = currwicket;
//             i++;
//         }
//     }
//     console.log(bowlername);
//     console.log(maxwicket);
// }


// bhaiya ka code
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
    let bowlertableArr = selectorTools('.card.content-block.match-scorecard-table .Collapsible__contentOuter .table.bowler');
    // console.log(bowlertableArr.length);

    let hwt = "";
    let now = 0;
    for(let i=0;i<bowlertableArr.length;i++){
        let bowlerTable = selectorTools(bowlertableArr[i]).html();
        let allbowlersRow = selectorTools(bowlerTable).find("tbody>tr"); // tbody ke level1 descendant lena hai tr.
        // console.log(allbowlers.length);

        for(let j=0;j<allbowlersRow .length;j++){
            // td ka matlab column
            let columnofEachPlayerArr = selectorTools(allbowlersRow[j]).find("td"); // td ke andar text hai hmara cols.(table data)
            // console.log(colofEachPlayerArr.length);
            let playerName = selectorTools(columnofEachPlayerArr[0]).text();
            let numberofwickets = selectorTools(columnofEachPlayerArr[4]).text();
            if(columnofEachPlayerArr.length == 1) continue;
            // console.log(playerName);
            // console.log(numberofwickets);
            if(now < numberofwickets){
                hwt = playerName;
                now = numberofwickets;
            }
        }
    }
    console.log('Higest wicket taker is:',hwt);
    console.log('Number of wickets:',now);
}