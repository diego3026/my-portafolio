
interface CardProps {
    image: string;
    title: string;
    description: string;
    repoLink: string;
    technologies: string[];
}

export default function Card({
    image,
    title,
    description,
    repoLink,
    technologies,
}: CardProps) {
    return (
        <div
            className="bg-[#2b2b2b] rounded-xl overflow-hidden shadow-lg border border-[#3a3a3a] max-w-md w-full mx-auto"
            data-aos="zoom-in-up"
            data-aos-anchor-placement="center-bottom"
        >
            {/* Imagen */}
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={`Proyecto: ${title}`}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contenido */}
            <div className="p-6 flex flex-col h-full">
                <div>
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-gray-300 text-sm mt-2">{description}</p>
                </div>

                {/* Tecnologías */}
                <div className="mt-4">
                    <p className="text-sm text-gray-400 font-semibold mb-2">Tecnologías:</p>
                    <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="bg-[#3d3d3d] text-white text-xs px-2 py-1 rounded"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Botones */}
                <div className="flex items-center justify-between mt-6 gap-4">
                    <a
                        href={repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-white text-black px-4 py-2 text-sm rounded hover:bg-white transition"
                    >
                        Repositorio
                    </a>
                </div>
            </div>
        </div>
    );
}
