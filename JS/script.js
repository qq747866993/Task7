function reverseThisString(string = ["Jie","Lian"]){
    console.log(string.reverse());
    }
    reverseThisString()
    
    function swapCase(string="JiELiAn",sec="hEllO") {
       console.log(string.toUpperCase());
       console.log(sec.toLowerCase())
      }
      
    swapCase()

    const array=[60,120,-40,44,100,200];
    const toCelcius= array.map(function(c){
        return `${c} celcius is ${(c-32)*5/9}`;
    })
     console.log(toCelcius);
     
     const grades= [60,90,70,50,100];
    passOrFail=grades.filter(function(grades){
        if(grades>=75){
            return true;
        }
        return false;
    });
    console.log(passOrFail);

    const numbers=[
        {GNumbers: 'zwei',cardinalNumbers: 2},
        {GNumbers: 'drei',cardinalNumbers: 3},
        {GNumbers: 'vier',cardinalNumbers: 4},
        {GNumbers: 'fünf',cardinalNumbers: 5},
        {GNumbers: 'sechs',cardinalNumbers: 6},
    ]
    const germanNumbers= numbers.map(function(numbers){
        return `${numbers.cardinalNumbers} is ${numbers.GNumbers}`
    });
    console.log(germanNumbers);

    const num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
     const returnPrimeNumbers=num.map(function(num){
         if(num%2==1){
        return `${num} is prime`
         }
     });
      
      
      console.log(returnPrimeNumbers);

      myarray=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,90,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100];
    
     
      const csc225Rules=myarray.map(function(myarray){
      
               if(myarray%3==0){
                  return 'CSC225 RULES';
              }
              else if(myarray%5==0){
              return 'I LOVE JAVASCRIPT' ;
              }
              else if(myarray%3==0&myarray%5==0){
                  return'CSC225 RULES I LOVE JAVASCRIPT';
              }
              else{
              return `${myarray}`;
              }
          })
  
   

console.log(csc225Rules);