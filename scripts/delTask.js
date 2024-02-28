/* 할 일 삭제 함수 */
function deleteTask(id) {
  console.log("deleteTask 함수 실행", id);
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i, 1);
      break;
    }
    console.log(taskList);
  }
  render();
}
