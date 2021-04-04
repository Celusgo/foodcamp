let contador1;
let contador2;
let contador3;
let contador;
let escolhaComida;
let escolhaBebida;
let escolhaSobremesa;
let precoComida;
let precoBebida;
let precoSobremesa;
let precoTotal = 0;


function selecionarComida(prato){
    const escolhido1 = document.querySelector(".selected1");
    if(escolhido1 !== null){
        escolhido1.classList.remove('selected1');
    }
    const seletor = "." + prato;
    const botao = document.querySelector(seletor);
    botao.classList.add('selected1');
    if(contador1 == undefined){
        contador1 = 1;
    }

    const itemComida = document.querySelector(".comida .selected1 .opção .food");
    escolhaComida = itemComida.innerHTML;
    const valorComida = document.querySelector(".comida .selected1 .opção .price");
    precoComida = valorComida.innerHTML;
}


function selecionarBebida(liquido){
    const escolhido2 = document.querySelector(".selected2");
    if(escolhido2 !== null){
        escolhido2.classList.remove('selected2');
    }
    const seletor = "." + liquido;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected2');
    if(contador2 == undefined){
        contador2 = 1;
    }

    const itemBebida = document.querySelector(".bebida .selected2 .opção .drink");
    escolhaBebida = itemBebida.innerHTML;
    const valorBebida = document.querySelector(".bebida .selected2 .opção .price");
    precoBebida = valorBebida.innerHTML;
}

function selecionarSobremesa(doce){
    const escolhido3 = document.querySelector(".selected3");
    if(escolhido3 !== null){
        escolhido3.classList.remove('selected3');
    }
    const seletor = "." + doce;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected3');
    if(contador3 == undefined){
        contador3 = 1;
    }

    const itemSobremesa = document.querySelector(".sobremesa .selected3 .opção .dessert");
    escolhaSobremesa = itemSobremesa.innerHTML;
    const valorSobremesa = document.querySelector(".sobremesa .selected3 .opção .price");
    precoSobremesa = valorSobremesa.innerHTML;
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

function acabou(){
    precoComida = precoComida.replace("R$ ","");
    precoComida = precoComida.replace(",",".");
    precoComida = parseFloat(precoComida);
    precoBebida = precoBebida.replace("R$ ","");
    precoBebida = precoBebida.replace(",",".");
    precoBebida = parseFloat(precoBebida);
    precoSobremesa = precoSobremesa.replace("R$ ","");
    precoSobremesa = precoSobremesa.replace(",",".");
    precoSobremesa = parseFloat(precoSobremesa);
    precoTotal = (precoComida + precoBebida + precoSobremesa).toFixed(2);
    let mensagem = 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${escolhaComida}
    - Bebida: ${escolhaBebida}
    - Sobremesa: ${escolhaSobremesa}
    Total: R$ ${precoTotal}`;
    const textoconvertido = encodeURI(mensagem);
    const link = `https://wa.me/5521988719876?text=${textoconvertido}`;
    window.location.href = link; 
}