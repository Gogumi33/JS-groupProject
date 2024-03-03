/* 모달창 확인 버튼을 누르면 할 일이 추가되거나 입력 안했을 시 경고창을 띄운다 */
let taskInput = document.getElementById("modalInput");
let addButton = document.getElementById("completeBtn"); // 할일 추가버튼
const TODO_KEY = "todo";
//로컬스토리지에 저장된 value값과 동기화시키는 taskList 리스트
let taskList = [];

/* addTask : 모달창 확인 버튼을 눌렀을 때 (클릭이벤트 발생) 모달창을 켜서 할 일을 추가하는 함수
모달창에 입력값을 주지 않을 때 alert 창이 나오며 경고메세지를 보여준다. */
const addTask = (event) => {
  if (taskInput.value == "") {
    alert(`할 일을 작성 후 추가버튼을 눌러주세요!`);
    return;
  }
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].taskContent === taskInput.value) {
      alert(`이미 등록된 할 일 입니다!`);
      return;
    }
  }
  
  

  /* 해야 할 일에 대한 정보를 담은task 객체
        - id는 랜덤값
        - taskContent는 할 일
        - isComplete는 완료 여부(true = done = 완료, false = doing = 진행중)*/
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    deadlineTime: DateTimePicker.value,
    isComplete: false,
  };

  taskList.push(task); //taskList에 객체를 저장하고
  localStorage.setItem(TODO_KEY, JSON.stringify(taskList)); //taskList를 로컬스토리지에 value값으로 저장 (정확히는 덮어쓴다)
  taskInput.value = ""; //로컬스토리지 저장 후 모달창의 인풋창을 지워준다.
  DateTimePicker.value = ""; // 데드라인 설정시간을 초기화 시켜준다.
  render("doing"); //값을 추가한 뒤 화면에 렌더 (상태 = doing = 진행중인 창을 띄워준다.)
  recordIconInit(); //마이크아이콘 초기화
  addInputTextInit();

  new Notification("할 일 알림", { body: "할 일이 추가되었습니다." });
  ProgressTask();
};

/* 랜덤으로 ID를 생성해주는 함수 */
function randomIDGenerate() {
  return "_" + Math.random().toString(36).substring(2, 9);
}

addButton.addEventListener("click", addTask);

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 13 && isModalOpen) {
    document.getElementById("completeBtn").click(); //modal을 닫아주기 위해  "completeBtn" 요소에 대한 클릭 이벤트를 강제로 발생
  }
}); //textInput창에 focus가 안가있어도 modal창만 열려있으면 enter로 등록이 될 수 있게 변경
