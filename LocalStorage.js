let nombre = 'Pepito'

localStorage.setItem('nombre', nombre)

let persona = {
    nombre: "Pepito",
    edad: 30,
    correo: "pepito@gmail.com"
}

localStorage.setItem("Persona", JSON.stringify(persona))