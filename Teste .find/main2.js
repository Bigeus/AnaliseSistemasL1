class Animal {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#idade = idade;
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    getIdade() {
        return this.#idade;
    }
}