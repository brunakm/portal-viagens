export interface Destino {
    id: number;
    nome: string;
    imagem: string;
    descricao: string;
}

export const destinos: Destino[] = [
    {
        id: 1,
        nome: "Paris",
        imagem: "/imagens/paris.jpg",
        descricao: "Conheça a cidade das luzes, famosa pela Torre Eiffel, gastronomia e aquitetura.",
    },

    {
        id: 2,
        nome: "Rio de Janeiro",
        imagem: "/imagens/rio-de-janeiro.jpg",
        descricao: "Descubra praias, paisagens incríveis e os principais pontos turísticos do Rio.",
    },
    
    {
        id: 3,
        nome: "Nova York",
        imagem: "/imagens/nova-york.jpg",
        descricao: "Explore uma das cidades mais famosas do mundo, cheia de cultura, entretenimento e história.",
    },

    {
        id: 4,
        nome: "Tóquio",
        imagem: "/imagens/toquio.jpg",
        descricao: "Uma mistura fascinante entre tecnologia, tradição, cultura e gastronomia japonesa.",
    },
];