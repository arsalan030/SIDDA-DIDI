class Pairs{
    mins: number
    maxx: number

    constructor() {
        this.mins  = NaN
        this.maxx = NaN
    }
    minmaxs(arr:Array<number>,n:Number){
    
    if (n===1) {
          this.mins = arr[0]
          this.maxx = arr[0]
        
    } 

    if (arr[0] >  arr[1]) {
        this.mins = arr[1]
        this.maxx = arr[0]
        
    }
    else {
        this.mins = arr[0]
        this.maxx= arr[1]}
    for (let i =2 ;i < arr.length;i++) {
            if (this.mins > arr[i]) {
                this.mins = arr[i]                
            } else if (this.maxx < arr[i]){this.maxx = arr[i]}
            
        }
 
    }

    }

let m = new Pairs();
let arr  = [1,2,3,4,5,6,7,8,9]
let n = arr.length
m.minmaxs(arr, n)
console.log(m.mins,m.maxx)


