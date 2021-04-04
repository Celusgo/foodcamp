let contador1;
let contador2;
let contador3;
let contador;

function pisca(){
    const teste = document.querySelector(".variante");
    if(teste !== null){
        teste.classList.remove('esconder');
    }
    teste.classList.add('esconder');
}
function selecionarComida(x){
    const escolhido1 = document.querySelector(".selected1");
    if(escolhido1 !== null){
        escolhido1.classList.remove('selected1');
    }
    const seletor = "." + x;
    const botao = document.querySelector(seletor);
    botao.classList.add('selected1');
    if(contador1 == undefined){
        contador1 = 1;
    }
}

function pisca(m){
    const botao = document.querySelector(".check");
    if(botao == null){
        botao.classList.toggle("esconder");
    }
}

function selecionarBebida(y){
    const escolhido2 = document.querySelector(".selected2");
    if(escolhido2 !== null){
        escolhido2.classList.remove('selected2');
    }
    const seletor = "." + y;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected2');
    if(contador2 == undefined){
        contador2 = 1;
    }
}

function selecionarSobremesa(z){
    const escolhido3 = document.querySelector(".selected3");
    if(escolhido3 !== null){
        escolhido3.classList.remove('selected3');
    }
    const seletor = "." + z;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected3');
    if(contador3 == undefined){
        contador3 = 1;
    }
}


function final(){
    contador = contador1 + contador2 + contador3;
    const finalizar = document.querySelector(".botãoinferior");
    const verde = document.querySelector(".botãoverde");
    if(contador == 3 && finalizar !== null && verde !== null){
        finalizar.classList.add('esconder');
        verde.classList.remove('esconder');       
    }
}