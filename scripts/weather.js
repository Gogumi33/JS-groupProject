const weather = document.getElementById("current-weather");
const docBody = document.body;
const API_KEY = `073de8edeeb6cfc808889bd776923a93`;

const changeIcon = (data) => {
    let weatherCode = Math.floor(data.weather[0].id/100); //number 400
    
    if (weatherCode === 2) {
        weather.className = 'rainy'
        docBody.className = 'rainyBg'
        console.log("rainy")
    }
    else if (weatherCode === 3) {
        weather.className = 'rainy'
        docBody.className = 'rainyBg'
        console.log("rainy")
    }
    else if (weatherCode === 5) {
        weather.className = 'rainy'
        docBody.className = 'rainyBg'
        console.log("rainy");
    }
    else if (weatherCode === 6) {
        weather.className = 'snowy'
        docBody.className = 'snowyBg'
        console.log("snowy");
    }
    else if (weatherCode === 7) {
        weather.className = 'cloudy'
        docBody.className = 'cloudyBg'
        console.log("cloudy");
    }
    else if (weatherCode === 8) {
        weather.className = 'sunny'
        docBody.className = 'sunnyBg'
        console.log("sunny");
    }
    else {
        weather.className = 'cloudy'
        docBody.className = 'cloudyBg'
        console.log("cloudy");
    }

}


navigator.geolocation.getCurrentPosition(async function(pos) {
    let lat = pos.coords.latitude; 
    let lon = pos.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    const response = await fetch(url)
    const data = await response.json();
    console.log("data!!!!!!!!1", data);
    changeIcon(data);
})

