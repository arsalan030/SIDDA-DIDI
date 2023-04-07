function cd(Arras,n:number,m){
    let arr = Arras.sort(function(a,b){return a-b})
    let Ans : Number = Infinity  
    for(let i = 0; i<n-m;i++){
        let min = Arras[i]
        let max = Arras[i+n-m]
        let gap = max - min
        if(gap < Ans){
            Ans = gap

        }
 
    }
    return Ans
    
}

let Arras = [56,3,4,7,9,9,12,1]
let n= Arras.length
let m =2

console.log(cd(Arras,n,m))