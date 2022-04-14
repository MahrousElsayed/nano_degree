/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active




document.querySelector("nav").style.backgroundColor="black";

const mySections = document.getElementsByTagName("section");
const myNavList = document.querySelector("#navbar__list");

document.addEventListener("DOMcontentLoaded",navMenu);

function navMenu() {
        for (i = 0; i < mySections.length; i++) {
        list = document.createElement('li');
        list.innerHTML = `<a href="#${mySections[i].id}" class ="menu__link" >${mySections[i].dataset.nav}</a>`;
        myNavList.appendChild(list);
    }
}
navMenu();

document.addEventListener("scroll",scrollFunction);
function scrollFunction() {
    for(const section of mySections){
        const sectionTop = section.getBoundingClientRect().top;
        const link = document.querySelector(`a[href="#${section.id}"]`);

        if (sectionTop >0 && sectionTop < 400){
            section.classList.add("your-active-class");
            link.classList.add("active");
        }else {
            section.classList.remove("your-active-class");
            link.classList.remove("active");
        }
    }
    
}












