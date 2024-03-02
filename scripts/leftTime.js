let datePickerValue = "";
let leftTime = "";

let checkDate = "";
let diffTime = 0;

/* 실시간 현재시간, 타임픽커의 값들이 있고, 데드라인 설정 후 남은시간을 구할 수 있음*/
function getClock() {
  datePickerValue = DateTimePicker.value; // 사용자가 달력, 시간 선택한 값 2024-03-02T20:48 <-문자열로 출력

  const date = new Date();
  console.log(date);
  const curHours = String(date.getHours()).padStart(2, "0"); // 실시간 시
  const curMinutes = String(date.getMinutes()).padStart(2, "0"); // 실시간 분
  const curDate = String(date.getDate()).padStart(2, "0");
  console.log(curDate, ",", curHours, ",", curMinutes);

  // DateTimePicker의 값
  const pickerDate = DateTimePicker.value.slice(8, 10);
  const pickerHour = DateTimePicker.value.slice(11, 13); // DateTimePicker의 시
  const pickerMinute = DateTimePicker.value.slice(14, 16); // DateTimePicker의 분

  console.log("datetime피커 값", datePickerValue);
  console.log("데드라인 시", pickerHour);
  console.log("데드라인 분", pickerMinute);

  // 데드라인 설정하고 남은시간 = 데드라인 설정시간 - 실시간현재시간
  leftTime = `${pickerHour - curHours}:${pickerMinute - curMinutes}`;

  // if( pickerMinute - curMinutes < 0 ) diffMin = -(pickerMinute - curMinutes)
  // else diffMin = pickerMinute - curMinutes;
  // console.log(diffMin);

  // if( pickerHour - curHours < 0 ) diffHour = -(pickerHour - curHours)
  // else diffHour = pickerHour - curHours;
  // console.log(diffHour);

  // diffDate = pickerDate - curDate;

  // console.log(diffDate, "@@@");
  // console.log("남은시간", leftTime);
  checkDate = DateTimePicker.value.slice(0, 10);
  const newDate = new Date(checkDate);

  diffTime = Math.abs(newDate.getTime() - date.getTime()); // 설정한 날짜와 현재시간의 날짜 차이 구하기.
  diffTime = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  console.log(diffTime);
}
// addButton.addEventListener("click", getClock);
DateTimePicker.addEventListener("input", getClock);

function alertDate() {
  if(diffTime<=1){ // 데드라인 하루가 남았을 때 웹 푸시 API 호출
    new Notification("일정알림", {body:'하루 남은 일정이 있습니다.'});
  }
}

setInterval(alertDate, 86400000); // 하루 단위로 자동으로 실행