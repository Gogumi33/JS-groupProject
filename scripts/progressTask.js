const completeRatio = document.getElementById("completeRatio");
// ProgressBar 업데이트하기
const ProgressTask = () => {
  console.log("전체갯수", taskList.length);
  const completedCount = taskList.filter((task) => task.isComplete).length;
  // task 배열에서 isComplete 속성이 true인 todo 개수를 세어 completedCount 변수에 할당
  const percent = Math.floor(
    taskList.length > 0 ? (completedCount / taskList.length) * 100 : 0
  );
  // task 배열의 크기가 0보다 크면, task 배열에서 completed 속성이 true인 todo 개수의 비율을 계산하여 100을 곱함. 아니면, 0을 할당
  console.log("완료갯수", completedCount);
  console.log("완료진행률", percent);
  completeRatio.innerHTML = `${percent}%`;
  // render("doing");
};

render("doing");
