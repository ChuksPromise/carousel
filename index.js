const theBody = document.querySelector(".whole")
const imagesCont = document.getElementsByClassName("imagescont")
const prevButton = document.getElementById("bac")
const nextButton = document.getElementById("forw")
const carouselItems = document.getElementsByClassName("carouselItem")
const totalCarouselItem = carouselItems.length


// For the Previous Button
prevButton.addEventListener('click', function() {
    moveToPrevButton()
})

function moveToPrevButton() {
    console.log("this is previous button")
}
``

// For the Next Button
nextButton.addEventListener('click', function() {
    moveToNextButton()
})

function moveToNextButton() {
    console.log("this is Next button")
}