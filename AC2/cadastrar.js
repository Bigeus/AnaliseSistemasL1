document.querySelector('#myForm').addEventListener('submit', function (event) {
    event.preventDefault();
});

function cadastrarUsuario() {
    const emailInput = document.getElementById("emailInput");
    console.log(emailInput.value)

    const senhaInput = document.getElementById("senhaInput");
    console.log(senhaInput.value)

    const nomeInput = document.getElementById("nomeInput");
    console.log(nomeInput.value)

    if (!emailInput.value || !senhaInput.value || !nomeInput.value) {
        window.alert(`ALGUM CAMPO ESTÁ FALTANTE`)
    } else {

        const usuario = JSON.stringify({
            "nome": nomeInput.value,
            "email": emailInput.value,
            "senha": senhaInput.value
        })

        fetch(urlServer, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: usuario
        })
            .then(res => console.log(`RESPOSTA: ${res}`))
      //      .then(() => window.location.href = 'index3.html')
            .catch(error => window.alert(error))
    }
}