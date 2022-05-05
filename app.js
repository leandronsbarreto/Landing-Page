/*Global variables*/

const segments = document.querySelectorAll("section");
const navItems = document.querySelectorAll("nav .navigational ul li");

/*Event: add line-through line on navigational items as user scrolls up or down*/

window.addEventListener("scroll", () => {
  let initialState = "";

  segments.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

/*If statement based on the difference between 
the distance of the top of viewport and the top
as well as the height of each section*/

    if (scrollY >= sectionTop - sectionHeight / 3) {
      initialState = section.getAttribute("id");
    }
  });

/*Menu items*/

  navItems.forEach((li) => {
    li.classList.remove("action");
    if (li.classList.contains(initialState)) {
      li.classList.add("action");
    }
  });
});