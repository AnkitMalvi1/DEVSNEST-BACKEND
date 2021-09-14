///////////////-------------------------------------- THA  DAY - 6   ------------------------------------------------///////////////
//////////////------------------------ EVENT LOOP  &  ASYNC PROGRAMMING ---------------------------------////////////////


//--------------- Event Loop ---------------------//

// ---------- How JavaScript Works--------------//


//-------Tell me JavaScript what are you ? -----//

// A Single-threaded
// Non-blocking
// Asynchronous
// Concurrent
// Language

// I have a 
// Call Stack
// An Event Loop  
// A Callback Queue
// Some Other APIs
// And Stuff

// Hey V8, Do you have a 
// Call Stack
// An Event Loop  
// A Callback Queue
// Some Other APIs
// And Stuff

//  I have a 
// Call Stack
// And a Heap Only !

// JS 
// > Heap -> Memory Allocation
// > Stack -> Execution Context

// The Call Stack
// -> One thread == One Call Stack == One Thing at a Time


//------------------------- Call Stack -------------------------------//

function multiply(a, b) {
    return a * b;
}

function square(a) {
    return multiply(a, a);
}

function printSquare(n) {
    var squared = square(n);
    console.log(squared);
}

printSquare(4);

// Stack ->   < main() < printSquare(4) < square(a) < multiply(a,b)      [ LIFO ]


function foo() {
    return foo();
}
foo();

// If we Call the Above Code then We will get the Error.. Like This..
// Range Error: Maximum call stack size exceeded
// because of.. Infinite Loop.


// Blocking
// what happens when things are slow ? 

var foo = $.getsync('//foo.com');
var bar = $.getsync('//bar.com');
var qux = $.getsync('//qux.com');

console.log(foo);
console.log(bar);
console.log(qux);


//------------------------ Event Loop ------------ Loupe -----------------------------//

$.on('button', 'click', function onClick() {
    setTimeout(function timer() {
        console.log('You clicked the button!');
    }, 2000);
});

console.log("Hi!");

setTimeout(function timeout() {
    console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");


// Event Listeners are also Web APIs.


//  Go the Website..  Write > Event Loop
//  Loupe > http://latentflip.com

//-------------------------- CRUD ASYNCHRONOUSLY -------------------------------------//
// ------------------------------- THA - 6 --------------------------------------------//


//File Create Read Update Delete Asynchronously 
const fs = require("fs");
const mini = require('minimist');
const opts = mini(process.argv.slice(2));
console.log(opts);

if(opts.dirname){ //make directory
fs.mkdir(opts.dirname,(err)=>{
    console.log("Dir Is already Present");
});
}

if(opts.fname && opts.write){ //write to file 
fs.writeFile(opts.dirname+"/"+opts.fname,opts.write,(err)=>{
    console.log("File not present");
});
}
if(opts.fname && opts.append ){ //append to file
fs.appendFile(opts.dirname+"/"+opts.fname,"\n"+opts.append,(err)=>{
    console.log("Cannot append File");
});
}
if(opts.fname && opts.read ){ // read from file
fs.readFile(opts.dirname+"/"+opts.fname,"utf-8",(err,data)=>{
    console.log(data);
    if(err)console.log("Unable to read File ");
});
}
if(opts.fname && opts.del){ //delete the file and directory
fs.unlink(opts.dirname+"/"+opts.fname,(err)=>{
    console.log("Unable to Unlink File")
});
fs.rmdir(opts.dirname,(err)=>{
    console.log("Unable to remove Dir");
});
}
// ************* To Execute this file use below commands ***************************
// >npm install --save minimist
// >node CRUD_CLI.js --dirname THA5
// >node CRUD_CLI.js --dirname THA5 --fname hello.txt --write "Sample text"
// >node CRUD_CLI.js --dirname THA5 --fname hello.txt --append "mytext"
// >node CRUD_CLI.js --dirname THA5 --fname hello.txt -read 
// >node CRUD_CLI.js --dirname THA5 --fname hello.txt -del 
