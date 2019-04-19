var body = document.querySelector('body');
var nav = document.querySelector('nav');
var mobileMenuBtn = document.querySelector('.mobile-menu-btn');
var mobileMenuList = document.querySelector('.mobile-menu__list');
var previousFocus;

mobileMenuBtn.addEventListener('click', toggleMobileNav);

nav.addEventListener('focusin', focusMobileNav);
nav.addEventListener('focusout', focusOutMobileNav);

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
        
        // TAB TRAPPER
        // gather tabbable items
        var tabElements = Array.from(document.querySelectorAll('.mobile-menu-btn, .mobile-menu__item a'));
        var firstTabElement = tabElements[0];
        var lastTabElement = tabElements[tabElements.length - 1];
        // listen to tab keys pressed 
        nav.addEventListener('keydown', mobileTabTrap);

        function mobileTabTrap(event) {
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
            }
        }

        // event.shiftKey
        // event.key
    }
}



