





     function calculator(){ 
        let wd = document.querySelector("#wd"). value ; 
        let maths = document.querySelector("#maths"). value ; 
        let pysics = document.querySelector("#pysics"). value ; 
       let design = document.querySelector("#design"). value ; 
        let result = parseFloat(wd) + parseFloat(maths) + parseFloat(pysics) + parseFloat(design); 
       let grade = "";
        alert(result); 
        let perc = (result/400) *100; 
       alert(perc);
         
      if ( perc<=100 && perc>=80) {
         grade = "A"
         }else if( perc <=79 && perc>=60){ 
             grade = "A-"

        }else if( perc <=59 && perc>=40){ 
              grade = 'B'

       }
        
        
        
        
         else {
            grade = "f";
        }
          if (perc>39.5) {
          document.querySelector(".showData").innerHTML = `out of 400 total is ${result} and percentage is ${perc}%. <br> 
           and your Grad is ${grade} you are pass the exam`
    
         } else {
           document.querySelector(".showData").innerHTML = `out of 400 total is ${result} and percentage is ${perc}%. <br> 
           and your Grad is ${grade} you are fail`
    
      }
      
       }    
 

