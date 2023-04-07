function reversed_array(arr) {
    var end = arr.length - 1, start = 0;
    while (start < end) {
        var temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}
var arr = [1, 2, 3, 4, 5, 6];
reversed_array(arr);
console.log(arr);
