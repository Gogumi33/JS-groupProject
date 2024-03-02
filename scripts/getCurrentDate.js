let dateInfo = new Date();
let [day, month, date, year] = dateInfo.toDateString().split(' ');
curDate = document.getElementById("current-date");
curMonth = document.getElementById("current-month");
curYear = document.getElementById("current-year");
curDay = document.getElementById("current-day");

curDate.innerText = date;
curMonth.innerText = month;
curYear.innerText = year;
curDay.innerText = day;