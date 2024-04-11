$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});
$(document).ready(function(){
$(window).scroll(function(){
if($(this).scrollTop() > $('#home').offset().top - 0){
    $('.navbar').removeClass('navbar-light-scroll').addClass('navbar-dark-scroll');
    $('.navbar-toggler-icon').addClass('navbar-dark-scroll-icon');
}
else {
    $('.navbar').removeClass('navbar-dark-scroll').addClass('navbar-light-scroll');
    $('.navbar-toggler-icon').removeClass('navbar-dark-scroll-icon');
}
});
});


$(document).ready(function() {
    $('a[href^="#"]').on('click', function(event) {
        $('a.nav-link').removeClass('active');
        
        $(this).addClass('active');

        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

function scrollAbout() {
    const aboutSection = document.getElementById('about');
    aboutSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollServices() {
    const servicesSection = document.getElementById('services');
    servicesSection.scrollIntoView({ behavior: 'smooth' });
}