/* let array = ["José", "Pedro", "Joao", "Maria"];

let comA = array.find(a => a.toLocaleLowerCase().includes("a"));

let todosComA = [];
todosComA = array.filter(a => a.toLocaleLowerCase().includes("a"));

console.log(comA.toString());

console.log(todosComA.toString()); */

let animais = [];
let animal1 = new Animal("Garfield", 10);
let animal2 = new Animal("Rex", 2);
let animal3 = new Animal("George", 6);
let animal4 = new Animal("Locura", 1);
animais.push(animal1);
animais.push(animal2);
animais.push(animal3);
animais.push(animal4);

let acima5 = animais.filter(a => a.getIdade() > 5);
console.log(acima5);