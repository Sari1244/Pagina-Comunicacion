import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function TiposComunicacion() {

    return (
        <main className="min-h-screen bg-[#f7f5f0]">

            <section className="mx-auto max-w-6xl px-6 py-16">

                {/* VOLVER */}
                <Link
                    to="/tematicas"
                    className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0063f8] transition hover:gap-3"
                >
                    <ArrowLeft size={18} />
                    Volver a Temáticas
                </Link>


                {/* ENCABEZADO */}
                <div className="mb-12">

                    <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#0063f8]">
                        Temática
                    </p>

                    <h1 className="text-5xl font-bold tracking-tight text-[#111827]">
                        Tipos de comunicación
                    </h1>

                    <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                        Antes de entrar en detalle, vale la pena entender que no todos comunicamos de la misma manera, y que la forma en que lo hacemos tiene consecuencias directas en nuestras relaciones y en nuestra propia salud emocional.
                    </p>

                </div>


                {/* CONTENIDO */}
                <div className="space-y-6">

                    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                        <h2 className="mb-4 text-2xl font-bold text-[#111827]">
                            Comunicación agresiva
                        </h2>

                        <p className="leading-8 text-slate-600">
                            Este estilo se caracteriza por imponer el propio punto de vista sobre el del otro, sin importar cómo se sienta la persona que recibe el mensaje. El emisor se prioriza a sí mismo ("Impongo → Yo"), actuando sin ningún filtro emocional: dice lo que piensa de la forma más directa posible, sin medir el impacto de sus palabras ni el tono con el que las dice. Suele manifestarse a través de gritos, interrupciones, órdenes tajantes, descalificaciones o incluso amenazas veladas. Un ejemplo cotidiano sería un jefe que le dice a un empleado: "¡Esto está mal hecho, no sé cómo pudiste equivocarte así, hazlo de nuevo ya!", sin dar espacio a explicación ni mostrar ningún tipo de consideración. La consecuencia de este estilo es que hiere emocionalmente al otro, genera conflicto, deteriora la confianza en la relación y, en contextos como el escolar, puede derivar en situaciones de bullying, donde el agresor normaliza el imponerse sobre los demás como forma de relacionarse.
                        </p>

                    </section>


                    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                        <h2 className="mb-4 text-2xl font-bold text-[#111827]">
                            Comunicación pasiva
                        </h2>

                        <p className="leading-8 text-slate-600">
                            Aquí ocurre justo lo contrario: el sumiso cede su espacio al otro ("Sumiso → Otro"), evitando a toda costa expresar lo que realmente piensa o siente por miedo al conflicto, al rechazo o a la reacción del otro. La persona pasiva suele decir "sí" cuando en realidad quiere decir "no", evita el contacto visual, habla en voz baja y se disculpa constantemente, incluso cuando no ha hecho nada malo. Un ejemplo sería alguien a quien un compañero le pide constantemente "prestado" dinero sin devolverlo, y en lugar de decir algo, simplemente responde "no importa, tranquilo" para no incomodar, aunque por dentro sienta molestia. La consecuencia de este comportamiento repetido es frustración interna, baja autoestima, dudas constantes sobre uno mismo y una tendencia al maltrato hacia sí mismo, ya que la persona termina sintiendo que sus necesidades y emociones no importan. Con el tiempo, este patrón puede derivar en cuadros de depresión o ansiedad, porque la persona vive reprimiendo lo que siente.
                        </p>

                    </section>


                    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                        <h2 className="mb-4 text-2xl font-bold text-[#111827]">
                            Comunicación pasivo-agresiva
                        </h2>

                        <p className="leading-8 text-slate-600">
                            Este estilo es más difícil de identificar porque no confronta directamente, pero ataca de forma indirecta a través de puyas indirectas, ironías, burlas, sarcasmo o sátira. Quien comunica así no dice abiertamente lo que le molesta, pero lo deja entrever con comentarios cargados de doble intención. Un ejemplo típico sería, después de que alguien llega tarde a una reunión, decir con tono sarcástico: "Qué bueno que decidiste acompañarnos hoy", en lugar de simplemente expresar "me molestó que llegaras tarde". Es, en esencia, una agresión disfrazada de pasividad: la persona evita el conflicto directo, pero igualmente expresa su malestar de una forma que puede generar tensión, confusión o resentimiento en la otra persona, quien muchas veces ni siquiera tiene claro qué fue lo que la ofendió.
                        </p>

                    </section>


                    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                        <h2 className="mb-4 text-2xl font-bold text-[#111827]">
                            Comunicación agresivo-pasiva
                        </h2>

                        <p className="leading-8 text-slate-600">
                            Este estilo funciona por impulso: la persona explota emocionalmente ante una situación, sin filtrar lo que dice ni cómo lo dice, y después se arrepiente o se autoflagela emocionalmente por lo que dijo o hizo. Es un vaivén entre la reacción impulsiva y la culpa posterior. Un ejemplo sería alguien que, en medio de una discusión, grita cosas hirientes que en realidad no piensa, y minutos después se siente profundamente mal, se disculpa de forma excesiva y se castiga mentalmente por haber "perdido el control". Este ciclo resulta desgastante tanto para la persona que lo vive como para quienes la rodean, ya que genera inestabilidad en la relación y un patrón de arrepentimiento constante que rara vez se traduce en un cambio real de comportamiento si no se trabaja conscientemente.
                        </p>

                    </section>


                    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">

                        <h2 className="mb-4 text-2xl font-bold text-[#111827]">
                            Comunicación asertiva
                        </h2>

                        <p className="leading-8 text-slate-600">
                            Es el equilibrio entre los extremos anteriores, y se considera el estilo más saludable de comunicación. Se caracteriza por ser clara, directa y empática: la persona dice exactamente lo que piensa y siente, sin rodeos ni ambigüedades, pero al mismo tiempo respeta y considera los sentimientos del otro. Se apoya en la inteligencia emocional para transmitir la intención real detrás del mensaje, es decir, la persona primero identifica y regula lo que siente, y luego lo expresa de forma consciente, sin dejarse llevar por el impulso ni reprimirlo. Un ejemplo de comunicación asertiva sería decirle a un amigo: "Me molestó que llegaras tarde sin avisar, me hubiera gustado que me escribieras", en lugar de gritarle (agresivo), quedarse callado y molesto por dentro (pasivo), o hacer un comentario sarcástico al respecto (pasivo-agresivo).

                            Este estilo se sostiene en tres pilares fundamentales. El primero es la palabra correcta, que consiste en decir lo que realmente se quiere decir, sin disfrazar el mensaje ni suavizarlo tanto que pierda su sentido, ni tampoco cargarlo de agresividad innecesaria; por ejemplo, decir "necesito que terminemos este proyecto a tiempo" en lugar de "siempre dejas todo para último momento" (que suena acusatorio) o de quedarse callado esperando que la otra persona lo adivine. El segundo pilar es la entonación precisa, que implica que el tono de voz acompañe el mensaje que se quiere transmitir: no es lo mismo decir algo con un tono calmado y firme que con un tono elevado o, por el contrario, tan bajo que transmita inseguridad; la entonación asertiva es serena pero segura. El tercer pilar son las acciones coherentes y congruentes, es decir, que lo que la persona hace confirme lo que dice: si alguien afirma que va a mejorar en algo, sus acciones posteriores deben reflejar ese compromiso, porque de lo contrario el mensaje pierde credibilidad, sin importar qué tan bien haya sido dicho.
                            <br /><br />
                            Cuando estos tres elementos —palabra, entonación y acción— están alineados, el mensaje comunica respeto genuino, tanto hacia quien habla como hacia quien escucha, y es precisamente esa coherencia la que distingue a la comunicación asertiva de todos los demás estilos: no busca imponerse ni desaparecer, sino expresarse con honestidad y consideración al mismo tiempo.
                            <br /><br />
                            Entender estos estilos es apenas el primer paso. El siguiente es entender para qué usamos el lenguaje en cada situación, y ahí es donde entra el modelo de Roman Jakobson.
                        </p>
                        <br /><br />
                    </section>
                    
                </div>

            </section>

        </main>
    );
}

export default TiposComunicacion;