/*
 * @description jQuery plugin to return if a single element is in the viewport
 * @param checkAllElement Set to 'True' to verify if all element boundaries are in the viewport. Default is 'False'.
 */
$.fn.isInViewport = function(checkAllElement = false) {
    var rect = this[0].getBoundingClientRect();

    if (checkAllElement) {
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    
    return (
        (rect.top >= 0 && rect.left >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth)) ||
        (rect.top >= 0 && rect.right >= 0 && rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)) ||
        (rect.bottom >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.left <= (window.innerWidth || document.documentElement.clientWidth)) ||
        (rect.bottom >= 0 && rect.right >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth))
    );
}
