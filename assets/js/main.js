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
textAreaFaixaEsquerda.addEventListener("mouseout", (e) => {
    resultFaixaEsquerda.style.backgroundColor = textAreaFaixaEsquerda.value
})



textAreaFaixaMeio.addEventListener("keydown", (e) => {
    resultFaixaMeio.style.backgroundColor = textAreaFaixaMeio.value
    if (e.key == "Enter") {
        e.preventDefault();
    }
})
textAreaFaixaMeio.addEventListener("mouseout", (e) => {
    resultFaixaMeio.style.backgroundColor = textAreaFaixaMeio.value
})



textAreaFaixaDireita.addEventListener("keydown", (e) => {
    resultFaixaDireita.style.backgroundColor = textAreaFaixaDireita.value
    if (e.key == "Enter") {
        e.preventDefault();
    }
})
textAreaFaixaDireita.addEventListener("mouseout", (e) => {
    resultFaixaDireita.style.backgroundColor = textAreaFaixaDireita.value
})

const botaoValidacao = document.getElementById('botao_validacao')
const modalCorrect = document.getElementById('modal_result_correct')
const modalIncorrect = document.getElementById('modal_result_incorrect')
const buttonCloseModalIncorrect = document.getElementById("close_incorrect_modal")

botaoValidacao.addEventListener("click", () => {
    if(resultFaixaEsquerda.style.backgroundColor === "lime" && resultFaixaMeio.style.backgroundColor === "white" && resultFaixaDireita.style.backgroundColor === "red") {
        modalCorrect.style.display = "block"
    } else {
        
        modalIncorrect.style.display = "block"
    }
})

buttonCloseModalIncorrect.onclick = () => {
    modalIncorrect.style.display = "none"
}

window.onclick = (event) => {
    if (event.target == modalCorrect) {
        modalCorrect.style.display = "none"
    }
    if (event.target == modalIncorrect) {
        modalIncorrect.style.display = "none"
    }
}