let createRightPyramid = (input) => {
  
   for(let i = 1; i <= input; i++){
     let buffer = '';

        //seperate space
          for(let k = 1; k <= input - i; k++){
          buffer += ' ';
             }
               for(let j = 1; j <= i; j++){
                buffer += '*';
                       }
     //Print the value within for loop
     console.log(buffer);
                                 }
}
//create pyramid with input value of 4
createRightPyramid(4);
