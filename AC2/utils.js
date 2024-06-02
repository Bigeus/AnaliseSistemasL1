const urlServer = "https://66302758c92f351c03d9246f.mockapi.io/Usuario/";

let currentUrl = window.location.href;


function moveToCadastrar(){
    window.location.href = 'Cadastrar.html';
}

function moveToHome(){
    window.location.href = 'index.html';
    localStorage.clear();
}

function atualizaNomePlaceholder(){

   const nome = localStorage.getItem('nome');
   let p = document.createElement("p");
   p.innerHTML = `Olá ${nome}!`;

   const placeholder = document.getElementById('nomePlaceholder');
   placeholder.appendChild(p);
}

atualizaNomePlaceholder();
