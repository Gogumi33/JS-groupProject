let timePicker = document.getElementById("time-picker"); // 타임피커 input창 가져오기
let deadWrap = document.getElementById("dead"); // taskList에 담긴 데드라인 (render.js에 위치)
const btnClose = document.getElementById("btnClose"); // X(창닫는 버튼)가져오기

/* X버튼 클릭시 타임피커 초기화 */
const resetTimePicker = () => {
  timePicker.value = "";
};
btnClose.addEventListener("click", resetTimePicker);
