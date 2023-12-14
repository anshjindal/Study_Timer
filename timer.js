setInterval( 
    function () {
    const d = new Date();
    document.getElementById("time").innerHTML = "Time Right now is " + d.getHours() + " : " + d.getMinutes() + " : " + d.getSeconds();

    },1000);

    var sec = 0;
    var b;
    function start_timer() {
        clearTimeout(b);
        b = setInterval(
        function () {
            sec++;
            if ( sec<60) {
                document.getElementById("timer").innerHTML = sec + " seconds";
            } else if (sec>=60 && sec<=3600) {
                var min = Math.floor(sec / 60);
                var rem_sec = sec%60;
                document.getElementById("timer").innerHTML = min + " minutes, " + rem_sec + " seconds";
            } else {

                var rem_sec = sec%60;
                var min = Math.floor(sec / 60);
                var rem_min = min%60;
                var hours = Math.floor(sec / 3600);
                document.getElementById("timer").innerHTML = hours + " hours, " + rem_min + " minutes, " + rem_sec + " seconds";
            }
        
        }, 1000);
    }

    function button_show() {
        document.getElementById("start_again").d
    }

    function change_title() {
        document.getElementById("start_btn").innerHTML = "Continue";
    }
   
    function stop_timer() {
        clearTimeout(b);
        document.getElementById("timer").innerHTML = "Timer stopped. Press Continue or Start Again";
    }

    function start_again() {
        sec = 0;
    }