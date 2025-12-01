const pop_up = document.getElementsByClassName("menu_popup");
pop_up[0].addEventListener("click", ()=> {
    pop_up[0].classList.replace("show", "hide");
})

const showupMenu = document.getElementById("showupMenu");
showupMenu.addEventListener("click", ()=> {
    pop_up[0].classList.replace("hide", "show");
})