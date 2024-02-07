//Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

function bingo(ticket, win){
   if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
   {
     return "Winner!";
   }
   return "Loser!";
}
