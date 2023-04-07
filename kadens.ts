function sub(a){
    let currentsum = 0 
    let maxsum = 0
    for(let i=0; i < a.length ;i++){
        currentsum += a[i]
        maxsum = currentsum
        
        if (maxsum > currentsum){
            currentsum = maxsum
    
        }

        if (maxsum < 0){
            currentsum = 0

        }

    }
    return maxsum
    


}


console.log(sub([1,2,-1,4,5,-3,7,-2]))

