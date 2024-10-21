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
// Select the navbar and sections
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// Build the nav dynamically
sections.forEach((section, index) => {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.classList.add("menu__link");
  anchor.textContent = "Section " + (index + 1);
  anchor.href = "#section" + (index + 1);
  listItem.appendChild(anchor);
  navList.appendChild(listItem);
});

// Helper function to check if a section is in the viewport
function isInViewport(section) {
  const rect = section.getBoundingClientRect();
  return rect.top >= 0 && rect.top <= window.innerHeight / 2;
}

// Add active class to the section in the viewport
function setActiveSection() {
  sections.forEach((section) => {
    const correspondingLink = navList.querySelector(`a[href="#${section.id}"]`);
    if (isInViewport(section)) {
      section.classList.add("active");
      correspondingLink.classList.add("active");
    } else {
      section.classList.remove("active");
      correspondingLink.classList.remove("active");
    }
  });
}

// Scroll event listener
window.addEventListener("scroll", setActiveSection);

// Run once on load to set the active section
setActiveSection();

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
