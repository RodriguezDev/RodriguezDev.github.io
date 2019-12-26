
// The scroll listener.
var $w = $(window).scroll(function(){
    var scrollVal = $w.scrollTop();

    toggleClass("#scroll-label", "no-display", scrollVal, 30);
    toggleClass("#hello-world-label", "no-show", scrollVal, 50);
    toggleClass("#left-feature-div", "full-size", scrollVal, 50);
    toggleClass("#top-content", "visible", scrollVal, 50);
    toggleClass("#top-bio-bar", "bar-larger", scrollVal, 60);
});

// Mimics ngClass from AngularJS. Adds a class if a threshold is reached; else, remove the class.
function toggleClass(attribute, clss, scrollVal, threshold) {
    if ( scrollVal > threshold ) {   
        $(attribute).addClass(clss);
    } else {
        $(attribute).removeClass(clss);
    }
}