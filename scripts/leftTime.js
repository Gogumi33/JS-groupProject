let datePickerValue = "";
let leftTime = "";

/* 실시간 현재시간, 타임픽커의 값들이 있고, 데드라인 설정 후 남은시간을 구할 수 있음*/
function getClock() {
  datePickerValue = DateTimePicker.value; // 사용자가 달력, 시간 선택한 값

  const date = new Date();
  const curHours = String(date.getHours()).padStart(2, "0"); // 실시간 시
  const curMinutes = String(date.getMinutes()).padStart(2, "0"); // 실시간 분
  // DateTimePicker의 값
  const pickerHour = DateTimePicker.value.slice(11, 13); // DateTimePicker의 시
  const pickerMinute = DateTimePicker.value.slice(14, 16); // DateTimePicker의 분
  console.log(datePickerValue);
  console.log("데드라인 시", pickerHour);
  console.log("데드라인 분", pickerMinute);

  // 남은시간 = 데드라인 설정시간 - 실시간현재시간
  leftTime = `${pickerHour - curHours}:${pickerMinute - curMinutes}`;
  console.log("남은시간", leftTime);
}
// addButton.addEventListener("click", getClock);
DateTimePicker.addEventListener("input", getClock);
