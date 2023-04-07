function nextpermutation(arr,arr1) {
    let check = arr1
    var i = arr.length - 2;
    var j = 0;
    while (i >= 0 && arr[i] >= arr[i + 1])
        i--;
        if (i >= 0) {
            j = arr.length - 1;
            while (arr[j] <= arr[i])
                j--;
            swap(arr, i, j);
        }
        reverse(arr, i + 1, arr.length - 1);
        console.log(arr)
        for (let i = 0; i < arr1.length; i++)
            if (arr[i] !== arr1[i])
              return nextpermutation(arr,arr1)
        if(check == arr)
        return
    function swap(arr, i, j) {
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    function reverse(arr, i, j) {
        while (i < j) {
            swap(arr, i++, j--);
        }
    }
}
var arr = [1,2,3];
let arr1= [1,2,3]
nextpermutation(arr,arr1);
