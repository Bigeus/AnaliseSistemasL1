let header = document.getElementById('titulo');
console.log(header.innerHTML);

let paragrafo = document.querySelector('p');
console.log(paragrafo.innerHTML);
paragrafo.innerHTML = 'Mudei o texto do paragrafo agr mas tem q escrever bastante pra aparecer direito'

let button = document.querySelector('.btn');
button.innerHTML = 'Mudei o texto do botão malandro kkkkkklkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk';

let segundoItem = document.getElementById('segundoItem');
segundoItem.innerHTML = 'Segundo item da lista aqui ó'


let elementosLi = document.querySelectorAll('li');
console.log(elementosLi.innerHTML);

// let imagem = document.querySelector('img').src = 'Blue PLate.png'

function changeImg() {
    document.querySelector('img').src = 'Blue Plate.png'
}

function changeHeader() {
    document.getElementById('titulo').classList.add('minhaClasse');
}