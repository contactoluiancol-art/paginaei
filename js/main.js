const contadores = document.querySelectorAll(".contador");

const iniciarContadores = () => {

    contadores.forEach(contador => {

        const objetivo = +contador.dataset.target;

        let actual = 0;

        const incremento = objetivo / 80;

        const actualizar = () => {

            actual += incremento;

            if(actual < objetivo){

                contador.textContent = Math.floor(actual) + "+";

                requestAnimationFrame(actualizar);

            }else{

                contador.textContent = objetivo;

            }

        };

        actualizar();

    });

};


const cobertura = document.querySelector(".cobertura");

let ejecutado = false;

window.addEventListener("scroll", () => {

    const posicion = cobertura.getBoundingClientRect().top;

    const pantalla = window.innerHeight;

    if(posicion < pantalla - 100 && !ejecutado){

        iniciarContadores();

        ejecutado = true;

    }

});



window.addEventListener("scroll",()=>{

    document
    .querySelector(".header")
    .classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

/* ==========================================
   REVEAL SCROLL
========================================== */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(elemento => {

        const top = elemento.getBoundingClientRect().top;

        const visible = window.innerHeight - 100;

        if(top < visible){

            elemento.classList.add("active");

        }

    });

});


/* ==========================================
   SLIDER QUIENES SOMOS
========================================== */

const slides = document.querySelectorAll(".quienes-slider");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide++;

    if(currentSlide >= slides.length){

        currentSlide = 0;

    }

    slides[currentSlide].classList.add("active");

}, 5000);

const mapa = document.querySelector(".mapa-img");

mapa.addEventListener("mousemove",(e)=>{

    const rect = mapa.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;

    const y = ((e.clientY - rect.top) / rect.height) * 100;

    mapa.style.transformOrigin = `${x}% ${y}%`;

    mapa.style.transform = "scale(2)";

});

mapa.addEventListener("mouseleave",()=>{

    mapa.style.transform = "scale(1)";

    mapa.style.transformOrigin = "center center";

});

const track = document.querySelector(".slider-track");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let posicion = 0;

nextBtn.addEventListener("click", () => {

    posicion -= 50;

    if(posicion < -100){

        posicion = 0;

    }

    track.style.transform = `translateX(${posicion}%)`;

});

prevBtn.addEventListener("click", () => {

    posicion += 50;

    if(posicion > 0){

        posicion = -100;

    }

    track.style.transform = `translateX(${posicion}%)`;

});