let changedValue = document.getElementById("changedInput");
let editButton = document.getElementById("editBtn");
console.log("editTask",changedValue, editButton);
let editHTML = ""; // 수정 모달창 부분에 수정할 값을 미리 받아와줄 변수
let currentID = ""; // 수정 시 어떤것을 수정할 것인지에 대한 판별 ID

/*
    할 일 수정 함수1
    우선, 각 task마다 수정 버튼을 눌렀을 때 해당 할 일과 id를 매개변수로 받아온다.
    그리고 수정 모달창에 미리 자신이 적어놓은 할 일을 보여지게 하고,
    전역변수 currentID에 해당 id를 저장해둔다.
*/
const editTask = (task, id) => {
    editHTML = `
    <input id = "changedInput" type = "text" value="${task}">
    <button id = "micBtn" onclick = "record()"></button>
    `
    document.getElementById("editInput").innerHTML = editHTML;
    currentID = id;
}


/*
    할 일 수정 함수2
    위 함수에서 저장해놓은 id를 통해 taskList에서의 수정할 부분을 찾는다.
    수정을 마치면, 원래의 로컬스토리지를 아예 싹 비우고, 새로운 taskList를 다시 넣어 렌더링한다.
*/
const changeTask = (event) => {
    for(let i=0; i<taskList.length; i++){
        if(taskList[i].id == currentID){ // 수정해야할 task의 id찾기
            //수정하고자 하는 데이터의 isComplete이 true이면 다 함 (done), false이면 하는중 (doing)
            renderStatus = taskList[i].isComplete ? "done" : "doing"; 
            taskList[i].taskContent = changedInput.value;
        }
    }
    localStorage.clear(); // 로컬스토리지 비우기
    localStorage.setItem(TODO_KEY, JSON.stringify(taskList)); // 다시 새로운 taskList 넣기
    render(renderStatus);

    console.log("할 일 수정 완료");
}

editButton.addEventListener("click", changeTask);
console.log("changedValue",changedValue);
/*
changedValue.addEventListener("keydown", function(event) {
    if(event.keyCode === 13) {
        changeTask(event);
    }
})*/
console.log("changedValue",changedValue);