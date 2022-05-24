export interface Producto  {
    nombre:string,
    precio:number
}

const telefono:Producto = {
    nombre:"telefono",
    precio:100
}

const tablet:Producto = {
    nombre:"tablet",
    precio:200
}

export function calculaISV(productos:Producto[]){
    let total = 0;
    productos.forEach(producto =>{
        total += producto.precio
    });
    return ([total,total*.16]) 
}

const productosArray: Producto[] = [tablet,telefono]

const [total, isv] =  calculaISV(productosArray)
/* 
console.log(total)
console.log(isv)

 */