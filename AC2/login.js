
function fazLogin() {
    const emailInput = document.getElementById("emailInput").value;
    const senhaInput = document.getElementById("senhaInput").value;

    // Validação dos campos
    if (!emailInput || !senhaInput) {
        const erro = document.getElementById('Erro');
        erro.innerHTML = "Por favor, preencha todos os campos.";
        return;
    }

    fetch(urlServer)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao acessar o servidor.');
            }
            return response.json();
        })
        .then(data => {
            const usuario = data.find(u => u.email === emailInput);
            if (usuario && usuario.senha === senhaInput) {
                console.log("Login bem-sucedido!");
                localStorage.setItem('nome', usuario.nome);
                window.location.href = 'Home.html';
            } else {
                console.log("Usuário ou senha incorretos.");
                const erro = document.getElementById('Erro');
                erro.innerHTML = "Usuário ou senha incorretos.";
            }
        })
        .catch(error => {
            console.error('Erro na requisição:', error.message);
            const erro = document.getElementById('Erro');
            erro.innerHTML = "Erro ao acessar o servidor.";
        });
}
