const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const origintext = document.querySelector("#origin-text p").innerHTML;
var timer = [0,0,0,0];
var interval;
var timerRunning =1;

function start(){
    let textEnteredLength = testArea.value.length;
    if (textEnteredLength === 0 && timerRunning==1){
        timerRunning =2;
        interval = setInterval(runTimer,10);
    }
    console.log(textEnteredLength)
}
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

function runTimer(){

    theTimer.innerHTML = leadingZero(timer[0])+":"+leadingZero(timer[1])+":"+leadingZero(timer[2]);
    timer[3]++;
    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

}

function spellcheck(){
    let textEntered = testArea.value;
    console.log(textEntered);
    let origin = origintext.substring(0,textEntered.length);
    if (textEntered == origintext){
        clearInterval(interval);
        console.log("done");
        testWrapper.style.borderColor = "green";
        }   
    else {
        if (textEntered == origin) {
            console.log("bli")
            testWrapper.style.borderColor = "blue";
        } else {
            testWrapper.style.borderColor = "red";
        }
    }


    
    
}

function reset(){
   clearInterval(interval);
   interval = null;
   timer = [0,0,0,0];
   theTimer.innerHTML = "00:00:00";
   timerRunning = 1;
   testArea.value = "";
   testWrapper.style.borderColor = "grey";
}

testArea.addEventListener("keypress",start,false);
testArea.addEventListener("keyup",spellcheck,false);
resetButton.addEventListener("click",reset,false);