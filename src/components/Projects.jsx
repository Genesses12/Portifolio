import { projects } from "../../data.js";

const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-20 rounded-lg">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
              Projetos
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base rounded-lg">
              Confira alguns dos projetos que desenvolvi, utilizando diferentes
              tecnologias como Angular, React, TypeScript e mais.
            </p>
          </div>
        
           <div className="flex flex-wrap -m-4 rounded-lg">
          {projects.map((project) => (
           
              <a href={project.link} className="sm:w-1/2 p-4 rounded-lg">

                <div className="relative h-[300px] flex flex-col justify-end">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg"
                    src={project.image}
                  />
                  <div className="rounded-lg px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {project.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {project.title}
                    </h1>
                    <p className="leading-relaxed">{project.description}</p>
                  </div>
                </div>
              </a>
            
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
