const likebtn = document.querySelector('.like')
// Fonction pour calculer la somme en fonction de la quantité pour un article
function calculateTotal(articleDiv) {
    const quantity = parseInt(articleDiv.querySelector('.quantity').textContent);
    const price = parseInt(articleDiv.querySelector('.name').textContent.trim());
    const total = quantity * price;
    articleDiv.querySelector('.TTL').textContent = total;
    return total;
}

// Fonction pour calculer la somme totale de tous les articles
function calculateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.article').forEach(function(articleDiv) {
        const total = calculateTotal(articleDiv);
        totalPrice += total ;
    });
    return totalPrice +" X0F";
}

// Mise à jour du texte affichant le total
function updateTotalPriceText() {
    const totalPrice = calculateTotalPrice();
    document.querySelector('.total-prix').textContent = "Total : " + totalPrice;
}
// Gestion des boutons "like" pour tous les articles
document.querySelectorAll('.like').forEach(function(likebtn) {
    likebtn.addEventListener('click', function() {
        if (likebtn.style.color !== 'red') {
            likebtn.style.color = 'red';
        } else {
            likebtn.style.color = ''; 
        }
    });
});

// Gestionnaire d'événement pour le bouton moins (-)
document.querySelectorAll('.minus').forEach(function(button) {
    button.addEventListener('click', function() {
        let quantity = parseInt(button.parentNode.querySelector('.quantity').textContent);
        if (quantity > 0) {
            quantity--;
            button.parentNode.querySelector('.quantity').textContent = quantity;
            calculateTotal(button.parentNode.parentNode);
            updateTotalPriceText();
        }
    });
});

// Gestionnaire d'événement pour le bouton plus (+)
document.querySelectorAll('.plus').forEach(function(button) {
    button.addEventListener('click', function() {
        let quantity = parseInt(button.parentNode.querySelector('.quantity').textContent);
        quantity++;
        button.parentNode.querySelector('.quantity').textContent = quantity;
        calculateTotal(button.parentNode.parentNode);
        updateTotalPriceText();
    });
});

// Gestionnaire d'événement pour le bouton supprimer
document.querySelectorAll('.delete').forEach(function(button) {
    button.addEventListener('click', function() {
        const articleDiv = button.parentNode.parentNode;
        articleDiv.parentNode.removeChild(articleDiv);
        updateTotalPriceText();
    });
});

// Calcul initial au chargement de la page pour chaque article et le total
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.article').forEach(function(articleDiv) {
        calculateTotal(articleDiv);
    });
    updateTotalPriceText();
});
