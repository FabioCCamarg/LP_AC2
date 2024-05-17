/*Hoje é o seu primeiro dia como desenvolvedor frontend web e como primeiro
trabalho, precisa desenvolver uma tela de cadastro de funcionário.
A tela deve ter as seguintes informações:
• Dados Pessoais
o Nome
o Telefone
o E-mail
o CPF
o RG
• Cargo
o Nome
o Salário
• Setor
o Sigla
o Nome
• Convênio  
o Nome
o Valor para o titular
o Valor para o dependente
O cargo, setor e convênio devem ser selecionados pelo usuário, onde ao selecionar
completa as demais informações. Para isso, utilize os seguintes web services:
• https://aulalp2024.free.beeceptor.com/setor
• https://aulalp2024.free.beeceptor.com/cargo
• https://aulalp2024.free.beeceptor.com/convenio
Para salvar as informações foi passado o web service:
• https://66266bc2052332d55322d1f0.mockapi.io/funcionario
Importante: O chefe requisitou que os dados de cargo, setor e convênio devem ser baixados
em paralelo no momento que a tela de cadastro é carregada com o método Promise.All.*/

async function listarCargos() {
    const response = await fetch('https://kev123.free.beeceptor.com/cargo');
    const cargos = await response.json();

    const cargoSelect = document.querySelector('#cargo');

    cargos.forEach((cargo => {
        const option = document.createElement('option');
        option.value = cargo.cargo;
        option.text = cargo.cargo;
        cargoSelect.appendChild(option);
    }));

    cargoSelect.addEventListener('change', function() {
        const selectedCargo = this.value;
        const selectedCargoData = cargos.find(cargo => cargo.cargo === selectedCargo);

        if (selectedCargoData) {
            document.querySelector('#cargoSalario').value = selectedCargoData.salario;
            document.querySelector("#setorSigla").value = selectedCargoData.setorSigla;
            document.querySelector('#setorNome').value = selectedCargoData.setorNome;
            document.querySelector("#convenio").value = "";
        } else {
            console.error("Dado de Cargo não encontrado:", selectedCargo);
        }
    });
}

// Função para listar convênios
async function listarConvenios() {
    try {
        const response = await fetch('https://aulalp2024.free.beeceptor.com/convenio'); // URL para a API de convênios
        const convenios = await response.json(); // Conversão da resposta para JSON

        const convenioSelect = document.querySelector('#convenio'); // Localiza o elemento select para convênios

        // Limpa opções existentes (caso queira atualizar a lista)
        convenioSelect.innerHTML = '<option value="">Selecione</option>';

        // Adiciona as opções de convênio ao select
        convenios.forEach(convenio => {
            const option = document.createElement('option'); // Cria elemento de opção
            option.value = convenio.nome; // Define o valor da opção
            option.text = convenio.nome; // Define o texto a ser exibido
            convenioSelect.appendChild(option); // Adiciona a opção ao select
        });

        // Evento para quando o usuário muda a seleção de convênio
        convenioSelect.addEventListener('change', function () {
            const selectedConvenio = this.value; // Valor selecionado pelo usuário
            const selectedConvenioData = convenios.find(convenio => convenio.nome === selectedConvenio); // Procura os dados do convênio correspondente

            if (selectedConvenioData) {
                document.querySelector('#valor-titular').value = selectedConvenioData.valor.titular; // Define o valor do titular
                document.querySelector('#valor-dependente').value = selectedConvenioData.valor.dependente; // Define o valor do dependente
            } else {
                console.error('Dados do convênio não encontrados:', selectedConvenio); // Exibe mensagem de erro se o convênio não for encontrado
            }
        });

    } catch (error) {
        console.error('Erro ao listar convênios:', error); // Exibe erro caso ocorra
    }
}

// Chama a função para listar convênios
listarConvenios();


listarCargos();