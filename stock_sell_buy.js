function best(prices){
    let n = prices.length 
    let left = 0
    let right =1
    let profit
    let max_profit = 0 
    while (right < n){
        profit = prices[right] - prices[left]
        if(prices[left] < prices[right]){
            max_profit= Math.max(profit,max_profit)
        } else{
            left = right
    
        }
        right +=1
        
        
        
    
            
    }
    return max_profit
    
    }
    
    
    let prices = [7,1,5,3,6,4]
    
    console.log(best(prices))
    
    
    
