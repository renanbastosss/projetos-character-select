const listaPersonagens = document.querySelectorAll('.personagem')

listaPersonagens.forEach(personagem => {
    personagem.addEventListener('click', () => {
        
        const idPersonagemSelecionado = personagem.id

        if (idPersonagemSelecionado === 'ultron') return;

        const personagemAtivoSelecionado = document.querySelector('.selecionado')
        personagemAtivoSelecionado.classList.remove('selecionado')
        
        // const personagemSelecionado = document.querySelector(`#${idPersonagemSelecionado}`)
        // personagemSelecionado.classList.add('selecionado')
        personagem.classList.add('selecionado')        
        
        const imagemJogador1 = document.querySelector('#personagem-jogador-1')
        imagemJogador1.src = `./src/imagens/${idPersonagemSelecionado}.png`
        
        const nomePersonagemSelecionado = personagem.getAttribute('data-name') //personagem.dataset.name

        const nomeJogador1 = document.querySelector('#nome-jogador-1')
        nomeJogador1.innerHTML = `${nomePersonagemSelecionado}`
    })
})