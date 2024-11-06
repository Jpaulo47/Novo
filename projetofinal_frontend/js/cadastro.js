async function cadastrarUsuario(nome, email, senha) {
    try {
        // Verificação para garantir que os campos não estão vazios
        if (!nome || !email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Envia a requisição POST para o backend para criar o usuário
        const response = await axios.post('http://localhost:8080/usuario', {
            nome: nome,
            email: email,
            senha: senha
        });

        // Caso o cadastro seja bem-sucedido, redireciona para a página de login
        if (response.status === 200) {
            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html'; // Redireciona para login
        }
    } catch (error) {
        // Verifica se o erro veio de uma resposta do backend
        if (error.response) {
            console.error('Erro de resposta:', error.response);
            alert('Erro: ' + error.response.data); // Exibe a mensagem de erro vinda do backend
        } else if (error.request) {
            // Caso tenha ocorrido um erro na requisição
            console.error('Erro na requisição:', error.request);
            alert('Erro ao enviar a requisição. Tente novamente.');
        } else {
            // Se for outro tipo de erro
            console.error('Erro desconhecido:', error.message);
            alert('Erro ao cadastrar usuário. Tente novamente.');
        }
    }
}

// Evento para capturar o envio do formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    
    // Captura os valores dos campos do formulário
    const nome = document.getElementById('name').value;  // Certifique-se de que o ID corresponde ao campo
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    
    console.log('Nome:', nome, 'Email:', email, 'Senha:', senha);  // Log para depuração
    
    // Chama a função de cadastro com os valores capturados
    cadastrarUsuario(nome, email, senha);
});