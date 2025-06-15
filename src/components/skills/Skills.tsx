
export default function Skills() {
    
    return (
        <section
            id="habilidades"
            className="relative w-full h-full bg-[#292929] py-16 px-6"
        >
            <h2 className="text-4xl font-bold text-center text-white">
                Habilidades
            </h2>

            <div className="max-w-6xl mt-10 mx-auto grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 place-items-center">
                {[
                    { src: "https://profilinator.rishav.dev/skills-assets/cplusplus-original.svg", alt: "C++" },
                    { src: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg", alt: "JavaScript" },
                    { src: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg", alt: "TypeScript" },
                    { src: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg", alt: "Node.js" },
                    { src: "https://profilinator.rishav.dev/skills-assets/linux-original.svg", alt: "Linux" },
                    { src: "https://profilinator.rishav.dev/skills-assets/python-original.svg", alt: "Python" },
                    { src: "https://profilinator.rishav.dev/skills-assets/git-scm-icon.svg", alt: "Git" },
                    { src: "https://profilinator.rishav.dev/skills-assets/gnu_bash-icon.svg", alt: "Bash" },
                    { src: "https://profilinator.rishav.dev/skills-assets/logo-title.svg", alt: "Chart.js" },
                    { src: "https://profilinator.rishav.dev/skills-assets/microsoft_azure-icon.svg", alt: "Azure" },
                    { src: "https://profilinator.rishav.dev/skills-assets/chakraui.png", alt: "Chakra UI" },
                    { src: "https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg", alt: "HTML5" },
                    { src: "https://profilinator.rishav.dev/skills-assets/mysql-original-wordmark.svg", alt: "MySQL" },
                    { src: "https://profilinator.rishav.dev/skills-assets/springio-icon.svg", alt: "Spring" },
                    { src: "https://profilinator.rishav.dev/skills-assets/powerbi.png", alt: "Power BI" },
                    { src: "https://profilinator.rishav.dev/skills-assets/tailwindcss.svg", alt: "Tailwind CSS" },
                    { src: "https://profilinator.rishav.dev/skills-assets/mui.png", alt: "Material UI" },
                    { src: "https://profilinator.rishav.dev/skills-assets/java-original-wordmark.svg", alt: "Java" },
                    { src: "https://profilinator.rishav.dev/skills-assets/kotlinlang-icon.svg", alt: "Kotlin" },
                    { src: "https://profilinator.rishav.dev/skills-assets/postgresql-original-wordmark.svg", alt: "PostgreSQL" },
                    { src: "https://profilinator.rishav.dev/skills-assets/django-original.svg", alt: "Django" },
                    { src: "https://profilinator.rishav.dev/skills-assets/c-original.svg", alt: "C" },
                    { src: "https://profilinator.rishav.dev/skills-assets/figma-icon.svg", alt: "Figma" },
                    { src: "https://profilinator.rishav.dev/skills-assets/docker-original-wordmark.svg", alt: "Docker" },
                ].map(({ src, alt }) => (
                    <img
                        key={alt}
                        src={src}
                        alt={alt}
                        className="w-13 h-13 sm:w-14 sm:h-14 hover:scale-110 transition-transform duration-200 bg-white p-2 rounded-full shadow-lg"
                        title={alt}
                    />
                ))}
            </div>
        </section>
    );
}
