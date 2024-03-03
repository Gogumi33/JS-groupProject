const editRecord = () => {
  console.log("음성 인식 준비");

  editRecordStartBtnCreate();
};

const editRecordStartBtnCreate = () => {
  // 기존의 hide 클래스 추가
  console.log("editRecordStartBtn 생성 및 추가");
  const editMicBtn = document.getElementById("editMicBtn");
  if (editMicBtn) {
    editMicBtn.classList.add("hide");
  }

  // recordStartBtn 생성
  const editRecordStartBtn = document.createElement("button");
  editRecordStartBtn.id = "editRecordStartBtn";
  editRecordStartBtn.onclick = function () {
    editRecordStart();
    editRecordStopBtnCreate();
    // 여기에 클릭 시 실행할 로직을 추가할 수 있습니다.
  };

  // 녹음 중 이미지 생성
  const recordingImage = document.createElement("img");
  recordingImage.src =
    "https://w7.pngwing.com/pngs/316/323/png-transparent-button-phonograph-record-computer-icons-button-root-sound-recording-and-reproduction-record-thumbnail.png"; // 녹음 중 이미지 URL로 변경
  recordingImage.alt = "Recording Image";
  recordingImage.style.width = "50px"; // 원하는 크기로 조절
  recordingImage.style.height = "50px"; // 원하는 크기로 조절

  // editRecordStartBtn 안에 녹음 중 이미지 추가
  editRecordStartBtn.appendChild(recordingImage);

  // 모달 바디에 editRecordStartBtn 추가
  document.getElementById("edit-modal-body").appendChild(editRecordStartBtn);
};

const editRecordStopBtnCreate = () => {
  console.log("editRecordStopBtn 생성 및 추가");
  const editRecordStartBtn = document.getElementById("editRecordStartBtn");
  if (editRecordStartBtn) {
    editRecordStartBtn.classList.add("hide");
  }

  // recordStopBtn 생성
  const editRecordStopBtn = document.createElement("button");
  editRecordStopBtn.id = "editRecordStopBtn";
  editRecordStopBtn.onclick = function () {
    console.log("recordStopBtn 클릭되었습니다.");
    recordStop();
    recordIconInit();
  };

  // 녹음 중지 이미지 생성
  const recordingStopImage = document.createElement("img");
  recordingStopImage.src =
    "https://cdn-icons-png.freepik.com/512/1279/1279899.png"; // 녹음 중 이미지 URL로 변경
  recordingStopImage.alt = "Recording Image";
  recordingStopImage.style.width = "50px"; //
  recordingStopImage.style.height = "50px"; //

  // recordStopBtn 안에 녹음 중 이미지 추가
  editRecordStopBtn.appendChild(recordingStopImage);

  // 모달 바디에 recordStopBtn 추가
  document.getElementById("edit-modal-body").appendChild(editRecordStopBtn);
};

const editRecordIconInit = () => {
  const editRecordStartBtn = document.getElementById("editRecordStartBtn");
  const editRecordStopBtn = document.getElementById("editRecordStopBtn");

  editMicBtn.classList.remove("hide");
  if (editRecordStartBtn) {
    editRecordStartBtn.remove();
  }
  if (editRecordStopBtn) {
    editRecordStopBtn.remove();
  }
};

document
  .getElementById("btn-close-id")
  .addEventListener("click", editRecordIconInit);

const editRecordStart = () => {
  availabilityFunc();
  console.log("시작");

  recognition.addEventListener("speechstart", () => {
    console.log("인식");
  });

  //음성인식이 끝까지 이루어지면 중단된다.
  recognition.addEventListener("speechend", () => {
    console.log("인식2");
    editRecordIconInit();
  });

  //음성인식 결과를 반환
  // SpeechRecognitionResult 에 담겨서 반환된다.
  recognition.addEventListener("result", (e) => {
    changedInput.value = e.results[0][0].transcript;
    recordStop();
    document.getElementById("editBtn").click();
  });

  recognition.start(); //음성인식을 시작
};

// window.addEventListener("load", () => {
//   availabilityFunc();
//   //recordOnAddBtn();
// });
