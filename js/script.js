// Validação de login e senha e manipulação do localStorage
document.getElementById('auth-btn').addEventListener('click', function() {
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    if (login && senha) {
        // Armazena o login no localStorage (ou cookie)
        localStorage.setItem('login', login);
        alert('Usuário autenticado com sucesso!');
        window.location.href = 'index.html'; // Redireciona para a página inicial
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});

// Verifica se o usuário está autenticado ao carregar a página inicial
window.addEventListener('load', function() {
    const login = localStorage.getItem('login');

    if (login) {
        document.getElementById('auth-status').innerText = `Bem-vindo, ${login}`;
    } else {
        document.getElementById('auth-status').innerText = 'Usuário não autenticado';
    }
});

// Pré-visualização da imagem no cadastro de foto
document.getElementById('foto-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('foto');
    const previewDiv = document.getElementById('preview');
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            previewDiv.innerHTML = ''; // Limpa a pré-visualização anterior
            previewDiv.appendChild(img);

            // Armazena o nome do arquivo no localStorage
            localStorage.setItem('foto', file.name);
        };
        
        reader.readAsDataURL(file);
    } else {
        alert('Por favor, selecione um arquivo de imagem.');
    }
});

// Exibe o nome da foto ao carregar a página inicial
window.addEventListener('load', function() {
    const foto = localStorage.getItem('foto');
    
    if (foto) {
        console.log(`Foto armazenada: ${foto}`);
        // Aqui, você pode exibir a foto do usuário se desejar.
    }
});
