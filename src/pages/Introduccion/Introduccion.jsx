import imagenIntroduccion from "../../assets/introduccion.jpg";

function Introduccion() {
    return (
        <div className="min-h-screen bg-[#f7f5f0]">

            {/* HERO */}
            <section className="border-b border-slate-200 px-6 py-20 text-center">

                <p className="mb-3 text-sm tracking-wide text-[#0063f8]">
                    Proyecto de comunicación
                </p>

                <h1 className="mx-auto max-w-3xl font-serif text-5xl leading-tight text-slate-900 md:text-6xl">
                    Introducción a la Comunicación
                </h1>

                <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">
                    Explora todo sobre la comunicación con este blog.
                </p>

            </section>


            <div className="mx-auto max-w-4xl px-6 py-16">


                {/* IMAGEN PRINCIPAL */}
                <div className="mb-16 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">

                    <img
                        src={imagenIntroduccion}
                        alt="Introducción a la comunicación"
                        className="h-auto max-h-137.5 w-full object-contain"
                    />

                </div>


                <div className="space-y-16">

                    {/* ¿QUÉ ES LA COMUNICACIÓN? */}
                    <section className="border-l-2 border-[#0063f8] pl-6">

                        <p className="leading-relaxed text-slate-600">
                            Cuando empezamos a pensar en la comunicación, nos damos cuenta
                            que es algo que hacemos todo el tiempo sin detenernos
                            realmente a analizarlo. Hablamos, escuchamos, escribimos,
                            hacemos gestos, cambiamos el tono de voz... y casi nunca nos
                            preguntamos qué hay detrás de todo eso. La comunicación no es
                            solo transmitir información de una persona a otra; es un proceso
                            mucho más complejo en el que intervienen la intención, la
                            emoción, el contexto y hasta el silencio. Por eso, en esta
                            entrada quiero recopilar de forma ordenada los temas que hemos
                            venido trabajando en clase, para entender no solo qué es
                            comunicarnos, sino cómo lo hacemos y por qué a veces algo tan
                            cotidiano puede volverse tan complicado.

                            <br /><br />

                            Todo parte de una idea central: el respeto. La forma en que
                            decimos las cosas, el tono que usamos y las acciones que las
                            acompañan determinan si realmente estamos comunicando con
                            respeto o si, sin darnos cuenta, estamos hiriendo, evadiendo o
                            imponiendo. De ahí nace el primer gran tema: los estilos de
                            comunicación.
                        </p>


                        <h2 className="mb-4 mt-8 font-serif text-2xl text-slate-900">
                            ¿Qué es la comunicación?
                        </h2>


                        <p className="leading-relaxed text-slate-600">
                            La comunicación es el proceso mediante el cual dos o más seres
                            vivos intercambian información, ideas, sentimientos o
                            significados a través de un sistema compartido de signos,
                            símbolos o comportamientos. No se trata únicamente del acto de
                            hablar o escribir, sino de un fenómeno mucho más amplio y
                            complejo que involucra a un emisor, un mensaje, un receptor, un
                            canal por el cual ese mensaje viaja, un código compartido que
                            permite que ambas partes se entiendan, y un contexto que le da
                            sentido a todo lo anterior. Cuando cualquiera de estos elementos
                            falla o se ve interferido, la comunicación puede distorsionarse,
                            generando lo que se conoce como ruido comunicativo.

                            <br /><br />

                            Desde una perspectiva más amplia, la comunicación puede
                            entenderse como una necesidad humana fundamental. El ser humano
                            es, por naturaleza, un ser social, y la comunicación es la
                            herramienta que le permite relacionarse con otros, construir
                            vínculos, transmitir conocimiento, expresar emociones y
                            organizarse en sociedad. A lo largo de la historia, esta
                            capacidad ha evolucionado desde formas primitivas como los
                            gestos, los sonidos y las señales visuales, hasta sistemas
                            altamente complejos como el lenguaje verbal, la escritura y,
                            más recientemente, los medios digitales.

                            <br /><br />

                            Es importante señalar que la comunicación no siempre es verbal.
                            Gran parte de lo que las personas transmiten ocurre a través de
                            elementos no verbales: el tono de voz, las expresiones faciales,
                            la postura corporal, la distancia física que se mantiene con el
                            interlocutor o incluso el silencio. De hecho, numerosos estudios
                            en el campo de la psicología y la lingüística sostienen que una
                            parte significativa del mensaje que se percibe en una interacción
                            proviene de estos componentes no verbales, más allá de las
                            palabras que se pronuncian. Por esta razón, comprender la
                            comunicación implica ir más allá del contenido explícito de un
                            mensaje y prestar atención a la forma, el tono y las acciones
                            que lo acompañan.

                            <br /><br />

                            Asimismo, la comunicación cumple distintas funciones según la
                            intención con la que se emite un mensaje. Puede buscar informar,
                            persuadir, expresar un sentimiento, mantener contacto social,
                            embellecer una idea o incluso explicar el propio lenguaje. Esta
                            diversidad de funciones demuestra que comunicarse no es un acto
                            simple ni uniforme, sino un proceso que se adapta constantemente
                            según el contexto, el objetivo del emisor y la relación que
                            existe con el receptor.
                        </p>

                    </section>


                    {/* IMPORTANCIA */}
                    <section className="border-l-2 border-[#0063f8] pl-6">

                        <h2 className="mb-4 font-serif text-2xl text-slate-900">
                            Importancia de la comunicación
                        </h2>

                        <p className="leading-relaxed text-slate-600">
                            La importancia de la comunicación radica en que constituye la
                            base de toda relación humana, ya sea personal, académica, laboral
                            o social. Gracias a ella, las personas pueden compartir
                            conocimientos, resolver conflictos, expresar sus necesidades,
                            construir acuerdos y fortalecer los vínculos afectivos. Una
                            comunicación efectiva permite que los mensajes se transmitan con
                            claridad, reduciendo malentendidos y previniendo situaciones de
                            conflicto innecesario.

                            <br /><br />

                            En el ámbito emocional, la forma en que una persona se comunica
                            influye directamente en su bienestar psicológico y en la calidad
                            de sus relaciones. Estilos de comunicación poco saludables, como
                            la agresividad o la pasividad extrema, pueden generar
                            consecuencias negativas tanto para quien los emite como para
                            quien los recibe, mientras que una comunicación asertiva
                            favorece el respeto mutuo y la resolución sana de diferencias.
                            Por otro lado, en el ámbito social y cultural, la comunicación
                            es la que permite la transmisión de valores, tradiciones y
                            conocimientos de generación en generación, siendo un elemento
                            clave para la cohesión de cualquier comunidad.

                            <br /><br />

                            En definitiva, la comunicación no es solo una herramienta
                            funcional para transmitir información, sino un componente
                            esencial del desarrollo humano, tanto a nivel individual como
                            colectivo.
                        </p>

                    </section>


                    {/* 4 PILARES */}
                    <section className="border-l-2 border-[#0063f8] pl-6">

                        <h2 className="mb-4 font-serif text-2xl text-slate-900">
                            Los 4 pilares fundamentales de la comunicación
                        </h2>

                        <p className="leading-relaxed text-slate-600">
                            Los 4 pilares son: observar, escuchar, analizar y
                            percibir/experiencias. La observación es lo que nos da la
                            entrada al estado de la otra persona, se trata de prestar
                            atención a lo que está haciendo la persona, cómo se expresa su
                            cara, su cuerpo y su tono de voz. Después de observar viene
                            escuchar, no se trata solo de oír lo que dice sino de entender
                            por qué lo dice y qué es lo que busca la otra persona. Luego
                            está analizar, aquí es donde se usan los elementos que
                            obtenemos de escuchar y observar, logrando así comprender los
                            elementos de la comunicación de la otra persona. Por último
                            tenemos percibir/experiencias, entender los sentimientos de la
                            otra persona y conocer su intención es lo que nos demuestra que
                            la comunicación ha sido efectiva, para posteriormente poder
                            actuar y saber de qué manera comunicarnos con la persona según
                            el contexto.
                        </p>

                    </section>


                    {/* OBJETIVO DEL PROYECTO */}
                    <section className="border-l-2 border-[#0063f8] pl-6">

                        <h2 className="mb-4 font-serif text-2xl text-slate-900">
                            Objetivo del proyecto
                        </h2>

                        <p className="leading-relaxed text-slate-600">
                            El objetivo general del proyecto presentado es brindar una visión
                            integral y articulada sobre el proceso comunicativo, abordando
                            sus distintas dimensiones de manera progresiva y conectada.
                            Partiendo de una introducción sobre qué es la comunicación, el
                            texto busca guiar al lector a través de los distintos estilos de
                            comunicación (agresiva, pasiva, pasivo-agresiva,
                            agresivo-pasiva y asertiva), para luego profundizar en el modelo
                            teórico de Roman Jakobson y sus seis funciones del lenguaje,
                            contextualizando dicho modelo a través de la biografía de su
                            autor y contrastándolo con el modelo tradicional de comunicación.
                            Finalmente, el texto cierra abordando la comunicación no verbal
                            en sus distintas manifestaciones (kinesis, microexpresiones,
                            proxemia, paralenguaje, emblemas y ademanes, y el entorno
                            social), para concluir con una reflexión personal que busca
                            conectar todo el contenido teórico con la experiencia propia
                            del lector, evidenciando la aplicación práctica de estos
                            conceptos en la vida cotidiana.
                        </p>

                    </section>

                </div>

            </div>

        </div>
    );
}

export default Introduccion;