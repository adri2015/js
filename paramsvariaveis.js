function soma() {
    let soma = 1
    for (let i in arguments) {//Palavra arguments é um array que recebe todas as os paramentos recebidas pela function.
        soma *= arguments[i]//Essa linha seria a mesma formar que 'soma = soma + arguments[i]'
    }
return soma
}
console.log(soma(5.5, 5.5))
console.log(soma(1))


