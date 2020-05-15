function prog(arr) {
    var even = 0;
    var odd = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 0){
            even= even+1;
        }else{
            odd= odd+1;
            console.log(arr[i]);
        }
    }

console.log("even = " +even+ " odd = " +odd );

}

var arr1 = [2,7,5,64,14];
var arr2 = [12,14,95,3];

prog(arr1)
prog(arr2)