const min = +prompt(`Ingresa un número de minutos`)

min !== 0

let segundos = (min*60)
let horas = (min/60)


alert (`Cantidad de segundos = ${segundos}`)
alert (`Cantidad de horas = ${horas}`)