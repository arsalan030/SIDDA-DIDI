var threeSum = function (a) {
    let n = a.length;

    a.sort((a, b) => a - b);

    let aa = [];
    for (let i = 0; i < n; i++) {
        if (i > 0 && a[i - 1] === a[i]) continue;

        let t = -a[i]; // target;
        for (let L = i + 1, R = n - 1; L < R; ) {
            if (L > i + 1 && a[L - 1] === a[L]) {
                L++;
                continue;
            }

            let sum = a[L] + a[R];
            if (sum === t) {
                aa.push([a[i], a[L], a[R]]);
                L++;
            } else if (sum < t) {
                L++;
            } else {
                R--;
            }
        }
    }
    return aa;
};
let a = [-1,0,1,2,-1,-4]
console.log(threeSum(a))
