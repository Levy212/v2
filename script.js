const sliddingPicture = document.querySelector('.appear')

window.addEventListener('scroll', ()=>{

    const {scrollTop, clientHeight} = 
    document.documentElement;

    const TopElementToTopViewport =
    sliddingPicture.getBoundingClientRect().top;

    if(scrollTop >  (scrollTop + TopElementToTopViewport).toFixed() - clientHeight * 0.8){
        sliddingPicture.classList.add('active')
        
    }
});

const sliddingRight = document.querySelector('.appearFinal')

window.addEventListener('scroll', ()=>{

const {scrollTop, clientHeight} = 
document.documentElement;

const TopElementToTopViewport =
sliddingRight.getBoundingClientRect().top;

if(scrollTop >  (scrollTop + TopElementToTopViewport).toFixed() - clientHeight * 0.8){
    sliddingRight.classList.add('active')

}
});

window.onload = function () {
    var el = document.getElementById("back-price");
    el.style.cursor = "pointer";
    el.onclick = sayHello;
}

function sayHello() {
    console.log("Hello");
    var el = document.getElementById("back-price");
    el.classList.add('reveal')
    const grille = document.getElementById("grille-tarif");
    grille.classList.add('reveal')
}

function sliddePrice(){
    const background = document.getElementById('backgroundPrice')
    const grille = document.getElementById('grille-tarif')
    console.log('price')

    background.classList.add('active');
    grille.classList.add('active');
}
