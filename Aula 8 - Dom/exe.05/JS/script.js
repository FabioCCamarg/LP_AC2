/*5. Crie uma página HTML que conte o número de palavras em uma frase ou parágrafo
inserido pelo usuário. Exiba o resultado na página.*/

// Selecionando Elemento
const texto = document.querySelector('.texto');
const button = document.querySelector('button');
const result = document.querySelector('.result');

// Events and Function 
button.addEventListener('click', () => {

    textoInput = texto.value.trim();

    if(textoInput !== "") {
        const palavras = textoInput.split(" ");
        const numPalavras = palavras.length;
        result.innerText = `Número de palavras: ${numPalavras}`;
    } else {
        result.innerText = "Insira um Text para contar as palavras!";
    }
    
});