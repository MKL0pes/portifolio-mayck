<div align="center">

# Mayck Gabriel Lopes dos Santos

**Estudante de Ciência da Computação (UDF) · Suporte e Helpdesk · Dados · Cibersegurança**

Portfólio pessoal feito do zero com HTML, CSS e JavaScript puros, sem frameworks e sem etapa de build.

![HTML5](https://img.shields.io/badge/HTML5-semântico-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-responsivo-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-puro-F7DF1E?logo=javascript&logoColor=black)
![Dependências](https://img.shields.io/badge/dependências-0-6fcf97)

[Ver o portfólio online](https://mkl0pes.github.io/SEU-REPOSITORIO/) · [LinkedIn](https://www.linkedin.com/in/mayck-lopes-2123253b6/) · [GitHub](https://github.com/MKL0pes)

</div>

---

## Resumo para quem está com pressa

| | |
|---|---|
| **Quem sou** | Estudante do 2º semestre de Ciência da Computação na UDF (Brasília), com formatura prevista para junho de 2029 |
| **O que busco** | Estágio em TI, suporte técnico, helpdesk ou análise de dados |
| **Base técnica** | Python, SQL/MySQL, C, HTML/CSS/JS, Git e GitHub, N8n, Linux e Windows, redes |
| **Diferencial** | Desde 2018 atendo clientes direto em feira livre: comunicação clara, negociação e resolução de problemas no dia a dia |
| **Onde estou** | Sobradinho, DF |

---

## Sobre este repositório

Este é o código do meu portfólio. Eu quis que ele fosse, ao mesmo tempo, uma vitrine dos meus projetos e uma amostra de como eu escrevo código: simples, legível e sem dependências que escondam o que está acontecendo.

O site apresenta quem eu sou, minha formação e experiência, o que estou estudando, projetos publicados e certificações.

## Destaques

- **Zero dependências.** Nada de frameworks, bibliotecas ou ferramentas de build. Basta abrir o `index.html`.
- **Responsivo.** O layout se adapta de celular a desktop, com menu recolhível em telas pequenas.
- **Acessível desde o início.** HTML semântico, rótulos `aria`, foco visível no teclado, mensagens anunciadas por leitores de tela e respeito a `prefers-reduced-motion`.
- **Contato sem backend.** O botão de copiar e-mail usa a Clipboard API (com alternativa para navegadores sem suporte), e o formulário monta uma mensagem pronta no app de e-mail do visitante.
- **Filtro de projetos.** Os cards podem ser filtrados por categoria, em poucas linhas de JavaScript.
- **Fácil de manter.** Cores e medidas ficam em variáveis CSS: trocar o tema é mudar alguns valores no topo do `styles.css`.

## Projetos apresentados no site

| Projeto | O que é | Tecnologias | Link |
|---|---|---|---|
| **Calculadora web** | Calculadora online com as quatro operações, porcentagem e inversão de sinal | HTML, CSS, JavaScript | [Site](https://mkl0pes.github.io/Mine_Projeto_Calculdora/) · [Código](https://github.com/MKL0pes/Mine_Projeto_Calculdora) |
| **Café Fazenda Guanabara** | Vitrine de um café arábica de Ibiraci (MG), com guia de preparo, embalagem em 3D e pedido pelo WhatsApp | Web | [Site](https://cafe-fazenda-guanabara.vercel.app/) |
| **Ladrilhar Spa** | Landing page de um spa de massagem e bem-estar, com serviços, pacotes e mapa | Web | [Site](https://ladrilharspa.vercel.app/) |
| **StudyNotes** | Anotações universitárias organizadas por disciplina, com busca, tags e compartilhamento | Low-code, IA | [Site](https://studynotesmk.vercel.app/) · [Código](https://github.com/MKL0pes/studynotes) |
| **Banco de dados de estoque** | Banco de dados criado para o negócio da minha família, com scripts de criação e inserts | SQL | [Código](https://github.com/MKL0pes/TOP_TEMPEROS) |

## Estrutura do projeto

```text
.
├── index.html    # estrutura e conteúdo da página
├── styles.css    # visual, tema (variáveis CSS) e responsividade
├── script.js     # menu mobile, filtro de projetos, copiar e-mail, formulário e ano do rodapé
└── README.md
```

## Decisões de design e código

**Por que HTML, CSS e JS puros?**
Para praticar os fundamentos da web antes de depender de ferramentas. Entender o que um framework faz por baixo ajuda a usá-lo melhor depois.

**Por que um tema escuro com destaque verde?**
O fundo escuro e sóbrio deixa o texto confortável de ler, e o verde suave é um aceno discreto ao meu hobby de cultivar plantas.

**Por que sem barras de porcentagem de habilidade?**
Porque "80% de Python" não significa nada. Prefiro mostrar o que estou estudando e o que já construí.

**Por que o formulário abre o e-mail em vez de enviar?**
Porque um portfólio estático não precisa de servidor. O visitante revisa a mensagem e envia pelo próprio e-mail, e eu não preciso manter um backend.

## Como rodar localmente

```bash
git clone https://github.com/MKL0pes/SEU-REPOSITORIO.git
cd SEU-REPOSITORIO
```

Depois, é só abrir o `index.html` no navegador. Se preferir um servidor local:

```bash
python3 -m http.server 8000
```

E acessar `http://localhost:8000`.

## Como publicar (GitHub Pages)

1. No repositório, abra **Settings → Pages**.
2. Em **Source**, escolha a branch `main` e a pasta `/ (root)`.
3. Salve. O endereço do site aparece na mesma tela em alguns minutos.

## Personalização

- **Cores:** altere as variáveis no bloco `:root` do `styles.css` (`--accent` controla o destaque).
- **Projetos:** cada card é um `<article class="card project">` no `index.html`. Use `data-category` para definir o filtro em que ele aparece.
- **Contato:** o e-mail exibido fica no elemento `#emailText`.

## Certificações

- Getting Started with Cisco Packet Tracer
- CRUD Operations in MongoDB
- Curso de Git e Github
- Digital Safety and Security Awareness

## Próximos passos

- [ ] Publicar o código dos projetos que hoje estão em repositórios privados
- [ ] Adicionar capturas de tela de cada projeto aos cards
- [ ] Incluir links dos certificados
- [ ] Criar uma versão em inglês

## Contato

Se você tem uma vaga de estágio ou quer trocar uma ideia sobre tecnologia, será um prazer conversar.

- LinkedIn: [linkedin.com/in/mayck-lopes-2123253b6](https://www.linkedin.com/in/mayck-lopes-2123253b6/)
- GitHub: [github.com/MKL0pes](https://github.com/MKL0pes)
- E-mail: gabriel.mayck68@yahoo.com

---

<div align="center">

Feito com atenção aos detalhes por **Mayck Lopes** · Sobradinho, DF

</div>
