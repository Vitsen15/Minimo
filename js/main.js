(function ($) {
    var navigation = document.querySelector('.header__nav-list');
    var header = document.querySelector('.header');
    var burger = document.querySelector('.header__burger');
    var maxWidthContainers = document.getElementsByClassName('max-width-container');
    var width = window.innerWidth;

    $(document).ready(function(){
        $('.slider').slick({
            autoplay: true,
            arrows: false,
            fade: true
    });
    });

    if (width <= 767) { //hide navigation when script starts
        navigation.classList.remove('header__nav-list');
        navigation.style.display = 'none';
        maxWidthContainers[1].style.paddingTop = '100px';
    }

    window.addEventListener('resize', function () {
        var width = window.innerWidth;

        if (width <= 767) {
            navigation.style.display = 'none';
            header.style.paddingBottom = '15px';
            navigation.classList.remove('header__nav-list');
            maxWidthContainers[1].style.paddingTop = '100px';
        } else {
            navigation.style.display = 'inline-block';
            maxWidthContainers[1].style.paddingTop = '0';
            header.style.paddingBottom = '60px';
            navigation.classList.remove('header__nav-list--dropdown');
            navigation.classList.add('header__nav-list');
        }
    });

    var inc = 0;

    window.showMenu = function () {

        if (inc % 2 === 0) {
            navigation.style.display = 'block';
            navigation.classList.add('header__nav-list--dropdown');
            burger.classList.add('is-active');
            header.style.paddingBottom = '0';
            inc++;
        } else {
            navigation.classList.remove('header__nav-list--dropdown');
            burger.classList.remove('is-active');
            navigation.style.display = 'none';
            header.style.paddingBottom = '15px';
            inc++;
        }
    };
})(jQuery);
