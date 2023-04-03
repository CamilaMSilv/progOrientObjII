var ContaBancaria = /** @class */ (function () {
    function ContaBancaria(numero, saldo, limite) {
        this.numero = numero;
        this.saldo = saldo;
        this.limite = limite;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        this.saldo += valor;
    }; /*No método depositar, estamos adicionando um valor ao saldo da conta, que é um atributo privado, mas pode ser acessado livremente pelo método público*/
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor <= this.saldo + this.limite) {
            this.saldo -= valor;
            console.log("Saque de R$ ".concat(valor, " realizado com sucesso."));
        }
        else {
            console.log('Saldo insuficiente.');
        }
    }; /*No método sacar, estamos verificando se o valor solicitado está dentro do limite disponível na conta, que é um atributo protegido, e depois subtraindo esse valor do saldo*/
    ContaBancaria.prototype.consultarSaldo = function () {
        console.log("Saldo: R$ ".concat(this.saldo, "."));
    }; /*No método consultarSaldo, estamos apenas exibindo o saldo atual, que é um atributo privado*/
    ContaBancaria.prototype.verificarLimite = function () {
        console.log("Limite: R$ ".concat(this.limite, "."));
    };
    return ContaBancaria;
}());
var minhaConta = new ContaBancaria(123456, 1000, 500);
// Acesso público
minhaConta.depositar(500);
minhaConta.consultarSaldo();
// Acesso privado
// minhaConta.verificarLimite(); // Erro: Property 'verificarLimite' is private
// Acesso protegido
// console.log(minhaConta.limite); // Erro: Property 'limite' is protected
/*Por fim, tentamos acessar o método verificarLimite e o atributo limite diretamente fora da classe ContaBancaria, mas como eles são privados e protegidos, respectivamente, essas operações geram erros*/
