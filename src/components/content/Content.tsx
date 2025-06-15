import imageFullstack from "../../assets/images/programador-fullstack.jpg";
import iconGithub from "../../assets/images/icon-github.png";
import iconLinkedin from "../../assets/images/icon-linkedin.png";
import WaveBackground from "../waveBackground/WaveBackground";
import iconWhatsapp from "../../assets/images/whatsapp.png";

export default function Home() {
    return (
        <div className="relative">
            <section
                id="home"
                className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-[#111111] flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-12 pt-12 pb-4"
            >

                {/* Redes sociales - visible solo desde sm */}
                <div className="hidden sm:flex flex-col justify-end gap-6 mt-4 pr-4 sm:min-h-[calc(100vh-100px)]">
                    <a href="https://www.linkedin.com/in/diego3026-dev/" target="_blank" rel="noopener noreferrer">
                        <img src={iconLinkedin} alt="LinkedIn" className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/diego3026" target="_blank" rel="noopener noreferrer">
                        <img src={iconGithub} alt="GitHub" className="w-6 h-6" />
                    </a>
                    <a href="https://wa.me/+573242137922" target="_blank" rel="noopener noreferrer">
                        <img src={iconWhatsapp} alt="Whatsapp" className="w-6 h-6" />
                    </a>
                </div>

                {/* Texto principal */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start text-left">
                    <p className="font-cooper text-white text-xl sm:text-2xl">Hola! Soy</p>
                    <h1 className="font-ptsans text-white text-4xl sm:text-5xl md:text-[3.2rem] mb-4">Diego Oñate</h1>
                    <p className="font-cooper text-white text-lg sm:text-xl uppercase tracking-wide mb-2 mt-5">
                        Desarrollador Fullstack
                    </p>
                    <p className="text-white/80 leading-relaxed text-sm sm:text-base mb-4"> 
                        Estudiante de Estadística y programación enfocada al Desarrollo Web Frontend. Como persona amante a los diseños intuitivos y estéticamente agradables busco crear proyectos que brinden la mejor experiencia para el usuario.
                    </p>

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row justify-start gap-4 mt-4">
                        <a
                            href="https://drive.google.com/file/d/1cw7Z8pl0RiAGchulXWuV2ZyZ4jY4vEAk/view?usp=sharing"
                            target="_blank"
                        >
                            <button className="rounded-full px-8 py-3 text-white font-bold text-sm sm:text-base uppercase tracking-wider border hover:shadow-md transition duration-300">
                                Descargar CV
                            </button>
                        </a>
                        <a href="#contacto">
                            <button className="bg-white text-black rounded-full px-8 py-3 font-bold text-sm sm:text-base uppercase tracking-wider hover:shadow-md transition duration-300">
                                Contacto
                            </button>
                        </a>
                    </div>
                </div>

                {/* Imagen principal */}
                <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
                    <img
                        src={imageFullstack}
                        alt="Ilustración mujer y plantas"
                        className="w-52 sm:w-60 md:w-72 lg:w-80"
                    />
                </div>
            </section>

            <WaveBackground />
        </div>
    );
}
