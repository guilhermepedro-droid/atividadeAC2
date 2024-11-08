function initializeCards() {
    // Adiciona cartões iniciais com imagens aleatórias
    for (let i = 0; i < 4; i++) {
        addCard("Card title");
    }
}

function addCard(title = "Card title", imageSrc = `https://picsum.photos/286/180?random=${Math.floor(Math.random() * 1000)}`) {
    const cardContainer = document.getElementById('cardContainer');
    const cardTitleInput = document.getElementById('cardTitleInput');
    const cardTitle = cardTitleInput.value || title;
    
    // Cria um div para a coluna do card
    const col = document.createElement('div');
    col.classList.add('col-md-3', 'mb-4'); // Define 4 cards por linha em telas médias

    // Cria elemento do cartão
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Imagem do cartão
    const img = document.createElement('img');
    img.src = imageSrc; // Imagem aleatória do Lorem Picsum
    img.classList.add('card-img-top');
    card.appendChild(img);


    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const titleElement = document.createElement('h5');
    titleElement.classList.add('card-title');
    titleElement.innerText = cardTitle;
    cardBody.appendChild(titleElement);


    const deleteButton = document.createElement('button');
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.innerText = 'Apagar';
    deleteButton.onclick = function() {
        col.remove();
    };
    cardBody.appendChild(deleteButton);
    
    card.appendChild(cardBody);
    col.appendChild(card);
    cardContainer.appendChild(col);

    cardTitleInput.value = '';
}

function removeAllCards() {
    const cardContainer = document.getElementById('cardContainer');
    cardContainer.innerHTML = '';
}
