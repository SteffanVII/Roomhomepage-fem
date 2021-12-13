const button = document.querySelector(".nav_toggle");

button.addEventListener( "click", function() {
    document.querySelector("header nav").classList.toggle("active");
    this.querySelector("img").classList.toggle("active");
} );

window.addEventListener( "resize", function() {
    if ( window.innerWidth > 945 ) {
        document.querySelector("header nav").classList.remove("active");
        document.querySelector(".nav_toggle img").classList.remove("active");
    }
} );

document.querySelector('.attribution_container').addEventListener('click', function() {
    this.classList.toggle('active');
} );