function quicksort(arr,left,right){
    if(left<right){
    // to get pivot index
    let pivot_index = partition(arr,left,right)

    // recursively call left recursion
    quicksort(arr,left,pivot_index-1)
    // recursively call right recursion
    quicksort(arr,pivot_index+1,right)
    }
}
function partition(arr,left ,right){
     let pivot_value = arr[right]
     let i = left-1
     for(let j = left; j<right; j++){
        if(arr[j]<=pivot_value){
        i++
        [arr[j],arr[i]]=[arr[i],arr[j]];
        }

      }
    [arr[right],arr[i+1]] = [arr[i+1],arr[right]];
    return i+1
     
   
}
arr = [1,3,5,7,4,6,8]
right = arr.length-1
quicksort(arr,0,right)
console.log(arr)