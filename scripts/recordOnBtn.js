const micAddOnBtn = document.getElementById("micAddOnBtn");
let editMicTaskDead;
let editMicTaskId;

const recordOnAddBtn = () => {
  availabilityFunc();
  recognition.addEventListener("speechstart", () => {});

  //음성인식이 끝까지 이루어지면 중단된다.
  recognition.addEventListener("speechend", () => {});

  //음성인식 결과를 반환
  // SpeechRecognitionResult 에 담겨서 반환된다.
  recognition.addEventListener("result", (e) => {
    if (e.results[0][0].transcript.includes("추가")) {
      recordStop();
      document.getElementById("task-add-btn").click();
    } else if (e.results[0][0].transcript.includes("수정")) {
      recordStop();
      const editMicTask = e.results[0][0].transcript.split(' ')[0];
      const micEditButton = document.getElementById(`${editMicTask}`)
      console.log(editMicTask);
      for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].taskContent == editMicTask) {
          // 수정해야할 task의 id찾기
          //수정하고자 하는 데이터의 isComplete이 true이면 진행완료 (done), false이면 진행중 (doing)
          renderStatus = taskList[i].isComplete ? "done" : "doing";
          editMicTaskDead = taskList[i].deadlineTime
          editMicTaskId = taskList[i].id
          break
        }
      }
      console.log(micEditButton, editMicTaskDead, editMicTaskId);
      micEditButton.addEventListener("click", (event) => {
        editTask(editMicTask, editMicTaskDead, editMicTaskId);//할 일 이름, 시간, 아이디
      })

      micEditButton.click();
      const resultString = e.results[0][0].transcript
        .replace("수정", "")
        .replace(/\s/g, "")
        .trim();
      editTask(resultString);
      
    } else if (e.results[0][0].transcript.includes("삭제")) {
      const resultString = e.results[0][0].transcript
        .replace("삭제", "")
        .replace(/\s/g, "")
        .trim();
        deleteTask(resultString);
      
    } 

    console.log(e.results[0][0].transcript);
  });

  recognition.start(); //음성인식을 시작
};

micAddOnBtn.addEventListener("click", () => {
  recordOnAddBtn();
});
