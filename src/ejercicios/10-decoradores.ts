function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        reportingURL = "http://www...";
    };
}

@reportableClassDecorator

class Misuperclase {
    public miPropiedad: string = "prop"

    imprimir() {
        console.log("Hola mundo")
    }
}

const miClase = new Misuperclase();
console.log(miClase)