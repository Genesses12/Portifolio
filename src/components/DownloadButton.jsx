import imageCV from "../img/CV2.png";

const DownloadButton = () => {
  return (
    <div className="flex justify-center items-center">
      <a
        href="./Curriculo.docx"
        className="bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-300 transition duration-300 flex items-center"
        download
      >
        <img className="w-9 h-10" src={imageCV} alt="Download Curriculum" />
      </a>
    </div>
  );
};

export default DownloadButton;
