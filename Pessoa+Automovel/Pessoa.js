class Pessoa {
    #codigo;
    #nome;
    #automoveis;
    constructor(codigo, nome) {
        this.#nome = nome;
        this.#codigo = codigo;
        this.#automoveis = [];
    }

    getCodigo() {
        return this.#codigo;
    }

    getNome() {
        return this.#nome;
    }

    getAutomoveis() {
        //    console.log("Lista de automóveis:");
        let automoveis = "";
        if (this.#automoveis.length > 0) {
            for (let item of this.#automoveis) {
                //           console.log(`Marca: ${item.getMarca()}, Modelo: ${item.getModelo()}`);
                automoveis += `${item.getMarca()} ${item.getModelo()}, `;
            }
            automoveis = automoveis.slice(0, -2);
        }
        return automoveis;
    }


    inserirAutomovel(automovel) {
        this.#automoveis.push(automovel);
    }

    removerAutomovelByCod(codigo) {
        for (let i = 0; i < this.#automoveis.length; i++) {
            if (this.#automoveis[i].getCodigo() == codigo) {
                this.#automoveis.splice(i, 1);
                //            console.log("Automóvel removido corretamente.");
            }
        }
    }


    getAutomovel(codAutomovel) {
        for (let item of this.#automoveis) {
            if (item.getCodigo() == codAutomovel) {
                return item;
            }
        }
    }

}