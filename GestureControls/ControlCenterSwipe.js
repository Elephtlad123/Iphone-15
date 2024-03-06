var ControlSwipeBox = document.getElementById('control-center-swipe-area');
var touchScreen = document.getElementById("touch-screen");

const controlCenter = document.getElementById("control-center-screen");
var ControlCenteroffsets = controlCenter.getBoundingClientRect();
var ControlCenterOffsetBottom = ControlCenteroffsets.bottom;

var TouchScreenOffsets = touchScreen.getBoundingClientRect();
var TouchScreenOffsetTop = TouchScreenOffsets.top

var StartY = 0;

var swipeOffset = 0;

function updateControlCenterPos(){

    let y = event.pageY;

    swipeOffset = ((y-StartY)/25)*100;

    console.log(swipeOffset);

    controlCenter.style.opacity = String(swipeOffset+"%");

}


function StopControlCenterSwipe(){
    touchScreen.removeEventListener("mousemove", updateControlCenterPos);
    touchScreen.removeEventListener("mouseup", StopControlCenterSwipe);

    if (swipeOffset > 50){
        controlCenter.style.transitionDuration = "0.25s";
        controlCenter.style.opacity = 1;
    } else {
        controlCenter.style.transitionDuration = "0.25s";
        controlCenter.style.opacity = 0;
        controlCenter.style.zIndex = 0;
    }
}

ControlSwipeBox.addEventListener("mousedown", () => {

    StartY = event.pageY;

    controlCenter.style.transitionDuration = "0s";
    controlCenter.style.zIndex = 2;

    touchScreen.addEventListener("mousemove", updateControlCenterPos);

    touchScreen.addEventListener("mouseup", StopControlCenterSwipe);
});