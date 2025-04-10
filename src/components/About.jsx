import { CodeIcon } from "@heroicons/react/solid"; // Para v1
// Para v2
import FotoPerfil from "../img/perfil.jpg";

const About = () => {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Olá, me chamo Genesses.
                        <br className="hidden lg:inline-block" />
                        Adoro criar soluções incríveis.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Sempre fui curioso por tecnologia e hoje busco uma
                        oportunidade como desenvolvedor. Quero fazer parte de
                        uma equipe onde eu possa aprender com os desafios do dia
                        a dia, trocar conhecimento e crescer junto.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg"
                        >
                            Entre em contato
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg"
                        >
                            Meus Projetos
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={FotoPerfil}
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
