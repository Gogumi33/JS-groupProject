const micAddOnBtn = document.getElementById("micAddOnBtn");
const recordOnAddBtn = () => {
  recognition.addEventListener("speechstart", () => {});

  //음성인식이 끝까지 이루어지면 중단된다.
  recognition.addEventListener("speechend", () => {});

  //음성인식 결과를 반환
  // SpeechRecognitionResult 에 담겨서 반환된다.
  recognition.addEventListener("result", (e) => {
    if (e.results[0][0].transcript == "추가") {
      recordStop();
      document.getElementById("task-add-btn").click();
    }
    // else if(e.results[0][0].transcript.includes("수정")){
    //   document.getElementById("task-edit-btn").click();}
    console.log(e.results[0][0].transcript);
  });

  recognition.start(); //음성인식을 시작
};

micAddOnBtn.addEventListener("click", recordOnAddBtn);
