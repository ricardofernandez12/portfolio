-----------------------------------------------------------------------------------------------------------------------
------> INFO
-----------------------------------------------------------------------------------------------------------------------

Template Name: Ethan
Design/Development: templatefoundation.com
License: Free for personal and commercial use under the Creative Commons Attribution 4.0 license


-----------------------------------------------------------------------------------------------------------------------
------> CREDITS
-----------------------------------------------------------------------------------------------------------------------

- jQuery ( https://jquery.com/ )
- Bootstrap ( http://getbootstrap.com/ )
- Scroll Reveal ( https://scrollrevealjs.org/ )
- Featherlight ( https://noelboss.github.io/featherlight/ )
- SmoothScroll For Websites ( https://github.com/galambalazs/smoothscroll-for-websites )
- Google Font Poppins ( https://fonts.google.com/specimen/Arapey )
- Font Awesome ( http://fontawesome.io/ )
- Demo Images ( https://unsplash.com/ https://www.pexels.com/ )


-----------------------------------------------------------------------------------------------------------------------
------> NOTICE
-----------------------------------------------------------------------------------------------------------------------

- Contact form only works in a server environment.


/** 9. Content Area --> Contact
*******************************************************************/
#contact #contact-form input,
#contact #contact-form textarea,
#contact #contact-form button {
    font-size: 2rem;
    margin-bottom: 3.4vh;
    transition: .3s ease;
    color: #fff;
    border: none;
    border-bottom: 2px solid #fff;
    border-radius: 0;
    outline: none !important;
    background: none;  /* Ensure background is none */
    box-shadow: none !important;
}

#contact #contact-form input.error,
#contact #contact-form textarea.error {
    border-color: red;
}

/* Additional styling to ensure consistency */
#contact #contact-form input,
#contact #contact-form textarea {
    background-color: rgba(255, 255, 255, 0.1); /* Slightly transparent background */
    color: #fff; /* Text color white */
}

#contact #contact-form input:focus,
#contact #contact-form textarea:focus {
    background-color: rgba(255, 255, 255, 0.2); /* Slightly more opaque on focus */
}

#contact #contact-form
{
    position: relative;
}

#contact #contact-form .fhp-input
{
    display: none;

    pointer-events: none;

    opacity: 0;
}

#contact #contact-form input,
#contact #contact-form textarea,
#contact #contact-form button
{
    font-size: 2rem;

    margin-bottom: 3.4vh;

    -webkit-transition: .3s ease;
         -o-transition: .3s ease;
            transition: .3s ease;

    color: #fff;
    border: none;
    border-bottom: 2px solid #fff;
    border-radius: 0;
    outline: none !important;
    background: none;
    -webkit-box-shadow: none !important;
            box-shadow: none !important;
}

#contact #contact-form.success input,
#contact #contact-form.success textarea,
#contact #contact-form.success button
{
    border: none;
}

#contact #contact-form.success input,
#contact #contact-form.success textarea,
#contact #contact-form.success button
{
    line-height: 0;

    height: 0;
    margin: 0;
    padding: 0;

    opacity: 0;
}

#contact #contact-form input::-webkit-input-placeholder,
#contact #contact-form textarea::-webkit-input-placeholder
{
    color: #fff;
}

#contact #contact-form input:-ms-input-placeholder,
#contact #contact-form textarea:-ms-input-placeholder
{
    color: #fff;
}

#contact #contact-form input::-ms-input-placeholder,
#contact #contact-form textarea::-ms-input-placeholder
{
    color: #fff;
}

#contact #contact-form input::placeholder,
#contact #contact-form textarea::placeholder
{
    color: #fff;
}

#contact #contact-form input.error,
#contact #contact-form textarea.error
{
    border-color: red;
}

#contact #contact-form input
{
    line-height: 3.2em;

    height: 3.4em;
    padding: 0;
}

#contact #contact-form textarea
{
    line-height: 1.7em;

    min-width: 100%;
    max-width: 100%;
    height: 8em;
    margin-bottom: 4.4rem;
    padding: 0;
    padding-top: 1em;
}

#contact #contact-form button
{
    line-height: 3.2em;

    position: relative;

    display: inline-block;
    overflow: hidden;

    width: auto;
    height: 3.2em;
    margin-bottom: 0;
    padding: 0;

    border: none !important;
    background: none !important;
}

#contact #contact-form button .circle
{
    font-size: 1em;
    line-height: 5rem;

    position: relative;

    display: inline-block;
    overflow: hidden;

    width: 5rem;
    height: 5rem;
    margin-left: 1em;

    vertical-align: middle;

    border: 2px solid #fff;
    border-radius: 100%;
}

#contact #contact-form button .circle i
{
    position: absolute;
    top: 50%;
    left: 0;

    width: 100%;

    -webkit-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
            transform: translateY(-50%);
    text-align: center;
}

#contact #contact-form button .circle i:first-child
{
    -webkit-transform: translate(-100%,-50%);
        -ms-transform: translate(-100%,-50%);
            transform: translate(-100%,-50%);
}

#contact #contact-form button:hover .circle i:first-child
{
    -webkit-transition: .15s ease;
         -o-transition: .15s ease;
            transition: .15s ease;
    -webkit-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
            transform: translate(0,-50%);
}

#contact #contact-form button .circle i:last-child
{
    -webkit-transform: translate(0,-50%);
        -ms-transform: translate(0,-50%);
            transform: translate(0,-50%);
}

#contact #contact-form button:hover .circle i:last-child
{
    -webkit-transition: .15s ease;
         -o-transition: .15s ease;
            transition: .15s ease;
    -webkit-transform: translate(100%,-50%);
        -ms-transform: translate(100%,-50%);
            transform: translate(100%,-50%);
}


#contact #contact-form .success-message
{
    font-size: 2rem;
    line-height: 0;

    position: relative;
    bottom: 0;
    left: 0;

    height: 0;
    margin-top: -1.6em;
    padding: 0 2em;

    -webkit-transition: .2s ease;
         -o-transition: .2s ease;
            transition: .2s ease;
    pointer-events: none;

    opacity: 0;
    color: #fff;
    border: 2px solid limegreen;
    border-radius: 0;
    background: none;
}

#contact #contact-form.success .success-message
{
    line-height: 6em;

    height: 6em;

    pointer-events: all;

    opacity: 1;
}

#contact #contact-form .success-message i
{
    font-size: 2.4rem;

    margin-right: .7em;
}
