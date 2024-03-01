const record = () => {
  console.log("음성 인식 준비");
  recordStartBtnCreate();
};
document.getElementById("micBtn").addEventListener("click", record);

const recordStartBtnCreate = () => {
  // 기존의 hide 클래스 추가
  console.log("recordStartBtn 생성 및 추가");
  const micBtn = document.getElementById("micBtn");
  if (micBtn) {
    micBtn.classList.add("hide");
  }

  // recordStartBtn 생성
  const recordStartBtn = document.createElement("button");
  recordStartBtn.id = "recordStartBtn";
  recordStartBtn.onclick = function () {
    recordStart();
    recordStopBtnCreate();
    // 여기에 클릭 시 실행할 로직을 추가할 수 있습니다.
  };

  // 녹음 중 이미지 생성
  const recordingImage = document.createElement("img");
  recordingImage.src =
    "https://w7.pngwing.com/pngs/316/323/png-transparent-button-phonograph-record-computer-icons-button-root-sound-recording-and-reproduction-record-thumbnail.png"; // 녹음 중 이미지 URL로 변경
  recordingImage.alt = "Recording Image";
  recordingImage.style.width = "50px"; // 원하는 크기로 조절
  recordingImage.style.height = "50px"; // 원하는 크기로 조절

  // recordStartBtn 안에 녹음 중 이미지 추가
  recordStartBtn.appendChild(recordingImage);

  // 모달 바디에 recordStartBtn 추가
  document.querySelector(".modal-body").appendChild(recordStartBtn);
};

const recordStopBtnCreate = () => {
  console.log("recordStopBtn 생성 및 추가");
  const recordStartBtn = document.getElementById("recordStartBtn");
  if (recordStartBtn) {
    recordStartBtn.classList.add("hide");
  }

  // recordStopBtn 생성
  const recordStopBtn = document.createElement("button");
  recordStopBtn.id = "recordStopBtn";
  recordStopBtn.onclick = function () {
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
  recordStopBtn.appendChild(recordingStopImage);

  // 모달 바디에 recordStopBtn 추가
  document.querySelector(".modal-body").appendChild(recordStopBtn);
};

const recordIconInit = () => {
  const recordStartBtn = document.getElementById("recordStartBtn");
  const recordStopBtn = document.getElementById("recordStopBtn");

  micBtn.classList.remove("hide");
  if (recordStartBtn) {
    recordStartBtn.remove();
  }
  if (recordStopBtn) {
    recordStopBtn.remove();
  }
};

document.querySelector(".btn-close").addEventListener("click", recordIconInit);



const availabilityFunc = () => {
  //현재 SpeechRecognition을 지원하는 크롬 버전과 webkit 형태로 제공되는 버전이 있으므로 둘 중 해당하는 생성자를 호출한다.
  recognition = new webkitSpeechRecognition() || new SpeechRecognition();
  recognition.lang = "ko"; // 음성인식에 사용되고 반환될 언어를 설정한다.
  recognition.maxAlternatives = 5; //음성 인식결과를 5개 까지 보여준다.

  if (!recognition) {
    alert("현재 브라우저는 사용이 불가능합니다.");
  }
};

const recordStart = () => {
  console.log("시작");

  recognition.addEventListener("speechstart", () => {
    console.log("인식");
  });

  //음성인식이 끝까지 이루어지면 중단된다.
  recognition.addEventListener("speechend", () => {
    console.log("인식2");
    recordIconInit();
  });

  //음성인식 결과를 반환
  // SpeechRecognitionResult 에 담겨서 반환된다.
  recognition.addEventListener("result", (e) => {
    taskInput.value = e.results[0][0].transcript;
    recordStop();
    document.getElementById("completeBtn").click();
  });

  recognition.start(); //음성인식을 시작
};

const recordStop = () => {
  console.log("종료");
  recognition.stop(); // 음성인식을 중단하고 중단까지의 결과를 반환
};
window.addEventListener("load", () => {
  availabilityFunc();
});





