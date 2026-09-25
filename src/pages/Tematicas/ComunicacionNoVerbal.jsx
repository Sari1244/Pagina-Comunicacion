import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function ComunicacionNoVerbal() {

    const temas = [
        {
            titulo: "Kinesis",
            descripcion:
                "Estudia los movimientos corporales, los gestos y las posturas como parte fundamental del mensaje que se transmite, incluso cuando no hay palabras de por medio. Se relaciona con la función emotiva, ya que a través del cuerpo se transmite seguridad o inseguridad, comodidad o incomodidad, sin necesidad de decirlo verbalmente. Puede manifestarse en posturas abiertas, como estar de pie con los brazos relajados, lo cual transmite disposición; o en posturas cerradas, como cruzar los brazos, interpretado como defensa o desinterés. Por ejemplo, en una entrevista de trabajo, mantener los brazos cruzados y evitar el contacto visual transmite nerviosismo, aunque verbalmente se responda con seguridad."
        },
        {
            titulo: "Microexpresiones",
            descripcion:
                "Son expresiones faciales extremadamente breves e involuntarias, basadas en los estudios de Paul Ekman, que aparecen y desaparecen en fracciones de segundo y delatan la emoción real de una persona, incluso cuando intenta ocultarla conscientemente. Ekman identificó siete emociones básicas universales, reconocibles en cualquier cultura: alegría, tristeza, miedo, ira, sorpresa, asco y desprecio. Se estudian no solo en su forma, sino también en la intensidad con que se manifiestan en el rostro. Por ejemplo, una persona puede dejar escapar por una fracción de segundo un gesto de tensión en la mandíbula al recibir una noticia que dice que le agrada, revelando una molestia real que sus palabras no expresan."
        },
        {
            titulo: "Proxemia",
            descripcion:
                "Analiza el uso y manejo del espacio físico y la distancia que las personas mantienen entre sí durante una interacción, distinguiendo generalmente cuatro tipos de distancia: íntima, personal, social y pública. Se relaciona con la función apelativa, porque la distancia elegida comunica el tipo de relación y la intención hacia el otro. Por ejemplo, hablar a pocos centímetros del rostro de alguien es propio de relaciones muy cercanas, y hacerlo con un desconocido puede generar incomodidad o interpretarse como una invasión del espacio personal, mientras que mantener una distancia mayor en una presentación pública responde a una relación más formal."
        },
        {
            titulo: "Paralenguaje",
            descripcion:
                "Comprende todos los elementos que acompañan a la voz sin ser propiamente palabras, como el tono, el volumen, el timbre y el ritmo con el que se habla, además de recursos como las onomatopeyas y las segmentaciones lingüísticas dentro del discurso oral. Se relaciona con la función fática, ya que contribuye a mantener y regular el canal de comunicación, ayudando a sostener la atención del receptor. Un ejemplo claro es cómo una misma frase, como 'qué bien', puede transmitir alegría genuina o sarcasmo dependiendo únicamente del tono y el ritmo con que se pronuncie, sin que las palabras cambien en absoluto."
        },
        {
            titulo: "Emblemas y ademanes",
            descripcion:
                "Son gestos que poseen un significado propio y reconocible, independientemente de las palabras que los acompañen, y que pueden sustituir por completo a un mensaje verbal. Se clasifican en conscientes, que a su vez pueden ser universales, especiales o culturales; e inconscientes, que pueden ser naturales (como morderse las uñas por nervios) o artificiales (gestos aprendidos que se repiten de forma automática). Por ejemplo, el gesto de pulgar arriba para indicar aprobación es un emblema consciente y universal, mientras que tocarse el cuello repetidamente durante una conversación tensa es un gesto inconsciente."
        },
        {
            titulo: "Entorno social",
            descripcion:
                "Más allá del cuerpo y el rostro, elementos como el protocolo, la vestimenta y el saludo también forman parte activa de la comunicación no verbal, ya que están ligados al código compartido dentro de un grupo social determinado. Estos elementos indican pertenencia a un grupo, jerarquía, nivel de formalidad o el tipo de vínculo que se busca establecer con la otra persona, incluso antes de que se pronuncie una sola palabra. Por ejemplo, presentarse a una entrevista con vestimenta formal comunica seriedad, mientras que un saludo de mano firme transmite seguridad, en contraste con uno débil o evasivo."
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
                        La comunicación no verbal comprende todos los elementos que permiten transmitir información sin depender exclusivamente de las palabras: el cuerpo, el rostro, el espacio, la voz e incluso la forma de vestir comunican tanto o más que el propio discurso hablado. Reconocer estos elementos permite entender un mensaje de forma más completa, más allá de lo que se dice explícitamente.
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
                                La forma de vestir comunica seriedad, formalidad o pertenencia a un grupo social incluso antes de hablar. Por ejemplo, usar ropa formal en una entrevista transmite respeto hacia la situación.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#f7f5f0] p-5">
                            <h3 className="font-bold text-[#111827]">
                                Protocolo
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Son las normas y comportamientos esperados en cada contexto social, que indican jerarquía y formalidad, como ponerse de pie al saludar a una autoridad.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-[#f7f5f0] p-5">
                            <h3 className="font-bold text-[#111827]">
                                Saludo
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">
                                Es la forma de establecer contacto e iniciar una interacción. Un saludo firme suele transmitir seguridad, mientras que uno débil o evasivo puede interpretarse como inseguridad.
                            </p>
                        </div>

                    </div>

                </section>

            </section>

        </main>
    );
}

export default ComunicacionNoVerbal;