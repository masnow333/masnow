/* slider */

let slides = document.querySelectorAll('.sliderContainer > .slides');

setInterval(slider, 5000);

function slider() {
    for (let i = 0; i < slides.length; i++) {
        if (i == slides.length -1) {
            for (let index = 0; index < slides.length; index++) {
                slides[index].classList.add("opacity");
            }
            slides[0].classList.remove("opacity");
            break;
        }else{
            if (!   slides[i].classList.contains("opacity")) {
                for (let index = 0; index < slides.length; index++) {
                    slides[index].classList.add("opacity");
                }
                slides[i +1].classList.remove("opacity");
                break;
            }
        }
    }
}

/* end slider */