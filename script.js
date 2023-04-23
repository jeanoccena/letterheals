window.addEventListener('scroll', function (evt) {

    // This value is your scroll distance from the top
    var distance_from_top = document.body.scrollTop;

    // The user has scrolled to the tippy top of the page. Set appropriate style.
    if (distance_from_top === 0) {
        document.getElementById('flap').style.top = '0px';
        document.getElementById('flap').style.transform = 'scaleY(1)';
        document.querySelector('#message').classList.remove("scroll-welcome");
        document.querySelector('h1.message').classList.remove("scroll-welcome");
        document.querySelector('a.welcome-link').classList.remove("scroll-welcome-button");
        document.querySelector('#welcome').classList.remove("remove-height");
    }

    // The user has scrolled down the page.
    if (distance_from_top > 150) {
        document.getElementById('flap').style.top = '750px';
        document.getElementById('flap').style.transform = 'scaleY(-1)';
        document.querySelector('#message').classList.add("scroll-welcome");
        document.querySelector('h1.message').classList.add("scroll-welcome");
        document.querySelector('a.welcome-link').classList.add("scroll-welcome-button");
        document.querySelector('#welcome').classList.add("remove-height");
    }

    if (distance_from_top > 750) {
        document.querySelector('.nav-bar').style.position = 'sticky';
        document.querySelector('.nav-bar').style.top = '0px';
    }

});


// Get the container element
var btnContainer = document.getElementById("nav-bar");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav-menu-item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");

        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }

        // Add the active class to the current/clicked button
        this.className += " active";
    });
}

const hamburger = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


const buttonWelcome = document.getElementsByClassName('lh');
const buttonMessage = document.querySelector("#welcome-message > div > h1");

buttonWelcome[0].addEventListener("click", changeMessage);

function changeMessage() {
    buttonMessage.textContent = "Comfort is coming!";
}




