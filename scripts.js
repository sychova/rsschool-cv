window.onload = function() {
    let menuControls = document.getElementsByClassName("menuControls");
    for (var i = 0; i < menuControls.length; i++) {
        menuControls[i].addEventListener("click", function() {
            navMenu();
        });
    }

    let navLinks = document.getElementsByClassName("navLinks");
    for (var i = 0; i < navLinks.length; i++) {
        let j = i;
        navLinks[i].addEventListener("click", function() {
            let tabID = document.getElementsByClassName("tabLinks")[j].getAttribute("id");
            let activityName = this.getAttribute("data-tab");
            openTab(tabID, activityName);
            showSlide(activityName, slideIndex = 0);
        });
    }

    let tabLinks = document.getElementsByClassName("tabLinks");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].addEventListener("click", function() {
            let activityTab = this.getAttribute("id");
            let activityName = this.getAttribute("data-tab");
            openTab(activityTab, activityName);
            showSlide(activityName, slideIndex = 0);
        });
    }

    let prevArrow = document.getElementsByClassName("prev");
    for (var i = 0; i < prevArrow.length; i++) {
        prevArrow[i].addEventListener("click", function() {
            let slideSet = this.closest("article").getAttribute("id");
            switchSlide(slideSet, -1);
        });
    }
    let nextArrow = document.getElementsByClassName("next");
    for (var i = 0; i < nextArrow.length; i++) {
        nextArrow[i].addEventListener("click", function() {
            let slideSet = this.closest("article").getAttribute("id");
            switchSlide(slideSet, 1);
        });
    }

    tabLinks[0].click();
};

let slideIndex = 0;

function openTab(activityTab, activityName) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        tabcontent[i].setAttribute("style", "display: none");
    }

    let tabLinks = document.getElementsByClassName("tabLinks");
    for (var i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    document.getElementById(activityName).setAttribute("style", "display: block");
    document.getElementById(activityTab).classList.add("active");
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

function navMenu() {
    let status = document.getElementById("Menu").getAttribute("style", "width");
    if (status != "width: 230px") {
        document.getElementById("Menu").setAttribute("style", "width: 230px");
    } else {
        document.getElementById("Menu").setAttribute("style", "width: 0px");
    }
}