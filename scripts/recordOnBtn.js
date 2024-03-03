const micAddOnBtn = document.getElementById("micAddOnBtn");
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
      document.querySelector(".task-edit-btn").click();
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
