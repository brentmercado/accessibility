var nav = document.querySelector('nav');
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
var mobileMenuList = document.querySelector('.mobile-menu__list');
var previousFocus;
var activeMobileNav = false;

// mobileMenuBtn.addEventListener('click', openMobileNav);


// tab trap global vars
var tabElements;
var firstTabElement;
var lastTabElement;

nav.addEventListener('focusin', focusMobileNav);
nav.addEventListener('focusout', focusOutMobileNav);

function focusMobileNav(event) {
    if (event.target === mobileMenuBtn) {
        mobileMenuBtn.style.backgroundImage = "url(./menu_icon_focus.png)";
    }
}

function focusOutMobileNav(event) {
    if (event.target === mobileMenuBtn) {
        mobileMenuBtn.style.backgroundImage = "url(./menu_icon.png)";
    }
}

function toggleMobileNav() {
    // if mobile nav is open
        // close the nav menu
        // set the focus back to menu button
        // change img back to focus-img

    // otherwise
        // open the nav menu
        // gather tabbable items
        // listen to tab keys pressed 
}



