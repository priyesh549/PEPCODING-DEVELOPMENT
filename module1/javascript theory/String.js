// let firstName = "Priyesh";
// let lastName = "Pandey";
// let age = 20;

// conactenation - 1
// console.log(firstName+" "+lastName);

// concatenation - 2
// let fullname = `${firstName} ${lastName}`;
// console.log(fullname);

// console.log(`my age is ${age}`);
// console.log("my age is "+age);

// dollar khta hai jo bhi curly braces mai hai usse javascript ka code man kar evaluate kar lo.


// --------------------------------------------


// Properties of String

// // length of string
// let str = "Priyesh Pandey";
// console.log(str.length);


// string method
// // substring method

// // 1. slice function - same as substring but it can take negative values
// console.log(str.slice(-13,6));

// // 2. substring function - cannot take negative values
// console.log(str.substring(2,6));

// // 3. substr - we pass here starting point and length. substr(Sp,len)
// console.log(str.substr(2,5));



// trim method - remove all the starting and ending space from str

// let str = "               Priyesh Pandey               ";
// console.log(str.trim());


// replace - particular set of characters or characters can be replaced with particular set of characters or characters.
// also replace works only for the first occurence character.

// let str="Priyesh Pandey";
// console.log(str.replace("Priyesh","Manish"));





// Uppercase and method case

// let str = "Priyesh Pandey";
// console.log(str.toUpperCase());

// let str = "PRIYESH PANDEY";
// console.log(str.toLowerCase());

// let str ="Priyesh Pandey";

// // console.log(str.charAt(1)); // returns character
// // console.log(str.charCodeAt(1)); // returns ascii value of char.


// console.log(str[1]);

// str[0] = "N"; // strings are mutable in javascript. hence no change
// console.log(str);


// convert a character from a to b. This function will be very useful to change string char. 
console.log(String.fromCharCode("aknskdnk".charCodeAt(7)+1)); 