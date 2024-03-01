//여기부터 수정사항
let isModalOpen = false;
const openModal = () => {
  isModalOpen = true;
  console.log('isModalOpen:',isModalOpen);
};

const closeModal = () => {
  isModalOpen = false;
  console.log('isModalOpen:',isModalOpen);
};
document.getElementById("task-add-btn").addEventListener("click", openModal);

// document.querySelector(".btn-close").addEventListener("click", closeModal);
// document.addEventListener("keydown", (event) => {
//   if (event.keyCode === 27 && isModalOpen) {
//     closeModal();
//   }
// });

const addInputTextInit = () => {
  taskInput.value = "";
};
taskInput.addEventListener("focus", addInputTextInit);
document
  .getElementById("task-add-btn")
  .addEventListener("click", addInputTextInit);
// const myModal = document.getElementById("exampleModal");
// document.addEventListener("click", (event) => {
//   // 모달 외부를 클릭했는지 확인
//   if (!myModal.contains(event.target)) {
//     console.log("모달 외부를 클릭");
//     // 모달 외부를 클릭했을 때 실행할 함수 호출
//     inputTextInit();
//   }
// });

// document.addEventListener("keydown", (event) => {
//   // 모달이 열려있을 때만 동작 (modal 엘리먼트가 show 클래스를 가지고 있는지 확인)
//   if (document.querySelector(".myModal.show") && event.keyCode === 27) {
//     inputTextInit();
//   }
// });
// 모달이 숨겨질 때의 이벤트 핸들러 등록

document.getElementById('exampleModal').addEventListener('hide.bs.modal', (e) => {
    // 여기서 e는 hide.bs.modal 이벤트 객체를 나타냅니다.
    // hide.bs.modal 이벤트에 대한 추가 정보는 e.detail에 저장됩니다.
    closeModal();
  });