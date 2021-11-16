const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      dots = document.querySelectorAll('.dot'),
      slides = document.querySelectorAll('.slide');

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const prepCurSlide = n => {
    activeSlide(n);
    activeDot(n);
}

const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0;
        prepCurSlide(index);
    } else {
        index++;
        prepCurSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1;
        prepCurSlide(index);
    } else {
        index--;
        prepCurSlide(index);
    }
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 2000);