function max_sub_array(arr){
    let max = arr[0]
    let min = arr[0]
    let result = arr[0]

    for(let i=1;i<arr.length;i++){

        let temp = arr[i]+max
        max = Math.max(temp,arr[i],min)
        min = Math.min(temp,arr[i],min)
        result = Math.max(result,max)
    }
    return result


}
let arr =  [-2,1,-3,4,-1,2,1,-5,4]
console.log(max_sub_array(arr))
