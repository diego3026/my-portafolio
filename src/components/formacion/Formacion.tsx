import estudios from "../../data/estudios.json";

export default function Formacion() {

    return (
        <section id="formacion" className="bg-[#1c1c1c] text-white py-16 px-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Formación Académica</h2>
                
                <div className="relative border-l-2 border-gray-700 ml-4 mt-10">
                    {estudios.map((item, idx) => (
                        <div key={idx} className="mb-10 ml-6 relative">
                            <div className="absolute w-3 h-3 bg-white rounded-full left-[-30px] top-2 border-1 border-blue-500" />
                            
                            <h3 className="text-xl font-semibold">{item.titulo}</h3>
                            <span className="text-sm text-gray-400">{item.institucion} &middot; {item.fecha}</span>
                            <p className="text-gray-300 mt-2">{item.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
