function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco


}

function Telefone(ddd, numero){
    this.ddd = ddd,
    this.numero = numero
    Object.defineProperty(this, 'descricao', {
        get: function(){
            return 'DDD: ' + this.ddd + 'Numero: ' + this.numero
        }
    })

}

function Endereco(uf, cidade, rua, num){
    this.uf = uf
    this.cidade = cidade
    this.rua = rua
    this.num = num

}


let cli = new Cliente()