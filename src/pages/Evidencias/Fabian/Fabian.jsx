import EvidenciaCard from "../../components/EvidenciaCard";

import evidencia_Fabian_1 from "../../../assets/Sapa_Caramelo_Fabian.png";
import evidencia_funcion_lenguaje from "../../../assets/Funciones_Lenguaje_Fabian.pdf";

function Fabian() {

    const evidencias = [

        {
            numero: "01",
            titulo: "La Sapa Caramelo",
            descripcion:
                "Actividad realizada sobre la comunicación y el trabajo desarrollado.",
            archivos: [
                evidencia_Fabian_1
            ]
        },

        {
            numero: "02",
            titulo: "Tipos de Comunicación",
            descripcion:
                "Actividad sobre los diferentes tipos de comunicación.",
            archivos: [
                "/Tipos_Comunicacion_Fabian.docx"
            ]
        },

        {
            numero: "03",
            titulo: "Funciones Del Lenguaje: Emotiva",
            descripcion:
                "Presentación de la función emotiva.",
            archivos: [
                evidencia_funcion_lenguaje
            ]
        },

        {
            numero: "04",
            titulo: "Comunicación No Verbal: Paralenguaje",
            descripcion:
                "Documento: comunicación No Verbal.",
            archivos: [
                "/Comunicacion_No_Verbal_Fabian.docx"
            ]
        },
        {
            numero: "05",
            titulo: "Escenas de la Película",
            descripcion:
                "Escenas del vídeo: El abuelo.",
            archivos: [
                "/Escenas_Pelicula_Fabian.docx"
            ]
        }

    ];

    return (
        <main className="min-h-screen bg-[#fff8f5]">

            <section className="mx-auto max-w-7xl px-6 py-16">

                <div className="mb-12">

                    <p className="mb-2 text-sm font-bold uppercase tracking-widest text-[#f38562]">
                        Evidencias
                    </p>

                    <h1 className="text-4xl font-bold text-[#2b1711]">
                        Evidencias de Fabian Delgado
                    </h1>

                    <p className="mt-3 max-w-2xl text-[#765f57]">
                        Actividades y trabajos realizados durante el proyecto.
                    </p>

                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {evidencias.map((evidencia) => (

                        <EvidenciaCard
                            key={evidencia.numero}
                            {...evidencia}
                        />

                    ))}

                </div>

            </section>

        </main>
    );
}

export default Fabian;