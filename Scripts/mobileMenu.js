// Hamburger menu
const hamburgerMenus = document.querySelectorAll(".hamburger-menu");
const regularNav = document.querySelector(".regular-nav");
const menuContainer = document.querySelector(".mobile-menu-container");


hamburgerMenus.forEach(menu => {
    menu.addEventListener("click", () => {
        menu.classList.toggle("open");
        menuContainer.classList.toggle("open");
        
        // Add or remove classes to trigger animations
        if (menuContainer.classList.contains("open")) {
            menuContainer.classList.add("fade-in");
            menuContainer.classList.remove("fade-out");
            menuContainer.classList.add("show");
            regularNav.classList.add("menu-open");
            regularNav.classList.remove("close-menu");
        } else {
            menuContainer.classList.add("fade-out");
            menuContainer.classList.remove("fade-in");
            setTimeout(() => {
                menuContainer.classList.remove("show");
            }, 800);
            regularNav.classList.remove("menu-open");
            regularNav.classList.add("close-menu");
        }
    });
});


// Bron: beetje hulp van ChatGPT met bugs fixen
// Mobile menu
const menuHeaders = document.querySelectorAll('.menu-header');
const menuItems = document.querySelectorAll('.mobile-menu-container > ul > li');

function closeOpenSubmenus() {
    const allSubmenuContainers = document.querySelectorAll('.submenu-container');
    const areAllSubmenusClosed = Array.from(allSubmenuContainers).every(submenu => !submenu.classList.contains('open'));
    
    if (areAllSubmenusClosed) {
        menuItems.forEach(item => {
            item.classList.remove('inactive');
            console.log("removing class")
        });
    }
    
    document.querySelectorAll('.submenu-container.open').forEach(openSubmenu => {
        openSubmenu.classList.remove('open');
        openSubmenu.style.maxHeight = "0";
    });
    
    menuItems.forEach(item => {
        item.classList.remove('inactive');
    });
    
    // Reset the rotation of all icons
    document.querySelectorAll('.menu-header .icon-rotate').forEach(icon => {
        icon.style.transform = 'rotate(0deg)';
    });
}

menuHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const submenu = header.nextElementSibling;
        const isSubMenuOpen = submenu.classList.contains('open');
        
        if (!isSubMenuOpen) {
            closeOpenSubmenus();
        }
        
        submenu.classList.toggle('open');
        const maxHeight = submenu.classList.contains('open') ? submenu.scrollHeight + "px" : "0";
        submenu.style.maxHeight = maxHeight;
        
        menuItems.forEach(item => {
            if (item !== header.parentNode) {
                item.classList.add('inactive');
            }
        });
        
        header.parentNode.classList.remove('inactive');
        
        // Rotate the icon when the submenu is open
        const iconRotate = header.querySelector('.icon-rotate');
        if (iconRotate) {
            iconRotate.style.transform = isSubMenuOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        }
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeOpenSubmenus();
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.menu-header')) {
        closeOpenSubmenus();
    }
});