class PersonaNormal {

    constructor
        (public nombre: string,
            public direccion: string) {

    }

}

class Heroe extends PersonaNormal {
    constructor(
        public alterEgo: string,
        public NombreReal: string,
        public edad: number
    ){
        super(NombreReal,"NY")
    }
}

const IronMan = new Heroe("IronMan","Tony Stark",30)
console.log(IronMan)