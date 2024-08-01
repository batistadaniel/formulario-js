// Função para mostrar o input do campo outros e marcar o radio botão "Outros"
function mostrarInputOutros() {

    // Pega a classe do campo outros
    var inputOutrosDiv = document.querySelector('.input-outros');

    // Pega o input da classe do campo outros
    var inputOutros = inputOutrosDiv.querySelector('input[type="text"]');

    // Pega a classe do campo outros
    var radioOutros = document.getElementById('outros');
    // Mostra o input do campo outros e marca o radio botão "Outros"
    inputOutrosDiv.style.display = 'inline-block';
    radioOutros.checked = true;

    // Foca o input do campo outros para que o usuario possa começar a digitar
    inputOutros.focus();
}

// Função para esconder o input do campo outros e limpar o conteúdo do input
function esconderInputOutros() {

    // Pega a classe do campo outros
    var inputOutrosDiv = document.querySelector('.input-outros');

    // Pega o input da classe do campo outros
    var inputOutros = inputOutrosDiv.querySelector('input[type="text"]');

    // Esconde o input do campo outros e limpa o conteúdo do input
    inputOutrosDiv.style.display = 'none';
    inputOutros.value = ''; 
}

// Pega o id do icone e da mensagem de alerta
let iconeMsg = document.getElementById('iconeMsg');
let msgAlerta = document.getElementById('msgAlerta');

// Array de objetos com as mensagens de alerta
const mensagens = [
    {
        msg: 'Informar o número do CPF corretamente (preenchimento obrigatório). Esse item não será obrigatório para algumas exceções, que são: estrangeirospessoa em situação de rua no momento; pessoa privada de liberdade no momento; indígena.'
    },
    {
        msg: 'Número a ser preenchido de acordo com o cartão nacional de saúde (cartão SUS) do(a) usuário(a). Caso o(a) usuário(a) SUS seja cadastrado no SISCEL - Sistema de Controle de Exames Laboratoriais, o número do cartão do SUS virá preenchido automaticamente'
    },
    {
        msg: 'Informar o número informado no Sistema de Informação de Agravos de Notificação.'
    },
    {
        msg: 'Número do Prontuário do(a) Usuário(a) SUS.'
    },
    {
        msg: ': Se a pessoa se identificar como mulher transexual, homem transexual ou travesti/mulher travesti, perguntarcom qual nome de identificação prefere ser chamado(a), se pelo nome social ou pelo nome de registro civil. Sempre se referir à pessoa pelo seu nome depreferência (preenchimento obrigatório).'
    },
    {
        msg: 'Nome completo do(a) usuário(a) SUS, sem qualquer abreviação, conforme um documento de identidade oficial(preenchimento obrigatório).'
    },
    {
        msg: 'De acordo com o decreto 8.727/2016, é a designação pela qual a pessoa travesti ou transexual se identifica e é socialmente reconhecida.Preencher apenas para os(as) usuários(as) que possuírem nome social que divirja do nome de registro.'
    },
    {
        msg: 'Nome Completo da Mãe sem qualquer abreviação (preenchimento obrigatório).'
    },
    {
        msg: 'Informar a data de nascimento do(a) Usuário(a) SUS (preenchimento obrigatório).'
    },
    {
        msg: 'Pedir ao(a) usuário(a) que refira, dentre as opções disponíveis, sua raça/cor. É importante observar que esta classificação deverá ser auto-referida. (Preenchimento obrigatório).'
    },
    {
        msg: 'Marcar de acordo com documento de identificação do(a) usuário(a).'
    },
    {
        msg: 'é a percepção que uma pessoa tem de sí como sendo homem, mulher, mulher trans, homem trans, ou travesti/mulhertravesti, independentemente de seu órgão genital de nascimento e orientação sexual. Para identidade de gênero, marque sempre como a pessoa se percebe ou se define. A resposta para esse item deve ser sempre autodeclarada, mesmo que a opinião do profissional de saúde não coincida com a declarada pelo(a) usuário(a).'
    },
    {
        msg: 'É por quem a pessoa se sente atraída afetiva e sexualmente, podendo ser pessoas do mesmo gênero (homossexual), de gênero diferente (heterossexual) ou por ambos os gêneros (bissexual). A resposta para esse item deve ser sempre autodeclarada, mesmo que a opinião do profissional de saúde não coincida com a declarada pelo (a) usuário (a).'
    },
    {
        msg: 'Nome da cidade de nascimento e UF (preenchimento obrigatório).'
    },
    {
        msg: 'Informar o país de nascimento do(a) Usuário(a) SUS (preenchimento obrigatório).'
    },
    {
        msg: 'Informar a nacionalidade do CPF do(a) Usuário(a) SUS (preenchimento obrigatório).'
    },
    {
        msg: 'Informar se o paciente estrangeiro é residente, habitante de fronteira ou não residente.'
    },
    {
        msg: 'Preencher com o correspondente ao número de anos de estudo concluídos do(a) usuário(a), dentre as faixas disponíveis. A classificação é obtidaem função do número de anos que a pessoa teve acesso a estudo, e/ou o grau que a pessoa está frequentando ou frequentou. '
    },
    {
        msg: 'Informar se o(a) usuário(a) está em situação de rua ou não.'
    },
    {
        msg: 'Informar se o(a) usuário(a) está no sistema prisional ou em outra instituição de privação de liberdade.'
    },
    {
        msg: 'O preenchimento deste campo é obrigatório e requer atenção especial dos profissionais. O profissional deverá perguntar ao usuário se ele permite que o serviço entre em contato com ele em caso de necessidade; por exemplo, se ele não vier para buscar os medicamentos em determinado mês, ou se o serviço necessitar mudar data de agendamento. '
    },
    {
        msg: 'Caso o usuário autorize o contato do serviço, deverão ser registradas as formas de contato por ele autorizadas.'
    },
    {
        msg: 'Refere-se ao endereço de residência do usuário nome da rua, avenida, entre outros. Observar que as informações de endereços (exceto município) só deverão ser preenchidas caso o usuário autorize contato'
    },
    {
        msg: 'Refere-se ao bairro de residência do(a) usuário(a).'
    },
    {
        msg: 'Introduzir o Código de Endereço Postal correspondente ao endereço de residência do(a) usuário(a).'
    },
    {
        msg: 'Refere-se ao município, cidade de residência do(a) usuário(a).'
    },
    {
        msg: 'E-mail de contato do(a) usuário(a).'
    },
    {
        msg: 'Informar se o telefone é residencial, comercial ou celular. N° do telefone deve ser precedido pelo DDD. Poderão serregistrados mais de um número.'
    },
    {
        msg: 'Informar se o telefone é residencial, comercial ou celular. N° do telefone deve ser precedido pelo DDD. Poderão serregistrados mais de um número.'
    },
    {
        msg: 'Observações referentes ao telefone informado que facilitem o contato, tais como nome do contato, horário para contato, número de whatsapp, etc., ou demais informações que forem pertinentes'
    },
    {
        msg: 'Para os(as) Usuário(as) SUS atendidos na rede pública, marque um "X" em pública, para aqueles(as) Usuário(as) SUS atendidos por médicos particulares, indique privada. (Preenchimento obrigatório).'
    },
    {
        msg: 'O(a) Usuário(a) SUS, no ato do seu cadastramento, poderá indicar pessoas autorizadas a retirar medicamentos em seu nome, quando for necessário (no máximo 3 nomes).'
    },
    {
        msg: 'Informar a data do atendimento com assinatura/carimbo de quem preencheu o formulário.'
    },
    {
        msg: 'Informar a data do atendimento com assinatura do(a) Usuário(a) SUS.'
    }
];

// Função para mostrar a mensagem de alerta
// function mostrarAlerta(numeroMensagem) {

//     // Insere a mensagem de alerta a partir do indice no array
//     msgAlerta.innerHTML = `${mensagens[numeroMensagem].msg}`;

//     // Mostra a mensagem
//     msgAlerta.style.display = 'block';

//     // Apaga a mensagem após 10 segundos
//     setInterval(() => {
//         msgAlerta.innerHTML = `${mensagens[numeroMensagem].msg}`;

//         // Apaga a mensagem
//         msgAlerta.style.display = 'none';
//     }, 10000)
// }

function mostrarAlerta(numeroMensagem) {
    // Insere a mensagem de alerta a partir do índice no array
    msgAlerta.querySelector('p').innerHTML = `${mensagens[numeroMensagem].msg}`;

    // Mostra a mensagem
    msgAlerta.style.display = 'block';
    msgAlerta.style.top = '20px'; 

    // Apaga a mensagem apos 10 segundos
    setTimeout(() => {
        msgAlerta.style.top = '-100%'; 
        setTimeout(() => {
            msgAlerta.style.display = 'none'; 
        }, 1000); 
    }, 12000);
}

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('btn-enviar').addEventListener('submit', () => {
//         window.location.href = 'sucesso.html';
//     })
// }) 

// document.getElementById('btn-enviar').addEventListener('submit', () => {
//     window.location.href = 'sucesso.html';
// })

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formularioE').addEventListener('submit', (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário
        window.location.href = 'sucesso.html';
    });
});



