import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Header() {

    return (

        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111827] shadow-lg">

            <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4">

                {/* LOGO */}
                <Link
                    to="/"
                    className="group flex shrink-0 items-center gap-3"
                >

                    {/* Detalle azul */}
                    <span className="h-9 w-1 rounded-full bg-[#0063f8] transition-all duration-300 group-hover:h-11"></span>

                    <div>

                        <h1 className="font-serif text-2xl font-semibold tracking-tight text-[#f7f5f0] transition-colors duration-300 group-hover:text-white">
                            ComuniPasión
                        </h1>

                        <p className="text-[9px] font-medium uppercase tracking-[0.3em] text-slate-400">
                            Proyecto académico
                        </p>

                    </div>

                </Link>


                {/* NAVBAR */}
                <Navbar />

            </div>

        </header>
    );
}

export default Header;

