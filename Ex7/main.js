function inverteFrase(frase){
    let inverted = "";
    for(let i = frase.length-1; i >=0; i--){
        inverted += frase.charAt(i).toLowerCase();
  }
    return inverted;
}

let frase = window.prompt("Escreva uma frase:");
console.log("Frase invertida: " + inverteFrase(frase));