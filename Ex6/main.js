function dobroDoNumero (numero){
    if (numero <0 ){
    console.log("Só aceito números positivos ");
    }

    return console.log("O dobro do seu numero é: " + numero * 2);

}

let input = window.prompt("Digite um numero");
dobroDoNumero(input);