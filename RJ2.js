function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco
    Object.defineProperty(this, 'descricao', {
        get: function(){
            return "-----------------------\n"+ "Informações do cliente: \n" + this.nome + "\n-----------------------\n-----------------------" 
        }
    })
    Object.defineProperty(this, 'getName', {
        get: function(){
            return this.nome
        }
    })
    Object.defineProperty(this, 'setName', {
        set: function(value){
            this.nome = value.toLowerCase()
        }
    })
    Object.defineProperty(this, 'setMail', {
        set: function(value){
            this.email = value.toLowerCase()
        }
    })

}

function Telefone(ddd, numero){
    this.ddd = ddd,
    this.numero = numero
    Object.defineProperty(this, 'descricao', {
        get: function(){
            return 'DDD: ' + this.ddd + '\nNumero: ' + this.numero + '\n-----------------------'
        }
    })
    
    Object.defineProperty(this, 'setDDD', {
        set: function(value){
            this.ddd = value
        }
    })

    Object.defineProperty(this, 'setNum', {
        set: function(value){
            this.numero = value
        }
    })
}

function Endereco(uf, cidade, rua, num){
    this.uf = uf
    this.cidade = cidade
    this.rua = rua
    this.num = num
    Object.defineProperty(this, 'setRua', {
        set: function (value) {
            this.rua = value.toLowerCase()
        }
    })
    Object.defineProperty(this, 'setNum', {
        set: function (value) {
            this.num = num.toLowerCase()
        }
    })
    Object.defineProperty(this, 'setCidade', {
        set: function (value) {
            this.cidade = value.toLowerCase()
        }
    })
    Object.defineProperty(this, 'setEstado', {
        set: function (value) {
            this.uf = value.toUpperCase()
        }
    })
    Object.defineProperty(this, 'descricao', {
        get: function() {
            return 'Endereço: \nRua: ' + this.rua + '\nNúmero: ' + this.num + '\nCidade: ' + this.cidade + '\nEstado: ' + this.uf.toUpperCase() + "\n\n"
        }
    })
}


let telefone = new Telefone('11', '987654321')
let endereco = new Endereco('sp', 'Sao jose dos campos', 'AV. Cesare Lattes', 1233)
let cliente = new Cliente('Adair Esperidiao Walmer', telefone, 'adair.esp@mail.com', endereco)

console.log(cliente.descricao)
console.log(telefone.descricao)
console.log(endereco.descricao)



let cli = new Cliente('Leonardo Adilson', telefone, 'leo2233@gmail.com', endereco)
let cli2 = new Cliente('Morgana Jansen', telefone, 'morg003@gmail.com', endereco)
let cli3 = new Cliente('Ana Clara de Ramos', telefone, 'ana3@gmail.com', endereco)

let lista = [cli, cli2, cli3]

function order(lista) {
    return lista.sort(function(cli1, cli2) {
        if (cli1.nome.toLowerCase() < cli2.nome.toLowerCase()) { 
            return -1
        }
        if (cli1.nome.toLowerCase() > cli2.nome.toLowerCase()) {
            return 1 
        }
        return 0
    })
}

let cliOrdem = order(lista) 

cliOrdem.forEach(cliente => {
    console.log(cliente.getName)
});