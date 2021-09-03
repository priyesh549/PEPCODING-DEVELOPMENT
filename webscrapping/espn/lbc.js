const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary';

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
    let selectorTools = cheerio.load(html)
    let commentaryArr = selectorTools('.match-comment-wrapper .match-comment-long-text');
    let lastballcommentary = selectorTools(commentaryArr[0]).text();
    // we can also get html by using let lastballcommentary = selectorTools(commentaryArr[0]).html();
    console.log(lastballcommentary);
}

// cheerio drawback data kam load hta hai
