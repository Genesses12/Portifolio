import { ArrowRightIcon } from "@heroicons/react/solid";
import Linkdin from '../img/Link.png';
import Email from '../img/email.png';
import Github from '../img/github3.png';

const Navbar = () => {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="#about" className="ml-3 text-xl">
            GF
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Projetos
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Habilidades
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Formações
          </a>
          <div className="grid grid-cols-3 gap-x-4">
          <a href="https://www.linkedin.com/" target="_blank" className="inline-block">
          <img className="h-12 w-auto" src={Linkdin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/Genesses12" target="_blank" className="inline-block">
          <img className="h-12 w-auto" src={Github} alt="github" />
          </a>
          <a href="https://mail.google.com/mail/u/1/#inbox" target="_blank" className="inline-block">
          <img className="h-12 w-auto" src={Email} alt="Email" />
          </a>
          </div>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Entre em contato
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
