jQuery(window).on('load', function() {
	"use strict";
    
    
    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");   
    
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 700 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);
        
    });
    
    
    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated", { 
        duration: 1100,
        delay: 0,
        origin: "left",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementById("contact-form").addEventListener("submit", function(event) {
            event.preventDefault();
            var form = event.target;
            
            var formData = new FormData(form);
            var xhr = new XMLHttpRequest();
            xhr.open(form.method, form.action);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    form.reset();
                    document.querySelector(".success-message").style.display = "block";
                    setTimeout(function() {
                        document.querySelector(".success-message").style.display = "none";
                    }, 4000);
                } else {
                    alert("Oops! There was a problem submitting your form.");
                }
            };
            xhr.send(formData);
        });
    });
    
})