//Deração de função de modo literal.
//Toda função sempre retorna underfaned
function fun1() {

}

//Armazanar em uma variavel
const fun2 = function () {

}

//Function em uma Array
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log(array[0](2,3))

const obj = {}
obj.falar = function () {return 'Ola!'}
console.log(obj.falar())

//Passar função como paramitro
function run (fun) { 
    fun()

}
run(function () {console.log('Executando...')})

//UM função pode retornar e retornar uma função
function soma (a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)