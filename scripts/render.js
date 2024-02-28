let resultHTML; //화면에 그려줄 HTML
const render = () => {
    console.log("render 함수 실행");
    
    /*로컬스토리지에 이전 값들이 저장되어있는지 확인하기 (저장안됐으면 null)
    key값을 이용하여 로컬스토리지에서 할 일 목록 리스트를 가져온다.*/
    const isSavedTodo = localStorage.getItem(TODO_KEY);
    if (isSavedTodo) { //값이 있다면
        console.log("값이 있습니다.");
        /*isSavedTodo가 null이 아니라면 이전에 저장한 기록이 있으므로
          이전에 저장한 값을 string -> object (array) 형태로 변경*/
        taskList = JSON.parse(localStorage.getItem(TODO_KEY));
        console.log("값o",taskList);
    }
    else { //값이 없다면 처음 사용하거나 새로고침이 된 것이므로 taskList를 빈리스트로
        console.log("값이 없습니다.")
        taskList = []
        console.log("값x",taskList)
    }

    resultHTML = ``;
    
    //로컬스토리지에 저장된 할 일 리스트를 순회한다.
    for(let i=0; i<taskList.length; i++){
        resultHTML += `
            <div class="task">
            <div class = "wrap1">
                <button id = "task-done-btn" onclick= "completeTask()"></button>
                <div id = "task-name">${taskList[i].taskContent}</div>
            </div>
            <div class = "wrap2">
                <button id = "task-edit-btn" onclick = "editTask()"></button>
                <button id = "task-delete-btn" onclick = "delTask()"></button>
            </div>
        </div>
        `
    }
    document.getElementById("task-area-board").innerHTML = resultHTML;
}
render();
