class Main {
    #pessoas;
    constructor() {
        this.#pessoas = [];
    }

    addAutomovelPessoa(codPessoa, codAuto, marca, modelo) {
        const autoX = new Automovel(codAuto, marca, modelo);
        //    console.log(`Novo automóvel criado: ${marca} ${modelo}`);
        //     ao inves do for pode ser: let pessoa = this.#pessoas.find(p => p.codigo === codPessoa);

        for (let item of this.#pessoas) {
            if (item.getCodigo() == codPessoa) {
                item.inserirAutomovel(autoX);
                //           console.log("Carro adicionado corretamente.");
            }
        }
    }


    transfereAutomovel(codPessoaOrigem, codPessoaDestino, codAutomovel) {
        let automovel = null;
        for (let item of this.#pessoas) {
            if (item.getCodigo() == codPessoaOrigem) {
                automovel = item.getAutomovel(codAutomovel);
                if (automovel) {
                    item.removerAutomovelByCod(codAutomovel);
                } else {
                    //               console.log("Automóvel não encontrado na pessoa de origem.");
                    return;
                }
            }
        }

        for (let item of this.#pessoas) {
            if (item.getCodigo() == codPessoaDestino) {
                item.inserirAutomovel(automovel);
                //            console.log("Automóvel transferido corretamente.");
                return;
            }
        }

        console.log("Pessoa de destino não encontrada.");
    }

    mostrarTodasAsPessoas() {
        console.log("Pessoas:\n===============================");
        for (let item of this.#pessoas) {
            console.log(`Codigo: ${item.getCodigo()} \nNome: ${item.getNome()} \nCarro(s): ${item.getAutomoveis()}`);
        }
    }

    //obs
    addPessoa(pessoaX) {
        this.#pessoas.push(pessoaX);
    }
}