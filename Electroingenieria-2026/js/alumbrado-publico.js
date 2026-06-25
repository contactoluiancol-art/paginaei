/*=========================================
SLIDER PREMIUM
=========================================*/

const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

const next = document.querySelector(".next");

const prev = document.querySelector(".prev");

let index = 0;

let intervalo;

/*=========================================*/

function mostrarSlide(i){

    slides.forEach(slide=>{

        slide.classList.remove("active");

    });

    dots.forEach(dot=>{

        dot.classList.remove("active");

    });

    slides[i].classList.add("active");

    dots[i].classList.add("active");

}

/*=========================================*/

function siguiente(){

    index++;

    if(index >= slides.length){

        index = 0;

    }

    mostrarSlide(index);

}

/*=========================================*/

function anterior(){

    index--;

    if(index < 0){

        index = slides.length-1;

    }

    mostrarSlide(index);

}

/*=========================================*/

next.addEventListener("click",()=>{

    siguiente();

    reiniciar();

});

prev.addEventListener("click",()=>{

    anterior();

    reiniciar();

});

/*=========================================*/

dots.forEach((dot,i)=>{

    dot.addEventListener("click",()=>{

        index = i;

        mostrarSlide(index);

        reiniciar();

    });

});

/*=========================================*/

function autoplay(){

    intervalo = setInterval(()=>{

        siguiente();

    },6000);

}

/*=========================================*/

function reiniciar(){

    clearInterval(intervalo);

    autoplay();

}

/*=========================================*/

autoplay();

mostrarSlide(index);

/*=========================================
CARRUSEL TIPOS DE PROYECTOS PREMIUM
=========================================*/

const carousel = document.querySelector(".carousel-track");

const btnNext = document.querySelector(".next-btn");

const btnPrev = document.querySelector(".prev-btn");

let autoScroll;

if(carousel){

    function iniciarCarrusel(){

        autoScroll = setInterval(()=>{

            if(carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 5){

                carousel.scrollTo({

                    left:0,

                    behavior:"smooth"

                });

            }else{

                carousel.scrollBy({

                    left:390,

                    behavior:"smooth"

                });

            }

        },4000);

    }

    function detenerCarrusel(){

        clearInterval(autoScroll);

    }

    iniciarCarrusel();

    carousel.addEventListener("mouseenter",detenerCarrusel);

    carousel.addEventListener("mouseleave",iniciarCarrusel);

    btnNext.addEventListener("click",()=>{

        carousel.scrollBy({

            left:390,

            behavior:"smooth"

        });

    });

    btnPrev.addEventListener("click",()=>{

        carousel.scrollBy({

            left:-390,

            behavior:"smooth"

        });

    });

}

/*=========================================
TARJETA CENTRAL
=========================================*/

const cards = document.querySelectorAll(".tipo-card");

function actualizarTarjetaActiva(){

    const centro = carousel.scrollLeft + (carousel.offsetWidth / 2);

    let distanciaMinima = Infinity;

    let tarjetaActiva = null;

    cards.forEach(card=>{

        const cardCentro = card.offsetLeft + (card.offsetWidth / 2);

        const distancia = Math.abs(centro - cardCentro);

        if(distancia < distanciaMinima){

            distanciaMinima = distancia;

            tarjetaActiva = card;

        }

    });

    cards.forEach(card=>{

        card.classList.remove("active-card");

    });

    if(tarjetaActiva){

        tarjetaActiva.classList.add("active-card");

    }

}

carousel.addEventListener("scroll",()=>{

    actualizarTarjetaActiva();

});

window.addEventListener("load",()=>{

    actualizarTarjetaActiva();

});