function sub(a) {
    var currentsum = 0;
    var maxsum = 0;
    for (var i = 0; i < a.length; i++) {
        currentsum += a[i];
        maxsum = currentsum;
        if (maxsum > currentsum) {
            currentsum = maxsum;
        }
        if (maxsum < 0) {
            currentsum = 0;
        }
    }
    return maxsum;
}
console.log(sub([1, 2,3,4]));
