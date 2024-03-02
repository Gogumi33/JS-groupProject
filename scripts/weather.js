const weather = document.getElementById("current-weather");
const API_KEY = `073de8edeeb6cfc808889bd776923a93`;

// 1. 사용자 위치 정보 가져오기 (위도, 경도)
window.navigator.geolocation.getCurrentPosition(function(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    console.log("위도경도",lat, lng);
})