"use strict"; // strict mode 

const arr = ["1", "2", "3", "4", "5"];

for (let i in arr) {
    arr[i].length;
    i++;
    console.log(i);
}

for (let i = 0; i < arr.length; i++) { console.log(arr[i]) };

console.log(arr); // code result: [ '1', '2', '3', '4', '5' ]
console.dir(arr.length); // code result: 5
console.info(arr.indexOf("3")); // code result: 2


var http = require('http');
var formidable = require













