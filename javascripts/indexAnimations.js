function backToTop(){
    console.log("ae")
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
}

let logo = document.getElementsByClassName('icon')[0];
let body = document.getElementById('body');
let prosliScroll = 0

function sakrijLogo(){
    let navHoveran = nav.matches(':hover')
    console.log(navHoveran)
    if(window.scrollY > prosliScroll && !navHoveran ) logo.classList.add('transparent');
    else logo.classList.remove('transparent');
    prosliScroll = window.scrollY;
}
let nav = document.getElementById('nav');
function otkrijLogo(){console.log("ebnter");logo.classList.remove('transparent');}

//intersection observer code

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry.isIntersecting)
        if(entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target) }
    })
}, {
    rootMargin: "-150px"
})

setTimeout(()=>{
    elements = document.querySelectorAll('.fader')
    elements.forEach(element => {
        observer.observe(element)
    })
}, 1300)


setTimeout(()=>{
    raniji = document.querySelectorAll('.ranija_animacija')
    raniji.forEach(rani => {rani.classList.add('show')})
},300)


setTimeout(()=>{
    malo_kasniji = document.querySelectorAll('.malo_kasnija_animacija')
    malo_kasniji.forEach(el => {el.classList.add('show')})
},500)


















/*


// prikazivanje side navbara

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

//pillupam landing header i pokazem paragrafe
let landing_header = document.getElementById("landing_header")
let landing_paragraphs = document.getElementById("landing_paragraphs")

setTimeout(()=>{
    landing_header.classList.add("pullup")
    landing_paragraphs.classList.add("show")
}, 1000)



//animacija dijela sa strelicom

let header_1 = document.getElementById("naslov_1");
let header_2 = document.getElementById("naslov_2");
let header_3 = document.getElementById("naslov_3");
let header_4 = document.getElementById("naslov_4");
let header_5 = document.getElementById("naslov_4");

let paragraf_1 = document.getElementById("tekst_1");
let paragraf_2 = document.getElementById("tekst_2");
let paragraf_3 = document.getElementById("tekst_3");
let paragraf_4 = document.getElementById("tekst_4");
let paragraf_5 = document.getElementById("tekst_5");

let wrapper_strelica = document.getElementById("strelica_section");
let main = document.getElementById("main")

document.addEventListener("scroll",()=>{
    console.log(window.scrollY, "  ", main.scrollHeight - screen.height)
    if(wrapper_strelica.offsetTop <= window.scrollY) console.log("radi");
})


 */