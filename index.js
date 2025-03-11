const path = require('path');
const http = require('http');
const fs = require('fs');
const fsPromise = require('fs').promises;
// console.log(path);
// console.log(__dirname);
// console.log(__filename);
// console.log(path.basename(__dirname));
// console.log(path.basename(__filename));
// console.log(path.extname(__filename));

// console.log(path.join(__dirname,'project1','index.js'));



// console.log(http);

// console.log(fs);

//console.log(fsPromise);


//access predefine module

// import add from './math';
const math = require('./math');

// console.log(math.add(3, 5));
// console.log(math.sub(3, 5));
// console.log(math.multi(3, 5));
// console.log(math.div(3, 5));
// console.log(math.mod(3, 5));

const {add,sub,multi,div,mod} = require('./math');
console.log(add(4,5));
console.log(div(4,5));

