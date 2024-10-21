// Global Variables
const navList = document.querySelector("#navbar__list");
const allSections = document.querySelectorAll("section");

// Event Listeners
window.addEventListener("scroll", activeState);

// create the dynamic navigation menu
for (let i = 0; i < allSections.length; i++) {
  const navItem = document.createElement("li");
  const navLink = document.createElement("a");
  navLink.classList.add("menu__link");
  navLink.innerText = "Section " + (i + 1);
  navLink.href = "#section" + (i + 1);

  navLink.addEventListener("click", (event) => {
    event.preventDefault();
    document.querySelector(navLink.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  navItem.appendChild(navLink);
  navList.appendChild(navItem);
}

// crete pure function for checking if the section has intersected or yet
function hasIntersect(section) {
  const intersect = section.getBoundingClientRect();
  return intersect.top >= 0 && intersect.top <= window.innerHeight / 2;
}

// perform Active State
function activeState() {
  allSections.forEach((sec) => {
    const correspondingLink = navList.querySelector(`a[href="#${sec.id}"]`);
    if (hasIntersect(sec)) {
      sec.classList.add("active");
      correspondingLink.classList.add("active");
    } else {
      sec.classList.remove("active");
      correspondingLink.classList.remove("active");
    }
  });
}

// execute Active State
activeState();
