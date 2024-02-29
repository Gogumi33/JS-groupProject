/* 
로컬스토리지의 값을 모두 삭제하고, 화면에 렌더링하는 taskReset함수.
새로고침 버튼 클릭 할 때,
로컬스토리지 내 값이 없을 시, 삭제할 할 일이 없다는 알림창이 나타난다.
값이 있다면, 할일을 삭제하겠다는 알림창이 나오고, 선택여부에 따라 삭제 및 취소가 가능하다.
*/
const taskReset = () => {
    console.log(`새로고침클릭`);
  
    if (localStorage.getItem(TODO_KEY)) {
      // 로컬스토리지 내 값이 있다면?
      const confirmMessage = confirm(`모든 할 일을 삭제하시겠습니까?`);
      if (confirmMessage) {
        localStorage.clear(); // 확인버튼 클릭시 전체삭제 진행
        console.log(`전체삭제 실행`);
      } else {
        console.log(`전체삭제 취소`); // 전체삭제 취소
      }
    } else {
      // 로컬스토리지 내 값이 없다면?
      alert("삭제할 할 일이 없습니다!");
    }
    render("doing");
  };