import { useState, useEffect } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");

            let currentSection = "home"; // valor por defecto

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                // Detecta si está aproximadamente en el centro de la pantalla
                if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // ejecuta al cargar

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed w-full h-[82px] top-0 left-0 z-50 bg-[#111111] shadow-md px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold text-white-800">
                    Mi Portafolio
                </h1>

                {/* Botón hamburguesa (solo en móvil) */}
                <button
                    className="flex flex-col gap-1 lg:hidden p-2 rounded hover:bg-white/10 transition"
                    onClick={toggleMenu}
                    aria-label="Toggle Menu"
                >
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                    <span className="w-6 h-0.5 bg-white"></span>
                </button>
                
                <nav
                    className={`${isMenuOpen ? "flex bg-[#111111] text-white" : "hidden"
                        } absolute top-16 left-0 w-full flex-col items-center gap-4 py-4 shadow-md md:shadow-none md:static md:flex md:flex-row md:w-auto md:gap-6 md:bg-transparent`}
                >
                    <a href="#home"
                        className={`${activeSection === "home" ? "text-white border-b-2 border-white" : "text-white-600"} font-bold transition-colors`}>
                        Home
                    </a>
                    <a href="#habilidades"
                        className={`${activeSection === "habilidades" ? "text-white border-b-2 border-white" : "text-white-600"} font-bold`}>
                        Habilidades
                    </a>
                    <a href="#experiencia"
                        className={`${activeSection === "experiencia" ? "text-white border-b-2 border-white" : "text-white-600"} font-bold`}>
                        Experiencia
                    </a>
                    <a href="#proyectos"
                        className={`${activeSection === "proyectos" ? "text-white border-b-2 border-white" : "text-white-600"} font-bold`}>
                        Proyectos
                    </a>
                    <a href="#formacion"
                        className={`${activeSection === "formacion" ? "text-white border-b-2 border-white" : "text-white-600"} font-bold`}>
                        Formación
                    </a>
                    <a href="#contacto"
                        className={`${activeSection === "contacto" ? "text-white border-b-2 border-white" : "text-white-600"} font-bold`}>
                        Contacto
                    </a>
                </nav>
            </div>
        </header>
    );
}
