import { Glossary, Story } from "../app/interfaces";

export const glossaryDB: Glossary[] = [
  { id: 1, title: 'Cor do pecado', description: 'Usada para chamar atenção, reforça a hipersexualização da mulher negra, agravada pela ideia negativa de "pecado" em uma sociedade religiosa como a brasileira', statusOpen: false },
  { id: 2, title: 'A coisa tá preta', description: 'A fala racista associa "preto" a algo desagradável, difícil ou perigoso.', statusOpen: false },
  { id: 3, title: 'Serviço de preto', description: 'Preto é associado a algo ruim, ligando de forma racista a ideia de trabalho malfeito ao negro.', statusOpen: false },
  { id: 4, title: 'Ovelha negra', description: 'Termo pejorativo que associa o preto ao ruim, sugerindo uma presença ou existência desagradável.', statusOpen: false },
  { id: 5, title: 'Lista negra', description: 'é um termo usado para se referir a um registro de pessoas, organizações ou coisas consideradas indesejáveis ou proibidas.', statusOpen: false },
]



export const stories: Story[] = [
  {
    id: 100,
    porfileUrl: 'https://i.postimg.cc/0NYXdHX5/Imagem-do-Whats-App-de-2025-01-21-s-21-40-56-29ac0870.jpg',
    authorName: 'Jaaziel da Silva',
    urlCanva: 'https://img.freepik.com/fotos-premium/um-personagem-3d-de-menino-negro-gerado-por-ai_911330-241.jpg',
    description: 'Uma imagem muito boa',
    folderUrl: 'https://i.postimg.cc/66nqVVtj/Imagem-do-Whats-App-de-2025-01-13-s-12-46-57-5bea79a5.jpg',
    instagram: '',
    instagramUrl: ''
  },
  {
    id: 200,
    porfileUrl: 'data:image/jpeg;base64,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',
    authorName: 'Jamilly Menezes',
    urlCanva: 'https://img.freepik.com/fotos-premium/um-personagem-3d-de-menino-negro-gerado-por-ai_911330-241.jpg',
    description: 'Uma imagem muito boa',
    folderUrl: 'https://i.postimg.cc/66nqVVtj/Imagem-do-Whats-App-de-2025-01-13-s-12-46-57-5bea79a5.jpg',
    instagram: '',
    instagramUrl: ''
  },
  {
    id: 300,
    porfileUrl: 'https://i.postimg.cc/ZRjfXvh1/Captura-de-tela-2025-01-21-214528.png',
    authorName: 'Luciano Mendes',
    urlCanva: 'https://img.freepik.com/fotos-premium/um-personagem-3d-de-menino-negro-gerado-por-ai_911330-241.jpg',
    description: 'Uma imagem muito boa',
    folderUrl: 'https://i.postimg.cc/66nqVVtj/Imagem-do-Whats-App-de-2025-01-13-s-12-46-57-5bea79a5.jpg',
    instagram: '',
    instagramUrl: ''
  },

]
