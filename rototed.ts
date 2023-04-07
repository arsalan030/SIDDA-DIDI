function rotated(arr,target){
    let high = arr.length-1
    let lo = 0
    let mid

    while(lo <= high){
        mid = Math.floor((high + lo)/2)
        if(arr[mid]== target) return arr[mid]
        else if(arr[lo] <= arr[mid] ){

            if(target >= arr[lo] && target <= arr[mid]){
                high = mid - 1
            }else
            lo = mid +1


        }else{
            if(target >= arr[mid] && target <= arr[high]){
                lo = mid -1
            }else
            high = mid +1

        }

        
    }
    return -1
}

let arr = [3,4,5,6,7,8,1,2]
let target = 4
console.log(rotated(arr,target))