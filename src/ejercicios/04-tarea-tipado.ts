const superHeroe:superHeroe = {
    nombre: "Batman",
    edad: 30,
    direccion:{
        calle: "calle1",
        pais: "pais1",
        ciudad: "ciudad1",
        numero:100
        },
    mostrarDireccion(){
        return this.nombre + " " +  this.direccion.calle + " " + this.direccion.ciudad + " " + this.direccion.pais + this.direccion.numero;
    }
}

interface superHeroe{
    nombre: string,
    edad: number,
    direccion: {calle:string;pais:string;ciudad:string;numero:number},
    mostrarDireccion:()=> string;
}


const direccion= superHeroe.mostrarDireccion();
console.log(direccion)
