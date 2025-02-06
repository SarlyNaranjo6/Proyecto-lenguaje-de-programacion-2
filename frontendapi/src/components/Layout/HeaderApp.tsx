import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import logo from "../../assets/images/MangaKomi.logo1.png";
import fondo from "../../assets/images/Fondo.png";

function HeaderApp() {

    const [menuOpen, setmenuOpen] = useState(false);


    return (
        <header 
            className="flex items-center justify-between bg-lila-00 p-4 text-white shadow-lg hover:shadow-xl transition-shadow duration-300"
            style={{
                backgroundImage: `linear-gradient(rgba(75, 0, 130, 0.7), rgba(75, 0, 130, 0.7)), url(${fondo})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center'
            }} 
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <img src={logo} alt="MangaKami" className="h-12 w-12 transform transition-transform duration-300 hover:scale-110" />
                <span className="text-2xl font-extrabold tracking-tight uppercase">MangaKami</span>
            </div>

            {/* Menú del perfil del usuario */}
            <div className="relative">
                {/* Botón para abrir/cerrar menú */}
                <button
                    onClick={() => setmenuOpen(!menuOpen)}
                    className="flex items-center gap-2 p-3 rounded-full hover:bg-violet-400 focus:outline-none transition-all duration-200 transform hover:scale-105"
                >
                    <UserCircleIcon className="h-8 w-8 text-white" />
                </button>

                {/* Dropdown Menu */}
                {menuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-violet-200 rounded-lg shadow-lg overflow-hidden transform transition-all duration-200">
                        <a
                            href="/perfil"
                            className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 transition-colors duration-200"
                        >
                            Mi Perfil
                        </a>
                        <button
                            onClick={() => alert("Cerrando sesión...")}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-200 transition-colors duration-200"
                        >
                            Cerrar sesión
                        </button>
                    </div>
                )}
            </div>
        </header>
    );
}

export default HeaderApp;
