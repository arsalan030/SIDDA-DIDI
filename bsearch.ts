function binary_search(arr,toFixed){
    arr.sort(function(a,b){return a - b})
let high = arr[arr.length-1]
let low = arr[0]
let mid 
 while (high - low < 1) {
     mid = Math.floor((high + low)/2)
    if(mid[arr] < toFixed ){
        high = mid - 1
    }else
    low = mid + 1
}
if(low[arr] == toFixed ){
    return(console.log(low[arr]))
}
else if(high[arr]== toFixed){
    return (console.log(high[arr]))
}
 
}
let arr = [1,3,5,7,9,6,5,3,2]
let toFixed = 5
binary_search(arr,toFixed)
