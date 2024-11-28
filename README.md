# Projeto Final - Gerenciamento de Usuários

Este é um projeto frontend desenvolvido para gerenciar usuários, permitindo realizar login, cadastro e visualização de todos os usuários cadastrados. A aplicação foi construída utilizando HTML, CSS, JavaScript, Bootstrap e Axios para fazer as requisições para o backend.

## Funcionalidades

- **Página de Apresentação**: Uma introdução ao projeto com links para o login e cadastro.
- **Página de Login**: Permite que o usuário faça login fornecendo seu e-mail e senha.
- **Página de Cadastro**: Permite que o usuário crie uma conta fornecendo seus dados, como nome, e-mail e senha.
- **Página de Administração**: Exibe todos os usuários cadastrados, com a possibilidade de visualizar, editar ou excluir usuários.

## Estrutura do Projeto

```plaintext
frontend/
├── assets/
│   ├── images/
│   └── styles/
│       └── style.css
├── js/
│   ├── app.js
│   ├── login.js
│   ├── cadastro.js
│   └── admin.js
├── index.html
├── login.html
├── cadastro.html
└── admin.html
````
## Descrição dos Arquivos:
 - **index.html:** Página de apresentação, com links para o login e cadastro.

- **login.html:** Página de login, onde o usuário insere suas credenciais para acessar o sistema.

- **cadastro.html:** Página de cadastro, onde o usuário preenche seus dados para criar uma conta.

- **admin.html:** Página de administração, onde o administrador pode visualizar todos os usuários cadastrados.

- **style.css:** Arquivo de estilo personalizado para o layout das páginas.

- **app.js:** Arquivo JavaScript geral para funcionalidades compartilhadas.

- **login.js:** Arquivo JavaScript para funcionalidades específicas da página de login.

- **cadastro.js:** Arquivo JavaScript para funcionalidades específicas da página de cadastro.

- **admin.js:** Arquivo JavaScript para funcionalidades específicas da página de administração.

## Tecnologias Utilizadas
HTML5: Para a estruturação das páginas.

- **CSS3:** Para o estilo e layout da aplicação.

- **JavaScript:** Para interatividade e manipulação da DOM.

- **Bootstrap:** Framework CSS para responsividade e design visual.

- **Axios:** Biblioteca para realizar requisições HTTP ao backend (API RESTful).

## Requisitos
**Navegador Web:** A aplicação pode ser executada em qualquer navegador moderno (Google Chrome, Firefox, etc).

**Backend:** A aplicação frontend interage com um backend que deve estar rodando para que as requisições de login, cadastro e visualização de usuários funcionem corretamente.
````
https://github.com/Jpaulo47/projeto_final_backend
````

## Instalação e Execução
Clone o repositório:

Se ainda não tiver o projeto clonado, faça isso com o seguinte comando:

```
git clone https://github.com/Jpaulo47/projeto-unifor-frontend-web.git

```
Abra o projeto em seu navegador:

Basta abrir o arquivo index.html em seu navegador para começar a usar a aplicação. Não há necessidade de servidor, pois a aplicação é apenas frontend. No entanto, para utilizar a funcionalidade completa de interação com o backend, um servidor backend deve estar configurado corretamente.
