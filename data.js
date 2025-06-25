import aluraImg from "./src/img/alura.png";
import anhangueraImg from "./src/img/Anhanguera.png";
import descomplicaImg from "./src/img/Descomplica.png";
import dioImg from "./src/img/dio.png";
import Ifms from "./src/img/ifms.png";
//imagens dos projetos
import Text from "./src/img/PlaySore.png";
import JuDoces from "./src/img//Judoces.png";
import QrCode from "./src/img/QRCode.jpg";
import Astro from "./src/img/astro.webp";
import BlogAngular from "./src/img//blog.png";
export const projects = [
    {
        title: "playstation-store",
        subtitle: "Um clone do site da playstation-store de vendas de Jogos. ",
        description:
            "Este projeto é um clone da PlayStation Store, desenvolvido com Angular e TypeScript. Ele simula uma loja de jogos digitais, apresentando uma interface moderna e responsiva.",
        image: Text,
        link: "https://playstation-store-nine.vercel.app/",
    },
        {
        title: "Usuário do GitHub",
        subtitle: "buscar informações públicas de usuários.",
        description:
            "app em React + Vite + TypeScript que utiliza a API do GitHub para buscar informações públicas de usuários.",
        image: Astro,
        link: "https://git-hub-pesquisa.vercel.app/",
    },
    {
        title: "Ju doces e Salgados",
        subtitle: "Site de Doces e salgados",
        description:
            "Recentemente, desenvolvi um site para a Ju Doces & Salgados utilizando React e Vite, focando em responsividade, desempenho e uma navegação fluida com React Router. ",
        image: JuDoces,
        link: "https://judoces.vercel.app/",
    },
    {
        title: "Gerador de QRCode",
        subtitle: "Desenvolvido em Reactjs e uso de API externa",
        description:
            "Criei um Gerador de QR Code que permite gerar códigos QR de forma rápida e fácil. Basta inserir um texto ou link, e o QR Code é gerado",
        image: QrCode,
        link: "https://genesses12.github.io/Gerador-de-QR-Code-/",
    },
    {
        title: "Blog",
        subtitle: " Desenvolvido usando Angular e Ts",
        description:
            "É um projeto de blog desenvolvido com Angular e TypeScript, focado em fornecer uma experiência dinâmica e interativa para a publicação de artigos. Ele permite que os usuários visualizem postagens de forma organizada.",
        image: BlogAngular,
        link: "https://blog-atualidades.vercel.app/",
    },
];

export const formacao = [
    {
        quote: "Cursando 2° Semestre em Sistemas para internet na IFMS",
        imagem: Ifms,
    },
    {
        quote: "Superior em analise e desenvolvimento de sistemas na Anhanguera - Concluido 2025.",
        imagem: anhangueraImg,
    },
    {
        quote: "NuBanck + Descomplica, Concluiu curso livre à distância de Fundamentos FrontEnd Development 220h",
        imagem: descomplicaImg,
    },
    {
        quote: "Bootcamp Oracle + Alura INICIANTE EM PROGRAMAÇÃO T3 - ONE / Formação FRONT END T3 - ONE - 175h",
        imagem: aluraImg,
    },
    {
        quote: "Tive á oportunidade de participar do Santander Bootcamp 2023 - Fullstack Java+Angular- 115h",
        imagem: dioImg,
    },
];

export const skills = [
    "JavaScript",
    "Reactjs",
    "PHP",
    "Laravel",
    "Material UI",
    "Angular",
];
