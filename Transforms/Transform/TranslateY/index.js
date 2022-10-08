let runbtn = document.querySelector(".run");
let item = document.querySelector(".item");

runbtn.addEventListener("click", () => {
    item.classList.toggle("translate");
})