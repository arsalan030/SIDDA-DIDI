function pair(arr,x){
    let n = arr.length
    let low = 0
    let high  = arr.length-1
    let a
    arr.sort()
    while(low <= high){

        mid = Math.floor((high + low) / 2);
        if(arr[mid] > arr[mid +1]){
            return  a  = arr[mid+1]
        }else if ( arr[mid]  < arr[mid-1]){
            return a = arr[mid]

        }
        else if(arr[low] <= arr[mid]){
            low = mid +1

        }else{
            high = mid -1
        }

    }
    for(let i = 0 ; i<arr.length; i++){

        if(arr[a-1] + arr[a] == x){
            console.log([arr[low],arr[high]])
        }else if (arr[a-1] + arr[a+1] > x){
             a--
        }else{
            a++
        }
}
}
    

let arr = [5,6,7,8,1,2,3]
let x = 6
console.log(pair(arr,x)) 


       