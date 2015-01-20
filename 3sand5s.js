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
