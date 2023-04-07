function missing(arr) {
    let a
    let b
    var index ;
    for (i = 0; i < arr.length; i++) {
        var index = Math.abs(arr[i])-1;
    
        if (arr[index] > 0) {
            arr[index]  = arr[index] * -1
            
        }else  a =Math.abs( arr[index])
            
            
            
    }
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > 0) {
             b = i + 1;
            break;
        }
    }
    return console.log(a,b)
}
var arr = [1,2,4,5,2];
missing(arr)
