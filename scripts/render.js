let resultHTML; //화면에 그려줄 HTML
const render = () => {
    console.log("render 함수 실행");
    resultHTML = ``;
    /* key값을 이용하여 로컬스토리지에서 할 일 목록이 담긴 값을 가져온다.
       string -> object (by JSON.parse) */
    const tasks = JSON.parse(localStorage.getItem(TODO_KEY)); 
    
    //로컬스토리지에 저장된 할 일 리스트를 순회한다.
    for(let i=0; i<tasks.length; i++){
        resultHTML += `
            <div class="task">
            <div class = "wrap1">
                <button id = "task-done-btn" onclick= "completeTask()"></button>
                <div id = "task-name">${tasks[i].taskContent}</div>
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
