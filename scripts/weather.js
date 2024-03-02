const weather = document.getElementById("current-weather");
const API_KEY = `073de8edeeb6cfc808889bd776923a93`;

navigator.geolocation.getCurrentPosition(async function(pos) {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json();
    console.log("data!!!", data);
    console.log(data.weather[0].icon);
})

