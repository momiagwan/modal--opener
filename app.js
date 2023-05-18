var opnbtn = document.getElementById(`opnbtn`)
var clsbtn = document.getElementById(`clsbtn`)
var popupcontainer = document.querySelector(`.popup-container`)
var popup = document.querySelector(`popup`)





opnbtn.addEventListener(`click`, () => {
     popupcontainer.classList.add(`blur`);
     popupcontainer.style.display = `flex`;
})



clsbtn.addEventListener(`click`, () => {
    popupcontainer.classList.remove(`blur`);
    popupcontainer.style.display = `none`;
})