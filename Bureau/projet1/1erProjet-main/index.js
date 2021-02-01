var navig = document.getElementById("main");

var menu = navig.offsetTop;

function myFunction() {
    if (window.pageYOffset >= menu) {
        document.body.style.paddingTop = navig.offsetHeight + 'px';
        navig.classList.add("menunav")


    } else {
        document.body.style.paddingTop = 0;
        navig.classList.remove("menunav");

    }
}