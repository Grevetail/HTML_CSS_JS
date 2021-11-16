$('.card').on('click', function() {
    let currTab = $(this).parent().index();

    $('.card').removeClass('card-active');
    $(this).addClass('card-active');

    $('.tab-content').removeClass('active');
    $('.tab-content').eq(currTab).addClass('active');
})

$('.hamburger').on('click', function() {
    $('.head__menu').toggle();
})

$('.menu-close').on('click', function() {
    $('.head__menu').hide();
})

let scene = document.getElementById('scene');
let parallaxInstance = new Parallax(scene);

const swiper = new Swiper('.swiper-container',  {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    spaceBetween: 50,
    slidesPerView: 'auto',
    stopOnLastSlide: false,
    autoplay: {
        delay: 2000
    }
})

$.validator.addMethod('regex', function(value, element, regexp) {
    let regExsp = new RegExp(regexp);
    return regExsp.test(value);
}, 'Please check your input');

$('form').validate({
    rules: {
        firstName: {
            required: true,
            regex: "[а-яёА-ЯЁ]{1,32}"
        },
        phoneNumber: {
            digits: true,
            required: true,
            minlength: 10,
            maxlength: 11,
            regex: "[0-9]+"
        }
    
    },
    messages: {
        firstName: 'Неверный формат имени',
        phoneNumber: 'Неверный формат телефона'
    }
})