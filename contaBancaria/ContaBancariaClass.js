class contaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo = this.saldo + valor;
    }

    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo = this.saldo - valor;
        }
    }

    saldoAtual() {
        return this.saldo + console.log(`Seu saldo atual é: ${this.saldo}`);
    }
}
