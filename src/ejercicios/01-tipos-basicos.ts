




let habilidades:string[] = ["Javascript","Typescript","Angular"]
habilidades.push("React");


interface Personaje{
    nombre:string,
    pv:number,
    habilidades: string[],
    domicilio: string;
}


const personaje: Personaje={
    nombre: "Juan",
    pv: 100,
    habilidades: ["Javascript","Typescript","Angular"],
    domicilio: "hola"
}

const personaje2: Personaje={
    nombre: "Pedro",
    pv: 99,
    habilidades: ["Javascript","Typescript","Angular"],
    domicilio: "adios"
}