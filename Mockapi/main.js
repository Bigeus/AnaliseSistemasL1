function getAnimalsAndPopulate() {
    fetch('https://66302758c92f351c03d9246f.mockapi.io/Animal/')
        .then(res => res.json())
        .then(data => {
            const listItems = document.querySelectorAll('.list li');
            data.forEach((animal, index) => {
                if (index < listItems.length) {
                    listItems[index].textContent = `${animal.id} - ${animal.name} - ${animal.age} anos - Raça: ${animal.race}`;
                }
            });
        })
        .catch(error => console.error('Erro ao buscar dados da API:', error));
}

getAnimalsAndPopulate();

function postAnimal() {
    const animal = JSON.stringify({
        "name": "Totó",
        "age": 12,
        "race": "cachorro"
    });

    fetch("https://66302758c92f351c03d9246f.mockapi.io/Animal/", {
        method: "POST",
        body: animal,
        headers: {
            "Content-Type": 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.error('Erro:', err));
} 