
const DownloadButton = () => {
  return (
    <a href="./curriculo.pdf" className='px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300' download> 
      <button>Baixar curriculo</button>
    </a>
  );
}

export default DownloadButton;
