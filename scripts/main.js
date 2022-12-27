$(document).ready(function(){
    $('.aniview').AniView({
        animateClass: 'animate__animated'
    });
    toggleSiteColor('#a3c9ff');
});

// The scroll listener.
var $w = $(window).scroll(function () {
    var scrollVal = $w.scrollTop();

    toggleClass("#scroll-label", "hide-scroll-label", scrollVal, 50);
    toggleClass("#hello-world-container", "hide-hello-world", scrollVal, 50);
    toggleClass("#left-feature-div", "full-size", scrollVal, 50);
    toggleClass("#top-content", "visible", scrollVal, 50);
    toggleClass("#top-bio-bar", "bar-larger", scrollVal, 55);
});

var options = {
    animateClass: 'animate__animated',
    animateThreshold: 100,
    scrollPollInterval: 20
}
$('.aniview').AniView(options);

function toggleClass(attribute, clss, scrollVal, threshold) {
    if (scrollVal > threshold) {
        $(attribute).addClass(clss);
    } else {
        $(attribute).removeClass(clss);
    }
}

function toggleSiteColor(color) {
    // Update the color responsive elements
    var colorResponsiveElements = document.getElementsByClassName('color-toggleable');
    for (const element of colorResponsiveElements) {
        element.style.backgroundColor = color;
    }
    var colorResponsiveText = document.getElementsByClassName('color-toggleable-text');
    for (const element of colorResponsiveText) {
        element.style.color = color;
    }

    // Remove any enabled toggles
    var colorToggles = document.getElementsByClassName('color-toggle');
    for (const element of colorToggles) {
        element.classList.remove('color-toggle-enabled');
    }

    // Enable the toggle that should be enabled
    var selectedElement = document.getElementById(color);
    selectedElement.classList.add('color-toggle-enabled');
}
