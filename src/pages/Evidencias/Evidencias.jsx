import { Link } from "react-router-dom";
import { User, ArrowRight, FileText } from "lucide-react";

function Evidencias() {

    return (
        <section
            className="
                min-h-screen
                bg-[#fff8f5]
            "
        >

            {/* Encabezado */}
            <div
                className="
                    border-b
                    border-[#eadbd3]
                    bg-[#fff8f5]
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-6
                        py-20
                        text-center
                    "
                >

                    <span
                        className="
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            bg-[#ffd2be]
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-[#7a3622]
                        "
                    >
                        <FileText size={17} />
                        Trabajos realizados
                    </span>


                    <h1
                        className="
                            mt-6
                            text-5xl
                            font-bold
                            tracking-tight
                            text-[#2b1711]
                        "
                    >
                        Evidencias
                    </h1>


                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-lg
                            leading-8
                            text-[#765f57]
                        "
                    >
                        En esta sección encontrarás las evidencias
                        realizadas por cada integrante del equipo
                        durante el desarrollo del proyecto.
                    </p>

                </div>

            </div>


            {/* Integrantes */}
            <div
                className="
                    mx-auto
                    grid
                    max-w-7xl
                    gap-8
                    px-6
                    py-16
                    md:grid-cols-2
                "
            >

                {/* SARIAH */}
                <article
                    className="
                        rounded-3xl
                        border
                        border-[#eadbd3]
                        bg-white
                        p-8
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#ffd2be]
                            text-[#7a3622]
                        "
                    >
                        <User size={30} />
                    </div>


                    <p
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-widest
                            text-[#f38562]
                        "
                    >
                        Integrante
                    </p>


                    <h2
                        className="
                            mt-2
                            text-3xl
                            font-bold
                            text-[#2b1711]
                        "
                    >
                        Sariah
                    </h2>


                    <p
                        className="
                            mt-4
                            leading-7
                            text-[#765f57]
                        "
                    >
                        Consulta aquí las evidencias correspondientes
                        al trabajo realizado por Sariah.
                    </p>


                    <Link
                        to="/evidencias/sariah"
                        className="
                            mt-7
                            inline-flex
                            items-center
                            gap-2
                            font-semibold
                            text-[#7a3622]
                            transition-all
                            hover:gap-3
                        "
                    >
                        Ver evidencias
                        <ArrowRight size={18} />
                    </Link>

                </article>


                {/* FABIAN */}
                <article
                    className="
                        rounded-3xl
                        border
                        border-[#eadbd3]
                        bg-white
                        p-8
                        shadow-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:shadow-xl
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#ffd2be]
                            text-[#7a3622]
                        "
                    >
                        <User size={30} />
                    </div>


                    <p
                        className="
                            text-sm
                            font-semibold
                            uppercase
                            tracking-widest
                            text-[#f38562]
                        "
                    >
                        Integrante
                    </p>


                    <h2
                        className="
                            mt-2
                            text-3xl
                            font-bold
                            text-[#2b1711]
                        "
                    >
                        Fabian
                    </h2>


                    <p
                        className="
                            mt-4
                            leading-7
                            text-[#765f57]
                        "
                    >
                        Consulta aquí las evidencias correspondientes
                        al trabajo realizado por Fabian.
                    </p>


                    <Link
                        to="/evidencias/fabian"
                        className="
                            mt-7
                            inline-flex
                            items-center
                            gap-2
                            font-semibold
                            text-[#7a3622]
                            transition-all
                            hover:gap-3
                        "
                    >
                        Ver evidencias
                        <ArrowRight size={18} />
                    </Link>

                </article>

            </div>

        </section>
    );
}

export default Evidencias;