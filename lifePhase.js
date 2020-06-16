// if statement

const lifePhase=(age)=>{
  if(age>=0 &&age<= 3) {
    return 'baby';
  } else if (4<= age && age<= 12) {
   return 'child'; 
  } else if (13<= age && age<= 19) {
   return 'teen';
  } else if (20<= age && age <= 64) { 
   return 'adult';
  } else if (65<= age && age<= 140) {
   return 'senior citizen'; 
  } else if (0> age || age >=140) {
   return 'This is not a valid age';
  }
}


console.log(lifePhase(15))
//print teen

// switch statement

const lifePhase=(age)=>{
  switch(true){
   case age >= 0 && age<= 3:
   return 'baby';
   case 4<= age && age<= 12:
   return 'child';
   case 13<= age && age<= 19:
   return 'teen';
   case 20<= age && age <= 64:
   return 'adult';
   case 65<= age && age<= 140:
   return 'senior citizen';
   case 0> age || age >=140:
   return 'This is not a valid age';
  };
}

console.log(lifePhase(18))
