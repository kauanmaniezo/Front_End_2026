const img = document.getElementById("main");
const btn = document.getElementById("btn");

const estados = {
    normal: "animal.jpg",
    comendo: "animal_co.jpg",
    fome30: "animal_fome1.jpg",
    fome60: "animal_fome2.jpg"
};

let contador = 0;
let intervalo = null;

function initConta() {
    if (intervalo) clearInterval(intervalo);

    intervalo = setInterval(() => {
        contador++;

        console.log("Tempo:", contador);

        if (contador === 30) {
            img.src = estados.fome30;
        }

        if (contador === 60) {
            img.src = estados.fome60;
        }
    }, 1000);
}

function alimenta() {
    img.src = estados.comendo;

    contador = 0; 

    setTimeout(() => {
        img.src = estados.normal;
    }, 2000);
}
initConta();