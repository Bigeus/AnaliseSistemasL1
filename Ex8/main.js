function qtdVogais(frase) {
    let vogalCounter = 0;
    for (let i = 0; i < frase.length; i++) {
        let letra = frase.charAt(i).toLowerCase(); 
        if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
            vogalCounter += 1;
        }
    }
    return vogalCounter;
}


let palavra = window.prompt("Digite uma palavra:");
console.log("Sua palavra possui " + qtdVogais(palavra) + " vogais");