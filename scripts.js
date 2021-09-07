{/* <script>
  window.onload = function() {
    alert('Страница загружена');

    // к этому моменту страница загружена
    alert(`Image size: ${img.offsetWidth}x${img.offsetHeight}`);
  };
</script> */}



window.onload = function() {
    // Tab controls
    let tablinks = document.getElementsByClassName("tablinks");
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].addEventListener("click", function(event) {
            openTab(event, this.getAttribute("data-tab"));
        });
    }
    tablinks[0].click();

    //Slider controls
    let eduSlideIndex = 1;
    let workSlideIndex = 1;
    // showSlide("educationSlides", eduSlideIndex);
    // showSlide("workSlides", workSlideIndex);

    let prevArrow = document.getElementsByClassName("prev");
    for (var i = 0; i < prevArrow.length; i++) {
        prevArrow[i].addEventListener("click", function() {
            console.log("Previous clicked");
        });
    }
    let nextArrow = document.getElementsByClassName("next");
    for (var i = 0; i < nextArrow.length; i++) {
        nextArrow[i].addEventListener("click", function() {
            console.log("Next clicked");
        });
    }
};

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