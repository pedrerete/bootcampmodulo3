


interface personajeDC{
    nombre: string,
    pv: number,
    mostrarPV:() => void;
}

const personajedeDC: personajeDC={
    nombre: "Juan",
    pv: 100,
    mostrarPV:function()  {console.log('Puntos de vida: ' + this.pv)} 
}

function curar(personaje: personajeDC, curarX:number){
    personaje.pv +=curarX;
    console.log('Se curaron: ' + curarX + " puntos de vida")
}

personajedeDC.mostrarPV();
curar(personajedeDC,100)
personajedeDC.mostrarPV();
