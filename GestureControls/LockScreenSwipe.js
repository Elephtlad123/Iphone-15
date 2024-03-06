var swipeBox = document.getElementById('lock-screen-swipe-area');
var touchScreen = document.getElementById("touch-screen");
var startX;
var startY;


swipeBox.addEventListener('mousedown', function(event) {
    startX = event.clientX;
    startY = event.clientY;
}, false);

    swipeBox.addEventListener('mousemove', function(event) {
    event.preventDefault();
}, false);

swipeBox.addEventListener('mouseup', function(event) {
    var endX = event.clientX;
    var endY = event.clientY;
    
    var diffX = endX - startX;  
    var diffY = endY - startY;
    
    // Assuming swipe distance should be greater than 50px horizontally or vertically
    if(Math.abs(diffX) > 5 && Math.abs(diffX) > Math.abs(diffY)) {
        if(diffX > 0) {
            console.log('Swiped right');
            // Do something when swiped right
        } else {
            console.log('Swiped left');
            // Do something when swiped left
        }
    }
}, false);

const lockScreen = document.getElementById("lock-screen");
const lockScreenWallPaper = document.getElementById("lock-wallpaper");
var offsets = lockScreen.getBoundingClientRect();
var offsetY = offsets.bottom;
var swipeOffset = 0;

function updateSwipePos(){

    let y = event.pageY;

    swipeOffset = offsetY-y;

    console.log(swipeOffset);

    lockScreen.style.bottom = String(swipeOffset+"px");
}

function StopSwipe(){
    touchScreen.removeEventListener("mousemove", updateSwipePos);
    touchScreen.removeEventListener("mouseup", StopSwipe);

    if (swipeOffset/545 > .4){
        lockScreen.style.transitionDuration = "1s"
        lockScreen.style.bottom = "100%"
        lockScreenWallPaper.style.opacity = 0;
        swipeBox.style.bottom = "-5%";
        swipeBox.style.width = "65%";
        swipeBox.style.left = "0%";
        swipeBox.style.transform = "translate(0)";
    } else {
        lockScreen.style.bottom = "0px"
        lockScreen.style.transitionDuration = ".5s"
        lockScreenWallPaper.style.opacity = 1;
        swipeBox.style.bottom = "1%"
        swipeBox.style.bottom = "1%";
        swipeBox.style.width = "85%";
        swipeBox.style.left = "50%";
        swipeBox.style.transform = "translate(-50%)";
    }
}

swipeBox.addEventListener("mousedown", () => {

    lockScreen.style.transitionDuration = "0s"

    touchScreen.addEventListener("mousemove", updateSwipePos);

    touchScreen.addEventListener("mouseup", StopSwipe);
});