const characters = document.querySelectorAll('.character')

characters.forEach(character => {
    character.addEventListener('mouseenter', () => {
        
        if(window.innerWidth  < 450){
            window.scrollTo({top: 0, behavior:'smooth'})
        }

        removeSelected()
        
        // Adiciona o SELECTED no item atual 
        character.classList.add('selected')

        alterCharacterImage(character)

        alterCharacterName(character)

        alterCharacterDescription(character)

    })
});

function removeSelected(){
    const characterSelected = document.querySelector('.selected')
    characterSelected.classList.remove('selected')
}

function alterCharacterImage(character) {
    const characterBig = document.querySelector('.character-big')
    characterId = character.attributes.id.value
    characterBig.src = `./src/images/card-${characterId}.png`
}
function alterCharacterName(character) {
    const characterName = document.getElementById('character-name')
    characterName.innerText =  character.getAttribute('data-name')
}

function alterCharacterDescription(character) {
    const characterDescription = document.getElementById('character-description')
    characterDescription.innerText = character.getAttribute('data-description')
}