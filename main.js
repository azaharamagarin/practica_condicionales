/*ejercicio 1 */
function verificarNumero (num1) {
    if(num1>0){
        return("positivo")
    }else if(num1<0){
        return("negativo")
    }else{
        return("cero")}

}
const valor=verificarNumero(5)
console.log(valor)

//ejercicio 2
function puedevotar (num1){
    if(num1>=18){
        return("puede votar")
    }else{
        return ("no puede votar")}
}
const voto=puedevotar(20)
console.log(voto)