const cheerio = require("cheerio");
const request = require("request");
const fs = require('fs');

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";

request(url,requestCallBack);

let playerstats = [];
let initialcount = 0;
let totalcounts = 0;
function requestCallBack(err,res,html){
    const $ = cheerio.load(html);
    const AnchorTabMatchUrls = $('a[data-hover= "Scorecard"]');
    for(let i=0;i<AnchorTabMatchUrls.length;i++){
        totalcounts++;
        let matchscoreurl = "https://www.espncricinfo.com" + $(AnchorTabMatchUrls[i]).attr("href");
        let revurl = reverse(matchscoreurl);
        let matchId = revurl.split("/")[1];
        matchId = matchId.split("-")[0];
        matchId = reverse(matchId);
        playerstats.push({
            "MatchUrl" : matchscoreurl,
            "MatchID" : matchId,
            "batsman1" : [],
            "bowler1" : [],
            "batsman2" : [],
            "bowler2" : []
        })
        request(matchscoreurl, fetchplayerstats.bind(this, i));
    }
}

function reverse(s){
    let rev = "";
    for(let i=s.length-1;i>=0;i--){
        rev += s.charAt(i);
    }
    return rev;
}


function fetchplayerstats(index,err,res,html){
    initialcount++;
    const $ = cheerio.load(html);
    const table = $(".Collapsible__contentInner .table");
    for(let i=0;i<table.length;i++){
        let rowsoftablebatsman = $(table).find('.batsman tbody>tr');
        for(let j=0;j<rowsoftablebatsman.length;j++){
            let columnofEachPlayerArr = $(rowsoftablebatsman[j]).find("td");
            let playerName = $(columnofEachPlayerArr[0]).text();
            let run = $(columnofEachPlayerArr[2]).text();
            let ball = $(columnofEachPlayerArr[3]).text();
            let fours = $(columnofEachPlayerArr[5]).text();
            let sixes = $(columnofEachPlayerArr[6]).text();
            let strikerate = $(columnofEachPlayerArr[7]).text();
            if(i==0 && columnofEachPlayerArr.length>1){
                playerstats[index].batsman1.push({
                    "Name" : playerName,
                    "Runs"  : run,
                    "balls" : ball,
                    "4's" : fours,
                    "6's" : sixes,
                    "SR" : strikerate
                }) 
            }
            if(i==2 && columnofEachPlayerArr.length>1){
                playerstats[index].batsman2.push({
                    "Name" : playerName,
                    "Runs"  : run,
                    "balls" : ball,
                    "4's" : fours,
                    "6's" : sixes,
                    "SR" : strikerate
                })
            }
        }
        let rowoftablebowler = $(table).find(".bowler tbody>tr");
        for(let j=0;j<rowoftablebowler.length;j++){
            let columnofEachPlayerArr = $(rowoftablebowler[j]).find("td");
            let playerName = $(columnofEachPlayerArr[0]).text();
            let over = $(columnofEachPlayerArr[1]).text();
            let maiden = $(columnofEachPlayerArr[2]).text();
            let run  = $(columnofEachPlayerArr[3]).text();
            let wicket = $(columnofEachPlayerArr[4]).text();
            let economy = $(columnofEachPlayerArr[5]).text();
            let zeroes = $(columnofEachPlayerArr[6]).text();
            let fours = $(columnofEachPlayerArr[7]).text();
            let sixes = $(columnofEachPlayerArr[8]).text();
            let wide = $(columnofEachPlayerArr[9]).text();
            let noball = $(columnofEachPlayerArr[10]).text();
            if(i==1 && columnofEachPlayerArr.length>1){
                playerstats[index].bowler1.push({
                    "Name" : playerName,
                    "O" : over,
                    "R" : run,
                    "W" : wicket,
                    "E" : economy,
                    "0's" : zeroes,
                    "4's" : fours,
                    "6's" : sixes,
                    "WD" : wide,
                    "NB" : noball
                })
            }
            if(i==3 && columnofEachPlayerArr.length>1){
                playerstats[index].bowler2.push({
                    "Name" : playerName,
                    "O" : over,
                    "R" : run,
                    "W" : wicket,
                    "E" : economy,
                    "0's" : zeroes,
                    "4's" : fours,
                    "6's" : sixes,
                    "WD" : wide,
                    "NB" : noball
                })
            }
        }
    }
    if(initialcount == totalcounts){
        fs.writeFileSync("obj.json",JSON.stringify(playerstats));
    }
}

