let side_icon = document.getElementById("side_icon");
let side_nav = document.getElementById("side_nav");
let side_x = document.getElementById("side_x");

side_icon.addEventListener("click", ()=>{
    side_nav.style.marginRight = "0px";
    console.log("aa")
})


side_x.addEventListener("click", ()=>{
    side_nav.style.marginRight = "-30vw";
})
