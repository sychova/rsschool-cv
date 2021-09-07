window.onload = function() {
    // Tab controls
    let tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function(event) {
            let activityName = this.getAttribute("data-tab");
            openTab(event, activityName);
            showSlide(activityName, slideIndex = 0);
        });
    }

    let prevArrow = document.getElementsByClassName("prev");
    for (var i = 0; i < prevArrow.length; i++) {
        prevArrow[i].addEventListener("click", function() {
            let slideSet = this.closest("section").getAttribute("id");
            switchSlide(slideSet, -1);
        });
    }
    let nextArrow = document.getElementsByClassName("next");
    for (var i = 0; i < nextArrow.length; i++) {
        nextArrow[i].addEventListener("click", function() {
            let slideSet = this.closest("section").getAttribute("id");
            switchSlide(slideSet, 1);
        });
    }

    tablinks[0].click();
};

let slideIndex = 0;

function openTab(event, activityName) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].setAttribute("style", "display: none");
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(activityName).setAttribute("style", "display: block");
    event.target.classList.add("active");
}

function showSlide(slideSet, slideShow) {
    let slides = document.getElementById(slideSet).querySelectorAll("article");
    if (slideShow > (slides.length - 1)) {
        showSlide(slideSet, slideIndex = 0);
    } else if (slideShow < 0) {
        showSlide(slideSet, slideIndex = (slides.length - 1));
    } else {
        for (var i = 0; i < slides.length; i++) {
            slides[i].setAttribute("style", "display: none");
        }
        slides[slideShow].setAttribute("style", "display: block");
    }
}

function switchSlide(slideSet, slideChange) {
    showSlide(slideSet, slideIndex += slideChange);
}


// if (n > x.length) {slideIndex[no] = 1}
// if (n < 1) {slideIndex[no] = x.length}