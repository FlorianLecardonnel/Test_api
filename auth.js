function toggleForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const switchButton = document.querySelector('.switch-button');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        switchButton.textContent = "Passer à l'inscription";
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        switchButton.textContent = "Passer à la connexion";
    }
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    console.log('Connexion:', email, password);
    // Ajoutez ici la logique de connexion
});

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    console.log('Inscription:', username, email, password);
    // Ajoutez ici la logique d'inscription
});