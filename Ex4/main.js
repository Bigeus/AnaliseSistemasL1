let nomeInput = window.prompt("Digite seu nome completo.");

let partes = nomeInput.toLowerCase().split(" ");
let primeiro = partes[0];
let ultimo = partes[partes.length - 1];
let email = primeiro + "." + ultimo + "@facens.br";

console.log(email);