function sub_array(arr){   
    let min 
    let max
    if(arr.length == 1){
        return arr[0]
    }
    if(arr[0] >arr[1]){
        min = arr[1]
        max = arr[0]
    }else{
        min = arr[0]
        max = arr[1]
    }
    for(let i=2;i<=arr.length-1;i++){
        if(arr[i]<min){
            min = arr[i]

        }else if(arr[i]>max){
            max = arr[i]
        }
        
    }

    return[min,max]

}
let arr = [-2,1,-3,4,-1,2,1,-5,4]
console.log(sub_array(arr))
    
