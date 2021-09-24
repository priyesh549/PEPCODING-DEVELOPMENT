const cheerio = require("cheerio");
const request = require("request");
const fs = require("fs");

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score';

request(url,requestCallback);

function requestCallback(err,res,html){
    const $ = cheerio.load(html);
    console.log($($(".playerofthematch-name")[0]).text()); // we have to use two wrappers here one for complete array other for $.
}
