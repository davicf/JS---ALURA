var titulo = document.querySelector(".titulo");
titulo.textContent = "Davi Nutricionista";

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    console.log("fui clicado");
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;
    
    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    var imc = peso / (altura * altura);
    imcTd.textContent = imc.toFixed(2);

    pacienteTr.appendChild(nomeTd);  //appendChild Coloca nomeTd como filho de pacienteTr, colocando uma coluna na linha.
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);
    
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
    console.log(pacienteTr);

}
);

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    tdImc = paciente.querySelector(".info-imc");

    var pesoCheck = true;
    var alturaCheck = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        pesoCheck = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválido");
        alturaCheck = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoCheck && alturaCheck) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }    
}