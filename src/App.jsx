import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import Introduccion from "./pages/Introduccion/Introduccion";
import Reto from "./pages/Reto/Reto";
import Evidencias from "./pages/Evidencias/Evidencias";
import Integrantes from "./pages/Integrantes/Integrantes";
import Reflexion from "./pages/Reflexion/Reflexion";
import Sariah from "./pages/Evidencias/Sariah/Sariah";
import Fabian from "./pages/Evidencias/Fabian/Fabian";
import Tematicas from "./pages/Tematicas/Tematicas";
import TiposComunicacion from "./pages/Tematicas/TiposComunicacion";
import FuncionesLenguaje from "./pages/Tematicas/FuncionesLenguaje";
import ComunicacionNoVerbal from "./pages/Tematicas/ComunicacionNoVerbal";

function App() {

    return (

        <BrowserRouter>

            <Layout>

                <Routes>

                    <Route
                        path="/"
                        element={<Introduccion />}
                    />

                    <Route path="/Tematicas" element={<Tematicas />} />

                    <Route
                        path="/Tematicas/tipos-comunicacion"
                        element={<TiposComunicacion />}
                    />

                    <Route
                        path="/Tematicas/funciones-lenguaje"
                        element={<FuncionesLenguaje />}
                    />

                    <Route
                        path="/Tematicas/comunicacion-no-verbal"
                        element={<ComunicacionNoVerbal />}
                    />

                    <Route
                        path="/reto"
                        element={<Reto />}
                    />

                    <Route
                        path="/evidencias"
                        element={<Evidencias />}
                    />

                    <Route
                        path="/evidencias/sariah"
                        element={<Sariah />}
                    />

                    <Route
                        path="/evidencias/fabian"
                        element={<Fabian />}
                    />

                    <Route
                        path="/integrantes"
                        element={<Integrantes />}
                    />

                    <Route
                        path="/reflexion"
                        element={<Reflexion />}
                    />

                </Routes>

            </Layout>

        </BrowserRouter>

    );
}

export default App;