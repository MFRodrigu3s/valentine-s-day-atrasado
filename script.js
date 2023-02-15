const input = document.getElementById('input')
const botao = document.getElementById('botao')
const portaAberta = document.getElementById('portaAberta')
const portaFechada = document.getElementById('portaFechada')
const subtitulo = document.getElementById('subtitulo')
const msgAmor = document.getElementById('msgAmor')
const msgErro = document.getElementById('msgErro')

botao.onclick = function(){
    const value = input.value
    const nome = value.toUpperCase
    if(nome != "BRUNA CICILIA PRESTES"){
        portaFechada.style.display = "block"
        portaAberta.style.display = "none"
        msgErro.style.display = "block"
        subtitulo.style.display = "none"
        msgAmor.style.display = "none"
    } else {
        // alert('deu certo')
        portaFechada.style.display = "none"
        portaAberta.style.display = "block"
        msgErro.style.display = "none"
        msgAmor.style.display = "block"
        subtitulo.style.display = "none"
    }
}    
