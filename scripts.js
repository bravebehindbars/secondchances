/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// Functionality: 
// By default, all the portfolio answers should be invisible on the screen. This should be done via JS
// When the user slides the slider, the portfolio answers should become visible iteratively, and also become invisible.

// Step 1: Get access to all the portfolio elements using the class name
var section_timeline = document.getElementsByClassName("hide-this")

// Print all the portfolio elements using console.log(). This is an array containing all the portfolio elements. 
console.log(section_timeline)

// Step 4: Loop over all the portfolio elements, and set the CSS display property to `none`
for (var i = 0; i < section_timeline.length; i++) {
  // Step 4.1: Iterating over each portfolio element, set the CSS display property to `none`. This sets that portfolio element invisible. 
  // To convince yourself of this functionality, you can do this manually via Inspect element
    section_timeline[i].style.display = 'none'
}

// Step 5: Get the slider value with document.getElementId(), and take the value of that HTML element. 
// Exercise: Why do we do .value after getElementById()? 
let sliderValue = document.getElementById('section-slider').value;

// Step 6: Create a variable to contain the value of the currentSliderValue. 
// This will track the value as the user slides on the interface.  
var currentSilderValue = 0;

// Step 7: Create a function to toggle elements' visibility. 
function SlideInformation(sliderValue) {
   
  for (var i = 0; i < section_timeline.length; i++) {
  // Step 4.1: Iterating over each portfolio element, set the CSS display property to `none`. This sets that portfolio element invisible. 
  // To convince yourself of this functionality, you can do this manually via Inspect element
    section_timeline[i].style.display = 'none'
}
for (var i = 0; i < sliderValue; i++) {
  // Step 4.1: Iterating over each portfolio element, set the CSS display property to `none`. This sets that portfolio element invisible. 
  // To convince yourself of this functionality, you can do this manually via Inspect element
    section_timeline[i].style.display = 'block'
}
}