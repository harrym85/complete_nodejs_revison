 const _ = require('lodash')


 // A.1.1 Loops I

 // var n = 1;
 // while (n < 1025) {
 //   console.log(n)
 //   n = n * 2
 // }


 // A.1.2 Loops II

 // let X = 0;
 // for (k = 1; k < 5; k++){
 //   X = X + k
 //     for (l = 1; l < 6; l++){
 //      if(l > k){
 //       X = X + l
 //      }
 //     }
 // }
 // console.log(`The value of variable X after this code executes is`,X);


 // A.1.3 Functions

 // const  doSomething = (x) => {
 //     if (x === 0) return 1; // base 
 //     console.log("do",doSomething(x - 1))
 //     return x * doSomething(x - 1);// recursion 
 //   }
 // console.log(`when we call doSomething(5) it then returns `,doSomething(5))

 //This is a recursive function which does the following the base case  stops the recursion and  the recursion is when the function calls itself 


 //A.1.4 Recursion 

 // result = 1 
 // const  doSomething1 = (x) => {
 //         while(x > 1 ){
 //             result *= x--
 //         }
 //         return result
 //       }
 // console.log(doSomething1(5))



 //A.1.5 Loops III

 // months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
 // variable_1 = 1
 // variable_2 = 1
 // months.forEach(function(month, index) {
 //     variable_sum = variable_1 + variable_2
 //     console.log(`variable sum is ${variable_sum}`)
 //     variable_1 = variable_2
 //     variable_2 = variable_sum
 // });


 //A.1.6 Loops IV

 variable_1 = "Hello"
 variable_2 = "World"

 variable_array = [variable_1, variable_2]

 _.forEachRight(variable_array, function(entry, index) {
     console.log(index)
     variable_entry = entry
     console.log(variable_entry)
 });
 //