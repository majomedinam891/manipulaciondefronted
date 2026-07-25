let caja = document.getElementById("caja")
let boton = document.getElementById("boton")
let resultado = document.getElementById("resultado")

boton.addEventListener("click", (event) => {
    let numeroinput = caja.value

    for (let i = 1; i <= 10; i++) {
        console.log(numeroinput * i)
        resultado.innerHTML += `<p> Su multiplicacion es: ${numeroinput} x ${i} = ${numeroinput*i} </p>`
    }
    
})