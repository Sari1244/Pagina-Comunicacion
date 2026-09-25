import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function ComunicacionNoVerbal() {

    const temas = [
        {
            titulo: "Kinesis",
            descripcion:
                "Estudia los movimientos corporales, gestos y expresiones que participan en la comunicación."
        },
        {
            titulo: "Microexpresiones",
            descripcion:
                "Pequeñas expresiones faciales que pueden aparecer durante una interacción comunicativa."
        },
        {
            titulo: "Proxemia",
            descripcion:
                "Analiza el uso del espacio y las distancias entre las personas durante la comunicación."
        },
        {
            titulo: "Paralenguaje",
            descripcion:
                "Comprende elementos de la voz como el tono, volumen, ritmo y velocidad."
        },
        {
            titulo: "Emblemas y ademanes",
            descripcion:
                "Incluye gestos y movimientos corporales que pueden transmitir determinados significados."
        },
        {
            titulo: "Entorno social",
            descripcion:
                "Incluye aspectos como la vestimenta, el protocolo y el saludo dentro de diferentes contextos sociales."
        }
    ];

    return (
        <main className="min-h-screen bg-[#f7f5f0]">

            <section className="mx-auto max-w-6xl px-6 py-16">

                <Link
                    to="/tematicas"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0063f8] transition hover:gap-3"
                >
                    <ArrowLeft size={18} />
                    Volver a Temáticas
                </Link>


                <div className="mb-12">

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                        Temática
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-[#111827]">
                        Comunicación no verbal
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        La comunicación no verbal comprende diferentes
                        elementos que permiten transmitir información sin
                        depender exclusivamente de las palabras.
                    </p>

                </div>


                {/* TEMAS */}
                <div className="grid gap-6 md:grid-cols-2">

                    {temas.map((tema, index) => (

                        <article
                            key={tema.titulo}
                            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >

                            <span className="text-sm font-bold text-[#0063f8]">
                                0{index + 1}
                            </span>

                            <h2 className="mt-3 text-2xl font-bold text-[#111827]">
                                {tema.titulo}
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                {tema.descripcion}
                            </p>

                        </article>

                    ))}

                </div>


                {/* ENTORNO SOCIAL */}
                <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                    <h2 className="text-2xl font-bold text-[#111827]">
                        Comunicación no verbal desde el entorno social
                    </h2>

                    <div className="mt-5 grid gap-4 sm:grid-cols-3">

                        <div className="rounded-2xl bg-[#f7f5f0] p-5">
                            <h3 className="font-bold text-[#111827]">
                                Vestimenta
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Información que puede transmitir nuestra
                                apariencia y forma de vestir.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#f7f5f0] p-5">
                            <h3 className="font-bold text-[#111827]">
                                Protocolo
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Normas y comportamientos utilizados en
                                diferentes situaciones sociales.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#f7f5f0] p-5">
                            <h3 className="font-bold text-[#111827]">
                                Saludo
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Una forma de establecer contacto e iniciar
                                una interacción con otras personas.
                            </p>
                        </div>

                    </div>

                </section>

            </section>

        </main>
    );
}

export default ComunicacionNoVerbal;