const commentsContainer = document.getElementById('commentsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const commentsPerPage = 1; // Number of comments visible on the carrousel (need to change if you want to tweak the size of the comment div)
const comments = [
    { username: 'Alice R.', text: 'Très satisfaite de ma commande, les produits sont arrivés en parfait état et super bien emballés ! Je recommande vivement.', date: 'Le 12/09/2024 à 14:23' },
    { username: 'Lucas M.', text: 'Site facile à naviguer, et livraison ultra rapide ! J\'ai trouvé exactement ce que je cherchais. Merci !', date: 'Le 10/09/2024 à 09:47' },
    { username: 'Emma T.', text: 'Large choix de produits rétro, c\'est une vraie caverne d\'Ali Baba pour les fans de vintage. Je suis conquise !', date: 'Le 08/09/2024 à 18:12' },
    { username: 'Maxime L.', text: 'Excellente expérience d\'achat, le service client est réactif et très sympa. Je reviendrai sans hésiter.', date: 'Le 15/09/2024 à 13:08' },
    { username: 'Sophie G.', text: 'Les prix sont compétitifs et la qualité au rendez-vous. Je suis ravie de mes achats !', date: 'Le 11/09/2024 à 16:35' },
    { username: 'Julien K.', text: 'Commandé pour la première fois et franchement, top ! Les articles sont conformes à la description et super bien protégés.', date: 'Le 09/09/2024 à 20:50' },
    { username: 'Camille D.', text: 'Un vrai bonheur de trouver autant de produits uniques ! J\'ai adoré ma commande, tout est parfait.', date: 'Le 13/09/2024 à 15:18' },
    { username: 'Théo J.', text: 'Livraison rapide et produits nickel ! Ce site est maintenant mon adresse préférée pour les achats rétro.', date: 'Le 14/09/2024 à 11:05' },
    { username: 'Nina V.', text: 'Superbe expérience, les articles sont encore mieux en vrai ! Je recommande pour les fans de nostalgie.', date: 'Le 07/09/2024 à 10:42' },
    { username: 'Antoine B.', text: 'Une vraie mine d\'or pour les collectionneurs ! J\'ai trouvé des trésors et reçu ma commande rapidement.', date: 'Le 16/09/2024 à 17:20' }
];

// Render all comments
function renderComments() {
    commentsContainer.innerHTML = '';
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = `<div class="user-rating"><strong class="user">${comment.username}</strong>
                                <div class="review-rating"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></div></div>
                                <p class="commentaire">${comment.text}</p>
                                <div class="timeStamp">${comment.date}</div>
                                `;
        commentsContainer.appendChild(commentDiv);
    });
    updateButtons();
    updateContainerPosition();
}

function updateButtons() {
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex + commentsPerPage >= comments.length;
}

function updateContainerPosition() {
    const commentWidth = 46; // Each comment takes 20% of the container width
    const margin = 15; // Margin in pixels
    const totalWidth = commentWidth + (margin * 2 / window.innerWidth * 100); // Convert margin to percentage

    // Calculate the offset based on the current index and the total width of one comment
    const offset = -currentIndex * totalWidth; // Adjust the offset based on the current index
    commentsContainer.style.transform = `translateX(${offset}%)`; // Apply the sliding effect
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex -= commentsPerPage;
        updateContainerPosition();
        updateButtons();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex + commentsPerPage < comments.length) {
        currentIndex += commentsPerPage;
        updateContainerPosition();
        updateButtons();
    }
});

// Render the comments
renderComments();