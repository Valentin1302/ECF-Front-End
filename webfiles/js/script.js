
let chevron = document.createElement("p");

chevron.textContent = "<";
document.body.appendChild(chevron);



window.addEventListener("scroll", () => {

    if (window.scrollY > 800) {
        chevron.classList.add("visible");
    }
    else {
        chevron.classList.remove("visible");
    }
});



chevron.addEventListener("click", () => {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
})


//burgerMenu
const links = document.querySelectorAll("nav li");

icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});




