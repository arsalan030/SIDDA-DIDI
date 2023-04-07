function sub_array(arr){
    let result = arr[0]
    let max = arr[0]
    let min = arr[0]

    for(let i = 1; i<arr.length; i ++){

        let temp1 = arr[i]*max
            max = Math.max(temp1,arr[i]*min,arr[i])
            min = Math.min(temp1,arr[i]*min,arr[i])
            result = Math.max(result,max)
    }
    return result

   
}
var arr = [-1,-2,-9,-6];
console.log(sub_array(arr))
    
