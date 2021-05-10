//create and get dodger element 

const dodger = document.getElementById("dodger");

//define function moveDodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = (`${left - 20}px`);
    }
}

//define function moveDodger right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = (`${right + 20}px`);
    }
}

//define function moveDodger up
function moveDodgerUp() {
    const upNumbers = dodger.style.bottom.replace("px","");
    const up = parseInt(upNumbers, 10);

    if (up < 380) {
        dodger.style.bottom = (`${up + 20}px`);
        e.preventDefault();
    }
}

//define function moveDodger down
function moveDodgerDown() {
    const downNumbers = dodger.style.bottom.replace("px","");
    const down = parseInt(downNumbers, 10);

    if (down > 0) {
        dodger.style.bottom = (`${down - 20}px`);
       
    }
}


//addEventListener that calls the right and left functions when the event occurs
document.addEventListener('keydown',function(event) {
    if (event.key === 'ArrowLeft') {
        console.log(event);
        moveDodgerLeft();
    }
});

document.addEventListener('keydown',function(event) {
    if (event.key === 'ArrowRight') {
        console.log(event);
        moveDodgerRight();
    }
});

document.addEventListener('keydown',function(event) {
    if (event.key === 'ArrowUp') {
        console.log(event);
        moveDodgerUp();
        e.stopPropagation();
            e.preventDefault();  
            e.returnValue = false;
            e.cancelBubble = true;
            return false;
    }
});

document.addEventListener('keydown',function(event) {
    if (event.key === 'ArrowDown') {
        console.log(event);
        moveDodgerDown();
       
    }
});

//code that prevents the page from scrolling when keyup/keydown
window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);