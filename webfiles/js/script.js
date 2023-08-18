
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



// SAVOIR +



    let boutonSavoir = document.querySelector("#savoir");
    let contenuCaché = document.createElement("p");
    contenuCaché.id = "caché";
    contenuCaché.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, illum! Neque illo aut consectetur dolorem odio voluptate, quos natus, vero iusto magnam magni sunt doloremque corruptiaccusantium."
    
    
    boutonSavoir.addEventListener("click",() =>{
        if (contenuCaché.style.display === "none") {
            contenuCaché.style.display = "block";
        } else {
            contenuCaché.style.display = "none";
        }
    });
 console.log(contenuCaché);

