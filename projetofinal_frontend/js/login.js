// Função para realizar o login de um usuário
async function loginUsuario(email, senha) {
    try {
        // Verificação simples para campos vazios
        if (!email || !senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        // Requisição POST para o backend com os dados de login
        const response = await axios.post('http://localhost:8080/usuario/login', null, {
            params: {
                email: email,
                senha: senha
            }
        });

        // Verifica se o login foi bem-sucedido
        if (response.status === 200) {
            alert('Login realizado com sucesso!');
            // Armazenar o token ou informações de sessão no localStorage ou cookies
            localStorage.setItem('usuarioToken', response.data.token);
            // Redireciona para a página principal após login
            window.location.href = 'admin.html'; // Ajuste para o caminho correto
        }
    } catch (error) {
        // Exibe mensagem de erro caso o login falhe
        console.error('Erro ao fazer login:', error);
        alert('Erro ao fazer login. Tente novamente.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    console.log(form); // Verifique se o elemento foi encontrado

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const email = document.getElementById('username').value;
            const senha = document.getElementById('password').value;

            loginUsuario(email, senha);
        });
    } else {
        console.log("Formulário não encontrado");
    }
});