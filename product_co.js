function product_without_self(arr){
    let n =  arr.length
    let  prefix = new Array(n)
    let suffix = Array.of()
    let ans = []
    let temp = 1
    for(let i = 0; i < n ; i++){
        prefix[i] = temp*arr[i]
        temp*= prefix[i]
    }
    temp = 1
    for(let i = n-1; i >= 0; i--){
        suffix[i] = temp * arr[i]
        temp = suffix[i]

    }
    ans[0]=suffix[0]
    ans[n-1] = prefix[n-2]


    for(let i=1; i<=n-2;i++){
        ans[i] = prefix[i-1]*suffix[i+1]
    }
    return ans

    
  
}

let arr = [1,2,3,4]
console.log(product_without_self(arr))