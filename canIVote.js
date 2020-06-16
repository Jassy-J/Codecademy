

const canIVote = (age)=>{ 
  if (age >= 18){
    return true;
  } else if (age < 18){
    return false;
  }
};

console.log(canIVote(19));
console.log(canIVote(18));
console.log(canIVote(5));
