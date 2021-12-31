const clock = document.querySelector(".js-clock");
const clockTitle = document.querySelector("h1");


// 시간을 받아서 h1 의 innerText에 업데이트 
function getClock(){
    const date = new Date();
    const Hours = String(date.getHours()).padStart(2,"0");
    const Minutes = String(date.getMinutes()).padStart(2,"0");
    const Seconds = ("00"+ (date.getSeconds()).toString()).slice(-2);
    clockTitle.innerText = `${Hours}:${Minutes}:${Seconds}`;
}

function init(){
    getClock();
    setInterval(getClock,1000);
}

init();