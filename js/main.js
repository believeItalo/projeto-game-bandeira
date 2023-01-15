'use strict'

const textAreaFaixaEsquerda = document.getElementById('faixa_esquerda')
const textAreaFaixaMeio = document.getElementById('faixa_meio')
const textAreaFaixaDireita = document.getElementById('faixa_direita')

const resultFaixaEsquerda = document.getElementById('faixa_esquerda_result')
const resultFaixaMeio = document.getElementById('faixa_meio_result')
const resultFaixaDireita = document.getElementById('faixa_direita_result')

textAreaFaixaEsquerda.addEventListener("keydown", (e) => {
    resultFaixaEsquerda.style.backgroundColor = textAreaFaixaEsquerda.value
    if (e.key == "Enter") {
        e.preventDefault();
    }
})

textAreaFaixaMeio.addEventListener("keydown", (e) => {
    resultFaixaMeio.style.backgroundColor = textAreaFaixaMeio.value
    if (e.key == "Enter") {
        e.preventDefault();
    }
})

textAreaFaixaDireita.addEventListener("keydown", (e) => {
    resultFaixaDireita.style.backgroundColor = textAreaFaixaDireita.value
    if (e.key == "Enter") {
        e.preventDefault();
    }
})