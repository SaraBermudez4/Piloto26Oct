console.log(localStorage.getItem('nombre'))

capturarSuma()
limpiarInputs()
function capturarSuma() {
    let boton = document.getElementById("btnSuma")

    boton.addEventListener('click', function () {
        let input1 = capturarImput1()
        let input2 = capturarImput2()

        let suma = input1 + input2;
        mostrarResultado(suma)
    })
}

function capturarImput1() {
    let input1 = Number(document.getElementById('input1').value)
    return input1
}

function capturarImput2() {
    let input2 = Number(document.getElementById('input2').value)
    return input2
}

function mostrarResultado(result) {
    document.getElementById('inputResultado').value = result
}

function limpiarInputs() {
    let limpiar = document.getElementById('btnLimpiar')
    limpiar.addEventListener('click', function () {
        document.getElementById('input1').value = ""
        document.getElementById('input2').value = ""
        document.getElementById('inputResultado').value = ""
    })
}