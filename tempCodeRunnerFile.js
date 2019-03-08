const pessoa = { 
    saudacao: 'Bom Dia!',
    falar(){
        console.log(this.saudacao)//Aqui o this vai referência a chave e o valor dentro objeto.
    }

}

pessoa.falar()