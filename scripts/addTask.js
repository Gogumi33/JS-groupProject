/* 모달창 확인 버튼을 누르면 할 일이 추가되거나 입력 안했을 시 경고창을 띄운다 */
let taskInput = document.getElementById("modalInput");
let addButton = document.getElementById("completeBtn");
let taskModal = document.getElementById("")
const TODO_KEY = 'todo';
let taskList = []
console.log("새로고침", taskList);
console.log(taskInput);
console.log(addButton);


/* 모달창 확인 버튼을 누르면 할 일이 추가되거나 입력 안했을 시 경고창을 띄운다 */
const addTask = (event) => {
    //console.log("addTask 함수 실행"); 
    console.log(taskInput.value);
    if(taskInput.value == ''){
        alert(`할 일을 작성 후 추가버튼을 눌러주세요!`);
        return;
    }

    /* task 객체 : id는 랜덤값, taskContent는 할 일, isComplete는 완료 여부*/
    let task = {
        id: randomIDGenerate(), //value에 객체의 id도 저장되는게 이상함
        taskContent: taskInput.value,
        isComplete: false
    }


    taskList.push(task);
    localStorage.setItem(TODO_KEY, JSON.stringify(taskList)); //value값에 보통 key값을 넣진 않음. 로컬스토리지에 task객체 저장
    taskInput.value = '';
    render();
    modalInit();

    console.log("할 일 추가 완료");
}

/* 랜덤으로 ID를 생성해주는 함수 */
function randomIDGenerate() {
    return '_' + Math.random().toString(36).substring(2, 9);
}

addButton.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
    if(event.keyCode === 13) { // 엔터 = keyCode:13
        addTask(event);
        
    }
})



