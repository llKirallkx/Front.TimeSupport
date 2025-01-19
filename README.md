# AFD Generator Documentation

## Project Overview
This project is a web application to generate and validate AFD (Data Source File) files. It provides functionalities to create, download, and check AFD files for inconsistencies.

---

## Project Structure

### Getting Started

#### Prerequisites
- **Node.js**
- **npm**

#### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/your-repo/afd-generator.git
    ```
2. Navigate to the project directory:
    ```sh
    cd afd-generator
    ```
3. Install the dependencies:
    ```sh
    npm install
    ```

### Running the Application

To start the development server, run:
```sh
npm run dev
```

### Building the Application

To build the application for production, run:
```sh
npm run build
```

### Code Linting

To lint the code, run:
```sh
npm run lint
```

### Deploying the Application

To deploy the application, run:
```sh
npm run deploy
```

### Project Components

#### Main Components
- **App**: The main component that renders the header and the form.
- **HeaderComponent**: The header component with navigation links and server status.
- **CreateAfdFormRows**: The form component to create AFD files.
- **DivButtons**: The component with buttons to download AFD files.
- **Crc16Create**: The component to upload files and generate CRC16.
- **AfdCheck**: The component to upload and check AFD files for inconsistencies.

#### Services
- **FormSubmit**: Handles form submission.
- **ValidateForm**: Validates the form before submission.

#### Styles
- **App.css**: Styles for the main application.
- **index.css**: Global styles for the application.
- **styleCrc16.css**: Specific styles for the CRC16 component.

### License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

# Documentação do Gerador de AFD

## Visão Geral do Projeto
Este projeto é uma aplicação web para gerar e validar arquivos AFD (Arquivo Fonte de Dados). Ele fornece funcionalidades para criar, baixar e verificar arquivos AFD em busca de inconsistências.

---

## Estrutura do Projeto

### Começando

#### Pré-requisitos
- **Node.js**
- **npm**

#### Instalação
1. Clone o repositório:
    ```sh
    git clone https://github.com/your-repo/afd-generator.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd afd-generator
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```

### Executando a Aplicação

Para iniciar o servidor de desenvolvimento, execute:
```sh
npm run dev
```

### Construindo a Aplicação

Para construir a aplicação para produção, execute:
```sh
npm run build
```

### Linting do Código

Para fazer o linting do código, execute:
```sh
npm run lint
```

### Implantando a Aplicação

Para implantar a aplicação, execute:
```sh
npm run deploy
```

### Componentes do Projeto

#### Componentes Principais
- **App**: O componente principal que renderiza o cabeçalho e o formulário.
- **HeaderComponent**: O componente de cabeçalho com links de navegação e status do servidor.
- **CreateAfdFormRows**: O componente de formulário para criar arquivos AFD.
- **DivButtons**: O componente com botões para baixar arquivos AFD.
- **Crc16Create**: O componente para fazer upload de arquivos e gerar CRC16.
- **AfdCheck**: O componente para fazer upload e verificar arquivos AFD em busca de inconsistências.

#### Serviços
- **FormSubmit**: Lida com a submissão do formulário.
- **ValidateForm**: Valida o formulário antes da submissão.

#### Estilos
- **App.css**: Estilos para a aplicação principal.
- **index.css**: Estilos globais para a aplicação.
- **styleCrc16.css**: Estilos específicos para o componente CRC16.

### Licença
Este projeto está licenciado sob a Licença MIT. Veja o arquivo LICENSE para mais detalhes.