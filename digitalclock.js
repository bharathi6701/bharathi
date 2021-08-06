function clock(){
    var date = new Date();
    var hour = date.getHours(); // 0 - 23
    var min = date.getMinutes(); // 0 - 59
    var sec = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(hour == 0){
        hour = 12;
    }
    
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    min = (min< 10) ? "0" + min: min;
    sec = (sec < 10) ? "0" + sec : sec;
    
    var time = hour+ ":" + min + ":" + sec + " " + session;
    document.getElementById("digitalclock").innerText = time;
    document.getElementById("digitalclock").textContent = time;
    
    setTimeout(clock, 1000);
    
}

clock();