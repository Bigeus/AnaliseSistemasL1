//declaração de classe, instanciar, propriedades da classe;

/* class Cliente {
    constructor(_nome, _idade) {
        this.nome = _nome;
        this.idade = _idade;
    }

    print() {
        console.log(this.nome + " " + this.idade);
    }
} */

/* const cliente = new Cliente();
cliente.print();
cliente.nome = "Dereguejohnson";
cliente.idade = 100;
cliente.print(); */

/* const cliente = new Cliente("Fabio",50);
cliente.print(); */

//animal, nome raça idade, 

/* class Animal {
    //priva os atributos
    #nome;
    #idade;
    #raca;
    constructor(nome, idade, raca) {
        this.#nome = nome;
        this.#idade = idade;
        this.#raca = raca;
    }

    get nome(){
        this.#nome = nome;
    }
    
    set nome(nome){
        this.#nome = nome;
    }

    imprimir() {
        console.log(`Nome: ${this.#nome}\nIdade: ${this.#idade}\nRaça: ${this.#raca}`);
    }
}

const tevez = new Animal("Tevez Loco", 60, "cachorro");
tevez.imprimir(); */

class Cliente {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    imprimir() {
        console.log(`Nome: ${this.nome}\nIdade: ${this.idade}\n`)
    }
}

function todosClientes(arrayClientes) {
    for (let prop of arrayClientes) {
        prop.imprimir();
    }
}

const cliente1 = new Cliente("Jose", 55);
const cliente2 = new Cliente("Mario", 32);
const cliente3 = new Cliente("Jorge", 22);
const cliente4 = new Cliente("Bléblé", 11);
let lstClientes = [cliente1, cliente2, cliente3, cliente4];

todosClientes(lstClientes);