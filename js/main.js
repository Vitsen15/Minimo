(function () {
    var navigation = document.querySelector('.header__nav-list');
    var header = document.querySelector('.header');
    var width = window.innerWidth;

    if (width <= 767) { //hide navigation when script starts
        navigation.classList.remove('header__nav-list');
        navigation.style.display = 'none';
    }

    window.addEventListener('resize', function () {
        var width = window.innerWidth;

        if (width <= 767) {
            navigation.classList.remove('header__nav-list');
            navigation.style.display = 'none';
        } else {
            navigation.style.display = 'inline-block';
            navigation.classList.remove('header__nav-list--dropdown');
            navigation.classList.add('header__nav-list');
        }
    });

    var inc = 0;

    window.showMenu = function () {

        if (inc % 2 === 0) {
            navigation.style.display = 'block';
            navigation.classList.add('header__nav-list--dropdown');
            header.style.paddingBottom = '0';
            inc++;
        } else {
            navigation.classList.remove('header__nav-list--dropdown');
            navigation.style.display = 'none';
            header.style.paddingBottom = '15px';
            inc++;
        }
    };
})();
