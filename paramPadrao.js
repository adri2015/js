//--------------------------------------------Padrão Antigo------------------------------------------------------------------
function soma1 (a, b, c) {
a = a || 1//O valor padrão 'a' será 1, caso a valor na para
b = b || 1
c = c || 1
return a + b + c
}

function soma2 (a, b, c) {
    a = a !== undefined ? a : 1 
    b = 1 in arguments ? b : 1//Se existir um segundo indice no arguments atribua o valor a variável b.Se não atribua o valor 1
    c = isNaN(c) ? 1 : c//se o c não for um número(isNaN) a atribua o valor padrão 1. Se for number atribua o valor da variável c. 
return a + b + c
}

//---------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------Padrão Novo-------------------------------------------------------------------
function soma3(a = 1, b = 1, c = 1) {//Por padrão os argumentos falsos recebem o valor 1. 
    return a + b + c
}
console.log(soma1())
console.log(soma2())
console.log(soma3()) 

/* function GetNumb (min,max) {
    intNumb = Math.random() * (max - min) + min
    return Math.floor(intNumb)
}
let a = GetNumb(0,10)
let b = GetNumb(0,10)
let c = GetNumb(0,10)
console.log(a,b,c)
function exemplo (Name, LastName) {
    Name = isNaN(Name) ?'Campo de Nome está vazio!' : Name
    LastName = LastName || 'Campo de Sobrenome está vazia!'
    return (Name + LastName)
    
}

 */