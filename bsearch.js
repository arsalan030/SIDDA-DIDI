function binary_search(arr, toFixed) {
    arr.sort(function (a, b) { return a - b; });
    var high = arr.length - 1;
    var low = 0;
    var mid;
    while (low <=high) {
        mid = Math.floor((high + low) / 2);
        if(arr[mid]==toFixed)return mid
        if (arr[mid] > toFixed) {
            high = mid - 1;
        }
        else
            low = mid + 1;
    }
    return -1
    
}
var arr = [2,-3,4,-5,6,-7];
var toFixed = 3;
console.log(binary_search(arr, toFixed))
