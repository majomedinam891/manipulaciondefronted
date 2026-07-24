let titulos = document.getElementsByTagName("h1")
let colores = {
    rojo: "red",
    amarillo: "yellow",
    rosado: "pink",
    morado: "purple"
}
for (let i = 0; i<titulos.length; i++) {
    titulos[i].style.color = titulos[i].innerText;
}