console.log('hello world');


let prevScrollpos = window.pageYOffset; // pageYOffset is a read-only window property that returns the number of pixels the document has been scrolled vertically.
window.onscroll = function() { // The onscroll event occurs when an element's scrollbar is being scrolled.
    let currentScrollPos = window.pageYOffset; 
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0"; // The querySelector() method returns the first element that matches a specified CSS selector(s) in the document.
    } else {
        document.querySelector(".navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos; // The onscroll event occurs when an element's scrollbar is being scrolled.
}
