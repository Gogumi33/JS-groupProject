const weather = document.getElementById("current-weather");
const API_KEY = `073de8edeeb6cfc808889bd776923a93`;

const changeIcon = (data) => {
    let weatherCode = data.weather[0].id;
    if (weatherCode[0] === '2') {
        console.log("rainy")
    }
    else if (weatherCode[0] === '3') {
        console.log("rainy")
    }
    else if (weatherCode[0] === '5') {
        console.log("rainy");
    }
    else if (weatherCode[0] === '6') {
        console.log("snowy");
    }
    else if (weatherCode[0] === '7') {
        console.log("cloudy");
    }
    else if (weatherCode === '800') {
        console.log("sunny");
    }
    else {
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
    //console.log("data!!!", data);
    //console.log(data.weather[0].icon);
})

