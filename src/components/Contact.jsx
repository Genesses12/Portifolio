  import { useState } from "react";
  const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function encode(data) {

    console.log(setName,setEmail,setMessage)

    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }
  return (
    <section id="contact" className="relative">
    <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          title="map"
          className="absolute inset-0"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          style={{ filter: "opacity(0.7)" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.073754704774!2d-54.59929052597164!3d-20.50320255641131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9486ef68457196d7%3A0x183ef89797208740!2sR.%20Rubi%2C%205%20-%20Vila%20Morumbi%2C%20Campo%20Grande%20-%20MS%2C%2079052-072!5e0!3m2!1spt-BR!2sbr!4v1720195158622!5m2!1spt-BR!2sbr"
        />
        <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              Endereço
            </h2>
            <p className="mt-1">
             Rua rubi ,5 <br />
              Campo grande, MS
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-xs">
              EMAIL
            </h2>
            <a className="text-indigo-400 leading-relaxed">
              genesses12@gmail.com
            </a>
            <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
             Telefone
            </h2>
            <p className="leading-relaxed">(67)993002114</p>
          </div>
        </div>
      </div>
      <form
       
        name="contact"
        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
          Hire Me
        </h2>
        <p className="leading-relaxed mb-5">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
          suscipit officia aspernatur veritatis. Asperiores, aliquid?
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-400">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-400">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label
            htmlFor="message"
            className="leading-7 text-sm text-gray-400">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button onChange={handleSubmit}
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Submit
        </button>
      </form>
    </div>
  </section>
  );
}

export default Contact;
