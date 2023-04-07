function next_permutation(arr){
    let i = arr.length -2
    while(i >=0 && arr[i]>= arr[i+1])i--
    {if(i>=0){
        let j =arr.length -1
        while(arr[j] <=arr[i])j--
        {
            swap(arr,i,j)

        }
    }

    reverse(arr,i+1,arr.length-1)
    
    }
    function swap(arr,i,j){
        let temp = arr[i]
        arr[i]= arr[j]
        arr[j] = temp
    }
    function reverse(arr,i ,j){
        while(i<j){
        swap(arr,i++,j--)
        }
    }
    return arr
    
    
}

let arr = [3,2,1]
console.log(next_permutation(arr))