// Função para carregar e exibir a lista de usuários
async function carregarUsuarios() {
    try {
        const response = await axios.get('http://localhost:8080/usuario/all');
        const usuarios = response.data;
        const usuariosTable = document.getElementById('usuariosTable');
        
        usuariosTable.innerHTML = ''; // Limpa a tabela

        usuarios.forEach(usuario => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${usuario.nome}</td>
                <td>${usuario.email}</td>
                <td><button class="btn-delete" onclick="excluirUsuario('${usuario.email}')">Excluir</button></td>
            `;
            usuariosTable.appendChild(row);
        });
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
    }
}

// Função para excluir um usuário via email
async function excluirUsuario(email) {
    if (confirm('Tem certeza de que deseja excluir este usuário?')) {
        try {
            console.log('Excluindo usuário com email:', email); // Verifique se o email está correto no console
            const response = await axios.delete(`http://localhost:8080/usuario?email=${encodeURIComponent(email)}`);  // Ajuste para excluir por email
            if (response.status === 202) {
                alert('Usuário excluído com sucesso!');
                carregarUsuarios(); // Atualiza a lista de usuários
            } else {
                alert('Falha na exclusão do usuário');
            }
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            alert('Erro ao excluir o usuário');
        }
    }
}

// Carrega os usuários ao abrir a página
document.addEventListener('DOMContentLoaded', carregarUsuarios);
