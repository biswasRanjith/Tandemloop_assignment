var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter a value : ', function (x) {
    var totalNumberofRows = x;
    var output = '';
   
    for (var i = 1; i <= totalNumberofRows; i++) {
        if( i % 2 == 0 ){
         for (var j = i; j > 0; j--) {
            output += j + '*';
            }
        }else{
        for (var j = 1; j <= i; j++) {
        output += j + '*';  
        }
    }
        console.log(output.slice(0, -1));
        output = '';
    }
    rl.close();
});
