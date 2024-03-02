let leftTime = 0;
// 실시간 시간 구하기
function getClock() {
  const date = new Date();
  const curHours = String(date.getHours()).padStart(2, "0"); // 실시간 시
  const curMinutes = String(date.getMinutes()).padStart(2, "0"); // 실시간 분
  // 타임피커의 문자열 시간쪽만
  const pickerHour = timePicker.value.substr(0, 2).padStart(2, "0"); // 타임피커 시
  const pickerMinute = timePicker.value.substr(3, 5).padStart(2, "0"); // 타임피커 분

  // console.log("피커 시", timePicker.value.substr(0, 2));
  // console.log("피커 분", timePicker.value.substr(3, 5));
  // 절대값으로 시끼리, 분끼리의 결과를 출력
  leftTime = `${pickerHour - curHours}시간 ${
    pickerMinute - curMinutes
  }분 남았습니다`;
  console.log(leftTime);
}
addButton.addEventListener("click", getClock);
