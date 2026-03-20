const Footer = () => {
  return (
    <footer className="w-full mt-auto py-8 px-4 border-t border-white/5 bg-neutral ">
      <div className="lg:max-w-5xllg:w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-3">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 hover:opacity-100 transition-opacity"
          >
            <img src="/themoviedb-logo.svg" alt="TMDB Logo" className="h-6" />
          </a>
          <p className="text-[10px] uppercase tracking-widest text-gray-500 max-w-[300px] text-center md:text-left leading-relaxed">
            Este producto utiliza la API de{" "}
            <span className="text-gray-400">TMDb</span> pero no está avalado ni
            certificado por ellos.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-xs text-gray-400 font-medium">Hecho con ♥️</p>
          <p className="text-[10px] text-gray-600">
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
