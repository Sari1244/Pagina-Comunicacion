import { useState } from "react";

import { Link } from "react-router-dom";

import {
    ChevronDown,
    MessageSquare,
    HeartHandshake,
    Languages,
    Network,
    Users
} from "lucide-react";


function Tematicas() {

    const [abierto, setAbierto] = useState(null);


    const tematicas = [

        {
            id: 1,

            titulo: "Tipos de comunicación",

            descripcion:
                "Conoce las diferentes formas en que las personas expresan ideas, emociones y opiniones.",

            icono: <MessageSquare size={28} />,

            ruta: "/tematicas/tipos-comunicacion",

            subtemas: [
                "Comunicación agresiva",
                "Comunicación pasiva",
                "Comunicación pasivo-agresiva",
                "Comunicación agresivo-pasiva"
            ]
        },


        {
            id: 2,

            titulo: "Comunicación asertiva",

            descripcion:
                "Conoce la importancia de expresar pensamientos, sentimientos y opiniones de manera clara, respetuosa y equilibrada.",

            icono: <HeartHandshake size={28} />,

            ruta: "/tematicas/comunicacion-asertiva",

            subtemas: [
                "Definición",
                "Características",
                "Importancia",
                "Elementos",
                "Ejemplos",
                "Comunicación asertiva en diferentes contextos"
            ]
        },


        {
            id: 3,

            titulo: "Funciones del lenguaje",

            descripcion:
                "Explora las funciones que puede cumplir el lenguaje dependiendo de la intención comunicativa.",

            icono: <Languages size={28} />,

            ruta: "/tematicas/funciones-lenguaje",

            subtemas: [
                "Función referencial",
                "Función emotiva",
                "Función apelativa",
                "Función fática",
                "Función metalingüística",
                "Función poética"
            ]
        },


        {
            id: 4,

            titulo: "Modelo de Jakobson",

            descripcion:
                "Conoce el modelo de comunicación propuesto por Roman Jakobson y los elementos que participan en el proceso comunicativo.",

            icono: <Network size={28} />,

            ruta: "/tematicas/modelo-jakobson",

            subtemas: [
                "Roman Jakobson",
                "Modelo de la comunicación",
                "Emisor",
                "Receptor",
                "Mensaje",
                "Contexto",
                "Código",
                "Canal"
            ]
        },


        {
            id: 5,

            titulo: "Comunicación no verbal",

            descripcion:
                "Descubre cómo nuestros gestos, movimientos, espacio, voz y entorno también comunican.",

            icono: <Users size={28} />,

            ruta: "/tematicas/comunicacion-no-verbal",

            subtemas: [
                "Kinesis",
                "Microexpresiones",
                "Proxemia",
                "Paralenguaje",
                "Emblemas y ademanes",
                "Vestimenta, protocolo y saludo"
            ]
        }

    ];


    const cambiarTema = (id) => {

        setAbierto(abierto === id ? null : id);

    };


    return (

        <main className="min-h-screen bg-[#f7f5f0]">


            {/* HERO */}

            <section className="mx-auto max-w-7xl px-6 pb-12 pt-16">

                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                    Contenido académico
                </p>

                <h1 className="text-5xl font-bold tracking-tight text-[#111827]">
                    Temáticas
                </h1>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                    Explora los principales temas trabajados durante el
                    proyecto de comunicación.
                </p>

            </section>


            {/* TEMÁTICAS */}

            <section className="mx-auto max-w-5xl px-6 pb-20">

                <div className="space-y-5">

                    {tematicas.map((tematica) => {

                        const estaAbierto =
                            abierto === tematica.id;


                        return (

                            <article
                                key={tematica.id}
                                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md"
                            >


                                {/* ENCABEZADO */}

                                <button
                                    onClick={() =>
                                        cambiarTema(tematica.id)
                                    }
                                    className="flex w-full items-center justify-between gap-5 p-6 text-left transition hover:bg-slate-50"
                                >

                                    <div className="flex items-center gap-5">

                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0063f8]/10 text-[#0063f8]">

                                            {tematica.icono}

                                        </div>


                                        <div>

                                            <h2 className="text-xl font-bold text-[#111827]">

                                                {tematica.titulo}

                                            </h2>


                                            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-500">

                                                {tematica.descripcion}

                                            </p>

                                        </div>

                                    </div>


                                    <ChevronDown
                                        size={24}
                                        className={`shrink-0 text-slate-500 transition-transform duration-300 ${
                                            estaAbierto
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />

                                </button>


                                {/* CONTENIDO DESPLEGABLE */}

                                {estaAbierto && (

                                    <div className="border-t border-slate-100 bg-[#fafafa] px-6 pb-6 pt-5">

                                        <p className="mb-4 text-sm font-semibold text-[#111827]">
                                            Contenido de esta temática
                                        </p>


                                        <div className="grid gap-3 sm:grid-cols-2">

                                            {tematica.subtemas.map(
                                                (subtema, index) => (

                                                    <div
                                                        key={index}
                                                        className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600"
                                                    >
                                                        {subtema}
                                                    </div>

                                                )
                                            )}

                                        </div>


                                        {/* BOTÓN */}

                                        <div className="mt-6">

                                            <Link
                                                to={tematica.ruta}
                                                className="inline-flex items-center rounded-xl bg-[#0063f8] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0052d6]"
                                            >
                                                Explorar temática
                                            </Link>

                                        </div>

                                    </div>

                                )}

                            </article>

                        );

                    })}

                </div>

            </section>

        </main>

    );

}

export default Tematicas;