function water_trapping(arr){
    let left = 0,max_right= 0,max_left = 0,right =  arr.length-1,water_trap = 0
    while(left < right){
        if(arr[left] < arr[right]){
            if(max_left > arr[left]){
                water_trap += max_left-arr[left] }
            else{
            max_left = arr[left];
            }
            left ++
        }else{
            if(max_right > arr[right]){
                water_trap += max_right - arr[right]}
            else
            {max_right = arr[right];

            }
            right--

        }
    }
    return water_trap

}
let arr = [4,2,0,3,2,5]
console .log(water_trapping(arr))
