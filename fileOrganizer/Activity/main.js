let helpObj = require('./commands/helps');
let treeObj = require('./commands/tree');
let organizeObj = require('./commands/organize');
let inputArr = process.argv.slice(2);
let command = inputArr[0];
let path = inputArr[1];

// we will use switch here rather than if-else because it is more optimized.

switch(command){
    case "help":
        helpObj.helpFn();
        break;
    case "tree":
        treeObj.treeFn(path,"");
        break;
    case "organize":
        organizeObj.organizeFn(path);
        break;
    default:
        console.log("Invalid command");
        break;
}


