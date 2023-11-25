
let toggleButton = document.getElementById('flex-direction-btn');
let container = document.querySelector('.output');

toggleButton.addEventListener('click', function () {
    const currentFlexDirection = getComputedStyle(container).flexDirection;

    if (currentFlexDirection === 'row') {
        container.style.flexDirection = 'column';
        toggleButton.innerHTML = "flex direction : column;";
    } else {
        container.style.flexDirection = 'row';
        toggleButton.innerHTML = "flex direction : row;";
    }
});


let toggleButton2 = document.getElementById('align-items');
let container2 = document.querySelector('.output');

toggleButton2.addEventListener('click', function () {
    const currentAlignItems = getComputedStyle(container2).alignItems;

    if (currentAlignItems === 'start') {
        container2.style.alignItems = 'center';
        toggleButton2.innerHTML = "align-items : center;";
    } else if (currentAlignItems === 'center') {
        container2.style.alignItems = 'end';
        toggleButton2.innerHTML = "align-items : end;";
    } else if (currentAlignItems === 'end') {
        container2.style.alignItems = 'start';
        toggleButton2.innerHTML = "align-items : start;";
    }
});

let toggleButton3 = document.getElementById('justify-content');
let container3 = document.querySelector('.output');

toggleButton3.addEventListener('click', function () {
    const currentJustifyContent = getComputedStyle(container3).justifyContent;

    if (currentJustifyContent === 'flex-start') {
        container3.style.justifyContent = 'space-between';
        toggleButton3.innerHTML = "justify-content : space-between;";
    } else if (currentJustifyContent === 'space-between') {
        container3.style.justifyContent = 'space-around';
        toggleButton3.innerHTML = "justify-content : space-around;";
    } else if (currentJustifyContent === 'space-around') {
        container3.style.justifyContent = 'space-evenly';
        toggleButton3.innerHTML = "justify-content : space-evenly;";
    } else if (currentJustifyContent === 'space-evenly') {
        container3.style.justifyContent = 'flex-end';
        toggleButton3.innerHTML = "justify-content : flex-end;";
    } else if (currentJustifyContent === 'flex-end') {
        container3.style.justifyContent = 'flex-start';
        toggleButton3.innerHTML = "justify-content : flex-start;";
    }
});

