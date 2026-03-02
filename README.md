# Organo

Aplicação web para visualização e gestão de organograma de equipes. Permite cadastrar colaboradores e exibi-los em cards organizados por time, com cores distintas para cada área.

## Tecnologias

- **React** 18
- **TypeScript**
- **Create React App** (react-scripts)
- CSS modular por componente

## Estrutura do projeto

```
src/
├── App.tsx                 # Componente principal e estado dos colaboradores
├── index.tsx               # Ponto de entrada da aplicação
├── index.css               # Estilos globais
└── componentes/
    ├── Banner/             # Banner do topo da página
    ├── Formulario/         # Formulário de cadastro de colaboradores
    ├── Time/               # Seção que exibe um time e seus colaboradores
    ├── Colaborador/        # Card do colaborador (foto, nome, cargo)
    ├── Botao/              # Botão reutilizável
    ├── CampoTexto/         # Input de texto com label
    └── ListaSuspensa/      # Select para escolha do time
```

## Times disponíveis

- Programação
- Front-End
- Data Science
- Devops
- UX e Design
- Mobile
- Inovação e Gestão

Cada time possui uma cor primária e secundária próprias, usadas nos cards dos colaboradores.

## Como executar

### Pré-requisitos

- Node.js (recomendado: LTS)
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm start
```

Abre em [http://localhost:3000](http://localhost:3000).

### Build para produção

```bash
npm run build
```

### Testes

```bash
npm test
```

## Como usar

1. Preencha o formulário com **Nome**, **Cargo**, **Imagem** (URL) e **Time** do colaborador.
2. Clique em **Criar Card**.
3. O colaborador aparece no card do time correspondente, com a cor do time.

## Licença

Projeto de uso educacional/demonstrativo.
