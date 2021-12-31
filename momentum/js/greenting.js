//js-form의 input과 js-greetings 가져오기
const form = document.querySelector(".js-form"),
    input=form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");
    
const USER_LS ="currentUser",
    SHOWING_CN ="showing";

//이름을 로컬스토리지에 저장
function savename(text){
    localStorage.setItem(USER_LS,text);
}

//제출을 누르면 해당 값(이름)을 출력하고 저장 
function handlesubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    PaintGreeting(currentValue);
}

//js-form이 보이게 해서 이름 물어보기
function askForname(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handlesubmit);
}

//이름 보여주기 
function PaintGreeting(text){
    //이름 물어보는거 안보이게 하기 
    form.classList.remove(SHOWING_CN);
    //js-greeting 보이게 하기
    greeting.classList.add(SHOWING_CN);
    //시간 받아오기
    const date = new Date();
    const hours = date.getHours();
    let mention = 'Hello';
    // 시간이 0~4시 또는 20시 넘으면 굿나잇
    if(0<= hours && hours <=4 || 20 < hours){
        mention = " It's night";
    }else if(hours<12){
        //시간이 5시 - 12시 이면 굿모닝
        mention = "It's morning";
    }else{
        //그 외에는 13시 부터 20시 까지 굿 애프터눈
        mention = "It's afternoon";
    }
    //js-greeting에 innerText 넣어주기
    greeting.innerText = `${mention}, ${text}`;
}

//이름 불러오기
function loadname(){
    const currentUser = localStorage.getItem(USER_LS);
    //저장된 이름이 없으면 물어보기
    if(currentUser === null){
        askForname();
    }else{
        //저장된 이름이 있으면 출력
        PaintGreeting(currentUser);
    }
}

function init(){
    loadname();
}

init();


// function onLoginSubmit(event){
//     event.preventDefault();
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const username = loginInput.value;
//     localStorage.setItem(USERNAME_KEY,username);
//     PaintGreeting(username);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if(savedUsername ===null){
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit",onLoginSubmit);
// }else{
//     PaintGreeting(savedUsername);
// }