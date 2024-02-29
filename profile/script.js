window.onload = () => {
    showDetails()
}

function showDetails(){
    let jogador = document.cookie.split('#')
    let card = document.getElementById('playerCard')

    card.innerHTML = `
    <img src='${jogador[2]}'>
    <div id='name-pos'>
        <h1>${jogador[0]}</h1>
        <h2>${jogador[1]}</h2>
    </div>
    <h3>${jogador[6]}</h3>
    <h4>${jogador[5]}</h4>
    <p>${jogador[3]}</p>
    `;
}

function voltar(){
    window.location.href = '../'   
}
