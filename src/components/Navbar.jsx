import { ArrowRightIcon } from "@heroicons/react/solid";
// Imagens redes sociais
import Linkdin from "../img/Link.png";
import Email from "../img/email.png";
import Github from "../img/github3.png";
// Components
import DownloadButton from "./DownloadButton";

const Navbar = () => {
  return (
    <header className="bg-gray-800 sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo */}
        <a
          href="#about"
          className="title-font font-medium text-white mb-4 md:mb-0 text-xl hidden md:block"
        >
          GF
        </a>

        {/* Navegação Principal */}
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projetos
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Formações
          </a>
        </nav>

        {/* Ícones de Redes Sociais e Download Button */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              className="h-8 w-8 md:h-12 md:w-auto"
              src={Linkdin}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://github.com/Genesses12"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              className="h-8 w-8 md:h-12 md:w-auto"
              src={Github}
              alt="Github"
            />
          </a>
          <a
            href="https://mail.google.com/mail/u/1/#inbox"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <img
              className="h-8 w-8 md:h-12 md:w-auto"
              src={Email}
              alt="Email"
            />
          </a>
          <DownloadButton />
        </div>

        {/* Botão de Contato - Oculto em telas pequenas */}
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-2 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 md:ml-4 hidden md:inline-flex"
        >
          Entre em contato
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
