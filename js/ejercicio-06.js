const precio = +prompt(`Ingrese un precio en dólares`)

const pesos = precio*1130
console.log(pesos)
const iva = pesos * 0.21
console.log(iva)
let total = pesos + iva

alert (`Precio final en pesos: ${total}`)