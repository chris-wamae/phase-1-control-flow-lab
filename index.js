function scuberGreetingForFeet(feet){
  if(feet <= 400)
  {return ("This one is on me!")}
  else if(feet > 2000 && feet < 2501)
  {return ('I will gladly take your thirty bucks.')}
  else if(feet >= 2501)
  {return(`No can do.`)}
}

//write your code here!

function ternaryCheckCity(city){
return city === "NYC" ? "Ok, sounds good." : "No go."

  // Write your code here!
}

function switchOnCharmFromTip(tip){
  switch(tip)
  {case "generous": return "Thank you so much.";
   break;
   case "not as generous": return "Thank you.";
   break;
   default: return "Bye."}
  // Write your code here!
}