document.querySelector('#myForm').addEventListener('submit', function (event) {
    event.preventDefault();
});

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const id = params.get('id');

if (id) {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var idade = document.getElementById('idade').value;


    fetch(`${urlServer}${id}`)
        .then(response => response.json())
        .then(data => {
            nome.value = data.nome;
            email.value = data.email;
            idade.value = data.idade;
        });


    document.querySelector('#btn-cadastrar').innerHTML = 'Atualizar';

    document.querySelector('#btn-cadastrar').onclick = atualizar;
}

function atualizar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var idade = document.getElementById('idade').value;

    const cliente = JSON.stringify({
        "nome": nome,
        "email": email,
        "idade": idade
    })

    fetch(`${urlServer}${id}`, {
        method: "PUT",
        body: cliente,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(window.alert("Cadastro Atualizado com Sucesso! 😃"))
        .finally(window.location.href = 'index.html')
}

function cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var idade = document.getElementById('idade').value;

    const cliente = JSON.stringify({
        "nome": nome,
        "email": email,
        "idade": idade,
    })

    fetch(`${urlServer}`, {
        method: 'POST',
        body: cliente,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(window.alert("Cliente Cadastrado com Sucesso! 😃"))
        .finally(window.location.href = 'index.html')
}