function prog(x, y) {
    var a = '';
    var b = '';
    for (var i = 1500; i <= 2700; i++) {
        if ( i % 7 == 0 ){
            a += i + ',';
        }
        var x = i*5;
        b += x + ',';
    }  
    console.log("numbers divisible by 7 are :")
    console.log(a.slice(0, -1));
    console.log("numbers multiple of 5 are :")
    console.log(b.slice(0, -1));
}

prog();
 