import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";
import { formacao } from "../../data.js";

function Formacao() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Formações
        </h1>
        <div className="flex flex-wrap m-4">
          {formacao.map((formacao, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <TerminalIcon className="block w-8 text-gray-500 mb-4" />
                <p className="leading-relaxed mb-6">{formacao.quote}</p>
                <div className="inline-flex items-center">
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <img
                      className="w-60 h-30 flex-shrink-0 object-cover object-center"
                      src={formacao.imagem}
                      alt="Faculdade"
                    />
                  </motion.div>
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="text-gray-500 text-sm uppercase">
                      {formacao.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Formacao;
