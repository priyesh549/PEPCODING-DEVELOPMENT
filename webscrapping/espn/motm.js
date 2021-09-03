const request = require("request");
const cheerio = require("cheerio");

// man of the match 
const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score';

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
    let statsArr = selectorTools('.playerofthematch-name');
    let data = selectorTools(statsArr[0]).text();
    console.log(data);
}