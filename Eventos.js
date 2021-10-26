let boton = document.querySelector('#boton')

boton.addEventListener('mouseover', function () {
    boton.style.backgroud = 'blue'
    boton.style.width = '200px'
    boton.style.height = '200px'
})

boton.addEventListener('mouseout', function () {
    boton.style.backgroud = 'green'
    boton.style.width = '20px'
    boton.style.height = '20px'
})

var input = document.getElementById('campo_nombre')

// input.addEventListener('focus', function () {
//     console.log('Estoy dentro del input');
// })

// input.addEventListener('blur', function () {
//     console.log('Estoy fuera del input');
// })

input.addEventListener('keypress', function (event) {
    console.log(`Pulsando la tecla ${String.fromCharCode(event.keyCode)}`);
})

input.addEventListener('keyup', function (event) {
    console.log(`Soltando tecla ${String.fromCharCode(event.keyCode)}`);
})
