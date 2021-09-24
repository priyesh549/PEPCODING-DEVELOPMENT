const cheerio = require("cheerio");
const request = require("request");

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score';

request(url,requestCallback);

function requestCallback(err,res,html){
    const $ = cheerio.load(html);
    let losingteam = $('.team-gray .name-link p').text();
    let bothteamsObject = $('.name-link p');
    let bothteamsScoreObject = $('.match-info.match-info-MATCH.match-info-MATCH-half-width .score')
    let winningteams = $(bothteamsObject[1]).text() == losingteam ? [$(bothteamsObject[0]).text(),$(bothteamsScoreObject[0]).text()] : [$(bothteamsObject[1]).text(),$(bothteamsScoreObject[1]).text()];
    let bothTeams = [$(bothteamsObject[0]).text(),$(bothteamsObject[1]).text()];
    console.log(winningteams);
}
