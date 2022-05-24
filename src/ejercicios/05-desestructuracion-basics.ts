interface Detalle{
    autor:string,
    anio: number
}
interface Reproductor{
    volumen:number,
    segundo:number,
    cancion:string,
    detalles:Detalle;
}
const detalle:Detalle = {
    autor:"autor1",
    anio:2022
}
const reproductor:Reproductor = {
    volumen:90,
    segundo:53,
    cancion:"cancion1",
    detalles:detalle
}
const {volumen,detalles,detalles:{anio,autor}} = reproductor;

/* console.log("el volumen actual es " + anio)
console.log(`hola como estas ${reproductor.volumen}`)

const dbz: string[] = ["goku", "vegeta", "krillin", "bulma", "yamcha"]
const [p1,p2,p3,...resto] = dbz 
console.log(resto) */

