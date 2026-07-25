let color = document.getElementById("color")
let numero = document.getElementById("numero")

numero.addEventListener("keyup", () => {
    let numeroCambio = "texto" + numero.value
    let numeroCambiObj = document.getElementById(numeroCambio)
    numeroCambiObj.style.color = color.value
})