alert("E ai galera ");
console.log("ola mundo ");
var titulo = document.querySelector(".titulo");

titulo.textContent = "MDC Academia";

console.log(titulo.textContent);

console.log("ola mundo");
console.log("ola mundo");
console.log("ola mundo");




//var trCliente = document.querySelector(".cliente");

var clientes = document.querySelectorAll(".cliente");

for(var i=0;i<clientes.length;i++){
    
    var ehValido = true;
    var trCliente = clientes[i];

    var tdPeso = trCliente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = trCliente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = trCliente.querySelector(".info-imc");
    var imc = peso / (altura * altura);


    if(peso < 0 || peso > 250 ){
        tdImc.textContent = "Peso Inválido !"
        trCliente.classList.add("peso-invalido");
        console.log("peso invalido ! ");
        ehValido = false;
    }

    if(altura < 0 || altura > 2.5){
        tdImc.textContent = "Altura Inválida !"
        trCliente.classList.add("altura-invalida");
        console.log("altura invalida ! ");
        ehValido = false;
    }

    if(ehValido){
        tdImc.textContent = imc.toFixed(2);
    }
}

