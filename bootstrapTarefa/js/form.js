document.addEventListener('DOMContentLoaded', () => {
    const endpoint = 'https://66302758c92f351c03d9246f.mockapi.io/Cliente';
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('id');

    const clientForm = document.getElementById('client-form');
    const nomeInput = document.getElementById('nome');
    const emailInput = document.getElementById('email');
    const idadeInput = document.getElementById('idade');

    // Se o ID estiver na URL, carrega os dados do cliente
    if (clientId) {
        fetch(`${endpoint}/${clientId}`)
            .then(response => response.json())
            .then(client => {
                nomeInput.value = client.nome;
                emailInput.value = client.email;
                idadeInput.value = client.idade;
            })
            .catch(error => console.error('Erro ao carregar cliente:', error));
    }

    clientForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const clientData = {
            nome: nomeInput.value,
            email: emailInput.value,
            idade: idadeInput.value,
        };

        try {
            if (clientId) {
                // Edita o cliente
                await fetch(`${endpoint}/${clientId}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(clientData)
                });
            } else {
                // Cria um novo cliente
                await fetch(endpoint, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(clientData)
                });
            }
            window.location.href = 'home.html';
        } catch (error) {
            console.error('Erro ao salvar cliente:', error);
        }
    });
});
