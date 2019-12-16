var titulo = document.querySelector(".titulo");
titulo.textContent = "Davi Nutricionista(versão 1.04)";



var pacientes = document.querySelectorAll(".paciente");

for(var i = 0 ; i < pacientes.length; i++) {
    
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    tdImc = paciente.querySelector(".info-imc");

    var pesoCheck = validaPeso(peso);
    var alturaCheck = validaAltura(altura);

    if(!pesoCheck){
        console.log("Peso inválido");
        pesoCheck = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaCheck){
        console.log("Altura inválido");
        alturaCheck = false;
        tdImc.textContent = "Altura Inválida!";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoCheck && alturaCheck) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }    
}

function validaPeso(peso){

    if(peso >= 0 && peso < 1000.0)
        return true;
    else
        return false;
}

function validaAltura(altura){

    if(altura >= 0 && altura <= 3.00)
        return true;
    else
        return false;

}

function calculaImc(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}