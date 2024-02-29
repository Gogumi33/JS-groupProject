const checkButton = document.getElementById("task-done-btn");
let renderStatus = "doing";

/* 할 일 체크 함수 : taskList의 isComplete를 바꿔주고 다시 로컬스토리지에 저장하여 렌더 */
function completeTask(taskId) {
    console.log("체크 누름");
    taskList = JSON.parse(localStorage.getItem(TODO_KEY));
    console.log(taskList);
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === taskId) {
            taskList[i].isComplete = !taskList[i].isComplete;
            renderStatus = taskList[i].isComplete ? "doing" : "done";
            break;
        }
    }
    localStorage.setItem(TODO_KEY, JSON.stringify(taskList));
    console.log(taskList);
    console.log("끝");
    render(renderStatus);
}