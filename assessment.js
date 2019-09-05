// A.1.1 Loops I

// var n = 1;
// while (n < 1025) {
//   console.log(n)
//   n = n * 2
// }


// A.1.2 Loops I
let x = 0;
for (k = 1; k < 5; k++){
  x  = x + k
    for (l = 1; l < 6; l++){
     if(l > k){
       x = x + l
     }
    }
}
console.log(x);


