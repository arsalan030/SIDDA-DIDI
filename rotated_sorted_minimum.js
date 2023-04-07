function minimum_in_rotated(arr){
    let  high = arr.length -1
    let low = 0 
    let mid

    if(arr[low]<= arr[high]){
        return arr[low]
    }
    while(low <= high){
        mid = Math.floor((high + low) / 2);
        if(arr[mid] > arr[mid +1]){
            return arr[mid+1]
        }else if ( arr[mid]  < arr[mid-1]){
            return arr[mid]

        }
        else if(arr[low] <= arr[mid]){
            low = mid +1

        }else{
            high = mid -1
        }
        
    }
    return -1
    
}
arr = [4,5,6,7,0,1,2]
console.log(minimum_in_rotated(arr))