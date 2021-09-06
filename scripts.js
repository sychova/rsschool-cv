(function() {
    // Tab controls
    let tablinks = $(".tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        $(tablinks[i]).on("click", function(event) {
            openTab(event, $(this).attr("data-tab"));
        });
    }
    $(tablinks[0]).click();

    //Slider controls
    let eduSlideIndex = 1;
    let workSlideIndex = 1;
    // showSlide("educationSlides", eduSlideIndex);
    // showSlide("workSlides", workSlideIndex);

    let prevArrow = $(".prev");
    for (var i = 0; i < prevArrow.length; i++) {
        $(prevArrow[i]).on("click", function() {
            let prevClass = $(this).prev().attr("class").split(" ")[0];
            moveSlide(prevClass, -1);
            console.log(ttt);
            console.log("Previous clicked");
            console.log($(this).prev().attr("class").split(" ")[0]);
        });
    }
    let nextArrow = $(".next");
    for (var i = 0; i < nextArrow.length; i++) {
        $(nextArrow[i]).on("click", function() {
            let nextClass = $(this).prev().prev().attr("class").split(" ")[0];
            moveSlide(nextSlide, 1);
            console.log("Next clicked");
            console.log($(this).prev().prev().attr("class").split(" ")[0]);
        });
    }
})();

function openTab(event, activityName) {
    let tabcontent = $(".tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        $(tabcontent[i]).attr("style", "display: none");
    }

    let tablinks = $(".tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        $(tablinks[i]).removeClass("active");
    }

    $("#" + activityName).attr("style", "display: block");
    $(event.target).addClass("active");
}




// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function moveSlide(siblingClass, n) {
//     showSlide(siblingClass, slideIndex += n);
// }

function showSlide(siblingClass, n) {
    var slides = $('.' + siblingClass);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
// }