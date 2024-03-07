class Automovel {
    #codigo;
    #marca;
    #modelo;

    constructor(codigo, marca, modelo) {
        this.#codigo = codigo;
        this.#marca = marca;
        this.#modelo = modelo;
    }

    getCodigo() {
        return this.#codigo;
    }

    getMarca() {
        return this.#marca;
    }

    getModelo() {
        return this.#modelo;
    }

    imprimir() {
        console.log(`Codigo: ${this.#codigo}\n Marca: ${this.#marca}\n Modelo: ${this.#modelo}`);
    }
}