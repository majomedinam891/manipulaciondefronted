let palabraInput = document.getElementById("palabraInput")
let crearBoton = document.getElementById("crearBoton")
let resultado = document.getElementById("resultado")

crearBoton.addEventListener("click", (e) => {

    let palabraInvertida = "";
    let palabra = palabraInput.value.replaceAll(" ", "").toLowerCase()
    resultado.innerHTML = "";
    
    for (let i = palabra.length -1; i>= 0; i--) {
        palabraInvertida += palabra[i]
    }
    if (palabra == palabraInvertida) {
        resultado.innerHTML += `${palabra} es un palindromo`
        console.log("es palindromo")
    } else {
        resultado.innerHTML += `${palabra} no es un palindromo`
    }
})