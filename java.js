const boton = document.getElementById("boton")
boton.addEventListener("click", getInfo)
function getInfo(){
    const celular = document.querySelector("#celular")
    const email = document.getElementById("email")
    const direccion = document.getElementById("direccion")
    const instagram = document.getElementById("instagram")


    console.log(celular.textContent)
    console.log(email.textContent)
    console.log(direccion.textContent)
    console.log(instagram.textContent)
}

function cambiarColor(){
    const hab = document.getElementById("habilidades")

    const colores = ["rgb(178, 118, 171)", "rgb(172, 138, 158)", "rgb(196, 158, 125)", "rgb(155, 148, 121)"]

    hab.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)]
    
}

