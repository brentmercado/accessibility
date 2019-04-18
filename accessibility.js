var body = document.querySelector('body');
var nav = document.querySelector('nav');
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
var mobileMenuList = document.querySelector('.mobile-menu__list');
var previousFocus;

mobileMenuBtn.addEventListener('click', toggleMobileNav);

// tab trap global vars
var tabElements;
var firstTabElement;
var lastTabElement;

nav.addEventListener('focusin', focusMobileNav);
nav.addEventListener('focusout', focusOutMobileNav);

function focusMobileNav(event) {
    if (event.target === mobileMenuBtn) {
        if (mobileMenuList.style.display !== 'block') {
            mobileMenuBtn.style.backgroundImage = "url(./menu_icon_focus.png)";
        } else {
            mobileMenuBtn.style.backgroundImage = "url(./close_icon_focus.png)";
        }   
    }
}

function focusOutMobileNav(event) {
    if (event.target === mobileMenuBtn) {
        if (mobileMenuList.style.display !== 'block') {
            mobileMenuBtn.style.backgroundImage = "url(./menu_icon.png)";
        } else {
            mobileMenuBtn.style.backgroundImage = "url(./close_icon.png)";
        }
    } 
}

function toggleMobileNav() {
    // if mobile nav is open
    if (mobileMenuList.style.display === 'block') {
        // close the nav menu
        mobileMenuList.style.display = 'none';
        // set the focus back to menu button
        // change img back to focus-img
        mobileMenuBtn.style.backgroundImage = "url(./menu_icon_focus.png)";
    } else {
        // open the nav menu
        mobileMenuList.style.display = 'block';
        mobileMenuBtn.style.backgroundImage = "url(./close_icon_focus.png)";
        // gather tabbable items
        // listen to tab keys pressed 
    }
}



