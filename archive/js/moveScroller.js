window.onscroll = function() {
    console.log(window.pageYOffset);
    var nav = document.getElementById('nav');
    if ( window.pageYOffset > "30vw" ) {
        nav.classList.add("navbar1");
    } else {
        nav.classList.remove("navbar1");
    }
}
