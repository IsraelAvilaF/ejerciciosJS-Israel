const valUno = +prompt(`Ingresa un valor`)
const valDos = +prompt(`Ingresa otro valor`)
const operador = prompt(`Ingrese un operador arimético (+,-,*,/)`)

let resultado;

if (operador === `+`){
    resultado = valUno + valDos
}
else if(operador === `-`){
    resultado = valUno - valDos
}
else if (operador === `*`){
    resultado = valUno * valDos
}
else if(operador === `/`){
    if (valDos !== 0){

        resultado = valUno / valDos
    }
}

alert(`El resultado es ${resultado}`)