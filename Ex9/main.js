function validaEmail(email) {
    let confirm1 = false;
    let confirm2 = false;

    for (let i = 0; i < email.length; i++) {
        if (email.charAt(i) === "@") {
            confirm1 = true;
        }
        if (email.charAt(i) === ".") {
            confirm2 = true;
        }
    }

    if (confirm1 && confirm2 == true) {
        console.log("Email validado com sucesso.");
        return true;
    } else {
        console.log("Formato de email inválido.");
        return false;
    }
}

let email = window.prompt("Digite um email.");
validaEmail(email);