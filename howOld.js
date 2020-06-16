
const howOld=(age,year)=>{
  let currentDate = new Date();
  let theCurrentYear = currentDate.getFullYear();

  const yearDiffefence = year-theCurrentYear;
  const newAge = age + yearDiffefence;

  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge< 0) { 
    return `The year ${year} was ${Math.abs(newAge)} years before you were born`;
  } else if (newAge< age) {
    return `You were ${newAge} in the year ${year}`;
  }
};



console.log(howOld(26,2009));
//print >>You were 15 in the year 2009
