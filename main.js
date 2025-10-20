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