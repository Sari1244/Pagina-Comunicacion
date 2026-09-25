import { useState } from "react";

import {
    Image,
    FileText,
    File,
    ExternalLink,
    Download,
    X,
    ChevronLeft,
    ChevronRight
} from "lucide-react";


function obtenerExtension(archivo) {

    if (!archivo || typeof archivo !== "string") {
        return "";
    }

    return archivo
        .split(".")
        .pop()
        .toLowerCase();

}


function obtenerTipoArchivo(archivo) {

    const extension = obtenerExtension(archivo);


    if (
        extension === "jpg" ||
        extension === "jpeg" ||
        extension === "png" ||
        extension === "webp"
    ) {

        return {
            tipo: "IMAGEN",
            icono: <Image size={30} />,
            esImagen: true,
            esWord: false,
            esPdf: false
        };

    }


    if (extension === "pdf") {

        return {
            tipo: "PDF",
            icono: <FileText size={30} />,
            esImagen: false,
            esWord: false,
            esPdf: true
        };

    }


    if (
        extension === "doc" ||
        extension === "docx"
    ) {

        return {
            tipo: "WORD",
            icono: <FileText size={30} />,
            esImagen: false,
            esWord: true,
            esPdf: false
        };

    }


    return {
        tipo: "ARCHIVO",
        icono: <File size={30} />,
        esImagen: false,
        esWord: false,
        esPdf: false
    };

}


function EvidenciaCard({
    numero,
    titulo,
    descripcion,
    archivos = []
}) {

    const [modalAbierto, setModalAbierto] = useState(false);

    const [archivoActual, setArchivoActual] = useState(0);


    /*
        Nos aseguramos de que archivos siempre sea un arreglo.
        Así evitamos errores si alguna evidencia tiene
        accidentalmente un solo archivo como texto.
    */

    const archivosArray = Array.isArray(archivos)
        ? archivos
        : archivos
            ? [archivos]
            : [];


    const cantidadArchivos = archivosArray.length;

    const archivoPrincipal = archivosArray[0];

    const informacion = obtenerTipoArchivo(archivoPrincipal);

    const archivoSeleccionado =
        archivosArray[archivoActual];

    const informacionArchivoActual =
        obtenerTipoArchivo(archivoSeleccionado);


    const abrirModal = () => {

        setArchivoActual(0);

        setModalAbierto(true);

    };


    const cerrarModal = () => {

        setModalAbierto(false);

        setArchivoActual(0);

    };


    const cambiarArchivo = (indice) => {

        setArchivoActual(indice);

    };


    const siguienteArchivo = () => {

        const siguiente =
            archivoActual === cantidadArchivos - 1
                ? 0
                : archivoActual + 1;

        setArchivoActual(siguiente);

    };


    const anteriorArchivo = () => {

        const anterior =
            archivoActual === 0
                ? cantidadArchivos - 1
                : archivoActual - 1;

        setArchivoActual(anterior);

    };


    return (
        <>

            {/* ============================= */}
            {/* TARJETA */}
            {/* ============================= */}

            <article
                className="
                    group
                    overflow-hidden
                    rounded-3xl
                    border
                    border-[#eadbd3]
                    bg-white
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                "
            >

                {/* ENCABEZADO */}

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#f0e3dd]
                        bg-[#fff8f5]
                        px-6
                        py-4
                    "
                >

                    <span
                        className="
                            text-sm
                            font-bold
                            tracking-wide
                            text-[#7a3622]
                        "
                    >
                        EVIDENCIA {numero}
                    </span>


                    <span
                        className="
                            rounded-full
                            bg-[#ffd2be]
                            px-3
                            py-1
                            text-xs
                            font-bold
                            text-[#7a3622]
                        "
                    >
                        {informacion.tipo}
                    </span>

                </div>


                {/* CONTENIDO */}

                <div className="p-6">

                    {/* ICONO */}

                    <div
                        className="
                            mb-5
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-[#fff0e9]
                            text-[#f38562]
                            transition-transform
                            duration-300
                            group-hover:scale-105
                        "
                    >
                        {informacion.icono}
                    </div>


                    {/* TITULO */}

                    <h3
                        className="
                            mb-2
                            text-xl
                            font-bold
                            text-[#2b1711]
                        "
                    >
                        {titulo}
                    </h3>


                    {/* DESCRIPCION */}

                    <p
                        className="
                            mb-6
                            min-h-12
                            text-sm
                            leading-6
                            text-[#765f57]
                        "
                    >
                        {descripcion}
                    </p>


                    {/* BOTON */}

                    {cantidadArchivos > 0 && (

                        <button
                            onClick={abrirModal}
                            className="
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-[#f38562]
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-[#7a3622]
                            "
                        >

                            <ExternalLink size={17} />

                            {cantidadArchivos === 1
                                ? "Ver evidencia"
                                : `Ver evidencias (${cantidadArchivos})`}

                        </button>

                    )}


                    {/* SIN ARCHIVO */}

                    {cantidadArchivos === 0 && (

                        <div
                            className="
                                rounded-xl
                                bg-[#fff0e9]
                                px-4
                                py-3
                                text-center
                                text-sm
                                text-[#765f57]
                            "
                        >
                            Evidencia pendiente
                        </div>

                    )}

                </div>

            </article>


            {/* ============================= */}
            {/* MODAL */}
            {/* ============================= */}

            {modalAbierto && (

                <div
                    className="
                        fixed
                        inset-0
                        z-[100]
                        flex
                        items-center
                        justify-center
                        bg-black/70
                        p-4
                    "
                    onClick={cerrarModal}
                >

                    <div
                        className="
                            relative
                            flex
                            max-h-[90vh]
                            w-full
                            max-w-5xl
                            flex-col
                            overflow-hidden
                            rounded-3xl
                            bg-[#fff8f5]
                            p-6
                            shadow-2xl
                        "
                        onClick={(e) => e.stopPropagation()}
                    >


                        {/* BOTON CERRAR */}

                        <button
                            onClick={cerrarModal}
                            className="
                                absolute
                                right-4
                                top-4
                                z-20
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-white
                                text-[#7a3622]
                                shadow-md
                                transition
                                hover:bg-[#ffd2be]
                            "
                        >
                            <X size={22} />
                        </button>


                        {/* TITULO */}

                        <div className="mb-5 pr-12">

                            <p
                                className="
                                    text-xs
                                    font-bold
                                    uppercase
                                    tracking-widest
                                    text-[#f38562]
                                "
                            >
                                Evidencia {numero}
                            </p>


                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-[#2b1711]
                                "
                            >
                                {titulo}
                            </h2>

                        </div>


                        {/* ============================= */}
                        {/* IMAGEN */}
                        {/* ============================= */}

                        {informacionArchivoActual.esImagen && (

                            <div
                                className="
                                    relative
                                    flex
                                    min-h-[350px]
                                    flex-1
                                    items-center
                                    justify-center
                                    overflow-hidden
                                    rounded-2xl
                                    bg-[#2b1711]
                                "
                            >

                                <img
                                    src={archivoSeleccionado}
                                    alt={`${titulo} - imagen ${archivoActual + 1}`}
                                    className="
                                        max-h-[65vh]
                                        max-w-full
                                        rounded-xl
                                        object-contain
                                    "
                                />


                                {/* ANTERIOR */}

                                {cantidadArchivos > 1 && (

                                    <button
                                        onClick={anteriorArchivo}
                                        className="
                                            absolute
                                            left-4
                                            top-1/2
                                            flex
                                            h-11
                                            w-11
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/90
                                            text-[#7a3622]
                                            shadow-lg
                                            transition
                                            hover:bg-[#ffd2be]
                                        "
                                    >
                                        <ChevronLeft size={24} />
                                    </button>

                                )}


                                {/* SIGUIENTE */}

                                {cantidadArchivos > 1 && (

                                    <button
                                        onClick={siguienteArchivo}
                                        className="
                                            absolute
                                            right-4
                                            top-1/2
                                            flex
                                            h-11
                                            w-11
                                            -translate-y-1/2
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-white/90
                                            text-[#7a3622]
                                            shadow-lg
                                            transition
                                            hover:bg-[#ffd2be]
                                        "
                                    >
                                        <ChevronRight size={24} />
                                    </button>

                                )}

                            </div>

                        )}


                        {/* ============================= */}
                        {/* WORD */}
                        {/* ============================= */}

                        {informacionArchivoActual.esWord && (

                            <div
                                className="
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-[#eadbd3]
                                    bg-white
                                    px-8
                                    py-12
                                    text-center
                                "
                            >

                                {/* ICONO WORD */}

                                <div
                                    className="
                                        mb-5
                                        flex
                                        h-24
                                        w-24
                                        items-center
                                        justify-center
                                        rounded-3xl
                                        bg-[#fff0e9]
                                        text-[#f38562]
                                    "
                                >
                                    <FileText size={48} />
                                </div>


                                {/* NOMBRE */}

                                <h3
                                    className="
                                        mb-2
                                        text-2xl
                                        font-bold
                                        text-[#2b1711]
                                    "
                                >
                                    Documento Word
                                </h3>


                                <p
                                    className="
                                        mb-2
                                        text-base
                                        font-semibold
                                        text-[#7a3622]
                                    "
                                >
                                    {archivoSeleccionado
                                        .split("/")
                                        .pop()}
                                </p>


                                <p
                                    className="
                                        mb-7
                                        max-w-lg
                                        text-sm
                                        leading-6
                                        text-[#765f57]
                                    "
                                >
                                    Este documento contiene la evidencia
                                    original con su formato y presentación.
                                    Puedes descargarlo para visualizarlo
                                    correctamente en Word.
                                </p>


                                {/* DESCARGAR WORD */}

                                <a
                                    href={archivoSeleccionado}
                                    download
                                    className="
                                        flex
                                        items-center
                                        justify-center
                                        gap-2
                                        rounded-xl
                                        bg-[#f38562]
                                        px-6
                                        py-3
                                        text-sm
                                        font-bold
                                        text-white
                                        shadow-sm
                                        transition
                                        hover:bg-[#7a3622]
                                    "
                                >

                                    <Download size={19} />

                                    Descargar documento

                                </a>

                            </div>

                        )}


                        {/* ============================= */}
                        {/* PDF */}
                        {/* ============================= */}

                        {informacionArchivoActual.esPdf && (

                            <iframe
                                src={archivoSeleccionado}
                                title={titulo}
                                className="
                                    h-[65vh]
                                    w-full
                                    rounded-2xl
                                    border
                                    border-[#eadbd3]
                                    bg-white
                                "
                            />

                        )}


                        {/* ============================= */}
                        {/* INDICADORES */}
                        {/* ============================= */}

                        {cantidadArchivos > 1 && (

                            <div
                                className="
                                    mt-4
                                    flex
                                    justify-center
                                    gap-2
                                "
                            >

                                {archivosArray.map((archivo, index) => (

                                    <button
                                        key={index}
                                        onClick={() =>
                                            cambiarArchivo(index)
                                        }
                                        aria-label={`Ver archivo ${index + 1}`}
                                        className={`
                                            h-2.5
                                            w-2.5
                                            rounded-full
                                            transition
                                            ${
                                                archivoActual === index
                                                    ? "bg-[#f38562]"
                                                    : "bg-[#e7d5cd]"
                                            }
                                        `}
                                    />

                                ))}

                            </div>

                        )}


                        {/* ============================= */}
                        {/* DESCARGA PARA IMAGEN/PDF */}
                        {/* ============================= */}

                        {!informacionArchivoActual.esWord && (

                            <div
                                className="
                                    mt-5
                                    flex
                                    justify-center
                                "
                            >

                                <a
                                    href={archivoSeleccionado}
                                    download
                                    className="
                                        flex
                                        items-center
                                        gap-2
                                        rounded-xl
                                        border
                                        border-[#e7d5cd]
                                        bg-white
                                        px-5
                                        py-3
                                        text-sm
                                        font-semibold
                                        text-[#7a3622]
                                        transition
                                        hover:bg-[#fff0e9]
                                    "
                                >

                                    <Download size={18} />

                                    Descargar archivo

                                </a>

                            </div>

                        )}

                    </div>

                </div>

            )}

        </>
    );
}


export default EvidenciaCard;