
    function startTime() {
	var today = new Date();
	var date = today.getDate();
	var daynames = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var monthnames = ["Jan", "Feb", "Mar", "Apr", "May", "June",
	    "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
	var day = daynames[today.getDay()];
	var month = monthnames[today.getMonth()];
	var year = today.getFullYear();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	date = checkTime(date);
	h = checkTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('rtc_js').innerHTML = day + " " + date + " " + month + " " +
	year + " " + h + ":" + m + ":" + s;
	var t = setTimeout(startTime, 500);
    }	
    function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
    }
