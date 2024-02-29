/* 할 일 삭제 함수 */
function deleteTask(id) {
    console.log("deleteTask 함수 실행", id);
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].id === id) {
        //삭제하고자 하는 데이터의 isComplete이 true이면 다 함 (done), false이면 하는중 (doing)
        renderStatus = taskList[i].isComplete ? "done" : "doing"; 
        taskList.splice(i, 1);
        localStorage.setItem(TODO_KEY, JSON.stringify(taskList)); // 로컬 스토리지에서 해당 데이터 삭제
        break;
      }
    }
    render(renderStatus);
  }