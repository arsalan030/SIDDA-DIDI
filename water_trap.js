function water_trapping(arr){
    let n = arr.length
    let  left = new Array(n)
    let right = new Array(n)
    left[0] = arr[0];
    right[n-1] = arr[n-1]
    for(let i = n-2,j=1; i >=0; i--,j++){
        right[i] = Math.max(right[i+1],arr[i])
        left[j] = Math.max(left[j-1],arr[j])
    }
    let ans = 0
    for(let  i = 0; i < arr.length;i++){
        ans+= Math.min(left[i],right[i]) - arr[i]
    }
    return ans


}
let arr = [0,1,0,2,1,0,1,3,2,1]
console.log(water_trapping(arr))
