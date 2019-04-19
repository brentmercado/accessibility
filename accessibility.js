var body = document.querySelector('body');
var nav = document.querySelector('nav');
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
var mobileMenuList = document.querySelector('.mobile-menu__list');
var previousFocus;

mobileMenuBtn.addEventListener('click', toggleMobileNav);

nav.addEventListener('focusin', focusMobileNav);
nav.addEventListener('focusout', focusOutMobileNav);

// Global Tab Elements
var tabElements;

// BUG ON USING MOUSE WILL CAUSE FOCUS TO LEAVE MENU BUTTON
// AND IT WILL CHANGE WHEN IT SHOULDN'T

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
    if (mobileMenuList.style.display === 'block') {
        closeMobileNav();
    } else {
        openMobileNav();
        
        mobileTabTrap();
    }
}

function closeMobileNav() {
    mobileMenuList.style.display = 'none';
    mobileMenuBtn.style.backgroundImage = "url(./menu_icon_focus.png)";

    nav.removeEventListener('keydown', tabTrap);
    mobileMenuBtn.focus()
}

function openMobileNav() {
    mobileMenuList.style.display = 'block';
    mobileMenuBtn.style.backgroundImage = "url(./close_icon_focus.png)";
}

function mobileTabTrap() {
    // Set global global tabbable variable
    tabElements = Array.from(document.querySelectorAll('.mobile-menu-btn, .mobile-menu__item a'));

    // listen to tab keys pressed 
    nav.addEventListener('keydown', tabTrap);
}

function tabTrap(event) {
    var firstTabElement = tabElements[0];
    var lastTabElement = tabElements[tabElements.length - 1];
    if (event.key === 'Tab') {
        // Shift held down
        if (event.shiftKey) {
            // Backward Tab
            if (document.activeElement === firstTabElement) {
                event.preventDefault();
                lastTabElement.focus();
            }
        } else {
            // Forward Tab
            if (document.activeElement === lastTabElement) {
                event.preventDefault();
                firstTabElement.focus();
            }
        }
    } else if (event.key === 'Escape') {
        closeMobileNav();
    }
}