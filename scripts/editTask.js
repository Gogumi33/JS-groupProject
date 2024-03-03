let changedValue = document.getElementById("changedInput");
let editButton = document.getElementById("editBtn");
console.log("editTask", changedValue, editButton);
let editHTML = ""; // 수정 모달창 부분에 수정할 값을 미리 받아와줄 변수
let currentID = ""; // 수정 시 어떤것을 수정할 것인지에 대한 판별 ID

/*
    할 일 수정 함수1
    우선, 각 task마다 수정 버튼을 눌렀을 때 해당 할 일과 id를 매개변수로 받아온다.
    그리고 수정 모달창에 미리 자신이 적어놓은 할 일을 보여지게 하고,
    전역변수 currentID에 해당 id를 저장해둔다.
*/
const editTask = (task, time, id) => {
  console.log("editTask 실행!");
  console.log(taskList);
  console.log("editTask함수호출 id값은", id);
  console.log("과정1");
  console.log(task, time, id);

  if (id === undefined) {
    console.log("id=undefined");
    console.log(taskList);
    console.log("id", id);
    console.log("과정2");

    // id가 undefined이면 taskList에서 taskContent 값이 일치하는 객체를 찾음
    const matchingTask = taskList.find(
      (item) => item.taskContent.replace(/\s/g, "") === task
    );

    if (matchingTask) {
      currentID = matchingTask.id;
      console.log("매칭태스크가 있음");
    } else {
      // 일치하는 항목이 없을 경우 예외 처리 또는 기본값 설정
      console.log("일치하는항목x", task);
      console.log("과정3");
      return;
    }
  } else {
    // id가 제공되면 그 값을 그대로 사용
    currentID = id;
  }

  // 모달창 열기 등의 추가적인 로직
  editHTML = `
  <div id = "changedInputMic">
  <input id="changedInput" type="text" value="${task}">
  <button id="editMicBtn" onclick="editRecord()"></button>
</div>
    <div id="changed-deadline-container">
      <span id = "editDealineSpan">데드라인 👉</span>
      <input id="changedDateTimePicker" type="datetime-local" value=${time} />
    </div>
    `;

  document.getElementById("edit-modal-body").innerHTML = editHTML;
  console.log("과정4");
};
/*
    할 일 수정 함수2
    위 함수에서 저장해놓은 id를 통해 taskList에서의 수정할 부분을 찾는다.
    수정을 마치면, 원래의 로컬스토리지를 아예 싹 비우고, 새로운 taskList를 다시 넣어 렌더링한다.
*/
const changeTask = (event) => {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == currentID) {
      // 수정해야할 task의 id찾기
      //수정하고자 하는 데이터의 isComplete이 true이면 진행완료 (done), false이면 진행중 (doing)
      renderStatus = taskList[i].isComplete ? "done" : "doing";
      taskList[i].taskContent = changedInput.value;
      taskList[i].deadlineTime = changedDateTimePicker.value;
    }
  }
  localStorage.clear(); // 로컬스토리지 비우기
  localStorage.setItem(TODO_KEY, JSON.stringify(taskList)); // 다시 새로운 taskList 넣기
  render(renderStatus);

  console.log("할 일 수정 완료");
};

editButton.addEventListener("click", changeTask);
/*
changedValue.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.getElementById("editBtn").click();
  }
});*/
console.log("changedValue", changedValue);
/*
changedValue.addEventListener("keydown", function(event) {
    if(event.keyCode === 13) {
        changeTask(event);
    }
})*/
console.log("changedValue", changedValue);
