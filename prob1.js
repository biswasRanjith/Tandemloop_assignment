var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first value : ', function (x) {
   rl.question('Enter  second value : ', function (y) {
      rl.question('operation to perform : ', function(op)
    {
       
  var a = parseInt(x);
  var b = parseInt(y);
  var op = op;
  if(op=='+'){
        var sum = (a+b);
        console.log('\n');
       console.log('The value of ',a, ' and ',b, ' is ' , sum,'.');
 }else if(op =='-')
{
   var sum=(a-b);
   console.log('\n');
       console.log('The value of ',a, ' and ',b, ' is ' , sum,'.');

}else if(op =='*')
{
   var sum=(a*b);
   console.log('\n');
       console.log('The value of ',a, ' and ',b, ' is ' , sum,'.');

}else if(op=='/') {
var sum=(a/b);
console.log('\n');
       console.log('The value of ',a, ' and ',b, ' is ' , sum,'.');
}  else{
   console.log("options are +, *, /");
   
}
 rl.close();
        
    });
    });
});
