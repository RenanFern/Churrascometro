// Carne - 400gr por pessoa + de 6horas - 650
// Cerveja - 1200ml por Pessoa + 6 horas - 2000ml
// Refrigerante/água - 1000ml por pessoa + 6 horas 1500ml

// Crianças valem por 0,5


let inputAdultos = document.getElementById('adulto');
let inputCriancas = document.getElementById('crianca');
let inputDuracao = document.getElementById('duracao');
let resultado = document.getElementById ('resultado')


function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;


    let qtdCarne = carne(duracao) * adultos + (carne(duracao) / 2 * criancas);
    let qtdCerveja = cerveja(duracao) * adultos;
    let qtdRefrigerante = refrigerante(duracao) * adultos + (refrigerante(duracao) / 2 * criancas);

    resultado.innerHTML =  `<div class="inline"> <img class="imagem" src="./imagens/carne.png"/> <p> ${qtdCarne / 1000} KG de carne</p> </div>`;
    resultado.innerHTML += `<div class="inline1"> <img class="imagem" src="./imagens/cerveja.png"/> <p> ${Math.ceil(qtdCerveja / 355 )} Latas de cerveja </p> </div>`;
    resultado.innerHTML += `<div class="inline2"> <img class="imagem" src="./imagens/refri.png"/> <p> ${Math.ceil(qtdRefrigerante / 2000)} Garrafas de bebidas </p> </div>`;


}

function carne(duracao){
    if(duracao >= 6){
        return 650;
     
    }else{
        return 450
    }

}

function cerveja(duracao){
    if(duracao >= 6){
        return 2000;
    
    }else{
        return 1200;
    }
}

function refrigerante(duracao){
    if(duracao >= 6){
        return 1500;
    
    }else{
        return 1000;
    }
}

