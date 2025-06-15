// Définir la fonction asynchrone principale
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // URL de l'API
    const dataContainer = document.getElementById('api-data'); // Conteneur pour les données

    try {
        const response = await fetch(apiUrl); // Appel API
        const users = await response.json(); // Conversion de la réponse en JSON

        dataContainer.innerHTML = ''; // Supprimer le message "Loading user data..."

        const userList = document.createElement('ul'); // Créer la liste

        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        dataContainer.appendChild(userList); // Ajouter la liste au DOM

    } catch (error) {
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.'; // Message d’erreur
        console.error('Error fetching user data:', error); // Pour debug
    }
}

// Attendre que le DOM soit prêt avant d'exécuter la fonction
document.addEventListener('DOMContentLoaded', fetchUserData);