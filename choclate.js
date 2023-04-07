function cd(Arras, n, m) {
    var arr = Arras.sort(function (a, b) { return a - b; });
    var Ans = Infinity;
    for (var i = 0; i < n - m; i++) {
        var min = Arras[i];
        var max = Arras[i + n - m];
        var gap = max - min;
        if (gap < Ans) {
            Ans = gap;
        }
    }
    return Ans;
}
var Arras = [56, 3, 4, 7, 9, 9, 12, 1];
var n = Arras.length;
var m = 2;
console.log(cd(Arras, n, m));
