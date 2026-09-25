function Reto() {
    return (
        <div className="bg-[#f7f5f0] min-h-screen">

            {/* Hero */}
            <section className="border-b border-slate-200 px-6 py-20 text-center">
                <p className="text-sm tracking-wide text-[#0063f8] mb-3">
                    Proyecto de comunicación
                </p>
                <h1 className="font-serif text-5xl md:text-6xl text-slate-900 max-w-3xl mx-auto leading-tight">
                    Título principal del blog
                </h1>
                <p className="text-lg text-slate-500 mt-5 max-w-xl mx-auto">
                    Subtítulo o frase introductoria que resume de qué trata el proyecto.
                </p>
            </section>

            <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">

                {/* ¿Qué es la comunicación? */}
                <section className="border-l-2 border-[#0063f8] pl-6">
                    <h2 className="font-serif text-2xl text-slate-900 mb-4">
                        ¿Qué es la comunicación?
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        Aquí va la información sobre la definición de comunicación.
                    </p>
                </section>

                {/* Importancia */}
                <section className="border-l-2 border-[#0063f8] pl-6">
                    <h2 className="font-serif text-2xl text-slate-900 mb-4">
                        Importancia de la comunicación
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        Aquí va la información sobre por qué es importante la comunicación.
                    </p>
                </section>

                {/* Elementos (sí es secuencia, va numerado) */}
                <section className="border-l-2 border-[#0063f8] pl-6">
                    <h2 className="font-serif text-2xl text-slate-900 mb-4">
                        Elementos de la comunicación
                    </h2>
                    <ol className="space-y-3">
                        {["Elemento 1", "Elemento 2", "Elemento 3", "Elemento 4"].map((el, i) => (
                            <li key={i} className="flex gap-4 text-slate-600">
                                <span className="font-serif text-[#0063f8]">
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span>{el}</span>
                            </li>
                        ))}
                    </ol>
                </section>

                {/* Tipos de comunicación */}
                <section className="border-l-2 border-[#0063f8] pl-6">
                    <h2 className="font-serif text-2xl text-slate-900 mb-4">
                        Tipos de comunicación
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        Aquí va la información sobre los tipos de comunicación.
                    </p>
                </section>

                {/* Objetivo del proyecto */}
                <section className="border-l-2 border-[#0063f8] pl-6">
                    <h2 className="font-serif text-2xl text-slate-900 mb-4">
                        Objetivo del proyecto
                    </h2>
                    <p className="text-slate-600 leading-relaxed">
                        Aquí va la información sobre el propósito de este trabajo/reto.
                    </p>
                </section>

            </div>
        </div>
    );
}

export default Reto;