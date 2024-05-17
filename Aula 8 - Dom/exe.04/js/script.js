/*4. Crie uma página HTML que possui 2 campos e 4 botões (Somar, Subtrair, Dividir e
    Multiplicar), ao colocar os números e clicar em um dos botões devem realizar a
    operação escolhida.
    Obs.: Antes de realizar a operação deve validar se foi digitado os números e se o usuário tentar dividir um número
    por zero, deve mostrar a mensagem em um alert “Impossível dividir por zero”*/
    
const field1 = document.querySelector('.field1');
const field2 = document.querySelector('.field2');

const buttonSomar = document.querySelector('.somar');
const buttonSubtrair = document.querySelector('.subtrair');
const buttonDividir = document.querySelector('.dividir');
const buttonMultiplicar = document.querySelector('.multiplicar');

const result = document.querySelector('.result');

//Somar
buttonSomar.addEventListener('click', () => {

    const field1Value = parseFloat(field1.value);
    const field2Value = parseFloat(field2.value);

    if (field1Value && field2Value !== "") {
        const soma = field1Value + field2Value;
        result.innerText = soma;
    }
    else {
        alert("Preencher todos os campos!");
    }
    clearField();
});

// Subtrair
buttonSubtrair.addEventListener('click', () => {

    const field1Value = parseFloat(field1.value);
    const field2Value = parseFloat(field2.value);

    if (field1Value && field2Value !== "") {
        const subtrair = field1Value - field2Value;
        result.innerText = subtrair;
    }
    else {
        alert("Preencher todos os campos!");
    }
    clearField();
});

// Dividir
buttonDividir.addEventListener('click', () => {

    const field1Value = parseFloat(field1.value);
    const field2Value = parseFloat(field2.value);

    if (field1Value && field2Value !== 0) {
        const dividir = field1Value / field2Value;
        result.innerText = dividir;
    }
    else {
        alert("Impossível dividir por zero!!");
    }
    clearField();
});

// Multiplicar
buttonMultiplicar.addEventListener('click', () => {

    const field1Value = parseFloat(field1.value);
    const field2Value = parseFloat(field2.value);

    if (field1Value && field2Value !== "") {
        const multiplicar = field1Value * field2Value;
        result.innerText = multiplicar;
    }
    else {
        alert("Preencher todos os campos!");
    }
    clearField();
});

const clearField = () => {
    field1.value = '';
    field2.value = '';
    field1.focus();
    
};
