$(document).ready(function () {
    var windowSize;
    var slider = document.getElementById("slider");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    var click = false;
    var count = 1;
    var temp_count = 1;
    if (matchMedia) {
        const mq = window.matchMedia("(min-width: 1399px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
    slider.src = "../images/slider_" + count + ".png";
    function WidthChange(mq) {
        if (mq.matches) {
            //          alert("window width is at least 1399px");
            windowSize = 1;
            //         slider.src = "../images/slider_" + count + ".png";
            slider.style.display = "block";
            prev.style.display = "block";
            next.style.display = "block";
        } else {
            //            alert("window width is less than 1399px");
            windowSize = 0;
            //           slider.src = "../images/slider_" + count + ".png";
            slider.style.display = "none";
            prev.style.display = "none";
            next.style.display = "none";
        }
    }

    var prev = document.getElementById("prev");
    var next = document.getElementById("next");
    next.addEventListener("click", function () {
        otherSlide();
    });
    prev.addEventListener("click", function () {
        otherSlide();
    });

    function changeSlider() {
        setTimeout(function () {
            if (Number(windowSize) === 1) {//alert("fadeOut"+windowSize);
                if (click === false) {
                    $(slider).fadeOut(1000);
                }
            }
        }, 3000);
        setTimeout(function () {
            if (click === false) {
                slider.src = "../images/slider_" + count + ".png";
                temp_count = count;
            }
        }, 4050);

        setTimeout(function () {
            if (Number(windowSize) === 1) {//alert("fadeIn"+windowSize);
                if (click === false) {
                    $(slider).fadeIn(1000);
                }
            }
        }, 4060);
    }
    function otherSlide() {
            temp_count++;
            if (temp_count === 3) {
                temp_count = 1;
            }
             slider.src = "../images/slider_" + temp_count + ".png";
        click = true;
    }
    setInterval(function () {
        count++;
        if (count === 3) {
            count = 1;
        }
        changeSlider();
    }, 5060);
});