import { Link } from "react-router-dom";
import modelo_Jakobson from "../../assets/modelo_1.png";
import modelo_Tradicional from "../../assets/modelo_2.png";


import {
    ArrowLeft,
    User,
    Users,
    MessageSquare,
    Globe,
    Code2,
    Radio
} from "lucide-react";


function ModeloJakobson() {

    const elementos = [
        {
            titulo: "Emisor",
            icono: <User size={24} />,
            descripcion:
                "Es quien produce y transmite el mensaje. Se relaciona con la función emotiva, ya que a través de él se expresan sentimientos, actitudes o estados de ánimo."
        },
        {
            titulo: "Receptor",
            icono: <Users size={24} />,
            descripcion:
                "Es quien recibe e interpreta el mensaje. Se relaciona con la función apelativa, pues el mensaje suele buscar influir en él mediante órdenes, sugerencias o emociones."
        },
        {
            titulo: "Mensaje",
            icono: <MessageSquare size={24} />,
            descripcion:
                "Es la información que se transmite durante el proceso comunicativo. Se relaciona con la función poética, ya que su forma y construcción también comunican."
        },
        {
            titulo: "Contexto",
            icono: <Globe size={24} />,
            descripcion:
                "Es la situación o realidad a la que hace referencia el mensaje. Se relaciona con la función referencial, centrada en información objetiva y verificable."
        },
        {
            titulo: "Código",
            icono: <Code2 size={24} />,
            descripcion:
                "Es el sistema de signos compartido (como el idioma) que permite construir e interpretar el mensaje. Se relaciona con la función metalingüística."
        },
        {
            titulo: "Canal",
            icono: <Radio size={24} />,
            descripcion:
                "Es el medio físico o tecnológico por el cual se transmite el mensaje. Se relaciona con la función fática, que mantiene y verifica el contacto comunicativo."
        }
    ];


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
                        Temática 04
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-[#111827]">
                        Modelo Tradicional VS Modelo de Roman Jakobson
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        Conoce el modelo de comunicación propuesto por
                        Roman Jakobson, compáralo con el modelo tradicional
                        y descubre los elementos que intervienen en el
                        proceso comunicativo.
                    </p>

                </div>


                {/* MODELO TRADICIONAL */}

                <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                        Modelo comunicativo
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#111827]">
                        Modelo tradicional de comunicación
                    </h2>

                    <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">

                        <img
                            src={modelo_Tradicional}
                            alt="Esquema del modelo tradicional de comunicación"
                            className="w-full rounded-2xl border border-slate-200"
                        />

                        <p className="leading-8 text-slate-600">
                            El modelo tradicional, también conocido como
                            modelo de Shannon-Weaver, plantea un proceso
                            simple y lineal: un <strong>emisor</strong> envía
                            un <strong>mensaje</strong>, este viaja a través
                            de un <strong>canal</strong>, y finalmente llega
                            a un <strong>receptor</strong>. Emisor y receptor
                            se conectan directamente entre sí y comparten un
                            mismo <strong>código</strong> para poder
                            entenderse, mientras que el canal se apoya en el{" "}
                            <strong>contexto</strong> como base necesaria
                            para que la comunicación ocurra. Este modelo fue
                            pensado originalmente para explicar la
                            transmisión técnica de información en las
                            telecomunicaciones, por lo que su enfoque está
                            en la eficacia con la que un mensaje llega de un
                            punto a otro, sin detenerse demasiado en su
                            sentido o intención. Un ejemplo cotidiano sería
                            una llamada telefónica: el emisor habla, el
                            mensaje viaja por la red (canal) y llega al
                            receptor.
                        </p>

                    </div>

                </section>


                {/* MODELO DE JAKOBSON */}

                <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                        Modelo comunicativo
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#111827]">
                        Modelo de Roman Jakobson
                    </h2>

                    <div className="mt-6 grid gap-8 md:grid-cols-2 md:items-center">

                        <img
                            src={modelo_Jakobson}
                            alt="Esquema del modelo de comunicación de Roman Jakobson"
                            className="w-full rounded-2xl border border-slate-200"
                        />

                        <p className="leading-8 text-slate-600">
                            El modelo de Jakobson retoma la estructura
                            básica del modelo tradicional, pero la amplía
                            de forma significativa al incorporar el{" "}
                            <strong>contexto</strong> y el{" "}
                            <strong>código</strong> como elementos propios y
                            protagónicos, y no solo como soporte técnico. En
                            este esquema, el proceso ya no es una línea
                            directa entre dos personas, sino un recorrido:
                            el <strong>emisor</strong> parte del contexto,
                            este se apoya en el <strong>canal</strong>, el
                            canal da forma al <strong>mensaje</strong>, y el
                            mensaje depende del código para ser
                            interpretado; el <strong>receptor</strong>{" "}
                            recibe el mensaje, pero también está conectado
                            con ese mismo contexto de origen. A cada uno de
                            estos seis factores, Jakobson le asigna una
                            función del lenguaje predominante: emotiva al
                            emisor, poética al mensaje, apelativa al
                            receptor, referencial al contexto, fática al
                            canal y metalingüística al código.
                        </p>

                    </div>

                </section>


                {/* DIFERENCIA CLAVE */}

                <section className="mt-8 rounded-3xl bg-[#111827] p-8 text-white shadow-lg">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#60a5fa]">
                        Comparación
                    </p>

                    <h2 className="mt-3 text-2xl font-bold">
                        Diferencia clave
                    </h2>

                    <p className="mt-4 leading-8 text-slate-300">
                        El modelo tradicional explica <em>cómo viaja</em> la
                        información entre dos personas, centrándose en el
                        aspecto técnico y mecánico de la transmisión. El
                        modelo de Jakobson explica <em>para qué</em> se usa
                        el lenguaje en cada situación concreta, mostrando
                        que el contexto y el código no son solo apoyo, sino
                        factores con una función propia dentro del proceso
                        comunicativo.
                    </p>

                </section>


                {/* ELEMENTOS */}

                <section className="mt-10">

                    <div className="mb-6">

                        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                            Elementos
                        </p>

                        <h2 className="mt-2 text-3xl font-bold text-[#111827]">
                            Elementos de la comunicación
                        </h2>

                    </div>


                    <div className="grid gap-6 md:grid-cols-2">

                        {elementos.map((elemento) => (

                            <article
                                key={elemento.titulo}
                                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                            >

                                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0063f8]/10 text-[#0063f8]">

                                    {elemento.icono}

                                </div>


                                <h3 className="text-xl font-bold text-[#111827]">
                                    {elemento.titulo}
                                </h3>


                                <p className="mt-3 leading-7 text-slate-600">
                                    {elemento.descripcion}
                                </p>

                            </article>

                        ))}

                    </div>

                </section>


                {/* EJEMPLO */}

                <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                        Aplicación
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#111827]">
                        Ejemplo del modelo
                    </h2>

                    <p className="mt-5 leading-8 text-slate-600">
                        Un ejemplo del modelo de Jakobson aplicado a la vida cotidiana sería una llamada telefónica entre dos amigos: el emisor es quien llama, el receptor quien contesta, y el mensaje es lo que se dicen durante la conversación. El contexto es la situación por la que llaman (por ejemplo, coordinar un plan), el canal es la red telefónica, y el código es el idioma español que ambos comparten. Un simple "¿aló?" al inicio cumple la función fática, y si el emisor exclama "¡qué alegría escucharte!" está usando la función emotiva.
                    </p>

                </section>


            </section>

        </main>

    );

}

export default ModeloJakobson;