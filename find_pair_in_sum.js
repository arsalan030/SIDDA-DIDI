function pair_sum(arr,sums){
    arr.sort(function(a,b){return(a-b)})
    let l =0
    let r = arr.length-1

    while(l<r){
        if(arr[l]+arr[r]== sums){
             return arr[l]+arr[r]
            
        }
        if(arr[l]+arr[r] > sums){
            r--
        }else{
            l++

        }

    }
    return false


}

let arr = [11, 15, 26, 38, 9, 10]

let sums = 45
console.log(pair_sum(arr,sums))
