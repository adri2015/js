/*  function fistFaction(nun) {
    intnun = nun
    for (let i = 1; i < nun; i++) {
        intnun *= i   
    }
    return intnun
}
console.log(fistFaction(8))  */

/* function funPotenciacao (intBase, intExpoente){
    intresultado = Math.pow(intBase, intExpoente)
    return intresultado
}
console.log(funPotenciacao(2,2))*/

function GetNumb(intMin, intMax) {
    intNumb = Math.random() * (intMax - intMin) + intMin
    return Math.floor(intNumb)
}

console.log(GetNumb(0, 10))

