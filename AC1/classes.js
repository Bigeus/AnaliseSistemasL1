class Usuario {
    id;
    nome;

    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
        this.livrosEmprestados = [];
    }

    getId() {
        return this.id;
    }

    inserirLivroEmprestado(livro) {
        this.livrosEmprestados.push(livro);
    }

    removerLivroEmprestadoByCodigo(codigo) {
        this.livrosEmprestados = this.livrosEmprestados.filter(livro => livro.getCodigo() !== codigo);
    }

    getLivroEmprestado(codigo) {
        return this.livrosEmprestados.find(livro => livro.getCodigo() === codigo);
    }

    imprimir() {
        return `Nome: ${this.nome} Código: ${this.id}`;
    }

    imprimirCompleto() {
        const livroInfo = this.livrosEmprestados.map(livro => livro.imprimir());
        return `${this.imprimir()} \nLivros: ${livroInfo}`;
    }

}

class Livro {
    codigo;
    titulo;
    autor;

    constructor(codigo, titulo, autor) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.autor = autor;
    }

    getCodigo() {
        return this.codigo;
    }

    imprimir() {
        return `Código: ${this.codigo} Título: ${this.titulo} Autor: ${this.autor}`;
    }
}