const n=prompt("enter max no");

const c=Math.floor(Math.random()*n)+1;


let guess;
while(true){
      guess=prompt("guess the number");

      
if(guess==c){
  
    console.log("CONGRATS GUESSED IT RIGHT!");
    break;
}
else if(guess=="quit"){
    break;
}
else if(guess<c){
    console.log("the number guessed is small.Try again!");
 prompt("BETTER try it again");
}

 


else{console.log("the number guessed is large.Try again!");
     prompt("BETTER try it again");
}


}
