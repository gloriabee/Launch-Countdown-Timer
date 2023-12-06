let countdown=()=>{
    let date=new Date("January 1, 2024 00:00:00").getTime();
    let now=new Date().getTime();
   let difference=date-now;
   let seconds=1000;
   let minutes=seconds*60;
   let hours=minutes*60;
   let days=hours*24;

   let timeDays=Math.floor(difference/days);
   let timeHours=Math.floor((difference % days)/hours);
   let timeMins=Math.floor((difference % hours) / minutes);
   let timeSeconds=Math.floor((difference % minutes) / seconds);
   
   timeHours=timeHours<10 ? "0"+timeHours:timeHours;
   timeMins=timeMins<10 ? "0"+timeMins:timeMins;
   timeSeconds=timeSeconds<10 ? "0"+timeSeconds:timeSeconds;



    document.getElementById("day").innerHTML=timeDays;
    document.getElementById("hour").innerHTML=timeHours;
    document.getElementById("min").innerHTML=timeMins;
    document.getElementById("sec").innerHTML=timeSeconds;

    
}

setInterval(countdown,1000)