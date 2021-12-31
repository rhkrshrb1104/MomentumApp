const tem = document.querySelector(".js-temp");
const pla = document.querySelector(".js-place");
const API_KEY ="58a490266d0603b4e75619f8ac521a24"; //OpenWeather API Key
const COORDS = 'coords'

//Openweather API 에서 위도 경도를 이용하여 날씨와 장소 받아오기 
function getWeather(lat,lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json){
        const temperture = json.main.temp;
        const place = json.name;
        tem.innerText = `${temperture} ℃`;
        pla.innerText = place;
    });
}

//위도 경도 저장하기
function saveCoords(coordsObj){
    localStorage.setItem(COORDS,JSON.stringify(coordsObj));
}

//위치정보를 얻어왔을 때 위도 경도 저장 후 날씨 가져오기 
function handleGeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {latitude,longitude};
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

//위치정보 얻기 실패했을 떄 ,로그 찍기
function handleGeoFail(position){
    console.log("Can't Find you. Geo location Fail");
}

//위치 정보 물어보기 
function askNavi(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoFail);
}

//위치 정보 저장된거 불러오기 
function loadCoords(){
    const loadCoords = localStorage.getItem(COORDS);
    //저장위치가 없을 시 
    if(loadCoords === null){
        askNavi();
    }else{
        //있으면 JSON으로 Parsing 해서 날씨 가져오기
        const parseCoords = JSON.parse(loadCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude); 
    }
}

function init(){
    loadCoords();
}

init();


// function onGeoOk(position){
//     const lat = position.coords.latitude;
//     const lon = position.coords.latitude;
//     console.log("you live in ",lat ,lon);
//     const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
//     fetch(url).then(response => response.json()).then(data => {
//     const weather = document.querySelector("#weather span:first-child");
//     const city = document.querySelector("#weather span:last-child");
//     city.innerText = data.name;
//     weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
//     });
// }

// function onGeoError(){
//     alert("can't find you. NO weather for you");
// }


// //getCurrentPosition에는 인자가 2개 들어가는데 OK 일때와 Error 일때 인자
// navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
