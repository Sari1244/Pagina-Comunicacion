import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function FuncionesLenguaje() {

    const funciones = [
        "Función referencial",
        "Función emotiva",
        "Función apelativa",
        "Función fática",
        "Función metalingüística",
        "Función poética"
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
                        Funciones del lenguaje
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        Jakobson identificó seis elementos del proceso comunicativo (emisor, mensaje, receptor, contexto, canal, código) y a cada uno le asoció una función del lenguaje predominante. Entender estas funciones permite reconocer que un mismo idioma puede usarse con propósitos completamente distintos según la intención del hablante, y que casi todo mensaje, sin importar qué tan simple parezca, cumple con alguna de estas seis funciones de forma predominante.
                    </p>

                </div>


                {/* FUNCIONES */}
                <div className="grid gap-6 md:grid-cols-2">

                    {funciones.map((funcion, index) => (

                        <article
                            key={funcion}
                            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >

                            <span className="text-sm font-bold text-[#0063f8]">
                                0{index + 1}
                            </span>

                            <h2 className="mt-3 text-2xl font-bold text-[#111827]">
                                {funcion}
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                Está centrada en el emisor, es decir, en la persona que habla. Su objetivo es expresar sentimientos, estados de ánimo, actitudes o emociones propias, más que transmitir información objetiva. Se reconoce fácilmente porque suele ir cargada de exclamaciones, interjecciones o un tono emocional marcado. Un ejemplo sería cuando alguien recibe una buena noticia y exclama: "¡Qué alegría verte, no sabía que vendrías!". Aquí lo importante no es la información en sí, sino la emoción que el emisor está dejando ver a través de sus palabras.
                            </p>

                        </article>

                    ))}

                </div>


                {/* ROMAN JAKOBSON */}
                <section className="mt-8 rounded-3xl bg-[#111827] p-8 text-white shadow-lg">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
                        Autor
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        Roman Jakobson
                    </h2>

                    <p className="mt-4 max-w-3xl leading-8 text-slate-300">
                        En este apartado puedes incluir la biografía de
                        Roman Jakobson, sus principales aportes a la
                        lingüística y su relación con las funciones del
                        lenguaje.
                    </p>

                </section>

            </section>

        </main>
    );
}

export default FuncionesLenguaje;