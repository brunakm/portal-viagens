# Portal de Viagens ✈️

Portal de viagens desenvolvido como projeto acadêmico para praticar conceitos de desenvolvimento web com Next.js, utilizando rotas, componentes reutilizáveis, CSS Modules e renderização de dados.

## 📋 Sobre o Projeto

O Portal de Viagens é uma aplicação web fictícia criada com o objetivo de praticar a construção de páginas utilizando o framework Next.js.

O projeto apresenta uma página inicial com uma breve apresentação e uma página de destinos, onde diferentes destinos turísticos são exibidos através de cards reutilizáveis.

A aplicação foi desenvolvida com foco em organização de componentes, criação de rotas utilizando o App Router do Next.js e estilização através de CSS Modules.

## 🚀 Funcionalidades

- Página inicial com apresentação do portal
- Página de destinos turísticos
- Navegação entre páginas utilizando `next/link`
- Exibição de destinos através de dados armazenados localmente
- Componente reutilizável `CardDestino`
- Componente reutilizável `Layout`
- Imagens dos destinos utilizando `next/image`
- Layout responsivo para diferentes tamanhos de tela
- Estilização utilizando CSS Modules
- Estrutura de rotas utilizando o App Router do Next.js

## 🛠️ Tecnologias Utilizadas

- **Next.js**
- **React**
- **TypeScript**
- **CSS Modules**
- **HTML5**
- **next/image**
- **next/link**
- **ESLint**

## 📂 Estrutura do Projeto

```text
portal-viagens/
├── app/
│   ├── destinos/
│   │   ├── page.tsx
│   │   └── destinos.module.css
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css
│
├── components/
│   ├── CardDestino/
│   │   ├── CardDestino.tsx
│   │   └── CardDestino.module.css
│   │
│   └── Layout/
│       ├── Layout.tsx
│       └── Layout.module.css
│
├── data/
│   └── destinos.ts
│
├── public/
│   └── imagens/
│       ├── paris.jpg
│       ├── rio-de-janeiro.jpg
│       ├── nova-york.jpg
│       └── toquio.jpg
│
├── package.json
└── README.md
```

## 🌎 Destinos
O projeto apresenta quatro destinos turísticos:
* Paris
* Rio de Janeiro
* Nova York
* Tóquio

Os destinos são armazenados em um arquivo de dados e renderizados dinamicamente através do método .map().


## 💻 Como executar o projeto
1. Clone o repositório:

```bash
git clone https://github.com/brunakm/portal-viagens.git
```

2. Acesse a pasta do projeto:
```bash
cd portal-viagens
```

3. Instale as dependências:

```bash
npm install
```

4. Execute a aplicação:

```bash
npm run dev
```

5. Acesse no navegador:

Abra o endereço abaixo:
http://localhost:3000

## 🧪 Testes

O projeto foi validado utilizando os comandos:

```bash
npm run lint
```

```bash
npm run build
```

Ambos foram executados com sucesso.

## 📚 Projeto Acadêmico

Projeto desenvolvido durante os estudos de Engenharia de Front-End, com o objetivo de praticar conceitos de Next.js, React, TypeScript, roteamento, componentes reutilizáveis e CSS Modules.

## 👩‍💻 Autora

Bruna Machado
