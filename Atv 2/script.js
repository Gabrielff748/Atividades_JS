function mostrarMensagem(){
    const mensagemDigitada = document.querySelector("#mensagem").value
    const resultado = document.querySelector("#resultado")
    const mensagem = `As melhores coisas são as/os ${mensagemDigitada} que conseguimos durante a vida!!`
    resultado.innerHTML = mensagem
}