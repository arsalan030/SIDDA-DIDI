function missing(arr){
    let a = 0
    let b = 0

    for(let i = 0 ;i < arr.lenght ; i ++){
        let abs_value = Math.abs(arr[i])

        if(arr[abs_value[i] ] > 0){
            arr[abs_value] * -1
        } else a = abs_value[i]


    }
    for(let i = 0 ; i < arr.lenght ; i ++){
        if(arr[i] > 0){
            b = i +1
            break
        }
        
    }
    return [a,b]


}
let arr = [1,2,3,5]
console.log(missing(arr))