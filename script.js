document.getElementById('fetchUsers').addEventListener('click', fetchUsers);

function fetchUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => displayUsers(users))
        .catch(error => console.error('Erro ao buscar usuários:', error));
}

function displayUsers(users) {
    const userList = document.getElementById('userList');
    userList.innerHTML = ''; // Limpa o conteúdo existente
    
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card';
        
        userCard.innerHTML = `
            <h2>${user.name}</h2>
            <p>Email: ${user.email}</p>
            <p>Endereço: ${user.address.street}, ${user.address.city}</p>
        `;
        
        userList.appendChild(userCard);
    });
}
