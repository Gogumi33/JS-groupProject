Notification.requestPermission(); // 웹 사용자에게 알림 권한 허용메세지 보이기

let permission = Notification.requestPermission(); // 사용자가 누른 허가정보
// console.log(permission);

/* 알림권한 요청 함수 */
function getNotificationPermission() {
    // 브라우저 지원 여부 체크
    if (!("Notification" in window)) {
        alert("데스크톱 알림을 지원하지 않는 브라우저입니다.");
    }
    // 데스크탑 알림 권한 요청
    Notification.requestPermission(function(result) {
        // 권한 거절일때
        if(result == 'denied') {
            Notification.requestPermission();
            alert('알림을 차단하셨습니다.\n브라우저의 사이트 설정에서 변경하실 수 있습니다.');
            return false;
        }
        else if (result == 'granted'){
            alert('알림을 허용하셨습니다.');
        }
    });
}

/* 알림 사용방식 */
// new Notification("저장하기", {body:'방금 작업이 저장되었습니다.'});
