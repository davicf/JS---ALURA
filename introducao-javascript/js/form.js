var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){    
    event.preventDefault(); //tirar configurações padrões do evento de clique

    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);
    console.log(paciente);
    
    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);
    console.log(erros);
    if(erros.length > 0) {
        exibeMensagensDeErro(erros);        
        return;
    }
    //adicionando o paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    //innerHTML edita todo conteúdo de texto, incluindo tags, atributos, classe e etc.
    mensagensErro.innerHTML = ""; //Apaga as mensagens de erro após um cadastro con sucesso.
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //Apaga as antigas mensagens de erro pelas novas.

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

// Extraindo informações do paciente do form
function obtemPacienteDoFormulario(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
   return paciente;
}


// cria a Tr e a TD do form
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");  

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));  //appendChild Coloca nomeTd como filho de pacienteTr, colocando uma coluna na linha.
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

//monta uma TD com o valor e a classe dela
function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){    

    var erros = [];

    if(!validaPeso(paciente.peso)) 
        erros.push("Peso inválido"); //push => empurra um valor para o array.

    if(!validaAltura(paciente.altura)) 
        erros.push("Altura inválida");  
        
    if(paciente.nome.length == 0)
        erros.push("O nome não pode ser em branco");

    if(paciente.gordura.length == 0)
        erros.push("A gordura não pode ser em branco");

    if(paciente.peso.length == 0)
        erros.push("Peso não pode ser em branco");
    
    if(paciente.altura.length == 0)
        erros.push("Altura não pode ser em branco");

    return erros;
}