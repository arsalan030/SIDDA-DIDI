function sufix_perfix(arr){
    let n =  arr.length
    let  prefix = new Array(n)
    prefix.fill(1)
    let temp = 1
    for(let i = 0; i < n ; i++){
        prefix[i] *= temp
        temp*= arr[i]
    }
    
    temp = 1
    for(let i = n-1; i >= 0; i--){
        prefix[i] *=temp
        temp *= arr[i]
       
    }
    return prefix

    
}
let arr = [1,2,3,4]
console.log(sufix_perfix(arr))