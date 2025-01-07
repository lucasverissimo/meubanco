# Documentação do Projeto

## Tecnologias Utilizadas
- **React** com **Vite** para o desenvolvimento da aplicação.
- **React Router** para roteamento e navegação entre as páginas.
- **SASS** para estilização do projeto.
- **Context API** para gerenciamento de estado global (como autenticação de usuário).

## Recursos Implementados

### 1. Autenticação de Usuário
- O sistema de login foi implementado com dois campos principais: **usuário** e **senha**.
- Para autenticação, foi utilizada uma configuração de **Context API** para gerenciar o estado do login de forma global, permitindo que as informações de login fossem acessadas por diferentes componentes.
- A autenticação foi realizada com um usuário e senha de teste (`admin` / `admin`), onde o login é validado e redirecionado para a página de **Dashboard**.
- Após o usuário autenticar, uma sessão é armazenada no localStorage do navegador, permitindo que o login persista.

### 2. Redirecionamento e Roteamento
- Foi utilizado o **React Router** para gerenciar as rotas da aplicação.
- A página de login (`/`) é acessível inicialmente, e o redirecionamento para a página de **Dashboard** (`/dashboard`) é realizado após o login bem-sucedido.

### 3. Estilização com SASS
- A aplicação foi estilizada usando **SASS**, garantindo um código mais limpo e reutilizável.

### 4. Como executar a aplicação
- Para utilizar a aplicação, baixe ela em uma máquina que possua o node configurado. Utilize o comando **npm install** para instalar as dependencias e depois um **npm run dev** para executar ela.

Usuário: admin
Senha: admin