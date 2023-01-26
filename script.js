/* newFunction();
function newFunction() {
    let entrada = parseInt(prompt("Digite o ano que você nasceu: "));
    alert(2023 + entrada);
    alert(typeof entrada); 
}*/

function toDark(){
    let section = document.querySelector("section");
section.classList.add("dark");
section.classList.remove("light");
}

function toLight() {
    let section = document.querySelector("section");
section.classList.add("light");
section.classList.remove("dark");
};
let nav = document.querySelector("nav");
nav.classList.add("light");


