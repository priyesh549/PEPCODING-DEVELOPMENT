// let person = {
//     name : "Priyesh",
//     age : "21",
//     mobile : "7834965746",
//     0 : "hello"
// };

// console.log(person);
// console.log(person["name"]);
// console.log(person["age"]);
// console.log(person["mobile"]);
// console.log(person[0]);

// console.log(person.name);
// console.log(person.age);
// console.log(person.mobile);
// console.log(person.0); this wont work for numeric keys


// array as object

// let arr = [1,2,3,4];
// let obj = {
//     0:1,
//     1:2,
//     2:3,
//     3:4
// };

// console.log(arr[0]);
// console.log(obj[0]);


// add something in object
// let person = {
//     name : "Priyesh",
//     age : "21",
//     mobile : "7834965746",
//     0 : "hello"
// };

// person["company"] = "pepcoding";
// person.gender = "male";

// console.log(person);



// very important
// let arr = [1,2,3,4];
// arr["name"] = "priyesh";
// console.log(arr);
// console.log(arr.length);


// // nested object
// let obj = {
//     obj2 : {
//         hello : "1"
//     }
// }

// console.log(obj.obj2.hello);



// method calling using object
// let obj = {
//     hello : function(){
//         console.log("hello")
//     }
// }

// obj.hello();



// let obj = {
//     1 : "hello1",
//     2 : "hello2"
// }

// console.log(Object.keys(obj));
// console.log(Object.values(obj));



// ---------------------------traversing an object-------------------------
// let obj = {
//     1 : "hello1",
//     2 : "hello2"
// }

// // Using in loop
// for(let key in obj){
//     console.log(obj[key]);
// }


// // normal loop
// // note -> Object.keys(obj_name) - represent an array of keys.
// for(let i=0;i<Object.keys(obj).length;i++){
//     console.log(obj[Object.keys(obj)[i]])
// }


// print all the keys of the nested object.

let person = {
    Neha : {
        batch : "pp13",
        skill : "competitive programmer"
    },
    priyesh : {
        batch : "pp14",
        skill : "java",
        details : {
            age : "24"
        }
    }
}

// this is for 2 level nested object.
// for(let key in person){
//     console.log(key);
//     if(typeof(person[key] == "Object")){
//         for(let key2 in person[key]){
//             console.log(key2);
//         }
//     }
// }


// genralized recuyrsive code
// function printKeys(obj){
//     for(let key in obj){
//         console.log(key);
//         if(typeof(obj[key])=="object"){
//             printKeys(obj[key]);
//         }
//     }
// }
// printKeys(person);


// deep copy of an object
// let newobj = {};

// function deepcopy(obj){
//     for(let key in obj){
//         if(typeof(obj[key]) == "object"){
//             let temp = obj[key];
//             newobj[key] = {key};
//             deepcopy(temp);
//         }
//         else{
//             newobj[key] = obj[key];
//         }
//     }
// }
// deepcopy(person);
// // newobj["hhsh"] = "hdhdh";
// console.log(newobj);
// console.log(person);





// Convert a nested object into array or flatten object
let obj = {
    obj1 : {
        "obj1.1" : "hello1.1"
    },
    obj2 : {
        "obj2.1" : "hello2.1",
        "obj2.2" : {
            "obj2.2.1" : "hello2.2.1"
        }
    }
};

let ans = [];
function flatten(object){
    for(let i in object){
        let innerans = "["+i;
        ans.push(innerans);
        if(typeof(object[i]) == "object"){
            flatten(object[i]);
        }
        else{
            innerans = object[i]+"]";
            ans.push(innerans);
            ans.push("]");
        }
    }
}
flatten(obj);
console.log(ans);