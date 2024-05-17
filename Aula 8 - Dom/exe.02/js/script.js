/*2. Crie uma página HTML com um campo de entrada de texto, um botão "Adicionar" e
uma lista de tarefas. Quando o usuário digita uma tarefa no campo de entrada e clica
no botão, a tarefa deve ser adicionada à lista.
Obs.: Para criar um novo elemento HTML utiliza-se o método createElement (Ex.: document.createElement('li');) e
para adicionar o novo elemento como filho de uma tag pode-se usar o método appendChild*/

// Selecting Elements:
const input = document.querySelector('input');
const button = document.querySelector('button');
const ul = document.querySelector('ul');

//Function/ Events

button.addEventListener('click', (e) => {
    e.preventDefault();
    const inputValue = input.value;
    const li = document.createElement('li');
    li.innerText = inputValue;
    ul.appendChild(li);

    // clearing the field Input
    input.value = '';
    input.focus();
});

