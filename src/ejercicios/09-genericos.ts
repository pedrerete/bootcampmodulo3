function queTipoSoy<T>(argumento: T){
    return typeof(argumento)
}
let variable = queTipoSoy(3)

console.log(variable)