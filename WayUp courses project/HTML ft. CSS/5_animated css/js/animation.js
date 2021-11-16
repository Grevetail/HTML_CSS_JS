const arr = document.querySelectorAll('.skill-box');

setTimeout(function() {
    $('.logo').addClass("bounceIn");
    $('.logo').addClass("opacity");
}, 250);

setTimeout(function() {
    $('.title-head').addClass("bounceInLeft");
    $('.desktop').addClass("bounceInRight");
    $('.title-head').addClass("opacity");    
    $('.desktop').addClass("opacity");
}, 350);

for(let i = 0; i < arr.length; i++) {
    $(window).scroll(function() {
        let imagePos = $(arr[i]).offset().top;
        let topOfWindow = $(window).scrollTop();
            
        if(imagePos < topOfWindow + 650) {
            setTimeout(function() {
                $(arr[i]).addClass("bounceInDown");
                $(arr[i]).addClass("opacity");
            }, i*500)
        }
    })
}