const request = require("request");
const cheerio = require("cheerio");


// coronavirus worldometer -> total active death cases taken
request('https://www.worldometers.info/coronavirus/', callback);

function callback(err,response,html){
    if(err){
        console.log('error',err);
    }
    else{
        extractHTML(html);
    }
}

function extractHTML(html){
    let selectorTool = cheerio.load(html);
    let statsArr = selectorTool('.maincounter-number');
    // console.log(statsArr.length);
    for(let i=0;i<statsArr.length;i++){
        let data = selectorTool(statsArr[i]).text();
        console.log(data);
    }
}


