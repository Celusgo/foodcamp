function selecionarComida(x){
    const escolhido1 = document.querySelector(".selected1");
    if(escolhido1 !== null){
        escolhido1.classList.remove('selected1');
    }
    const seletor = "." + x;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected1');
}

function selecionarBebida(y){
    const escolhido2 = document.querySelector(".selected2");
    if(escolhido2 !== null){
        escolhido2.classList.remove('selected2');
    }
    const seletor = "." + y;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected2');
}

function selecionarSobremesa(z){
    const escolhido3 = document.querySelector(".selected3");
    if(escolhido3 !== null){
        escolhido3.classList.remove('selected3');
    }
    const seletor = "." + z;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected3');
}