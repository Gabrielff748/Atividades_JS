function adicionarItemGeral() {
    const valorItem = document.querySelector('#comprasGeral').value
    const listaItens = document.querySelector('#listaMercado')
    listaItens.innerHTML += `<li>${valorItem}</li>`
}
