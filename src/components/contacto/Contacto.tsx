export default function Contacto() {
    return (
        <section
            id="contacto"
            className="bg-[#1c1c1c] text-white py-16 px-6"
        >
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Contacto</h2>

                <div className="bg-[#2c2c2c] p-8 rounded-xl shadow-lg mt-10">
                    <p className="text-gray-300 mb-6">
                        Si tienes alguna pregunta, comentario o simplemente quieres
                        saludar, no dudes en enviarme un mensaje. Estoy aquí para
                        ayudarte y me encantaría saber de ti.
                    </p>
                    <form
                        action="https://formsubmit.co/diegoonate3026@gmail.com"
                        method="POST"
                        className="grid grid-cols-1 gap-6"
                    >
                        <div>
                            <label className="block mb-1 font-medium">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Correo electrónico</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Mensaje</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-600 hover:bg-blue-700 transition-colors font-semibold py-3 px-6 rounded-md w-fit mx-auto mt-4"
                        >
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
