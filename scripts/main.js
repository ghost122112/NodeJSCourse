/*
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

*/

const timer = () => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    return document.getElementById("timer").innerHTML = time;
}

const interval = setInterval(timer, 1000);



const myObj = Object({
    firstname: "John",
    lastname: "Doe",
    age: 19
});

document.getElementById("obj_data").innerText = myObj["firstname"];
document.getElementById("obj_data").innerText = myObj["lastname"];















