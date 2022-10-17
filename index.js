

let slidePosition = 0;
const theBody = document.querySelector(".whole")
const imagesCont = document.getElementsByClassName("imagescont")
const prevButton = document.getElementById("bac")
const nextButton = document.getElementById("forw")
const carouselItems = document.getElementsByClassName("carouselItem")
const totalCarouselItems = carouselItems.length


function increaseSlidePosition(){
    for (let slide of carouselItems){
        slide.classList.remove('carouselItem--visible');
        slide.classList.add('carouselItem--hidden');
    }
    carouselItems[slidePosition].classList.add('carouselItem--visible')
}

// For the Previous Button
prevButton.addEventListener('click', function() {
    moveToPrevButton()
})

function moveToPrevButton() {
    console.log("this is previous button");

    if (slidePosition === 0){
        slidePosition = totalCarouselItems - 1
    }
    else {
        slidePosition--
    }
    increaseSlidePosition();
}
``

// For the Next Button
nextButton.addEventListener('click', function() {
    moveToNextButton()
})

function moveToNextButton() {
    console.log("this is Next button");

    if (slidePosition === totalCarouselItems - 1){
        slidePosition = 0
    }
    else {
        slidePosition++
    }
    increaseSlidePosition();
}