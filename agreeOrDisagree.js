const agreeOrDisagree=(stringA="",stringB="")=>{
 if (stringA===stringB){
  return 'You agree!';
 } else {
   return 'You disagree!';
 }
}

 console.log(agreeOrDisagree("yep", "yep")); 
