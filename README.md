# 🛒 Econverse - E-commerce Front-End

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)
![Sass](https://img.shields.io/badge/Sass-1.98-CC6699?style=for-the-badge&logo=sass)
![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite)

Projeto desenvolvido como teste técnico para a vaga de Desenvolvedor Front-End na **Econverse**. Uma aplicação moderna de e-commerce com foco em tecnologia, desenvolvida com React, TypeScript e Sass.

## 📑 Índice

- [🛒 Econverse - E-commerce Front-End](#-econverse---e-commerce-front-end)
  - [📑 Índice](#-índice)
  - [📋 Sobre o Projeto](#-sobre-o-projeto)
  - [✨ Funcionalidades](#-funcionalidades)
  - [🚀 Tecnologias](#-tecnologias)
  - [📦 Pré-requisitos](#-pré-requisitos)
  - [💻 Instalação](#-instalação)
  - [▶️ Como Executar](#️-como-executar)
    - [Modo de Desenvolvimento](#modo-de-desenvolvimento)
    - [Build de Produção](#build-de-produção)
    - [Preview da Build](#preview-da-build)
  - [📜 Scripts Disponíveis](#-scripts-disponíveis)
  - [📁 Estrutura do Projeto](#-estrutura-do-projeto)
  - [🎯 Boas Práticas Implementadas](#-boas-práticas-implementadas)
    - [🏗️ Arquitetura](#️-arquitetura)
    - [⚡ Performance](#-performance)
    - [♿ Acessibilidade](#-acessibilidade)
    - [🔍 SEO](#-seo)
    - [🎨 Estilização](#-estilização)
  - [🎨 Design e Layout](#-design-e-layout)
    - [Principais Componentes:](#principais-componentes)
  - [👨‍💻 Autor](#-autor)
  - [📄 Licença](#-licença)

## 📋 Sobre o Projeto

Este projeto é uma aplicação de e-commerce responsiva que apresenta uma vitrine de produtos consumindo dados de um arquivo JSON local. A aplicação foi desenvolvida seguindo as melhores práticas de desenvolvimento front-end e **pixel-perfect matching** com o design do Figma, com foco em:

- ✅ Código limpo e componentizado
- ✅ TypeScript para type-safety
- ✅ Sass para estilização modular
- ✅ HTML semântico
- ✅ Acessibilidade (a11y)
- ✅ SEO otimizado
- ✅ Design responsivo
- ✅ Consumo completo dos dados do db.json
- ✅ Modal horizontal com controles de quantidade

## ✨ Funcionalidades

- 🏠 **Página Principal** com banner hero atrativo e pixel-perfect
- 🏷️ **Categorias de Produtos** com navegação intuitiva e ícones customizados
- 🛍️ **Vitrine de Produtos** consumindo todos os dados do db.json (productName, descriptionShort, photo, price)
- 🔍 **Modal de Detalhes** horizontal ao clicar em um produto
- 📱 **Design Responsivo** para todos os dispositivos
- ⚡ **Carregamento Rápido** com Vite e lazy loading de imagens
- 💎 **Estilização Profissional** com Sass (BEM methodology)
- ♿ **Acessibilidade** (ARIA labels, foco do teclado, navegação semântica)
- 🎨 **Logo Econverse** com círculo amarelo (#FFB800) e tipografia customizada
- 👑 **Ícone de Coroa** no menu de assinatura premium

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[React](https://react.dev/)** - v19.2.4
- **[TypeScript](https://www.typescriptlang.org/)** - v5.9.3
- **[Vite](https://vite.dev/)** - v8.0.0
- **[Sass](https://sass-lang.com/)** - v1.98.0
- **[ESLint](https://eslint.org/)** - Linting e qualidade de código

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 18 ou superior)
- **npm** (gerenciador de pacotes do Node.js) ou **yarn**

Você pode verificar se possui essas ferramentas instaladas executando:

```bash
node --version
npm --version
```

## 💻 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/Marcelojr29/teste-front-end.git
cd teste-front-end
```

2. **Instale as dependências**

```bash
npm install
```

ou se você usa yarn:

```bash
yarn install
```

## ▶️ Como Executar

### Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:5173`

### Build de Produção

Para criar uma build otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

### Preview da Build

Para visualizar a build de produção localmente:

```bash
npm run preview
```

## 📜 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run lint` | Verifica o código com ESLint |

## 📁 Estrutura do Projeto

```
econverse/
├── public/              # Arquivos públicos estáticos
├── assets/              # Imagens e ícones do projeto
│   ├── icons/           # Ícones (categorias, coroa, etc)
│   └── images/          # Imagens (Black-Friday.jpg, Apple.jpg)
├── src/
│   ├── components/      # Componentes React
│   │   ├── Categories/  # Carrossel de marcas com logos
│   │   ├── CategoryFilter/ # Filtro de categorias
│   │   ├── Footer/      # Rodapé com newsletter
│   │   ├── Header/      # Cabeçalho com logo e navegação
│   │   ├── Hero/        # Banner principal Black Friday
│   │   ├── Partners/    # Seção de parceiros
│   │   ├── ProductCard/ # Card individual de produto
│   │   ├── ProductGrid/ # Grade simples de produtos
│   │   ├── ProductGridWithTabs/ # Grade com tabs e carrossel
│   │   ├── ProductModal/# Modal horizontal de detalhes
│   │   └── index.ts     # Barrel export dos componentes
│   ├── hooks/           # Custom Hooks
│   │   └── useProducts.ts # Hook para carregar produtos do db.json
│   ├── styles/          # Estilos globais Sass
│   │   ├── _variables.scss # Variáveis de cores e espaçamentos
│   │   └── _global.scss    # Reset e estilos globais
│   ├── types/           # Definições TypeScript
│   │   └── Product.ts   # Interface Product e ProductsResponse
│   ├── App.tsx          # Componente principal e state management
│   ├── App.css          # Estilos do App
│   ├── main.tsx         # Ponto de entrada
│   └── index.css        # Estilos base
├── db.json              # Dados dos produtos (consumido via fetch)
├── index.html           # HTML principal
├── package.json         # Dependências do projeto
├── tsconfig.json        # Configuração TypeScript
├── vite.config.ts       # Configuração Vite
└── README.md            # Este arquivo
```

## 🎯 Boas Práticas Implementadas

### 🏗️ Arquitetura
- **Componentização**: Componentes reutilizáveis e modulares
- **Separação de Responsabilidades**: Hooks customizados para lógica de negócio
- **Type Safety**: TypeScript em todo o projeto

### ⚡ Performance
- **Lazy Loading**: Carregamento otimizado de imagens
- **Code Splitting**: Divisão automática de código com Vite
- **Memoização**: Otimização de renderizações

### ♿ Acessibilidade
- **ARIA Labels**: Rótulos descritivos para tecnologias assistivas
- **Navegação por Teclado**: Suporte completo para navegação via teclado
- **HTML Semântico**: Tags semânticas (header, nav, main, section, footer)
- **Contraste de Cores**: Seguindo diretrizes WCAG

### 🔍 SEO
- **Meta Tags**: Descrições, keywords e Open Graph
- **Structured Data**: Dados estruturados para mecanismos de busca
- **Canonical URLs**: URLs canônicas para evitar conteúdo duplicado
- **Performance**: Otimizações para Core Web Vitals

### 🎨 Estilização
- **Sass/SCSS**: Pré-processador CSS com variáveis e mixins
- **BEM Methodology**: Nomenclatura consistente de classes
- **Mobile First**: Design responsivo partindo do mobile
- **Design System**: Variáveis centralizadas para cores, espaçamentos e tipografia

## 🎨 Design e Layout

O design foi baseado no layout fornecido no Figma, respeitando:
- ✅ Layout pixel-perfect (Hero: 75px título, 42px subtitle)
- ✅ Tamanhos de fontes especificados em todos os componentes
- ✅ Cores e paleta de cores (#3F2C56 roxo, #3F51B5 azul, #FFB800 amarelo)
- ✅ Espaçamentos e margens conforme design
- ✅ Componentes e interações (modal horizontal, carrosséis)
- ✅ Logo Econverse com círculo amarelo e tipografia customizada
- ✅ Ícones de categorias sem filtros preservando cores originais
- ✅ Ícone de coroa no menu de assinatura premium

### Principais Componentes:
- **Header**: Logo customizada, busca, ícones de ação, menu de navegação
- **Hero**: Banner Black Friday com fontes grandes (75px/42px)
- **CategoryFilter**: Filtros de categorias com ícones coloridos
- **ProductGridWithTabs**: Vitrine com tabs e carrossel
- **ProductCard**: Cards de produtos com descriptionShort do db.json
- **ProductModal**: Modal horizontal com imagem, detalhes e controles
- **Partners**: Seção de parceiros com cards ajustados (400px altura)
- **Categories**: Carrossel de marcas com logos circulares
- **Footer**: Newsletter e informações institucionais

## 👨‍💻 Autor

Desenvolvido por Marcelo Borges

- LinkedIn: Marcelo Borges](https://linkedin.com/in/marcelobjr)
- GitHub: [Marcelo Borges](https://github.com/Marcelojr29)
- Email: marceloborgesjr2000@gmail.com

---

## 📄 Licença

Este projeto foi desenvolvido como parte de um teste técnico para a Econverse.

---

⭐ Se você gostou deste projeto, considere dar uma estrela no repositório!
