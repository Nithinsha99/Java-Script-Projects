const needDate="27 july 2021";

const hoursText=document.getElementById("hours")
const daysText=document.getElementById("days")
const minutesText=document.getElementById("min")
const secondText=document.getElementById("seconds")
function getDatee(){
   const advanceData=new Date(needDate)-new Date();
   const totalseconda=Math.floor(advanceData/1000);
    const seconds=Math.floor(totalseconda%60);
    const minutes=Math.floor(totalseconda/60)%60;
    const hours=Math.floor(totalseconda/3600)%24;
    const day=Math.floor(totalseconda/3600/24)
    console.log(hours)
    

    hoursText.innerHTML=hours;
    daysText.innerHTML=day;
    secondText.innerHTML=seconds;
    minutesText.innerHTML=minutes;


}
getDatee();
setInterval(getDatee,1000)