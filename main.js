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

//ejercicio 3
function mayorDeDos(num1,num2){
    if(num1>num2){
        return(num1)
    }if(num2>num1){
        return(num2)
    }if(num1=num2){
        return("son iguales")
    }
}

const mayor=mayorDeDos (7,7)
console.log(mayor)

//ejercicio 4
function esDivisiblePorCinco (num1){
    if(num1%5==0){
        return(true)
    }else {
        return(false)
    }
}

let multiplo=esDivisiblePorCinco(5)
console.log(multiplo)
multiplo=esDivisiblePorCinco(12)
console.log(multiplo)

//ejercicio 5
function clasificarNota (num1){
    if(num1>=0&&num1<=100){
        if(num1<=100&&num1>=90){
            return("excelente")
        }else if(num1<90&&num1>=70){
            return("Bueno")
        }else if(num1<70&&num1>=50){
            return("Regular")
        }else{
            return("insuficiente")
        }


    }else{
        return("no calificable")
    }
}
let nota=clasificarNota(100)
console.log(nota)

