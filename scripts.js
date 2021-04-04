function selecionarComida(x){
    const seletor = "." + x;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected');
}

function selecionarBebida(y){
    const seletor = "." + y;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected');
}

function selecionarSobremesa(z){
    const seletor = "." + z;
    const botao = document.querySelector(seletor)
    botao.classList.add('selected');
}