const frases = [ 
    "Soy un jugador profesional de geometry dash",
    "Me gusta mucho programar",
    "Soy un estudiante universitario",
    "Interesado por la programación en JAVA",
    "Tengo una hermosa novia llamada Nathalia",
    "Quiero participar en el Huawei ICT Competition"
];

function mostrarFraseAleatoria() {
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    const frase = document.getElementById('frase');
    frase.textContent = fraseAleatoria;
    frase.classList.remove('hidden');
}


mostrarFraseAleatoria();

setInterval(mostrarFraseAleatoria, 5000);

