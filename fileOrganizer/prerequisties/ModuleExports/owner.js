let str = "hello everyone";
let a = 10;

function foo(msg){
    return 'Hi i am made in owner.js '+msg;
}

// this will also run when imported file will be called.
console.log('hi priyesh');


// best method to export by pairing like hashmap so it's for user to import it.
module.exports= {
    var:a,
    string:str,
    fooFcn:foo
};