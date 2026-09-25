function Integrantes() {

    const integrantes = [
        {
            nombre: "Nombre del integrante 1",
            rol: "Integrante",
            descripcion:
                "Aquí puedes escribir una pequeña descripción sobre esta persona, sus intereses, habilidades y el aporte que realiza al proyecto.",
            formacion: "Estudiante de Desarrollo de Software",
            intereses: "Diseño, creatividad y tecnología"
        },
        {
            nombre: "Nombre del integrante 2",
            rol: "Integrante",
            descripcion:
                "Aquí puedes escribir una pequeña descripción sobre esta persona, sus intereses, habilidades y el aporte que realiza al proyecto.",
            formacion: "Estudiante de Desarrollo de Software",
            intereses: "Programación, comunicación y tecnología"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f7f5f0] text-slate-900">

            {/* HERO */}
            <section className="relative overflow-hidden border-b border-slate-200">

                {/* Decoraciones */}
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#0063f8]/10 blur-3xl"></div>

                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#0063f8]/5 blur-3xl"></div>

                <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">

                    <div className="max-w-3xl">

                        <div className="mb-6 flex items-center gap-3">

                            <span className="h-px w-10 bg-[#0063f8]"></span>

                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#0063f8]">
                                Nuestro equipo
                            </p>

                        </div>

                        <h1 className="font-serif text-5xl font-medium leading-tight tracking-tight md:text-7xl">
                            Integrantes
                        </h1>

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-500 md:text-xl">
                            Conoce a las personas que hacen parte de este
                            proyecto y aportan sus ideas, habilidades y
                            creatividad al trabajo en equipo.
                        </p>

                    </div>

                </div>

            </section>


            {/* CONTENIDO */}
            <main className="mx-auto max-w-6xl px-6 py-20 md:py-28">

                <div className="grid gap-8 lg:grid-cols-2">

                    {integrantes.map((integrante, index) => (

                        <article
                            key={integrante.nombre}
                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            {/* AVATAR */}
                            <div className="relative flex justify-center overflow-hidden bg-[#eaf1ff] px-8 py-12">

                                {/* Número */}
                                <div className="absolute left-7 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-white font-serif text-sm font-semibold text-[#0063f8] shadow-sm">
                                    0{index + 1}
                                </div>


                                {/* Decoración */}
                                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border-20  border-white/40"></div>

                                <div className="relative">

                                    {/* Círculo del avatar */}
                                    <div className="flex h-44 w-44 items-center justify-center rounded-full border-8 border-white bg-[#0063f8] shadow-lg transition duration-500 group-hover:scale-105">

                                        {/* Icono de usuario */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="white"
                                            strokeWidth="1.5"
                                            className="h-24 w-24"
                                        >
                                            <circle
                                                cx="12"
                                                cy="8"
                                                r="4"
                                            />

                                            <path
                                                d="M4 21a8 8 0 0 1 16 0"
                                            />
                                        </svg>

                                    </div>


                                    {/* Punto decorativo */}
                                    <div className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full border-4 border-white bg-[#7db0ff]"></div>

                                </div>

                            </div>


                            {/* INFORMACIÓN */}
                            <div className="p-8 md:p-9">

                                {/* Nombre */}
                                <div className="mb-6">

                                    <span className="inline-flex rounded-full bg-[#0063f8]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0063f8]">
                                        {integrante.rol}
                                    </span>

                                    <h2 className="mt-3 font-serif text-3xl font-medium text-slate-900">
                                        {integrante.nombre}
                                    </h2>

                                </div>


                                {/* Descripción */}
                                <p className="leading-7 text-slate-500">
                                    {integrante.descripcion}
                                </p>


                                {/* Separador */}
                                <div className="my-7 h-px bg-slate-200"></div>


                                {/* FORMACIÓN */}
                                <div className="flex gap-4">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0063f8]/10 text-[#0063f8]">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            className="h-5 w-5"
                                        >
                                            <path d="M22 10v6" />
                                            <path d="m2 10 10-5 10 5-10 5L2 10Z" />
                                            <path d="M6 12v5c3 2 9 2 12 0v-5" />
                                        </svg>

                                    </div>

                                    <div>

                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Formación
                                        </p>

                                        <p className="mt-1 text-sm text-slate-600">
                                            {integrante.formacion}
                                        </p>

                                    </div>

                                </div>


                                {/* INTERESES */}
                                <div className="mt-5 flex gap-4">

                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0063f8]/10 text-[#0063f8]">

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            className="h-5 w-5"
                                        >
                                            <path d="M20.8 8.5c0 5.5-8.8 10-8.8 10s-8.8-4.5-8.8-10a4.7 4.7 0 0 1 8.8-2.3A4.7 4.7 0 0 1 20.8 8.5Z" />
                                        </svg>

                                    </div>

                                    <div>

                                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                                            Intereses
                                        </p>

                                        <p className="mt-1 text-sm text-slate-600">
                                            {integrante.intereses}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </article>

                    ))}

                </div>


                {/* FRASE FINAL */}
                <section className="mt-16 overflow-hidden rounded-3xl bg-[#e9f1ff]">

                    <div className="flex flex-col items-center gap-6 px-8 py-12 text-center md:flex-row md:justify-center md:text-left">

                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0063f8] text-white">

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                className="h-7 w-7"
                            >
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>

                        </div>


                        <div>

                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0063f8]">
                                Trabajo en equipo
                            </p>

                            <h2 className="mt-2 font-serif text-2xl text-slate-900 md:text-3xl">
                                Dos personas, diferentes ideas,
                                <br className="hidden md:block" />
                                un mismo proyecto.
                            </h2>

                        </div>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default Integrantes;

