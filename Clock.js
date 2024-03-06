var Days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
var Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

function updateTime(){
    var d = new Date();
    let Hours = d.getHours();
    let Mins = d.getMinutes(); 

    if (Mins < 10){
        Mins = String("0"+Mins);
    }

    let Time = String(Hours)+":"+String(Mins);

    let FullDate = String(Days[d.getDay()-1]+", "+d.getDate()+" "+Months[d.getMonth()]);

    let clockTime = document.getElementById("clock-time");
    let miniClock = document.getElementById("mini-clock");
    clockTime.innerText = Time;
    miniClock.innerText = Time;

    let ClockDate = document.getElementById("clock-date");
    ClockDate.innerText = FullDate;
}

updateTime()

var intervalId = window.setInterval(function(){
    updateTime()

}, 2000);