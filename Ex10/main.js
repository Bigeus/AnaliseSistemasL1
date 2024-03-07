function verifyPalindromo(palavra){
    let inverted = "";
    for(let i = palavra.length-1; i >=0; i--){
        inverted += palavra.charAt(i).toLowerCase();
  }
    palavra = palavra.toLowerCase();

    if(palavra === inverted){
        console.log("A palavra é um palíndromo.");
        return true;
    }else{
        console.log("A palavra NÃO é um palíndromo.");
        return false;
    }
}

let palavra = window.prompt("Digite uma palavra.");
verifyPalindromo(palavra);