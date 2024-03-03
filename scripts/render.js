let resultHTML; //화면에 그려줄 HTML
let filterList = []; //로컬스토리지에서 필터링 된 값들
const render = (mode) => {
  console.log("render 함수 실행");

  /*로컬스토리지에 이전 값들이 저장되어있는지 확인하기 (저장안됐으면 null)
    key값을 이용하여 로컬스토리지에서 할 일 목록 리스트를 가져온다.*/
  const isSavedTodo = localStorage.getItem(TODO_KEY);

  if (isSavedTodo) {
    //로컬스토리지에 값이 있다면
    console.log("값이 있습니다.");
    /*isSavedTodo가 null이 아니라면 이전에 저장한 기록이 있으므로
          이전에 저장한 값을 string -> object (array) 형태로 변경*/
    taskList = JSON.parse(localStorage.getItem(TODO_KEY));
    console.log("값o", taskList);
  } else {
    //값이 없다면 처음 사용하거나 새로고침이 된 것이므로 taskList를 빈리스트로
    console.log("값이 없습니다.");
    taskList = [];
    console.log("값x", taskList);
  }

  resultHTML = ``;

  //로컬스토리지에 저장된 할 일 리스트를 순회한다.
  if (mode === "doing") {
    //doing이라면 isComplete가 false인 일들을 리턴해준다.
    for (let i = 0; i < taskList.length; i++) {
      if (!taskList[i].isComplete) {
        //아직 진행중이라면 (false)
        resultHTML += `
        <div id = ${taskList[i].id} class="task">
          <div class = "wrapContainer">
            <div class = "wrap1">
                <button class = "task-done-btn" onclick= "completeTask('${
                  taskList[i].id
                }')"></button>
                <div class = "task-doing-name">${taskList[i].taskContent}</div>
            </div>
            <div class = "wrap2">
                <button class = "task-edit-btn" onclick = "editTask('${
                  taskList[i].taskContent
                }','${taskList[i].deadlineTime}', '${
          taskList[i].id
        }')" data-bs-toggle="modal" data-bs-target="#editModal"></button>
                <button class = "task-delete-btn" onclick = "deleteTask('${
                  taskList[i].id
                }')"></button>
            </div>
          </div>
          <div id = "dead" style = "display : ${
            taskList[i].deadlineTime ? "flex" : "none"
          }">
            <div class = "dummy"></div>
            <div class = "task-doing-time"> ${taskList[i].deadlineTime.slice(
              11,
              13
            )} 시 ${taskList[i].deadlineTime.slice(14, 16)}분까지⏰</div>
          </div>
        </div>
            `;
      }
    }
  } else {
    //done이라면 isComplete가 true인 일들을 리턴해준다.
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete) {
        //다 끝낸 일이라면
        resultHTML += `
        <div id = ${taskList[i].id} class="task">
          <div class = "wrapContainer">
            <div class = "wrap1">
                <button class = "task-done-btn" onclick= "completeTask('${
                  taskList[i].id
                }')"></button>
                <div class = "task-done-name">${taskList[i].taskContent}</div>
            </div>
            <div class = "wrap2">
                <button class = "task-edit-btn" onclick = "editTask('${
                  taskList[i].taskContent
                }','${taskList[i].deadlineTime}', '${
          taskList[i].id
        }')" data-bs-toggle="modal" data-bs-target="#editModal"></button>
                <button class = "task-delete-btn" onclick = "deleteTask('${
                  taskList[i].id
                }')"></button>
            </div>
          </div>
          <div id = "dead" style = "display : ${
            taskList[i].deadlineTime ? "flex" : "none"
          }">
            <div class = "dummy"></div>
            <div class = "task-done-time"> ${taskList[i].deadlineTime.slice(
              11,
              13
            )} 시 ${taskList[i].deadlineTime.slice(14, 16)}분까지⏰</div>
          </div>
        </div>
            `;
      }
    }
  }

  document.getElementById("task-area-board").innerHTML = resultHTML;
};
render("doing");
