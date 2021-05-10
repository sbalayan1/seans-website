//create and get dodger element 

const dodger = document.getElementById("dodger");

//define function moveDodger left
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px","");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = (`${left - 10}px`);
    }
}

//define function moveDodger right
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px","");
    const right = parseInt(rightNumbers, 10);

    if (right < 360) {
        dodger.style.left = (`${right + 10}px`);
    }
}

document.addEventListener('keydown',function(event) {
    if (event.key === 'ArrowRight') {
        console.log(event);
        moveDodgerRight();
    }
});

document.addEventListener('keydown',function(event) {
    if (event.key === 'ArrowLeft') {
        console.log(event);
        moveDodgerLeft();
    }
});
