let buttons = document.querySelectorAll('a', '.btn');
let minhaURL = window.location.href;

for(let bt of buttons){
    if(bt.href === minhaURL){
        bt.classList.add('active');
    }
}