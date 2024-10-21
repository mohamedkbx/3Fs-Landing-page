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

  // Scroll to the section smoothly when the nav link is clicked
  anchor.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor jump

    // Scroll to the corresponding section with smooth behavior
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth", // Enable smooth scrolling
      block: "start", // Scroll to the start of the section
    });
  });

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

// Scroll event listener to update the active state when scrolling
window.addEventListener("scroll", setActiveSection);

// Run once on load to set the active section
setActiveSection();
