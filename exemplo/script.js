function mostrarMensagem(){
    const mensagemDigitada = document.querySelector("#mensagem").value
    const resultado = document.querySelector("#resultado")
    const mensagem = `Olá ${mensagemDigitada}`
    resultado.innerHTML = mensagem
}