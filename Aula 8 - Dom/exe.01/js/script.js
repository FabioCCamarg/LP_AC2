/* 1. Crie uma página HTML com um botão e uma <div>. Quando o botão é clicado, a cor de
fundo da <div> deve mudar para uma cor aleatória.

Obs.: Pode definir uma array com 5 cores que serão trocadas no click do botão. Para a escolha pode-se usar a classe
Math.randow (para escolher randomicamente) e Math.floor (arredondamento).*/

const button = document.querySelector('button');
const colorDiv = document.querySelector('div');

const availableColors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

button.addEventListener('click', (e) => {
    
    const random = Math.floor(Math.random() * availableColors.length);
    const randomColor = availableColors[random];
    colorDiv.style.backgroundColor = randomColor;
});


