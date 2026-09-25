import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function FuncionesLenguaje() {

    const funciones = [
        {
            titulo: "Función referencial",
            texto: "Está centrada en el contexto, es decir, en la realidad de la que se habla. Su función es transmitir información objetiva y verificable, dejando de lado las emociones o intenciones del emisor. Es la función predominante en textos informativos, científicos o noticiosos, donde lo que importa es la exactitud del dato. Un ejemplo claro sería una frase como: \"El agua hierve a 100 grados centígrados a nivel del mar\", donde no hay opinión ni emoción de por medio, solo un hecho comprobable."
        },
        {
            titulo: "Función emotiva",
            texto: "Está centrada en el emisor, es decir, en la persona que habla. Su objetivo es expresar sentimientos, estados de ánimo, actitudes o emociones propias, más que transmitir información objetiva. Se reconoce fácilmente porque suele ir cargada de exclamaciones, interjecciones o un tono emocional marcado. Un ejemplo sería cuando alguien recibe una buena noticia y exclama: \"¡Qué alegría verte, no sabía que vendrías!\". Aquí lo importante no es la información en sí, sino la emoción que el emisor está dejando ver a través de sus palabras."
        },
        {
            titulo: "Función apelativa",
            texto: "Está centrada en el receptor, es decir, en la persona a quien va dirigido el mensaje. Busca influir directamente en el otro, ya sea a través de órdenes, sugerencias o apelando a sus emociones para conseguir una reacción o un cambio de comportamiento. Es la función que predomina en la publicidad, en los mensajes de motivación y en las instrucciones cotidianas. Un ejemplo sería: \"Cierra la puerta, por favor\", donde claramente se espera que el receptor realice una acción concreta a partir del mensaje recibido."
        },
        {
            titulo: "Función fática",
            texto: "Está centrada en el canal, es decir, en el medio físico o tecnológico por el cual se establece la comunicación. Su objetivo no es transmitir información relevante, sino iniciar, mantener, verificar o cerrar el contacto comunicativo entre emisor y receptor. Es la función que usamos constantemente sin darnos cuenta, sobre todo al inicio o cierre de una conversación. Ejemplos comunes son: \"¿Aló?\", \"¿Me escuchas?\", \"¿Sigues ahí?\" o incluso un simple \"ajá\" mientras alguien nos habla por teléfono, que sirve únicamente para confirmar que el canal de comunicación sigue abierto."
        },
        {
            titulo: "Función metalingüística",
            texto: "Está centrada en el código, es decir, en el propio sistema de signos que se está utilizando para comunicarse. Se usa el lenguaje para hablar sobre el lenguaje mismo, ya sea definiendo, explicando o aclarando el significado de una palabra o expresión. Es la función que empleamos, por ejemplo, cuando alguien no entiende un término y pregunta: \"¿Qué significa la palabra 'asertivo'?\", o cuando un profesor explica el significado de un concepto dentro de una clase."
        },
        {
            titulo: "Función poética",
            texto: "Está centrada en el mensaje mismo, en la forma en que este se construye. Su propósito es embellecer el lenguaje, jugando con el orden de las palabras, el ritmo, las figuras retóricas o el sonido, más allá del simple contenido informativo. Es la función predominante en la poesía, la publicidad creativa y ciertos discursos literarios. Un ejemplo sería la frase \"El carro, rojo, maravilloso\", donde el orden poco convencional de las palabras y la pausa entre ellas buscan generar un efecto estético particular en quien lo escucha o lee."
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
                            key={funcion.titulo}
                            className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                        >

                            <span className="text-sm font-bold text-[#0063f8]">
                                0{index + 1}
                            </span>

                            <h2 className="mt-3 text-2xl font-bold text-[#111827]">
                                {funcion.titulo}
                            </h2>

                            <p className="mt-3 leading-7 text-slate-600">
                                {funcion.texto}
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

                    <p className="mt-4 leading-8 text-slate-300">
                        Roman Osipovich Jakobson nació en Moscú el 11 de octubre de 1896, en el seno de una familia judía, y falleció en Boston el 18 de julio de 1982, dejando tras de sí una de las trayectorias más influyentes dentro de la lingüística del siglo XX. Desde muy joven mostró un interés particular por la poesía y el lenguaje, algo que marcaría el rumbo de toda su carrera intelectual. En 1915 participó en la fundación del Círculo Lingüístico de Moscú, un espacio de discusión académica en torno al lenguaje y la literatura, y en 1917, con apenas 18 años, contribuyó a la creación de la Sociedad para el Estudio del Lenguaje Poético de Leningrado (OPOIAZ), lo que demuestra que su vocación por el estudio del lenguaje se manifestó desde una edad temprana. Durante esta etapa formativa estudió en el Instituto Lázarev de Lenguas Orientales de Moscú, ampliando su formación más allá del ruso y las lenguas eslavas.
                    </p>

                </section>

            </section>

        </main>
    );
}

export default FuncionesLenguaje;