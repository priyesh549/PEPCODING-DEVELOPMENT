
//  Creating a function
// //  method - 1

// function add(a,b){
//     return parseInt(a)+parseInt(b);
// }
// console.log(add(1,2));



// method-2
// let add = function(a,b){
//     return parseInt(a)+parseInt(b);
// }

// console.log(add(1,2));


// // method-3
// let add = (a,b) => {
//     return parseInt(a)+parseInt(b);
// }

// console.log(add(1,3));


// ---------------------------------------------------
// concept of js validation ch+integer will never become a number.

// function add(a,b){
//     if(isNaN(a) || isNaN(b)){
//         return "Invalid arguments";
//     }
//     return parseInt(a)+parseInt(b);
// }

// console.log(add(1,5));


// difference between Method - 1 and Method - 2 functions.

// M-1 function high priority hai toh compilation time par they will move to top.
// print();
// function print(){
//     console.log("hello");
// }




// M-2 is not high priority because of let . Hence , they are executed in same order 
// error - print before initilization.
// print()
// let print = function print(){
//     console.log("hello");
// }



