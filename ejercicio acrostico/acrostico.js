let palabraInput = document.getElementById("palabraInput")
let botonCrear = document.getElementById("botonCrear")
let resultado = document.getElementById("resultado")

botonCrear.addEventListener("click", (e) =>{
    let palabra = palabraInput.value
    for (let i = 0; i < palabra.length; i++) {
        resultado.innerHTML += `<p>${palabra[i]} <input id="caja${i}" /></p>`
    }
    resultado.innerHTML += "<button id='finalizar'>Finalizar</button>"
    // resultado.innerHTML += 
})

