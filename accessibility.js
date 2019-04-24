var body = document.querySelector('body');
var previouslyFocus;
// Nav
var nav = document.querySelector('nav');
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
var mobileMenuList = document.querySelector('.nav-menu__list');
// Modal Section
var modalBtn = document.querySelector('.modal-btn');
var modalOverlay = document.querySelector('.modal-overlay');
var modal = document.querySelector('.modal');
var cancelBtn = document.querySelector('.modal-btn__cancel');
var submitBtn = document.querySelector('.modal-btn__submit');
// Live Region Section
var counter = document.querySelector('.panel');
var incrementBtn = document.querySelector('.increment-btn');
var decrementBtn = document.querySelector('.decrement-btn');


mobileMenuBtn.addEventListener('click', toggleMobileNav);
nav.addEventListener('focusin', focusMobileNav);
nav.addEventListener('focusout', focusOutMobileNav);

modalBtn.addEventListener('click', openModal);
cancelBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);

// Global Tab Elements
var tabElements;

// BUG ON USING MOUSE WILL CAUSE FOCUS TO LEAVE MENU BUTTON
// AND IT WILL CHANGE WHEN IT SHOULDN'T

function focusMobileNav(event) {
    if (event.target === mobileMenuBtn) {
        if (!mobileMenuList.className.includes('active')) {
            mobileMenuBtn.style.backgroundImage = "url(./menu_icon_focus.png)";
        } else {
            mobileMenuBtn.style.backgroundImage = "url(./close_icon_focus.png)";
        }   
    }
}

function focusOutMobileNav(event) {
    if (event.target === mobileMenuBtn) {
        if (!mobileMenuList.className.includes('active')) {
            mobileMenuBtn.style.backgroundImage = "url(./menu_icon.png)";
        } else {
            mobileMenuBtn.style.backgroundImage = "url(./close_icon.png)";
        }
    } 
}

function toggleMobileNav() {
    if (mobileMenuList.className.includes('active')) {
        closeMobileNav();
    } else {
        openMobileNav();
        
        // mobileTabTrap();
    }
}

function closeMobileNav() {
    mobileMenuList.classList.toggle('active');
    mobileMenuBtn.style.backgroundImage = "url(./menu_icon_focus.png)";

    nav.removeEventListener('keydown', tabTrap);
    mobileMenuBtn.focus()
}

function openMobileNav() {
    mobileMenuList.classList.toggle('active');
    mobileMenuBtn.style.backgroundImage = "url(./close_icon_focus.png)";
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

function incrementCounter() {
    var count = parseInt(counter.innerText);
    counter.innerText = ++count;
}

function decrementCounter() {
    var count = parseInt(counter.innerText);
    counter.innerText = --count;
}