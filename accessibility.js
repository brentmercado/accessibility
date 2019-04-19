var body = document.querySelector('body');
var previouslyFocus;
// Nav
var nav = document.querySelector('nav');
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
var mobileMenuList = document.querySelector('.mobile-menu__list');
// Modal Section
var modalBtn = document.querySelector('.modal-btn');
var modalOverlay = document.querySelector('.modal-overlay');
var modal = document.querySelector('.modal');
var cancelBtn = document.querySelector('.modal-btn__cancel');
var submitBtn = document.querySelector('.modal-btn__submit');

mobileMenuBtn.addEventListener('click', toggleMobileNav);
nav.addEventListener('focusin', focusMobileNav);
nav.addEventListener('focusout', focusOutMobileNav);

modalBtn.addEventListener('click', openModal);
cancelBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

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
        if (event.target === mobileMenuBtn) {
            closeMobileNav();
        } else {
            closeModal();
        }
    }
}

function openModal() {
    previouslyFocus = document.activeElement;
    modal.focus();

    //set tabbable modal elements
    tabElements = Array.from(modal.querySelectorAll('button, input'));
    body.addEventListener('keydown', tabTrap);

    modal.style.display = "block";
    modalOverlay.style.display = "block";
}

function closeModal() {
    body.removeEventListener('keydown', tabTrap);

    modal.style.display = "none";
    modalOverlay.style.display = "none";

    previouslyFocus.focus();
}