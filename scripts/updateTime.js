let diffHour = 0;
/*
    일정시간이 지날 때 마다 데드라인과의 시간 차이를 계산하여 업데이트해주는 함수
    데드라인이 1일 남았을 때, 1시간 남았을 때 마다 자동으로 웹 푸쉬알림 API를 호출해준다.
*/
const updateTime = () => {
    const date = new Date();
    const curHours = String(date.getHours()).padStart(2, "0");

    for(let i=0; i<taskList.length; i++){
        taskList[i].deadline = calcDate(taskList[i].deadlineDay); // 데드라인 갱신해주기
        //console.log("aaa", taskList[i].deadline);
        
        const pickerHour = taskList[i].deadlineTime.slice(11, 13);
        if( pickerHour - curHours < 0 ) diffHour = -(pickerHour - curHours)
        else diffHour = pickerHour - curHours;
    
        taskList[i].deadhour = diffHour; // 데드라인 시각까지 남은 시간 업데이트
        // console.log(taskList[i].deadhour, "@#@#@#");

        if(taskList[i].deadline<=1 && taskList[i].isComplete==false){ // 데드라인 날짜가 하루도 안 남은 미완료 할 일이 있으면,
            new Notification("일정알림", 
            {body:`${taskList[i].taskContent} 의 데드라인이 하루밖에 남지 않았습니다! 더이상 알림을 원치 않으시면 할 일을 체크해주세요 :)`});
        
            // 데드라인이 하루도 안 남은 할일중에서도 시간조차 1시간도 안 남았다면,
            if(taskList[i].deadhour <= 1){
                new Notification("일정임박알림", 
                {body:`${taskList[i].taskContent} 의 데드라인이 한 시간 정도밖에 남지 않았습니다! 더이상 알림을 원치 않으시면 할 일을 체크해주세요 :)`});
            }
        }
    }
}

setInterval(updateTime, 7200000); // 2시간마다 updateTime함수 자동실행
