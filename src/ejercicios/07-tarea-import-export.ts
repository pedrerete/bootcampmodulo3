
import {Producto, calculaISV} from './06-desestructuracion-funcion'

const carritoCompra: Producto[] = [
    {
        nombre: "nombre1",
        precio:100
    },
    {
        nombre:"prod2",
        precio:200
    }
]

const [total, isv] =  calculaISV(carritoCompra)

console.log(total)
console.log(isv)
