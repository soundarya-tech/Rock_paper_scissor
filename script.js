
 var play=confirm("shall we play rock,paper or scissor game?");
if (play){
  var pchoice=prompt("enter rock,paper,scissor");
  
  if(pchoice)
    {
    var playerOne=pchoice.trim().toLowerCase();
    if(
      playerOne==="rock"
      ||playerOne==="paper"
      ||playerOne==="scissor")
       {
        var cchoice=Math.floor(Math.random() * 3 + 1);
        var computer=
        cchoice===1
         ? "rock"
         :cchoice===2 
         ?"paper"
         :"scissor";
      var result=
       playerOne===computer
       ?"Tie game!!!"
      :playerOne==="rock" && computer==="paper"
      ? `playerOne: ${playerOne}\ncomputer: ${computer}
      \n computer wins`
      :playerOne==="paper" && computer==="scissor"
      ?`playerone:${playerOne}\n ${computer}
      \n computer win`
      :playerOne==="scissor" && computer==="rock"
      ?`playerone:${playerOne} \n computer:${computer}
      \n computer win`
      :`playerone:${playerOne} \n computer:${computer}
      \n computer win`;
      alert(result);
      var playAgain=confirm("play Again");
      playAgain ? location.reload(): alert("ok, thanks for playing");
      }
       else
       {
      alert("you didn't enter the value");
       }
      } else{
         alert("I guess you change your mind");
       }
  }
  else{
    alert("may be next time");
  }