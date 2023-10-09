// Fecha y hora objetivo (formato: "año/mes/día hora:minuto:segundo")
const fechaObjetivo = new Date("2023/12/31 23:59:59").getTime();

// Actualizar el contador cada segundo
const intervalo = setInterval(function() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaObjetivo - ahora;

    // Calcular días, horas, minutos y segundos restantes
    const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

    // Actualizar los elementos HTML con los valores calculados
    document.getElementById("dias").textContent = `${dias} `;
    document.getElementById("horas").textContent = `${horas} `;
    document.getElementById("minutos").textContent = `${minutos} `;
    document.getElementById("segundos").textContent = `${segundos} `;

    // Detener el contador cuando lleguemos a la fecha objetivo
    if (tiempoRestante <= 0) {
        clearInterval(intervalo);
        const contadorElemento = document.getElementById("contador");
        contadorElemento.textContent = "¡Tiempo cumplido!";
    }
}, 1000); // Actualizar cada segundo
