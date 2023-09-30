// ScrollToTop/////////////////////////////////
let span=document.querySelector(".up");
span.onclick = function (){
    window.scrollTo({
        top: -10,
        behavior:"smooth"
        
    })
}
window.onscroll = function(){
    if(this.scrollY >= 1000){
        span.classList.add("show")
    }else{
        span.classList.remove("show")
    }
}
// Nav-Bar////////////////////////////
let solid=document.querySelector(".solid");
let responsive=document.querySelector(".responsive");
let xmark=document.querySelector(".fa-xmark");



solid.onclick =function(){
    responsive.classList.add("open")
    solid.style.display="none";
    xmark.style.display="block";

}

xmark.onclick =function(){
    this.parentElement.classList.remove("open")
    solid.style.display="block";
    xmark.style.display="none";
    solid.style.display="flex"
}



let switcherlis = document.querySelectorAll(".link-All .ul li");
let imgs = document.querySelectorAll(".img");
// console.log(switcherlis);
switcherlis.forEach((li) =>{
    li.addEventListener("click" , removeActive);
    li.addEventListener("click" , manageImgs);
});
// Remove Active Class Frome All Lis And Add To Current
function removeActive(){
    switcherlis.forEach((li) =>{
        li.classList.remove("active");
        this.classList.add("active")
    });
}
// Manage Imges
function manageImgs(){
    imgs.forEach((img) =>{
        img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) =>{
        el.style.display = "block";
    })
}




let card = document.querySelectorAll(".Plan-card");
let switcherlis2 = document.querySelectorAll("#Plan .ul2 li");


switcherlis2.forEach((pn) =>{
    pn.addEventListener("click" , removeActive2);
    pn.addEventListener("click" , manageImgs2);
});


function removeActive2(){
    switcherlis2.forEach((pn) =>{
        pn.classList.remove("Plan-active");
        this.classList.add("Plan-active")
    });
}

function manageImgs2(){
    card.forEach((card) =>{
        card.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((pm) =>{
        pm.style.display = "block";
    })
}
