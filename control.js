"use strict";
//EXPAND CONTROL
const expandBtn = document.querySelector('.education-div');
const content = document.querySelector('.education-ul');

let isExpand = true;

const expand = () => {
    if (isExpand) {
        isExpand = !isExpand;
        content.classList.remove('none');
        expandBtn.style.transform = 'rotate(270deg)';
    }else{
        isExpand = !isExpand;
        content.classList.add('none');
        expandBtn.style.transform = 'rotate(0deg)';
    }
}

expandBtn.addEventListener('click', expand);

