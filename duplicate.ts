function duplicate(ar) {
    ar.sort(function(a,b){return a - b})
   for (var i = 0; i < ar.length-1; i++) {
       if (ar[i] === ar[i+1]) {
           return false;
       }
   }
   return true
}
console.log(duplicate([1, 2, 3, 4, 9,5,5, 6]));
