var num = 1;
while(num < 150){
   var printOut = function(){
      if(num % 3==0 && num % 7==0){
      return console.log(num);
    }
   };
   console.log(printOut);
}


