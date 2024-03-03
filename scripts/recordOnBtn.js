const micAddOnBtn = document.getElementById("micAddOnBtn");
let editMicTaskDead;
let editMicTaskId;
let micState = "off"

const recordOnAddBtn = () => {
  availabilityFunc();
  recognition.addEventListener("speechstart", () => {});
  
  
  //음성인식이 끝까지 이루어지면 중단된다.
  recognition.addEventListener("speechend", () => {});

  //
  //음성인식 결과를 반환
  // SpeechRecognitionResult 에 담겨서 반환된다.
  recognition.addEventListener("result", (e) => {
    if (e.results[0][0].transcript.includes("추가")) {
      recordStop();
      document.getElementById("task-add-btn").click();
    } else if (e.results[0][0].transcript.includes("수정")) {
      recordStop();
      let editMicTask = e.results[0][0].transcript.replace("수정", "")
      .replace(/\s/g, "");
      const micEditButton = document.getElementById(`${editMicTask}`)
      
      micEditButton.addEventListener("click", async (event) => {
        for (let i = 0; i < taskList.length; i++) {
          if (taskList[i].taskContent.replace(/\s/g, "") == editMicTask) {
            // 수정해야할 task의 id찾기
            //수정하고자 하는 데이터의 isComplete이 true이면 진행완료 (done), false이면 진행중 (doing)
            renderStatus = taskList[i].isComplete ? "done" : "doing";
            editMicTaskDead = await taskList[i].deadlineTime
            editMicTaskId = taskList[i].id
            editMicTask = taskList[i].taskContent
            break 
          }
        }
        editTask(editMicTask, editMicTaskDead, editMicTaskId);//할 일 이름, 시간, 아이디
      })

      micEditButton.click();
      // const resultString = e.results[0][0].transcript
      //   .replace("수정", "")
      //   .replace(/\s/g, "")
      //   .trim();
      // editTask(resultString);
      
    } else if (e.results[0][0].transcript.includes("삭제")) {
      const resultString = e.results[0][0].transcript
        .replace("삭제", "")
        .replace(/\s/g, "")
        .trim();
        deleteTask(resultString);
      
    } 
    micAddOnBtn.style.backgroundImage = "url('./img/micOff.svg')"
    console.log(e.results[0][0].transcript);
  });

  recognition.start(); //음성인식을 시작
  
};

micAddOnBtn.addEventListener("click", () => {
  if (micState === "off") { //마이크가 꺼져있을 때 클릭하면 켜진다.
    micState = "on"
    console.log(micState)
    micAddOnBtn.style.backgroundImage = "url('./img/micStart.svg')"
    recordOnAddBtn();
  }
  else { //마이크가 켜져있을 때 클릭하면 꺼진다.
    micState = "off"
    micAddOnBtn.style.backgroundImage = "url('./img/micOff.svg')"
    recordStop();
  }

});
