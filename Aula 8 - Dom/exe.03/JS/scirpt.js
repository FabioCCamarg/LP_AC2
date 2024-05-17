/*3. Crie uma página HTML com um botão e um contador. Quando o botão é clicado, o
contador deve ser incrementado em 1 e o valor atualizado na página.*/

const button = document.querySelector('button');
const p = document.querySelector('p');
let contador = 0 ;
p.innerText = `Contador: ${contador}`;


button.addEventListener('click', () => {
    contador++;
    p.innerText = `Contador: ${contador}`;
});