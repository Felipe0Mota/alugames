let contador = 0;

function alterarStatus(id) {
    let jogo = document.getElementById(`game-${id}`);
    let imagem = jogo.querySelector('.dashboard__item__img');
    let botao = jogo.querySelector('.dashboard__item__button');
    let nomeJogo = jogo.querySelector('.dashboard__item__name').textContent;

    if (botao.textContent == 'Alugar') {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        contador++;
        console.log(`Total de jogos alugados: ${contador}`);
    } else {
        if (confirm(`Você deseja devolver o jogo ${nomeJogo}`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
        }
    }
}
