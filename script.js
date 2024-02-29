let container = document.querySelector('.container')

function mostrarCards(){
    for (let i=0; i <= jogadores.length; i++) {
        container.innerHTML += `
            <div class="playerCard">
            <div class="top">
                <img class="playerImg" src=${jogadores[i]["imagem"]}>
            </div>
            <div class="botton">
                <h3 class="playerName">${jogadores[i]["nome"]}</h3>
                <h4 class="playerPos">${jogadores[i]["posicao"]}</h4>
                <br>
                <a href="#" class="btn" onclick='puxaJogador(${JSON.stringify(jogadores[i])})'>CHECAR PERFIL</a>
            </div>
        </div>
        `
    }
}

function filtrar(){
    const tag = document.getElementById('filtro').value.toUpperCase()
    const playerCards = document.getElementsByClassName('playerCard')

    for(let j = 0; j < playerCards.length; j++){
        let nomeJogador = playerCards[j].querySelector(".playerCard h3")
        
        if(!(nomeJogador.innerText.toUpperCase().indexOf(tag) > -1)){
            playerCards[j].style.display = "none";
        }else{
            playerCards[j].style.display = ""
        }
    }
}

function puxaJogador(jogador){
    document.cookie =  jogador["nome"] + "#"
    document.cookie += jogador["posicao"] + "#"
    document.cookie += jogador["imagem"] + "#"
    document.cookie += jogador["descricao"] + "#"
    document.cookie += jogador["nome_completo"] + "#"
    document.cookie += jogador["nascimento"] + "#"
    document.cookie += jogador["altura_peso"]
      
    window.location.href = './profile/index.html'
    document.cookie = ''

}

window.onload = () => {
    mostrarCards()
}
