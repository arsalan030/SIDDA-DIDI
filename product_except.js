function product_except_self(arr){
    let ans = []
    for(let i= 0 ;i<arr.length; i++){
        let pro = 1
        for(let j =0 ; j< arr.length ; j++){
            if(i==j){
                continue;
            }
            pro *= arr[j]
        }
        ans[i]=pro

    }return ans


}

let arr = [1,2,3,4,5]
console.log(product_except_self(arr))
/* sure the time complexity of the program is O(n)2
the interviewer wants to improve the  time complexity 
The Time Complexity of this approach would be O(n). */
