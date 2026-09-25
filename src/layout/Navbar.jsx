import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    const enlaces = [
        {
            to: "/",
            texto: "Introducción"
        },
        {
            to: "/tematicas",
            texto: "Temáticas"
        },
        {
            to: "/reto",
            texto: "Reto"
        },
        {
            to: "/evidencias",
            texto: "Evidencias"
        },
        {
            to: "/integrantes",
            texto: "Integrantes"
        },
        {
            to: "/reflexion",
            texto: "Reflexión"
        }
    ];

    return (

        <nav className="max-w-full overflow-x-auto scrollbar-none">

            <div className="flex min-w-max items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">

                {enlaces.map((enlace) => {

                    const activo = location.pathname === enlace.to;

                    return (

                        <Link
                            key={enlace.to}
                            to={enlace.to}
                            className={`
                                relative rounded-full px-4 py-2.5
                                text-sm font-medium
                                transition-all duration-300
                                ${
                                    activo
                                        ? "bg-[#0063f8] text-white shadow-md shadow-[#0063f8]/20"
                                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                                }
                            `}
                        >

                            {enlace.texto}

                        </Link>

                    );

                })}

            </div>

        </nav>

    );
}

export default Navbar;
