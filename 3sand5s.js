/* A simple solution to the problem using two seperate for loops and 
 * a seperate variable which holds a running total then add the two results together*/


var threesTotal = 0;

for ( i=0; i < 1000; i++){
     if( i % 3 === 0){
         threesTotal = i += i;
     }
}

console.log(threesTotal);

var fivesTotal = 0;

for ( i=0; i < 1000; i++){
     if( i % 5 === 0){
         fivesTotal = i += i;
     }
}

console.log(fivesTotal);
console.log(threesTotal+fivesTotal);

/*Single function that combines both*/


var combined = function (number){
    var fullTotal = 0;
    for ( i=0; i < number; i++){
       if( i % 3 === 0){
         fullTotal += i;
     }
     if( i % 5 === 0){
         fullTotal += i;
     }
        
    }
   console.log(fullTotal);  
    
};

combined(10);


/* Simple function version iterating upward in 3's and 5's*/
var threes = function (number){
    var threesTotal = 0;
    for ( i=0; i < number; i+=3){
        threesTotal += i;
        
    }
   console.log(threesTotal);  
    
};

threes(10);

