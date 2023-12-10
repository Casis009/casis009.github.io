


const API_KEY = "694e1f3f0d8708b279688b7fceef7520";
function onGeoOk(position) {
const lat = position.coords.latitude;
const lon = position.coords.longitude;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        weather.innerText = "-"+data.weather[0].main;
        city.innerHTML = data.name;
    });

    console.log("you live it", lat, lon);
    console.log(url);
}


/*

}
*/
function onGeoError() {
    alert("Can't find you");

}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);

//이걸 부르면 브라우저에서 위치좌표를 줄 것이다

