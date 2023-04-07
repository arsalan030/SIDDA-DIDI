function permutation(arr, empty, ans, check) {
    if (empty.length == arr.length) {
        ans.push(new Array(...empty) );
        return ans;
    }
    for (var i = 0; i < arr.length; i++) {
        if (!check[i]) {
            check[i] = true;
            empty.push(arr[i]);
            ans = permutation(arr, empty, ans, check);
            empty.pop();
             check[i] = false;
        }
    }
    return ans
}
var ans = [];
var empty = [];
var check = [];
var arr = [1, 2,3];
ans = permutation(arr, empty, ans, check);
console.log(ans)
