/* function myDisplay(prop){
    console.log(prop)
}

function myCalculator(num1,num2, myCallBack){
    let sum = num1 + num2
    myCallBack(sum)
}


function myDisplayHTML(prop){
    document.getElementById('demo').innerHTML = prop
}

myCalculator(5,5, myDisplay)
myCalculator(5,5, myDisplayHTML)

//setInterval()

 */


// let fileName = 'data.txt'
/* let fileName = 'data.json'


fetch(fileName)
.then(res => res.json())
.then(data => console.log(data)) */
// const element = document.getElementById('demo').innerHTML = data
/* 
fetch('https://66302758c92f351c03d9246f.mockapi.io/cliente')
.then(res => res.json())
.then(data => {
    document.getElementById('cliente').innerHTML = data[0].name
})
.catch(err => console.error('Erro:', err))

function facaAlgo(data){
    console.log(data)
} */

fetch('http://localhost:3000/frase')
.then(res => res.json())
.then(data => teste(data))
.catch(err => console.log('Erro:', err))   


function teste(data) {
    document.querySelector("#demo").innerHTML = data.frase_text;
}