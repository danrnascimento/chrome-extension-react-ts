# Chrome Extension Boilerplate

## Introdução

Bem-vindo ao projeto de boilerplate de extensão para Google Chrome, desenvolvido com React e TypeScript. Este projeto fornece uma estrutura inicial robusta para a criação de extensões Chrome, incluindo um popup React, um service worker para o background e um content script para manipular o conteúdo da aba atual.

## Configuração do Projeto

1. Clone este repositório para o seu ambiente local:

   ```bash
   git clone [https://github.com/seu-usuario/boilerplate-extensao-chrome-react-ts.git](https://github.com/danrnascimento/chrome-extension-react-ts.git)
   cd chrome-extension-react-ts
   ```

2. Instale as dependências do projeto:

   ```bash
   npm install
   ```

## Estrutura de Arquivos

O projeto é organizado da seguinte forma:

- **`src`**: Contém o código-fonte da extensão.
  - **`popup.ts`**: Codigo que configura a aplicação react no popup da extensão.
  - **`background.ts`**: Service Worker da extensão.
  - **`contentScript.ts`**: Código que vai ser injetado na aba atual.
  - **`domain/Chrome.ts`**: Adapter da api do chrome.
- **`config`**: Configurações do projeto.
  - **`config/webpack.common.js`**: Configuração básica para a extensão.
  - **`config/webpack.config.js`**: Configurações especificas para o projeto atual.
  - **`config/paths.js`**: Caminhos essenciais para a aplicação.
- **`public`**: Arquivos estáticos que serão copiados para o artefato do build.
  - **`manifest.json`**: Manifest da extensão do google chrome
  - **`global.css`**: CSS Básico para o popup
  - **`popup.html`**: HTML do popup que será exibido ao clicar no ícone da extensão.
  - **`icons`**: Pasta com os ícones da extensão para diversos tamanhos.

## Desenvolvimento

Para executar a versão de desenvolvimento com atualização em tempo real, utilize o seguinte commando:

```bash
npm run watch
```

## Build

Para criar uma versão de produção da extensão, utilize o seguinte comando:

```bash
npm run build
```

Os artefatos de construção serão gerados na pasta `dist`.

## Instalação da Extensão

1. Abra o Google Chrome e acesse `chrome://extensions/`.
2. Ative o "Modo do desenvolvedor" no canto superior direito.
3. Clique em "Carregar sem compactação" e selecione a pasta `dist` gerada pelo comando de build.

A extensão agora estará disponível e pronta para uso.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues, propor melhorias e enviar pull requests.
