var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a value : ', function (x) {
    var result = [];
    var j=1;
    
if(x % 2 == 0 ){
 x= x-1;
}else {
    x=x;
}
    while(result.length < x){
        result.push(j);
        j=j+2;
       
    }
    console.log(result);
    rl.close();
});

