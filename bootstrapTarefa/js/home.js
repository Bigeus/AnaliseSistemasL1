document.addEventListener('DOMContentLoaded', () => {
    const endpoint = 'https://66302758c92f351c03d9246f.mockapi.io/Cliente';
    const cardContainer = document.getElementById('card-container');

    // Função para carregar os clientes
    const loadClients = async () => {
        try {
            const response = await fetch(endpoint);
            const clients = await response.json();
            cardContainer.innerHTML = '';
            clients.forEach(client => {
                cardContainer.innerHTML += `
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-body">
                                <h5 class="card-title">${client.nome}</h5>
                                <p class="card-text">Email: ${client.email}</p>
                                <p class="card-text">Idade: ${client.idade}</p>
                                <a href="form.html?id=${client.id}" class="btn btn-primary">Editar</a>
                                <button class="btn btn-danger" onclick="deleteClient(${client.id})">Excluir</button>
                            </div>
                        </div>
                    </div>
                `;
            });
        } catch (error) {
            console.error('Erro ao carregar clientes:', error);
        }
    };

    // Função para deletar um cliente
    window.deleteClient = async (id) => {
        try {
            await fetch(`${endpoint}/${id}`, { method: 'DELETE' });
            loadClients();
        } catch (error) {
            console.error('Erro ao excluir cliente:', error);
        }
    };

    loadClients();
});
