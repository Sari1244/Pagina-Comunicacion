import { Link } from "react-router-dom";

import {
    ArrowLeft,
    CheckCircle2,
    MessageCircle,
    HeartHandshake,
    Lightbulb
} from "lucide-react";

import comunicacionAsertiva from "../../assets/comunicacion-asertiva.webp";


function ComunicacionAsertiva() {

    return (

        <main className="min-h-screen bg-[#f7f5f0]">


            <section className="mx-auto max-w-6xl px-6 py-16">


                {/* VOLVER */}

                <Link
                    to="/tematicas"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0063f8] transition-all hover:gap-3"
                >
                    <ArrowLeft size={18} />
                    Volver a Temáticas
                </Link>


                {/* ENCABEZADO */}

                <div className="mb-12">

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                        Temática 02
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-[#111827]">
                        Comunicación asertiva
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        La comunicación asertiva permite expresar ideas,
                        sentimientos, necesidades y opiniones de manera
                        clara, directa y respetuosa.
                    </p>

                </div>


                {/* IMAGEN */}

                <section className="mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

                    <img
                        src={comunicacionAsertiva}
                        alt="Comunicación asertiva"
                        className="max-h-137.5 w-full object-cover"
                    />

                </section>


                {/* INTRODUCCIÓN */}

                <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                    <div className="mb-5 flex items-center gap-4">

                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0063f8]/10 text-[#0063f8]">
                            <MessageCircle size={25} />
                        </div>

                        <h2 className="text-2xl font-bold text-[#111827]">
                            ¿Qué es la comunicación asertiva?
                        </h2>

                    </div>


                    <p className="leading-8 text-slate-600">
                        La comunicación asertiva es el estilo de comunicación
                        más equilibrado y saludable, ya que se ubica entre
                        los extremos de la agresividad y la pasividad. Se
                        caracteriza por ser clara, directa y empática: la
                        persona expresa lo que piensa y siente de manera
                        honesta, respetando al mismo tiempo los sentimientos
                        y el punto de vista del otro. Se apoya en la
                        inteligencia emocional para transmitir la intención
                        real detrás del mensaje, evitando tanto imponerse
                        sobre el otro como reprimir lo que realmente se
                        quiere decir. Todo esto tiene como base un mismo
                        principio: el respeto, tanto hacia quien habla como
                        hacia quien escucha.
                    </p>

                </section>


                {/* CARACTERÍSTICAS */}

                <section className="mt-6">

                    <div className="mb-6">

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                            Características
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-[#111827]">
                            Elementos de una comunicación asertiva
                        </h2>

                    </div>


                    <div className="grid gap-6 md:grid-cols-2">


                        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0063f8]/10 text-[#0063f8]">

                                <CheckCircle2 size={24} />

                            </div>

                            <h3 className="text-xl font-bold text-[#111827]">
                                Palabra correcta
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Consiste en decir exactamente lo que se
                                quiere decir, sin rodeos ni ambigüedades, y
                                sin disfrazar el mensaje ni cargarlo de
                                agresividad innecesaria. Por ejemplo, decir
                                "necesito que terminemos el proyecto a
                                tiempo" en lugar de acusar o quedarse callado
                                esperando que el otro lo adivine.
                            </p>

                        </article>


                        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0063f8]/10 text-[#0063f8]">

                                <HeartHandshake size={24} />

                            </div>

                            <h3 className="text-xl font-bold text-[#111827]">
                                Respeto
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Es la base de todo el estilo asertivo: se
                                expresa lo que se piensa y se siente sin
                                imponerse sobre el otro, considerando sus
                                emociones, opiniones y derechos tanto como
                                los propios, de forma que ninguna de las dos
                                partes salga afectada por el mensaje.
                            </p>

                        </article>


                        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0063f8]/10 text-[#0063f8]">

                                <MessageCircle size={24} />

                            </div>

                            <h3 className="text-xl font-bold text-[#111827]">
                                Entonación precisa
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                El tono de voz debe acompañar el mensaje que
                                se quiere transmitir: no es lo mismo decir
                                algo con un tono calmado y firme que con un
                                tono elevado o inseguro. La entonación
                                asertiva es serena, pero segura.
                            </p>

                        </article>


                        <article className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0063f8]/10 text-[#0063f8]">

                                <Lightbulb size={24} />

                            </div>

                            <h3 className="text-xl font-bold text-[#111827]">
                                Acciones coherentes y congruentes
                            </h3>

                            <p className="mt-3 leading-7 text-slate-600">
                                Lo que la persona hace debe confirmar lo que
                                dice. Si alguien afirma que va a mejorar en
                                algo, sus acciones posteriores deben reflejar
                                ese compromiso, porque de lo contrario el
                                mensaje pierde credibilidad, sin importar
                                qué tan bien haya sido dicho.
                            </p>

                        </article>


                    </div>

                </section>


                {/* IMPORTANCIA */}

                <section className="mt-10 rounded-3xl bg-[#111827] p-8 text-white shadow-lg">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
                        Importancia
                    </p>

                    <h2 className="mt-3 text-3xl font-bold">
                        ¿Por qué es importante?
                    </h2>

                    <p className="mt-5 max-w-4xl leading-8 text-slate-300">
                        La comunicación asertiva es importante porque
                        favorece relaciones más sanas, disminuye el
                        conflicto innecesario y fortalece la confianza tanto
                        en uno mismo como en los demás. A diferencia de
                        otros estilos como el agresivo o el pasivo, que
                        pueden generar heridas emocionales, frustración o
                        baja autoestima, la asertividad permite expresar
                        necesidades y opiniones sin dañar al otro ni
                        reprimirse a uno mismo. Esto la convierte en una
                        herramienta clave en el ámbito familiar, académico,
                        laboral y social, ya que facilita la resolución sana
                        de diferencias y el respeto mutuo en cualquier tipo
                        de relación.
                    </p>

                </section>


                {/* EJEMPLOS */}

                <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                        Aplicación
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#111827]">
                        Ejemplos de comunicación asertiva
                    </h2>

                    <p className="mt-4 leading-8 text-slate-600">
                        Un ejemplo de comunicación asertiva sería decirle a
                        un amigo: "Me molestó que llegaras tarde sin avisar,
                        me hubiera gustado que me escribieras", en lugar de
                        gritarle (agresivo), quedarse callado y molesto por
                        dentro (pasivo), o hacer un comentario sarcástico al
                        respecto (pasivo-agresivo). Otro ejemplo sería, en
                        el trabajo, decir "necesito más tiempo para
                        terminar esta tarea con calidad, ¿podemos moverla
                        para mañana?" en lugar de aceptar una fecha
                        imposible por miedo a decir que no.
                    </p>

                </section>


            </section>

        </main>

    );

}

export default ComunicacionAsertiva;