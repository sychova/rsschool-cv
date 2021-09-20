window.onload = function() {

    console.log("Ваша оценка - 125 баллов \nОтзыв по пунктам ТЗ: \nНе выполненные/не засчитанные пункты: \n1) вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется \n2) есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs). \nЧастично выполненные пункты: \n1) есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. \nfeedback: бургер меню есть и работает, отсутствует адаптив \n2) CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода \nfeedback: пример кода присутствует, но отсутствует подсветка \n3) CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий \nВыполненные пункты: \n1) вёрстка валидная. Проверить валидность вёрстки: https://validator.w3.org/ \n2) вёрстка семантическая. В коде страницы присутствуют семантические теги HTML5, например, article, aside, figure, figcaption, footer, header, main, nav, section, используются заголовки h1-h6. 2 балла за каждый уникальный семантический тег HTML5 и за каждый уникальный заголовок h1-h6, но не больше 20 баллов. Заголовок h1 может быть только один \n3) для оформления СV используются css-стили. 1 балл за каждый стилизованный элемент, но не больше 10 баллов \n4) контент размещается в блоке, который горизонтально центрируется на странице. Фоновый цвет, если он есть, тянется во всю ширину страницы \n5) на странице СV присутствует изображение - фото или аватарка автора CV, пропорции изображения не искажены, у изображения есть атрибут alt (может быть пустым) \n6) контакты для связи и перечень навыков оформлены в виде списка ul > li \n7) CV содержит контакты, краткую информацию о себе, навыки, образование, уровень английского \n8) CV выполнено на английском языке \n9) выполнены требования к репозиторию: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, указана дата дедлайна, выполнена самооценка (самооценку расписываем по пунктам критериев оценки, указывая балл за каждый пункт) \n10) дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию");

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