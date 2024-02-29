const checkButton = document.getElementById("task-done-btn");
let renderStatus = "doing"; //어떤 화면을 render할 지 상태를 저장하는 변수

/* 체크를 통해 진행중 <-> 진행완료 상태를 바꿔주는 completeTask 함수
   체크버튼을 클릭할 때 실행되며 onclick으로 함수 실행
   - taskList의 isComplete를 바꿔주고 다시 로컬스토리지에 저장하여 렌더 */
function completeTask(taskId) {
    taskList = JSON.parse(localStorage.getItem(TODO_KEY)); //로컬스토리지에서 할 일을 가져오고, object로 바꿔서 taskList에 저장
    for (let i = 0; i < taskList.length; i++) { //taskList에서 해야할 값들을 탐색하며
        if (taskList[i].id === taskId) { //내가 클릭한 해야할 일을 찾았으면
            taskList[i].isComplete = !taskList[i].isComplete; //complete 여부를 뒤집고 
            renderStatus = taskList[i].isComplete ? "doing" : "done"; //뒤집은 창이 화면에 나와야하므로 renderState값도 변경
            break; //더이상 탐색이 필요 없으니 종료
        }
    }
    localStorage.setItem(TODO_KEY, JSON.stringify(taskList)); //다시 해야 할 일을 string형태로 바꿔서 로컬스토리지에 저장하고
    render(renderStatus); //화면에 출력
}