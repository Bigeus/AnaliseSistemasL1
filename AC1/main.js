class Main {
    usuarios;

    constructor() {
        this.usuarios = [];
    }

    addUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    addLivroUsuario(idUsuario, codigo, titulo, autor) {
        const usuario = this.usuarios.find(p => p.getId() === idUsuario);
        if (usuario) {
            const livro = new Livro(codigo, titulo, autor);
            usuario.inserirLivroEmprestado(livro); // Corrija para "inserirLivroEmprestado"
        }
    }

    transferirLivro(idUsuarioOrigem, idUsuarioDestino, codigo) {
        const usuarioOrigem = this.usuarios.find(a => a.getId() === idUsuarioOrigem);
        const usuarioDestino = this.usuarios.find(a => a.getId() === idUsuarioDestino);

        const livro = usuarioOrigem.getLivroEmprestado(codigo);
            usuarioDestino.inserirLivroEmprestado(livro);
            usuarioOrigem.removerLivroEmprestadoByCodigo(codigo);


    }

    mostrarTodosOsUsuarios() {
        this.usuarios.forEach(item => {
            console.log(item.imprimirCompleto());
        });
    }
}


const main = new Main();
main.addUsuario(new Usuario(1, "Carlos"));
main.addLivroUsuario(1, 1, "Dom Quixote", "Miguel de Cervantes");
main.addLivroUsuario(1, 2, "Orgulho e Preconceito", "Jane Austen");
main.mostrarTodosOsUsuarios();
main.addUsuario(new Usuario(2, "Ana"));
main.transferirLivro(1, 2, 1);
main.mostrarTodosOsUsuarios();
