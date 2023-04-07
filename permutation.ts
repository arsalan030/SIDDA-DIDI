function nextpermutation(arr){
let i = arr.length -2
let j = 0
while(i >= 0 && arr[i]> arr[i+1])i--;{
    if(i > 0){
        j = arr.length -1
        while(arr[j]<= arr[i] )j--;
        swap(arr,i,j)

        
    }
    reverse(arr,i+1,arr.length-1)

}

function swap(arr,i,j){
    let temp  = arr[i];
    arr[i]= arr[j];
    arr[j] = temp ;

}function reverse(arr,i ,j){
    while (i < j){
        swap(arr ,i++ , j--)

    }
}
}
let arr = [1,2,3]
nextpermutation(arr)
console.log(arr)