
const finalGrade=(midterm,final ,homework)=>{
 const average=(midterm+final+homework)/3;
 if ((midterm< 0 || midterm> 100)||(final< 0 || final > 100)|| (homework < 0 || homework >100)) {
   return 'You have entered an invalid grade.';
 } else if (average>= 0 && average<= 59){
   return 'F'
 } else if (average>= 60 && average<= 69){
   return 'D'
 } else if (average>= 70 && average<= 79){
   return 'C'
 } else if (average>= 80 && average<= 89){
   return 'B'
 } else if (average>= 90 && average<= 100){
   return 'A'
}}


console.log(finalGrade(99, 92, 95)) // print 'A'
