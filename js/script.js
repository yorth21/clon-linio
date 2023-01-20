/* Mostrar menu desktop */

let menuBar  = document.getElementById("menuBar")

menuBar.onmouseenter = function (e) {
    if (screen.width > 768) {
        document.getElementById('desplegable').classList.remove('disable');
        document.getElementById('fondo').classList.remove('disable');
    }
}

menuBar.onmouseleave = function (e) {
    if (screen.width > 768) {
        document.getElementById('desplegable').classList.add('disable');
        document.getElementById('fondo').classList.add('disable');
    }
}
