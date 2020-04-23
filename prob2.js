var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a value : ', function (x) {
    var result = [];
    var j=1;
    while(result.length < x){
        result.push(j);
        j=j+2;
       
    }
    console.log(result);
    rl.close();
});

