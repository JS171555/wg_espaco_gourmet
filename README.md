# 🔥 WG Espaço Gourmet

> Site institucional desenvolvido para a **WG Espaço Gourmet**, empresa especializada na fabricação de churrasqueiras e fornos de pizza artesanais.

Uma experiência digital criada para apresentar os produtos da empresa de forma **moderna, elegante e visualmente impactante**, valorizando imagens, vídeos, animações e uma navegação simples e intuitiva.

---

## 📸 Sobre o Projeto

O **WG Espaço Gourmet** é um website institucional desenvolvido com foco em apresentação de produtos e geração de contatos comerciais.

A proposta do projeto foi criar uma presença digital que transmitisse a identidade da marca e, ao mesmo tempo, facilitasse o contato de potenciais clientes através do WhatsApp.

O site apresenta:

* Churrasqueiras artísticas
* Fornos de pizza artesanais
* Galeria de projetos
* Depoimentos de clientes
* Localização da empresa
* Informações de contato
* Botões de orçamento via WhatsApp
* Conteúdo visual com imagens e vídeos
* Navegação responsiva para desktop, tablet e mobile

---

## ✨ Funcionalidades

### 🎬 Hero Section com vídeo

A página inicial utiliza um vídeo em tela cheia como elemento principal de apresentação.

O vídeo é carregado dinamicamente através do JavaScript, selecionando aleatoriamente um dos vídeos disponíveis no projeto.

### 🧭 Navegação responsiva

Header fixo com navegação por seções e menu hambúrguer para dispositivos móveis.

A navegação permite acesso rápido às principais áreas:

* Início
* Churrasqueiras
* Fornos de Pizza
* Localização
* Contato

### 📱 Design responsivo

O layout foi desenvolvido para funcionar em diferentes tamanhos de tela:

* Desktop
* Notebook
* Tablet
* Smartphones

Os componentes são adaptados através de media queries e ajustes específicos para diferentes resoluções.

### ✨ Animações

O projeto utiliza **GSAP** e **ScrollTrigger** para criar animações durante a navegação.

Entre os efeitos utilizados estão:

* Entrada animada do conteúdo principal
* Animação dos cards de produtos
* Animação dos títulos das seções
* Animação da localização
* Transições do menu mobile
* Efeitos durante o scroll

### 🛒 Apresentação de produtos

Os produtos são apresentados através de cards contendo:

* Imagem
* Nome do modelo
* Descrição
* Medidas disponíveis
* Opções de configuração

O usuário pode selecionar diferentes medidas diretamente na interface.

### 💬 Integração com WhatsApp

O site possui chamadas para ação direcionadas ao WhatsApp, permitindo que o visitante entre em contato rapidamente para solicitar um orçamento.

Exemplo de fluxo:

**Produto → Solicitação de orçamento → WhatsApp**

### ⏳ Preloader

Foi implementada uma tela de carregamento utilizando a identidade visual da empresa.

Após o carregamento da página, o preloader desaparece através de uma transição suave.

### 📍 Localização

A página possui uma seção dedicada à localização da empresa, facilitando que clientes encontrem o estabelecimento.

### 🖼️ Galeria

O projeto conta com uma galeria visual para apresentar trabalhos e produtos da empresa.

---

## 🛠️ Tecnologias Utilizadas

### Front-end

* **HTML5** — estrutura semântica da página
* **CSS3** — estilização, layout e responsividade
* **JavaScript** — interações e lógica da interface

### Bibliotecas

* **GSAP** — animações
* **ScrollTrigger** — animações baseadas em scroll
* **Font Awesome** — ícones
* **Google Fonts** — tipografia

### Recursos

* Imagens próprias
* Vídeos promocionais
* SVGs para identidade visual
* Integração com WhatsApp

---

## 📂 Estrutura do Projeto

```text
wg-espaco-gourmet/
│
├── assets/
│   ├── clientes/
│   │   ├── 001.png
│   │   └── 002.png
│   │
│   ├── galeria/
│   │   ├── 001.jpg
│   │   ├── 002.jpg
│   │   └── ...
│   │
│   ├── img/
│   │   ├── 001.jpg
│   │   ├── 002.jpg
│   │   └── 003.jpg
│   │
│   ├── logo/
│   │   ├── 000.svg
│   │   └── 001.svg
│   │
│   └── videos/
│       └── vídeos promocionais
│
├── css/
│   ├── loading.css
│   └── style.css
│
├── js/
│   ├── loading.js
│   └── script.js
│
└── index.html
```

---

## 🎨 Interface

O projeto utiliza uma identidade visual baseada em tons escuros, criando uma estética sofisticada e alinhada ao segmento gastronômico.

A combinação de:

* Preto
* Branco
* Tons avermelhados
* Imagens de produtos
* Vídeos em tela cheia
* Tipografia Montserrat e Roboto

foi utilizada para criar uma experiência visual mais premium.

---

## 📱 Responsividade

A interface possui adaptações específicas para diferentes dispositivos.

### Desktop

Experiência completa com:

* Navegação horizontal
* Cards de produtos
* Hero em tela cheia
* Conteúdo distribuído em grids
* Animações de scroll

### Mobile

O layout é adaptado para:

* Menu hambúrguer
* Conteúdo em coluna
* Imagens responsivas
* Botões maiores para interação por toque
* Tipografia ajustada
* Navegação simplificada

---

## ⚡ Como Executar

Como o projeto utiliza apenas tecnologias front-end, não é necessário instalar dependências ou configurar um servidor Node.js.

### 1. Clone o repositório

```bash
git clone https://github.com/JS171555/wg-espaco-gourmet.git
```

### 2. Acesse a pasta

```bash
cd wg-espaco-gourmet
```

### 3. Execute o projeto

Você pode abrir o arquivo:

```text
index.html
```

diretamente no navegador.

Para uma experiência de desenvolvimento mais adequada, também é recomendado utilizar uma extensão como **Live Server** no VS Code.

---

## 🌐 Deploy

Por ser um projeto front-end estático, ele pode ser hospedado facilmente em plataformas como:

* GitHub Pages
* Vercel
* Netlify
* Hostinger
* Servidores tradicionais

---

## 📈 Objetivo do Projeto

O principal objetivo foi transformar a presença digital da empresa em uma experiência que não fosse apenas informativa, mas também **visual e comercial**.

A estrutura foi pensada para conduzir o visitante por uma jornada simples:

```text
Apresentação
     ↓
Produtos
     ↓
Galeria
     ↓
Depoimentos
     ↓
Localização
     ↓
Contato
     ↓
Orçamento via WhatsApp
```

Dessa forma, o site funciona tanto como **portfólio da empresa** quanto como uma ferramenta de aquisição de novos clientes.

---

## 💡 Destaques Técnicos

Entre os principais pontos técnicos do projeto estão:

* Manipulação do DOM com JavaScript
* Carregamento dinâmico de vídeos
* Seleção aleatória de vídeos no Hero
* Menu mobile interativo
* Header com comportamento sticky
* Detecção de scroll
* Animações utilizando GSAP
* ScrollTrigger para animações vinculadas à rolagem
* Preloader personalizado
* Seleção dinâmica de medidas dos produtos
* Integração com WhatsApp
* Layout responsivo com CSS Media Queries
* Organização de assets por categoria

---

## 🚀 Possíveis Evoluções

Algumas melhorias que podem ser implementadas futuramente:

* [ ] Painel administrativo para gerenciamento dos produtos
* [ ] CMS para atualização do conteúdo sem alterar o código
* [ ] Catálogo de produtos com filtros
* [ ] Galeria com Lightbox
* [ ] Formulário de orçamento
* [ ] SEO avançado
* [ ] Schema Markup para produtos e empresa
* [ ] Otimização de imagens e vídeos
* [ ] Lazy Loading de assets
* [ ] PWA
* [ ] Integração com Google Analytics
* [ ] Integração com Google Maps API
* [ ] Sistema de gerenciamento de depoimentos

---

## 👨‍💻 Desenvolvimento

Projeto desenvolvido como **website institucional para cliente**, com foco em:

**UI/UX · Responsividade · Performance · Animações · Apresentação de Produtos · Conversão**

---

## 📄 Licença

Este projeto foi desenvolvido para uma empresa/client e seus conteúdos visuais, identidade de marca, imagens, vídeos e materiais podem estar sujeitos a direitos autorais.

O código deste repositório é disponibilizado para fins de **portfólio e demonstração técnica**, salvo indicação diferente.

---

## ⭐ Gostou do projeto?

Se este projeto chamou sua atenção, considere deixar uma ⭐ no repositório.

Mais projetos e experimentos:

**https://github.com/JS171555?tab=repositories**

---

<p align="center">
  Desenvolvido com foco em código, design e experiência do usuário.
</p>
