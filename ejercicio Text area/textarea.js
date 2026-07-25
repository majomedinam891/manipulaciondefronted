let parrafo = document.getElementById("textArea")
let resultado = document.getElementById("resultado")

parrafo.addEventListener("keyup", (e) => {

    let texto = e.target.value 
    let palabras = texto.split(" ")
    resultado.innerHTML = `palabras : ${texto.length > 0 ? palabras.length : 0}`

    let vocales = 0;
    let consonantes = 0;

    for (let i = 0; i < texto.length; i++) {

        if (texto[i] === "a" || texto[i] === "e" ||texto[i] === "i" ||texto[i] === "o" ||texto[i] === "u" ) {
            vocales++
        } else {
            consonantes++
        }
    }
    resultado.innerHTML += `Vocales ${vocales}`
    resultado.innerHTML += `Consonantes ${consonantes}`
    
})   